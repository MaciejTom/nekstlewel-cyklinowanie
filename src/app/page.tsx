import { Hero } from "@/components/sections/Hero";
// import { WhyUs } from "@/components/sections/WhyUs";
// import { Services } from "@/components/sections/Services";
// import { Process } from "@/components/sections/Process";
// import { Gallery } from "@/components/sections/Gallery";
// import { Testimonials } from "@/components/sections/Testimonials";
// import { FAQ } from "@/components/sections/FAQ";
// import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      {/* 1. Hero - bg-background (kremowy #fffbf5) */}
      <Hero />

      {/* 2. WhyUs - bg-muted (jaśniejszy #fdf6ed) */}
      {/* <WhyUs /> */}
      <section id="why-us" className="py-16 lg:py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-muted-foreground">[WhyUs - do zbudowania]</p>
        </div>
      </section>

      {/* 3. Services - bg-background */}
      {/* <Services /> */}
      <section id="services" className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-muted-foreground">[Services - do zbudowania]</p>
        </div>
      </section>

      {/* 4. Process - bg-muted */}
      {/* <Process /> */}
      <section id="process" className="py-16 lg:py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-muted-foreground">[Process - do zbudowania]</p>
        </div>
      </section>

      {/* 5. Gallery - bg-background */}
      {/* <Gallery /> */}
      <section id="gallery" className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-muted-foreground">[Gallery - do zbudowania]</p>
        </div>
      </section>

      {/* 6. Testimonials - bg-muted */}
      {/* <Testimonials /> */}
      <section id="testimonials" className="py-16 lg:py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-muted-foreground">[Testimonials - do zbudowania]</p>
        </div>
      </section>

      {/* 7. FAQ - bg-background */}
      {/* <FAQ /> */}
      <section id="faq" className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-muted-foreground">[FAQ - do zbudowania]</p>
        </div>
      </section>

      {/* 8. Contact - bg-primary (brązowy #8b5a2b - wyróżniony) */}
      {/* <Contact /> */}
      <section id="contact" className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-primary-foreground/80">[Contact - do zbudowania]</p>
        </div>
      </section>
    </main>
  );
}
