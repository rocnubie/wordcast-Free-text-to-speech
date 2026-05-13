<div align="center">

[English](./README.md) · [简体中文](./README.zh-CN.md) · [日本語](./README.ja.md) · [Español](./README.es.md) · [Português (BR)](./README.pt-BR.md) · [**한국어**](./README.ko.md) · [Deutsch](./README.de.md) · [Français](./README.fr.md)

<br />

<a href="https://wordcast.app/ko">
  <img src="https://wordcast.app/readme/01-hero.webp" alt="Wordcast 무료 TTS — 브라우저에서 기사, PDF, URL을 음성으로 읽어주는 무료 텍스트 음성 변환. 회원가입 불필요, 파일 업로드 불필요, 글자수 제한 없음" width="100%" />
</a>

<br /><br />

# Wordcast — 무료 TTS · 텍스트 읽어주기

**브라우저에서 바로 사용하는 무료 텍스트 음성 변환. 회원가입 없이, 설치 없이, 글자수 제한 없이.**

**👉 [wordcast.app/ko](https://wordcast.app/ko)**

[![완전 무료](https://img.shields.io/badge/✓%20완전%20무료-구독%20불필요-22c55e?style=flat-square)]()
[![회원가입 없이](https://img.shields.io/badge/✓%20회원가입%20없이-바로%20사용-22c55e?style=flat-square)]()
[![글자수 무제한](https://img.shields.io/badge/✓%20글자수%20무제한-제한%20없음-22c55e?style=flat-square)]()
[![업로드 없이](https://img.shields.io/badge/✓%20업로드%20없이-기기%20내%20처리-22c55e?style=flat-square)]()
[![프라이버시 보호](https://img.shields.io/badge/✓%20프라이버시%20보호-텍스트%20외부%20전송%20없음-22c55e?style=flat-square)]()

<br />

[**Wordcast 열기 →**](https://wordcast.app/ko) · [블로그](https://wordcast.app/blog) · [개인정보 처리방침](https://wordcast.app/privacy) · [버그 제보](https://github.com/rocnubie/wordcast-Free-text-to-speech/issues)

</div>

---

## Wordcast 소개

**[Wordcast](https://wordcast.app/ko)는 완전 무료 브라우저 기반 텍스트 읽어주기 서비스입니다.** 텍스트를 붙여넣거나, PDF·Word 파일을 업로드하거나, URL을 입력하면 — 이미 기기에 설치된 고품질 음성으로 읽어드립니다. 회원가입 없음, 업로드 없음, 글자수 제한 없음, AI 서버 과금 없음.

매일 전 세계 학생, 직장인, 어학 학습자, 접근성 사용자들이 실제로 사용하는 완성된 서비스입니다.

**[wordcast.app/ko](https://wordcast.app/ko)에서 바로 사용하세요.** 설치도, 가입도 불필요합니다 — 페이지를 열고 듣기 버튼만 누르면 됩니다.

**Wordcast를 선택하는 이유:**

- **완전 무료, 평생 무료** — 숨겨진 유료 플랜 없음
- **회원가입 없이** 바로 사용 가능
- **글자수 제한 없음** — 긴 기사, 논문, 책 원고도 그대로
- **텍스트가 기기 밖으로 나가지 않습니다** — 완전한 개인정보 보호
- **브라우저에서 바로** — 설치 불필요
- PDF, Word, EPUB, RTF, HTML, TXT, Markdown, URL 지원

---

## 이 저장소에 대하여

이 저장소는 **Wordcast 코드베이스의 오픈소스 부분**입니다 — UI 컴포넌트, 다중 포맷 문서 파싱(PDF·DOCX·EPUB·HTML·RTF·일반 텍스트), Cloudflare Pages Function(URL에서 본문 추출), 20개 언어 i18n 라우팅, SEO 메타데이터 빌더, JSON-LD 스키마, Plausible 애널리틱스 연동 등 서비스를 지탱하는 범용 인프라가 포함되어 있습니다.

이 코드로 할 수 있는 것:
- 실제 사용자들이 사용하는 프로덕션 TTS 서비스의 구현 코드 읽기
- 동일한 Next.js 15 + Cloudflare Pages 스택으로 유사 서비스 구축
- 문서 파서, URL 추출기, i18n 설정, SEO 도구를 프로젝트에 활용

**포함되지 않은 것** (독점 제품 코드): TTS 엔진 UI, 플레이어 로직, 브랜드 랜딩 페이지, 블로그 콘텐츠, 브랜드 에셋.

---

## Wordcast 사용 화면

**[wordcast.app/ko](https://wordcast.app/ko)**를 열고 텍스트를 붙여넣은 후 듣기 버튼을 누르세요. 모든 최신 브라우저, PC 및 모바일 모두 지원합니다.

<div align="center">
  <a href="https://wordcast.app/ko">
    <img src="https://wordcast.app/readme/02-tool-with-text.webp" alt="Wordcast 텍스트 읽어주기 도구 — 텍스트 붙여넣기 후 음성 선택하고 읽기 버튼 클릭. 72단어 샘플이 Samantha 음성으로 로드됨" width="820" />
  </a>
  <br />
  <sub>↑ 텍스트 붙여넣기 → 음성 선택 → <strong>듣기</strong> 버튼 클릭. <a href="https://wordcast.app/ko">wordcast.app/ko</a>에서 무료로 사용하세요.</sub>
</div>

<br />

<div align="center">
  <a href="https://wordcast.app/ko">
    <img src="https://wordcast.app/readme/03-input-formats.webp" alt="세 가지 입력 방법: 텍스트 붙여넣기(글자수 무제한), PDF/Word/EPUB/RTF/TXT/MD/HTML 파일 업로드(기기 내 처리, 업로드 없음), URL로 웹 기사 가져오기" width="820" />
  </a>
  <br />
  <sub>↑ 세 가지 입력 방법: <strong>텍스트 붙여넣기</strong> · <strong>PDF/Word/EPUB/RTF/TXT/MD/HTML 업로드</strong>(기기 내 처리) · <strong>URL로 기사 가져오기</strong></sub>
</div>

---

## 왜 브라우저 네이티브 TTS인가

대부분의 TTS 서비스는 두 가지 범주로 나뉩니다:

| 방식 | 대표 서비스 | 단점 |
|---|---|---|
| **AI 클라우드 TTS** | ElevenLabs, 타입캐스트, 네이버 클로바 | 글자수 과금, 서버 업로드, 글자수 제한, 지연 |
| **브라우저 확장 프로그램** | Speechify, Read Aloud | 설치 필요, 권한 허용, 회사 PC에서 사용 불가 |

**[Wordcast](https://wordcast.app/ko)는 세 번째 방법을 선택했습니다:** [Web Speech API](https://developer.mozilla.org/ko/docs/Web/API/Web_Speech_API)(Chrome 33+, Edge, Safari 7+, Firefox 49+ 지원)를 통해 이미 기기에 설치된 음성을 직접 사용합니다 — Apple Siri Neural, Microsoft Natural Voices, Google TTS. 텍스트는 브라우저 밖으로 나가지 않고, 월별 한도 없음, 회원가입 불필요.

**무료 · 글자수 무제한 · 업로드 없음 · 가입 없음** — 기기 내장 음성으로 실현됩니다.

---

## 주요 기능

### 핵심 기능

- 🔊 **완전 무료** — 평생 무료, 글자수 제한 없음
- 🚫 **회원가입 없이** — [wordcast.app/ko](https://wordcast.app/ko) 열면 바로 시작
- 📴 **업로드 없음** — Web Speech API로 기기 내 로컬 합성
- 🔒 **개인정보 보호** — 텍스트가 브라우저 밖으로 나가지 않음
- ⚡ **오프라인 사용** — 페이지 로드 후 기기 음성은 인터넷 불필요

### 문서 및 콘텐츠 지원

- 📄 **PDF 읽어주기** — `pdfjs-dist`로 브라우저 내 파싱, 업로드 불필요
- 📝 **Word 문서 읽어주기** — `mammoth`으로 `.docx` 텍스트 추출
- 🌐 **URL 읽어주기** — URL 입력 시 Readability가 광고·내비를 제거하고 본문만 반환
- 📚 **EPUB 전자책** — 브라우저에서 압축 해제 후 읽어주기
- 📋 **텍스트 붙여넣기** — 글자수 제한 없음
- 🔤 **Markdown · HTML** — `.md`, `.html` 파일 지원

### 듣기 경험

- 🟡 **문장 단위 하이라이트** — 읽는 문장을 실시간으로 강조 표시
- 📜 **자동 스크롤** — 하이라이트된 문장을 자동으로 따라감
- 🎛️ **재생 속도 조절** — 0.5× ~ 2× 배속
- 🎵 **음조 조절** — 음성 높낮이 세부 조정
- 🎙️ **음성 선택** — 기기에 설치된 모든 음성에서 선택
- 🔒 **잠금 화면 컨트롤** — Media Session API로 잠금 화면에서 재생·일시정지·건너뛰기
- 💾 **설정 저장** — 속도·음조·음성 선택이 유지됨

---

## 지원 파일 형식

| 형식 | 확장자 | 파싱 위치 | 사용 라이브러리 |
|---|---|---|---|
| PDF | `.pdf` | 브라우저 (클라이언트) | `pdfjs-dist` |
| Word 문서 | `.docx` | 브라우저 (클라이언트) | `mammoth` |
| 전자책 | `.epub` | 브라우저 (클라이언트) | `jszip` |
| HTML 파일 | `.html`, `.htm` | 브라우저 (클라이언트) | 내장 DOM |
| 리치 텍스트 | `.rtf` | 브라우저 (클라이언트) | 커스텀 파서 |
| 일반 텍스트 | `.txt` | 브라우저 (클라이언트) | 네이티브 `FileReader` |
| Markdown | `.md`, `.markdown` | 브라우저 (클라이언트) | 네이티브 `FileReader` |
| 웹 URL | 모든 URL | 엣지 (Cloudflare Pages Function) | `@mozilla/readability` + `linkedom` |

---

## 음성 및 언어 지원

<div align="center">
  <a href="https://wordcast.app/ko">
    <img src="https://wordcast.app/readme/04-international-voices.webp" alt="Wordcast 60개 이상 언어 무료 TTS — 국기를 누르면 자동으로 해당 음성 선택. 미국, 영국, 호주, 캐나다, 아일랜드, 뉴질랜드, 남아프리카, 인도, 독일 등" width="820" />
  </a>
  <br />
  <sub>↑ 국기를 탭하면 <a href="https://wordcast.app/ko">Wordcast</a>가 자동으로 해당 기기 음성을 선택합니다.</sub>
</div>

---

## Wordcast vs. 타입캐스트 / 네이버 클로바 / Speechify

> 바로 열기: **[wordcast.app/ko](https://wordcast.app/ko)**

<div align="center">
  <a href="https://wordcast.app/ko">
    <img src="https://wordcast.app/readme/05-comparison-table.webp" alt="Wordcast vs 타입캐스트/네이버 클로바 vs Speechify/NaturalReader vs 브라우저 확장 프로그램 — 완전 무료, 글자수 무제한, 회원가입 불필요, 텍스트가 기기 밖으로 나가지 않음" width="820" />
  </a>
</div>

<br />

| 기능 | [Wordcast](https://wordcast.app/ko) | 타입캐스트 / 클로바 | Speechify | 브라우저 확장 |
|---|:---:|:---:|:---:|:---:|
| **완전 무료** | ✅ | ⚠️ 제한 있음 | ⚠️ 제한 있음 | ✅ |
| **회원가입 없이** | ✅ | ❌ | ❌ | ✅ |
| **글자수 무제한** | ✅ | ❌ 유료 | ❌ 유료 | ✅ |
| **파일 미전송** | ✅ | ❌ | ❌ | ❌ |
| **PDF 지원** | ✅ | ✅ | ✅ | ✅ |
| **Word 지원** | ✅ | ✅ 유료 | ✅ 유료 | ❌ |
| **EPUB 지원** | ✅ | ❌ | ✅ 유료 | ❌ |
| **URL 읽어주기** | ✅ | ❌ | ✅ 유료 | ⚠️ |
| **문장 하이라이트** | ✅ | ❌ | ✅ 유료 | ⚠️ |
| **오프라인 사용** | ✅ | ❌ | ❌ | ❌ |
| **가격** | **무료** | 콘텐츠 당 과금 | $139/년 | 무료 |

---

## 활용 사례

### 👩‍🎓 학생 · 공부

등하교 중에 교재, 논문, 강의 자료를 들으세요. PDF를 업로드하면 문장 하이라이트와 함께 읽어드립니다. 계정 불필요, 학교 Chromebook에서도 동작합니다.

### 🧠 ADHD · 난독증 지원

문장 단위 하이라이트와 음성 재생의 조합이 읽기 인지 부하를 크게 줄여줍니다. 비싼 보조 기술 구독의 무료 대안으로 활용할 수 있습니다.

### 🌐 어학 학습

Microsoft Jenny(스페인어)나 Siri 영어 음성으로 원어민 발음을 들으며 하이라이트된 텍스트를 따라 읽으세요. 확장 프로그램 설치 불필요, 어떤 기기에서도 사용 가능합니다.

### ✍️ 작가 · 교정

자신이 쓴 글을 소리로 들으면 묵독으로는 발견하기 어려운 오류가 들립니다. 글자수 제한이 없어 긴 원고도 분할할 필요가 없습니다.

### 📰 출퇴근 · 바쁜 독자

뉴스 기사 URL을 붙여넣고 듣기를 누른 후 화면을 잠그세요. 잠금 화면 컨트롤로 잠금 해제 없이 재생을 조작할 수 있습니다.

---

## 자주 묻는 질문

<div align="center">
  <a href="https://wordcast.app/ko#faq">
    <img src="https://wordcast.app/readme/06-faq.webp" alt="Wordcast 자주 묻는 질문 — 정말 무료인가요? PDF를 읽어줄 수 있나요? 글자수 제한이 있나요? 타입캐스트, Speechify와 어떻게 다른가요?" width="820" />
  </a>
</div>

<br />

**Q: 텍스트가 서버로 전송되나요?**
A: 아니요. 파일(PDF, DOCX, EPUB, TXT, HTML, RTF)은 모두 브라우저 내에서 파싱됩니다. 음성 합성은 기기의 Web Speech API로 로컬 처리됩니다. URL 추출만 서버 처리가 있으며(URL을 가져와 텍스트를 반환, 저장 없음), 나머지는 완전히 기기 내에서 처리됩니다.

**Q: 정말 무료인가요? 글자수 제한이 있나요?**
A: [Wordcast](https://wordcast.app/ko)는 100% 무료, 글자수 제한 없습니다. 책 한 권 전체를 붙여넣어도 됩니다.

**Q: 회원가입이 필요한가요?**
A: 필요 없습니다. [wordcast.app/ko](https://wordcast.app/ko)를 열면 바로 시작할 수 있습니다.

**Q: 음성 품질은 어떻습니까?**
A: macOS/iOS에서는 Apple Neural Siri 음성을 사용할 수 있습니다. Windows에서 Edge 또는 Chrome을 사용하면 Microsoft Natural Voices(Jenny, Guy, Aria 등)를 이용할 수 있습니다. 이 음성들은 Azure TTS와 동일한 수준의 고품질 신경망 음성으로, OS에 기본 탑재되어 있어 무료로 사용할 수 있습니다.

**Q: 이 저장소와 wordcast.app의 차이가 무엇인가요?**
A: [wordcast.app](https://wordcast.app/ko)은 서비스 자체입니다. 이 저장소는 코드베이스의 오픈소스 부분(UI 컴포넌트, 문서 파서, i18n, SEO 도구, URL 추출기)을 담고 있습니다. TTS 엔진, 플레이어 UI, 브랜드 랜딩 페이지는 클로즈드 소스 제품 코드입니다.

---

## 라이선스

[MIT](./LICENSE) — 자유롭게 사용, 포크, 빌드할 수 있습니다.

---

<div align="center">

**[Wordcast](https://wordcast.app/ko) — PDF, 기사, URL을 위한 무료 텍스트 읽어주기.**

[Wordcast 열기 →](https://wordcast.app/ko) · [블로그](https://wordcast.app/blog) · [개인정보 처리방침](https://wordcast.app/privacy)

<br />

*Wordcast는 브라우저에서 실행되는 무료 텍스트 음성 변환 서비스입니다 — 회원가입 없음, 업로드 없음, 글자수 제한 없음.*
*PDF, Word 문서, 웹 기사, 일반 텍스트를 기기에 이미 설치된 음성으로 읽어드립니다.*

</div>
