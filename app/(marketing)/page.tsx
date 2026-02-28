import { HeroCarousel } from "@/components/home/HeroCarousel";
import { AboutIntro } from "@/components/home/AboutIntro";
import { ProductCategoriesGrid } from "@/components/home/ProductCategoriesGrid";
import { IndustrySolutions } from "@/components/home/IndustrySolutions";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Certifications } from "@/components/home/Certifications";
import { CaseStudiesPreview } from "@/components/home/CaseStudiesPreview";
import { CTA } from "@/components/home/CTA";

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <AboutIntro />
      <ProductCategoriesGrid />
      <IndustrySolutions />
      <WhyChooseUs />
      <Certifications />
      <CaseStudiesPreview />
      <CTA />
    </>
  );
}
