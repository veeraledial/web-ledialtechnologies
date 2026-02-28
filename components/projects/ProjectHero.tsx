import type { Project } from "@/types/project";
import { PageHero } from "@/components/layout/PageHero";

interface ProjectHeroProps {
  project: Project;
}

export function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <PageHero
      label="Case Study"
      title={project.clientName}
      subtitle={project.location}
      description={
        <div className="mt-6 flex flex-wrap gap-6 text-sm text-white/70">
          <span>{project.productInstalled}</span>
          {project.screenSize ? <span>• {project.screenSize}</span> : null}
          {project.date ? <span>• {project.date}</span> : null}
        </div>
      }
    />
  );
}
