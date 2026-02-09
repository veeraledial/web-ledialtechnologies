"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type AnimationType = "fade-up" | "fade-in" | "slide-left" | "slide-right";

interface ScrollRevealProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  className?: string;
  once?: boolean;
}

export function ScrollReveal({
  children,
  animation = "fade-up",
  delay = 0,
  className = "",
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
        else if (!once) setIsVisible(false);
      },
      {
        rootMargin: "0px 0px -80px 0px",
        threshold: 0.1,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  return (
    <div
      ref={ref}
      className={`scroll-reveal scroll-reveal--${animation} ${isVisible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}
