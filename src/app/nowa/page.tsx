import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { FeaturesV1 } from "@/components/sections/features/FeaturesV1";
import { FeaturesV2 } from "@/components/sections/features/FeaturesV2";
import { Philosophy } from "@/components/sections/Philosophy";
import { ServicesV1 } from "@/components/sections/services/ServicesV1";
import { ServicesV2 } from "@/components/sections/services/ServicesV2";
import { ServicesV3 } from "@/components/sections/services/ServicesV3";
import { ServicesV4 } from "@/components/sections/services/ServicesV4";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";

export default function StaraStrona() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <FeaturesV1 />
        <FeaturesV2 />
        <Philosophy />
        <ServicesV1 />
        <ServicesV2 />
        <ServicesV3 />
        <ServicesV4 />
        <CaseStudies />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
