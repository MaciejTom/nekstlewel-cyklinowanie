"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MoveHorizontal } from "lucide-react";

export function HeroVariation1() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isResizing, setIsResizing] = useState(false);

  const handleMouseDown = () => setIsResizing(true);
  const handleMouseUp = () => setIsResizing(false);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isResizing || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    setSliderPosition((x / rect.width) * 100);
  };

  // Touch support
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isResizing || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
    setSliderPosition((x / rect.width) * 100);
  };

  useEffect(() => {
    window.addEventListener("mouseup", handleMouseUp);
    return () => window.removeEventListener("mouseup", handleMouseUp);
  }, []);

  return (
    <section className="relative w-full h-[80vh] min-h-[600px] overflow-hidden bg-black grid lg:grid-cols-2">
      {/* Content Side - Left on Desktop */}
      <div className="relative z-10 flex flex-col justify-center p-8 lg:p-16 bg-gradient-to-r from-black/90 to-transparent lg:bg-background lg:from-transparent">
        <div className="max-w-xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wide uppercase">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Efekt WOW
          </div>
          <h2 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-white lg:text-foreground">
            Zobacz różnicę, <br />
            <span className="text-primary">jaką robi pasja.</span>
          </h2>
          <p className="text-lg text-gray-300 lg:text-muted-foreground">
            Przesuń suwak i przekonaj się, jak zmieniamy zniszczone podłogi w wizytówkę Twojego domu. Bezpyłowo.
          </p>
          <div className="flex gap-4 pt-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white border-0">
              Darmowa wycena
            </Button>
            <Button size="lg" variant="outline" className="text-white lg:text-foreground border-white/20 lg:border-input">
              Zobacz galerię
            </Button>
          </div>
        </div>
      </div>

      {/* Slider Side - Right/Full on Mobile */}
      <div 
        ref={containerRef}
        className="absolute inset-0 lg:relative lg:h-full cursor-col-resize select-none"
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onTouchMove={handleTouchMove}
        onTouchStart={handleMouseDown}
      >
        {/* AFTER Image (Background) */}
        <div className="absolute inset-0 w-full h-full">
           <Image
            src="/images/2.jpg"
            alt="Podłoga po renowacji"
            fill
            className="object-cover"
            priority
          />
           <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 text-sm font-bold rounded shadow-lg">PO</div>
        </div>

        {/* BEFORE Image (Clipped) */}
        <div 
          className="absolute inset-0 w-full h-full overflow-hidden border-r-4 border-white/80 shadow-2xl"
          style={{ width: `${sliderPosition}%` }}
        >
          <Image
            src="/images/1.jpg"
            alt="Podłoga przed renowacją"
            fill
            className="object-cover grayscale brightness-75 contrast-125"
            priority
          />
          <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 text-sm font-bold rounded backdrop-blur-sm">PRZED</div>
        </div>

        {/* Handle */}
        <div 
          className="absolute inset-y-0 w-12 -ml-6 flex items-center justify-center pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center text-primary">
            <MoveHorizontal size={20} />
          </div>
        </div>
      </div>
    </section>
  );
}
