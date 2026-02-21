import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function AboutIntro() {
  return (
    <section className="section-padding bg-[var(--surface)]">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <ScrollReveal animation="slide-right">
            <div>
              <p className="section-label">About LaDial Technologies</p>
              <h2 className="section-title mt-3">Engineering Excellence in Visual & Security Solutions</h2>
              <p className="mt-6 text-lg leading-relaxed text-[var(--muted)]">
                LaDial Technologies delivers professional-grade solutions across indoor & outdoor LED displays, digital standees, and CCTV camera security services—built for demanding real-world deployments.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-[var(--muted)]">
                We serve retail, corporate, hospitality, events, and security environments. From site survey to installation and ongoing support, we focus on performance, clean execution, and long-term reliability.
              </p>
              <Link href="/about/company-overview" className="mt-8 inline-block">
                <Button variant="outline" size="md">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="slide-left">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--neutral)] p-8 shadow-[var(--shadow-card)]">
              <ul className="space-y-5">
                {[
                  { value: "40+", label: "Countries served" },
                  { value: "10+", label: "Years in business" },
                  { value: "500+", label: "Enterprise installations" },
                  { value: "24/7", label: "Technical support" },
                ].map((stat) => (
                  <li key={stat.label} className="flex items-center gap-5">
                    <span className="text-3xl font-bold tracking-tight text-[var(--brand-red)]">
                      {stat.value}
                    </span>
                    <span className="text-[var(--muted)] font-medium">{stat.label}</span>
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
