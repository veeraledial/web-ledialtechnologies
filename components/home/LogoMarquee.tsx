"use client";

import { CLIENT_NAMES } from "@/lib/data/clients";

export function LogoMarquee() {
  const duplicated = [...CLIENT_NAMES, ...CLIENT_NAMES];

  return (
    <section className="relative overflow-hidden border-y border-[var(--border)] bg-[var(--surface)] py-8">
      <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[var(--surface)] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[var(--surface)] to-transparent pointer-events-none" />
      <div className="flex animate-marquee whitespace-nowrap">
        {duplicated.map((name, i) => (
          <div
            key={`${name}-${i}`}
            className="mx-8 flex shrink-0 items-center justify-center rounded-lg bg-[var(--neutral)] px-6 py-3 text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--charcoal)]"
          >
            {name}
          </div>
        ))}
      </div>
    </section>
  );
}
