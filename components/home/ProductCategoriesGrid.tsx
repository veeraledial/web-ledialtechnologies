import Link from "next/link";
import Image from "next/image";
import { getServiceCategories } from "@/lib/data/services";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { asset } from "@/lib/utils/assets";

export function ProductCategoriesGrid() {
  const categories = getServiceCategories();

  const cards = categories.flatMap((cat) =>
    (cat.subcategories ?? []).map((s) => ({
      key: `${cat.slug}/${s.slug}`,
      href: `/products/${cat.slug}/${s.slug}`,
      label: s.name,
      tagline: cat.name,
      image: s.image ?? null,
    }))
  );

  // Duplicate for seamless infinite marquee
  const marqueeCards = [...cards, ...cards];
  // Slower marquee: more cards => longer duration
  const marqueeDurationSec = Math.max(90, Math.min(260, cards.length * 5));

  return (
    <section className="bg-[var(--surface)] py-10 sm:py-12">
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

        {/* Use x-hidden/y-visible so hover-scale doesn't get clipped */}
        <div className="marquee-pausable mt-10 overflow-x-hidden overflow-y-visible py-3">
          <div
            className="flex w-max gap-6 animate-marquee"
            style={{ animationDuration: `${marqueeDurationSec}s` }}
          >
            {marqueeCards.map((c, idx) => (
              <Link
                key={`${c.key}-${idx}`}
                href={c.href}
                className="group block w-[320px] flex-none overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-[var(--shadow-card)] transition-transform transition-colors duration-300 hover:scale-[1.02] hover:border-[var(--brand-red)]/20"
              >
                <div className="relative aspect-[16/10] bg-gradient-to-br from-[var(--neutral-dark)] to-[var(--border)] transition duration-300 group-hover:from-[var(--brand-navy)]/15 group-hover:to-[var(--brand-red)]/10">
                  {c.image ? (
                    <Image
                      src={asset(c.image)}
                      alt={c.label}
                      fill
                      sizes="320px"
                      className="object-contain p-6 transition-transform duration-300 group-hover:scale-[1.06]"
                    />
                  ) : null}
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-[var(--charcoal)] transition-colors group-hover:text-[var(--brand-red)]">
                    {c.label}
                  </h4>
                  {c.tagline ? (
                    <p className="mt-2 text-sm text-[var(--muted)] line-clamp-2">
                      {c.tagline}
                    </p>
                  ) : null}
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[var(--brand-red)] transition-transform group-hover:gap-2">
                    View More <span aria-hidden>→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
