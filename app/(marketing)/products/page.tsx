import Link from "next/link";
import { PRODUCT_CATEGORIES } from "@/types/product";
import { getProductsByCategory } from "@/lib/data/products";
import { ProductCard } from "@/components/products/ProductCard";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Products",
  description:
    "Professional LED displays: indoor, outdoor, rental, transparent, all-in-one, and controllers. Find the right solution for your application.",
};

export default function ProductsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[var(--brand-navy)] py-16 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Our Products
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            Professional LED display solutions for every application. From fine-pitch indoor displays to rugged outdoor billboards.
          </p>
        </div>
      </section>

      {/* Categories */}
      {PRODUCT_CATEGORIES.map((category) => {
        const products = getProductsByCategory(category.slug);
        return (
          <section
            key={category.slug}
            className="section-padding bg-[var(--surface)] odd:bg-[var(--neutral)]"
          >
            <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                <h2 className="text-2xl font-bold text-[var(--charcoal)]">
                  {category.label}
                </h2>
                <Link
                  href={`/products/${category.slug}`}
                  className="text-sm font-semibold text-[var(--brand-red)] hover:underline"
                >
                  View all →
                </Link>
              </div>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {products.slice(0, 3).map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              {products.length > 3 && (
                <div className="mt-8">
                  <Link href={`/products/${category.slug}`}>
                    <Button variant="outline" size="md">
                      View all {category.label}
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="section-padding bg-[var(--brand-navy)]">
        <div className="mx-auto max-w-[1200px] px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Need Help Choosing?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/80">
            Our team can help you find the perfect LED display for your project.
          </p>
          <Link href="/contact" className="mt-8 inline-block">
            <Button variant="primary" size="lg">
              Get a Quote
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
