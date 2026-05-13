<div align="center">

[English](./README.md) · [简体中文](./README.zh-CN.md) · [日本語](./README.ja.md) · [Español](./README.es.md) · [Português (BR)](./README.pt-BR.md) · [한국어](./README.ko.md) · [**Deutsch**](./README.de.md) · [Français](./README.fr.md)

<br />

<a href="https://wordcast.app/de">
  <img src="https://wordcast.app/readme/01-hero.webp" alt="Wordcast — Text kostenlos vorlesen lassen. Liest Artikel, PDFs und URLs im Browser vor. Ohne Anmeldung, ohne Upload, ohne Zeichenlimit. DSGVO-freundlich." width="100%" />
</a>

<br /><br />

# Wordcast — Text kostenlos vorlesen lassen

**Texte, PDFs und URLs im Browser vorlesen lassen — kostenlos, ohne Anmeldung, ohne Zeichenlimit. DSGVO-freundlich.**

**👉 [wordcast.app/de](https://wordcast.app/de)**

[![Kostenlos](https://img.shields.io/badge/✓%20Dauerhaft%20kostenlos-kein%20Abo-22c55e?style=flat-square)]()
[![Ohne Anmeldung](https://img.shields.io/badge/✓%20Ohne%20Anmeldung-sofort%20nutzen-22c55e?style=flat-square)]()
[![Ohne Zeichenlimit](https://img.shields.io/badge/✓%20Ohne%20Zeichenlimit-unbegrenzt-22c55e?style=flat-square)]()
[![Kein Upload](https://img.shields.io/badge/✓%20Kein%20Upload-lokal%20verarbeitet-22c55e?style=flat-square)]()
[![DSGVO](https://img.shields.io/badge/✓%20DSGVO--freundlich-Text%20bleibt%20lokal-22c55e?style=flat-square)]()

<br />

[**Wordcast öffnen →**](https://wordcast.app/de) · [Blog](https://wordcast.app/blog) · [Datenschutz](https://wordcast.app/privacy) · [Bug melden](https://github.com/rocnubie/wordcast-Free-text-to-speech/issues)

</div>

---

## Über Wordcast

**[Wordcast](https://wordcast.app/de) ist ein komplett kostenloser Browser-Vorlesedienst.** Text einfügen, PDF oder Word-Datei hochladen oder eine URL eingeben — Wordcast liest alles mit den hochwertigen Stimmen vor, die bereits auf deinem Gerät installiert sind. Ohne Anmeldung, ohne Upload auf einen Server, ohne Zeichenlimit, ohne KI-Serverkosten.

Dein Text verlässt deinen Browser nie. Das ist kein Marketing-Versprechen, sondern die technische Realität: die Sprachsynthese läuft mit der Web Speech API direkt auf deinem Gerät, DSGVO-freundlich ohne Datenweitergabe.

**Nutze Wordcast unter [wordcast.app/de](https://wordcast.app/de).** Keine Installation, kein Konto — öffne die Seite und drücke Vorlesen.

**Warum sich Nutzer für Wordcast entscheiden:**

- **Dauerhaft kostenlos** — kein verstecktes Bezahlmodell
- **Ohne Anmeldung** — sofort loslegen
- **Ohne Zeichenlimit** — ganzen Artikel, Kapitel oder Bericht einfügen
- **Dein Text verlässt dein Gerät nicht** — DSGVO-freundlich
- **Läuft im Browser** — keine Installation nötig
- Unterstützt PDF, Word, EPUB, RTF, HTML, TXT, Markdown und URLs

---

## Inhalt dieses Repositories

Dieses Repository enthält den **Open-Source-Teil des Wordcast-Codebases** — die wiederverwendbare Infrastruktur, die das Produkt antreibt: UI-Primitives, Dokumentenparser für mehrere Formate (PDF, DOCX, EPUB, HTML, RTF, Klartext), eine Cloudflare Pages Function zur Textextraktion aus URLs, i18n-Routing für 20 Sprachen, SEO-Metadaten-Builder, JSON-LD-Schema-Generatoren und Plausible-Analytics-Integration.

Was **nicht** in diesem Repository enthalten ist (proprietärer Produktcode): TTS-Engine-UI, Player-Logik, Marken-Landingpage, Blogbeiträge, Marken-Assets.

---

## Wordcast in Aktion

Öffne **[wordcast.app/de](https://wordcast.app/de)** — füge beliebigen Text ein und drücke Vorlesen. Funktioniert in allen modernen Browsern, auf Desktop und Mobilgerät.

<div align="center">
  <a href="https://wordcast.app/de">
    <img src="https://wordcast.app/readme/02-tool-with-text.webp" alt="Wordcast Text-zu-Sprache Interface — Text einfügen, Stimme wählen, Vorlesen drücken. 72-Wort-Beispiel mit Samantha-Stimme geladen" width="820" />
  </a>
  <br />
  <sub>↑ Text einfügen, Stimme wählen, <strong>Vorlesen</strong> drücken. Kostenlos unter <a href="https://wordcast.app/de">wordcast.app/de</a>.</sub>
</div>

<br />

<div align="center">
  <a href="https://wordcast.app/de">
    <img src="https://wordcast.app/readme/03-input-formats.webp" alt="Drei Eingabemethoden: Text einfügen ohne Zeichenlimit, PDF/Word/EPUB/RTF/TXT/MD/HTML hochladen (lokal verarbeitet, kein Upload auf Server), Artikel per URL abrufen" width="820" />
  </a>
  <br />
  <sub>↑ Drei Methoden: <strong>Text einfügen</strong> · <strong>PDF/Word/EPUB/RTF/TXT/MD/HTML hochladen</strong> (lokal verarbeitet) · <strong>URL eingeben</strong></sub>
</div>

---

## Warum browsernatives TTS

Die meisten Vorlesetools fallen in zwei Kategorien:

| Ansatz | Beispiele | Nachteile |
|---|---|---|
| **KI-Cloud-TTS** | ElevenLabs, Murf, Play.ht | Abo-Kosten, Text wird hochgeladen, Zeichenlimit, Latenz |
| **Browser-Erweiterung** | Speechify, Read Aloud | Installation nötig, Berechtigungsanfragen, Manifest-V3-Probleme |

**[Wordcast](https://wordcast.app/de) wählt einen dritten Weg:** Die [Web Speech API](https://developer.mozilla.org/de/docs/Web/API/Web_Speech_API) (verfügbar ab Chrome 33+, Edge, Safari 7+, Firefox 49+) nutzt die Stimmen, die bereits auf deinem Gerät installiert sind — Apple Siri Neural, Microsoft Natural Voices, Google TTS. Nichts verlässt den Browser. Kein Monatslimit. Keine Anmeldung.

**Kostenlos · ohne Zeichenlimit · kein Upload · kein Konto** — mit den nativen Systemstimmen deines Geräts.

---

## Funktionen

### Kernfunktionen

- 🔊 **Kostenlos** — dauerhaft kostenlos, ohne Zeichenlimit
- 🚫 **Ohne Anmeldung** — [wordcast.app/de](https://wordcast.app/de) öffnen und sofort loslegen
- 📴 **Kein Upload, kein Server** — lokale Synthese mit der Web Speech API
- 🔒 **Dein Text verlässt dein Gerät nicht** — DSGVO-freundlich
- ⚡ **Offline nutzbar** — nach dem Laden der Seite brauchen die Gerätestimmen kein Internet

### Dokumente und Inhalte

- 📄 **PDF vorlesen lassen** — Browser-seitige Verarbeitung mit `pdfjs-dist`, kein Upload
- 📝 **Word (DOCX) vorlesen lassen** — Textextraktion mit `mammoth`
- 🌐 **Beliebige URL vorlesen lassen** — Readability entfernt Werbung und liefert nur den Artikeltext
- 📚 **EPUB** — Entpackung und Vorlesen im Browser
- 📋 **Text einfügen** — ohne Zeichenlimit
- 🔤 **Markdown und HTML** — `.md` und `.html` Dateien

### Hörerlebnis

- 🟡 **Satzweise Hervorhebung** — der aktuelle Satz wird beim Vorlesen hervorgehoben
- 📜 **Automatisches Scrollen** — folgt dem hervorgehobenen Satz
- 🎛️ **Einstellbare Geschwindigkeit** — 0,5× bis 2×
- 🎙️ **Stimmauswahl** — wähle aus allen auf dem Gerät installierten Stimmen
- 🔒 **Sperrbildschirm-Steuerung** — Media Session API
- 💾 **Einstellungen werden gespeichert** — Geschwindigkeit, Tonhöhe und Stimme bleiben erhalten

---

## Unterstützte Formate

| Format | Erweiterung | Verarbeitung | Bibliothek |
|---|---|---|---|
| PDF | `.pdf` | Browser (clientseitig) | `pdfjs-dist` |
| Word-Dokument | `.docx` | Browser (clientseitig) | `mammoth` |
| E-Book | `.epub` | Browser (clientseitig) | `jszip` |
| HTML-Datei | `.html`, `.htm` | Browser (clientseitig) | Nativer DOM |
| Rich Text | `.rtf` | Browser (clientseitig) | Eigener Parser |
| Klartext | `.txt` | Browser (clientseitig) | Nativer `FileReader` |
| Markdown | `.md`, `.markdown` | Browser (clientseitig) | Nativer `FileReader` |
| Web-URL | Beliebige URL | Edge (Cloudflare Pages Function) | `@mozilla/readability` + `linkedom` |

---

## Stimmen und Sprachen

<div align="center">
  <a href="https://wordcast.app/de">
    <img src="https://wordcast.app/readme/04-international-voices.webp" alt="Wordcast kostenlose Sprachausgabe in 60+ Sprachen. Tippe auf eine Flagge, Wordcast wählt automatisch die passende Stimme — USA, Großbritannien, Australien, Kanada, Deutschland und mehr" width="820" />
  </a>
  <br />
  <sub>↑ Tippe auf eine Flagge, und <a href="https://wordcast.app/de">Wordcast</a> wählt automatisch die passende Gerätestimme.</sub>
</div>

---

## Wordcast vs. Speechify vs. NaturalReader vs. Linguatec

> Direkt öffnen: **[wordcast.app/de](https://wordcast.app/de)**

<div align="center">
  <a href="https://wordcast.app/de">
    <img src="https://wordcast.app/readme/05-comparison-table.webp" alt="Wordcast vs ElevenLabs/OpenAI TTS vs Speechify/NaturalReader vs Browser-Erweiterungen — dauerhaft kostenlos, ohne Zeichenbegrenzung, ohne Anmeldung, Text verlässt das Gerät nicht" width="820" />
  </a>
</div>

<br />

| Funktion | [Wordcast](https://wordcast.app/de) | Speechify | NaturalReader | Linguatec |
|---|:---:|:---:|:---:|:---:|
| **Dauerhaft kostenlos** | ✅ | ⚠️ Eingeschränkt | ⚠️ Eingeschränkt | ❌ |
| **Ohne Anmeldung** | ✅ | ❌ | ❌ | ❌ |
| **Ohne Zeichenlimit** | ✅ | ❌ Premium | ❌ Premium | ❌ |
| **Kein Upload** | ✅ | ❌ | ❌ | ❌ |
| **PDF** | ✅ | ✅ | ✅ | ✅ |
| **Word (DOCX)** | ✅ | ✅ Premium | ✅ Premium | ✅ |
| **EPUB** | ✅ | ✅ Premium | ❌ | ❌ |
| **URL vorlesen** | ✅ | ✅ Premium | ❌ | ❌ |
| **Satzweise Hervorhebung** | ✅ | ✅ Premium | ✅ Premium | ❌ |
| **Offline** | ✅ | ❌ | ❌ | ❌ |
| **Preis** | **Kostenlos** | $139/Jahr | $99/Jahr | Ab €79 |

---

## Anwendungsfälle

### 👩‍🎓 Studium und Schule

Höre Lehrbücher, wissenschaftliche Artikel und Mitschriften beim Pendeln. PDF hochladen oder Text einfügen — Wordcast liest mit satzweiser Hervorhebung vor. Ohne Konto, ohne Abo, funktioniert auf Schul-Chromebooks.

### 🧠 Legasthenie und ADHS

Satzweise Hervorhebung kombiniert mit Audio-Wiedergabe reduziert die kognitive Belastung beim Lesen erheblich. Eine kostenlose Alternative zu teuren Assistenztechnologie-Abos.

### 🌐 Sprachlernen

Höre die korrekte Aussprache mit einer Muttersprachler-Stimme (Siri auf Englisch, Microsoft Jenny auf Spanisch), während du dem hervorgehobenen Text folgst. Keine Erweiterung nötig, funktioniert auf jedem Gerät.

### ✍️ Schreiben und Lektorat

Das eigene Schreiben zu hören deckt Fehler auf, die stilles Lesen übersieht. Ohne Zeichenlimit, also kann das gesamte Manuskript eingefügt werden.

### 📰 Pendler und Vielleser

URL eines Artikels einfügen, Vorlesen drücken, Handy sperren. Die Sperrbildschirm-Steuerung ermöglicht Pause und Überspringen ohne Entsperren.

---

## Häufige Fragen

<div align="center">
  <a href="https://wordcast.app/de#faq">
    <img src="https://wordcast.app/readme/06-faq.webp" alt="Wordcast FAQ — Wirklich kostenlos? PDF vorlesen lassen? Zeichenlimit? DSGVO-konform? Unterschied zu Speechify und Linguatec?" width="820" />
  </a>
</div>

<br />

**F: Sendet Wordcast meinen Text an einen Server?**
A: Nein. Dateien (PDF, DOCX, EPUB, TXT, HTML, RTF) werden vollständig im Browser verarbeitet. Die Sprachsynthese läuft mit der Web Speech API auf deinem Gerät. Der einzige Server-Aufruf erfolgt für die URL-Extraktion — der Server lädt die Seite und gibt den Text zurück, ohne ihn zu speichern. Datenschutzerklärung: [wordcast.app/privacy](https://wordcast.app/privacy).

**F: Ist Wordcast wirklich kostenlos? Gibt es ein Zeichenlimit?**
A: [Wordcast](https://wordcast.app/de) ist 100% kostenlos, ohne Zeichenlimit. Füge ein ganzes Buch ein, wenn du möchtest.

**F: Brauche ich ein Konto?**
A: Nein. Öffne [wordcast.app/de](https://wordcast.app/de) und leg sofort los.

**F: Ist Wordcast DSGVO-konform?**
A: Ja. Da Text und Dateien ausschließlich lokal im Browser verarbeitet werden, gibt es keine Datenübertragung an Dritte. Der einzige externe Aufruf ist die URL-Extraktion, bei der nur der abgerufene Seitentext zurückgegeben wird — kein Logging, keine Speicherung.

**F: Was ist der Unterschied zwischen diesem Repository und wordcast.app?**
A: [wordcast.app](https://wordcast.app/de) ist das Produkt. Dieses Repository enthält den Open-Source-Teil des Codes — die wiederverwendbare Infrastruktur (UI-Komponenten, Dokumentenparser, i18n, SEO-Hilfsmittel, URL-Extraktor). TTS-Engine, Player-UI und Marken-Landingpage sind proprietärer Code.

---

## Lizenz

[MIT](./LICENSE) — frei zu nutzen, zu forken und weiterzuentwickeln.

---

<div align="center">

**[Wordcast](https://wordcast.app/de) — kostenlos Texte, PDFs und URLs vorlesen lassen.**

[Wordcast öffnen →](https://wordcast.app/de) · [Blog](https://wordcast.app/blog) · [Datenschutz](https://wordcast.app/privacy)

<br />

*Wordcast ist ein kostenloser Vorlesedienst, der im Browser läuft — ohne Anmeldung, ohne Upload, ohne Zeichenlimit.*
*Liest PDFs, Word-Dokumente, Webartikel und Klartext mit den Stimmen vor, die bereits auf deinem Gerät installiert sind.*

</div>
