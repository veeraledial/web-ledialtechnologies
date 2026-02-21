const ENV_VERSION = process.env.NEXT_PUBLIC_ASSET_VERSION?.trim();
const VERSION = ENV_VERSION;

/**
 * Adds a cache-busting query param to local public assets.
 * Set `NEXT_PUBLIC_ASSET_VERSION` (e.g. "1") and bump it when assets change.
 */
export function asset(src: string): string {
  if (!VERSION) return src;
  if (!src.startsWith("/")) return src;

  const join = src.includes("?") ? "&" : "?";
  return `${src}${join}v=${encodeURIComponent(VERSION)}`;
}

