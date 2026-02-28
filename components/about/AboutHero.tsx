import { PageHero } from "@/components/layout/PageHero";

interface AboutHeroProps {
  title: string;
  subtitle?: string;
}

export function AboutHero({ title, subtitle }: AboutHeroProps) {
  return (
    <PageHero label="About Us" title={title} subtitle={subtitle} />
  );
}
