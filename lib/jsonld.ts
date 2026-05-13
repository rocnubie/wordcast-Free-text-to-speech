import { siteConfig } from "@/site.config";
import { buildUrl } from "./seo";

export type JsonLd = Record<string, unknown>;

export function websiteSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: buildUrl("/"),
    description: siteConfig.description,
    inLanguage: "en",
  };
}

export function webApplicationSchema(input: {
  alternateNames?: string[];
  applicationCategory?: string;
  applicationSubCategory?: string;
  operatingSystem?: string;
  browserRequirements?: string;
  featureList?: string[];
  priceCurrency?: string;
} = {}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: siteConfig.name,
    ...(input.alternateNames ? { alternateName: input.alternateNames } : {}),
    url: buildUrl("/"),
    description: siteConfig.description,
    applicationCategory: input.applicationCategory ?? "UtilitiesApplication",
    ...(input.applicationSubCategory
      ? { applicationSubCategory: input.applicationSubCategory }
      : {}),
    operatingSystem: input.operatingSystem ?? "Any (browser)",
    ...(input.browserRequirements
      ? { browserRequirements: input.browserRequirements }
      : {}),
    inLanguage: "en",
    isAccessibleForFree: true,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: input.priceCurrency ?? "USD",
      availability: "https://schema.org/InStock",
    },
    ...(input.featureList ? { featureList: input.featureList } : {}),
  };
}

export function organizationSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: buildUrl("/"),
    logo: buildUrl("/favicon.svg"),
    description: siteConfig.description,
  };
}

export function howToSchema(input: {
  name: string;
  description?: string;
  steps: Array<{ name: string; text: string }>;
  totalTime?: string;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: input.name,
    description: input.description,
    totalTime: input.totalTime ?? "PT5S",
    inLanguage: "en",
    step: input.steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };
}

export function articleSchema(input: {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  updatedAt?: string;
  basePath?: string;
}): JsonLd {
  const base = input.basePath ?? "/blog";
  const url = buildUrl(`${base}/${input.slug}`);
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    url,
    mainEntityOfPage: url,
    datePublished: input.publishedAt,
    dateModified: input.updatedAt ?? input.publishedAt,
    inLanguage: "en",
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: buildUrl("/"),
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: buildUrl("/"),
    },
  };
}

export function faqPageSchema(
  items: Array<{ question: string; answer: string }>,
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };
}

export function itemListSchema(input: {
  name: string;
  description?: string;
  items: string[];
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: input.name,
    description: input.description,
    numberOfItems: input.items.length,
    itemListElement: input.items.map((text, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: text,
    })),
  };
}

export function breadcrumbSchema(
  items: Array<{ name: string; path: string }>,
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: buildUrl(item.path),
    })),
  };
}
