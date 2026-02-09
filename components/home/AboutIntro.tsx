import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function AboutIntro() {
  return (
    <section className="pt-12 pb-20 sm:pt-16 sm:pb-24 bg-[var(--surface)]">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal animation="slide-right">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--brand-red)]">
                About LaDial Technologies
              </h2>
              <h3 className="mt-4 text-3xl font-bold tracking-tight text-[var(--charcoal)] sm:text-4xl">
                Engineering Excellence in LED Display Solutions
              </h3>
              <p className="mt-6 text-lg text-[var(--muted)]">
                LaDial Technologies has been at the forefront of LED display innovation for over a decade. From our state-of-the-art manufacturing facilities, we design and produce professional-grade indoor, outdoor, rental, and transparent LED solutions for the world&apos;s most demanding applications.
              </p>
              <p className="mt-4 text-lg text-[var(--muted)]">
                Our products power retail experiences, broadcast studios, control rooms, airports, and corporate headquarters across 40+ countries. We combine cutting-edge technology with rigorous quality control to deliver displays built for 24/7 operation.
              </p>
              <Link href="/about/company-overview" className="mt-8 inline-block">
                <Button variant="outline" size="md">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="slide-left">
            <div className="rounded-[8px] bg-[var(--neutral)] p-8">
            <ul className="space-y-4">
              {[
                { value: "40+", label: "Countries served" },
                { value: "10+", label: "Years in business" },
                { value: "500+", label: "Enterprise installations" },
                { value: "24/7", label: "Technical support" },
              ].map((stat) => (
                <li key={stat.label} className="flex items-center gap-4">
                  <span className="text-3xl font-bold text-[var(--brand-red)]">
                    {stat.value}
                  </span>
                  <span className="text-[var(--muted)]">{stat.label}</span>
                </li>
              ))}
            </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
