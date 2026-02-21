import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function CTA() {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div
          className="relative overflow-hidden rounded-3xl px-8 py-20 text-center sm:px-12 lg:px-24"
          style={{ background: "var(--color-dark)" }}
        >
          <div
            className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,_rgb(var(--accent-rgb)_/_0.14)_0%,transparent_55%)]"
            aria-hidden
          />
          <div className="relative">
            <h2 className="section-title text-[var(--color-light)] sm:text-4xl">
              Ready to Illuminate Your Space?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-[var(--color-light)]/85">
              Get a custom quote for indoor/outdoor LED displays, digital standees, or CCTV camera security. Our team will recommend the right setup for your site and budget.
            </p>
            <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center">
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
      </div>
    </section>
  );
}
