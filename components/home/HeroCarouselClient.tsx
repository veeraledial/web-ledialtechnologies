"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { asset } from "@/lib/utils/assets";
import { HeroProductScreen } from "./HeroProductScreen";

const AUTOPLAY_MS = 6000;
const AUTOPLAY_ENABLED = true; // set to false if you want to pause auto-scroll

export type HeroSlide = {
  key: string;
  titleLines: string[];
  description: string;
  overview?: string;
  ctaLabel: string;
  href: string;
  bgSrc: string;
  rightImageSrc?: string | null;
};

export function HeroCarouselClient({ slides }: { slides: HeroSlide[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const HERO_SLIDES = slides.length ? slides : [
    {
      key: "fallback",
      titleLines: ["LA DIAL", "TECHNOLOGIES"],
      description: "Professional display and security services.",
      ctaLabel: "Know More",
      href: "/products",
      bgSrc: "/images/hero/Led_screen_background.png",
      rightImageSrc: null,
    },
  ];

  const totalSlides = HERO_SLIDES.length;
  const activeSlide = HERO_SLIDES[activeIndex];
  const heroBgSrc = activeSlide.bgSrc;
  const slideTitle = activeSlide.titleLines;
  const slideDescription = activeSlide.description;
  const slideOverview = activeSlide.overview ?? "";
  const slideCtaLabel = activeSlide.ctaLabel;
  const slideHref = activeSlide.href;
  const rightDisplayImageSrc = activeSlide.rightImageSrc ?? null;

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex((index + totalSlides) % totalSlides);
    },
    [totalSlides]
  );

  const next = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const prev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  useEffect(() => {
    if (!AUTOPLAY_ENABLED) return;
    const t = setInterval(() => goTo(activeIndex + 1), AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [activeIndex, goTo]);

  return (
    <section
      className="relative flex min-h-[calc(100svh-4rem)] flex-col overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-[var(--brand-footer)]">
        <Image
          key={heroBgSrc}
          src={asset(heroBgSrc)}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-[var(--color-dark)]/50 via-transparent to-[var(--color-dark)]/30"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[var(--color-dark)]/80 via-[var(--color-dark)]/45 to-transparent"
          aria-hidden
        />
      </div>

      <div className="relative z-10 flex flex-1 flex-col">
        <div className="relative flex-1 overflow-hidden">
          <div
            key={activeIndex}
            className="flex min-h-[calc(100svh-4rem)] flex-col px-4 pt-4 pb-16 sm:px-6 sm:pt-6 sm:pb-20 lg:px-8"
          >
            <div className="mx-auto flex w-full max-w-[1200px] flex-1 flex-col-reverse gap-6 lg:flex-row lg:items-center lg:gap-12">
              {/* Left */}
              <div className="hero-enter-from-bottom flex flex-col justify-center text-center lg:w-[45%] lg:text-left">
                <h2
                  className="text-3xl font-bold uppercase tracking-tight text-[var(--color-light)] sm:text-4xl lg:text-5xl"
                  style={{ textShadow: "0 10px 30px rgba(25,45,60,0.55)" }}
                >
                  {slideTitle[0]}
                  {slideTitle[1] ? <span className="block">{slideTitle[1]}</span> : null}
                </h2>
                <p
                  className="mx-auto mt-3 max-w-2xl text-lg text-[var(--color-light)]/95 sm:mt-4 sm:text-xl lg:mx-0"
                  style={{ textShadow: "0 8px 22px rgba(25,45,60,0.55)" }}
                >
                  {slideDescription}
                </p>
                {slideOverview ? (
                  <p
                    className="mx-auto mt-1.5 line-clamp-3 max-w-2xl text-base text-[var(--color-light)]/85 sm:mt-2 lg:mx-0"
                    style={{ textShadow: "0 8px 22px rgba(25,45,60,0.55)" }}
                  >
                    {slideOverview}
                  </p>
                ) : null}
                <Link
                  href={slideHref}
                  className="mt-6 inline-flex w-fit rounded-xl border-2 border-[var(--color-accent)] bg-[var(--color-accent)] px-8 py-3 text-base font-semibold uppercase tracking-wider text-[var(--color-dark)] shadow-[var(--shadow-glow-red)] transition-colors hover:bg-[var(--color-accent-hover)] mx-auto sm:mt-8 sm:mx-0"
                >
                  {slideCtaLabel}
                </Link>
              </div>

              {/* Right */}
              <div className="hero-enter-from-bottom-delay-img flex flex-shrink-0 justify-center lg:w-[55%]">
                <div className="relative w-full max-w-sm sm:max-w-lg">
                  <div className="relative aspect-video w-full sm:aspect-[4/3]">
                    {rightDisplayImageSrc ? (
                      <Image
                        key={rightDisplayImageSrc}
                        src={asset(rightDisplayImageSrc)}
                        alt="Hero slide visual"
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-contain"
                      />
                    ) : (
                      <HeroProductScreen />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation arrows (centered to entire hero section) */}
        <button
          type="button"
          onClick={prev}
          className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/15 p-1.5 text-[var(--color-light)]/90 backdrop-blur transition hover:bg-black/25 hover:text-[var(--color-light)] sm:p-2 md:left-4"
          aria-label="Previous slide"
        >
          <svg className="h-6 w-6 sm:h-8 sm:w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          type="button"
          onClick={next}
          className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/15 p-1.5 text-[var(--color-light)]/90 backdrop-blur transition hover:bg-black/25 hover:text-[var(--color-light)] sm:p-2 md:right-4"
          aria-label="Next slide"
        >
          <svg className="h-6 w-6 sm:h-8 sm:w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Pagination dots */}
        <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? "w-8 bg-[var(--color-light)]"
                  : "w-2 bg-[var(--color-light)]/50 hover:bg-[var(--color-light)]/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

