import Image from "next/image";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Header osadzony w Hero */}
      <header className="fixed top-0 z-50 w-full mix-blend-difference text-white">
        <div className="mx-auto flex h-24 max-w-[1600px] items-center justify-between px-6 lg:px-12">
          <div className="flex items-center gap-3">
            <span className="font-serif text-2xl font-bold tracking-tighter italic text-white">
              Pan Piotr.
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-12">
            <a
              className="text-xs font-bold uppercase tracking-[0.2em] hover:opacity-70 transition-opacity"
              href="#realizacje"
            >
              Realizacje
            </a>
            <a
              className="text-xs font-bold uppercase tracking-[0.2em] hover:opacity-70 transition-opacity"
              href="#filozofia"
            >
              Filozofia
            </a>
            <a
              className="text-xs font-bold uppercase tracking-[0.2em] hover:opacity-70 transition-opacity"
              href="#uslugi"
            >
              Usługi
            </a>
          </nav>
          <a
            className="group flex items-center gap-2 border border-white/30 px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300"
            href="#kontakt"
          >
            <span className="text-xs font-bold uppercase tracking-wider">
              Kontakt
            </span>
          </a>
        </div>
      </header>

      {/* TŁO CHIAROSCURO - ZOPTYMALIZOWANE POD ZDJĘCIE 7 */}
      <div className="absolute inset-0">
        <div className="relative h-full w-full">
            <Image
            src="/images/7.jpg"
            alt="Luksusowa podłoga - zbliżenie na rzemiosło"
            fill
            className="object-cover object-center 
                        grayscale-[40%]           /* Stonowane kolory dla efektu premium */
                        sepia-[30%]               /* Brązowa baza */
                        brightness-[60%]          /* Przyciemnienie bazy pod spotlight */
                        contrast-[140%]           /* Wydobycie tekstury drewna */
            "
            priority
            />
        </div>

        {/* Agresywna Winieta (Radial Gradient) - Efekt Reflektora */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,#000000_85%)] opacity-90 z-10 pointer-events-none"></div>

        {/* Złoty Overlay - Podbicie odblasków na drewnie */}
        <div className="absolute inset-0 bg-[#d4a574]/15 mix-blend-overlay z-10 pointer-events-none"></div>
        
        {/* Dolny Gradient - Zapewnia czyste tło pod typografię */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>
      </div>

      {/* TREŚĆ - DOPASOWANA DO KLIMATU EDITORIAL */}
      <div className="absolute bottom-0 left-0 h-full w-full max-w-[1600px] mx-auto px-6 lg:px-12 pointer-events-none flex flex-col justify-end pb-12 lg:pb-24 z-20">
        <div className="max-w-4xl pointer-events-auto">
          <div className="mb-6 flex items-center gap-4 text-white/80">
            <span className="h-[1px] w-12 bg-primary"></span>
            <span className="font-serif italic text-lg text-primary/90 tracking-wide">
              Mistrzowskie rzemiosło od 2004 roku
            </span>
          </div>
          
          <h1 className="font-serif text-6xl text-white sm:text-7xl lg:text-9xl leading-[0.9] lg:leading-[0.85] tracking-tight">
            <span className="block font-medium italic text-white/90">Twój parkiet</span>
            <span className="block font-black not-italic text-white">Jak Nowy.</span>
          </h1>
          
          <p className="mt-8 max-w-lg text-lg text-white/60 font-light leading-relaxed">
            Sztuka renowacji podłóg bez zbędnego kurzu. Przywracamy duszę
            drewnianym wnętrzom, łącząc rzemieślniczą precyzję z technologią Bona.
          </p>
          
          <div className="mt-10 flex gap-12 items-center">
            <a
              className="group flex items-center gap-3 border-b border-primary/40 pb-1 text-white text-xl hover:border-primary transition-all font-serif italic"
              href="tel:511692325"
            >
              Zadzwoń: 511 692 325
            </a>
            <div className="hidden sm:block h-px w-24 bg-white/10"></div>
            <span className="hidden sm:block text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold">
              Kielce i okolice
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}