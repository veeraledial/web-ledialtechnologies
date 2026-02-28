"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { asset } from "@/lib/utils/assets";

export type ExplorerSubcategory = {
  name: string;
  slug: string;
  image?: string;
};

export type ExplorerCategory = {
  name: string;
  slug: string;
  titleLines: string[];
  subtitle?: string;
  heroImage?: string;
  heroBackgroundImage?: string;
  subcategories: ExplorerSubcategory[];
};

function cleanLine(s: string) {
  return s.replace(/\bSERVICES?\b/gi, "").replace(/\bSERVICE\b/gi, "").trim();
}

function getDisplayLines(cat: ExplorerCategory): string[] {
  const lines = (cat.titleLines?.length ? cat.titleLines : [cat.name])
    .map(cleanLine)
    .filter(Boolean);
  if (lines.length) return lines;
  return [cat.name.replace(/\s+Services?$/i, "").trim()];
}

export function CategoryExplorer({ categories }: { categories: ExplorerCategory[] }) {
  const [failedMediaBySlug, setFailedMediaBySlug] = useState<Record<string, boolean>>({});
  if (!categories.length) return null;

  return (
    <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {categories.map((cat) => {
        const lines = getDisplayLines(cat);
        const media = cat.heroImage ?? "";
        const mediaSrc = media ? asset(media) : "";
        const showMedia = Boolean(mediaSrc) && !failedMediaBySlug[cat.slug];
        const subCount = cat.subcategories?.length ?? 0;

        return (
          <article
            key={cat.slug}
            className="group overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--card)] shadow-[var(--shadow-card)] transition-all duration-300 hover:border-[var(--brand-red)]/20"
          >
            <Link href={`/products/${cat.slug}`} className="block" aria-label={`Open ${cat.name}`}>
              <div className="relative h-52 bg-[var(--neutral)] sm:h-56">
                {showMedia ? (
                  <Image
                    src={mediaSrc}
                    alt={cat.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-contain p-6 transition-transform duration-300 group-hover:scale-[1.03]"
                    onError={() =>
                      setFailedMediaBySlug((prev) => ({
                        ...prev,
                        [cat.slug]: true,
                      }))
                    }
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
                    <span className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">
                      Image unavailable
                    </span>
                  </div>
                )}
              </div>
            </Link>

            <div className="p-5 sm:p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--brand-red)]">
                Category
              </p>
              <h3 className="mt-2 line-clamp-2 text-xl font-bold leading-tight text-[var(--charcoal)]">
                {lines.join(" ")}
              </h3>
              {cat.subtitle ? (
                <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-[var(--muted)]">
                  {cat.subtitle}
                </p>
              ) : null}

              <div className="mt-5 flex items-center justify-between gap-3">
                <span className="text-sm font-semibold text-[var(--muted)]">
                  {subCount} subcategories
                </span>
                <Link href={`/products/${cat.slug}`}>
                  <Button variant="primary" size="sm">
                    Explore
                  </Button>
                </Link>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

