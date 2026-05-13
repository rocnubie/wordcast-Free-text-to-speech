import { siteConfig } from "@/site.config";
import { LogoTile } from "@/components/Logo";
import { Link } from "@/i18n/navigation";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-5xl items-center gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold tracking-[-0.01em]"
        >
          <LogoTile className="size-7" />
          {siteConfig.name}
        </Link>
        <div className="ml-auto flex items-center gap-1">
          <LanguageSwitcher variant="header" />
        </div>
      </div>
    </header>
  );
}
