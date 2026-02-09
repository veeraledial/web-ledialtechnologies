import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden hero-dark">
      <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-[1200px] flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/80">
          Professional LED Display Solutions
        </p>
        <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Illuminate Your Space with
          <span className="block mt-2 text-white">
            Premium LED Technology
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80 sm:text-xl">
          Indoor, outdoor, rental, and transparent LED displays for retail,
          broadcast, control rooms, and beyond. Trusted by Fortune 500 and
          leading brands worldwide.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link href="/contact">
            <Button variant="primary" size="lg" className="w-full sm:w-auto">
              Get a Quote
            </Button>
          </Link>
          <Link href="/products">
            <Button variant="outline-white" size="lg" className="w-full sm:w-auto">
              View Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
