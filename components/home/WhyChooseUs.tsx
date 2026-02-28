import { ScrollReveal } from "@/components/ui/ScrollReveal";

const usps = [
  {
    title: "Expertise & Experience",
    description:
      "End‑to‑end delivery for LED displays and CCTV—from planning to commissioning.",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.5 18.75h-9A2.25 2.25 0 015.25 16.5v-9A2.25 2.25 0 017.5 5.25h5.6c.6 0 1.18.24 1.6.66l1.95 1.95c.42.42.66 1 .66 1.6v7.04A2.25 2.25 0 0116.5 18.75z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 13l2 2 5-6" />
      </svg>
    ),
  },
  {
    title: "High‑Quality Products",
    description:
      "Commercial‑grade components, calibrated visuals, and strict QC for dependable uptime.",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3l7 4v6c0 5-3.5 8-7 8s-7-3-7-8V7l7-4z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.25 12.25l1.75 1.75 3.75-4.25" />
      </svg>
    ),
  },
  {
    title: "Custom Solutions",
    description:
      "Right‑fit design for your space: brightness, content workflow, camera coverage, storage, and network.",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9 5.25L3 7.5l9-5.25L21 7.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5v9l9 5.25 9-5.25v-9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75v9" />
      </svg>
    ),
  },
  {
    title: "Ongoing Support",
    description:
      "Responsive support, preventive maintenance, and service plans to keep systems running.",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 10.5h6" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 15l1.5 1.5L14.5 13.5" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18.75 6.75v10.5A2.25 2.25 0 0116.5 19.5h-9a2.25 2.25 0 01-2.25-2.25V6.75A2.25 2.25 0 017.5 4.5h9a2.25 2.25 0 012.25 2.25z"
        />
      </svg>
    ),
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-[var(--neutral)]">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up">
          <div className="text-center">
            <p className="section-label">Why Ledial</p>
            <h2 className="section-title mt-3">A Partner You Can Rely On</h2>
            <p className="section-desc mx-auto mt-4 max-w-2xl">
              Four things that matter most for long-term performance: experience, quality, the right-fit design, and dependable support.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {usps.map((usp, i) => (
            <ScrollReveal key={usp.title} animation="fade-up" delay={i * 80}>
              <div className="card-elevated rounded-2xl p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--brand-red-soft)] text-[var(--brand-red)] [&_svg]:h-6 [&_svg]:w-6">
                  {usp.icon}
                </div>
                <h4 className="mt-5 text-lg font-semibold text-[var(--charcoal)]">
                  {usp.title}
                </h4>
                <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
                  {usp.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
