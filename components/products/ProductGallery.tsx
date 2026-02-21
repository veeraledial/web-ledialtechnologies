import Image from "next/image";
import type { Product } from "@/types/product";
import { asset } from "@/lib/utils/assets";

interface ProductGalleryProps {
  product: Product;
}

export function ProductGallery({ product }: ProductGalleryProps) {
  const images = product.images?.length ? product.images : [];

  return (
    <section className="section-padding bg-[var(--neutral)]">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-[var(--charcoal)]">Gallery</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((src, i) => (
            <div
              key={`${src}-${i}`}
              className="relative aspect-video overflow-hidden rounded-[8px] bg-gradient-to-br from-[var(--neutral-dark)] to-[var(--border)]"
            >
              <Image
                src={asset(src)}
                alt={`${product.name} image ${i + 1}`}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-contain p-6"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
