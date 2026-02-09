import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function CTA() {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="rounded-[8px] bg-[var(--brand-navy)] px-8 py-16 text-center sm:px-12 lg:px-24" style={{ background: "linear-gradient(135deg, #0b1e3c 0%, #142b5f 100%)" }}>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Illuminate Your Space?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Get a custom quote for your LED display project. Our team will help you find the perfect solution.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact">
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                Get a Quote
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline-white" size="lg" className="w-full sm:w-auto">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
