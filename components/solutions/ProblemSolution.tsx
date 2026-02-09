import type { Solution } from "@/types/solution";

interface ProblemSolutionProps {
  solution: Solution;
}

export function ProblemSolution({ solution }: ProblemSolutionProps) {
  return (
    <section className="section-padding bg-[var(--surface)]">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-[var(--charcoal)]">
              The Challenge
            </h2>
            <p className="mt-4 text-lg text-[var(--muted)]">{solution.problem}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[var(--charcoal)]">
              Our Solution
            </h2>
            <p className="mt-4 text-lg text-[var(--muted)]">{solution.solution}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
