import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getServiceCategories, getServiceCategoryBySlug } from "@/lib/data/services";
import { JsonLd } from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd, getAbsoluteUrl } from "@/lib/utils/seo";
import { asset } from "@/lib/utils/assets";

type PageProps = {
  params: Promise<{ category: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getServiceCategories().map((c) => ({ category: c.slug }));
}

const LEGACY_CATEGORY_REDIRECTS: Record<string, string> = {
  "indoor-led-displays": "indoor-led-displays-services",
  "outdoor-led-displays": "outdoor-led-display-services",
  "standee-a-type-displays": "standee-a-type-display-services",
  "standee-i-type-displays": "standee-i-type-display-services",
  "cctv-camera-security": "cctv-cameras",
};

export async function generateMetadata({ params }: PageProps) {
  const { category } = await params;
  const redirected = LEGACY_CATEGORY_REDIRECTS[category];
  const slug = redirected ?? category;
  const cat = getServiceCategoryBySlug(slug);
  if (!cat) return { title: "Products" };
  return {
    title: cat.name,
    description: `Explore ${cat.name} subcategories, key characteristics, and applications.`,
  };
}

export default async function ProductCategoryPage({ params }: PageProps) {
  const { category } = await params;

  const redirected = LEGACY_CATEGORY_REDIRECTS[category];
  if (redirected) {
    redirect(`/products/${redirected}`);
  }

  const cat = getServiceCategoryBySlug(category);
  if (!cat) notFound();

  const productUrl = getAbsoluteUrl(`/products/${cat.slug}`);
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Home", url: getAbsoluteUrl("/") },
    { name: "Products", url: getAbsoluteUrl("/products") },
    { name: cat.name, url: productUrl },
  ]);

  const hero = cat.hero;
  const heroTitleLines = hero?.titleLines?.length ? hero.titleLines : [cat.name];
  const heroSubtitle =
    hero?.subtitle ?? "Browse subcategories, key characteristics, and common applications.";

  return (
    <div>
      <JsonLd data={[breadcrumbJsonLd]} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--brand-navy)] py-10 sm:py-12 lg:py-14">
        <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col-reverse gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="lg:w-[45%]">
              <h1
                className="text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl lg:text-5xl"
                style={{ textShadow: "0 10px 30px rgba(25,45,60,0.55)" }}
              >
                {heroTitleLines[0]}
                {heroTitleLines[1] ? <span className="block">{heroTitleLines[1]}</span> : null}
              </h1>
              <p
                className="mt-4 max-w-3xl text-lg text-white/85"
                style={{ textShadow: "0 8px 22px rgba(25,45,60,0.55)" }}
              >
                {heroSubtitle}
              </p>
              {hero?.description ? (
                <p
                  className="mt-2 max-w-3xl text-base text-white/75"
                  style={{ textShadow: "0 8px 22px rgba(25,45,60,0.55)" }}
                >
                  {hero.description}
                </p>
              ) : null}
            </div>

            {hero?.image ? (
              <div className="flex w-full flex-shrink-0 justify-end lg:w-[55%]">
                <div className="hero-enter-left-to-right relative w-full max-w-sm lg:ml-auto">
                  <div className="relative h-[150px] w-full sm:h-[200px] lg:h-[240px]">
                    <Image
                      src={asset(hero.image)}
                      alt={cat.name}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      {/* Subcategories */}
      <section className="bg-[var(--surface)] py-7 sm:py-8 lg:py-10">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="section-title mt-2.5">Browse Service Options</h2>
            <p className="mt-3 mx-auto text-base font-semibold text-[var(--brand-red)] sm:text-lg">
              Select any option to see full details, highlights, and applications.
            </p>
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cat.subcategories.map((s) => (
              <div
                key={s.slug}
                className="group overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--card)] shadow-[var(--shadow-card)] transition-all hover-lift hover:border-[var(--brand-red)]/25 hover:shadow-[var(--shadow-card-hover)]"
              >
                <div className="relative aspect-[16/10] w-full bg-[var(--neutral)]">
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-white/55 via-transparent to-[var(--brand-red)]/10"
                    aria-hidden
                  />
                  {s.image ? (
                    <Image
                      src={asset(s.image)}
                      alt={s.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-contain p-10 transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  ) : null}
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold tracking-tight text-[var(--charcoal)]">
                    {s.name}
                  </h3>
                  <Link
                    href={`/products/${cat.slug}/${s.slug}`}
                    className="mt-5 inline-flex w-full items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-sm font-semibold text-[var(--charcoal)] transition-colors hover:border-[var(--brand-red)]/35 hover:text-[var(--brand-red)]"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
