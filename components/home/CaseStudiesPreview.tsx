import Link from "next/link";
import { FEATURED_PROJECTS } from "@/lib/data/projects";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function CaseStudiesPreview() {
  return (
    <section className="section-padding bg-[var(--neutral)]">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up">
          <div className="text-center">
            <p className="section-label">Case Studies</p>
            <h2 className="section-title mt-3">Proven Results Worldwide</h2>
            <p className="section-desc mx-auto mt-4 max-w-2xl">
              See how leading organizations use Ledial solutions to transform spaces with impactful visuals and reliable installations.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {FEATURED_PROJECTS.map((project, i) => (
            <ScrollReveal key={project.id} animation="fade-up" delay={i * 100}>
              <Link
                href={`/projects/${project.slug}`}
                className="group block overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-[var(--shadow-card)] transition-all hover-lift hover:border-[var(--brand-red)]/20 hover:shadow-[var(--shadow-card-hover)]"
              >
              <div className="aspect-video bg-gradient-to-br from-[var(--neutral-dark)] to-[var(--border)] transition duration-300 group-hover:from-[var(--brand-navy)]/15 group-hover:to-[var(--brand-red)]/10" />
              <div className="p-6">
                <p className="text-sm font-medium text-[var(--brand-red)]">
                  {project.location}
                </p>
                <h4 className="mt-2 font-semibold text-[var(--charcoal)] group-hover:text-[var(--brand-red)] transition-colors">
                  {project.clientName}
                </h4>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  {project.productInstalled} • {project.screenSize}
                </p>
              </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/projects">
            <Button variant="outline" size="md">
              View All Case Studies
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
