import Link from "next/link";
import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block overflow-hidden rounded-[8px] border border-[var(--border)] bg-[var(--surface)] transition-all hover:border-[var(--brand-red)]/30 hover:shadow-md"
    >
      <div className="aspect-video bg-gradient-to-br from-[var(--neutral-dark)] to-[var(--border)] transition group-hover:from-[var(--brand-navy)]/5 group-hover:to-[var(--brand-red)]/5" />
      <div className="p-6">
        <p className="text-sm font-medium text-[var(--brand-red)]">
          {project.location} • {project.date}
        </p>
        <h3 className="mt-2 font-semibold text-[var(--charcoal)] group-hover:text-[var(--brand-red)] transition-colors">
          {project.clientName}
        </h3>
        <p className="mt-2 text-sm text-[var(--muted)]">
          {project.productInstalled} {project.screenSize && `• ${project.screenSize}`}
        </p>
      </div>
    </Link>
  );
}
