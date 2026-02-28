import Link from "next/link";
import { getServiceCategories } from "@/lib/data/services";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/layout/PageHero";
import { CategoryExplorer, type ExplorerCategory } from "@/components/products/CategoryExplorer";

export const metadata = {
  title: "Products",
  description:
    "Explore our offerings: indoor LED displays, outdoor LED displays, digital standees (A-type & I-type), and CCTV camera security.",
};

export default function ProductsPage() {
  const categories = getServiceCategories();
  const explorerCategories: ExplorerCategory[] = categories.map((c) => ({
    name: c.name,
    slug: c.slug,
    titleLines: c.hero?.titleLines ?? [],
    subtitle: c.hero?.subtitle,
    heroImage: c.hero?.image,
    heroBackgroundImage: c.hero?.backgroundImage,
    subcategories: (c.subcategories ?? []).map((s) => ({ name: s.name, slug: s.slug, image: s.image })),
  }));

  return (
    <div>
      <PageHero
        label="Products"
        title="Our Products"
        subtitle="Indoor & outdoor LED displays, digital standees, and CCTV security—built for reliable, real‑world deployments."
        actions={
          <Link href="/contact">
            <Button variant="primary">Get a Quote</Button>
          </Link>
        }
      />

      {/* Categories (from services.json) */}
      <section className="section-padding bg-[var(--surface)]">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-label">Categories</p>
              <h2 className="section-title mt-2">Explore Categories</h2>
              <p className="section-desc mt-3 max-w-2xl">
                Choose a category to view detailed subcategories, key characteristics, and applications.
              </p>
            </div>
          </div>

          <CategoryExplorer categories={explorerCategories} />
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[var(--neutral)]">
        <div className="mx-auto max-w-[1200px] px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[var(--charcoal)] sm:text-3xl">
            Need Help Choosing?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[var(--muted)]">
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
