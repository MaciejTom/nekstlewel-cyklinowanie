import Image from "next/image";

export function HeroContent() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Image
        src="/images/hero.webp"
        alt="Podłoga drewniana po renowacji"
        fill
        priority
        quality={95}
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/30" />

      <div className="absolute bottom-0 left-0 h-full w-full max-w-[1600px] mx-auto px-6 lg:px-12 pointer-events-none flex flex-col justify-end pb-12 lg:pb-24">
        <div className="max-w-4xl pointer-events-auto">
          {/* Badge */}
          <div className="mb-6 flex items-center gap-4 text-white/90">
            <span className="h-[1px] w-12 bg-white" />
            <span className="text-xs font-bold uppercase tracking-[0.2em]">Cyklinowanie bezpyłowe</span>
          </div>

          {/* H1 */}
          <h1 className="font-serif text-5xl text-white sm:text-6xl lg:text-8xl leading-[0.95] tracking-tight">
            <span className="block font-medium italic">Twój parkiet</span>
            <span className="block font-medium italic">jak nowy.</span>
            <span className="block font-black not-italic">Bez kurzu.</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-8 max-w-lg text-lg text-white/90 font-light leading-relaxed">
            Pan Piotr przywraca życie starym podłogom od lat. 50 opinii, 4.9 gwiazdek.
            Cyklinowanie, lakierowanie, naprawy - Kielce i okolice.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap gap-6">
            <a
              href="tel:511692325"
              className="bg-wood text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-wood/90 transition-colors"
            >
              Zadzwoń: 511 692 325
            </a>
            <a
              href="#kontakt"
              className="border border-white/50 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-white hover:text-charcoal transition-all"
            >
              Wyślij zdjęcie podłogi do wyceny
            </a>
          </div>

          {/* Social Proof Bar */}
          <div className="mt-12 flex flex-wrap gap-4 text-white/90 text-sm font-medium">
            <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 transition-colors hover:bg-white/15">
              <span className="text-wood font-bold text-base">★ 4.9</span>
              <span>50+ opinii</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 transition-colors hover:bg-white/15">
              <div className="w-2 h-2 rounded-full bg-wood shadow-[0_0_8px_rgba(204,163,131,0.6)]" />
              <span>Bezpyłowe maszyny</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 transition-colors hover:bg-white/15">
              <div className="w-2 h-2 rounded-full bg-wood shadow-[0_0_8px_rgba(204,163,131,0.6)]" />
              <span>Parkiety 20-50 letnie jak nowe</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
