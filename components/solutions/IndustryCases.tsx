import Link from "next/link";
import type { Project } from "@/types/project";

interface IndustryCasesProps {
  projects: Project[];
}

export function IndustryCases({ projects }: IndustryCasesProps) {
  if (projects.length === 0) return null;

  return (
    <section className="section-padding bg-[var(--neutral)]">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-[var(--charcoal)]">
          Related Case Studies
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className="group overflow-hidden rounded-[8px] border border-[var(--border)] bg-[var(--surface)] transition-all hover:border-[var(--brand-red)]/30"
            >
              <div className="aspect-video bg-gradient-to-br from-[var(--neutral-dark)] to-[var(--border)]" />
              <div className="p-4">
                <p className="text-sm font-medium text-[var(--brand-red)]">
                  {project.location}
                </p>
                <h3 className="mt-1 font-semibold text-[var(--charcoal)] group-hover:text-[var(--brand-red)]">
                  {project.clientName}
                </h3>
                <p className="mt-1 text-sm text-[var(--muted)]">
                  {project.productInstalled}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
