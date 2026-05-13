const NBSP = / /g;
const CRLF = /\r\n?/g;
const SOFT_HYPHEN = /­/g;
const HYPHEN_BREAK = /(\w)-\n(\w)/g;
const SOFT_WRAP = /([^\n])\n(?!\n)([^\n])/g;
const INNER_SPACE = /[ \t]+/g;
const EXTRA_BLANK = /\n{3,}/g;

export function normalize(text: string): string {
  const cleaned = text
    .replace(SOFT_HYPHEN, "")
    .replace(NBSP, " ")
    .replace(CRLF, "\n")
    .replace(HYPHEN_BREAK, "$1$2")
    .replace(SOFT_WRAP, "$1 $2")
    .replace(INNER_SPACE, " ")
    .replace(EXTRA_BLANK, "\n\n")
    .trim();
  return paragraphize(cleaned);
}

const SENTENCES_PER_PARAGRAPH = 3;
const MIN_CHARS_TO_PARAGRAPHIZE = 400;
const SENTENCE_BOUNDARY =
  /([.!?。！？؟…]["')\]]*)\s+(?=[A-ZÀ-ſЀ-ӿ֐-׿؀-ۿ぀-ヿ一-鿿가-힯])/g;
const CJK_SENTENCE_BOUNDARY = /([。！？…]["')\]]*)(?=\S)/g;
const MARK = "";

/**
 * If the text arrives as one wall (common for PDFs and many URL extractions),
 * group sentences into short paragraphs so the reader can breathe.
 * Skip when the source already has its own paragraph breaks.
 */
function paragraphize(text: string): string {
  if (text.includes("\n\n")) return text;
  if (text.length < MIN_CHARS_TO_PARAGRAPHIZE) return text;

  const lines = text.split("\n").map((l) => l.trim()).filter(Boolean);
  const out: string[] = [];
  for (const line of lines) {
    const marked = line
      .replace(SENTENCE_BOUNDARY, `$1${MARK}`)
      .replace(CJK_SENTENCE_BOUNDARY, `$1${MARK}`);
    const sentences = marked.split(MARK).map((s) => s.trim()).filter(Boolean);
    for (let i = 0; i < sentences.length; i += SENTENCES_PER_PARAGRAPH) {
      out.push(sentences.slice(i, i + SENTENCES_PER_PARAGRAPH).join(" "));
    }
  }
  return out.join("\n\n");
}
