import { AboutHero } from "@/components/about/AboutHero";
import { AboutNav } from "@/components/about/AboutNav";
import { GLOBAL_PRESENCE } from "@/lib/data/about";

export const metadata = {
  title: "Global Presence",
  description:
    "LaDial Technologies serves 40+ countries through regional offices and authorized distributors worldwide.",
};

export default function GlobalPresencePage() {
  return (
    <div>
      <AboutHero
        title="Global Presence"
        subtitle="Serving customers across six continents."
      />
      <AboutNav currentPath="/about/global-presence" />

      <section className="section-padding bg-[var(--surface)]">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <p className="max-w-3xl text-lg text-[var(--muted)]">
            {GLOBAL_PRESENCE.intro}
          </p>

          <div className="mt-12 space-y-6">
            {GLOBAL_PRESENCE.regions.map((region) => (
              <div
                key={region.name}
                className="rounded-[8px] border border-[var(--border)] bg-[var(--neutral)] p-8"
              >
                <h3 className="text-xl font-semibold text-[var(--charcoal)]">
                  {region.name}
                </h3>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="text-sm font-medium text-[var(--brand-red)]">
                      Offices
                    </p>
                    <p className="text-[var(--muted)]">{region.offices}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[var(--brand-red)]">
                      Markets Served
                    </p>
                    <p className="text-[var(--muted)]">{region.markets}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
