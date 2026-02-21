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
            <p className="section-label">Certifications & Partners</p>
            <h2 className="section-title mt-3">Globally Recognized Standards</h2>
            <p className="section-desc mx-auto mt-4 max-w-2xl">
              Our products meet international quality and safety certifications. We work with trusted distributors worldwide.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="flex flex-col items-center rounded-2xl border border-[var(--border)] bg-[var(--card)] px-8 py-6 shadow-[var(--shadow-card)] transition hover:shadow-[var(--shadow-card-hover)]"
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
          <p className="text-center text-sm font-semibold text-[var(--muted)]">
            Trusted by leading brands
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
            {partners.map((partner) => (
              <div
                key={partner}
                className="flex h-12 min-w-[8rem] items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--neutral)] px-6 text-sm font-medium text-[var(--muted)]"
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
