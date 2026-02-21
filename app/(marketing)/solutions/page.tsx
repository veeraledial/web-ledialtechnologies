import Link from "next/link";
import { SOLUTION_INDUSTRIES } from "@/types/solution";
import { SOLUTIONS } from "@/lib/data/solutions";
import { Button } from "@/components/ui/Button";

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

export const metadata = {
  title: "Solutions",
  description:
    "LED display solutions by industry: retail, control rooms, broadcast, transportation, corporate, events, education, and healthcare.",
};

export default function SolutionsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[var(--brand-navy)] py-10 sm:py-12 lg:py-14">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Solutions by Industry
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            Tailored LED display solutions for every vertical. From retail to broadcast, we deliver the right technology for your industry.
          </p>
        </div>
      </section>

      {/* Industry grid */}
      <section className="section-padding bg-[var(--surface)]">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SOLUTION_INDUSTRIES.map((item) => {
              const solution = SOLUTIONS.find((s) => s.slug === item.slug);
              return (
                <Link
                  key={item.slug}
                  href={`/solutions/${item.slug}`}
                  className="group flex flex-col rounded-[8px] border border-[var(--border)] bg-[var(--surface)] p-8 transition-all hover:border-[var(--brand-red)]/30 hover:shadow-md"
                >
                  <span className="text-4xl">{icons[item.slug] ?? "📌"}</span>
                  <h2 className="mt-4 font-semibold text-[var(--charcoal)] group-hover:text-[var(--brand-red)]">
                    {item.label}
                  </h2>
                  {solution?.solution && (
                    <p className="mt-2 line-clamp-3 text-sm text-[var(--muted)]">
                      {solution.solution.slice(0, 120)}...
                    </p>
                  )}
                  <span className="mt-4 text-sm font-medium text-[var(--brand-red)]">
                    Learn more →
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[var(--brand-navy)]">
        <div className="mx-auto max-w-[1200px] px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Ready to Transform Your Space?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/80">
            Tell us about your industry and requirements. Our experts will recommend the perfect solution.
          </p>
          <Link href="/contact" className="mt-8 inline-block">
            <Button variant="primary" size="lg">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
