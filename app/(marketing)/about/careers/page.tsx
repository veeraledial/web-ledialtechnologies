import Link from "next/link";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutNav } from "@/components/about/AboutNav";
import { CAREERS } from "@/lib/data/about";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Careers",
  description:
    "Join Ledial Technologies. We're hiring for Engineering, Sales, Operations, Marketing, and Customer Support.",
};

export default function CareersPage() {
  return (
    <div>
      <AboutHero
        title="Careers"
        subtitle="Build the future of visual communication with us."
      />
      <AboutNav currentPath="/about/careers" />

      <section className="section-padding bg-[var(--surface)]">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[var(--charcoal)]">
            {CAREERS.headline}
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-[var(--muted)]">
            {CAREERS.intro}
          </p>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold text-[var(--charcoal)]">
                Benefits
              </h3>
              <ul className="mt-4 space-y-2">
                {CAREERS.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-center gap-3 text-[var(--muted)]"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-red)]" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[var(--charcoal)]">
                We&apos;re Hiring For
              </h3>
              <ul className="mt-4 space-y-2">
                {CAREERS.departments.map((dept) => (
                  <li
                    key={dept}
                    className="flex items-center gap-3 text-[var(--muted)]"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-red)]" />
                    {dept}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 rounded-[8px] border border-[var(--border)] bg-[var(--neutral)] p-8">
            <p className="font-medium text-[var(--charcoal)]">
              {CAREERS.cta}
            </p>
            <Link href="/contact" className="mt-4 inline-block">
              <Button variant="primary" size="md">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
