import Image from "next/image";
import type { Product } from "@/types/product";
import { asset } from "@/lib/utils/assets";

interface ProductHeroProps {
  product: Product;
  categoryLabel?: string;
}

export function ProductHero({ product, categoryLabel }: ProductHeroProps) {
  const heroImage = product.images?.[0];
  return (
    <section className="bg-[var(--brand-navy)] py-16 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--brand-red)]">
              {categoryLabel ?? product.category.replace(/-/g, " ")}
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {product.name}
            </h1>
            <p className="mt-4 text-lg text-white/80">{product.tagline}</p>
          </div>
          {heroImage ? (
            <div className="flex w-full flex-shrink-0 justify-center lg:w-[55%]">
              <div className="relative w-full max-w-lg">
                <div className="relative aspect-video w-full sm:aspect-[4/3]">
                  <Image
                    src={asset(heroImage)}
                    alt={product.name}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
