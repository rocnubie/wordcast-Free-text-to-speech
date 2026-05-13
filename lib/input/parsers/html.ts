import { normalize } from "../normalize";
import type { ExtractedContent } from "../types";

export async function parseHtmlFile(file: File): Promise<ExtractedContent> {
  const html = await file.text();
  const { Readability } = await import("@mozilla/readability");
  const doc = new DOMParser().parseFromString(html, "text/html");
  const clone = doc.cloneNode(true) as Document;
  const article = new Readability(clone).parse();
  const text = article?.textContent ?? doc.body?.textContent ?? "";
  return {
    text: normalize(text),
    source: {
      kind: "file",
      label: file.name,
      title: article?.title ?? undefined,
    },
  };
}
