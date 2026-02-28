import { AboutHero } from "@/components/about/AboutHero";
import { AboutNav } from "@/components/about/AboutNav";
import { FACILITIES } from "@/lib/data/about";

export const metadata = {
  title: "Manufacturing Facilities",
  description:
    "Ledial Technologies' manufacturing capabilities. R&D, production, quality processes, and logistics.",
};

export default function FacilitiesPage() {
  return (
    <div>
      <AboutHero
        title="Manufacturing Facilities"
        subtitle="World-class production in our 50,000 sqm facility."
      />
      <AboutNav currentPath="/about/facilities" />

      <section className="section-padding bg-[var(--surface)]">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[var(--charcoal)]">
            {FACILITIES.headline}
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-[var(--muted)]">
            {FACILITIES.intro}
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {FACILITIES.highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-[8px] border border-[var(--border)] bg-[var(--neutral)] p-8"
              >
                <h3 className="text-xl font-semibold text-[var(--charcoal)]">
                  {item.title}
                </h3>
                <p className="mt-4 text-[var(--muted)]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
