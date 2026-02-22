"use client";

import { CLIENT_NAMES } from "@/lib/data/clients";
import { useEffect, useState } from "react";

type LogoMarqueeProps = {
  as?: "section" | "div";
  className?: string;
  withBorders?: boolean;
  speedSeconds?: number;
  speedSecondsMobile?: number;
};

export function LogoMarquee({
  as = "section",
  className = "",
  withBorders = true,
  speedSeconds = 16,
  speedSecondsMobile,
}: LogoMarqueeProps) {
  const duplicated = [...CLIENT_NAMES, ...CLIENT_NAMES];
  const Wrapper = as === "div" ? "div" : "section";
  const [duration, setDuration] = useState(speedSeconds);

  useEffect(() => {
    const mobileDuration = speedSecondsMobile ?? Math.max(10, Math.round(speedSeconds * 0.7));

    const mq = window.matchMedia("(max-width: 640px)");
    const apply = () => setDuration(mq.matches ? mobileDuration : speedSeconds);
    apply();

    // Use modern API when available; fall back for older browsers.
    const anyMq = mq as any;
    if (typeof anyMq.addEventListener === "function") {
      anyMq.addEventListener("change", apply);
      return () => anyMq.removeEventListener("change", apply);
    }
    if (typeof anyMq.addListener === "function") {
      anyMq.addListener(apply);
      return () => anyMq.removeListener(apply);
    }
    return;
  }, [speedSeconds, speedSecondsMobile]);

  return (
    <Wrapper
      className={[
        "relative overflow-hidden bg-[var(--surface)] py-10",
        withBorders ? "border-y border-[var(--border)]" : "",
        className,
      ].join(" ")}
    >
      <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[var(--surface)] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[var(--surface)] to-transparent pointer-events-none" />
      <div
        className="flex animate-marquee whitespace-nowrap"
        style={{ animationDuration: `${duration}s` }}
      >
        {duplicated.map((name, i) => (
          <div
            key={`${name}-${i}`}
            className="mx-6 flex shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--neutral)] px-6 py-3.5 text-sm font-medium text-[var(--muted)] transition-colors hover:border-[var(--brand-red)]/20 hover:text-[var(--charcoal)]"
          >
            {name}
          </div>
        ))}
      </div>
    </Wrapper>
  );
}
