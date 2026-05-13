/**
 * Plausible event helpers. Safe to call SSR — calls are no-ops if the
 * plausible script has not loaded.
 *
 * Wrap `track()` in domain-specific helpers (e.g. `trackSignup`,
 * `trackCheckout`) so call sites stay readable and event names stay
 * consistent.
 */

declare global {
  interface Window {
    plausible?: (
      event: string,
      options?: { props?: Record<string, string | number | boolean> },
    ) => void;
  }
}

export function track(
  event: string,
  props?: Record<string, unknown>,
) {
  if (typeof window === "undefined") return;
  if (typeof window.plausible !== "function") return;
  const normalized = props ? normalizeProps(props) : undefined;
  window.plausible(event, normalized ? { props: normalized } : undefined);
}

function normalizeProps(
  props: Record<string, unknown>,
): Record<string, string | number | boolean> {
  const out: Record<string, string | number | boolean> = {};
  for (const [k, v] of Object.entries(props)) {
    if (v === undefined || v === null) continue;
    if (typeof v === "number" || typeof v === "boolean") {
      out[k] = v;
    } else {
      out[k] = String(v);
    }
  }
  return out;
}
