import type { Product } from "@/types/product";

interface ProductHeroProps {
  product: Product;
}

export function ProductHero({ product }: ProductHeroProps) {
  return (
    <section className="bg-[var(--brand-navy)] py-16 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--brand-red)]">
              {product.category.replace(/-/g, " ")}
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {product.name}
            </h1>
            <p className="mt-4 text-lg text-white/80">{product.tagline}</p>
          </div>
          <div className="aspect-video w-full max-w-lg shrink-0 overflow-hidden rounded-[8px] bg-[#e0e1dd]/20 lg:aspect-square lg:max-w-xs">
            {/* Product image placeholder */}
          </div>
        </div>
      </div>
    </section>
  );
}
