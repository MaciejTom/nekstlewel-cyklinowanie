import { Button } from "@/components/ui/button";

export function HeroVariation9() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden bg-[#2a1a10]">
      {/* Texture Background - Simulation with CSS/Image if available, assuming Image for now */}
       <div 
         className="absolute inset-0 opacity-40 mix-blend-overlay"
         style={{
            backgroundImage: `url("https://www.transparenttextures.com/patterns/wood-pattern.png")`, // Fallback texture or use one of the images zoomed in
            backgroundSize: "cover"
         }}
       />
        {/* Using one of the images heavily zoomed as texture */}
        <div className="absolute inset-0 opacity-60">
             <img src="/images/4.jpg" className="w-full h-full object-cover object-center scale-150 grayscale contrast-125" alt="texture" />
        </div>

      <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2">
        <div className="space-y-8">
            <div className="inline-block border border-[#d4a574] text-[#d4a574] px-4 py-2 text-xs tracking-[0.3em] uppercase">
                Natural Beauty
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-[#fffbf5] leading-none">
                Poczuj <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4a574] to-[#8b5a2b]">Fakturę</span>
            </h1>
            <p className="text-[#a99080] text-xl max-w-md leading-relaxed border-l-2 border-[#d4a574]/30 pl-6">
                Każdy sęk opowiada historię. My pomagamy jej wybrzmieć na nowo.
                Specjalistyczna renowacja podłóg zabytkowych i egzotycznych.
            </p>
             <Button variant="outline" className="border-[#d4a574] text-[#d4a574] hover:bg-[#d4a574] hover:text-black transition-colors duration-500 rounded-none h-14 px-8 uppercase tracking-widest text-sm">
                Odkryj ofertę
            </Button>
        </div>
      </div>
      
      {/* Floating Elements / Dust particles effect simulation */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-[#d4a574] rounded-full opacity-50 animate-ping" />
         <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-[#fff] rounded-full opacity-30 animate-pulse" />
      </div>
    </section>
  );
}
