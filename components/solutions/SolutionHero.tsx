import type { Solution } from "@/types/solution";
import Link from "next/link";
import Image from "next/image";
import { asset } from "@/lib/utils/assets";
import { publicAssetExists } from "@/lib/utils/publicAssetExists";
import { Button } from "@/components/ui/Button";

interface SolutionHeroProps {
  solution: Solution;
}

export function SolutionHero({ solution }: SolutionHeroProps) {
  const imageSrc = solution.images?.[0];
  const imageSrcSafe = imageSrc && publicAssetExists(imageSrc) ? imageSrc : null;

  return (
    <section className="relative overflow-hidden bg-[var(--brand-navy)]">
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        aria-hidden
        style={{
          background:
            "radial-gradient(900px 380px at 15% 20%, rgba(232,106,92,0.22), transparent 62%), radial-gradient(750px 300px at 90% 10%, rgba(255,255,255,0.12), transparent 60%), radial-gradient(900px 420px at 70% 85%, rgba(232,106,92,0.14), transparent 60%)",
        }}
      />

      <div className="relative flex flex-col lg:grid lg:grid-cols-2 lg:items-stretch">
        <div className="order-2 lg:order-1">
          <div className="px-4 py-6 sm:px-6 sm:py-7 lg:h-full lg:pr-12 lg:py-5 lg:pl-[clamp(2rem,calc((100vw-1200px)/2+2rem),20rem)]">
            <div className="lg:flex lg:h-full lg:max-w-[560px] lg:flex-col lg:justify-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-[var(--brand-red)]">
                Solutions
              </p>
              <h1 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                {solution.title}
              </h1>
              <p className="mt-1.5 text-sm leading-relaxed text-white/85 sm:text-base">
                {`LED display & CCTV solutions tailored for the ${solution.industry.toLowerCase()} industry.`}
              </p>
              <div className="mt-2 flex flex-wrap gap-3">
                <Link href="/contact">
                  <Button variant="primary">Get a Quote</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="w-full overflow-hidden">
            <div className="aspect-[16/9] w-full lg:h-[300px] lg:aspect-auto xl:h-[330px]">
              {imageSrcSafe ? (
                <Image
                  src={asset(imageSrcSafe)}
                  alt={solution.title}
                  width={1920}
                  height={1080}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="h-full w-full object-cover"
                  priority
                />
              ) : (
                <div
                  className="h-full w-full"
                  aria-hidden
                  style={{
                    background:
                      "radial-gradient(500px 260px at 20% 30%, rgba(232,106,92,0.35), transparent 60%), radial-gradient(520px 280px at 85% 70%, rgba(255,255,255,0.12), transparent 62%), linear-gradient(135deg, rgba(255,255,255,0.08), transparent)",
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
