import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SOLUTION_INDUSTRIES } from "@/types/solution";

export const metadata = {
  title: "About Us",
  description:
    "Ledial Technologies Pvt. Ltd. provides advanced LED display and CCTV surveillance solutions with professional installation, customization, and dedicated support.",
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--brand-navy)]">
        <div
          className="pointer-events-none absolute inset-0 opacity-80"
          aria-hidden
          style={{
            background:
              "radial-gradient(900px 380px at 15% 20%, rgba(232,106,92,0.22), transparent 62%), radial-gradient(750px 300px at 90% 10%, rgba(255,255,255,0.12), transparent 60%), radial-gradient(900px 420px at 70% 85%, rgba(232,106,92,0.14), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-[1200px] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <ScrollReveal animation="fade-up">
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--brand-red)]">
              About Us
            </p>
            <h1 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Ledial Technologies Pvt. Ltd.
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/85 sm:text-xl">
              Advanced LED display and CCTV surveillance solutions built to enhance visibility, communication, and security.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/products">
                <Button variant="outline-white">Explore Products</Button>
              </Link>
              <Link href="/contact">
                <Button variant="primary">Get a Quote</Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Who we are */}
      <section className="section-padding bg-[var(--surface)]">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            <ScrollReveal animation="slide-right">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-[var(--charcoal)] sm:text-3xl">
                  Technology that performs — and empowers
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-[var(--muted)]">
                  Ledial Technologies Pvt. Ltd. is a leading provider of advanced LED display and CCTV surveillance solutions,
                  delivering high-performance technology designed to enhance visibility, communication, and security.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-[var(--muted)]">
                  With a strong commitment to quality and innovation, we serve businesses, institutions, commercial
                  establishments, and public sector organizations with reliable and customized solutions.
                </p>

                <div className="mt-8 rounded-2xl border border-[var(--border)] bg-[var(--neutral)] p-6 shadow-[var(--shadow-card)]">
                  <p className="text-sm font-semibold uppercase tracking-wider text-[var(--brand-red)]">
                    Solutions
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {SOLUTION_INDUSTRIES.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/solutions/${s.slug}`}
                        className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-sm font-semibold text-[var(--charcoal)] transition-colors hover:bg-[var(--brand-red-soft)] hover:text-[var(--brand-red)]"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="slide-left">
              <div className="grid gap-5 sm:grid-cols-2">
                {[
                  {
                    title: "High-quality products",
                    desc: "Built for real-world reliability and clear performance.",
                  },
                  {
                    title: "Experienced technical team",
                    desc: "Professional guidance, installation, and setup.",
                  },
                  {
                    title: "Timely execution",
                    desc: "Clear timelines with dependable delivery and support.",
                  },
                  {
                    title: "Dedicated customer support",
                    desc: "Ongoing technical assistance when you need it.",
                  },
                ].map((x) => (
                  <div
                    key={x.title}
                    className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow-card)]"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand-red-soft)] text-[var(--brand-red)]"
                        aria-hidden
                      >
                        <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                          <path
                            fillRule="evenodd"
                            d="M16.704 5.29a1 1 0 010 1.414l-7.071 7.071a1 1 0 01-1.414 0L3.296 8.85a1 1 0 011.414-1.414l3.216 3.216 6.364-6.364a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <p className="font-semibold text-[var(--charcoal)]">{x.title}</p>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{x.desc}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="section-padding bg-[var(--neutral)]">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="text-center">
              <p className="section-label">What We Do</p>
              <h2 className="section-title mt-3">LED Displays and CCTV Solutions</h2>
              <p className="section-desc mx-auto mt-4 max-w-3xl">
                From planning and installation to configuration and after-sales support, we deliver solutions that strengthen visibility and security.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <ScrollReveal animation="fade-up">
              <div className="card-elevated rounded-3xl p-7 sm:p-8">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-[var(--brand-red)]">
                      LED Screen Solutions
                    </p>
                    <h3 className="mt-2 text-xl font-bold text-[var(--charcoal)]">
                      High-resolution indoor & outdoor LED displays
                    </h3>
                  </div>
                  <span className="hidden sm:inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--brand-red-soft)] text-[var(--brand-red)]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6" strokeWidth="1.8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 17h16M7 4v16M17 4v16" />
                    </svg>
                  </span>
                </div>

                <p className="mt-4 text-[var(--muted)] leading-relaxed">
                  Ideal for advertising, events, corporate communication, retail environments, and public information systems.
                </p>
                <ul className="mt-5 space-y-2 text-[var(--muted)]">
                  {[
                    "Design consultation and site assessment",
                    "Professional installation and setup",
                    "Energy-efficient, durable solutions tailored to your needs",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-red)]" aria-hidden />
                      <span className="leading-relaxed">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={80}>
              <div className="card-elevated rounded-3xl p-7 sm:p-8">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-[var(--brand-red)]">
                      CCTV Camera Solutions
                    </p>
                    <h3 className="mt-2 text-xl font-bold text-[var(--charcoal)]">
                      24/7 monitoring and protection
                    </h3>
                  </div>
                  <span className="hidden sm:inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--brand-red-soft)] text-[var(--brand-red)]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6" strokeWidth="1.8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14m-11 5h8a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                </div>

                <p className="mt-4 text-[var(--muted)] leading-relaxed">
                  Comprehensive CCTV surveillance systems designed to ensure safety and peace of mind.
                </p>
                <ul className="mt-5 space-y-2 text-[var(--muted)]">
                  {[
                    "Sales, installation, and system configuration",
                    "Modern surveillance technology for reliable protection",
                    "Ongoing technical support and maintenance options",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-red)]" aria-hidden />
                      <span className="leading-relaxed">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services + CTA */}
      <section className="section-padding bg-[var(--surface)]">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <ScrollReveal animation="fade-up">
              <div className="rounded-3xl border border-[var(--border)] bg-[var(--neutral)] p-8 shadow-[var(--shadow-card)]">
                <h3 className="text-xl font-bold text-[var(--charcoal)]">Our Services Include</h3>
                <ul className="mt-5 space-y-3 text-[var(--muted)]">
                  {[
                    "Sales of premium LED screens and CCTV cameras",
                    "Professional installation and system setup",
                    "Customized solution design",
                    "Maintenance and technical support",
                    "After-sales service and system upgrades",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-3">
                      <span
                        className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--brand-red-soft)] text-[var(--brand-red)]"
                        aria-hidden
                      >
                        <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                          <path
                            fillRule="evenodd"
                            d="M16.704 5.29a1 1 0 010 1.414l-7.071 7.071a1 1 0 01-1.414 0L3.296 8.85a1 1 0 011.414-1.414l3.216 3.216 6.364-6.364a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span className="leading-relaxed">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={80}>
              <div className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--brand-navy)] p-8 shadow-[var(--shadow-card)]">
                <div
                  className="pointer-events-none absolute inset-0 opacity-80"
                  aria-hidden
                  style={{
                    background:
                      "radial-gradient(520px 320px at 15% 30%, rgba(232,106,92,0.25), transparent 60%), radial-gradient(520px 320px at 85% 70%, rgba(255,255,255,0.12), transparent 60%)",
                  }}
                />
                <div className="relative">
                  <h3 className="text-xl font-bold text-white">Ready to discuss your requirement?</h3>
                  <p className="mt-3 text-white/85 leading-relaxed">
                    Tell us what you want to achieve—our team will recommend the right LED display or CCTV setup and guide you through the next steps.
                  </p>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <Link href="/contact">
                      <Button variant="primary">Contact Us</Button>
                    </Link>
                    <Link href="/products">
                      <Button variant="outline-white">Explore Products</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
