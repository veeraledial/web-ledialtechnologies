import { AboutHero } from "@/components/about/AboutHero";
import { AboutNav } from "@/components/about/AboutNav";
import { VISION_MISSION } from "@/lib/data/about";

export const metadata = {
  title: "Vision & Mission",
  description:
    "Ledial Technologies' vision, mission, and core values. Innovation, quality, partnership, and sustainability.",
};

export default function VisionMissionPage() {
  return (
    <div>
      <AboutHero
        title="Vision & Mission"
        subtitle="Our purpose and the values that guide everything we do."
      />
      <AboutNav currentPath="/about/vision-mission" />

      <section className="section-padding bg-[var(--surface)]">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="rounded-[8px] border border-[var(--border)] bg-[var(--neutral)] p-8">
              <h2 className="text-xl font-bold text-[var(--charcoal)]">
                Our Vision
              </h2>
              <p className="mt-4 text-lg text-[var(--muted)]">
                {VISION_MISSION.vision}
              </p>
            </div>
            <div className="rounded-[8px] border border-[var(--border)] bg-[var(--neutral)] p-8">
              <h2 className="text-xl font-bold text-[var(--charcoal)]">
                Our Mission
              </h2>
              <p className="mt-4 text-lg text-[var(--muted)]">
                {VISION_MISSION.mission}
              </p>
            </div>
          </div>

          <h2 className="mt-16 text-2xl font-bold text-[var(--charcoal)]">
            Our Values
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {VISION_MISSION.values.map((value) => (
              <div
                key={value.title}
                className="rounded-[8px] border border-[var(--border)] p-6"
              >
                <h3 className="font-semibold text-[var(--charcoal)]">
                  {value.title}
                </h3>
                <p className="mt-2 text-[var(--muted)]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
