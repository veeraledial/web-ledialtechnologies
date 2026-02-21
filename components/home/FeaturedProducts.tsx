import Link from "next/link";
import { FEATURED_PRODUCTS } from "@/lib/data/products";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function FeaturedProducts() {
  return (
    <section className="section-padding bg-[var(--neutral)]">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--brand-red)]">
            Our Services
          </h2>
          <h3 className="mt-4 text-3xl font-bold tracking-tight text-[var(--charcoal)] sm:text-4xl">
            LED Displays, Digital Standees & CCTV Security
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--muted)]">
            Five focused offerings—delivered end‑to‑end with installation, commissioning, and support.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURED_PRODUCTS.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.category}`}
              className="group rounded-[8px] border border-[var(--border)] bg-[var(--surface)] p-6 transition-all hover:border-[var(--brand-red)]/30 hover:shadow-md"
            >
              <div className="relative aspect-video overflow-hidden rounded-[6px] bg-gradient-to-br from-[var(--neutral-dark)] to-[var(--border)] transition group-hover:from-[var(--brand-navy)]/10 group-hover:to-[var(--brand-red)]/10">
                {product.images?.[0] ? (
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 25vw"
                    className="object-contain p-6 transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                ) : null}
              </div>
              <h4 className="mt-4 font-semibold text-[var(--charcoal)] group-hover:text-[var(--brand-red)] transition-colors">
                {product.name}
              </h4>
              <p className="mt-2 text-sm text-[var(--muted)]">
                {product.tagline}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/products">
            <Button variant="primary" size="md">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
