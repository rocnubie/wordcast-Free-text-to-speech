import type { Metadata } from "next";
import { siteConfig } from "@/site.config";
import { defaultLocale, locales } from "@/i18n/locale";

export function getBaseUrl(): string {
  return siteConfig.url.replace(/\/$/, "");
}

export function buildUrl(path: string = ""): string {
  const normalized = path && !path.startsWith("/") ? `/${path}` : path;
  return `${getBaseUrl()}${normalized}`;
}

/**
 * Build hreflang alternates for a path.
 * Today there is only one locale; this still emits a canonical and a
 * `x-default` so the structure is ready when more locales are added.
 */
export function buildAlternates(path: string = ""): NonNullable<
  Metadata["alternates"]
> {
  const cleaned = path.replace(/^\//, "");
  const suffix = cleaned ? `/${cleaned}` : "";
  // Default locale is served without a prefix (localePrefix: "as-needed").
  const prefix = (loc: string) => (loc === defaultLocale ? "" : `/${loc}`);
  const languages: Record<string, string> = {};
  for (const loc of locales) {
    languages[loc] = buildUrl(`${prefix(loc)}${suffix}`);
  }
  languages["x-default"] = buildUrl(suffix);
  return {
    canonical: buildUrl(suffix),
    languages,
  };
}

interface PageMetadataInput {
  title: string;
  description?: string;
  path?: string;
  ogImage?: string;
  type?: "website" | "article";
  publishedAt?: string;
}

export function buildPageMetadata({
  title,
  description,
  path = "",
  ogImage,
  type = "website",
  publishedAt,
}: PageMetadataInput): Metadata {
  const url = buildUrl(path);
  const desc = description ?? siteConfig.description;
  const image = ogImage ?? buildUrl("/og-image.png");
  return {
    title,
    description: desc,
    alternates: buildAlternates(path),
    openGraph: {
      type,
      url,
      title,
      description: desc,
      siteName: siteConfig.name,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      ...(publishedAt ? { publishedTime: publishedAt } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: desc,
      images: [image],
      ...(siteConfig.twitterHandle
        ? { creator: siteConfig.twitterHandle }
        : {}),
    },
  };
}

export { defaultLocale };
