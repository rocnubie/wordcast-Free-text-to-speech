<div align="center">

[English](./README.md) · [简体中文](./README.zh-CN.md) · [日本語](./README.ja.md) · [Español](./README.es.md) · [**Português (BR)**](./README.pt-BR.md) · [한국어](./README.ko.md) · [Deutsch](./README.de.md) · [Français](./README.fr.md)

<br />

<a href="https://wordcast.app/pt-BR">
  <img src="https://wordcast.app/readme/01-hero.webp" alt="Wordcast — texto para voz grátis online. Lê artigos, PDFs e URLs em voz alta no seu navegador. Sem cadastro, sem upload, sem limite de caracteres." width="100%" />
</a>

<br /><br />

# Wordcast — Texto para Voz Grátis

**Transforme texto em áudio grátis, direto no seu navegador. Sem cadastro, sem instalar nada, sem limite de caracteres.**

**👉 [wordcast.app/pt-BR](https://wordcast.app/pt-BR)**

[![100% Grátis](https://img.shields.io/badge/✓%20100%25%20Grátis-sem%20assinatura-22c55e?style=flat-square)]()
[![Sem Cadastro](https://img.shields.io/badge/✓%20Sem%20Cadastro-abra%20e%20use-22c55e?style=flat-square)]()
[![Sem Limite](https://img.shields.io/badge/✓%20Sem%20Limite%20de%20Caracteres-ilimitado-22c55e?style=flat-square)]()
[![Sem Upload](https://img.shields.io/badge/✓%20Sem%20Upload-processado%20localmente-22c55e?style=flat-square)]()
[![Privacidade](https://img.shields.io/badge/✓%20Privacidade%20Total-texto%20no%20seu%20dispositivo-22c55e?style=flat-square)]()

<br />

[**Abrir Wordcast →**](https://wordcast.app/pt-BR) · [Blog](https://wordcast.app/blog) · [Privacidade](https://wordcast.app/privacy) · [Reportar Bug](https://github.com/rocnubie/wordcast-Free-text-to-speech/issues)

</div>

---

## Sobre o Wordcast

**[Wordcast](https://wordcast.app/pt-BR) é um leitor de texto em voz alta 100% grátis que funciona no seu navegador.** Cole qualquer texto, envie um PDF ou Word, ou cole uma URL — o Wordcast lê em voz alta usando as vozes de qualidade que já estão instaladas no seu dispositivo. Sem cadastro, sem upload para servidor, sem limite de caracteres, sem custo por caractere.

É a alternativa grátis ao Speechify que não pede pra você criar conta nem instalar extensão. Só abra a página e clique em Ouvir.

**Use em [wordcast.app/pt-BR](https://wordcast.app/pt-BR).** Sem instalação, sem conta — abra a página e comece a ouvir.

**Por que as pessoas escolhem o Wordcast:**

- **100% grátis para sempre** — sem plano pago escondido
- **Sem cadastro** — abre e usa, sem criar conta
- **Sem limite de caracteres** — cole um artigo inteiro, um capítulo, um relatório
- **Seu texto não sai do seu dispositivo** — privacidade total
- **Funciona no navegador** — sem instalar nada
- Lê PDFs, Word, EPUB, RTF, HTML, TXT, Markdown e URLs

---

## O que há neste repositório

Este repositório contém a **parte open source do Wordcast** — a infraestrutura reutilizável que faz o produto funcionar: primitivas de UI, parsers de documentos em múltiplos formatos (PDF, DOCX, EPUB, HTML, RTF, texto puro), uma Cloudflare Pages Function para extração de texto de URLs, roteamento i18n para 20 idiomas, construtores de metadados SEO, geradores de esquemas JSON-LD e integração com Plausible Analytics.

O que **não** está neste repositório (código proprietário): o motor TTS, a UI do player, as seções de marketing, o blog e os assets de marca.

---

## Wordcast em ação

Abra **[wordcast.app/pt-BR](https://wordcast.app/pt-BR)** — cole qualquer texto e clique em Ouvir. Funciona em todos os navegadores modernos, no desktop e no celular.

<div align="center">
  <a href="https://wordcast.app/pt-BR">
    <img src="https://wordcast.app/readme/02-tool-with-text.webp" alt="Interface do Wordcast para texto para voz grátis — cole um texto, escolha uma voz, clique em Ouvir. Mostra 72 palavras de amostra com a voz Samantha selecionada" width="820" />
  </a>
  <br />
  <sub>↑ Cole o texto, escolha a voz, clique em <strong>Ouvir</strong>. Grátis em <a href="https://wordcast.app/pt-BR">wordcast.app/pt-BR</a>.</sub>
</div>

<br />

<div align="center">
  <a href="https://wordcast.app/pt-BR">
    <img src="https://wordcast.app/readme/03-input-formats.webp" alt="Três formas de usar o Wordcast: colar texto sem limite de caracteres, enviar PDF/Word/EPUB/RTF/TXT/MD/HTML (processado no dispositivo sem upload), e buscar artigo por URL" width="820" />
  </a>
  <br />
  <sub>↑ Três métodos: <strong>colar texto</strong> · <strong>enviar PDF/Word/EPUB/RTF/TXT/MD/HTML</strong> (processado localmente) · <strong>colar uma URL</strong></sub>
</div>

---

## Por que TTS nativo no navegador

A maioria das ferramentas de texto para voz se divide em duas categorias:

| Abordagem | Exemplos | Problemas |
|---|---|---|
| **TTS em nuvem com IA** | ElevenLabs, Murf, Play.ht | Assinatura, envio do texto ao servidor, limite de caracteres, latência |
| **Extensão do navegador** | Speechify, Read Aloud | Precisa instalar, pedir permissões, problemas com Manifest V3 |

**[Wordcast](https://wordcast.app/pt-BR) escolheu um terceiro caminho:** a [Web Speech API](https://developer.mozilla.org/pt-BR/docs/Web/API/Web_Speech_API) (disponível no Chrome 33+, Edge, Safari 7+, Firefox 49+) usa as vozes já instaladas no dispositivo — Siri na Apple, Microsoft Natural Voices no Windows, Google TTS no Android. Nada sai do navegador. Sem limite mensal. Sem cadastro.

**Texto para voz grátis, sem limite de caracteres, sem upload, sem conta** — tudo com as vozes nativas do seu dispositivo.

---

## Recursos

### Funções principais

- 🔊 **Grátis** — 100% grátis, sempre, sem limite de caracteres
- 🚫 **Sem cadastro** — abre [wordcast.app/pt-BR](https://wordcast.app/pt-BR) e começa
- 📴 **Sem upload nem servidor** — síntese local com Web Speech API
- 🔒 **Seu texto não sai do dispositivo**
- ⚡ **Funciona offline** — após carregar a página, as vozes do dispositivo não precisam de internet

### Documentos e conteúdo

- 📄 **PDF para voz** — parsing no navegador com `pdfjs-dist`, sem upload
- 📝 **Word (DOCX) para voz** — extração de texto com `mammoth`
- 🌐 **Ler qualquer URL em voz alta** — Readability remove anúncios e devolve só o texto
- 📚 **EPUB** — descompressão e leitura no navegador
- 📋 **Texto colado** — sem limite de caracteres
- 🔤 **Markdown e HTML** — arquivos `.md` e `.html`

### Experiência de escuta

- 🟡 **Destaque por frase** — a frase atual é destacada enquanto é lida
- 📜 **Rolagem automática** — acompanha a frase em destaque
- 🎛️ **Velocidade ajustável** — de 0.5× a 2×
- 🎙️ **Seletor de voz** — escolha entre todas as vozes instaladas no dispositivo
- 🔒 **Controles na tela de bloqueio** — Media Session API
- 💾 **Configurações salvas** — velocidade, tom e voz são lembrados

---

## Formatos suportados

| Formato | Extensão | Onde é processado | Biblioteca |
|---|---|---|---|
| PDF | `.pdf` | Navegador (cliente) | `pdfjs-dist` |
| Word | `.docx` | Navegador (cliente) | `mammoth` |
| E-book | `.epub` | Navegador (cliente) | `jszip` |
| HTML | `.html`, `.htm` | Navegador (cliente) | DOM nativo |
| Texto rico | `.rtf` | Navegador (cliente) | Parser próprio |
| Texto puro | `.txt` | Navegador (cliente) | `FileReader` nativo |
| Markdown | `.md`, `.markdown` | Navegador (cliente) | `FileReader` nativo |
| URL web | Qualquer URL | Edge (Cloudflare Pages Function) | `@mozilla/readability` + `linkedom` |

---

## Vozes e idiomas disponíveis

<div align="center">
  <a href="https://wordcast.app/pt-BR">
    <img src="https://wordcast.app/readme/04-international-voices.webp" alt="Wordcast: texto para voz grátis em mais de 60 idiomas. Toque uma bandeira e o Wordcast seleciona a voz automaticamente — EUA, Reino Unido, Austrália, Canadá, Alemanha e mais" width="820" />
  </a>
  <br />
  <sub>↑ Toque uma bandeira e o <a href="https://wordcast.app/pt-BR">Wordcast</a> seleciona automaticamente a voz do dispositivo correspondente.</sub>
</div>

---

## Wordcast vs. Speechify vs. NaturalReader vs. VozMe

> Abra diretamente: **[wordcast.app/pt-BR](https://wordcast.app/pt-BR)**

<div align="center">
  <a href="https://wordcast.app/pt-BR">
    <img src="https://wordcast.app/readme/05-comparison-table.webp" alt="Wordcast vs ElevenLabs/OpenAI TTS vs Speechify/NaturalReader vs extensões de navegador — grátis para sempre, sem limite de caracteres, sem cadastro, seu texto não sai do dispositivo" width="820" />
  </a>
</div>

<br />

| Função | [Wordcast](https://wordcast.app/pt-BR) | Speechify | NaturalReader | VozMe |
|---|:---:|:---:|:---:|:---:|
| **Totalmente grátis** | ✅ | ⚠️ Limitado | ⚠️ Limitado | ✅ |
| **Sem cadastro** | ✅ | ❌ | ❌ | ✅ |
| **Sem limite de caracteres** | ✅ | ❌ Premium | ❌ Premium | ✅ |
| **Sem upload** | ✅ | ❌ | ❌ | ❌ |
| **PDF** | ✅ | ✅ | ✅ | ❌ |
| **Word (DOCX)** | ✅ | ✅ Premium | ✅ Premium | ❌ |
| **EPUB** | ✅ | ✅ Premium | ❌ | ❌ |
| **Ler URLs** | ✅ | ✅ Premium | ❌ | ❌ |
| **Destaque por frase** | ✅ | ✅ Premium | ✅ Premium | ❌ |
| **Funciona offline** | ✅ | ❌ | ❌ | ❌ |
| **Preço** | **Grátis** | $139/ano | $99/ano | Grátis |

---

## Casos de uso

### 👩‍🎓 Estudantes

Ouça livros didáticos, artigos acadêmicos e anotações durante o trajeto. Suba o PDF ou cole o texto — o Wordcast lê com destaque por frase. Sem conta, sem assinatura, funciona nos Chromebooks da escola.

### 🧠 TDAH e dislexia

O destaque por frase combinado com a reprodução de áudio reduz significativamente a carga cognitiva da leitura. Uma alternativa grátis às caras assinaturas de tecnologia assistiva.

### 🌐 Aprendizado de idiomas

Ouça a pronúncia correta com a voz nativa (Siri em inglês, Microsoft Jenny em espanhol) enquanto acompanha o texto destacado. Sem extensão, funciona em qualquer dispositivo.

### ✍️ Escritores e revisores

Ouvir seu próprio texto revela erros que a leitura silenciosa não detecta. Sem limite de caracteres, então você pode colar um manuscrito inteiro.

### 📰 Leitores ocupados

Cole a URL de um artigo, clique em Ouvir e bloqueie o celular. Os controles da tela de bloqueio permitem pausar e pular sem desbloquear.

---

## Perguntas frequentes

<div align="center">
  <a href="https://wordcast.app/pt-BR#faq">
    <img src="https://wordcast.app/readme/06-faq.webp" alt="Perguntas frequentes sobre o Wordcast — É realmente grátis? Pode ler PDFs em voz alta? Tem limite de caracteres? Como se compara ao Speechify e VozMe?" width="820" />
  </a>
</div>

<br />

**P: O Wordcast envia meu texto para um servidor?**
R: Não. Os arquivos (PDF, DOCX, EPUB, TXT, HTML, RTF) são processados completamente no seu navegador. A síntese de voz ocorre no seu dispositivo com a Web Speech API. A única chamada ao servidor é para extração de URLs — o servidor busca a página e retorna o texto, sem guardar nada. Veja [wordcast.app/privacy](https://wordcast.app/privacy).

**P: É realmente grátis? Tem limite de caracteres?**
R: [Wordcast](https://wordcast.app/pt-BR) é 100% grátis, sem limite de caracteres. Cole um livro inteiro se quiser.

**P: Preciso criar uma conta?**
R: Não. Abra [wordcast.app/pt-BR](https://wordcast.app/pt-BR) e comece a ouvir.

**P: Qual a diferença entre este repositório e o wordcast.app?**
R: [wordcast.app](https://wordcast.app/pt-BR) é o produto. Este repositório contém a parte open source do código-fonte — a infraestrutura reutilizável (componentes UI, parsers de documentos, i18n, ferramentas SEO, extrator de URLs). O motor TTS, a UI do player e a landing page de marca são código proprietário.

---

## Licença

[MIT](./LICENSE) — livre para usar, bifurcar e construir em cima.

---

<div align="center">

**[Wordcast](https://wordcast.app/pt-BR) — texto para voz grátis para PDFs, artigos e URLs.**

[Abrir Wordcast →](https://wordcast.app/pt-BR) · [Blog](https://wordcast.app/blog) · [Privacidade](https://wordcast.app/privacy)

<br />

*Wordcast é texto para voz grátis que funciona no seu navegador — sem cadastro, sem upload, sem limite de caracteres.*
*Lê PDFs, documentos Word, artigos da web e texto puro com as vozes que já estão no seu dispositivo.*

</div>
