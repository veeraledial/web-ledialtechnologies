import Link from "next/link";
import { AboutNav } from "@/components/about/AboutNav";
import { COMPANY_OVERVIEW } from "@/lib/data/about";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "About Us",
  description:
    "LaDial Technologies - Leading manufacturer of professional LED displays. Founded 2012, serving 40+ countries with 5000+ installations worldwide.",
};

export default function AboutPage() {
  return (
    <div>
      <section className="bg-[var(--brand-navy)] py-16 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            About LaDial Technologies
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            Engineering excellence in LED display solutions. Serving Fortune 500 and leading brands across 40+ countries.
          </p>
        </div>
      </section>

      <AboutNav currentPath="/about" />

      <section className="section-padding bg-[var(--surface)]">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[var(--charcoal)]">
            Company Overview
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-[var(--muted)]">
            {COMPANY_OVERVIEW.intro}
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: COMPANY_OVERVIEW.founded, label: "Founded" },
              { value: COMPANY_OVERVIEW.employees, label: "Employees" },
              { value: COMPANY_OVERVIEW.countries, label: "Countries" },
              { value: COMPANY_OVERVIEW.installations, label: "Installations" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-[8px] border border-[var(--border)] bg-[var(--neutral)] p-6"
              >
                <span className="text-3xl font-bold text-[var(--brand-red)]">
                  {stat.value}
                </span>
                <p className="mt-1 text-sm text-[var(--muted)]">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link href="/about/company-overview">
              <Button variant="primary">Learn More</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline">Contact Us</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick links to other About pages */}
      <section className="section-padding bg-[var(--neutral)]">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[var(--charcoal)]">
            Explore More
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { href: "/about/vision-mission", label: "Vision & Mission" },
              { href: "/about/facilities", label: "Manufacturing" },
              { href: "/about/leadership", label: "Leadership" },
              { href: "/about/careers", label: "Careers" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-[8px] border border-[var(--border)] bg-[var(--surface)] p-6 font-medium text-[var(--charcoal)] transition-colors hover:border-[var(--brand-red)]/30 hover:text-[var(--brand-red)]"
              >
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
