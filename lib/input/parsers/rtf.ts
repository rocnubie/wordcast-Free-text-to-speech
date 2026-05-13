import { normalize } from "../normalize";
import type { ExtractedContent } from "../types";

/**
 * Minimal RTF → plain text. Strips control words, groups, and hex escapes.
 * Good enough for documents — not a full RTF renderer.
 */
function stripRtf(rtf: string): string {
  return rtf
    .replace(/\\par[d]?/g, "\n")
    .replace(/\\line/g, "\n")
    .replace(/\\tab/g, "\t")
    .replace(/\\'[0-9a-f]{2}/gi, (m) =>
      String.fromCharCode(parseInt(m.slice(2), 16)),
    )
    .replace(/\\u(-?\d+)\??/g, (_, n) =>
      String.fromCharCode(Number(n) < 0 ? Number(n) + 65536 : Number(n)),
    )
    .replace(/\{\\\*?[^{}]*?\}/g, "")
    .replace(/\\[a-z]+-?\d*\s?/gi, "")
    .replace(/[{}]/g, "");
}

export async function parseRtfFile(file: File): Promise<ExtractedContent> {
  const raw = await file.text();
  return {
    text: normalize(stripRtf(raw)),
    source: { kind: "file", label: file.name },
  };
}
