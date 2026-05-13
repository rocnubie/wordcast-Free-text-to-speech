import { cn } from "@/lib/utils";

/**
 * Placeholder logo mark — a simple rounded square with the initial.
 * Replace the `<path>` inside `LogoMark` with your own SVG, or swap
 * `LogoTile` for an `<Image>` if you have a raster asset.
 *
 * Pure `currentColor` stroke so the mark inherits primary / foreground
 * from the parent.
 */
export function LogoMark({
  className,
  ariaLabel = "Logo",
}: {
  className?: string;
  ariaLabel?: string;
}) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth={6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-label={ariaLabel}
      role="img"
      className={cn("size-7", className)}
    >
      <rect x="10" y="10" width="44" height="44" rx="10" />
    </svg>
  );
}

/**
 * Logo as a "tile" — mark on a rounded primary background.
 * Used in the header next to the wordmark.
 */
export function LogoTile({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "grid size-8 place-items-center rounded-lg bg-primary text-primary-foreground shadow-sm ring-1 ring-black/[0.04]",
        className,
      )}
      aria-hidden
    >
      <LogoMark className="size-5" />
    </span>
  );
}
