import type { ExtractedContent } from "./types";

const MAX_FILE_BYTES = 25 * 1024 * 1024;

export const SUPPORTED_EXTENSIONS = [
  "pdf",
  "docx",
  "txt",
  "md",
  "markdown",
  "html",
  "htm",
  "rtf",
  "epub",
] as const;

export const ACCEPT_ATTR = [
  ".pdf",
  ".docx",
  ".txt",
  ".md",
  ".markdown",
  ".html",
  ".htm",
  ".rtf",
  ".epub",
  "text/plain",
  "text/markdown",
  "text/html",
  "text/rtf",
  "application/rtf",
  "application/pdf",
  "application/epub+zip",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
].join(",");

function getExt(name: string): string {
  const dot = name.lastIndexOf(".");
  return dot >= 0 ? name.slice(dot + 1).toLowerCase() : "";
}

export function isSupportedFile(file: File): boolean {
  return (SUPPORTED_EXTENSIONS as readonly string[]).includes(
    getExt(file.name),
  );
}

export async function parseFile(file: File): Promise<ExtractedContent> {
  if (file.size > MAX_FILE_BYTES) {
    throw new Error(
      `File too large (max ${Math.round(MAX_FILE_BYTES / 1024 / 1024)}MB)`,
    );
  }
  const ext = getExt(file.name);
  switch (ext) {
    case "pdf": {
      const { parsePdf } = await import("./parsers/pdf");
      return parsePdf(file);
    }
    case "docx": {
      const { parseDocx } = await import("./parsers/docx");
      return parseDocx(file);
    }
    case "txt":
    case "md":
    case "markdown": {
      const { parseTextFile } = await import("./parsers/text");
      return parseTextFile(file);
    }
    case "html":
    case "htm": {
      const { parseHtmlFile } = await import("./parsers/html");
      return parseHtmlFile(file);
    }
    case "rtf": {
      const { parseRtfFile } = await import("./parsers/rtf");
      return parseRtfFile(file);
    }
    case "epub": {
      const { parseEpub } = await import("./parsers/epub");
      return parseEpub(file);
    }
    default:
      throw new Error(`Unsupported file type: .${ext || "unknown"}`);
  }
}
