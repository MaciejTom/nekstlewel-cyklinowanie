import { Header } from "@/components/sections/Header";
import { HeroContent } from "@/components/sections/content/HeroContent";
import { FeaturesV2 } from "@/components/sections/features/FeaturesV2";
import { ServicesContent } from "@/components/sections/content/ServicesContent";
import { ProcessContent } from "@/components/sections/content/ProcessContent";
import { CaseStudiesContent } from "@/components/sections/content/CaseStudiesContent";
import { TestimonialsContent } from "@/components/sections/content/TestimonialsContent";
import { FAQContent } from "@/components/sections/content/FAQContent";
import { FooterContent } from "@/components/sections/content/FooterContent";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Header />
      <main>
        <HeroContent />
        <FeaturesV2 />
        <ServicesContent />
        <CaseStudiesContent />
        <ProcessContent />
        <TestimonialsContent />
        <FAQContent />
      </main>
      <FooterContent />
    </div>
  );
}
