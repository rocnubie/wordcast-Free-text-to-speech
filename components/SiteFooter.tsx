import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export async function SiteFooter() {
  const t = await getTranslations("footer");
  const tNav = await getTranslations("nav");
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          {t("copyright", { year })} · {t("tagline")}
        </p>
        <nav className="flex flex-wrap items-center gap-4">
          <Link href="/about" className="hover:text-foreground">
            {tNav("about")}
          </Link>
          <Link href="/blog" className="hover:text-foreground">
            {tNav("blog")}
          </Link>
          <Link href="/privacy" className="hover:text-foreground">
            {tNav("privacy")}
          </Link>
          <LanguageSwitcher variant="footer" />
        </nav>
      </div>
    </footer>
  );
}
