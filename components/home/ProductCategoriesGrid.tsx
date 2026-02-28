import Link from "next/link";
import { getServiceCategories } from "@/lib/data/services";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SubcategoryScroller, type SubcategoryCard } from "@/components/home/SubcategoryScroller";

export function ProductCategoriesGrid() {
  const categories = getServiceCategories();

  const cards: SubcategoryCard[] = categories.flatMap((cat) =>
    (cat.subcategories ?? []).map((s) => ({
      key: `${cat.slug}/${s.slug}`,
      href: `/products/${cat.slug}`,
      label: s.name,
      tagline: cat.name,
      image: s.image ?? null,
    }))
  );

  return (
    <section className="section-padding bg-[var(--neutral)]">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up">
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-label">Services</p>
            <h2 className="section-title mt-2">Our Core Offerings</h2>
            <p className="section-desc mx-auto mt-4 max-w-2xl">
              Explore our full range of LED display, digital standee, and CCTV security solutions—built for real-world performance and reliable support.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-10">
          <SubcategoryScroller cards={cards} />
        </div>
      </div>
    </section>
  );
}
