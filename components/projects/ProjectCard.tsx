import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="overflow-hidden rounded-[8px] border border-[var(--border)] bg-[var(--surface)]">
      <div className="aspect-video bg-gradient-to-br from-[var(--neutral-dark)] to-[var(--border)]" />
      <div className="p-6">
        <p className="text-sm font-medium text-[var(--brand-red)]">
          {project.location} • {project.date}
        </p>
        <h3 className="mt-2 font-semibold text-[var(--charcoal)]">
          {project.clientName}
        </h3>
        <p className="mt-2 text-sm text-[var(--muted)]">
          {project.productInstalled} {project.screenSize && `• ${project.screenSize}`}
        </p>
      </div>
    </article>
  );
}
