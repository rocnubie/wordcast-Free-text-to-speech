"use client";

import { useEffect } from "react";

/**
 * Static export renders <html lang="en"> at the root level; nested layouts
 * can't replace it. This client component updates documentElement.lang/dir
 * on mount so screen readers and CSS direction selectors match the locale.
 */
export function HtmlLangSync({ locale, dir }: { locale: string; dir: "ltr" | "rtl" }) {
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = dir;
  }, [locale, dir]);
  return null;
}
