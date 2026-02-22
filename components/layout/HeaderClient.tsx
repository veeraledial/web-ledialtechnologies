"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import type { NavItem } from "@/types/nav";
import { asset } from "@/lib/utils/assets";
import { Button } from "@/components/ui/Button";
import { MobileNav } from "./MobileNav";

export function HeaderClient({ navItems }: { navItems: NavItem[] }) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--color-light)]/10 bg-[var(--brand-footer)]">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center transition opacity-90 hover:opacity-100">
          <Image
            src={asset("/images/logo/logo.png")}
            alt="LaDial Technologies"
            width={160}
            height={44}
            className="h-9 w-auto object-contain max-[360px]:h-8"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) =>
            item.children ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className="flex items-center gap-1.5 rounded-lg px-4 py-2.5 text-sm font-medium text-[var(--color-light)]/90 transition-colors hover:bg-[var(--color-light)]/10 hover:text-[var(--color-light)]"
                  onClick={() => window.location.assign(item.href)}
                >
                  {item.label}
                  <svg
                    className="h-4 w-4 transition transform group-hover:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === item.label && (
                  <div className="absolute left-0 top-full pt-1">
                    <div className="min-w-[240px] max-h-[70vh] overflow-auto rounded-xl border border-[var(--border)] bg-[var(--color-light)] py-2 shadow-xl">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm font-medium text-[var(--color-dark)] transition-colors hover:bg-[var(--brand-red-soft)] hover:text-[var(--color-accent)]"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-4 py-2.5 text-sm font-medium text-[var(--color-light)]/90 transition-colors hover:bg-[var(--color-light)]/10 hover:text-[var(--color-light)]"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link href="/contact">
            <Button
              variant="primary"
              size="sm"
              className="shadow-[var(--shadow-glow-red)] hover:shadow-[var(--shadow-glow-red-hover)]"
            >
              Get Quote
            </Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-xl text-[var(--color-light)] transition hover:bg-[var(--color-light)]/10 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      <MobileNav navItems={navItems} open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}

