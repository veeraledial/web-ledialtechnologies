import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getServiceCategories, getServiceCategoryBySlug } from "@/lib/data/services";
import { JsonLd } from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd, getAbsoluteUrl } from "@/lib/utils/seo";
import { asset } from "@/lib/utils/assets";
import { publicAssetExists } from "@/lib/utils/publicAssetExists";
import { Button } from "@/components/ui/Button";

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
  const heroImage = hero?.image && publicAssetExists(hero.image) ? hero.image : null;

  return (
    <div>
      <JsonLd data={[breadcrumbJsonLd]} />

      <section className="relative overflow-hidden bg-[var(--brand-navy)]">
        <div
          className="pointer-events-none absolute inset-0 opacity-80"
          aria-hidden
          style={{
            background:
              "radial-gradient(900px 380px at 15% 20%, rgba(232,106,92,0.22), transparent 62%), radial-gradient(750px 300px at 90% 10%, rgba(255,255,255,0.12), transparent 60%), radial-gradient(900px 420px at 70% 85%, rgba(232,106,92,0.14), transparent 60%)",
          }}
        />

        <div className="relative flex flex-col lg:grid lg:grid-cols-2 lg:items-stretch">
          <div className="order-2 lg:order-1">
            <div className="px-4 py-6 sm:px-6 sm:py-7 lg:h-full lg:pr-12 lg:py-5 lg:pl-[clamp(2rem,calc((100vw-1200px)/2+2rem),20rem)]">
              <div className="lg:flex lg:h-full lg:max-w-[560px] lg:flex-col lg:justify-center">
                <p className="text-sm font-semibold uppercase tracking-wider text-[var(--brand-red)]">
                  Products
                </p>
                <h1 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  {heroTitleLines[0]}
                  {heroTitleLines[1] ? <span className="block">{heroTitleLines[1]}</span> : null}
                </h1>
                <p className="mt-1.5 text-sm leading-relaxed text-white/85 sm:text-base">
                  {heroSubtitle}
                </p>
                {hero?.description ? (
                  <p className="mt-3 text-sm leading-relaxed text-white/75 sm:text-base">
                    {hero.description}
                  </p>
                ) : null}
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="w-full py-3 sm:py-4 lg:py-5">
              <div className="aspect-[16/9] w-full lg:h-[320px] lg:aspect-auto xl:h-[350px]">
                {heroImage ? (
                  <Image
                    src={asset(heroImage)}
                    alt={cat.name}
                    width={1920}
                    height={1080}
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="h-full w-full object-contain"
                  />
                ) : (
                  <div
                    className="h-full w-full"
                    aria-hidden
                    style={{
                      background:
                        "radial-gradient(500px 260px at 20% 30%, rgba(232,106,92,0.35), transparent 60%), radial-gradient(520px 280px at 85% 70%, rgba(255,255,255,0.12), transparent 62%), linear-gradient(135deg, rgba(255,255,255,0.08), transparent)",
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subcategories */}
      <section className="bg-[var(--surface)] py-7 sm:py-8 lg:py-10">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="section-title mt-2.5">Explore Service Options</h2>
            <p className="mt-3 mx-auto text-base font-semibold text-[var(--brand-red)] sm:text-lg">
              Browse all available subcategories with highlights and common applications.
            </p>
          </div>

          <div className="mt-6 border border-[var(--border)]">
            {cat.subcategories.map((s, idx) => {
              const highlights = (s.keyCharacteristics ?? []).slice(0, 2);
              const applications = (s.applications ?? []).slice(0, 2);
              const hasImage = publicAssetExists(s.image);
              const imageLeft = idx % 2 === 1;

              return (
                <article
                  key={s.slug}
                  className={[
                    "grid gap-0 bg-[var(--surface)] md:grid-cols-[1.02fr_0.98fr]",
                    idx > 0 ? "border-t border-[var(--border)]" : "",
                  ].join(" ")}
                >
                  <div className={["order-2 p-6 sm:p-8", imageLeft ? "md:order-2" : "md:order-1"].join(" ")}>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[var(--brand-red)]">
                      Subcategory
                    </p>
                    <h3 className="mt-2 text-2xl font-bold tracking-tight text-[var(--charcoal)] sm:text-3xl">
                      {s.name}
                    </h3>
                    {s.description ? (
                      <p className="mt-4 text-[var(--muted)] leading-relaxed line-clamp-2">
                        {s.description}
                      </p>
                    ) : null}

                    <div className="mt-5 grid gap-5 sm:grid-cols-2">
                      <div>
                        <p className="text-sm font-semibold text-[var(--charcoal)]">Highlights</p>
                        {highlights.length ? (
                          <ul className="mt-2 space-y-2 text-sm text-[var(--muted)]">
                            {highlights.map((item) => (
                              <li key={item} className="flex items-start gap-2">
                                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--brand-red)]" />
                                <span className="line-clamp-2">{item}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="mt-2 text-sm text-[var(--muted)]">Details available on page.</p>
                        )}
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-[var(--charcoal)]">Common Applications</p>
                        {applications.length ? (
                          <ul className="mt-2 space-y-2 text-sm text-[var(--muted)]">
                            {applications.map((item) => (
                              <li key={item} className="flex items-start gap-2">
                                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--brand-red)]" />
                                <span className="line-clamp-2">{item}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="mt-2 text-sm text-[var(--muted)]">Use cases shown on detail page.</p>
                        )}
                      </div>
                    </div>

                    <Link
                      href="/contact"
                      className="mt-6 inline-flex items-center rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-sm font-semibold text-[var(--charcoal)] transition-colors hover:border-[var(--brand-red)]/35 hover:text-[var(--brand-red)]"
                    >
                      Request Quote
                    </Link>
                  </div>

                  <div
                    className={[
                      "order-1 relative min-h-[14rem] bg-[var(--neutral)] sm:min-h-[16rem] md:min-h-[18rem]",
                      imageLeft ? "md:order-1" : "md:order-2",
                    ].join(" ")}
                  >
                    {hasImage && s.image ? (
                      <Image
                        src={asset(s.image)}
                        alt={s.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-contain p-8"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
                        <span className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">
                          Image unavailable
                        </span>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

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
