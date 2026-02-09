"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { SOLUTION_INDUSTRIES } from "@/types/solution";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const icons: Record<string, string> = {
  retail: "🛒",
  "control-rooms": "🖥️",
  "broadcast-studios": "📺",
  "airports-transportation": "✈️",
  corporate: "🏢",
  "events-entertainment": "🎭",
  education: "📚",
  healthcare: "🏥",
};

export function ApplicationsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = SOLUTION_INDUSTRIES.length;

  useEffect(() => {
    const t = setInterval(() => {
      setActiveIndex((i) => (i + 1) % total);
    }, 4000);
    return () => clearInterval(t);
  }, [total]);

  return (
    <section className="section-padding bg-[var(--neutral)]">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--brand-red)]">
            Applications
          </h2>
          <h3 className="mt-4 text-3xl font-bold tracking-tight text-[var(--charcoal)] sm:text-4xl">
            LED Displays for Every Vertical
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--muted)]">
            Optimize your operations with specialized product solutions. Explore LED display technology designed for a wide range of applications.
          </p>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={100}>
          <div className="mt-12 overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)]">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {SOLUTION_INDUSTRIES.map((item) => (
                <div
                  key={item.slug}
                  className="min-w-full shrink-0 p-8 sm:p-12"
                >
                  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="flex items-center gap-4">
                      <span className="text-5xl">{icons[item.slug] ?? "📌"}</span>
                      <h4 className="text-2xl font-bold text-[var(--charcoal)]">
                        {item.label}
                      </h4>
                    </div>
                    <div className="sm:col-span-2 flex items-center">
                      <Link
                        href={`/solutions/${item.slug}`}
                        className="inline-flex items-center gap-2 text-[var(--brand-red)] font-semibold hover:underline"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {SOLUTION_INDUSTRIES.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to application ${i + 1}`}
              onClick={() => setActiveIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === activeIndex
                  ? "w-8 bg-[var(--brand-red)]"
                  : "w-2 bg-[var(--border)] hover:bg-[var(--muted)]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
