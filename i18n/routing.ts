import { defineRouting } from "next-intl/routing";
import { locales, defaultLocale } from "./locale";

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: "as-needed",
});
