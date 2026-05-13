import { normalize } from "../normalize";
import type { ExtractedContent } from "../types";

export async function parseEpub(file: File): Promise<ExtractedContent> {
  const JSZip = (await import("jszip")).default;
  const zip = await JSZip.loadAsync(await file.arrayBuffer());

  const containerFile = zip.file("META-INF/container.xml");
  let opfPath: string | undefined;
  if (containerFile) {
    const containerXml = await containerFile.async("string");
    opfPath = /full-path="([^"]+)"/.exec(containerXml)?.[1];
  }

  let spine: string[] = [];
  let title: string | undefined;
  let baseDir = "";
  if (opfPath) {
    const opfFile = zip.file(opfPath);
    if (opfFile) {
      const opfXml = await opfFile.async("string");
      title = /<dc:title[^>]*>([^<]+)<\/dc:title>/i.exec(opfXml)?.[1]?.trim();
      const manifest = new Map<string, string>();
      for (const m of opfXml.matchAll(
        /<item\s+[^>]*id="([^"]+)"[^>]*href="([^"]+)"[^>]*\/>/gi,
      )) {
        manifest.set(m[1], m[2]);
      }
      baseDir = opfPath.includes("/")
        ? opfPath.slice(0, opfPath.lastIndexOf("/") + 1)
        : "";
      for (const m of opfXml.matchAll(/<itemref\s+[^>]*idref="([^"]+)"/gi)) {
        const href = manifest.get(m[1]);
        if (href) spine.push(baseDir + href);
      }
    }
  }

  if (spine.length === 0) {
    spine = Object.keys(zip.files).filter((p) => /\.x?html?$/i.test(p)).sort();
  }

  const parts: string[] = [];
  for (const path of spine) {
    const f = zip.file(path);
    if (!f) continue;
    const html = await f.async("string");
    const body = /<body[^>]*>([\s\S]*?)<\/body>/i.exec(html)?.[1] ?? html;
    const text = body
      .replace(/<(script|style)[\s\S]*?<\/\1>/gi, "")
      .replace(/<\/(p|div|h[1-6]|li|br|tr)>/gi, "\n\n")
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(/<[^>]+>/g, "")
      .replace(/&nbsp;/g, " ")
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)));
    if (text.trim()) parts.push(text);
  }

  return {
    text: normalize(parts.join("\n\n")),
    source: { kind: "file", label: file.name, title },
  };
}
