import type { Project } from "@/types/project";

interface ProjectHeroProps {
  project: Project;
}

export function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <section className="bg-[var(--brand-navy)] py-16 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-[var(--brand-red)]">
          Case Study
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          {project.clientName}
        </h1>
        <p className="mt-2 text-lg text-white/80">{project.location}</p>
        <div className="mt-6 flex flex-wrap gap-6 text-sm text-white/70">
          <span>{project.productInstalled}</span>
          {project.screenSize && <span>• {project.screenSize}</span>}
          {project.date && <span>• {project.date}</span>}
        </div>
      </div>
    </section>
  );
}
