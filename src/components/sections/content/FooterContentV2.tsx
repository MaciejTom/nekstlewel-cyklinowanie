// Wariant 2: Minimalistyczny footer z ogromnym numerem telefonu
export function FooterContentV2() {
  return (
    <footer className="bg-paper text-charcoal pt-24 pb-12 px-6 lg:px-12" id="kontakt">
      <div className="mx-auto max-w-[1600px]">
        {/* Main - Big phone */}
        <div className="text-center mb-20">
          <span className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">
            Bezpłatna wycena
          </span>
          <a
            href="tel:511692325"
            className="block font-serif text-6xl sm:text-8xl lg:text-[10rem] xl:text-[12rem] leading-none hover:text-wood transition-colors tracking-tight"
          >
            511 692 325
          </a>
          <p className="mt-8 text-gray-500 text-lg max-w-lg mx-auto">
            Zadzwoń lub wyślij zdjęcie podłogi. Powiem ile to potrwa i ile będzie kosztować.
          </p>
        </div>

        {/* Info row */}
        <div className="border-t border-gray-200 pt-12 grid md:grid-cols-3 gap-8 text-center mb-16">
          <div>
            <span className="material-symbols-outlined text-3xl text-wood mb-3">location_on</span>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-2">Lokalizacja</h3>
            <p className="text-gray-500">Kielce, ul. Turystyczna</p>
          </div>
          <div>
            <span className="material-symbols-outlined text-3xl text-wood mb-3">map</span>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-2">Zasięg</h3>
            <p className="text-gray-500">Kielce i całe województwo</p>
          </div>
          <div>
            <span className="material-symbols-outlined text-3xl text-wood mb-3">schedule</span>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-2">Godziny</h3>
            <p className="text-gray-500">Elastyczne - zadzwoń, umówimy się</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <span className="font-serif text-2xl font-bold tracking-tighter italic">Pan Piotr.</span>
            <span className="text-gray-400 text-sm">Cyklinowanie bezpyłowe</span>
          </div>
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Wszelkie prawa zastrzeżone
          </div>
        </div>
      </div>
    </footer>
  );
}
