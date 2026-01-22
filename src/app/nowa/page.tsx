import { Header } from "@/components/sections/Header";
import { HeroContent } from "@/components/sections/content/HeroContent";
import { WhyUsContent } from "@/components/sections/content/WhyUsContent";
import { ServicesContent } from "@/components/sections/content/ServicesContent";
import { ProcessContent } from "@/components/sections/content/ProcessContent";
import { CaseStudiesContent } from "@/components/sections/content/CaseStudiesContent";
import { TestimonialsContent } from "@/components/sections/content/TestimonialsContent";
import { FAQContent } from "@/components/sections/content/FAQContent";
import { FooterContent } from "@/components/sections/content/FooterContent";

export default function NowaStrona() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Header />
      <main>
        <HeroContent />
        <WhyUsContent />
        <ServicesContent />
        <ProcessContent />
        <CaseStudiesContent />
        <TestimonialsContent />
        <FAQContent />
      </main>
      <FooterContent />
    </div>
  );
}
