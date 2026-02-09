import type { Project } from "@/types/project";

interface ProjectGalleryProps {
  project: Project;
}

export function ProjectGallery({ project }: ProjectGalleryProps) {
  const images = project.images?.length ? project.images : [""];

  return (
    <section className="section-padding bg-[var(--neutral)]">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-[var(--charcoal)]">
          Installation Gallery
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((_, i) => (
            <div
              key={i}
              className="aspect-video rounded-[8px] bg-gradient-to-br from-[var(--neutral-dark)] to-[var(--border)]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
