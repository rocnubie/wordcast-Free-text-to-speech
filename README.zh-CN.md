<div align="center">

[English](./README.md) · [**简体中文**](./README.zh-CN.md) · [日本語](./README.ja.md) · [Español](./README.es.md) · [Português (BR)](./README.pt-BR.md) · [한국어](./README.ko.md) · [Deutsch](./README.de.md) · [Français](./README.fr.md)

<br />

<a href="https://wordcast.app/zh-CN">
  <img src="https://wordcast.app/readme/01-hero.webp" alt="Wordcast 免费在线文字转语音 — 朗读文章、PDF、Word文档和网页URL，无需注册、无需上传文件、无字数限制" width="100%" />
</a>

<br /><br />

# Wordcast — 免费文字转语音

**免费在线文字转语音，打开即用，无需注册，无需上传，无字数限制。**

**👉 [wordcast.app/zh-CN](https://wordcast.app/zh-CN)**

[![完全免费](https://img.shields.io/badge/✓%20完全免费-无需订阅-22c55e?style=flat-square)]()
[![无需注册](https://img.shields.io/badge/✓%20无需注册-打开即用-22c55e?style=flat-square)]()
[![无字数限制](https://img.shields.io/badge/✓%20无字数限制-无上限-22c55e?style=flat-square)]()
[![无需上传](https://img.shields.io/badge/✓%20无需上传-本地处理-22c55e?style=flat-square)]()
[![隐私保护](https://img.shields.io/badge/✓%20隐私保护-文本不离开设备-22c55e?style=flat-square)]()

<br />

[**打开 Wordcast →**](https://wordcast.app/zh-CN) · [博客](https://wordcast.app/blog) · [隐私政策](https://wordcast.app/privacy) · [反馈 Bug](https://github.com/rocnubie/wordcast-Free-text-to-speech/issues)

</div>

---

## 关于 Wordcast

**[Wordcast](https://wordcast.app/zh-CN) 是一款完全免费的在线文字转语音工具。** 粘贴任意文本、上传 PDF 或 Word 文档、输入网址，Wordcast 便会用你设备上已有的高质量语音朗读出来。无需注册，无需上传，无字数限制，不依赖 AI 服务器。

这是一款成熟稳定的产品，每天服务于来自全球的学生、读者、写作者、语言学习者和无障碍用户。想把任何文字内容变成音频，Wordcast 是最快的途径。

**直接访问 [wordcast.app/zh-CN](https://wordcast.app/zh-CN) 即可使用。** 无需安装，无需注册，打开页面按下朗读即可。

**为什么大家选择 Wordcast：**

- **完全免费，永久免费** — 没有隐藏付费计划，没有订阅
- **无需注册** — 打开即用，无需账号
- **无字数限制** — 粘贴一整篇文章、一章书稿都没问题
- **文本不离开设备** — 保护隐私，本地处理
- **浏览器直接使用** — 无需安装任何软件或插件
- 支持 PDF、Word、EPUB、RTF、HTML、TXT、Markdown 和网页 URL

---

## 本仓库包含什么

本仓库是 **Wordcast 产品代码库中的开源部分**：支撑产品运行的通用基础设施 — UI 组件库、多格式文档解析（PDF、DOCX、EPUB、HTML、RTF、纯文本）、Cloudflare Pages 边缘函数（从任意 URL 提取正文）、20 语言的 i18n 路由、SEO 元数据生成器、JSON-LD Schema 工具、Plausible 分析集成。

你可以用这份代码：
- 阅读驱动真实用户的生产级文字转语音应用的底层实现
- 基于同一套 Next.js 15 + Cloudflare Pages 技术栈搭建类似的内容站点
- 直接复用文档解析器、URL 提取器、i18n 配置或 SEO 工具
- 审查 Wordcast 如何处理隐私（文本不离开浏览器）和 SSRF 防护

**不在本仓库中的内容**（产品专有代码）：TTS 引擎 UI、播放器逻辑、品牌落地页、博客内容、品牌资产。

---

## Wordcast 实际效果

访问 **[wordcast.app/zh-CN](https://wordcast.app/zh-CN)** — 粘贴任意文本，按下朗读。支持所有主流浏览器，桌面端和移动端均可使用。

<div align="center">
  <a href="https://wordcast.app/zh-CN">
    <img src="https://wordcast.app/readme/02-tool-with-text.webp" alt="Wordcast 文字转语音工具界面 — 粘贴文本选择朗读声音按下朗读，72字样本已加载使用Samantha语音，显示预计朗读时长" width="820" />
  </a>
  <br />
  <sub>↑ 粘贴文本，选择语音，按下<strong>朗读</strong>。免费使用，访问 <a href="https://wordcast.app/zh-CN">wordcast.app</a></sub>
</div>

<br />

<div align="center">
  <a href="https://wordcast.app/zh-CN">
    <img src="https://wordcast.app/readme/03-input-formats.webp" alt="三种输入方式：粘贴文本（无字数限制，始终免费）、上传PDF/DOCX/EPUB/RTF/TXT/MD/HTML（本地处理不上传服务器）、通过URL抓取网页文章（提取正文去广告）" width="820" />
  </a>
  <br />
  <sub>↑ 三种输入方式：<strong>粘贴文本</strong>、<strong>上传 PDF/Word/EPUB/RTF/TXT/MD/HTML</strong>、<strong>粘贴网址</strong>。文件在本地处理，不上传服务器。</sub>
</div>

---

## 为什么选择浏览器原生 TTS

大多数文字转语音工具有两种形态：

| 方式 | 典型产品 | 问题 |
|---|---|---|
| **AI 云端语音** | ElevenLabs、讯飞配音、魔音工坊 | 按字数收费、需上传文本、有字数限制、延迟高 |
| **浏览器插件** | Speechify、Read Aloud | 需安装插件、需要权限授权、Manifest V3 兼容问题 |

**[Wordcast](https://wordcast.app/zh-CN) 选择了第三条路：** [Web Speech API](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Speech_API)（Chrome 33+、Edge、Safari 7+、Firefox 49+ 均支持）直接调用设备上已安装的语音引擎 — Apple Siri Neural、微软自然语音、Google TTS。文本不离开浏览器，没有月度上限，无需注册。

结果：**免费文字转语音，无字数限制，无上传，无账号** — 完全由设备内置语音驱动。

---

## 功能特性

### 核心功能

- 🔊 **完全免费** — 永久免费，无字数限制
- 🚫 **无需注册** — 打开 [wordcast.app](https://wordcast.app/zh-CN) 直接开始
- 📴 **无上传，无服务器** — 通过 Web Speech API 在本地合成语音
- 🔒 **隐私保护** — 文本不离开你的浏览器
- ⚡ **离线可用** — 页面加载后，设备语音无需联网

### 文档与内容支持

- 📄 **PDF 转语音** — 通过 `pdfjs-dist` 完全在浏览器内解析 PDF，无需上传
- 📝 **Word 文档 (DOCX) 转语音** — 通过 `mammoth` 提取 `.docx` 文本
- 🌐 **朗读任意网页** — 输入网址，服务端 Readability 去除广告和导航，仅返回正文
- 📚 **EPUB 电子书** — 在浏览器内解压并朗读电子书
- 📋 **粘贴纯文本** — 无字数限制，不截断
- 🔤 **Markdown 和 HTML** — 支持 `.md` 和 `.html` 文件

### 听书体验

- 🟡 **逐句高亮** — 朗读到哪句，哪句就高亮显示
- 📜 **自动滚动** — 跟随当前高亮句自动滚动
- 🎛️ **可调速度** — 0.5× 至 2× 播放倍速
- 🎵 **音调调节** — 微调语音音调
- 🎙️ **语音选择** — 从设备上所有已安装的语音中选择
- 🔒 **锁屏控制** — 通过 Media Session API 在锁屏界面播放/暂停/跳过
- 💾 **记忆设置** — 速度、音调、语音选择持久保存

---

## 支持的文件格式

| 格式 | 扩展名 | 解析位置 | 使用库 |
|---|---|---|---|
| PDF | `.pdf` | 浏览器（客户端） | `pdfjs-dist` |
| Word 文档 | `.docx` | 浏览器（客户端） | `mammoth` |
| 电子书 | `.epub` | 浏览器（客户端） | `jszip` |
| HTML 文件 | `.html`, `.htm` | 浏览器（客户端） | 内置 DOM |
| 富文本 | `.rtf` | 浏览器（客户端） | 自定义解析器 |
| 纯文本 | `.txt` | 浏览器（客户端） | 原生 `FileReader` |
| Markdown | `.md`, `.markdown` | 浏览器（客户端） | 原生 `FileReader` |
| 网页 URL | 任意 URL | 边缘（Cloudflare Pages Function） | `@mozilla/readability` + `linkedom` |

> **隐私说明：** 文件解析完全在浏览器内完成，文件不会上传到任何服务器。URL 提取是唯一的服务端操作 — 服务器抓取 URL 并返回纯文本，不保存任何内容。

---

## 语音与语言支持

<div align="center">
  <a href="https://wordcast.app/zh-CN">
    <img src="https://wordcast.app/readme/04-international-voices.webp" alt="Wordcast 支持60多种语言的免费文字转语音 — 点击国旗自动匹配设备语音，涵盖美国英语、英式英语、澳大利亚、加拿大、南非、印度、德国等地区及多种语言" width="820" />
  </a>
  <br />
  <sub>↑ 点击国旗，<a href="https://wordcast.app/zh-CN">Wordcast</a> 自动匹配设备上对应语言的语音。</sub>
</div>

<br />

Wordcast 使用**设备上已安装的语音** — 与 Siri、微软讲述人、Google 助手使用同一套语音引擎。质量和可用性取决于操作系统。

| 平台 | 可用语音引擎 | 质量 |
|---|---|---|
| **macOS / iOS（Safari）** | Apple Siri Neural（Samantha、Daniel 等）| ⭐⭐⭐⭐⭐ 神经网络语音 |
| **Windows（Chrome / Edge）** | 微软自然语音（Jenny、Guy、Aria 等）| ⭐⭐⭐⭐⭐ 神经网络语音 |
| **Android（Chrome）** | Google TTS | ⭐⭐⭐⭐ |
| **Linux（Chrome / Firefox）** | eSpeak-NG、Festival 或系统已安装语音 | ⭐⭐⭐ |

---

## Wordcast vs. 讯飞配音 / Speechify / 魔音工坊

> 直接打开：**[wordcast.app/zh-CN](https://wordcast.app/zh-CN)**

<div align="center">
  <a href="https://wordcast.app/zh-CN">
    <img src="https://wordcast.app/readme/05-comparison-table.webp" alt="Wordcast 对比 讯飞配音/Speechify/魔音工坊/浏览器插件朗读器 — 完全免费、无字数限制、无需注册、文本不离开设备、支持PDF/Word/EPUB" width="820" />
  </a>
  <br />
  <sub>↑ 功能对比详见 <a href="https://wordcast.app/zh-CN">wordcast.app</a></sub>
</div>

<br />

| 功能 | [Wordcast](https://wordcast.app/zh-CN) | 讯飞配音 / 魔音工坊 | Speechify | 浏览器插件 |
|---|:---:|:---:|:---:|:---:|
| **完全免费** | ✅ | ⚠️ 免费版受限 | ⚠️ 免费版受限 | ✅ |
| **无需注册** | ✅ | ❌ | ❌ | ✅ |
| **无字数限制** | ✅ | ❌ 付费版 | ❌ 付费版 | ✅ |
| **文件不上传服务器** | ✅ | ❌ | ❌ | ❌ |
| **PDF 支持** | ✅ | ✅ | ✅ | ✅ |
| **Word 文档支持** | ✅ | ✅ | ✅ 付费版 | ❌ |
| **EPUB 支持** | ✅ | ❌ | ✅ 付费版 | ❌ |
| **网页 URL 朗读** | ✅ | ❌ | ✅ 付费版 | ✅ |
| **逐句高亮** | ✅ | ❌ | ✅ 付费版 | ✅ |
| **离线可用** | ✅ | ❌ | ❌ | ❌ |
| **价格** | **免费** | 按字数收费 | $139/年 | 免费 |

**适合使用 [Wordcast](https://wordcast.app/zh-CN) 的场景：**

- 想要**免费在线文字转语音，无需注册账号**
- 想**朗读 PDF，但不想上传文件**到第三方服务器
- 需要**无字数限制**朗读长文
- 在意**隐私保护**，不希望文本被发送到第三方
- 需要讯飞配音或魔音工坊的**免费替代品**

---

## 使用场景

### 👩‍🎓 学生学习

上下学途中边走边听教材、论文和讲义。粘贴文本或上传 PDF，Wordcast 配合逐句高亮朗读出来。无需账号，无需订阅，学校 Chromebook 也能用。

### 🧠 多动症与阅读障碍

逐句高亮结合音频播放能大幅降低阅读认知负担，是价格昂贵的辅助技术订阅服务的免费替代选择。

### 🌐 语言学习

用 Siri 英语、微软 Jenny 西班牙语等母语人士的语音听正确发音，同时跟随高亮文字阅读。无需安装插件，任何设备均可使用。

### ✍️ 写作与校对

听自己写的内容能发现默读时察觉不到的错误。粘贴草稿，按下朗读，选择合适的语音和语速。**无字数限制**意味着整篇长文无需分割。

### 📰 通勤与碎片时间

将任意网页文章变成一段音频 — 粘贴网址，按下朗读，锁屏。锁屏界面的 Media Session 控件可以不解锁直接暂停和跳过。

---

## 常见问题

<div align="center">
  <a href="https://wordcast.app/zh-CN#faq">
    <img src="https://wordcast.app/readme/06-faq.webp" alt="Wordcast 常见问题 — 真的免费吗？可以朗读PDF吗？有字数限制吗？与讯飞配音/ElevenLabs/Speechify/魔音工坊有何不同？" width="820" />
  </a>
  <br />
  <sub>↑ 完整 FAQ 请访问 <a href="https://wordcast.app/zh-CN#faq">wordcast.app</a></sub>
</div>

<br />

**Q：Wordcast 会把我的文本发送到服务器吗？**
A：不会。文件（PDF、DOCX、EPUB、TXT、HTML、RTF）完全在浏览器内解析。语音合成通过 Web Speech API 在设备本地完成。唯一的服务端操作是 URL 提取 — 服务器抓取网页并返回纯文本，不保存任何内容。详见 [wordcast.app/privacy](https://wordcast.app/privacy)。

**Q：Wordcast 是免费的吗？有字数限制吗？**
A：[Wordcast](https://wordcast.app/zh-CN) 100% 免费，无字数限制。粘贴整本书也没问题。

**Q：需要注册账号吗？**
A：不需要。打开 [wordcast.app/zh-CN](https://wordcast.app/zh-CN) 即可开始使用。

**Q：语音质量怎么样？**
A：macOS/iOS 上可使用 Apple Neural Siri 语音。Windows 上通过 Edge 或 Chrome 可使用微软自然语音（Jenny、Guy、Aria 等）— 这些是与 Azure TTS 同级别的高质量神经网络语音，免费内置在操作系统中。

**Q：能离线使用吗？**
A：可以，对于本地文件和粘贴文本。页面加载后，Web Speech API 在本地合成语音，无需联网。URL 提取需要网络（需要抓取网页），其他功能均可离线使用。

**Q：这个仓库和 wordcast.app 有什么区别？**
A：[wordcast.app](https://wordcast.app/zh-CN) 是产品本身。本仓库包含产品代码库的开源部分 — 通用基础设施（UI 组件、文档解析器、i18n、SEO 工具、URL 提取器）。TTS 引擎、播放器 UI 和品牌落地页属于闭源产品代码。

---

## 开源协议

[MIT](./LICENSE) — 可自由使用、复刻和二次开发。

---

<div align="center">

**[Wordcast](https://wordcast.app/zh-CN) — 免费在线文字转语音，朗读 PDF、文章和网页 URL。**

[打开 Wordcast →](https://wordcast.app/zh-CN) · [博客](https://wordcast.app/blog) · [隐私政策](https://wordcast.app/privacy)

<br />

*Wordcast 是免费的在线文字转语音工具，在浏览器中运行 — 无需注册、无需上传、无字数限制。*
*支持朗读 PDF、Word 文档、网页文章和纯文本，使用设备上已有的语音。*

</div>
