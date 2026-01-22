import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export function HeroVariation2() {
  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background with Zoom Effect (Ken Burns) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/3.jpg"
          alt="Proces cyklinowania"
          fill
          className="object-cover animate-[pulse_10s_ease-in-out_infinite] scale-105"
        />
        <div className="absolute inset-0 bg-black/60" /> {/* Dark Overlay */}
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center space-y-8">
        <div className="inline-block animate-fade-in-down">
          <p className="text-primary font-medium tracking-[0.2em] uppercase mb-4">Master Craftsmanship</p>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-serif text-white tracking-tight animate-fade-in-up">
          Sztuka renowacji <br />
          <span className="italic text-primary">drewna</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 font-light leading-relaxed animate-fade-in-up animation-delay-200">
          Nie tylko naprawiamy podłogi. Przywracamy im duszę, zachowując każdy słoik i historię zapisaną w drewnie.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 animate-fade-in-up animation-delay-400">
          <Button size="lg" className="bg-white text-black hover:bg-gray-100 rounded-full px-8 h-14 text-lg">
            Umów konsultację
          </Button>
          
          <button className="group flex items-center gap-3 text-white hover:text-primary transition-colors">
            <div className="w-12 h-12 rounded-full border border-white/30 group-hover:border-primary flex items-center justify-center backdrop-blur-sm transition-all group-hover:bg-primary/20">
              <Play size={20} className="ml-1 fill-current" />
            </div>
            <span className="font-medium">Zobacz jak pracujemy</span>
          </button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 animate-bounce">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
}
