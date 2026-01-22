import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowDownRight } from "lucide-react";

export function HeroVariation3() {
  return (
    <section className="bg-[#fffbf5] min-h-[85vh] flex flex-col justify-between pt-24 pb-12 px-4 md:px-12 border-b border-[#e8ddd0]">
      <div className="container mx-auto grid lg:grid-cols-12 gap-12 h-full">
        
        {/* Typo Column */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-10">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-[#1c1410] leading-[0.9] tracking-tight">
            Second <br />
            <span className="text-[#8b5a2b] italic">Life.</span>
          </h1>
          
          <div className="flex items-start gap-4 max-w-md">
            <ArrowDownRight className="w-12 h-12 text-[#d4a574] shrink-0" />
            <p className="text-xl text-[#6b5b4f] leading-relaxed">
              Twój parkiet to inwestycja na pokolenia. Nie wymieniaj – odnów. 
              Ekskluzywne cyklinowanie bezpyłowe dla wymagających wnętrz.
            </p>
          </div>

          <div className="pt-8">
            <Button className="bg-[#1c1410] text-[#fffbf5] hover:bg-[#8b5a2b] h-16 px-10 text-lg rounded-none transition-all duration-500 ease-out">
              Zamów wycenę
            </Button>
          </div>
        </div>

        {/* Image Column */}
        <div className="lg:col-span-5 relative h-[50vh] lg:h-auto">
          <div className="absolute inset-0 bg-[#d4a574] rounded-t-[10rem] rounded-b-none translate-x-4 translate-y-4" />
          <div className="relative h-full w-full overflow-hidden rounded-t-[10rem] rounded-b-none border border-[#1c1410]/10">
            <Image
              src="/images/4.jpg"
              alt="Elegancja drewna"
              fill
              className="object-cover"
            />
          </div>
          
          {/* Floating Badge */}
          <div className="absolute -bottom-6 -left-6 bg-white p-6 shadow-xl max-w-[200px] hidden md:block border border-[#e8ddd0]">
            <p className="text-3xl font-bold text-[#8b5a2b]">15+</p>
            <p className="text-sm text-[#6b5b4f] uppercase tracking-wide mt-1">Lat doświadczenia w drewnie</p>
          </div>
        </div>
      </div>
    </section>
  );
}
