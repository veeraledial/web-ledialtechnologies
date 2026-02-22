const ENV_VERSION = process.env.NEXT_PUBLIC_ASSET_VERSION?.trim();
const VERSION = ENV_VERSION;
const ENV_BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH?.trim();
const BASE_PATH = ENV_BASE_PATH && ENV_BASE_PATH !== "/" ? ENV_BASE_PATH.replace(/\/$/, "") : "";

/**
 * Adds a cache-busting query param to local public assets.
 * Set `NEXT_PUBLIC_ASSET_VERSION` (e.g. "1") and bump it when assets change.
 */
export function asset(src: string): string {
  if (!src) return src;
  if (/^(https?:)?\/\//.test(src)) return src;

  let out = src;
  if (BASE_PATH && out.startsWith("/") && !out.startsWith(`${BASE_PATH}/`) && out !== BASE_PATH) {
    out = `${BASE_PATH}${out}`;
  }

  if (!VERSION) return out;
  if (!out.startsWith("/")) return out;

  const join = out.includes("?") ? "&" : "?";
  return `${out}${join}v=${encodeURIComponent(VERSION)}`;
}

