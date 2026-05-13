<div align="center">

[English](./README.md) · [简体中文](./README.zh-CN.md) · [日本語](./README.ja.md) · [**Español**](./README.es.md) · [Português (BR)](./README.pt-BR.md) · [한국어](./README.ko.md) · [Deutsch](./README.de.md) · [Français](./README.fr.md)

<br />

<a href="https://wordcast.app/es">
  <img src="https://wordcast.app/readme/01-hero.webp" alt="Wordcast — texto a voz gratis online. Lee artículos, PDFs y URLs en voz alta en tu navegador. Sin registro, sin subir archivos, sin límite de caracteres." width="100%" />
</a>

<br /><br />

# Wordcast — Texto a Voz Gratis

**Convierte texto a voz gratis, directamente en tu navegador. Sin registro, sin instalar nada, sin límite de caracteres.**

**👉 [wordcast.app/es](https://wordcast.app/es)**

[![100% Gratis](https://img.shields.io/badge/✓%20100%25%20Gratis-sin%20suscripción-22c55e?style=flat-square)]()
[![Sin Registro](https://img.shields.io/badge/✓%20Sin%20Registro-sin%20cuenta-22c55e?style=flat-square)]()
[![Sin Límite](https://img.shields.io/badge/✓%20Sin%20Límite%20de%20Caracteres-ilimitado-22c55e?style=flat-square)]()
[![Sin Upload](https://img.shields.io/badge/✓%20Sin%20Subir%20Archivos-proceso%20local-22c55e?style=flat-square)]()
[![Privacidad](https://img.shields.io/badge/✓%20Privacidad%20Total-texto%20en%20tu%20dispositivo-22c55e?style=flat-square)]()

<br />

[**Abrir Wordcast →**](https://wordcast.app/es) · [Blog](https://wordcast.app/blog) · [Privacidad](https://wordcast.app/privacy) · [Reportar un Bug](https://github.com/rocnubie/wordcast-Free-text-to-speech/issues)

</div>

---

## Sobre Wordcast

**[Wordcast](https://wordcast.app/es) es un lector de texto en voz alta 100% gratuito que funciona en tu navegador.** Pega cualquier texto, sube un PDF o un Word, o introduce una URL — Wordcast lo lee en voz alta usando las voces de calidad que ya tienes instaladas en tu dispositivo. Sin registro, sin subir archivos al servidor, sin límite de caracteres, sin coste por carácter.

Es la alternativa gratuita a Speechify que no te pide crear una cuenta ni instalar una extensión. Solo abre la página y presiona Escuchar.

**Úsalo en [wordcast.app/es](https://wordcast.app/es).** Sin instalación, sin cuenta — abre la página y empieza a escuchar.

**Por qué la gente elige Wordcast:**

- **100% gratis para siempre** — sin plan de pago oculto
- **Sin registro ni cuenta** — abre y usa
- **Sin límite de caracteres** — pega un artículo entero, un capítulo, un informe
- **Tu texto no sale de tu dispositivo** — privacidad total
- **Funciona en el navegador** — sin instalar nada
- Lee PDFs, Word, EPUB, RTF, HTML, TXT, Markdown y URLs

---

## Qué hay en este repositorio

Este repositorio contiene la **parte de código abierto de Wordcast** — la infraestructura reutilizable que hace funcionar el producto: primitivas de UI, parseo de documentos en múltiples formatos (PDF, DOCX, EPUB, HTML, RTF, texto plano), una función de Cloudflare Pages que extrae el texto legible de cualquier URL, enrutamiento i18n para 20 idiomas, constructores de metadatos SEO, generadores de esquemas JSON-LD e integración con Plausible Analytics.

Lo que **no** está en este repositorio (código propietario del producto): el motor TTS, la UI del reproductor, las secciones de marketing, el blog y los assets de marca.

---

## Wordcast en acción

Abre **[wordcast.app/es](https://wordcast.app/es)** — pega cualquier texto y presiona Escuchar. Funciona en todos los navegadores modernos, en escritorio y móvil.

<div align="center">
  <a href="https://wordcast.app/es">
    <img src="https://wordcast.app/readme/02-tool-with-text.webp" alt="Interfaz de Wordcast para convertir texto a voz gratis — pega un texto, elige una voz, presiona Escuchar. Muestra 72 palabras de muestra con la voz Samantha seleccionada" width="820" />
  </a>
  <br />
  <sub>↑ Pega texto, elige una voz, presiona <strong>Escuchar</strong>. Gratis en <a href="https://wordcast.app/es">wordcast.app/es</a>.</sub>
</div>

<br />

<div align="center">
  <a href="https://wordcast.app/es">
    <img src="https://wordcast.app/readme/03-input-formats.webp" alt="Tres formas de usar Wordcast: pegar texto sin límite de caracteres, subir PDF/Word/EPUB/RTF/TXT/MD/HTML (procesado en tu dispositivo sin upload al servidor), y obtener artículo desde una URL" width="820" />
  </a>
  <br />
  <sub>↑ Tres métodos: <strong>pegar texto</strong> · <strong>subir PDF/Word/EPUB/RTF/TXT/MD/HTML</strong> (proceso local) · <strong>pegar una URL</strong></sub>
</div>

---

## Por qué TTS nativo en el navegador

La mayoría de herramientas de texto a voz caen en dos categorías:

| Enfoque | Ejemplos | Problemas |
|---|---|---|
| **TTS en la nube con IA** | ElevenLabs, Murf, Play.ht | Suscripción, sube tu texto a un servidor, límite de caracteres, latencia |
| **Extensión del navegador** | Speechify, Read Aloud | Hay que instalar, pedir permisos, problemas con Manifest V3 |

**[Wordcast](https://wordcast.app/es) elige un tercer camino:** la [Web Speech API](https://developer.mozilla.org/es/docs/Web/API/Web_Speech_API) (disponible en Chrome 33+, Edge, Safari 7+, Firefox 49+) usa las voces que ya tienes instaladas en tu dispositivo — Siri en Apple, Microsoft Natural Voices en Windows, Google TTS en Android. Nada sale del navegador. Sin límite mensual. Sin registro.

**Texto a voz gratis, sin límite de caracteres, sin subir archivos, sin cuenta** — todo con las voces nativas de tu dispositivo.

---

## Características

### Funciones principales

- 🔊 **Gratis** — 100% gratuito, siempre, sin límite de caracteres
- 🚫 **Sin registro** — abre [wordcast.app/es](https://wordcast.app/es) y empieza
- 📴 **Sin upload ni servidor** — síntesis local con Web Speech API
- 🔒 **Tu texto no sale de tu dispositivo**
- ⚡ **Funciona offline** — una vez cargada la página, las voces del dispositivo no necesitan internet

### Documentos y contenido

- 📄 **PDF a voz** — parseo en el navegador con `pdfjs-dist`, sin subir nada
- 📝 **Word (DOCX) a voz** — extracción de texto con `mammoth`
- 🌐 **Leer cualquier URL en voz alta** — Readability elimina anuncios y devuelve solo el texto
- 📚 **EPUB** — descompresión y lectura en el navegador
- 📋 **Texto pegado** — sin límite de caracteres
- 🔤 **Markdown y HTML** — archivos `.md` y `.html`

### Experiencia de escucha

- 🟡 **Resaltado por frases** — la frase actual se resalta mientras se lee
- 📜 **Desplazamiento automático** — sigue la frase resaltada
- 🎛️ **Velocidad ajustable** — de 0.5× a 2×
- 🎙️ **Selector de voz** — elige entre todas las voces instaladas en tu dispositivo
- 🔒 **Controles en pantalla de bloqueo** — Media Session API
- 💾 **Ajustes persistentes** — velocidad, tono y voz se recuerdan

---

## Formatos compatibles

| Formato | Extensión | Dónde se procesa | Librería |
|---|---|---|---|
| PDF | `.pdf` | Navegador (cliente) | `pdfjs-dist` |
| Word | `.docx` | Navegador (cliente) | `mammoth` |
| Libro electrónico | `.epub` | Navegador (cliente) | `jszip` |
| HTML | `.html`, `.htm` | Navegador (cliente) | DOM nativo |
| Texto enriquecido | `.rtf` | Navegador (cliente) | Parser propio |
| Texto plano | `.txt` | Navegador (cliente) | `FileReader` nativo |
| Markdown | `.md`, `.markdown` | Navegador (cliente) | `FileReader` nativo |
| URL web | Cualquier URL | Edge (Cloudflare Pages Function) | `@mozilla/readability` + `linkedom` |

---

## Voces e idiomas disponibles

<div align="center">
  <a href="https://wordcast.app/es">
    <img src="https://wordcast.app/readme/04-international-voices.webp" alt="Wordcast: texto a voz gratis en más de 60 idiomas. Toca una bandera y Wordcast selecciona la voz automáticamente — Estados Unidos, Reino Unido, Australia, Canadá, Alemania y más" width="820" />
  </a>
  <br />
  <sub>↑ Toca una bandera y <a href="https://wordcast.app/es">Wordcast</a> selecciona automáticamente la voz del dispositivo correspondiente.</sub>
</div>

---

## Wordcast vs. Speechify vs. NaturalReader vs. VozMe

> Abre directamente: **[wordcast.app/es](https://wordcast.app/es)**

<div align="center">
  <a href="https://wordcast.app/es">
    <img src="https://wordcast.app/readme/05-comparison-table.webp" alt="Wordcast vs ElevenLabs/OpenAI TTS vs Speechify/NaturalReader vs extensiones de navegador — gratis para siempre, sin límite de caracteres, sin registro, tu texto no sale de tu dispositivo" width="820" />
  </a>
</div>

<br />

| Función | [Wordcast](https://wordcast.app/es) | Speechify | NaturalReader | VozMe |
|---|:---:|:---:|:---:|:---:|
| **Completamente gratis** | ✅ | ⚠️ Limitado | ⚠️ Limitado | ✅ |
| **Sin registro** | ✅ | ❌ | ❌ | ✅ |
| **Sin límite de caracteres** | ✅ | ❌ Premium | ❌ Premium | ✅ |
| **Sin subir archivos** | ✅ | ❌ | ❌ | ❌ |
| **PDF** | ✅ | ✅ | ✅ | ❌ |
| **Word (DOCX)** | ✅ | ✅ Premium | ✅ Premium | ❌ |
| **EPUB** | ✅ | ✅ Premium | ❌ | ❌ |
| **Leer URLs** | ✅ | ✅ Premium | ❌ | ❌ |
| **Resaltado por frases** | ✅ | ✅ Premium | ✅ Premium | ❌ |
| **Offline** | ✅ | ❌ | ❌ | ❌ |
| **Precio** | **Gratis** | $139/año | $99/año | Gratis |

---

## Casos de uso

### 👩‍🎓 Estudiantes

Escucha libros de texto, artículos académicos y apuntes mientras te desplazas. Sube el PDF o pega el texto — Wordcast lo lee con resaltado por frases. Sin cuenta, sin suscripción, funciona en los Chromebook de la facultad.

### 🧠 Dislexia y TDAH

El resaltado por frases combinado con la reproducción de audio reduce considerablemente la carga cognitiva de la lectura. Una alternativa gratuita a las caras suscripciones de tecnología de apoyo.

### 🌐 Aprendizaje de idiomas

Escucha la pronunciación correcta con la voz nativa (Siri en inglés, Microsoft Jenny en español) mientras sigues el texto resaltado. Sin extensiones, funciona en cualquier dispositivo.

### ✍️ Escritores y correctores

Escuchar tu propio texto revela errores que la lectura silenciosa no detecta. Sin límite de caracteres, así que puedes pegar un manuscrito entero.

### 📰 Lectores ocupados

Pega la URL de un artículo, presiona Escuchar y bloquea el móvil. Los controles de la pantalla de bloqueo te permiten pausar y saltar sin desbloquear.

---

## Preguntas frecuentes

<div align="center">
  <a href="https://wordcast.app/es#faq">
    <img src="https://wordcast.app/readme/06-faq.webp" alt="Preguntas frecuentes sobre Wordcast — ¿Es realmente gratis? ¿Puede leer PDFs en voz alta? ¿Hay límite de caracteres? ¿Cómo se compara con Speechify y VozMe?" width="820" />
  </a>
</div>

<br />

**P: ¿Wordcast envía mi texto a un servidor?**
R: No. Los archivos (PDF, DOCX, EPUB, TXT, HTML, RTF) se procesan completamente en tu navegador. La síntesis de voz ocurre en tu dispositivo con la Web Speech API. La única llamada al servidor es para la extracción de URLs — el servidor obtiene la página y devuelve el texto, sin guardar nada. Ver [wordcast.app/privacy](https://wordcast.app/privacy).

**P: ¿Es realmente gratis? ¿Hay límite de caracteres?**
R: [Wordcast](https://wordcast.app/es) es 100% gratis, sin límite de caracteres. Pega un libro entero si quieres.

**P: ¿Necesito crear una cuenta?**
R: No. Abre [wordcast.app/es](https://wordcast.app/es) y empieza a escuchar.

**P: ¿Qué diferencia hay entre este repositorio y wordcast.app?**
R: [wordcast.app](https://wordcast.app/es) es el producto. Este repositorio contiene la parte de código abierto del código fuente — la infraestructura reutilizable (componentes UI, parsers de documentos, i18n, herramientas SEO, extractor de URLs). El motor TTS, la UI del reproductor y la landing page de marca son código propietario.

---

## Licencia

[MIT](./LICENSE) — libre para usar, bifurcar y construir encima.

---

<div align="center">

**[Wordcast](https://wordcast.app/es) — texto a voz gratis para PDFs, artículos y URLs.**

[Abrir Wordcast →](https://wordcast.app/es) · [Blog](https://wordcast.app/blog) · [Privacidad](https://wordcast.app/privacy)

<br />

*Wordcast es texto a voz gratis que funciona en tu navegador — sin registro, sin subir archivos, sin límite de caracteres.*
*Lee PDFs, documentos Word, artículos web y texto plano con las voces que ya tienes en tu dispositivo.*

</div>
