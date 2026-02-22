import { notFound } from "next/navigation";
import Link from "next/link";
import { ALL_PROJECTS, getProjectBySlug } from "@/lib/data/projects";
import { ProjectHero } from "@/components/projects/ProjectHero";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { Button } from "@/components/ui/Button";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return ALL_PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Case Study" };
  return {
    title: project.metaTitle,
    description: project.metaDescription,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <div>
      <ProjectHero project={project} />

      <nav className="border-b border-[var(--border)] bg-[var(--surface)]">
        <div className="mx-auto max-w-[1200px] px-4 py-4 sm:px-6 lg:px-8">
          <Link
            href="/projects"
            className="text-sm text-[var(--muted)] hover:text-[var(--brand-red)]"
          >
            ← Back to Case Studies
          </Link>
        </div>
      </nav>

      {/* Challenge & Result */}
      <section className="section-padding bg-[var(--surface)]">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-[var(--charcoal)]">
                The Challenge
              </h2>
              <p className="mt-4 text-lg text-[var(--muted)]">
                {project.challenge}
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[var(--charcoal)]">
                The Result
              </h2>
              <p className="mt-4 text-lg text-[var(--muted)]">
                {project.result}
              </p>
            </div>
          </div>

          {project.specs && (
            <div className="mt-12 rounded-[8px] border border-[var(--border)] bg-[var(--neutral)] p-6">
              <h3 className="font-semibold text-[var(--charcoal)]">
                Project Specifications
              </h3>
              <p className="mt-2 text-[var(--muted)]">{project.specs}</p>
            </div>
          )}
        </div>
      </section>

      <ProjectGallery project={project} />

      {/* CTA */}
      <section className="section-padding bg-[var(--neutral)]">
        <div className="mx-auto max-w-[1200px] px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[var(--charcoal)]">
            Interested in Similar Results?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[var(--muted)]">
            Get in touch to discuss your LED display project.
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
