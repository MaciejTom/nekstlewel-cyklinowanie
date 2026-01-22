import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { WhyUs } from "@/components/sections/WhyUs";
import { Philosophy } from "@/components/sections/Philosophy";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";
import { FloatingCTA } from "@/components/sections/FloatingCTA";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <WhyUs />
        <Philosophy />
        <Services />
        <Process />
        <CaseStudies />
        <BeforeAfter />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
