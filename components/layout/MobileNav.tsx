"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { NavItem } from "@/types/nav";
import { Button } from "@/components/ui/Button";

interface MobileNavProps {
  navItems: NavItem[];
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ navItems, open, onClose }: MobileNavProps) {
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  useEffect(() => {
    if (!open) setOpenGroup(null);
  }, [open]);

  const panelClassName = useMemo(() => {
    return [
      "fixed left-0 right-0 top-16 z-50 md:hidden",
      "border-t border-[var(--color-light)]/10 bg-[var(--brand-footer)]",
      "origin-top transform-gpu transition-all duration-200 ease-out",
      open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none",
    ].join(" ");
  }, [open]);

  return (
    <div className={panelClassName} aria-hidden={!open}>
      <nav className="mx-auto max-w-[1200px] max-h-[calc(100svh-4rem)] overflow-y-auto overscroll-contain px-3 py-4 sm:px-6">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.href}>
              {item.children?.length ? (
                <div className="py-1">
                  <button
                    type="button"
                    onClick={() => setOpenGroup((v) => (v === item.href ? null : item.href))}
                    className="flex w-full items-center justify-between py-2 text-left text-sm font-medium text-[var(--color-light)]/90 hover:text-[var(--color-light)]"
                    aria-expanded={openGroup === item.href}
                  >
                    <span>{item.label}</span>
                    <svg
                      className={`h-5 w-5 transition-transform ${openGroup === item.href ? "rotate-180" : ""}`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <div className={`${openGroup === item.href ? "block" : "hidden"}`}>
                    <ul className="ml-4 mt-1 space-y-1 border-l border-[var(--color-light)]/20 pl-4">
                      <li>
                        <Link
                          href={item.href}
                          onClick={onClose}
                          className="block py-1.5 text-sm text-[var(--color-light)]/80 hover:text-[var(--color-accent)]"
                        >
                          View all {item.label} →
                        </Link>
                      </li>
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={onClose}
                            className="block py-1.5 text-sm text-[var(--color-light)]/75 hover:text-[var(--color-accent)]"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="block py-2 text-sm font-medium text-[var(--color-light)]/90 hover:text-[var(--color-light)]"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <Link href="/contact" onClick={onClose}>
            <Button variant="primary" size="md" className="w-full">
              Get Quote
            </Button>
          </Link>
        </div>
      </nav>
    </div>
  );
}
