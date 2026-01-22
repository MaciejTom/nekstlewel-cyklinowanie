"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Cyklinowanie",
    desc: "Usuwamy stare powłoki, rysy i wgniecenia maszynami bezpyłowymi.",
    image: "/images/6.jpg",
  },
  {
    id: 2,
    title: "Lakierowanie",
    desc: "Najtrwalsze lakiery poliuretanowe, odporne na ścieranie i wodę.",
    image: "/images/7.jpg",
  },
  {
    id: 3,
    title: "Olejowanie",
    desc: "Naturalne wykończenie podkreślające słoje i strukturę drewna.",
    image: "/images/8.jpg",
  },
  {
    id: 4,
    title: "Renowacja Schodów",
    desc: "Przywracamy blask stopniom, poręczom i tralkom.",
    image: "/images/2.jpg",
  },
];

export function HeroVariation5() {
  const [activeId, setActiveId] = useState(1);

  return (
    <section className="h-[800px] flex flex-col lg:flex-row bg-background">
      {/* Left: Interactive Menu */}
      <div className="lg:w-5/12 p-12 lg:p-20 flex flex-col justify-center border-r border-border">
        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-4">Wybierz usługę</h1>
          <p className="text-muted-foreground">Zobacz, jak możemy odmienić Twoje wnętrze.</p>
        </div>

        <div className="space-y-2">
          {services.map((s) => (
            <div
              key={s.id}
              onMouseEnter={() => setActiveId(s.id)}
              className={`group cursor-pointer p-6 transition-all duration-300 border-l-4 ${
                activeId === s.id
                  ? "border-primary bg-primary/5 shadow-sm"
                  : "border-transparent hover:bg-muted"
              }`}
            >
              <div className="flex justify-between items-center">
                <h3 className={`text-xl font-bold ${activeId === s.id ? "text-primary" : "text-foreground"}`}>
                  {s.title}
                </h3>
                {activeId === s.id && <ArrowRight className="text-primary animate-in slide-in-from-left-2" />}
              </div>
              <p className={`mt-2 text-sm leading-relaxed transition-all duration-300 ${
                 activeId === s.id ? "text-foreground opacity-100 max-h-20" : "text-muted-foreground opacity-0 max-h-0 overflow-hidden"
              }`}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Right: Dynamic Image */}
      <div className="lg:w-7/12 relative bg-black hidden lg:block overflow-hidden">
        {services.map((s) => (
            <div
                key={s.id}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${activeId === s.id ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            >
                <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover"
                />
                 <div className="absolute inset-0 bg-black/30" />
                 <div className="absolute bottom-12 left-12 max-w-md p-6 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-xl">
                    <p className="font-mono text-xs text-primary mb-2">REALIZACJA #0{s.id}</p>
                    <p className="text-2xl font-serif italic">Perfekcja w każdym detalu.</p>
                 </div>
            </div>
        ))}
      </div>
    </section>
  );
}
