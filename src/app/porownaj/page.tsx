"use client";

import { useState } from "react";
import { Header } from "@/components/sections/Header";

// V1 Components
import { WhyUsContent } from "@/components/sections/content/WhyUsContent";
import { ServicesContent } from "@/components/sections/content/ServicesContent";
import { ProcessContent } from "@/components/sections/content/ProcessContent";
import { CaseStudiesContent } from "@/components/sections/content/CaseStudiesContent";
import { TestimonialsContent } from "@/components/sections/content/TestimonialsContent";
import { FAQContent } from "@/components/sections/content/FAQContent";
import { FooterContent } from "@/components/sections/content/FooterContent";

// V2 Components
import { WhyUsContentV2 } from "@/components/sections/content/WhyUsContentV2";
import { ServicesContentV2 } from "@/components/sections/content/ServicesContentV2";
import { ProcessContentV2 } from "@/components/sections/content/ProcessContentV2";
import { CaseStudiesContentV2 } from "@/components/sections/content/CaseStudiesContentV2";
import { TestimonialsContentV2 } from "@/components/sections/content/TestimonialsContentV2";
import { FAQContentV2 } from "@/components/sections/content/FAQContentV2";
import { FooterContentV2 } from "@/components/sections/content/FooterContentV2";

type SectionKey = "whyus" | "services" | "process" | "casestudies" | "testimonials" | "faq" | "footer";

const sections: { key: SectionKey; label: string; v1Desc: string; v2Desc: string }[] = [
  {
    key: "whyus",
    label: "Dlaczego ja",
    v1Desc: "4 kolumny z awatarem, styl FeaturesV1",
    v2Desc: "Minimalistyczny grid, styl FeaturesV2",
  },
  {
    key: "services",
    label: "Usługi",
    v1Desc: "Akordeon z numeracją, styl ServicesV3",
    v2Desc: "Grid kart, styl ServicesV4",
  },
  {
    key: "process",
    label: "Jak pracuję",
    v1Desc: "4 kroki ze zdjęciem",
    v2Desc: "Poziomy timeline, duże kółka",
  },
  {
    key: "casestudies",
    label: "Realizacje",
    v1Desc: "Duże zdjęcia, tekst naprzemiennie",
    v2Desc: "Kompaktowy grid kart z overlay",
  },
  {
    key: "testimonials",
    label: "Opinie",
    v1Desc: "Grid kart z gwiazdkami",
    v2Desc: "Duże centrowane cytaty, slider",
  },
  {
    key: "faq",
    label: "FAQ",
    v1Desc: "Akordeon pytań",
    v2Desc: "Statyczny grid, ciemne tło",
  },
  {
    key: "footer",
    label: "Footer",
    v1Desc: "Dwie kolumny z mapą",
    v2Desc: "Centralny ogromny numer, jasne tło",
  },
];

export default function ComparePage() {
  const [activeSection, setActiveSection] = useState<SectionKey>("whyus");
  const [variant, setVariant] = useState<"v1" | "v2">("v1");

  const renderSection = (key: SectionKey, v: "v1" | "v2") => {
    const components: Record<SectionKey, { v1: React.ReactNode; v2: React.ReactNode }> = {
      whyus: { v1: <WhyUsContent />, v2: <WhyUsContentV2 /> },
      services: { v1: <ServicesContent />, v2: <ServicesContentV2 /> },
      process: { v1: <ProcessContent />, v2: <ProcessContentV2 /> },
      casestudies: { v1: <CaseStudiesContent />, v2: <CaseStudiesContentV2 /> },
      testimonials: { v1: <TestimonialsContent />, v2: <TestimonialsContentV2 /> },
      faq: { v1: <FAQContent />, v2: <FAQContentV2 /> },
      footer: { v1: <FooterContent />, v2: <FooterContentV2 /> },
    };
    return components[key][v];
  };

  const currentSectionData = sections.find((s) => s.key === activeSection)!;

  return (
    <div className="min-h-screen bg-paper">
      <Header />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-charcoal text-white px-6 py-4 border-b border-white/10">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex flex-wrap gap-2 justify-center mb-4">
            {sections.map((section) => (
              <button
                key={section.key}
                onClick={() => setActiveSection(section.key)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${
                  activeSection === section.key
                    ? "bg-wood text-charcoal"
                    : "bg-white/10 hover:bg-white/20"
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>

          {/* Variant toggle */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => setVariant("v1")}
              className={`px-6 py-2 text-sm font-bold uppercase tracking-wider transition-all ${
                variant === "v1"
                  ? "bg-white text-charcoal"
                  : "bg-transparent border border-white/30 hover:border-white"
              }`}
            >
              Wariant 1
            </button>
            <span className="text-white/30">|</span>
            <button
              onClick={() => setVariant("v2")}
              className={`px-6 py-2 text-sm font-bold uppercase tracking-wider transition-all ${
                variant === "v2"
                  ? "bg-white text-charcoal"
                  : "bg-transparent border border-white/30 hover:border-white"
              }`}
            >
              Wariant 2
            </button>
          </div>
        </div>
      </nav>

      {/* Description bar */}
      <div className="bg-surface border-b border-gray-200 px-6 py-6">
        <div className="mx-auto max-w-[1600px] text-center">
          <h2 className="font-serif text-2xl mb-2">{currentSectionData.label}</h2>
          <p className="text-gray-500">
            {variant === "v1" ? currentSectionData.v1Desc : currentSectionData.v2Desc}
          </p>
        </div>
      </div>

      {/* Section preview */}
      <main>{renderSection(activeSection, variant)}</main>
    </div>
  );
}
