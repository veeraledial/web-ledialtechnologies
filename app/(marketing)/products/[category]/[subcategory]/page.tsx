import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getServiceCategoryBySlug } from "@/lib/data/services";
import { JsonLd } from "@/components/seo/JsonLd";
import { getAbsoluteUrl, getBreadcrumbJsonLd } from "@/lib/utils/seo";
import { asset } from "@/lib/utils/assets";

type PageProps = {
  params: Promise<{ category: string; subcategory: string }>;
};

const LEGACY_CATEGORY_REDIRECTS: Record<string, string> = {
  "indoor-led-displays": "indoor-led-displays-services",
  "outdoor-led-displays": "outdoor-led-display-services",
  "standee-a-type-displays": "standee-a-type-display-services",
  "standee-i-type-displays": "standee-i-type-display-services",
  "cctv-camera-security": "cctv-cameras",
};

export async function generateMetadata({ params }: PageProps) {
  const { category, subcategory } = await params;
  const redirected = LEGACY_CATEGORY_REDIRECTS[category];
  const categorySlug = redirected ?? category;
  const cat = getServiceCategoryBySlug(categorySlug);
  const sub = cat?.subcategories?.find((s) => s.slug === subcategory);
  if (!cat || !sub) return { title: "Product Details" };

  return {
    title: `${sub.name} | ${cat.name}`,
    description: sub.description ?? `Details for ${sub.name}.`,
  };
}

export default async function ProductSubcategoryPage({ params }: PageProps) {
  const { category, subcategory } = await params;

  const redirected = LEGACY_CATEGORY_REDIRECTS[category];
  if (redirected) {
    redirect(`/products/${redirected}/${subcategory}`);
  }

  const cat = getServiceCategoryBySlug(category);
  if (!cat) notFound();

  const sub = cat.subcategories?.find((s) => s.slug === subcategory);
  if (!sub) notFound();

  const pageUrl = getAbsoluteUrl(`/products/${cat.slug}/${sub.slug}`);
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Home", url: getAbsoluteUrl("/") },
    { name: "Products", url: getAbsoluteUrl("/products") },
    { name: cat.name, url: getAbsoluteUrl(`/products/${cat.slug}`) },
    { name: sub.name, url: pageUrl },
  ]);

  return (
    <div>
      <JsonLd data={[breadcrumbJsonLd]} />

      <section className="bg-[var(--surface)]">
        <div className="mx-auto max-w-[1200px] px-4 pt-0 pb-12 sm:px-6 lg:px-8">
          <div className="sticky top-16 z-30 -mx-4 bg-[var(--surface)]/90 px-4 py-3 backdrop-blur sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <nav className="text-sm text-[var(--muted)]">
              <Link href="/products" className="hover:text-[var(--brand-red)]">
                Products
              </Link>
              <span className="mx-2">/</span>
              <Link
                href={`/products/${cat.slug}`}
                className="hover:text-[var(--brand-red)]"
              >
                {cat.name}
              </Link>
              <span className="mx-2">/</span>
              <span className="text-[var(--charcoal)]">{sub.name}</span>
            </nav>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[480px_1fr] lg:items-start">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <div className="relative aspect-[16/12] w-full">
                {sub.image ? (
                  <Image
                    src={asset(sub.image)}
                    alt={sub.name}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 480px"
                    className="object-contain"
                  />
                ) : null}
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-[var(--brand-red)]">
                {cat.name}
              </p>
              <h1 className="mt-1.5 text-3xl font-bold tracking-tight text-[var(--charcoal)] sm:text-4xl">
                {sub.name}
              </h1>

              {sub.description ? (
                <p className="mt-3 text-base leading-relaxed text-[var(--muted)] sm:text-lg">
                  {sub.description}
                </p>
              ) : null}

              {sub.keyCharacteristics?.length ? (
                <section className="mt-6">
                  <h2 className="text-base font-semibold text-[var(--charcoal)]">
                    Highlights
                  </h2>
                  <ul className="mt-3 space-y-2 text-sm text-[var(--muted)] sm:text-base">
                    {sub.keyCharacteristics.map((k) => (
                      <li key={k} className="flex items-start gap-3">
                        <span className="mt-1.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--brand-red-soft)] text-[var(--brand-red)]">
                          <svg
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-3.5 w-3.5"
                            aria-hidden
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.704 5.29a1 1 0 010 1.414l-7.071 7.071a1 1 0 01-1.414 0L3.296 8.85a1 1 0 011.414-1.414l3.216 3.216 6.364-6.364a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        <span className="leading-relaxed">{k}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              ) : null}

              {sub.applications?.length ? (
                <section className="mt-7">
                  <h2 className="text-base font-semibold text-[var(--charcoal)]">
                    Common Applications
                  </h2>
                  <ul className="mt-3 space-y-2 text-sm text-[var(--muted)] sm:text-base">
                    {sub.applications.map((a) => (
                      <li key={a} className="flex items-start gap-3">
                        <span className="mt-1.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--brand-red-soft)] text-[var(--brand-red)]">
                          <svg
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-3.5 w-3.5"
                            aria-hidden
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.704 5.29a1 1 0 010 1.414l-7.071 7.071a1 1 0 01-1.414 0L3.296 8.85a1 1 0 011.414-1.414l3.216 3.216 6.364-6.364a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        <span className="leading-relaxed">{a}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              ) : null}

              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href={`/products/${cat.slug}`}
                  className="inline-flex items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-2.5 text-sm font-semibold text-[var(--charcoal)] transition-colors hover:border-[var(--brand-red)]/35 hover:text-[var(--brand-red)]"
                >
                  Back to {cat.name}
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-[var(--brand-red)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--brand-red)]/90"
                >
                  Request Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

