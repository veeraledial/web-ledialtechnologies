import Image from "next/image";
import type { Product } from "@/types/product";
import { asset } from "@/lib/utils/assets";
import { PageHero } from "@/components/layout/PageHero";

interface ProductHeroProps {
  product: Product;
  categoryLabel?: string;
}

export function ProductHero({ product, categoryLabel }: ProductHeroProps) {
  const heroImage = product.images?.[0];
  return (
    <PageHero
      label={categoryLabel ?? product.category.replace(/-/g, " ")}
      title={product.name}
      subtitle={product.tagline}
      right={
        heroImage ? (
          <div className="flex w-full flex-shrink-0 justify-center">
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
        ) : null
      }
    />
  );
}
