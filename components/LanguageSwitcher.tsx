"use client";

import { useLocale, useTranslations } from "next-intl";
import { GlobeIcon, CheckIcon, ChevronDownIcon } from "lucide-react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Link, usePathname } from "@/i18n/navigation";
import { locales, localeNames, localeFlags } from "@/i18n/locale";

type Variant = "header" | "footer";

export function LanguageSwitcher({ variant = "header" }: { variant?: Variant }) {
  const t = useTranslations("nav");
  const current = useLocale();
  const pathname = usePathname();
  const currentName = localeNames[current] ?? current;
  const currentFlag = localeFlags[current] ?? "🌐";

  const triggerCls =
    variant === "header"
      ? "inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground"
      : "inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground";

  return (
    <Popover>
      <PopoverTrigger className={triggerCls} aria-label={t("changeLanguage")}>
        <GlobeIcon className="size-4" />
        {variant === "footer" ? (
          <span className="hidden sm:inline">{currentFlag}</span>
        ) : null}
        <span className="hidden md:inline">{currentName}</span>
        <ChevronDownIcon className="size-3 opacity-60" />
      </PopoverTrigger>
      <PopoverContent className="w-56 p-1" align={variant === "header" ? "end" : "start"}>
        <ul className="max-h-72 overflow-y-auto py-1">
          {locales.map((loc) => {
            const active = loc === current;
            return (
              <li key={loc}>
                <Link
                  href={pathname}
                  locale={loc}
                  className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                  aria-current={active ? "true" : undefined}
                >
                  <span className="text-base leading-none">
                    {localeFlags[loc] ?? "🌐"}
                  </span>
                  <span className="flex-1">{localeNames[loc] ?? loc}</span>
                  {active ? (
                    <CheckIcon className="size-4 text-primary" />
                  ) : null}
                </Link>
              </li>
            );
          })}
        </ul>
      </PopoverContent>
    </Popover>
  );
}
