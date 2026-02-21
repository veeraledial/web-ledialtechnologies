import Link from "next/link";
import { SOLUTION_INDUSTRIES } from "@/types/solution";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { LinkButton } from "@/components/ui/LinkButton";

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
            <p className="section-label">Solutions by Industry</p>
            <h2 className="section-title mt-3">Solutions for Every Vertical</h2>
            <p className="section-desc mx-auto mt-4 max-w-2xl">
              Tailored deployments across retail, corporate, events, transport hubs, and security environments.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SOLUTION_INDUSTRIES.map((item, i) => (
            <ScrollReveal key={item.slug} animation="fade-up" delay={i * 50}>
              <Link
                href={`/solutions/${item.slug}`}
                className="group flex items-center gap-4 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow-card)] transition-all hover-lift hover:border-[var(--brand-red)]/20 hover:shadow-[var(--shadow-card-hover)]"
              >
              <span className="text-3xl opacity-90">{icons[item.slug] ?? "📌"}</span>
              <div className="min-w-0">
                <h4 className="font-semibold text-[var(--charcoal)] transition-colors group-hover:text-[var(--brand-red)]">
                  {item.label}
                </h4>
                <p className="mt-0.5 text-sm text-[var(--muted)]">Learn more →</p>
              </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-8 text-center">
          <LinkButton href="/solutions" variant="outline" size="sm">
            Explore all solutions
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
