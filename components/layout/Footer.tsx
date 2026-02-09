import Link from "next/link";
import { FOOTER_LINKS } from "@/lib/navigation";
import { NewsletterForm } from "@/components/forms/NewsletterForm";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#0a162b]">
      <div className="mx-auto max-w-[1200px] px-4 pt-12 pb-6 sm:px-6 lg:px-8 lg:pt-16 lg:pb-8">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="text-xl font-bold tracking-tight text-white">
                LaDial
              </span>
              <span className="text-sm text-white/80"> Technologies</span>
            </Link>
            <p className="mt-3 text-sm text-white/70">
              Leading manufacturer of professional LED display solutions for retail, broadcast, control rooms, and more.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Products
            </h3>
            <ul className="mt-4 space-y-2">
              {FOOTER_LINKS.products.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-[var(--brand-red)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Solutions
            </h3>
            <ul className="mt-4 space-y-2">
              {FOOTER_LINKS.solutions.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-[var(--brand-red)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/solutions"
                  className="text-sm text-[var(--brand-red)] hover:underline font-medium"
                >
                  View all →
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Stay Updated
            </h3>
            <p className="mt-4 text-sm text-white/70">
              Get industry insights and product updates.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 pb-2 sm:flex-row">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {FOOTER_LINKS.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/70 hover:text-[var(--brand-red)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="text-white/70 hover:text-[var(--brand-red)] transition-colors"
            >
              Contact
            </Link>
          </div>
          <p className="text-sm text-white/70">
            © {currentYear} LaDial Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
