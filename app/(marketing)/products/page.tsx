import Link from "next/link";
import { getServiceCategories } from "@/lib/data/services";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Products",
  description:
    "Explore our services: indoor LED displays, outdoor LED displays, digital standees (A-type & I-type), and CCTV camera security services.",
};

export default function ProductsPage() {
  const categories = getServiceCategories();

  return (
    <div>
      {/* Hero */}
      <section className="bg-[var(--brand-navy)] py-10 sm:py-12 lg:py-14">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Our Services
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            From indoor & outdoor LED display services to digital standees and CCTV security—built for reliable, real-world deployments.
          </p>
        </div>
      </section>

      {/* Categories (from services.json) */}
      <section className="section-padding bg-[var(--surface)]">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-label">Categories</p>
              <h2 className="section-title mt-3">Explore Our Service Categories</h2>
              <p className="section-desc mt-4 max-w-2xl">
                Choose a category to view detailed subcategories, key characteristics, and applications.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/products/${cat.slug}`}
                className="group rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow-card)] transition-all hover-lift hover:border-[var(--brand-red)]/25 hover:shadow-[var(--shadow-card-hover)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold text-[var(--charcoal)] group-hover:text-[var(--brand-red)] transition-colors">
                    {cat.name}
                  </h3>
                  <span className="shrink-0 rounded-full bg-[var(--brand-red-soft)] px-3 py-1 text-xs font-semibold text-[var(--brand-red)]">
                    {cat.subcategories?.length ?? 0}
                  </span>
                </div>

                {cat.subcategories?.length ? (
                  <p className="mt-3 text-sm text-[var(--muted)]">
                    {cat.subcategories
                      .slice(0, 3)
                      .map((s) => s.name)
                      .join(" • ")}
                    {cat.subcategories.length > 3 ? " • …" : ""}
                  </p>
                ) : null}

                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[var(--brand-red)] transition-transform group-hover:gap-2">
                  View subcategories <span aria-hidden>→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[var(--brand-navy)]">
        <div className="mx-auto max-w-[1200px] px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Need Help Choosing?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/80">
            Our team can help you choose the right LED display, digital standee, or CCTV setup for your project.
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
