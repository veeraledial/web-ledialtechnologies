"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState, type WheelEvent } from "react";
import { asset } from "@/lib/utils/assets";

export type SubcategoryCard = {
  key: string;
  href: string;
  label: string;
  tagline: string;
  image: string | null;
};

export function SubcategoryScroller({ cards }: { cards: SubcategoryCard[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const pausedUntilRef = useRef<number>(0);
  const rafRef = useRef<number | null>(null);
  const lastTsRef = useRef<number | null>(null);

  const cursorClass = isDragging ? "cursor-grabbing" : "cursor-grab";

  const wheelHandler = useMemo(() => {
    return (e: WheelEvent<HTMLDivElement>) => {
      const el = scrollerRef.current;
      if (!el) return;

      // Convert vertical wheel into horizontal scroll when user wheels over this row.
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        el.scrollLeft += e.deltaY;
        pausedUntilRef.current = Date.now() + 1800;
        e.preventDefault();
      }
    };
  }, []);

  const duplicatedCards = useMemo(() => [...cards, ...cards], [cards]);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    // Time-based speed (px/sec) so it feels consistent across devices.
    const SPEED_PX_PER_SEC = 65;

    const tick = (ts: number) => {
      const now = Date.now();
      const isPaused = now < pausedUntilRef.current;

      const last = lastTsRef.current ?? ts;
      lastTsRef.current = ts;
      const dt = Math.min(50, ts - last); // clamp to avoid big jumps

      if (!isPaused && !isDragging) {
        const half = el.scrollWidth / 2;
        el.scrollLeft += (SPEED_PX_PER_SEC * dt) / 1000;
        if (half > 0 && el.scrollLeft >= half) {
          el.scrollLeft -= half;
        }
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      lastTsRef.current = null;
    };
  }, [isDragging]);

  return (
    <div
      ref={scrollerRef}
      className={[
        "overflow-x-auto overflow-y-visible",
        "[-ms-overflow-style:none] [scrollbar-width:thin]",
        "hide-scrollbar",
        cursorClass,
      ].join(" ")}
      onWheel={wheelHandler}
      onPointerDown={(e) => {
        const el = scrollerRef.current;
        if (!el) return;
        setIsDragging(true);
        pausedUntilRef.current = Date.now() + 2000;
        el.setPointerCapture(e.pointerId);
        (el as any).__drag = { x: e.clientX, left: el.scrollLeft };
      }}
      onPointerMove={(e) => {
        const el = scrollerRef.current as any;
        if (!el || !isDragging || !el.__drag) return;
        const dx = e.clientX - el.__drag.x;
        el.scrollLeft = el.__drag.left - dx;
        pausedUntilRef.current = Date.now() + 2000;
      }}
      onPointerUp={(e) => {
        const el = scrollerRef.current as any;
        if (!el) return;
        setIsDragging(false);
        pausedUntilRef.current = Date.now() + 1600;
        try {
          el.releasePointerCapture(e.pointerId);
        } catch {}
        el.__drag = null;
      }}
      onPointerCancel={() => {
        setIsDragging(false);
        pausedUntilRef.current = Date.now() + 1600;
      }}
    >
      <div className="flex w-max gap-6 py-3 pr-6">
        {duplicatedCards.map((c, idx) => (
          <Link
            key={`${c.key}-${idx}`}
            href={c.href}
            className="group block w-[260px] flex-none overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-[var(--shadow-card)] transition-transform transition-colors duration-300 hover:scale-[1.02] hover:border-[var(--brand-red)]/20 min-[360px]:w-[300px] sm:w-[320px]"
            draggable={false}
          >
            <div className="relative aspect-[16/10] bg-gradient-to-br from-[var(--neutral-dark)] to-[var(--border)] transition duration-300 group-hover:from-[var(--brand-navy)]/15 group-hover:to-[var(--brand-red)]/10">
              {c.image ? (
                <Image
                  src={asset(c.image)}
                  alt={c.label}
                  fill
                  sizes="(max-width: 360px) 260px, (max-width: 640px) 300px, 320px"
                  className="pointer-events-none select-none object-contain p-6 transition-transform duration-300 group-hover:scale-[1.06]"
                  draggable={false}
                />
              ) : null}
            </div>
            <div className="p-6">
              <h4 className="text-lg font-semibold text-[var(--charcoal)] transition-colors group-hover:text-[var(--brand-red)]">
                {c.label}
              </h4>
              {c.tagline ? (
                <p className="mt-2 text-sm text-[var(--muted)] line-clamp-2">
                  {c.tagline}
                </p>
              ) : null}
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[var(--brand-red)] transition-transform group-hover:gap-2">
                View More <span aria-hidden>→</span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

