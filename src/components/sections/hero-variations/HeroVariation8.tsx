import Image from "next/image";
import { Button } from "@/components/ui/button";

export function HeroVariation8() {
  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-end pb-24 lg:pb-32 px-4 md:px-12 overflow-hidden">
      {/* Background Image: Cozy Living Room */}
      <Image
        src="/images/3.jpg" // Assuming this is a nice room shot
        alt="Przytulny salon"
        fill
        className="object-cover object-bottom"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      <div className="relative z-10 max-w-4xl space-y-6 animate-in slide-in-from-bottom-10 duration-1000">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#fffbf5] leading-tight drop-shadow-lg">
          Fundament <br/>
          <span className="text-[#d4a574]">domowego ciepła.</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 font-light max-w-2xl leading-relaxed drop-shadow-md">
          Podłoga to coś więcej niż deski. To miejsce zabaw Twoich dzieci, 
          spokojnych wieczorów i rodzinnych spotkań. Zadbaj o nią z sercem.
        </p>
        
        <div className="flex flex-wrap gap-4 pt-4">
             <Button className="bg-[#fffbf5] text-[#1c1410] hover:bg-white border-none rounded-full px-8 py-6 text-lg shadow-lg">
                Stwórz swoją przestrzeń
             </Button>
             <div className="flex items-center gap-4 text-white pl-4 border-l border-white/30">
                <div className="text-sm">
                    <p className="font-bold">Eko Lakiery</p>
                    <p className="opacity-70">Bezpieczne dla dzieci i zwierząt</p>
                </div>
             </div>
        </div>
      </div>
    </section>
  );
}
