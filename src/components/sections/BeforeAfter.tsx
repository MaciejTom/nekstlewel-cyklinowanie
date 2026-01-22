"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Dębowy Klasyk",
    description: "Kielce, Osiedle Słoneczne. 40-letni parkiet, lakier matowy Bona Traffic.",
    before: "/images/1.jpg",
    after: "/images/2.jpg",
  },
  {
    id: 2,
    title: "Sosnowa Deska",
    description: "Dom pod Kielcami. Szlifowanie, bielenie i olejowanie.",
    before: "/images/3.jpg",
    after: "/images/4.jpg",
  },
];

function BeforeAfterSlider({ project }: { project: typeof projects[0] }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPosition((x / rect.width) * 100);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  return (
    <div className="group bg-midnight rounded-sm border border-white/5 p-1">
      <div
        ref={containerRef}
        className="relative h-[350px] overflow-hidden rounded-sm cursor-col-resize select-none"
        onMouseMove={handleMouseMove}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onTouchMove={handleTouchMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
      >
        {/* After image (background) */}
        <Image
          src={project.after}
          alt={`${project.title} - po renowacji`}
          fill
          className="object-cover"
        />
        <div className="absolute top-4 right-4 bg-primary/90 text-midnight text-xs font-bold px-3 py-1 rounded-sm shadow-lg z-20">
          PO
        </div>

        {/* Before image (clipped) */}
        <div
          className="absolute inset-0 overflow-hidden border-r-2 border-primary"
          style={{ width: `${sliderPosition}%` }}
        >
          <Image
            src={project.before}
            alt={`${project.title} - przed renowacją`}
            fill
            className="object-cover grayscale brightness-75 contrast-125"
          />
          <div className="absolute top-4 left-4 bg-black/70 text-white text-xs font-bold px-3 py-1 rounded-sm backdrop-blur-sm">
            PRZED
          </div>
        </div>

        {/* Slider handle */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-primary shadow-[0_0_10px_rgba(212,165,116,0.8)] z-10 flex items-center justify-center"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="h-10 w-10 bg-primary rounded-full flex items-center justify-center shadow-lg border-2 border-white">
            <MoveHorizontal className="h-4 w-4 text-midnight" />
          </div>
        </div>
      </div>

      {/* Project info */}
      <div className="p-6">
        <h3 className="text-xl font-serif text-white">{project.title}</h3>
        <p className="mt-2 text-sm font-light text-gray-400">{project.description}</p>
      </div>
    </div>
  );
}

export function BeforeAfter() {
  return (
    <section className="bg-midnight-dark py-20 lg:py-32" id="realizacje">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 md:text-center">
          <h2 className="text-4xl font-serif text-white mb-4">Metamorfozy</h2>
          <p className="text-gray-400 font-light max-w-2xl mx-auto">
            Przesuń suwak, aby zobaczyć efekt naszej pracy. Przywracamy blask nawet
            najbardziej zniszczonym podłogom.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {projects.map((project) => (
            <BeforeAfterSlider key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
