import fs from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const outDir = path.join(root, "out");
const docsDir = path.join(root, "docs");
const noJekyllPath = path.join(docsDir, ".nojekyll");

async function exists(p) {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

async function rmDirBestEffort(dir) {
  try {
    await fs.rm(dir, { recursive: true, force: true, maxRetries: 25, retryDelay: 200 });
    return;
  } catch (err) {
    // On Windows, antivirus / preview panes can temporarily lock files in `docs/`.
    // If cleanup fails after retries, we fall back to overwriting files in-place.
    const code = err?.code;
    if (code === "EBUSY" || code === "EPERM" || code === "ENOTEMPTY") return;
    throw err;
  }
}

async function main() {
  if (!(await exists(outDir))) {
    throw new Error("Expected 'out/' folder was not found. Did `next export` run?");
  }

  // Ensure a clean docs/ folder.
  await rmDirBestEffort(docsDir);

  // Prefer rename (fast). Fallback to copy+delete if needed.
  try {
    await fs.rename(outDir, docsDir);
  } catch {
    await fs.mkdir(docsDir, { recursive: true });
    await fs.cp(outDir, docsDir, { recursive: true, force: true });
    await rmDirBestEffort(outDir);
  }

  // GitHub Pages: disable Jekyll so `_next/` is served.
  if (!(await exists(noJekyllPath))) {
    await fs.writeFile(noJekyllPath, "");
  }
}

await main();

