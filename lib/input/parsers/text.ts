import { normalize } from "../normalize";
import type { ExtractedContent } from "../types";

export async function parseTextFile(file: File): Promise<ExtractedContent> {
  const text = await file.text();
  return {
    text: normalize(text),
    source: { kind: "file", label: file.name },
  };
}
