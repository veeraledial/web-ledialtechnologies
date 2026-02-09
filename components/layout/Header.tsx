"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { MAIN_NAV } from "@/lib/navigation";
import { Button } from "@/components/ui/Button";
import { MobileNav } from "./MobileNav";

export function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[var(--brand-navy)]">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <span className="flex h-10 w-auto items-center rounded-[6px] bg-[#e0e1dd] px-2 py-1.5">
            <Image
              src="/images/logo.png"
              alt="LaDial Technologies"
              width={140}
              height={40}
              className="h-8 w-auto object-contain"
              priority
            />
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {MAIN_NAV.map((item) =>
            item.children ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className="flex items-center gap-1 text-sm font-medium text-white/90 hover:text-white transition-colors"
                  onClick={() => window.location.assign(item.href)}
                >
                  {item.label}
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openDropdown === item.label && (
                  <div className="absolute left-0 top-full pt-2">
                    <div className="min-w-[220px] rounded-[6px] border border-[var(--border)] bg-[#e0e1dd] py-2 shadow-lg">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-[var(--foreground)] hover:bg-[var(--surface)] hover:text-[var(--brand-red)] transition-colors"
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
                className="text-sm font-medium text-white/90 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <Link href="/contact">
            <Button variant="primary" size="sm">
              Get Quote
            </Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-[6px] text-white md:hidden"
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

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
