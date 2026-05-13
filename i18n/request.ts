import { getRequestConfig } from "next-intl/server";
import { defaultLocale, locales } from "./locale";

/**
 * Static export with URL-segment locales (`/en/...`, `/es/...`). Pages under
 * `app/[locale]/` pass the segment via `requestLocale`. Anything outside that
 * tree falls back to `defaultLocale`.
 */
export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale =
    requested && (locales as string[]).includes(requested)
      ? requested
      : defaultLocale;
  const messages = (await import(`../messages/${locale}.json`)).default;
  return { locale, messages };
});
