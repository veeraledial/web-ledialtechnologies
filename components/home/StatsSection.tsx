"use client";

import { useEffect, useRef, useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const stats = [
  { value: 50, suffix: "+", label: "Products" },
  { value: 25000, suffix: "+", label: "Installations" },
  { value: 1500, suffix: "+", label: "Happy Customers" },
  { value: 35, suffix: "", label: "Offices Worldwide" },
  { value: 15, suffix: "", label: "Experience Centres" },
  { value: 55, suffix: "+", label: "After Sales Centres" },
];

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || hasAnimated.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated.current) return;
        hasAnimated.current = true;

        const duration = 2000;
        const steps = 60;
        const increment = target / steps;
        const stepDuration = duration / steps;
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            setCount(target);
            clearInterval(timer);
          } else {
            setCount(Math.floor(current));
          }
        }, stepDuration);
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  return (
    <section className="section-padding bg-[var(--neutral)]">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up">
          <h2 className="text-center text-2xl font-bold tracking-tight text-[var(--charcoal)] sm:text-3xl">
            Figures Worldwide
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} animation="fade-up" delay={i * 80}>
              <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 text-center transition-all hover:border-[var(--brand-red)]/30 hover:shadow-md">
                <div className="text-3xl font-bold text-[var(--brand-red)] sm:text-4xl">
                  <AnimatedNumber target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-2 text-sm font-medium text-[var(--muted)]">
                  {stat.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
