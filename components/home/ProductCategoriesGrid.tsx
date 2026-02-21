import Link from "next/link";
import Image from "next/image";
import { PRODUCT_CATEGORIES } from "@/types/product";
import { getProductsByCategory } from "@/lib/data/products";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function ProductCategoriesGrid() {
  return (
    <section className="section-padding bg-[var(--surface)]">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up">
          <p className="section-label">Services</p>
          <h2 className="section-title mt-3">Our Core Offerings</h2>
          <p className="section-desc mx-auto mt-4 max-w-2xl">
            Indoor & outdoor LED display services, digital standee solutions, and CCTV camera security—delivered with installation and support.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCT_CATEGORIES.map((cat, i) => {
            const products = getProductsByCategory(cat.slug);
            const primaryProduct = products[0];
            const cardImage = primaryProduct?.images?.[0];
            return (
              <ScrollReveal key={cat.slug} animation="fade-up" delay={i * 60}>
                <Link
                  href={`/products/${cat.slug}`}
                  className="group block overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-[var(--shadow-card)] transition-all hover-lift hover:border-[var(--brand-red)]/20 hover:shadow-[var(--shadow-card-hover)]"
                >
                  <div className="relative aspect-[16/10] bg-gradient-to-br from-[var(--neutral-dark)] to-[var(--border)] transition duration-300 group-hover:from-[var(--brand-navy)]/15 group-hover:to-[var(--brand-red)]/10">
                    {cardImage ? (
                      <Image
                        src={cardImage}
                        alt={cat.label}
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-contain p-8 transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                    ) : null}
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-[var(--charcoal)] transition-colors group-hover:text-[var(--brand-red)]">
                      {cat.label}
                    </h4>
                    {primaryProduct && (
                      <p className="mt-2 text-sm text-[var(--muted)]">
                        {primaryProduct.tagline}
                      </p>
                    )}
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[var(--brand-red)] transition-transform group-hover:gap-2">
                      View More
                      <span aria-hidden>→</span>
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
