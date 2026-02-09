import { AboutHero } from "@/components/about/AboutHero";
import { AboutNav } from "@/components/about/AboutNav";
import { CERTIFICATIONS_LIST } from "@/lib/data/about";

export const metadata = {
  title: "Certifications",
  description:
    "LaDial Technologies certifications: CE, FCC, ISO 9001, RoHS, and more. Globally recognized quality and safety standards.",
};

export default function CertificationsPage() {
  return (
    <div>
      <AboutHero
        title="Certifications"
        subtitle="Globally recognized quality and safety standards."
      />
      <AboutNav currentPath="/about/certifications" />

      <section className="section-padding bg-[var(--surface)]">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <p className="max-w-3xl text-lg text-[var(--muted)]">
            Our products and manufacturing processes meet international standards for quality, safety, and environmental compliance.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CERTIFICATIONS_LIST.map((cert) => (
              <div
                key={cert.name}
                className="rounded-[8px] border border-[var(--border)] bg-[var(--neutral)] p-8"
              >
                <span className="text-3xl font-bold text-[var(--brand-red)]">
                  {cert.name}
                </span>
                <p className="mt-2 font-medium text-[var(--charcoal)]">
                  {cert.fullName}
                </p>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
