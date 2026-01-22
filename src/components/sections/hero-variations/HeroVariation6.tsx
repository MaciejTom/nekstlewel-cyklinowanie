import Image from "next/image";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroVariation6() {
  return (
    <section className="relative py-24 bg-[#1c1410] overflow-hidden">
      {/* Background Grid Mosaic */}
      <div className="absolute inset-0 grid grid-cols-4 grid-rows-2 opacity-20 pointer-events-none">
        <div className="relative h-full"><Image src="/images/1.jpg" alt="bg" fill className="object-cover" /></div>
        <div className="relative h-full"><Image src="/images/2.jpg" alt="bg" fill className="object-cover" /></div>
        <div className="relative h-full"><Image src="/images/3.jpg" alt="bg" fill className="object-cover" /></div>
        <div className="relative h-full"><Image src="/images/4.jpg" alt="bg" fill className="object-cover" /></div>
        <div className="relative h-full"><Image src="/images/5.jpg" alt="bg" fill className="object-cover" /></div>
        <div className="relative h-full"><Image src="/images/6.jpg" alt="bg" fill className="object-cover" /></div>
        <div className="relative h-full"><Image src="/images/7.jpg" alt="bg" fill className="object-cover" /></div>
        <div className="relative h-full"><Image src="/images/8.jpg" alt="bg" fill className="object-cover" /></div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#1c1410] via-[#1c1410]/90 to-[#1c1410]" />

      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center">
        
        {/* Main Review Card */}
        <div className="bg-white text-black p-8 rounded-2xl shadow-2xl max-w-2xl transform hover:-translate-y-2 transition-transform duration-300">
          <div className="flex justify-center gap-1 mb-4 text-[#d4a574]">
            <Star className="fill-current w-6 h-6" />
            <Star className="fill-current w-6 h-6" />
            <Star className="fill-current w-6 h-6" />
            <Star className="fill-current w-6 h-6" />
            <Star className="fill-current w-6 h-6" />
          </div>
          <h2 className="text-2xl md:text-3xl font-serif italic mb-6">
            "Podłoga wygląda lepiej niż nowa. Pan Piotr to prawdziwy artysta, a przy tym zostawił po sobie idealny porządek."
          </h2>
          <div className="flex items-center justify-center gap-4">
             <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-500">MK</div>
             <div className="text-left">
                <p className="font-bold text-gray-900">Marek Kowalski</p>
                <p className="text-xs text-gray-500">Renowacja parkietu dębowego, Kielce</p>
             </div>
          </div>
        </div>

        {/* Supporting Text */}
        <div className="mt-12 space-y-6 max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Dołącz do <span className="text-[#d4a574]">500+</span> zadowolonych domów
          </h1>
          <p className="text-gray-400 text-lg">
            Nie wierz nam na słowo. Zaufaj opiniom sąsiadów.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#d4a574] hover:bg-[#b88a5c] text-black font-bold">
              Zobacz więcej opinii
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
              Zapytaj o wolny termin
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}
