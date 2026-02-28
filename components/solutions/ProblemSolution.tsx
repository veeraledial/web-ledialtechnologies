import type { Solution } from "@/types/solution";

interface ProblemSolutionProps {
  solution: Solution;
}

export function ProblemSolution({ solution }: ProblemSolutionProps) {
  return (
    <section className="section-padding bg-[var(--surface)]">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-7">
            <h2 className="text-xl font-bold tracking-tight text-[var(--charcoal)] sm:text-2xl">
              The Challenge
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--muted)] sm:text-lg">
              {solution.problem}
            </p>
          </div>

          <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-7">
            <h2 className="text-xl font-bold tracking-tight text-[var(--charcoal)] sm:text-2xl">
              Our Solution
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--muted)] sm:text-lg">
              {solution.solution}
            </p>
          </div>
        </div>

        {(solution.keyBenefits?.length || solution.useCases?.length) ? (
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {solution.keyBenefits?.length ? (
              <div className="rounded-3xl border border-[var(--border)] bg-[var(--neutral)] p-7">
                <h3 className="text-lg font-bold text-[var(--charcoal)]">
                  Key benefits
                </h3>
                <ul className="mt-4 space-y-2 text-[var(--muted)]">
                  {solution.keyBenefits.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-red)]" aria-hidden />
                      <span className="leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {solution.useCases?.length ? (
              <div className="rounded-3xl border border-[var(--border)] bg-[var(--neutral)] p-7">
                <h3 className="text-lg font-bold text-[var(--charcoal)]">
                  Typical use cases
                </h3>
                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  {solution.useCases.map((u) => (
                    <div
                      key={u}
                      className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm font-semibold text-[var(--charcoal)]"
                    >
                      {u}
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}
