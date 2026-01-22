export function ServicesV3() {
  return (
    <section className="bg-charcoal text-white px-6 py-24 lg:px-12 lg:py-32 relative overflow-hidden" id="uslugi">
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'40\\' height=\\'40\\' viewBox=\\'0 0 40 40\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'%23ffffff\\' fill-rule=\\'evenodd\\'%3E%3Cpath d=\\'M0 40L40 0H20L0 20M40 40V20L20 40\\'/%3E%3C/g%3E%3C/svg%3E')"}}></div>
      <div className="mx-auto max-w-[1600px] relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-8">
          <div className="max-w-4xl">
            <h2 className="font-serif text-5xl md:text-7xl leading-[1.1] tracking-tight">
              Co mogę zrobić <br />
              <span className="text-[#8b5a2b] italic">dla Twojej podłogi.</span>
            </h2>
          </div>
          <p className="text-xl text-gray-400 font-light max-w-sm leading-relaxed text-left lg:text-right border-l-2 lg:border-l-0 lg:border-r-2 border-[#8b5a2b] pl-6 lg:pl-0 lg:pr-6">
            Od odświeżenia... po całkowitą renowację podłogi po 50 latach.
          </p>
        </div>
        <div className="flex flex-col border-t border-white/10">
          {/* Service Item 01 */}
          <div className="group py-8 md:py-12 border-b border-white/10 cursor-pointer transition-all duration-500 hover:bg-white/5">
            <div className="flex flex-col md:flex-row items-baseline md:items-start gap-6 md:gap-12 px-4">
              <span className="font-serif text-5xl md:text-6xl text-[#8b5a2b] opacity-60 group-hover:opacity-100 transition-opacity duration-300">01</span>
              <div className="flex-1 w-full">
                <div className="flex justify-between items-center w-full">
                  <h3 className="font-serif text-3xl md:text-5xl group-hover:translate-x-2 transition-transform duration-500 ease-out">Cyklinowanie bezpyłowe</h3>
                  <span className="material-symbols-outlined text-4xl text-[#8b5a2b] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 hidden md:block">arrow_forward</span>
                </div>
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
                  <div className="overflow-hidden">
                    <p className="pt-6 text-gray-300 font-light max-w-xl text-lg leading-relaxed group-hover:translate-x-2 transition-transform duration-500 delay-75">
                      Zaawansowany proces szlifowania z wykorzystaniem maszyn Bona i przemysłowych odciągów pyłu. Twoje ściany i meble pozostają czyste.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service Item 02 */}
          <div className="group py-8 md:py-12 border-b border-white/10 cursor-pointer transition-all duration-500 hover:bg-white/5">
            <div className="flex flex-col md:flex-row items-baseline md:items-start gap-6 md:gap-12 px-4">
              <span className="font-serif text-5xl md:text-6xl text-[#8b5a2b] opacity-60 group-hover:opacity-100 transition-opacity duration-300">02</span>
              <div className="flex-1 w-full">
                <div className="flex justify-between items-center w-full">
                  <h3 className="font-serif text-3xl md:text-5xl group-hover:translate-x-2 transition-transform duration-500 ease-out">Lakierowanie</h3>
                  <span className="material-symbols-outlined text-4xl text-[#8b5a2b] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 hidden md:block">arrow_forward</span>
                </div>
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
                  <div className="overflow-hidden">
                    <p className="pt-6 text-gray-300 font-light max-w-xl text-lg leading-relaxed group-hover:translate-x-2 transition-transform duration-500 delay-75">
                      Aplikacja najwyższej klasy lakierów wodnych lub olejowosków. Zapewniamy wykończenia od głębokiego matu po wysoki połysk.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service Item 03 */}
          <div className="group py-8 md:py-12 border-b border-white/10 cursor-pointer transition-all duration-500 hover:bg-white/5">
            <div className="flex flex-col md:flex-row items-baseline md:items-start gap-6 md:gap-12 px-4">
              <span className="font-serif text-5xl md:text-6xl text-[#8b5a2b] opacity-60 group-hover:opacity-100 transition-opacity duration-300">03</span>
              <div className="flex-1 w-full">
                <div className="flex justify-between items-center w-full">
                  <h3 className="font-serif text-3xl md:text-5xl group-hover:translate-x-2 transition-transform duration-500 ease-out">Renowacja starych parkietów</h3>
                  <span className="material-symbols-outlined text-4xl text-[#8b5a2b] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 hidden md:block">arrow_forward</span>
                </div>
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
                  <div className="overflow-hidden">
                    <p className="pt-6 text-gray-300 font-light max-w-xl text-lg leading-relaxed group-hover:translate-x-2 transition-transform duration-500 delay-75">
                      Specjalistyczne zabiegi dla podłóg historycznych. Usuwamy głębokie przebarwienia, równamy powierzchnię i przywracamy blask zabytkom.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service Item 04 */}
          <div className="group py-8 md:py-12 border-b border-white/10 cursor-pointer transition-all duration-500 hover:bg-white/5">
            <div className="flex flex-col md:flex-row items-baseline md:items-start gap-6 md:gap-12 px-4">
              <span className="font-serif text-5xl md:text-6xl text-[#8b5a2b] opacity-60 group-hover:opacity-100 transition-opacity duration-300">04</span>
              <div className="flex-1 w-full">
                <div className="flex justify-between items-center w-full">
                  <h3 className="font-serif text-3xl md:text-5xl group-hover:translate-x-2 transition-transform duration-500 ease-out">Naprawy i uzupełnienia</h3>
                  <span className="material-symbols-outlined text-4xl text-[#8b5a2b] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 hidden md:block">arrow_forward</span>
                </div>
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
                  <div className="overflow-hidden">
                    <p className="pt-6 text-gray-300 font-light max-w-xl text-lg leading-relaxed group-hover:translate-x-2 transition-transform duration-500 delay-75">
                      Miejscowa wymiana zniszczonych klepek i uzupełnianie ubytków masą szpachlową na bazie pyłu drzewnego dla idealnego dopasowania koloru.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service Item 05 */}
          <div className="group py-8 md:py-12 border-b border-white/10 cursor-pointer transition-all duration-500 hover:bg-white/5">
            <div className="flex flex-col md:flex-row items-baseline md:items-start gap-6 md:gap-12 px-4">
              <span className="font-serif text-5xl md:text-6xl text-[#8b5a2b] opacity-60 group-hover:opacity-100 transition-opacity duration-300">05</span>
              <div className="flex-1 w-full">
                <div className="flex justify-between items-center w-full">
                  <h3 className="font-serif text-3xl md:text-5xl group-hover:translate-x-2 transition-transform duration-500 ease-out">Listwy przypodłogowe</h3>
                  <span className="material-symbols-outlined text-4xl text-[#8b5a2b] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 hidden md:block">arrow_forward</span>
                </div>
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
                  <div className="overflow-hidden">
                    <p className="pt-6 text-gray-300 font-light max-w-xl text-lg leading-relaxed group-hover:translate-x-2 transition-transform duration-500 delay-75">
                      Perfekcyjne zwieńczenie pracy. Montaż listew drewnianych, MDF lub cokołów, z dbałością o narożniki i łączenia.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
