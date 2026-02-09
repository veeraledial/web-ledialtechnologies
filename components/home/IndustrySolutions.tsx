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

export function IndustrySolutions() {
  return (
    <section className="section-padding bg-[var(--surface)]">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up">
          <div className="text-center">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--brand-red)]">
              Solutions by Industry
            </h2>
          <h3 className="mt-4 text-3xl font-bold tracking-tight text-[var(--charcoal)] sm:text-4xl">
            LED Displays for Every Vertical
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--muted)]">
            Tailored solutions for retail, broadcast, control rooms, transportation, and more.
          </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SOLUTION_INDUSTRIES.map((item, i) => (
            <ScrollReveal key={item.slug} animation="fade-up" delay={i * 50}>
              <Link
                href={`/solutions/${item.slug}`}
                className="group flex items-center gap-4 rounded-[8px] border border-[var(--border)] bg-[var(--surface)] p-6 transition-all hover-lift hover:border-[var(--brand-red)]/30"
              >
              <span className="text-3xl">{icons[item.slug] ?? "📌"}</span>
              <div>
                <h4 className="font-semibold text-[var(--charcoal)] group-hover:text-[var(--brand-red)] transition-colors">
                  {item.label}
                </h4>
                <p className="text-sm text-[var(--muted)]">Learn more →</p>
              </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/solutions"
            className="text-sm font-semibold text-[var(--brand-red)] hover:underline"
          >
            Explore all solutions
          </Link>
        </div>
      </div>
    </section>
  );
}
