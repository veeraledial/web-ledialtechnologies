import { ScrollReveal } from "@/components/ui/ScrollReveal";

const usps = [
  {
    title: "Quality & Reliability",
    description:
      "Rigorous testing and 24/7 operation validation. Our displays are built for mission-critical environments.",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Global Support",
    description:
      "Technical support and service across 40+ countries. Local distributors and certified installers.",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0h.5a2.5 2.5 0 002.5-2.5V3.935M12 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Custom Solutions",
    description:
      "From pixel pitch to cabinet size, we customize displays for your exact specifications and space.",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Certified & Compliant",
    description:
      "CE, FCC, and ISO certified. Our manufacturing meets international quality and safety standards.",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-[var(--neutral)]">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--brand-red)]">
            Why Choose Us
          </h2>
          <h3 className="mt-4 text-3xl font-bold tracking-tight text-[var(--charcoal)] sm:text-4xl">
            Trusted by Industry Leaders
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--muted)]">
            What sets LaDial apart in the competitive LED display market.
          </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {usps.map((usp, i) => (
            <ScrollReveal key={usp.title} animation="fade-up" delay={i * 80}>
              <div
                className="rounded-[8px] border border-[var(--border)] bg-[var(--surface)] p-6 transition-all hover-lift hover:border-[var(--brand-red)]/30"
              >
              <div className="text-[var(--brand-red)]">{usp.icon}</div>
              <h4 className="mt-4 font-semibold text-[var(--charcoal)]">
                {usp.title}
              </h4>
              <p className="mt-2 text-[var(--muted)]">{usp.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
