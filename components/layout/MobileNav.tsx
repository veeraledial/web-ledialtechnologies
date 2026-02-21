"use client";

import Link from "next/link";
import { MAIN_NAV } from "@/lib/navigation";
import { Button } from "@/components/ui/Button";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  if (!open) return null;

  return (
    <div className="border-t border-[var(--color-light)]/10 bg-[var(--brand-footer)] md:hidden">
      <nav className="mx-auto max-w-[1200px] px-4 py-4 sm:px-6">
        <ul className="space-y-1">
          {MAIN_NAV.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={onClose}
                className="block py-2 text-sm font-medium text-[var(--color-light)]/90 hover:text-[var(--color-light)]"
              >
                {item.label}
              </Link>
              {item.children && (
                <ul className="ml-4 mt-1 space-y-1 border-l border-[var(--color-light)]/20 pl-4">
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
