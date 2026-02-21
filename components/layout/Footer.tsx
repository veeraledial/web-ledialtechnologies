import Link from "next/link";
import { getFooterLinks } from "@/lib/navigation";
import { NewsletterForm } from "@/components/forms/NewsletterForm";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const FOOTER_LINKS = getFooterLinks();

  return (
    <footer className="relative border-t border-[var(--color-light)]/10 bg-[var(--brand-footer)]">
      <div className="relative mx-auto max-w-[1200px] px-4 pt-14 pb-8 sm:px-6 lg:px-8 lg:pt-20 lg:pb-10">
        <div className="grid gap-10 lg:grid-cols-4 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block transition opacity-90 hover:opacity-100">
              <span className="text-xl font-bold tracking-tight text-[var(--color-light)]">
                LaDial
              </span>
              <span className="text-sm font-medium text-[var(--color-light)]/80"> Technologies</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-[var(--color-light)]/75 max-w-xs">
              Professional services for indoor/outdoor LED displays, digital standees, and CCTV camera security—delivered with installation and support.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="section-label text-[var(--color-light)]/90">
              Products
            </h3>
            <ul className="mt-5 space-y-3">
              {FOOTER_LINKS.products.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-light)]/75 transition-colors hover:text-[var(--color-accent)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="section-label text-[var(--color-light)]/90">
              Solutions
            </h3>
            <ul className="mt-5 space-y-3">
              {FOOTER_LINKS.solutions.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-light)]/75 transition-colors hover:text-[var(--color-accent)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/solutions"
                  className="text-sm font-semibold text-[var(--color-accent)] transition-colors hover:text-[var(--color-accent-hover)]"
                >
                  View all →
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="section-label text-[var(--color-light)]/90">
              Stay Updated
            </h3>
            <p className="mt-5 text-sm text-[var(--color-light)]/75">
              Get industry insights and product updates.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-[var(--color-light)]/10 pt-8 sm:flex-row">
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            {FOOTER_LINKS.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[var(--color-light)]/65 transition-colors hover:text-[var(--color-accent)]"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="text-[var(--color-light)]/65 transition-colors hover:text-[var(--color-accent)]">
              Contact
            </Link>
          </div>
          <p className="text-sm text-[var(--color-light)]/55">
            © {currentYear} LaDial Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
