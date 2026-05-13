import { normalize } from "../normalize";
import type { ExtractedContent } from "../types";

let workerConfigured = false;

export async function parsePdf(file: File): Promise<ExtractedContent> {
  const pdfjs = await import("pdfjs-dist");
  if (!workerConfigured) {
    pdfjs.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
    workerConfigured = true;
  }
  const buf = await file.arrayBuffer();
  const doc = await pdfjs.getDocument({ data: new Uint8Array(buf) }).promise;
  const pages: string[] = [];
  try {
    for (let i = 1; i <= doc.numPages; i++) {
      const page = await doc.getPage(i);
      const content = await page.getTextContent();
      let buffer = "";
      for (const item of content.items) {
        if (!("str" in item)) continue;
        buffer += item.str;
        if ((item as { hasEOL?: boolean }).hasEOL) {
          buffer += "\n";
        } else if (!item.str.endsWith(" ")) {
          buffer += " ";
        }
      }
      pages.push(buffer);
      page.cleanup();
    }
  } finally {
    await doc.destroy();
  }
  return {
    text: normalize(pages.join("\n\n")),
    source: { kind: "file", label: file.name },
  };
}
