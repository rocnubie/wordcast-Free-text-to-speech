<div align="center">

[English](./README.md) · [简体中文](./README.zh-CN.md) · [**日本語**](./README.ja.md) · [Español](./README.es.md) · [Português (BR)](./README.pt-BR.md) · [한국어](./README.ko.md) · [Deutsch](./README.de.md) · [Français](./README.fr.md)

<br />

<a href="https://wordcast.app/ja">
  <img src="https://wordcast.app/readme/01-hero.webp" alt="Wordcast 無料テキスト読み上げ — 記事・PDF・URLをブラウザで音声読み上げ。登録不要・アップロード不要・文字数無制限" width="100%" />
</a>

<br /><br />

# Wordcast — 無料テキスト読み上げ

**ブラウザで動く無料の読み上げツール。登録不要、インストール不要、文字数無制限。**

**👉 [wordcast.app/ja](https://wordcast.app/ja)**

[![完全無料](https://img.shields.io/badge/✓%20完全無料-サブスク不要-22c55e?style=flat-square)]()
[![登録不要](https://img.shields.io/badge/✓%20登録不要-すぐ使える-22c55e?style=flat-square)]()
[![文字数無制限](https://img.shields.io/badge/✓%20文字数無制限-上限なし-22c55e?style=flat-square)]()
[![アップロード不要](https://img.shields.io/badge/✓%20アップロード不要-端末内処理-22c55e?style=flat-square)]()
[![プライバシー保護](https://img.shields.io/badge/✓%20プライバシー保護-データ送信なし-22c55e?style=flat-square)]()

<br />

[**Wordcast を開く →**](https://wordcast.app/ja) · [ブログ](https://wordcast.app/blog) · [プライバシー](https://wordcast.app/privacy) · [バグ報告](https://github.com/rocnubie/wordcast-Free-text-to-speech/issues)

</div>

---

## Wordcast について

**[Wordcast](https://wordcast.app/ja) は完全無料のブラウザ読み上げツールです。** テキストを貼り付けるか、PDF や Word ファイルをアップロードするか、URL を入力するだけで、デバイスにインストール済みの高品質な音声で読み上げます。登録不要、アップロード不要、文字数制限なし、AI サーバー課金なし。

インストール不要でブラウザから直接使えるため、学校・職場の PC でもすぐに使えます。毎日、世界中の学生、社会人、語学学習者、アクセシビリティユーザーが利用する成熟したプロダクトです。

**[wordcast.app/ja](https://wordcast.app/ja) を開くだけで使えます。** インストール不要、アカウント不要、ページを開いて「読み上げ」ボタンを押すだけです。

**Wordcast が選ばれる理由：**

- **完全無料・ずっと無料** — 隠れた有料プランなし
- **登録・アカウント不要** — 開いてすぐ使える
- **文字数無制限** — 記事まるごと、論文全文、どんな長さでも OK
- **テキストがデバイス外に出ない** — プライバシーを完全保護
- **インストール不要** — ブラウザだけで動く
- PDF、Word、EPUB、RTF、HTML、TXT、Markdown、URL に対応

---

## このリポジトリについて

本リポジトリは **Wordcast のコードベースのオープンソース部分**です。プロダクトを支える汎用インフラ — UI コンポーネント、多フォーマット文書解析（PDF・DOCX・EPUB・HTML・RTF・テキスト）、Cloudflare Pages Functions（任意 URL の本文抽出）、20 言語の i18n ルーティング、SEO メタデータビルダー、JSON-LD スキーマ、Plausible アナリティクスの統合が含まれています。

このコードでできること：
- 実際のユーザーが使うプロダクションレベルの読み上げアプリの実装を読む
- 同じ Next.js 15 + Cloudflare Pages スタックでコンテンツサイトを構築する
- 文書パーサー、URL 抽出器、i18n 設定、SEO ヘルパーを自分のプロジェクトに流用する

**含まれないもの**（プロプライエタリなプロダクトコード）：TTS エンジン UI、プレイヤーロジック、ブランドのランディングページ、ブログコンテンツ、ブランドアセット。

---

## Wordcast の使用例

**[wordcast.app/ja](https://wordcast.app/ja)** を開いてテキストを貼り付け、読み上げボタンを押すだけです。PC・スマートフォンのすべての主要ブラウザで動作します。

<div align="center">
  <a href="https://wordcast.app/ja">
    <img src="https://wordcast.app/readme/02-tool-with-text.webp" alt="Wordcast 読み上げツール — テキストを貼り付けて音声を選びボタンを押すだけ。72語のサンプルをSamantha音声で読み上げ準備完了" width="820" />
  </a>
  <br />
  <sub>↑ テキストを貼り付けて、音声を選んで、<strong>読み上げ</strong>を押す。<a href="https://wordcast.app/ja">wordcast.app/ja</a> で無料で使えます。</sub>
</div>

<br />

<div align="center">
  <a href="https://wordcast.app/ja">
    <img src="https://wordcast.app/readme/03-input-formats.webp" alt="3つの入力方法：テキスト貼り付け（文字数無制限）・PDF/Word/EPUB/RTF/TXT/MD/HTMLファイルのアップロード（端末内処理・送信なし）・URLから記事を取得" width="820" />
  </a>
  <br />
  <sub>↑ 3 つの入力方法：<strong>テキスト貼り付け</strong>・<strong>PDF/Word/EPUB/RTF/TXT/MD/HTML アップロード</strong>（端末内処理）・<strong>URL から記事取得</strong></sub>
</div>

---

## なぜブラウザネイティブ TTS なのか

ほとんどの読み上げツールは 2 つのカテゴリに分かれます：

| 方式 | 代表例 | デメリット |
|---|---|---|
| **AI クラウド TTS** | ElevenLabs、CoeFont、Play.ht | 文字数課金、テキスト送信、文字数制限、遅延 |
| **ブラウザ拡張機能** | Speechify、Read Aloud | インストール必要、権限許可、職場 PC では使えないケースも |

**[Wordcast](https://wordcast.app/ja) は第 3 の道を選びました：** [Web Speech API](https://developer.mozilla.org/ja/docs/Web/API/Web_Speech_API)（Chrome 33+・Edge・Safari 7+・Firefox 49+ 対応）でデバイスにインストール済みの音声を直接呼び出します — Apple Siri Neural、Microsoft Natural Voices、Google TTS。テキストはブラウザ外に出ず、月額上限なし、登録不要。

**無料・文字数無制限・アップロード不要・アカウント不要の読み上げ** が、デバイス内蔵音声で実現できます。

---

## 機能

### コア機能

- 🔊 **完全無料** — ずっと無料、文字数制限なし
- 🚫 **登録不要** — [wordcast.app/ja](https://wordcast.app/ja) を開いてすぐ使える
- 📴 **アップロード不要** — Web Speech API でデバイス内ローカル合成
- 🔒 **プライバシー保護** — テキストがブラウザ外に出ない
- ⚡ **オフライン対応** — ページ読込後はデバイス音声でネット不要

### 文書・コンテンツ対応

- 📄 **PDF 読み上げ** — `pdfjs-dist` でブラウザ内解析、アップロード不要
- 📝 **Word 文書 (DOCX) 読み上げ** — `mammoth` で `.docx` テキスト抽出
- 🌐 **任意の URL を読み上げ** — URL を貼るだけで Readability が広告・ナビを除去して本文を返す
- 📚 **EPUB 電子書籍** — ブラウザ内で解凍して読み上げ
- 📋 **テキスト貼り付け** — 文字数制限なし
- 🔤 **Markdown・HTML** — `.md`・`.html` ファイル対応

### 読み上げ体験

- 🟡 **文単位ハイライト** — 読み上げ中の文をリアルタイムでハイライト
- 📜 **自動スクロール** — ハイライト箇所を自動で追う
- 🎛️ **速度調整** — 0.5× 〜 2× の倍速設定
- 🎵 **ピッチ調整** — 音声の高低を微調整
- 🎙️ **音声選択** — デバイスにインストールされたすべての音声から選択
- 🔒 **ロック画面コントロール** — Media Session API でロック画面から再生・一時停止・スキップ
- 💾 **設定の永続化** — 速度・ピッチ・音声選択を記憶

---

## 対応フォーマット

| フォーマット | 拡張子 | 解析場所 | 使用ライブラリ |
|---|---|---|---|
| PDF | `.pdf` | ブラウザ（クライアント側） | `pdfjs-dist` |
| Word 文書 | `.docx` | ブラウザ（クライアント側） | `mammoth` |
| 電子書籍 | `.epub` | ブラウザ（クライアント側） | `jszip` |
| HTML ファイル | `.html`、`.htm` | ブラウザ（クライアント側） | 組み込み DOM |
| リッチテキスト | `.rtf` | ブラウザ（クライアント側） | カスタムパーサー |
| プレーンテキスト | `.txt` | ブラウザ（クライアント側） | ネイティブ `FileReader` |
| Markdown | `.md`、`.markdown` | ブラウザ（クライアント側） | ネイティブ `FileReader` |
| Web URL | 任意の URL | エッジ（Cloudflare Pages Function） | `@mozilla/readability` + `linkedom` |

---

## Wordcast vs. 音読さん / Speechify / NaturalReader

> 直接開く：**[wordcast.app/ja](https://wordcast.app/ja)**

<div align="center">
  <a href="https://wordcast.app/ja">
    <img src="https://wordcast.app/readme/05-comparison-table.webp" alt="Wordcast vs ElevenLabs/OpenAI TTS vs Speechify/NaturalReader vs 音読さん — 完全無料・文字数無制限・登録不要・テキストがデバイス外に送信されない" width="820" />
  </a>
</div>

<br />

| 機能 | [Wordcast](https://wordcast.app/ja) | Speechify | 音読さん | ブラウザ拡張 |
|---|:---:|:---:|:---:|:---:|
| **完全無料** | ✅ | ⚠️ 制限あり | ⚠️ 制限あり | ✅ |
| **登録不要** | ✅ | ❌ | ❌ | ✅ |
| **文字数無制限** | ✅ | ❌ 有料 | ❌ 有料 | ✅ |
| **ファイル非送信** | ✅ | ❌ | ❌ | ❌ |
| **PDF 対応** | ✅ | ✅ | ✅ | ✅ |
| **Word 対応** | ✅ | ✅ 有料 | ❌ | ❌ |
| **EPUB 対応** | ✅ | ✅ 有料 | ❌ | ❌ |
| **URL 読み上げ** | ✅ | ✅ 有料 | ✅ | ⚠️ |
| **文単位ハイライト** | ✅ | ✅ 有料 | ✅ | ⚠️ |
| **オフライン対応** | ✅ | ❌ | ❌ | ❌ |

---

## 活用シーン

### 👩‍🎓 学生・勉強

通勤・通学中に教科書、論文、レポートを耳で聴く。PDF をアップロードすれば文単位ハイライト付きで読み上げます。アカウント不要、学校の Chromebook でも動作。

### 🧠 ディスレクシア・ADHD サポート

文単位ハイライトとオーディオ再生の組み合わせが読解の認知負荷を大幅に軽減します。高額な支援技術サブスクの無料代替として活用できます。

### 🌐 語学学習

Siri の英語音声や Microsoft の自然な音声でネイティブ発音を聴きながら、ハイライトされたテキストを追えます。拡張機能不要、どのデバイスでも使えます。

### ✍️ ライティング・校正

自分の文章を「耳で聴く」ことで、黙読では気づけない誤字・不自然な表現を発見できます。**文字数無制限**なので長文を分割する必要がありません。

### 📰 通勤・スキマ時間

ニュース記事の URL を貼って読み上げボタンを押し、スマホをロック。ロック画面のコントロールで操作できます。

---

## よくある質問

<div align="center">
  <a href="https://wordcast.app/ja#faq">
    <img src="https://wordcast.app/readme/06-faq.webp" alt="Wordcast よくある質問 — 本当に無料？PDFを読み上げできる？文字数制限は？音読さんとの違いは？" width="820" />
  </a>
</div>

<br />

**Q：テキストがサーバーに送信されることはありますか？**
A：ありません。ファイル（PDF・DOCX・EPUB・TXT・HTML・RTF）はすべてブラウザ内で解析されます。音声合成はデバイスの Web Speech API でローカル処理されます。URL 取得だけサーバー側の処理があります（URL を取得してテキストを返すのみ、保存なし）。詳細は [wordcast.app/privacy](https://wordcast.app/privacy) をご参照ください。

**Q：本当に無料ですか？文字数制限はありますか？**
A：[Wordcast](https://wordcast.app/ja) は 100% 無料、文字数制限はありません。本一冊分を貼り付けても問題ありません。

**Q：アカウントを作る必要はありますか？**
A：不要です。[wordcast.app/ja](https://wordcast.app/ja) を開いてすぐ使えます。

**Q：音声の品質はどうですか？**
A：macOS/iOS では Apple Neural Siri 音声が使えます。Windows では Edge または Chrome 経由で Microsoft Natural Voices（Jenny、Guy、Aria など）が利用可能です。これらは Azure TTS と同じ品質の神経ネットワーク音声で、OS に標準搭載されているため無料で使えます。

**Q：このリポジトリと wordcast.app の違いは何ですか？**
A：[wordcast.app](https://wordcast.app/ja) はプロダクトです。このリポジトリはコードベースのオープンソース部分（UI コンポーネント、文書パーサー、i18n、SEO ヘルパー、URL 抽出器）を含みます。TTS エンジン、プレイヤー UI、ブランドのランディングページはクローズドのプロダクトコードです。

---

## ライセンス

[MIT](./LICENSE) — 自由に使用・フォーク・改変できます。

---

<div align="center">

**[Wordcast](https://wordcast.app/ja) — PDF・記事・URL の無料テキスト読み上げ。**

[Wordcast を開く →](https://wordcast.app/ja) · [ブログ](https://wordcast.app/blog) · [プライバシー](https://wordcast.app/privacy)

<br />

*Wordcast はブラウザで動く無料の読み上げツールです — 登録不要・アップロード不要・文字数無制限。*
*PDF・Word 文書・ウェブ記事・プレーンテキストを、デバイスにインストール済みの音声で読み上げます。*

</div>
