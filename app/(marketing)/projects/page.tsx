import Link from "next/link";
import { ALL_PROJECTS } from "@/lib/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/layout/PageHero";

export const metadata = {
  title: "Case Studies",
  description:
    "Explore LED display installations by Ledial Technologies. Retail, broadcast, airports, corporate, and more.",
};

export default function ProjectsPage() {
  const projects = ALL_PROJECTS;
  return (
    <div>
      <PageHero
        label="Case Studies"
        title="Case Studies"
        subtitle="See how leading organizations use Ledial LED displays to transform their spaces—from retail to broadcast to transportation."
      />

      {/* Projects grid */}
      <section className="section-padding bg-[var(--surface)]">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[var(--neutral)]">
        <div className="mx-auto max-w-[1200px] px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[var(--charcoal)] sm:text-3xl">
            Ready to Start Your Project?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[var(--muted)]">
            Let us help you achieve similar results. Get in touch for a consultation.
          </p>
          <Link href="/contact" className="mt-8 inline-block">
            <Button variant="primary" size="lg">
              Get a Quote
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
