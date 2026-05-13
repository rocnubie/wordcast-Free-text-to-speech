export type SourceKind = "file" | "url";

export type SourceMeta = {
  kind: SourceKind;
  label: string;
  title?: string;
};

export type ExtractedContent = {
  text: string;
  source: SourceMeta;
};
