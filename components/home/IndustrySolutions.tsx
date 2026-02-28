import Link from "next/link";
import Image from "next/image";
import { SOLUTION_INDUSTRIES } from "@/types/solution";
import { SOLUTIONS } from "@/lib/data/solutions";
import { asset } from "@/lib/utils/assets";
import { publicAssetExists } from "@/lib/utils/publicAssetExists";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function IndustrySolutions() {
  const industries = SOLUTION_INDUSTRIES.filter((i) => i.slug !== "broadcast-studios");
  const solutionBySlug = new Map(SOLUTIONS.map((s) => [s.slug, s] as const));

  return (
    <section className="bg-[var(--surface)] py-6 sm:py-7 lg:py-8">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up">
          <div className="text-center">
            <p className="section-label">Solutions by Industry</p>
            <h2 className="section-title mt-1.5">Solutions for Every Vertical</h2>
            <p className="section-desc mx-auto mt-2.5 max-w-2xl">
              Tailored deployments across retail, corporate, events, transportation, and security environments.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-5 grid gap-x-2 gap-y-1 sm:mt-6 sm:grid-cols-2 sm:gap-x-3 sm:gap-y-2 lg:grid-cols-4">
          {industries.map((item, i) => (
            <ScrollReveal key={item.slug} animation="fade-up" delay={i * 50}>
              {(() => {
                const solution = solutionBySlug.get(item.slug);
                const label = item.slug === "airports-transportation" ? "Transportation" : item.label;
                const imageSrc = solution?.images?.[0];
                const imageSrcSafe = imageSrc && publicAssetExists(imageSrc) ? imageSrc : null;

                return (
                  <Link
                    href={`/solutions/${item.slug}`}
                    className="group overflow-hidden rounded-3xl border border-transparent bg-[var(--card)] transition-all hover:-translate-y-1"
                  >
                    <div className="p-2 sm:p-3">
                      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-[var(--neutral)]">
                        <div
                          className="absolute inset-0 bg-gradient-to-br from-white/35 via-transparent to-[var(--brand-red)]/10"
                          aria-hidden
                        />

                        {imageSrcSafe ? (
                          <Image
                            src={asset(imageSrcSafe)}
                            alt={label}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                          />
                        ) : (
                          <div
                            className="absolute inset-0"
                            aria-hidden
                            style={{
                              background:
                                "radial-gradient(240px 170px at 20% 30%, rgba(232,106,92,0.28), transparent 60%), radial-gradient(240px 190px at 85% 70%, rgba(11,31,51,0.10), transparent 60%)",
                            }}
                          />
                        )}
                      </div>

                      <div className="pt-1 text-center sm:pt-2">
                        <h4 className="text-base font-bold tracking-tight text-[var(--charcoal)] transition-colors group-hover:text-[var(--brand-red)] sm:text-lg">
                          {label}
                        </h4>
                        <p className="mt-0.5 text-xs font-medium text-[var(--muted)] sm:text-sm">
                          Learn more <span aria-hidden>→</span>
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })()}
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
