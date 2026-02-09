import { AboutHero } from "@/components/about/AboutHero";
import { AboutNav } from "@/components/about/AboutNav";
import { COMPANY_OVERVIEW } from "@/lib/data/about";

export const metadata = {
  title: "Company Overview",
  description:
    "Learn about LaDial Technologies - our history, manufacturing capabilities, and commitment to LED display excellence.",
};

export default function CompanyOverviewPage() {
  return (
    <div>
      <AboutHero
        title="Company Overview"
        subtitle="Our story, our capabilities, and our commitment to excellence."
      />
      <AboutNav currentPath="/about/company-overview" />

      <section className="section-padding bg-[var(--surface)]">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-[var(--muted)]">
            <p className="text-lg">{COMPANY_OVERVIEW.intro}</p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: COMPANY_OVERVIEW.founded, label: "Founded" },
              { value: COMPANY_OVERVIEW.headquarters, label: "Headquarters" },
              { value: COMPANY_OVERVIEW.employees, label: "Employees" },
              { value: COMPANY_OVERVIEW.countries, label: "Countries Served" },
              { value: COMPANY_OVERVIEW.installations, label: "Installations" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-[8px] border border-[var(--border)] bg-[var(--neutral)] p-6 text-center"
              >
                <span className="text-2xl font-bold text-[var(--brand-red)]">
                  {stat.value}
                </span>
                <p className="mt-2 text-sm text-[var(--muted)]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
