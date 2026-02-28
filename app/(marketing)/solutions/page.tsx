import Link from "next/link";
import Image from "next/image";
import { SOLUTION_INDUSTRIES } from "@/types/solution";
import { SOLUTIONS } from "@/lib/data/solutions";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/layout/PageHero";
import { asset } from "@/lib/utils/assets";
import { publicAssetExists } from "@/lib/utils/publicAssetExists";

export const metadata = {
  title: "Solutions",
  description:
    "LED display and CCTV solutions by industry: retail, control rooms, automotive, transportation, corporate, events, education, and healthcare.",
};

export default function SolutionsPage() {
  const solutionBySlug = new Map(SOLUTIONS.map((s) => [s.slug, s] as const));

  return (
    <div>
      <PageHero
        label="Solutions"
        title="Solutions by Industry"
        subtitle="Tailored LED display and CCTV solutions for every vertical. From retail to healthcare, we deliver the right technology for your industry."
        actions={
          <Link href="/contact">
            <Button variant="primary">Contact Us</Button>
          </Link>
        }
      />

      {/* Industry grid */}
      <section className="bg-[var(--surface)] py-6 sm:py-7 lg:py-8">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-x-2 gap-y-1 sm:grid-cols-2 sm:gap-x-3 sm:gap-y-2 lg:grid-cols-4">
            {SOLUTION_INDUSTRIES.map((item) => {
              const solution = solutionBySlug.get(item.slug);
              const label = item.slug === "airports-transportation" ? "Transportation" : item.label;
              const imageSrc = solution?.images?.[0];
              const imageSrcSafe = imageSrc && publicAssetExists(imageSrc) ? imageSrc : null;

              return (
                <Link
                  key={item.slug}
                  href={`/solutions/${item.slug}`}
                  className="group overflow-hidden rounded-3xl border border-transparent bg-[var(--surface)] transition-all hover:-translate-y-1"
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
                      <h2 className="text-base font-bold tracking-tight text-[var(--charcoal)] transition-colors group-hover:text-[var(--brand-red)] sm:text-lg">
                        {label}
                      </h2>
                      <p className="mt-0.5 text-xs font-medium text-[var(--muted)] sm:text-sm">
                        Learn more <span aria-hidden>→</span>
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[var(--neutral)]">
        <div className="mx-auto max-w-[1200px] px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[var(--charcoal)] sm:text-3xl">
            Ready to Transform Your Space?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[var(--muted)]">
            Tell us about your industry and requirements. Our experts will recommend the perfect solution.
          </p>
          <Link href="/contact" className="mt-8 inline-block">
            <Button variant="primary" size="lg">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
