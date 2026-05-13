import type { ExtractedContent } from "./types";
import { normalize } from "./normalize";

type ApiResponse =
  | {
      ok: true;
      title: string | null;
      byline: string | null;
      siteName: string | null;
      text: string;
      length: number;
    }
  | { ok: false; error: string };

export async function extractFromUrl(
  url: string,
  signal?: AbortSignal,
): Promise<ExtractedContent> {
  const res = await fetch("/api/extract", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url }),
    signal,
  });
  const data = (await res.json().catch(() => ({
    ok: false as const,
    error: `HTTP ${res.status}`,
  }))) as ApiResponse;
  if (!data.ok) throw new Error(data.error);

  let host = "";
  try {
    host = new URL(url).hostname.replace(/^www\./, "");
  } catch {
    /* noop */
  }
  return {
    text: normalize(data.text),
    source: {
      kind: "url",
      label: data.siteName || host || "URL",
      title: data.title ?? undefined,
    },
  };
}
