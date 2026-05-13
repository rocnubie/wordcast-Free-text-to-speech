<div align="center">

[English](./README.md) · [简体中文](./README.zh-CN.md) · [日本語](./README.ja.md) · [Español](./README.es.md) · [Português (BR)](./README.pt-BR.md) · [한국어](./README.ko.md) · [Deutsch](./README.de.md) · [**Français**](./README.fr.md)

<br />

<a href="https://wordcast.app/fr">
  <img src="https://wordcast.app/readme/01-hero.webp" alt="Wordcast — synthèse vocale gratuite en ligne. Lit des articles, PDFs et URLs à voix haute dans votre navigateur. Sans inscription, sans téléverser, sans limite de caractères." width="100%" />
</a>

<br /><br />

# Wordcast — Synthèse Vocale Gratuite

**Convertissez du texte en voix gratuitement, directement dans votre navigateur. Sans inscription, sans installation, sans limite de caractères.**

**👉 [wordcast.app/fr](https://wordcast.app/fr)**

[![100% Gratuit](https://img.shields.io/badge/✓%20100%25%20Gratuit-sans%20abonnement-22c55e?style=flat-square)]()
[![Sans Inscription](https://img.shields.io/badge/✓%20Sans%20Inscription-ouvrez%20et%20utilisez-22c55e?style=flat-square)]()
[![Sans Limite](https://img.shields.io/badge/✓%20Sans%20Limite%20de%20Caractères-illimité-22c55e?style=flat-square)]()
[![Sans Upload](https://img.shields.io/badge/✓%20Sans%20Téléverser-traitement%20local-22c55e?style=flat-square)]()
[![RGPD](https://img.shields.io/badge/✓%20Conforme%20RGPD-texte%20sur%20votre%20appareil-22c55e?style=flat-square)]()

<br />

[**Ouvrir Wordcast →**](https://wordcast.app/fr) · [Blog](https://wordcast.app/blog) · [Confidentialité](https://wordcast.app/privacy) · [Signaler un Bug](https://github.com/rocnubie/wordcast-Free-text-to-speech/issues)

</div>

---

## À propos de Wordcast

**[Wordcast](https://wordcast.app/fr) est un outil de synthèse vocale 100% gratuit qui fonctionne dans votre navigateur.** Collez n'importe quel texte, téléversez un PDF ou un document Word, ou entrez une URL — Wordcast le lit à voix haute avec les voix de haute qualité déjà installées sur votre appareil. Sans inscription, sans envoi de fichiers à un serveur, sans limite de caractères, sans facturation à la minute.

Votre texte ne quitte jamais votre navigateur. Ce n'est pas une promesse marketing — c'est la réalité technique : la synthèse vocale s'effectue via la Web Speech API directement sur votre appareil, conforme RGPD sans transfert de données.

**Utilisez Wordcast sur [wordcast.app/fr](https://wordcast.app/fr).** Sans installation, sans compte — ouvrez la page et commencez à écouter.

**Pourquoi les utilisateurs choisissent Wordcast :**

- **100% gratuit pour toujours** — aucun plan payant caché
- **Sans inscription** — ouvrez et utilisez
- **Sans limite de caractères** — collez un article entier, un chapitre, un rapport
- **Votre texte ne quitte pas votre appareil** — conforme RGPD
- **Fonctionne dans le navigateur** — sans installation
- Prend en charge PDF, Word, EPUB, RTF, HTML, TXT, Markdown et URLs

---

## Contenu de ce dépôt

Ce dépôt contient la **partie open source de Wordcast** — l'infrastructure réutilisable qui fait fonctionner le produit : primitives UI, parsers de documents multi-formats (PDF, DOCX, EPUB, HTML, RTF, texte brut), une Cloudflare Pages Function pour l'extraction de texte depuis des URLs, le routage i18n pour 20 langues, les constructeurs de métadonnées SEO, les générateurs de schémas JSON-LD et l'intégration Plausible Analytics.

Ce qui n'est **pas** dans ce dépôt (code propriétaire) : le moteur TTS, l'UI du lecteur, les sections marketing, le blog et les assets de marque.

---

## Wordcast en action

Ouvrez **[wordcast.app/fr](https://wordcast.app/fr)** — collez n'importe quel texte et appuyez sur Écouter. Fonctionne sur tous les navigateurs modernes, sur ordinateur et mobile.

<div align="center">
  <a href="https://wordcast.app/fr">
    <img src="https://wordcast.app/readme/02-tool-with-text.webp" alt="Interface Wordcast de synthèse vocale gratuite — collez un texte, choisissez une voix, appuyez sur Écouter. Exemple de 72 mots chargé avec la voix Samantha" width="820" />
  </a>
  <br />
  <sub>↑ Collez du texte, choisissez une voix, appuyez sur <strong>Écouter</strong>. Gratuit sur <a href="https://wordcast.app/fr">wordcast.app/fr</a>.</sub>
</div>

<br />

<div align="center">
  <a href="https://wordcast.app/fr">
    <img src="https://wordcast.app/readme/03-input-formats.webp" alt="Trois méthodes d'entrée : coller du texte sans limite de caractères, téléverser un PDF/Word/EPUB/RTF/TXT/MD/HTML (traité localement sans upload serveur), récupérer un article par URL" width="820" />
  </a>
  <br />
  <sub>↑ Trois méthodes : <strong>coller du texte</strong> · <strong>téléverser PDF/Word/EPUB/RTF/TXT/MD/HTML</strong> (traitement local) · <strong>entrer une URL</strong></sub>
</div>

---

## Pourquoi la synthèse vocale native du navigateur

La plupart des outils de synthèse vocale se répartissent en deux catégories :

| Approche | Exemples | Inconvénients |
|---|---|---|
| **TTS cloud avec IA** | ElevenLabs, Murf, Play.ht | Abonnement, envoi du texte au serveur, limite de caractères, latence |
| **Extension de navigateur** | Speechify, Read Aloud | Installation requise, demandes de permissions, problèmes Manifest V3 |

**[Wordcast](https://wordcast.app/fr) choisit une troisième voie :** la [Web Speech API](https://developer.mozilla.org/fr/docs/Web/API/Web_Speech_API) (disponible dès Chrome 33+, Edge, Safari 7+, Firefox 49+) utilise les voix déjà installées sur votre appareil — Siri d'Apple, Microsoft Natural Voices sur Windows, Google TTS sur Android. Rien ne quitte le navigateur. Pas de limite mensuelle. Pas d'inscription.

**Synthèse vocale gratuite, sans limite de caractères, sans téléversement, sans compte** — avec les voix natives de votre appareil.

---

## Fonctionnalités

### Fonctions principales

- 🔊 **Gratuit** — 100% gratuit, pour toujours, sans limite de caractères
- 🚫 **Sans inscription** — ouvrez [wordcast.app/fr](https://wordcast.app/fr) et commencez
- 📴 **Sans upload ni serveur** — synthèse locale avec la Web Speech API
- 🔒 **Votre texte ne quitte pas votre appareil** — conforme RGPD
- ⚡ **Fonctionne hors ligne** — après le chargement de la page, les voix du dispositif n'ont pas besoin d'internet

### Documents et contenu

- 📄 **Lire un PDF à voix haute** — traitement dans le navigateur avec `pdfjs-dist`, sans upload
- 📝 **Lire un Word (DOCX) à voix haute** — extraction de texte avec `mammoth`
- 🌐 **Lire n'importe quelle URL à voix haute** — Readability supprime publicités et navigation
- 📚 **EPUB** — décompression et lecture dans le navigateur
- 📋 **Texte collé** — sans limite de caractères
- 🔤 **Markdown et HTML** — fichiers `.md` et `.html`

### Expérience d'écoute

- 🟡 **Surlignage par phrase** — la phrase en cours est mise en évidence pendant la lecture
- 📜 **Défilement automatique** — suit la phrase surlignée
- 🎛️ **Vitesse réglable** — de 0,5× à 2×
- 🎙️ **Sélecteur de voix** — choisissez parmi toutes les voix installées sur l'appareil
- 🔒 **Contrôles sur l'écran de verrouillage** — Media Session API
- 💾 **Paramètres persistants** — vitesse, ton et voix sont mémorisés

---

## Formats pris en charge

| Format | Extension | Où est-il traité | Bibliothèque |
|---|---|---|---|
| PDF | `.pdf` | Navigateur (côté client) | `pdfjs-dist` |
| Word | `.docx` | Navigateur (côté client) | `mammoth` |
| Livre numérique | `.epub` | Navigateur (côté client) | `jszip` |
| HTML | `.html`, `.htm` | Navigateur (côté client) | DOM natif |
| Texte enrichi | `.rtf` | Navigateur (côté client) | Parser maison |
| Texte brut | `.txt` | Navigateur (côté client) | `FileReader` natif |
| Markdown | `.md`, `.markdown` | Navigateur (côté client) | `FileReader` natif |
| URL web | N'importe quelle URL | Edge (Cloudflare Pages Function) | `@mozilla/readability` + `linkedom` |

---

## Voix et langues disponibles

<div align="center">
  <a href="https://wordcast.app/fr">
    <img src="https://wordcast.app/readme/04-international-voices.webp" alt="Wordcast synthèse vocale gratuite en 60+ langues. Touchez un drapeau, Wordcast sélectionne automatiquement la voix correspondante — États-Unis, Royaume-Uni, Australie, Canada, Allemagne et plus" width="820" />
  </a>
  <br />
  <sub>↑ Touchez un drapeau, et <a href="https://wordcast.app/fr">Wordcast</a> sélectionne automatiquement la voix correspondante de l'appareil.</sub>
</div>

---

## Wordcast vs. Speechify vs. NaturalReader vs. Voxygen

> Ouvrir directement : **[wordcast.app/fr](https://wordcast.app/fr)**

<div align="center">
  <a href="https://wordcast.app/fr">
    <img src="https://wordcast.app/readme/05-comparison-table.webp" alt="Wordcast vs ElevenLabs/OpenAI TTS vs Speechify/NaturalReader vs extensions navigateur — gratuit pour toujours, sans limite de caractères, sans inscription, votre texte ne quitte pas votre appareil" width="820" />
  </a>
</div>

<br />

| Fonctionnalité | [Wordcast](https://wordcast.app/fr) | Speechify | NaturalReader | Voxygen |
|---|:---:|:---:|:---:|:---:|
| **Entièrement gratuit** | ✅ | ⚠️ Limité | ⚠️ Limité | ❌ |
| **Sans inscription** | ✅ | ❌ | ❌ | ❌ |
| **Sans limite de caractères** | ✅ | ❌ Premium | ❌ Premium | ❌ |
| **Sans téléverser** | ✅ | ❌ | ❌ | ❌ |
| **PDF** | ✅ | ✅ | ✅ | ✅ |
| **Word (DOCX)** | ✅ | ✅ Premium | ✅ Premium | ✅ |
| **EPUB** | ✅ | ✅ Premium | ❌ | ❌ |
| **Lire des URLs** | ✅ | ✅ Premium | ❌ | ❌ |
| **Surlignage par phrase** | ✅ | ✅ Premium | ✅ Premium | ❌ |
| **Hors ligne** | ✅ | ❌ | ❌ | ❌ |
| **Prix** | **Gratuit** | $139/an | $99/an | Sur devis |

---

## Cas d'usage

### 👩‍🎓 Étudiants

Écoutez des manuels, des articles académiques et des notes de cours lors de vos déplacements. Téléversez le PDF ou collez le texte — Wordcast lit avec surlignage par phrase. Sans compte, sans abonnement, fonctionne sur les Chromebooks scolaires.

### 🧠 Dyslexie et TDAH

Le surlignage par phrase combiné à la lecture audio réduit considérablement la charge cognitive de la lecture. Une alternative gratuite aux coûteux abonnements d'assistance technologique.

### 🌐 Apprentissage des langues

Écoutez la prononciation correcte avec une voix native (Siri en anglais, Microsoft Jenny en espagnol) tout en suivant le texte surligné. Sans extension, fonctionne sur n'importe quel appareil.

### ✍️ Écrivains et correcteurs

Entendre sa propre écriture révèle des erreurs que la lecture silencieuse ne détecte pas. Sans limite de caractères, donc un manuscrit entier peut être collé.

### 📰 Lecteurs pressés

Collez l'URL d'un article, appuyez sur Écouter et verrouillez votre téléphone. Les contrôles de l'écran de verrouillage permettent de mettre en pause et de sauter sans déverrouiller.

---

## Questions fréquentes

<div align="center">
  <a href="https://wordcast.app/fr#faq">
    <img src="https://wordcast.app/readme/06-faq.webp" alt="Wordcast FAQ — Vraiment gratuit ? Peut lire des PDFs ? Limite de caractères ? Conforme RGPD ? Différence avec Speechify et Voxygen ?" width="820" />
  </a>
</div>

<br />

**Q : Wordcast envoie-t-il mon texte à un serveur ?**
R : Non. Les fichiers (PDF, DOCX, EPUB, TXT, HTML, RTF) sont traités entièrement dans votre navigateur. La synthèse vocale s'effectue sur votre appareil via la Web Speech API. Le seul appel serveur concerne l'extraction d'URL — le serveur récupère la page et renvoie le texte, sans rien stocker. Voir [wordcast.app/privacy](https://wordcast.app/privacy).

**Q : Est-ce vraiment gratuit ? Y a-t-il une limite de caractères ?**
R : [Wordcast](https://wordcast.app/fr) est 100% gratuit, sans limite de caractères. Collez un livre entier si vous le souhaitez.

**Q : Dois-je créer un compte ?**
R : Non. Ouvrez [wordcast.app/fr](https://wordcast.app/fr) et commencez à écouter.

**Q : Wordcast est-il conforme au RGPD ?**
R : Oui. Le texte et les fichiers étant traités exclusivement en local dans le navigateur, aucune donnée n'est transmise à des tiers. Le seul appel externe est l'extraction d'URL, qui ne renvoie que le texte lu — sans journalisation ni stockage.

**Q : Quelle est la différence entre ce dépôt et wordcast.app ?**
R : [wordcast.app](https://wordcast.app/fr) est le produit. Ce dépôt contient la partie open source du code — l'infrastructure réutilisable (composants UI, parsers de documents, i18n, outils SEO, extracteur d'URLs). Le moteur TTS, l'UI du lecteur et la landing page de marque sont du code propriétaire.

---

## Licence

[MIT](./LICENSE) — libre d'utiliser, de bifurquer et de construire dessus.

---

<div align="center">

**[Wordcast](https://wordcast.app/fr) — synthèse vocale gratuite pour PDFs, articles et URLs.**

[Ouvrir Wordcast →](https://wordcast.app/fr) · [Blog](https://wordcast.app/blog) · [Confidentialité](https://wordcast.app/privacy)

<br />

*Wordcast est une synthèse vocale gratuite qui fonctionne dans votre navigateur — sans inscription, sans téléverser, sans limite de caractères.*
*Lit des PDFs, des documents Word, des articles web et du texte brut avec les voix déjà installées sur votre appareil.*

</div>
