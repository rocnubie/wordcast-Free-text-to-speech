import { siteConfig } from "@/site.config";

export const locales = [...siteConfig.locales];
export const defaultLocale = siteConfig.defaultLocale;

export type Locale = (typeof locales)[number];

/**
 * Display name shown in the language switcher. Each label is in its own
 * language so a French speaker sees "Français", not "French".
 */
export const localeNames: Record<string, string> = {
  en: "English",
  es: "Español",
  hi: "हिन्दी",
  "pt-BR": "Português",
  ja: "日本語",
  de: "Deutsch",
  fr: "Français",
  ru: "Русский",
  ar: "العربية",
  ko: "한국어",
};

/**
 * Flag shown next to the locale label. Best-effort regional pick; speakers
 * of regional variants can swap this without touching routing.
 */
export const localeFlags: Record<string, string> = {
  en: "🇺🇸",
  es: "🇪🇸",
  hi: "🇮🇳",
  "pt-BR": "🇧🇷",
  ja: "🇯🇵",
  de: "🇩🇪",
  fr: "🇫🇷",
  ru: "🇷🇺",
  ar: "🇸🇦",
  ko: "🇰🇷",
};

const RTL_LOCALES = new Set(["ar", "he", "fa", "ur"]);

export function getDirection(locale: string): "ltr" | "rtl" {
  return RTL_LOCALES.has(locale.split("-")[0]) ? "rtl" : "ltr";
}

/**
 * BCP-47 tag used to pick the default speech-synthesis voice on each
 * locale's pages. Falls back to the locale itself.
 */
export const localeSpeechTag: Record<string, string> = {
  en: "en-US",
  es: "es-ES",
  hi: "hi-IN",
  "pt-BR": "pt-BR",
  ja: "ja-JP",
  de: "de-DE",
  fr: "fr-FR",
  ru: "ru-RU",
  ar: "ar-SA",
  ko: "ko-KR",
};

export function getSpeechTag(locale: string): string {
  return localeSpeechTag[locale] ?? locale;
}
