"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Keeps global smooth scrolling, but forces "scroll to top" on route changes
 * to be immediate and reliable (avoids smooth-scroll stopping short).
 */
export function RouteScrollManager() {
  const pathname = usePathname();

  useEffect(() => {
    // If navigating to a hash, let the browser handle anchor scrolling smoothly.
    if (typeof window !== "undefined" && window.location.hash) return;

    const root = document.documentElement;
    const prev = root.style.scrollBehavior;

    root.style.scrollBehavior = "auto";
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    // Restore (usually empty => falls back to CSS `scroll-behavior: smooth`)
    requestAnimationFrame(() => {
      root.style.scrollBehavior = prev;
    });
  }, [pathname]);

  return null;
}

