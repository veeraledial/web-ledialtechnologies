import { HeroCarousel } from "@/components/home/HeroCarousel";
import { LogoMarquee } from "@/components/home/LogoMarquee";
import { AboutIntro } from "@/components/home/AboutIntro";
import { StatsSection } from "@/components/home/StatsSection";
import { ProductCategoriesGrid } from "@/components/home/ProductCategoriesGrid";
import { IndustrySolutions } from "@/components/home/IndustrySolutions";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ApplicationsCarousel } from "@/components/home/ApplicationsCarousel";
import { Certifications } from "@/components/home/Certifications";
import { CaseStudiesPreview } from "@/components/home/CaseStudiesPreview";
import { CTA } from "@/components/home/CTA";

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <LogoMarquee />
      <AboutIntro />
      <StatsSection />
      <ProductCategoriesGrid />
      <IndustrySolutions />
      <WhyChooseUs />
      <ApplicationsCarousel />
      <Certifications />
      <CaseStudiesPreview />
      <CTA />
    </>
  );
}
