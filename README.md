<div align="center">

<a href="https://wordcast.app">
  <img src="https://wordcast.app/readme/01-hero.webp" alt="Wordcast – Free text to speech for articles, PDFs, and URLs. No signup, no upload, no character limit." width="100%" />
</a>

<br /><br />

# wordcast-kit

**The open-source scaffold behind [Wordcast](https://wordcast.app) — free text to speech that runs entirely in your browser.**

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)
[![Next.js 15](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org)
[![React 19](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev)
[![Tailwind v4](https://img.shields.io/badge/Tailwind-v4-38BDF8?logo=tailwindcss)](https://tailwindcss.com)
[![Cloudflare Pages](https://img.shields.io/badge/Deploy-Cloudflare%20Pages-F38020?logo=cloudflare)](https://pages.cloudflare.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript)](https://www.typescriptlang.org)

<br />

[![Free](https://img.shields.io/badge/✓%20100%25%20Free-no%20subscription-22c55e?style=flat-square)]()
[![No Signup](https://img.shields.io/badge/✓%20No%20Signup-no%20account-22c55e?style=flat-square)]()
[![No Character Limit](https://img.shields.io/badge/✓%20No%20Character%20Limit-unlimited%20text-22c55e?style=flat-square)]()
[![No Upload](https://img.shields.io/badge/✓%20No%20Upload-browser%20only-22c55e?style=flat-square)]()
[![Privacy First](https://img.shields.io/badge/✓%20Privacy%20First-text%20stays%20local-22c55e?style=flat-square)]()

<br />

[🔊 **Try the live app → wordcast.app**](https://wordcast.app) · [📖 Blog](https://wordcast.app/blog) · [🔒 Privacy](https://wordcast.app/privacy) · [Report a Bug](https://github.com/rocnubie/wordcast-Free-text-to-speech/issues)

</div>

---

## What Is wordcast-kit?

This repository contains the reusable infrastructure extracted from **[Wordcast](https://wordcast.app)**, a free browser-based text-to-speech reader.

The live product at [wordcast.app](https://wordcast.app) lets anyone **listen to PDFs, Word documents, web articles, and plain text for free** — no signup, no upload, no character limit, no AI server. It uses the **Web Speech API** already built into Chrome, Edge, and Safari to speak text aloud using the voices already installed on your device (including Apple Siri, Microsoft Natural Voices, and Google TTS voices).

**wordcast-kit** packages the non-product-specific scaffold into an MIT-licensed starting point for anyone building a similar content site: UI primitives, multi-format document parsing, i18n routing, SEO metadata, JSON-LD schemas, Plausible analytics, and a Cloudflare Pages function for server-side article extraction.

> **Just want to use the free text-to-speech tool?**  
> → Go to **[wordcast.app](https://wordcast.app)** — no installation, no account needed.

---

## Table of Contents

- [Live Demo](#-live-demo)
- [Why Browser-Native TTS?](#-why-browser-native-tts)
- [Features](#-features)
- [Supported Formats](#-supported-formats)
- [Voice & Language Support](#-voice--language-support)
- [Browser Support](#-browser-support)
- [How It Works — Architecture](#-how-it-works--architecture)
- [Wordcast vs. Speechify vs. NaturalReader](#-wordcast-vs-speechify-vs-naturalreader)
- [Use Cases](#-use-cases)
- [Kit Contents](#-kit-contents)
- [Quick Start](#-quick-start)
- [Project Structure](#-project-structure)
- [Configuration](#-configuration)
- [Deployment](#-deployment)
- [FAQ](#-faq)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🔊 Live Demo

**[→ wordcast.app](https://wordcast.app)**

Paste any text, upload a PDF, drop in a Word document, or enter a URL. Press **Listen** — no signup, no upload to a server, no character limit.

<div align="center">
  <a href="https://wordcast.app">
    <img src="https://wordcast.app/readme/02-tool-with-text.webp" alt="Wordcast free text to speech interface — paste text, choose voice, press Listen. 72-word sample loaded with Samantha voice selected." width="820" />
  </a>
  <br />
  <sub>↑ Free text to speech in your browser. Paste text, pick a voice, press <strong>Listen</strong>. Try it at <a href="https://wordcast.app">wordcast.app</a>.</sub>
</div>

<br />

<div align="center">
  <a href="https://wordcast.app">
    <img src="https://wordcast.app/readme/03-input-formats.webp" alt="Three ways to feed text into Wordcast: paste any text, upload a PDF or Word document, or fetch a web article from a URL — all processed on your device." width="820" />
  </a>
  <br />
  <sub>↑ Three input methods: <strong>paste text</strong>, <strong>upload PDF / DOCX / EPUB / RTF / TXT / MD / HTML</strong>, or <strong>fetch any URL</strong>. All extraction runs on your device.</sub>
</div>

---

## 🌐 Why Browser-Native TTS?

Most text-to-speech tools fall into one of two buckets:

| Approach | Examples | Problems |
|---|---|---|
| **AI cloud TTS** | ElevenLabs, Murf, Play.ht | Subscription cost, uploads to a server, character limits, latency |
| **Browser extension** | Speechify, Read Aloud, Helperbird | Extension install required, permission dialogs, Manifest V3 friction |

**[Wordcast](https://wordcast.app) takes a third path:** the [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) (available in Chrome 33+, Edge, Safari 7+, Firefox 49+) exposes the TTS voices already installed on the user's device. Nothing leaves the browser. No monthly cap. No signup.

The result: **free text to speech with no character limit, no upload, and no account** — powered entirely by your device's built-in voices.

---

## ✨ Features

### Core Text-to-Speech

- 🔊 **Free text to speech** — 100% free, forever, with no character limit
- 🚫 **No signup required** — open [wordcast.app](https://wordcast.app) and start listening immediately
- 📴 **No upload, no server** — text is synthesized locally on your device using the Web Speech API
- 🔒 **Private by design** — your text never leaves your browser
- ⚡ **Works offline** — once the page loads, device voices work without internet

### Document & Content Support

- 📄 **PDF to speech** — parse PDFs entirely in-browser via `pdfjs-dist`, no upload needed
- 📝 **Word document (DOCX) to speech** — extract clean text from `.docx` files via `mammoth`
- 🌐 **Read any URL aloud** — enter a link; server-side Readability extraction strips ads and boilerplate
- 📚 **EPUB reader** — unzip and read e-books in the browser
- 📋 **Paste plain text** — no character limit, no truncation
- 🔤 **Markdown & HTML** — `.md` and `.html` files supported

### Listening Experience

- 🟡 **Sentence-level highlighting** — the current sentence highlights as it is spoken
- 📜 **Auto-scroll** — follows the highlighted sentence automatically
- 🎛️ **Adjustable speed** — 0.5× to 2× playback rate
- 🎵 **Pitch control** — fine-tune voice tone
- 🎙️ **Voice picker** — choose from any voice installed on the device
- 🔒 **Lock-screen controls** — play/pause/skip from the notification shade via Media Session API
- 💾 **Persistent settings** — speed, pitch, and voice preferences are remembered

### Accessibility

- ♿ **ADHD & dyslexia friendly** — highlighting + read-aloud reduces cognitive load
- 🌍 **Multilingual** — interface in 10 languages; voices available for 30+ languages
- ↔️ **RTL support** — Arabic and other RTL scripts handled correctly
- 📱 **Mobile-first** — works on iOS Safari and Android Chrome

---

## 📂 Supported Formats

| Format | Extension | Parsing Location | Library |
|---|---|---|---|
| PDF | `.pdf` | Browser (client-side) | `pdfjs-dist` |
| Word Document | `.docx` | Browser (client-side) | `mammoth` |
| E-Book | `.epub` | Browser (client-side) | `jszip` |
| HTML File | `.html`, `.htm` | Browser (client-side) | Built-in DOM |
| Rich Text | `.rtf` | Browser (client-side) | Custom parser |
| Plain Text | `.txt` | Browser (client-side) | Native `FileReader` |
| Markdown | `.md`, `.markdown` | Browser (client-side) | Native `FileReader` |
| Web URL | Any URL | Edge (Cloudflare Pages Function) | `@mozilla/readability` + `linkedom` |

> **Privacy note:** File parsing happens entirely in your browser. Files are never sent to any server.  
> URL extraction is the only server-side operation — the server fetches the URL, strips it down to readable text, and returns only the text content. No logs are kept.

---

## 🗣️ Voice & Language Support

<div align="center">
  <a href="https://wordcast.app">
    <img src="https://wordcast.app/readme/04-international-voices.webp" alt="Free text to speech in 60+ languages. Wordcast picks the matching voice automatically — United States, United Kingdom, Australia, Canada, Ireland, New Zealand, South Africa, India, Germany, and more." width="820" />
  </a>
  <br />
  <sub>↑ Free multilingual text to speech — tap a flag, [Wordcast](https://wordcast.app) picks the matching device voice automatically.</sub>
</div>

<br />

Wordcast uses voices **already installed on your device** — the same ones used by Siri, Microsoft Narrator, and Google Assistant. The quality and availability depend on your OS.

### Typical voice availability by platform

| Platform | Voice Engines Available | Quality |
|---|---|---|
| **macOS / iOS (Safari)** | Apple Siri Neural voices (Samantha, Daniel, Karen, etc.) | ⭐⭐⭐⭐⭐ Neural |
| **Windows (Chrome / Edge)** | Microsoft Natural Voices (Jenny, Guy, Aria, etc.) | ⭐⭐⭐⭐⭐ Neural |
| **Android (Chrome)** | Google TTS voices | ⭐⭐⭐⭐ |
| **Linux (Chrome / Firefox)** | eSpeak-NG, Festival, or OS-installed voices | ⭐⭐⭐ |

### Languages with known high-quality device voices

| Language | Code | Apple | Microsoft | Google |
|---|---|---|---|---|
| English | `en-US`, `en-GB` | ✅ Neural | ✅ Neural | ✅ |
| Spanish | `es-ES`, `es-MX` | ✅ | ✅ Neural | ✅ |
| French | `fr-FR` | ✅ | ✅ Neural | ✅ |
| German | `de-DE` | ✅ | ✅ Neural | ✅ |
| Japanese | `ja-JP` | ✅ | ✅ Neural | ✅ |
| Korean | `ko-KR` | ✅ | ✅ Neural | ✅ |
| Hindi | `hi-IN` | ✅ | ✅ Neural | ✅ |
| Portuguese | `pt-BR` | ✅ | ✅ Neural | ✅ |
| Arabic | `ar-SA` | ✅ | ✅ Neural | ✅ |
| Russian | `ru-RU` | ✅ | ✅ Neural | ✅ |

> The voice picker at [wordcast.app](https://wordcast.app) shows every voice available on your specific device in real time.

---

## 🌍 Browser Support

| Browser | Platform | TTS | Highlighting | Notes |
|---|---|---|---|---|
| **Chrome 33+** | Desktop, Android | ✅ | ✅ | Best overall support |
| **Edge 14+** | Desktop | ✅ | ✅ | Microsoft Neural voices on Windows |
| **Safari 7+** | macOS, iOS | ✅ | ✅ | Apple Neural voices; `getVoices()` async workaround applied |
| **Firefox 49+** | Desktop | ✅ | ✅ | OS-level voices only |
| **Samsung Internet** | Android | ✅ | ✅ | |
| **Opera** | Desktop | ✅ | ✅ | Chromium-based |

> The codebase includes a `getVoices()` polling workaround for Chrome's 14-second async voice load and Safari's synchronous-but-delayed variant.

---

## 🏗️ How It Works — Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        User's Browser                           │
│                                                                 │
│  ┌──────────────┐   ┌─────────────────┐   ┌─────────────────┐  │
│  │  Input Layer  │   │  Parsing Layer  │   │   TTS Engine    │  │
│  │               │   │                 │   │                 │  │
│  │  • Paste text │──▶│  lib/input/     │──▶│  Web Speech API │  │
│  │  • Drop file  │   │  • pdfjs-dist   │   │                 │  │
│  │  • Enter URL  │   │  • mammoth      │   │  Device voices  │  │
│  └──────────────┘   │  • jszip/epub   │   │  (Siri / MS /   │  │
│                      │  • DOM parser   │   │   Google TTS)   │  │
│                      └────────┬────────┘   └────────┬────────┘  │
│                               │                     │           │
│                      ┌────────▼────────┐   ┌────────▼────────┐  │
│                      │  Text Normalize  │   │  Highlighting   │  │
│                      │  lib/input/     │   │  + AutoScroll   │  │
│                      │  normalize.ts   │   │  + MediaSession │  │
│                      └─────────────────┘   └─────────────────┘  │
└───────────────────────────────┬─────────────────────────────────┘
                                │ URL only
                                │
                    ┌───────────▼───────────┐
                    │  Cloudflare Pages Fn   │
                    │  functions/api/        │
                    │  extract.ts            │
                    │                        │
                    │  @mozilla/readability  │
                    │  + SSRF guards         │
                    │  + size limits         │
                    └────────────────────────┘
```

**Key design decisions:**

1. **Files never leave the browser.** PDF, DOCX, EPUB, RTF, HTML, and plain text are parsed using browser-side WASM and JavaScript. No bytes are uploaded.
2. **URL extraction is the only server call.** The Cloudflare Pages Function fetches the URL, runs Readability, and returns plain text. No content is stored or logged.
3. **Voices are device-native.** No AI API calls, no per-character charges, no subscription required.
4. **Static export.** The entire site is a pre-built static bundle deployed to Cloudflare Pages' global CDN. TTFB is typically under 50ms worldwide.

---

## 📊 Wordcast vs. Speechify vs. NaturalReader vs. ElevenLabs

> Want to skip the comparison and just start listening? → **[wordcast.app](https://wordcast.app)**

<div align="center">
  <a href="https://wordcast.app">
    <img src="https://wordcast.app/readme/05-comparison-table.webp" alt="Comparison table: Wordcast vs ElevenLabs / OpenAI TTS vs Speechify / NaturalReader vs browser extension readers. Wordcast is free forever, no signup, no character cap, text never leaves your device." width="820" />
  </a>
  <br />
  <sub>↑ Side-by-side feature comparison. See the full breakdown at <a href="https://wordcast.app">wordcast.app</a>.</sub>
</div>

<br />

| Feature | [Wordcast](https://wordcast.app) | Speechify | NaturalReader | TTSReader |
|---|:---:|:---:|:---:|:---:|
| **Free tier** | ✅ Full access | ⚠️ Limited | ⚠️ Limited | ✅ |
| **No signup required** | ✅ | ❌ | ❌ | ✅ |
| **No character limit** | ✅ | ❌ Premium | ❌ Premium | ✅ |
| **No upload to server** | ✅ | ❌ | ❌ | ❌ |
| **PDF support** | ✅ | ✅ | ✅ | ✅ |
| **DOCX support** | ✅ | ✅ Premium | ✅ Premium | ❌ |
| **EPUB support** | ✅ | ✅ Premium | ❌ | ❌ |
| **URL / article reading** | ✅ | ✅ Premium | ❌ | ✅ |
| **Sentence highlighting** | ✅ | ✅ Premium | ✅ Premium | ✅ |
| **AI neural voices** | Device voices | ✅ Premium | ✅ Premium | ❌ |
| **Offline capable** | ✅ | ❌ | ❌ | ❌ |
| **Open source** | ✅ (this repo) | ❌ | ❌ | ❌ |
| **Browser extension** | ❌ (no install) | ✅ | ❌ | ❌ |
| **Price** | **Free** | $139/yr | $99/yr | Free |

> Note: Feature availability varies by platform version and may change over time. Last updated May 2026.

**When to use [Wordcast](https://wordcast.app) instead of Speechify or NaturalReader:**

- You want a **free text-to-speech tool with no signup**
- You want to **read a PDF aloud without uploading it** to a third-party server
- You want **no character limit** on pasted text
- You're on a school or work network that blocks extension installs
- You care about **privacy** (your text never leaves your device)
- You need a **free Speechify alternative** for occasional use

---

## 🎯 Use Cases

### 👩‍🎓 Students

Read textbooks, research papers, and lecture notes aloud while commuting. Paste the text or upload the PDF — [Wordcast](https://wordcast.app) reads it back with sentence-level highlighting. No account needed, no subscription, works on school Chromebooks.

**Keywords:** *free text to speech for students, convert PDF to audio free, listen to academic papers, text to speech for studying*

---

### 🧠 ADHD & Dyslexia Support

Sentence-level highlighting combined with audio playback significantly reduces the cognitive load of reading for people with ADHD or dyslexia. [Wordcast](https://wordcast.app) is a free, browser-based alternative to expensive assistive technology subscriptions.

**Keywords:** *free text to speech for ADHD, text to speech for dyslexia, read aloud tool accessibility, assistive technology TTS free*

---

### 🌐 Language Learners

Use a native speaker's voice (Siri French, Microsoft Jenny Spanish) to hear correct pronunciation while following along with the highlighted text. No extension required, works on any device.

**Keywords:** *text to speech language learning, multilingual TTS browser, hear correct pronunciation free*

---

### ✍️ Writers & Proofreaders

Listening to your own writing catches errors that silent proofreading misses. Paste a draft, press Listen, and hear it read back in your chosen voice and speed. The **no character limit** means entire manuscripts work without splitting.

**Keywords:** *text to speech for proofreading, listen to your writing, free TTS for writers, no character limit*

---

### 📰 Commuters & Busy Readers

Turn any web article into an audio session — paste the URL, press Listen, lock your phone. Lock-screen Media Session controls let you pause and skip without unlocking.

**Keywords:** *listen to articles free, read aloud browser, convert article to audio, text to speech while commuting*

---

### 🎬 Content Creators

Generate voiceover scratch tracks for YouTube videos or podcasts using high-quality device voices. Export your script, paste it into [Wordcast](https://wordcast.app), and record your screen audio. No monthly plan, no per-character API billing.

**Keywords:** *free text to speech for YouTube, TTS for content creators, free voice over tool, no subscription TTS*

---

### ♿ Accessibility Advocates

[Wordcast](https://wordcast.app) works out of the box with screen readers, keyboard-only navigation, and system-level assistive technology. The `HtmlLangSync` component ensures `<html lang>` and `dir` attributes are always correct for multilingual screen reader support.

**Keywords:** *free accessible TTS tool, WCAG text to speech, browser TTS accessibility*

---

## 📦 Kit Contents

This repository is the open-source scaffold, not the full product. What's here:

```
wordcast-kit/
├── components/
│   ├── ui/                    # Radix-based primitives
│   │   ├── button.tsx         # CVA-powered button with variants
│   │   ├── popover.tsx        # Floating popover
│   │   ├── select.tsx         # Accessible select menu
│   │   ├── sheet.tsx          # Slide-in drawer (bottom/right)
│   │   ├── slider.tsx         # Range slider
│   │   └── switch.tsx         # Toggle switch
│   ├── Logo.tsx               # Placeholder mark — swap for your brand
│   ├── SiteHeader.tsx         # Sticky header with logo + language switcher
│   ├── SiteFooter.tsx         # Footer with nav + language switcher
│   ├── LanguageSwitcher.tsx   # Popover: flag, native name, current locale
│   ├── HtmlLangSync.tsx       # Syncs <html lang/dir> for static exports
│   ├── JsonLd.tsx             # Inline JSON-LD <script> renderer
│   └── analytics/
│       └── plausible.tsx      # Plausible analytics <script> loader
│
├── lib/
│   ├── utils.ts               # cn() — clsx + tailwind-merge
│   ├── seo.ts                 # buildPageMetadata(), buildAlternates()
│   ├── jsonld.ts              # WebSite/Article/FAQ/HowTo/Breadcrumb schemas
│   ├── analytics.ts           # Generic Plausible track() wrapper
│   └── input/
│       ├── types.ts           # ExtractedContent, SourceMeta types
│       ├── extract-url.ts     # Client → /api/extract caller
│       ├── parse-file.ts      # Lazy dispatcher: ext → parser
│       ├── normalize.ts       # Whitespace + paragraph repair
│       └── parsers/
│           ├── pdf.ts         # pdfjs-dist in-browser PDF text extraction
│           ├── docx.ts        # mammoth Word document extraction
│           ├── epub.ts        # jszip-based EPUB reader
│           ├── html.ts        # DOM-based HTML file parser
│           ├── rtf.ts         # RTF strip-tags parser
│           └── text.ts        # Plain text / Markdown reader
│
├── i18n/
│   ├── locale.ts              # Locale list, names, flags, RTL set, speech tags
│   ├── routing.ts             # next-intl defineRouting
│   ├── navigation.ts          # Link, redirect, usePathname, useRouter
│   └── request.ts             # Server-side locale resolution for static export
│
├── functions/
│   └── api/
│       └── extract.ts         # Cloudflare Pages Function: URL → readable text
│                              # Includes: SSRF guards, size cap, timeout,
│                              # content-type validation, Readability parsing
│
├── site.config.ts             # Brand identity — name, URL, locales, Plausible
├── next.config.mjs            # Static export + next-intl plugin
├── tsconfig.json              # Strict TypeScript, path aliases
├── eslint.config.mjs          # Flat config: next/core-web-vitals + typescript
├── postcss.config.mjs         # Tailwind v4 PostCSS plugin
├── .env.example               # NEXT_PUBLIC_SITE_URL, PLAUSIBLE vars
├── .gitignore
└── LICENSE                    # MIT
```

**What's NOT in this repo** (these belong to the product layer):

- `app/` — branded pages and layouts
- `components/tts/` — the TTS UI: ListenButton, MiniPlayer, SettingsDrawer, VoicePicker
- `lib/tts/` — TTS hook, settings store, Media Session integration
- `components/sections/` — landing page marketing sections
- `content/blog/` — blog posts
- `messages/` — translation strings
- `public/` — brand assets

---

## 🚀 Quick Start

```bash
# 1. Clone
git clone https://github.com/rocnubie/wordcast-Free-text-to-speech.git
cd wordcast-Free-text-to-speech

# 2. Install
pnpm install          # or: npm install / yarn

# 3. Configure
cp .env.example .env.local
# Edit .env.local:
#   NEXT_PUBLIC_SITE_URL=https://yourdomain.com

# 4. Add the missing pieces (see below)

# 5. Dev server
pnpm dev              # http://localhost:3000

# 6. Dev with Cloudflare Pages Functions (for URL extraction)
pnpm dev:cf           # http://localhost:8788
```

### What you need to add before it boots

1. **`app/layout.tsx`** — root layout; import `SiteHeader`, `SiteFooter`, `PlausibleScript`
2. **`app/page.tsx`** — home page
3. **`app/globals.css`** — Tailwind `@import` + `@theme` token definitions
4. **`messages/en.json`** — at minimum: `{ "nav": { "about": "About", "blog": "Blog", "privacy": "Privacy", "changeLanguage": "Change language" }, "footer": { "copyright": "© {year} Your Site", "tagline": "Your tagline" } }`
5. **`public/`** — `favicon.svg`, `og-image.png`

---

## ⚙️ Configuration

All brand identity lives in a single file:

```ts
// site.config.ts
export const siteConfig = {
  name: "Your Site",
  tagline: "Your tagline here",
  description: "One sentence description.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
  twitterHandle: "@yourhandle",
  defaultLocale: "en",
  locales: ["en", "es", "fr"] as const,   // add BCP-47 codes here
  plausible: {
    domain: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN || "",
    scriptUrl: process.env.NEXT_PUBLIC_PLAUSIBLE_SCRIPT_URL || "https://plausible.io/js/script.js",
  },
} as const;
```

Change `name`, `url`, and `locales` — every component, SEO helper, and JSON-LD schema picks it up automatically on the next build.

### Adding a locale

```bash
# 1. Add messages
touch messages/fr.json   # add nav + footer keys

# 2. Register locale
# site.config.ts → locales: ["en", "es", "fr"]

# 3. (Optional) Add flag + native name
# i18n/locale.ts → localeNames, localeFlags, localeSpeechTag

# 4. Rebuild
pnpm build
```

### Tailwind token reference

Components reference these semantic tokens — define them in `globals.css` under `@theme`:

| Token | Usage |
|---|---|
| `--color-background` | Page background |
| `--color-foreground` | Default text |
| `--color-primary` | Brand accent (logo tile, active states) |
| `--color-primary-foreground` | Text on primary |
| `--color-border` | Dividers, rings |
| `--color-muted-foreground` | Secondary text |
| `--color-accent` | Hover background |
| `--color-accent-foreground` | Hover text |

---

## ☁️ Deployment

The kit is pre-configured for **Cloudflare Pages** with a static export:

```bash
pnpm build       # outputs to ./out
```

**Cloudflare Pages settings:**

| Setting | Value |
|---|---|
| Framework preset | None |
| Build command | `pnpm build` |
| Build output directory | `out` |
| Root directory | `/` |
| Node.js version | `22.x` |

The `functions/api/extract.ts` file is automatically picked up as a **Cloudflare Pages Function** — no extra configuration required.

**Other static hosts** (Vercel, Netlify, GitHub Pages) work too. For Vercel/Netlify you may want to swap `output: "export"` for their native adapters to get edge functions.

---

## ❓ FAQ

<div align="center">
  <a href="https://wordcast.app#faq">
    <img src="https://wordcast.app/readme/06-faq.webp" alt="Wordcast FAQ — Is Wordcast really free? Can Wordcast read PDFs aloud for free? Is there a character limit? How is Wordcast different from ElevenLabs, OpenAI TTS, or Speechify?" width="820" />
  </a>
  <br />
  <sub>↑ See the full FAQ at <a href="https://wordcast.app#faq">wordcast.app</a>.</sub>
</div>

<br />

**Q: Does Wordcast send my text to a server?**  
A: No. Files (PDF, DOCX, EPUB, TXT, HTML, RTF) are parsed entirely in your browser. Text synthesis happens via the Web Speech API on your device. The only server call is for URL extraction — the server fetches the URL and returns the cleaned text, but does not store it. See [wordcast.app/privacy](https://wordcast.app/privacy).

**Q: Is this free to use? Is there a character limit?**  
A: [Wordcast](https://wordcast.app) is 100% free with no character limit. Paste an entire book if you want.

**Q: Do I need to create an account?**  
A: No. Open [wordcast.app](https://wordcast.app) and start listening immediately.

**Q: How good are the free voices?**  
A: On macOS/iOS, you get Apple's Neural Siri voices. On Windows with Edge or Chrome, you get Microsoft Natural Voices (Jenny, Guy, Aria, etc.) — these are genuinely high-quality neural voices, the same ones used in Azure TTS, available for free because they're baked into your OS.

**Q: Does it work offline?**  
A: Yes, for local files and pasted text. Once the page has loaded, the Web Speech API synthesizes audio locally. URL extraction requires internet (to fetch the URL), but everything else is offline-capable.

**Q: What's the difference between this repo and wordcast.app?**  
A: [wordcast.app](https://wordcast.app) is the full product. This repo (`wordcast-kit`) contains only the reusable infrastructure — UI primitives, document parsers, i18n, SEO helpers — extracted as a clean starting point for other projects. The TTS engine, player UI, and branded landing page are not included.

**Q: Can I use the Web Speech API in Firefox?**  
A: Yes, since Firefox 49. Firefox uses OS-level voices (on Linux: eSpeak-NG or Festival; on macOS/Windows: same neural voices as Chrome). Quality varies by platform.

**Q: Why not use the ElevenLabs or OpenAI TTS API instead?**  
A: You can, and the input parsing layer in this kit works as a standalone module regardless of the synthesis backend. The live [Wordcast](https://wordcast.app) app uses the Web Speech API specifically because it makes the product free with no character limits and fully private. AI API-based TTS would require a subscription and would send text to a third-party server.

**Q: Is this a Speechify alternative?**  
A: As a free, browser-based tool for reading articles, PDFs, and documents aloud, [Wordcast](https://wordcast.app) covers the core use case of Speechify's free tier and more — with no account, no upload, and no character limit. It doesn't have AI voice cloning or a mobile app.

---

## 🤝 Contributing

Pull requests are welcome. For larger changes, open an issue first to discuss the direction.

```bash
git checkout -b feature/your-feature
pnpm lint
pnpm build       # must pass
```

Areas where contributions are most valuable:

- **New file parsers** — add a `lib/input/parsers/xxx.ts` and register it in `parse-file.ts`
- **New locale entries** — add to `i18n/locale.ts` (`localeNames`, `localeFlags`, `localeSpeechTag`)
- **UI primitives** — additional Radix primitives following the existing pattern
- **JSON-LD schemas** — more schema helpers in `lib/jsonld.ts`
- **SSRF hardening** — improvements to `functions/api/extract.ts`

---

## 📄 License

[MIT](./LICENSE) — free to use, fork, and build on.

---

<div align="center">

**Built for [Wordcast](https://wordcast.app) — free text to speech for PDFs, articles, and URLs.**

[Try it now →](https://wordcast.app) · [Blog](https://wordcast.app/blog) · [Privacy Policy](https://wordcast.app/privacy)

<br />

*Wordcast is free text to speech that runs in your browser — no signup, no upload, no character limit.*  
*Read PDFs, Word documents, web articles, and plain text aloud using the voices already on your device.*

</div>
