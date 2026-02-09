"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { FEATURED_PRODUCTS } from "@/lib/data/products";

export function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = FEATURED_PRODUCTS.length;

  useEffect(() => {
    const t = setInterval(() => {
      setActiveIndex((i) => (i + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(t);
  }, [totalSlides]);

  return (
    <section className="relative overflow-hidden hero-dark pb-12 pt-6 sm:pb-16 sm:pt-8">
      {/* Hero headline - fixed at top */}
      <div className="relative z-10 mx-auto max-w-[1200px] px-4 pt-8 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-white/80">
          Professional LED Display Solutions
        </p>
        <h1 className="mt-4 text-center text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
          Illuminate Your Space with
          <span className="block mt-2 text-white">
            Premium LED Technology
          </span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base text-white/80 sm:text-lg">
          Indoor, outdoor, rental, and transparent LED displays for retail,
          broadcast, control rooms, and beyond.
        </p>
      </div>

      {/* Product carousel - AET style cards */}
      <div className="relative z-10 mx-auto mt-8 max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-xl">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {FEATURED_PRODUCTS.map((product) => (
              <div
                key={product.id}
                className="min-w-full shrink-0 px-2"
              >
                <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20">
                  <div className="grid gap-6 p-6 sm:grid-cols-2 sm:p-8 lg:gap-10 lg:p-10">
                    <div className="aspect-video rounded-lg bg-gradient-to-br from-white/10 to-white/5 sm:aspect-[4/3]" />
                    <div className="flex flex-col justify-center">
                      <h3 className="text-xl font-bold text-white sm:text-2xl">
                        {product.name}
                      </h3>
                      <p className="mt-2 text-white/80">
                        {product.tagline}
                      </p>
                      <p className="mt-4 line-clamp-3 text-sm text-white/70">
                        {product.overview}
                      </p>
                      <Link
                        href={`/products/${product.category}`}
                        className="mt-6 inline-flex"
                      >
                        <Button variant="primary" size="md">
                          Know More
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel dots */}
        <div className="mt-6 flex justify-center gap-2">
          {FEATURED_PRODUCTS.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setActiveIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === activeIndex
                  ? "w-8 bg-[var(--brand-red)]"
                  : "w-2 bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>

      {/* CTA buttons */}
      <div className="relative z-10 mt-8 flex flex-col items-center justify-center gap-4 px-4 sm:flex-row">
        <Link href="/contact">
          <Button variant="primary" size="lg" className="w-full sm:w-auto">
            Get a Quote
          </Button>
        </Link>
        <Link href="/products">
          <Button variant="outline-white" size="lg" className="w-full sm:w-auto">
            View All Products
          </Button>
        </Link>
      </div>
    </section>
  );
}
