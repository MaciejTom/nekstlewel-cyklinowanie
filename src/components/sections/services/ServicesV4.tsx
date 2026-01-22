export function ServicesV4() {
  return (
    <section className="bg-charcoal text-white px-6 py-24 lg:px-12 lg:py-32" id="uslugi">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-20 max-w-3xl">
          <h2 className="font-serif text-5xl md:text-6xl mb-6 leading-[1.1]">
            Co mogę zrobić dla <span className="text-wood italic">Twojej podłogi</span>
          </h2>
          <p className="text-white/60 text-lg font-light leading-relaxed max-w-2xl">
            Od odświeżenia lekko zmatowiałego parkietu po całkowitą renowację podłogi po 50 latach.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="group border border-white/10 p-10 hover:border-wood/50 hover:bg-white/[0.02] transition-all duration-500 flex flex-col min-h-[320px]">
            <div className="mb-auto">
              <span className="block font-sans text-xs text-wood mb-6 tracking-widest font-bold">01</span>
              <h3 className="font-serif text-3xl mb-4 group-hover:text-wood transition-colors">Cyklinowanie bezpyłowe</h3>
              <p className="text-white/50 font-light leading-relaxed text-sm">
                Szlifowanie parkietu przy użyciu maszyn Bona z systemem odpylania. 99% mniej pyłu niż przy tradycyjnej metodzie.
              </p>
            </div>
            <div className="mt-8 flex justify-end">
              <span className="material-symbols-outlined text-wood opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">arrow_right_alt</span>
            </div>
          </div>
          <div className="group border border-white/10 p-10 hover:border-wood/50 hover:bg-white/[0.02] transition-all duration-500 flex flex-col min-h-[320px]">
            <div className="mb-auto">
              <span className="block font-sans text-xs text-wood mb-6 tracking-widest font-bold">02</span>
              <h3 className="font-serif text-3xl mb-4 group-hover:text-wood transition-colors">Lakierowanie</h3>
              <p className="text-white/50 font-light leading-relaxed text-sm">
                Nakładanie 2-3 warstw lakieru o wybranym stopniu połysku (mat, półmat, połysk). Najwyższa trwałość i ochrona.
              </p>
            </div>
            <div className="mt-8 flex justify-end">
              <span className="material-symbols-outlined text-wood opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">arrow_right_alt</span>
            </div>
          </div>
          <div className="group border border-white/10 p-10 hover:border-wood/50 hover:bg-white/[0.02] transition-all duration-500 flex flex-col min-h-[320px]">
            <div className="mb-auto">
              <span className="block font-sans text-xs text-wood mb-6 tracking-widest font-bold">03</span>
              <h3 className="font-serif text-3xl mb-4 group-hover:text-wood transition-colors">Renowacja starych parkietów</h3>
              <p className="text-white/50 font-light leading-relaxed text-sm">
                Specjalistyczna odnowa podłóg z historią (20-50 lat). Usuwanie starych farb, równanie powierzchni i przywracanie dawnego blasku.
              </p>
            </div>
            <div className="mt-8 flex justify-end">
              <span className="material-symbols-outlined text-wood opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">arrow_right_alt</span>
            </div>
          </div>
          <div className="group border border-white/10 p-10 hover:border-wood/50 hover:bg-white/[0.02] transition-all duration-500 flex flex-col min-h-[320px]">
            <div className="mb-auto">
              <span className="block font-sans text-xs text-wood mb-6 tracking-widest font-bold">04</span>
              <h3 className="font-serif text-3xl mb-4 group-hover:text-wood transition-colors">Naprawy i uzupełnienia</h3>
              <p className="text-white/50 font-light leading-relaxed text-sm">
                Wymiana uszkodzonych klepek, uzupełnianie ubytków szpachlą, podklejanie ruchomych elementów.
              </p>
            </div>
            <div className="mt-8 flex justify-end">
              <span className="material-symbols-outlined text-wood opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">arrow_right_alt</span>
            </div>
          </div>
          <div className="group border border-white/10 p-10 hover:border-wood/50 hover:bg-white/[0.02] transition-all duration-500 flex flex-col min-h-[320px]">
            <div className="mb-auto">
              <span className="block font-sans text-xs text-wood mb-6 tracking-widest font-bold">05</span>
              <h3 className="font-serif text-3xl mb-4 group-hover:text-wood transition-colors">Listwy przypodłogowe</h3>
              <p className="text-white/50 font-light leading-relaxed text-sm">
                Profesjonalny montaż listew drewnianych i MDF. Idealne dopasowanie w narożnikach i estetyczne wykończenie styku ze ścianą.
              </p>
            </div>
            <div className="mt-8 flex justify-end">
              <span className="material-symbols-outlined text-wood opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">arrow_right_alt</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
