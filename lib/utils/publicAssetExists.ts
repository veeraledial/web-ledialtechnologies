import "server-only";

import fs from "node:fs";
import path from "node:path";

function stripQueryAndHash(p: string) {
  return p.split("#")[0]?.split("?")[0] ?? p;
}

/**
 * Checks if a file exists in `/public` for a given public URL path like:
 * - `/images/solutions/retail.jpg`
 */
export function publicAssetExists(publicPath?: string | null): boolean {
  if (!publicPath) return false;
  if (!publicPath.startsWith("/")) return false;

  const clean = stripQueryAndHash(publicPath).replace(/^\/+/, "");
  const abs = path.join(process.cwd(), "public", clean);
  try {
    return fs.existsSync(abs);
  } catch {
    return false;
  }
}

