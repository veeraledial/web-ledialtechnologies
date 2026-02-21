import Link from "next/link";
import { ALL_PROJECTS, getProjectsByIndustry } from "@/lib/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { SOLUTION_INDUSTRIES } from "@/types/solution";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Case Studies",
  description:
    "Explore LED display installations by LaDial Technologies. Retail, broadcast, airports, corporate, and more.",
};

type PageProps = {
  searchParams: Promise<{ industry?: string }>;
};

export default async function ProjectsPage({ searchParams }: PageProps) {
  const { industry } = await searchParams;
  const projects = industry ? getProjectsByIndustry(industry) : ALL_PROJECTS;
  return (
    <div>
      {/* Hero */}
      <section className="bg-[var(--brand-navy)] py-10 sm:py-12 lg:py-14">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Case Studies
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            See how leading organizations use LaDial LED displays to transform their spaces. From retail to broadcast to transportation.
          </p>
        </div>
      </section>

      {/* Filter by industry */}
      <section className="border-b border-[var(--border)] bg-[var(--surface)] py-4">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-[var(--muted)]">Filter by industry:</p>
          <div className="mt-2 flex flex-wrap gap-2">
            <Link
              href="/projects"
              className={`rounded-[6px] px-4 py-2 text-sm font-medium ${
                !industry
                  ? "bg-[var(--brand-navy)] text-white"
                  : "border border-[var(--border)] text-[var(--charcoal)] hover:border-[var(--brand-red)] hover:text-[var(--brand-red)]"
              }`}
            >
              All
            </Link>
            {SOLUTION_INDUSTRIES.map((ind) => {
              const count = ALL_PROJECTS.filter((p) => p.industry === ind.slug).length;
              if (count === 0) return null;
              const isActive = industry === ind.slug;
              return (
                <Link
                  key={ind.slug}
                  href={isActive ? "/projects" : `/projects?industry=${ind.slug}`}
                  className={`rounded-[6px] px-4 py-2 text-sm font-medium ${
                    isActive
                      ? "bg-[var(--brand-navy)] text-white"
                      : "border border-[var(--border)] text-[var(--charcoal)] hover:border-[var(--brand-red)] hover:text-[var(--brand-red)]"
                  }`}
                >
                  {ind.label} ({count})
                </Link>
              );
            })}
          </div>
        </div>
      </section>

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
      <section className="section-padding bg-[var(--brand-navy)]">
        <div className="mx-auto max-w-[1200px] px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Ready to Start Your Project?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/80">
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
