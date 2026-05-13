import { Readability } from "@mozilla/readability";
import { parseHTML } from "linkedom";

const MAX_BYTES = 5 * 1024 * 1024;
const FETCH_TIMEOUT_MS = 8000;
const USER_AGENT = "Mozilla/5.0 (compatible; ReaderBot/1.0)";

type ExtractRequest = { url?: string };
type ExtractOk = {
  ok: true;
  title: string | null;
  byline: string | null;
  siteName: string | null;
  text: string;
  length: number;
};
type ExtractErr = { ok: false; error: string };

type PagesFunctionContext = { request: Request };
type PagesFunction = (
  ctx: PagesFunctionContext,
) => Response | Promise<Response>;

function json(body: ExtractOk | ExtractErr, init?: ResponseInit): Response {
  return new Response(JSON.stringify(body), {
    ...init,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
      ...(init?.headers ?? {}),
    },
  });
}

function isBlockedHost(hostname: string): boolean {
  const h = hostname.toLowerCase();
  if (h === "localhost") return true;
  if (
    h.endsWith(".local") ||
    h.endsWith(".internal") ||
    h.endsWith(".lan") ||
    h.endsWith(".home") ||
    h.endsWith(".arpa")
  )
    return true;
  const v4 = h.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/);
  if (v4) {
    const o = v4.slice(1).map(Number) as [number, number, number, number];
    if (o[0] === 10) return true;
    if (o[0] === 127) return true;
    if (o[0] === 0) return true;
    if (o[0] === 169 && o[1] === 254) return true;
    if (o[0] === 192 && o[1] === 168) return true;
    if (o[0] === 172 && o[1] >= 16 && o[1] <= 31) return true;
    if (o[0] >= 224) return true;
  }
  if (h.startsWith("[")) {
    if (
      h === "[::1]" ||
      h.startsWith("[fc") ||
      h.startsWith("[fd") ||
      h.startsWith("[fe80")
    )
      return true;
  }
  return false;
}

function validateUrl(raw: string): URL | { error: string } {
  let url: URL;
  try {
    url = new URL(raw);
  } catch {
    return { error: "Invalid URL" };
  }
  if (url.protocol !== "http:" && url.protocol !== "https:") {
    return { error: "Only http(s) URLs are supported" };
  }
  if (isBlockedHost(url.hostname)) return { error: "Blocked host" };
  return url;
}

async function fetchHtml(url: URL, signal: AbortSignal): Promise<string> {
  const res = await fetch(url.toString(), {
    signal,
    redirect: "follow",
    headers: {
      "User-Agent": USER_AGENT,
      Accept: "text/html,application/xhtml+xml,*/*;q=0.8",
      "Accept-Language": "en-US,en;q=0.9",
    },
  });
  if (!res.ok) throw new Error(`Upstream returned ${res.status}`);
  const ct = res.headers.get("content-type") ?? "";
  if (
    !/text\/html|application\/xhtml/i.test(ct) &&
    !ct.toLowerCase().startsWith("text/")
  ) {
    throw new Error(`Unsupported content type: ${ct || "unknown"}`);
  }
  if (!res.body) throw new Error("Empty response body");

  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let received = 0;
  let html = "";
  for (;;) {
    const { value, done } = await reader.read();
    if (done) break;
    received += value.byteLength;
    if (received > MAX_BYTES) {
      await reader.cancel();
      throw new Error("Response too large");
    }
    html += decoder.decode(value, { stream: true });
  }
  html += decoder.decode();
  return html;
}

function normalize(text: string): string {
  return text
    .replace(/ /g, " ")
    .replace(/[ \t]+/g, " ")
    .replace(/ ?\n ?/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

export const onRequestPost: PagesFunction = async (ctx) => {
  let body: ExtractRequest;
  try {
    body = (await ctx.request.json()) as ExtractRequest;
  } catch {
    return json({ ok: false, error: "Invalid JSON body" }, { status: 400 });
  }
  if (!body?.url) {
    return json({ ok: false, error: "Missing url" }, { status: 400 });
  }

  const validated = validateUrl(body.url);
  if ("error" in validated) {
    return json({ ok: false, error: validated.error }, { status: 400 });
  }

  const ac = new AbortController();
  const timer = setTimeout(() => ac.abort(), FETCH_TIMEOUT_MS);
  let html: string;
  try {
    html = await fetchHtml(validated, ac.signal);
  } catch (e) {
    const msg =
      e instanceof Error
        ? ac.signal.aborted
          ? "Upstream timed out"
          : e.message
        : "Fetch failed";
    return json({ ok: false, error: msg }, { status: 502 });
  } finally {
    clearTimeout(timer);
  }

  let parsed: ReturnType<Readability["parse"]>;
  try {
    const { document } = parseHTML(html);
    parsed = new Readability(document).parse();
  } catch {
    return json({ ok: false, error: "Could not parse page" }, { status: 422 });
  }
  if (!parsed || !parsed.textContent) {
    return json(
      { ok: false, error: "No readable content found" },
      { status: 422 },
    );
  }

  const text = normalize(parsed.textContent);
  if (!text) {
    return json(
      { ok: false, error: "No readable content found" },
      { status: 422 },
    );
  }

  return json({
    ok: true,
    title: parsed.title ?? null,
    byline: parsed.byline ?? null,
    siteName: parsed.siteName ?? null,
    text,
    length: text.length,
  });
};

export const onRequest: PagesFunction = () =>
  json(
    { ok: false, error: "Method not allowed" },
    { status: 405, headers: { Allow: "POST" } },
  );
