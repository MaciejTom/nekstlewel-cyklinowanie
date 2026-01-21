import { Hero } from "@/components/sections/Hero";
import { WhyUs } from "@/components/sections/WhyUs";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      {/* 1. Hero - bg-background (kremowy #fffbf5) */}
      <Hero />

      {/* 2. WhyUs - bg-muted (jaśniejszy #fdf6ed) */}
      <WhyUs />

      {/* 3. Services - bg-background */}
      <Services />

      {/* 4. Process - bg-muted */}
      <Process />

      {/* 5. Gallery - bg-background */}
      <Gallery />

      {/* 6. Testimonials - bg-muted */}
      <Testimonials />

      {/* 7. FAQ - bg-background */}
      <FAQ />

      {/* 8. Contact - bg-primary (brązowy #8b5a2b - wyróżniony) */}
      <Contact />
    </main>
  );
}
