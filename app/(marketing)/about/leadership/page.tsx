import { AboutHero } from "@/components/about/AboutHero";
import { AboutNav } from "@/components/about/AboutNav";
import { LEADERSHIP } from "@/lib/data/about";

export const metadata = {
  title: "Leadership Team",
  description:
    "Meet the LaDial Technologies leadership team. Experienced executives driving LED display innovation.",
};

export default function LeadershipPage() {
  return (
    <div>
      <AboutHero
        title="Leadership Team"
        subtitle="Experienced leaders driving innovation and growth."
      />
      <AboutNav currentPath="/about/leadership" />

      <section className="section-padding bg-[var(--surface)]">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {LEADERSHIP.map((leader) => (
              <div
                key={leader.id}
                className="overflow-hidden rounded-[8px] border border-[var(--border)] bg-[var(--surface)]"
              >
                <div className="aspect-square bg-gradient-to-br from-[var(--neutral-dark)] to-[var(--border)]" />
                <div className="p-6">
                  <h3 className="font-semibold text-[var(--charcoal)]">
                    {leader.name}
                  </h3>
                  <p className="text-sm font-medium text-[var(--brand-red)]">
                    {leader.role}
                  </p>
                  <p className="mt-2 text-sm text-[var(--muted)]">
                    {leader.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
