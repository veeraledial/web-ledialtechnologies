import { ScrollReveal } from "@/components/ui/ScrollReveal";

const features = [
  {
    title: "24/7 Running Model",
    description: "Built for continuous operation with stable performance.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l2.5 1.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-3.2-6.9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 4v6h-6" />
      </svg>
    ),
  },
  {
    title: "Inbuilt Android OS",
    description: "Easy app-based playback and quick content updates.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7l-1.5-2M16 7l1.5-2" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7 10a5 5 0 0110 0v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.5 12.25h0M14.5 12.25h0" />
      </svg>
    ),
  },
  {
    title: "Display Dynamic Content",
    description: "Play videos, images, live feeds, and scheduled playlists.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 7.5h15v9h-15v-9z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 10l4 2-4 2v-4z" />
      </svg>
    ),
  },
  {
    title: "High‑Brightness Commercial Display",
    description: "Clear visibility for lobbies, storefronts, and daylight areas.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.5M12 18.5V21" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h2.5M18.5 12H21" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.2 5.2l1.8 1.8M17 17l1.8 1.8" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.8 5.2L17 7M7 17l-1.8 1.8" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8a4 4 0 100 8 4 4 0 000-8z" />
      </svg>
    ),
  },
  {
    title: "Scheduling & Monitoring",
    description: "Control uptime, health, and content remotely when needed.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 3v3M17 3v3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 8.5h15" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.5 5.5h11A2 2 0 0119.5 7.5v12a2 2 0 01-2 2h-11a2 2 0 01-2-2v-12a2 2 0 012-2z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.2 14.2l1.6 1.6 3.8-4" />
      </svg>
    ),
  },
];

export function Certifications() {
  return (
    <section className="section-padding bg-[var(--surface)]">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up">
          <div className="text-center">
            <p className="section-label">Capabilities</p>
            <h2 className="section-title mt-3">Built for Commercial Performance</h2>
            <p className="section-desc mx-auto mt-4 max-w-2xl">
              Modern displays need more than brightness. Get reliable 24/7 operation, flexible content, and control features designed for real‑world use.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {features.map((f, i) => (
            <ScrollReveal key={f.title} animation="fade-up" delay={i * 70}>
              <div className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center text-[var(--brand-red)]">
                  <div className="h-11 w-11 [&_svg]:h-11 [&_svg]:w-11">{f.icon}</div>
                </div>
                <h3 className="mt-4 text-base font-semibold text-[var(--charcoal)]">
                  {f.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">
                  {f.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
