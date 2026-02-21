import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const cardImage = product.images?.[0];
  return (
    <Link
      href={`/products/${product.category}`}
      className="group block overflow-hidden rounded-[8px] border border-[var(--border)] bg-[var(--surface)] transition-all hover:border-[var(--brand-red)]/30 hover:shadow-md"
    >
      <div className="relative aspect-video bg-gradient-to-br from-[var(--neutral-dark)] to-[var(--border)] transition group-hover:from-[var(--brand-navy)]/5 group-hover:to-[var(--brand-red)]/5">
        {cardImage ? (
          <Image
            src={cardImage}
            alt={product.name}
            fill
            sizes="(max-width: 1024px) 100vw, 33vw"
            className="object-contain p-6 transition-transform duration-300 group-hover:scale-[1.02]"
          />
        ) : null}
      </div>
      <div className="p-6">
        <h3 className="font-semibold text-[var(--charcoal)] group-hover:text-[var(--brand-red)] transition-colors">
          {product.name}
        </h3>
        <p className="mt-2 text-sm text-[var(--muted)]">{product.tagline}</p>
      </div>
    </Link>
  );
}
