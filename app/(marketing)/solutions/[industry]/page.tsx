import { notFound } from "next/navigation";
import Link from "next/link";
import type { SolutionIndustry } from "@/types/solution";
import { SOLUTION_INDUSTRIES } from "@/types/solution";
import { getSolutionByIndustry } from "@/lib/data/solutions";
import { getProjectsByIndustry } from "@/lib/data/projects";
import { SolutionHero } from "@/components/solutions/SolutionHero";
import { ProblemSolution } from "@/components/solutions/ProblemSolution";
import { IndustryCases } from "@/components/solutions/IndustryCases";
import { Button } from "@/components/ui/Button";

type PageProps = {
  params: Promise<{ industry: string }>;
};

const VALID_INDUSTRIES = SOLUTION_INDUSTRIES.map((i) => i.slug);

function isValidIndustry(value: string): value is SolutionIndustry {
  return VALID_INDUSTRIES.includes(value as SolutionIndustry);
}

export async function generateMetadata({ params }: PageProps) {
  const { industry } = await params;
  const solution = getSolutionByIndustry(industry as SolutionIndustry);
  if (!solution) return { title: "Solution" };
  return {
    title: solution.metaTitle || solution.title,
    description: solution.metaDescription || solution.solution.slice(0, 160),
  };
}

export default async function SolutionIndustryPage({ params }: PageProps) {
  const { industry } = await params;

  if (!isValidIndustry(industry)) {
    notFound();
  }

  const solution = getSolutionByIndustry(industry);
  if (!solution) notFound();

  const relatedProjects = getProjectsByIndustry(industry);

  return (
    <div>
      <SolutionHero solution={solution} />

      <nav className="border-b border-[var(--border)] bg-[var(--surface)]">
        <div className="mx-auto max-w-[1200px] px-4 py-4 sm:px-6 lg:px-8">
          <Link
            href="/solutions"
            className="text-sm text-[var(--muted)] hover:text-[var(--brand-red)]"
          >
            ← Back to Solutions
          </Link>
        </div>
      </nav>

      <ProblemSolution solution={solution} />
      <IndustryCases projects={relatedProjects} />

      {/* CTA */}
      <section className="section-padding bg-[var(--neutral)]">
        <div className="mx-auto max-w-[1200px] px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[var(--charcoal)]">
            Interested in {solution.title}?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[var(--muted)]">
            Get in touch to discuss how our LED solutions can work for your {solution.industry.toLowerCase()} project.
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
