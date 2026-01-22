export function WhyUsContent() {
  return (
    <section className="border-b border-gray-200 bg-surface px-6 py-20 lg:px-12 lg:py-32">
      <div className="mx-auto grid max-w-[1600px] gap-16 lg:grid-cols-12 items-start">
        {/* Left side - Avatar and intro */}
        <div className="lg:col-span-5 flex flex-col justify-center relative">
          <div className="mb-8 flex items-center gap-4">
            <div className="h-16 w-16 overflow-hidden rounded-full bg-paper border border-gray-200 p-1">
              <div className="w-full h-full rounded-full bg-wood flex items-center justify-center text-white font-serif italic text-2xl font-bold">
                PP
              </div>
            </div>
            <div>
              <span className="block font-sans text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
                Ekspert radzi
              </span>
              <span className="font-serif italic text-lg text-wood">Pan Piotr</span>
            </div>
          </div>

          <h2 className="font-serif text-4xl leading-tight lg:text-5xl lg:leading-[1.15] mb-8 text-charcoal">
            Cyklinuję bez kurzu - nie musisz sprzątać po mnie
          </h2>

          <div className="relative pl-6 lg:pl-8 border-l-2 border-wood/50">
            <p className="font-sans text-lg lg:text-xl text-gray-600 font-light italic leading-relaxed">
              "Standardowe cyklinowanie = kurz wszędzie. Meble, zasłony, szafy. U mnie pracują maszyny z odciągiem pyłu. Cyklinuję, Ty nie sprzątasz."
            </p>
          </div>

          <div className="mt-12 font-serif text-4xl text-wood opacity-80 transform -rotate-3 origin-bottom-left select-none">
            Pan Piotr
          </div>
        </div>

        {/* Right side - 4 USPs */}
        <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center h-full pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
            {/* USP 1 */}
            <div className="group flex gap-5 items-start">
              <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-paper group-hover:bg-wood/10 transition-colors duration-500">
                <span className="material-symbols-outlined text-3xl text-wood font-light">air</span>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2 group-hover:text-wood transition-colors">
                  Bezpyłowo naprawdę
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed font-light">
                  Maszyny z systemem odciągu pyłu. Pracuję w mieszkaniu z meblami - kurz nie leci po całym domu. Sprawdź opinie - "bez kurzu" pojawia się w co drugiej.
                </p>
              </div>
            </div>

            {/* USP 2 */}
            <div className="group flex gap-5 items-start">
              <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-paper group-hover:bg-wood/10 transition-colors duration-500">
                <span className="material-symbols-outlined text-3xl text-wood font-light">history</span>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2 group-hover:text-wood transition-colors">
                  Stare parkiety to moja specjalność
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed font-light">
                  20, 30, 50 lat - widziałem już wszystko. Parkiet po pół wieku użytkowania może wyglądać jak nowy. Mam na to dowody w opiniach.
                </p>
              </div>
            </div>

            {/* USP 3 */}
            <div className="group flex gap-5 items-start">
              <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-paper group-hover:bg-wood/10 transition-colors duration-500">
                <span className="material-symbols-outlined text-3xl text-wood font-light">psychology</span>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2 group-hover:text-wood transition-colors">
                  Wiem co robię z drewnem
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed font-light">
                  Znam gatunki drewna, wiem które lakiery do czego. Po renowacji dostajesz wskazówki jak dbać o parkiet, żeby wyglądał dobrze przez lata.
                </p>
              </div>
            </div>

            {/* USP 4 */}
            <div className="group flex gap-5 items-start">
              <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-paper group-hover:bg-wood/10 transition-colors duration-500">
                <span className="material-symbols-outlined text-3xl text-wood font-light">healing</span>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2 group-hover:text-wood transition-colors">
                  Naprawiam po innych firmach
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed font-light">
                  Źle zrobione cyklinowanie? Uszkodzenia przy listwach? Nierówności? Naprawiam błędy poprzednich wykonawców.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
