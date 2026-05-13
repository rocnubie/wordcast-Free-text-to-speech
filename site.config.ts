/**
 * Single source of truth for brand identity.
 * Change values here to rebrand the entire site.
 *
 * Locales: add a BCP-47 code here AND drop a matching JSON file in
 * `messages/<code>.json`. The language switcher and routing pick it up
 * automatically on the next build.
 */
export const siteConfig = {
  name: "Your Site",
  tagline: "Your tagline here",
  description: "Replace this with a one-sentence description of your site.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
  twitterHandle: "",
  defaultLocale: "en",
  locales: ["en"] as const,
  plausible: {
    domain: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN || "",
    scriptUrl:
      process.env.NEXT_PUBLIC_PLAUSIBLE_SCRIPT_URL ||
      "https://plausible.io/js/script.js",
  },
} as const;

export type SiteLocale = (typeof siteConfig.locales)[number];
