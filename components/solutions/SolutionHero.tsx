import type { Solution } from "@/types/solution";

interface SolutionHeroProps {
  solution: Solution;
}

export function SolutionHero({ solution }: SolutionHeroProps) {
  return (
    <section className="bg-[var(--brand-navy)] py-16 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-[var(--brand-red)]">
          Solutions
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          {solution.title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-white/80">
          LED display solutions tailored for the {solution.industry.toLowerCase()} industry.
        </p>
      </div>
    </section>
  );
}
