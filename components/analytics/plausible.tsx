import Script from "next/script";
import { siteConfig } from "@/site.config";

export function PlausibleScript() {
  const { domain, scriptUrl } = siteConfig.plausible;
  if (!domain) return null;
  return (
    <Script
      defer
      data-domain={domain}
      src={scriptUrl}
      strategy="afterInteractive"
    />
  );
}
