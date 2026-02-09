import Link from "next/link";
import { PRODUCT_CATEGORIES } from "@/types/product";
import { getProductsByCategory } from "@/lib/data/products";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function ProductCategoriesGrid() {
  return (
    <section className="section-padding bg-[var(--surface)]">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--brand-red)]">
            Categories
          </h2>
          <h3 className="mt-4 text-3xl font-bold tracking-tight text-[var(--charcoal)] sm:text-4xl">
            Professional LED Display Solutions
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--muted)]">
            From fine-pitch indoor displays to rugged outdoor billboards, we offer a complete range for every application.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCT_CATEGORIES.map((cat, i) => {
            const products = getProductsByCategory(cat.slug);
            const primaryProduct = products[0];
            return (
              <ScrollReveal key={cat.slug} animation="fade-up" delay={i * 60}>
                <Link
                  href={`/products/${cat.slug}`}
                  className="group block overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--neutral)] transition-all hover-lift hover:border-[var(--brand-red)]/30"
                >
                  <div className="aspect-[16/10] bg-gradient-to-br from-[var(--neutral-dark)] to-[var(--border)] transition group-hover:from-[var(--brand-navy)]/10 group-hover:to-[var(--brand-red)]/10" />
                  <div className="p-6">
                    <h4 className="font-semibold text-[var(--charcoal)] transition-colors group-hover:text-[var(--brand-red)]">
                      {cat.label}
                    </h4>
                    {primaryProduct && (
                      <p className="mt-2 text-sm text-[var(--muted)]">
                        {primaryProduct.tagline}
                      </p>
                    )}
                    <span className="mt-4 inline-block text-sm font-semibold text-[var(--brand-red)] group-hover:underline">
                      View More →
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
