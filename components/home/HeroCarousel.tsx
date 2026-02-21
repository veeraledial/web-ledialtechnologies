import { getServiceCategories } from "@/lib/data/services";
import { HeroCarouselClient, type HeroSlide } from "./HeroCarouselClient";

export function HeroCarousel() {
  const slides: HeroSlide[] = getServiceCategories()
    .filter((c) => Boolean(c.hero))
    .sort((a, b) => (a.hero?.order ?? 999) - (b.hero?.order ?? 999))
    .map((c) => ({
      key: c.slug,
      titleLines: c.hero!.titleLines,
      description: c.hero!.subtitle,
      overview: c.hero!.description,
      ctaLabel: c.hero!.ctaLabel ?? "Know More",
      href: `/products/${c.slug}`,
      bgSrc: c.hero!.backgroundImage,
      rightImageSrc: c.hero!.image,
    }));

  return <HeroCarouselClient slides={slides} />;
}
