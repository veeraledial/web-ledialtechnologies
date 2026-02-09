import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CLIENT_NAMES } from "@/lib/data/clients";

const certifications = [
  { name: "CE", desc: "European conformity" },
  { name: "FCC", desc: "US Federal Communications" },
  { name: "ISO 9001", desc: "Quality management" },
  { name: "RoHS", desc: "Restriction of hazardous substances" },
];

const partners = CLIENT_NAMES.slice(0, 8);

export function Certifications() {
  return (
    <section className="section-padding bg-[var(--surface)]">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up">
          <div className="text-center">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--brand-red)]">
              Certifications & Partners
            </h2>
          <h3 className="mt-4 text-3xl font-bold tracking-tight text-[var(--charcoal)] sm:text-4xl">
            Globally Recognized Standards
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--muted)]">
            Our products meet international quality and safety certifications. We work with trusted distributors worldwide.
          </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-12">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="flex flex-col items-center rounded-[8px] border border-[var(--border)] bg-[var(--neutral)] px-8 py-6"
            >
              <span className="text-2xl font-bold text-[var(--brand-red)]">
                {cert.name}
              </span>
              <span className="mt-1 text-sm text-[var(--muted)]">
                {cert.desc}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <p className="text-center text-sm font-medium text-[var(--muted)]">
            Trusted by leading brands
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-8 opacity-60">
            {partners.map((partner) => (
              <div
                key={partner}
                className="flex h-12 w-32 items-center justify-center rounded-[6px] bg-[var(--neutral)] text-sm text-[var(--muted)]"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
