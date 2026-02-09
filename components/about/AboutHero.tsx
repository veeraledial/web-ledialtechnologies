interface AboutHeroProps {
  title: string;
  subtitle?: string;
}

export function AboutHero({ title, subtitle }: AboutHeroProps) {
  return (
    <section className="bg-[var(--brand-navy)] py-16 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-[var(--brand-red)]">
          About Us
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-lg text-white/80">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
