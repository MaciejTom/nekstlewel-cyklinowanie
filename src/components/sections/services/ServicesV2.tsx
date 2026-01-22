export function ServicesV2() {
  return (
    <section className="bg-[#fffbf5] text-[#1c1410] px-6 py-24 lg:px-12 lg:py-32" id="uslugi">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-20 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight">
            Co mogę zrobić<br />
            <span className="italic text-wood">dla Twojej podłogi?</span>
          </h2>
          <p className="max-w-md text-lg font-light leading-relaxed opacity-80 pb-2">
            Kompleksowa opieka nad drewnem. Od precyzyjnej renowacji po finalne wykończenie detali.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 border-t border-l border-[#1c1410]/10">
          <div className="group relative lg:col-span-3 border-r border-b border-[#1c1410]/10 p-8 lg:p-12 hover:bg-white transition-colors duration-500">
            <div className="mb-6 flex items-center justify-between">
              <span className="material-symbols-outlined text-4xl font-light text-wood">air</span>
              <span className="font-sans text-xs font-bold uppercase tracking-widest opacity-40">01</span>
            </div>
            <h3 className="font-serif text-3xl mb-4 group-hover:text-wood transition-colors">Cyklinowanie bezpyłowe</h3>
            <p className="text-base leading-relaxed opacity-70 font-light">
              Wykorzystuję zaawansowane maszyny Bona, które pochłaniają 99.8% pyłu. Proces jest czysty, bezpieczny dla alergików i nie wymaga zabezpieczania całego mieszkania folią.
            </p>
          </div>
          <div className="group relative lg:col-span-3 border-r border-b border-[#1c1410]/10 p-8 lg:p-12 hover:bg-white transition-colors duration-500">
            <div className="mb-6 flex items-center justify-between">
              <span className="material-symbols-outlined text-4xl font-light text-wood">format_paint</span>
              <span className="font-sans text-xs font-bold uppercase tracking-widest opacity-40">02</span>
            </div>
            <h3 className="font-serif text-3xl mb-4 group-hover:text-wood transition-colors">Lakierowanie</h3>
            <p className="text-base leading-relaxed opacity-70 font-light">
              Aplikacja trwałych, ekologicznych lakierów wodnych lub olejowosków. Zapewniam wykończenie od głębokiego matu po wysoki połysk, chroniąc drewno na lata.
            </p>
          </div>
          <div className="group relative lg:col-span-2 border-r border-b border-[#1c1410]/10 p-8 lg:p-12 hover:bg-white transition-colors duration-500">
            <div className="mb-6 flex items-center justify-between">
              <span className="material-symbols-outlined text-4xl font-light text-wood">history</span>
              <span className="font-sans text-xs font-bold uppercase tracking-widest opacity-40">03</span>
            </div>
            <h3 className="font-serif text-2xl mb-4 group-hover:text-wood transition-colors">Renowacja starych parkietów</h3>
            <p className="text-sm leading-relaxed opacity-70 font-light">
              Przywracam świetność zabytkowym podłogom. Uzupełniam ubytki, wymieniam zniszczone klepki i dbam o zachowanie historycznego charakteru drewna.
            </p>
          </div>
          <div className="group relative lg:col-span-2 border-r border-b border-[#1c1410]/10 p-8 lg:p-12 hover:bg-white transition-colors duration-500">
            <div className="mb-6 flex items-center justify-between">
              <span className="material-symbols-outlined text-4xl font-light text-wood">healing</span>
              <span className="font-sans text-xs font-bold uppercase tracking-widest opacity-40">04</span>
            </div>
            <h3 className="font-serif text-2xl mb-4 group-hover:text-wood transition-colors">Naprawy i uzupełnienia</h3>
            <p className="text-sm leading-relaxed opacity-70 font-light">
              Naprawa uszkodzeń mechanicznych, zalanych fragmentów czy miejsc po wyburzonych ścianach. Dobieram drewno tak, by różnica była niewidoczna.
            </p>
          </div>
          <div className="group relative lg:col-span-2 border-r border-b border-[#1c1410]/10 p-8 lg:p-12 hover:bg-white transition-colors duration-500">
            <div className="mb-6 flex items-center justify-between">
              <span className="material-symbols-outlined text-4xl font-light text-wood">straighten</span>
              <span className="font-sans text-xs font-bold uppercase tracking-widest opacity-40">05</span>
            </div>
            <h3 className="font-serif text-2xl mb-4 group-hover:text-wood transition-colors">Listwy przypodłogowe</h3>
            <p className="text-sm leading-relaxed opacity-70 font-light">
              Montaż listew drewnianych, MDF lub cokołów. Precyzyjne docinanie narożników i estetyczne akrylowanie dla idealnego połączenia ze ścianą.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
