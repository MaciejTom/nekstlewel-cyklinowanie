import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Quote, BadgeCheck } from "lucide-react";

export function HeroVariation4() {
  return (
    <section className="bg-stone-100 py-12 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* Image Side with Personal Touch */}
          <div className="lg:w-1/2 relative">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/5.jpg"
                alt="Mistrz parkietu przy pracy"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-8 left-8 text-white">
                <p className="font-serif text-2xl italic">"Drewno nie wybacza pośpiechu."</p>
                <p className="mt-2 text-sm font-bold uppercase tracking-widest text-primary">— Piotr Nowak, Właściciel</p>
              </div>
            </div>
            
            {/* Trust Badge */}
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-xl border-l-4 border-primary flex items-center gap-3">
              <div className="bg-green-100 p-2 rounded-full text-green-700">
                <BadgeCheck size={24} />
              </div>
              <div>
                <p className="font-bold text-gray-900">Certyfikowany</p>
                <p className="text-xs text-gray-500">Mistrz Rzemiosła</p>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase">Gwarancja Jakości</h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Bez pyłu. <br/>
                Bez stresu. <br/>
                <span className="text-stone-400">Z moim słowem.</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                Osobiście doglądam każdego zlecenia. Nie wysyłam podwykonawców. 
                Kiedy zamawiasz renowację u mnie, masz pewność, że Twój dom jest w dobrych rękach.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#8b5a2b] hover:bg-[#6b4423]">
                Umów wizytę Piotra
              </Button>
              <Button variant="ghost" className="text-[#8b5a2b] hover:text-[#6b4423] hover:bg-[#8b5a2b]/10">
                Poznaj moją historię →
              </Button>
            </div>

            <div className="pt-8 border-t border-stone-200 grid grid-cols-3 gap-8 text-center sm:text-left">
              <div>
                <p className="text-3xl font-bold text-gray-900">20+</p>
                <p className="text-xs text-gray-500 uppercase mt-1">Lat w branży</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">100%</p>
                <p className="text-xs text-gray-500 uppercase mt-1">Terminowość</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">0</p>
                <p className="text-xs text-gray-500 uppercase mt-1">Ukrytych kosztów</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
