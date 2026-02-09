import Link from "next/link";
import type { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.category}`}
      className="group block overflow-hidden rounded-[8px] border border-[var(--border)] bg-[var(--surface)] transition-all hover:border-[var(--brand-red)]/30 hover:shadow-md"
    >
      <div className="aspect-video bg-gradient-to-br from-[var(--neutral-dark)] to-[var(--border)] transition group-hover:from-[var(--brand-navy)]/5 group-hover:to-[var(--brand-red)]/5" />
      <div className="p-6">
        <h3 className="font-semibold text-[var(--charcoal)] group-hover:text-[var(--brand-red)] transition-colors">
          {product.name}
        </h3>
        <p className="mt-2 text-sm text-[var(--muted)]">{product.tagline}</p>
      </div>
    </Link>
  );
}
