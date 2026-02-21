"use client";

/** Animated LED-style screen content: gradient + floating particles */
export function HeroProductScreen() {
  return (
    <div className="hero-product-screen relative h-full w-full overflow-hidden rounded-lg">
      {/* Floating particles */}
      {[
        { left: "15%", top: "20%", w: 3, delay: 0 },
        { left: "45%", top: "35%", w: 2, delay: 0.5 },
        { left: "75%", top: "25%", w: 4, delay: 1 },
        { left: "25%", top: "60%", w: 2, delay: 1.5 },
        { left: "60%", top: "55%", w: 3, delay: 2 },
        { left: "85%", top: "70%", w: 2, delay: 0.8 },
        { left: "30%", top: "80%", w: 3, delay: 2.2 },
        { left: "55%", top: "15%", w: 2, delay: 1.2 },
      ].map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white/90 shadow-[0_0_10px_2px_rgba(255,255,255,0.6)]"
          style={{
            left: p.left,
            top: p.top,
            width: p.w,
            height: p.w,
            animation: "hero-particle-float 6s ease-in-out infinite",
            animationDelay: `${p.delay}s`,
          }}
          aria-hidden
        />
      ))}
      {[
        { left: "20%", top: "45%", w: 4 },
        { left: "70%", top: "50%", w: 3 },
        { left: "40%", top: "75%", w: 2 },
      ].map((p, i) => (
        <span
          key={`b-${i}`}
          className="absolute rounded-full bg-white/70 shadow-[0_0_8px_1px_rgba(255,255,255,0.5)]"
          style={{
            left: p.left,
            top: p.top,
            width: p.w,
            height: p.w,
            animation: "hero-particle-float-2 5s ease-in-out infinite",
            animationDelay: `${i * 0.7}s`,
          }}
          aria-hidden
        />
      ))}
    </div>
  );
}
