export function Testimonials() {
  return (
    <section className="bg-paper px-6 py-24 lg:px-12 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-4xl text-center">
        <span className="material-symbols-outlined text-6xl text-wood mb-8">format_quote</span>
        <div className="space-y-24">
          <div className="group">
            <p className="font-serif text-3xl lg:text-5xl italic leading-tight text-charcoal opacity-40 group-hover:opacity-100 transition-opacity duration-500">
              "Pan Piotr to prawdziwy fachowiec. Podłoga z lat 70-tych wygląda jak nowa. Co najważniejsze - zero pyłu w mieszkaniu. Polecam!"
            </p>
            <div className="mt-8">
              <cite className="not-italic font-bold text-sm uppercase tracking-widest block">Marek Kowalski</cite>
              <span className="text-xs text-gray-500">Kielce, Centrum</span>
            </div>
          </div>
          <div className="group">
            <p className="font-serif text-3xl lg:text-5xl italic leading-tight text-charcoal opacity-40 group-hover:opacity-100 transition-opacity duration-500">
              "Terminowość i kultura pracy na najwyższym poziomie. Cena adekwatna do jakości."
            </p>
            <div className="mt-8">
              <cite className="not-italic font-bold text-sm uppercase tracking-widest block">Anna Nowak</cite>
              <span className="text-xs text-gray-500">Masłów</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
