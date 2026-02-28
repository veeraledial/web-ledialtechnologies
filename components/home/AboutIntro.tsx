import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function AboutIntro() {
  return (
    <section className="section-padding bg-[var(--surface)]">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <ScrollReveal animation="slide-right">
            <div>
              <p className="section-label">About Ledial Technologies Pvt. Ltd.</p>
              <h2 className="section-title mt-3">LED Display & CCTV Solutions for Visibility and Security</h2>
              <p className="mt-6 text-lg leading-relaxed text-[var(--muted)]">
                Ledial Technologies Pvt. Ltd. delivers advanced LED display and CCTV surveillance solutions designed to enhance visibility, communication, and security—with a strong commitment to quality and innovation.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-[var(--muted)]">
                We serve businesses, institutions, commercial establishments, and public sector organizations with reliable, customized solutions—from consultation and installation to configuration and ongoing support.
              </p>
              <Link href="/about" className="mt-8 inline-block">
                <Button variant="outline" size="md">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="slide-left">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--neutral)] p-8 shadow-[var(--shadow-card)]">
              <p className="text-sm font-semibold uppercase tracking-wider text-[var(--brand-red)]">
                What We Do
              </p>
              <ul className="mt-5 space-y-4 text-[var(--muted)]">
                <li className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4">
                  <p className="font-semibold text-[var(--charcoal)]">LED Screen Solutions</p>
                  <p className="mt-1 text-sm leading-relaxed">
                    High-resolution indoor and outdoor LED displays for advertising, events, retail, corporate communication,
                    and public information.
                  </p>
                </li>
                <li className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4">
                  <p className="font-semibold text-[var(--charcoal)]">CCTV Camera Solutions</p>
                  <p className="mt-1 text-sm leading-relaxed">
                    Sales, installation, configuration, and technical support for modern 24/7 surveillance and protection.
                  </p>
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
