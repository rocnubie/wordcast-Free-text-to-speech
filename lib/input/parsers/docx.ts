import { normalize } from "../normalize";
import type { ExtractedContent } from "../types";

export async function parseDocx(file: File): Promise<ExtractedContent> {
  const mammoth = await import("mammoth");
  const arrayBuffer = await file.arrayBuffer();
  const result = await mammoth.extractRawText({ arrayBuffer });
  return {
    text: normalize(result.value),
    source: { kind: "file", label: file.name },
  };
}
