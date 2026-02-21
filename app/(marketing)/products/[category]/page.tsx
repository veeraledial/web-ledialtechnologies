import { notFound } from "next/navigation";
import type { ProductCategory } from "@/types/product";
import { PRODUCT_CATEGORIES } from "@/types/product";
import {
  getProductsByCategory,
  getCategoryBySlug,
} from "@/lib/data/products";
import { ProductHero } from "@/components/products/ProductHero";
import { ProductSpecs } from "@/components/products/ProductSpecs";
import { ProductGallery } from "@/components/products/ProductGallery";
import { BrochureDownload } from "@/components/products/BrochureDownload";
import { ProductEnquiryForm } from "@/components/products/ProductEnquiryForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { getProductJsonLd, getBreadcrumbJsonLd, getAbsoluteUrl } from "@/lib/utils/seo";
import Link from "next/link";

type PageProps = {
  params: Promise<{ category: string }>;
};

const VALID_CATEGORIES = PRODUCT_CATEGORIES.map((c) => c.slug);

function isValidCategory(value: string): value is ProductCategory {
  return VALID_CATEGORIES.includes(value as ProductCategory);
}

export async function generateMetadata({ params }: PageProps) {
  const { category } = await params;
  const cat = getCategoryBySlug(category as ProductCategory);
  if (!cat) return { title: "Product" };
  return {
    title: cat.label,
    description: `Explore our ${cat.label}. LED displays, digital standees, and security solutions from LaDial Technologies.`,
  };
}

export default async function ProductCategoryPage({ params }: PageProps) {
  const { category } = await params;

  if (!isValidCategory(category)) {
    notFound();
  }

  const products = getProductsByCategory(category);
  const categoryInfo = getCategoryBySlug(category)!;

  // Primary product for the category (first one)
  const primaryProduct = products[0];
  if (!primaryProduct) {
    notFound();
  }
  const productUrl = getAbsoluteUrl(`/products/${category}`);
  const productJsonLd = getProductJsonLd({
    name: primaryProduct.name,
    description: primaryProduct.metaDescription || primaryProduct.overview,
    category: categoryInfo.label,
    url: productUrl,
  });
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Home", url: getAbsoluteUrl("/") },
    { name: "Products", url: getAbsoluteUrl("/products") },
    { name: categoryInfo.label, url: productUrl },
  ]);

  return (
    <div>
      <JsonLd data={[productJsonLd, breadcrumbJsonLd]} />
      <ProductHero product={primaryProduct} categoryLabel={categoryInfo.label} />

      {/* Overview */}
      <section className="section-padding bg-[var(--surface)]">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <nav className="mb-8 text-sm text-[var(--muted)]">
            <Link href="/products" className="hover:text-[var(--brand-red)]">
              Products
            </Link>
            <span className="mx-2">/</span>
            <span>{categoryInfo.label}</span>
          </nav>
          <h2 className="text-2xl font-bold text-[var(--charcoal)]">Overview</h2>
          <p className="mt-4 max-w-3xl text-lg text-[var(--muted)]">
            {primaryProduct.overview}
          </p>
          {primaryProduct.features.length > 0 && (
            <>
              <h3 className="mt-8 text-xl font-semibold text-[var(--charcoal)]">
                Key Features
              </h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {primaryProduct.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-[var(--muted)]"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-red)]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </>
          )}
          {primaryProduct.applications.length > 0 && (
            <>
              <h3 className="mt-8 text-xl font-semibold text-[var(--charcoal)]">
                Applications
              </h3>
              <p className="mt-2 text-[var(--muted)]">
                {primaryProduct.applications.join(", ")}
              </p>
            </>
          )}
        </div>
      </section>

      <ProductSpecs specifications={primaryProduct.specifications} />
      <ProductGallery product={primaryProduct} />
      <BrochureDownload product={primaryProduct} />
      <ProductEnquiryForm product={primaryProduct} />
    </div>
  );
}
