export function FeaturesV2() {
  return (
    <section className="relative border-b border-gray-200 bg-surface px-6 py-24 lg:px-12 lg:py-40 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply"
        style={{
          backgroundImage: `url('data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 20 Q 50 10 100 20 M0 40 Q 50 50 100 40 M0 60 Q 50 50 100 60 M0 80 Q 50 90 100 80\' stroke=\'%23CCA383\' fill=\'none\' stroke-width=\'1\'/%3E%3C/svg%3E')`,
          backgroundSize: '120px 120px',
        }}
      />
      <div className="relative mx-auto max-w-[1600px]">
        <div className="mx-auto max-w-5xl text-center mb-24 lg:mb-32">
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-charcoal">
            Cyklinuję bez kurzu — <br />
            <span className="italic text-wood">nie musisz po mnie sprzątać.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-b border-gray-200">
          <div className="group relative p-8 lg:p-12 border-b border-gray-200 md:border-r lg:border-b-0 hover:bg-wood/5 transition-all duration-500">
            <span className="block text-xs font-bold uppercase tracking-widest text-wood mb-4">01</span>
            <h3 className="font-serif text-3xl text-charcoal leading-tight group-hover:translate-x-1 transition-transform duration-500">Bezpyłowo naprawdę.</h3>
          </div>
          <div className="group relative p-8 lg:p-12 border-b border-gray-200 lg:border-r lg:border-b-0 hover:bg-wood/5 transition-all duration-500">
            <span className="block text-xs font-bold uppercase tracking-widest text-wood mb-4">02</span>
            <h3 className="font-serif text-3xl text-charcoal leading-tight group-hover:translate-x-1 transition-transform duration-500">Stare parkiety to moja specjalność.</h3>
          </div>
          <div className="group relative p-8 lg:p-12 border-b border-gray-200 md:border-b-0 md:border-r lg:border-r hover:bg-wood/5 transition-all duration-500">
            <span className="block text-xs font-bold uppercase tracking-widest text-wood mb-4">03</span>
            <h3 className="font-serif text-3xl text-charcoal leading-tight group-hover:translate-x-1 transition-transform duration-500">Wiem co robię z drewnem.</h3>
          </div>
          <div className="group relative p-8 lg:p-12 hover:bg-wood/5 transition-all duration-500">
            <span className="block text-xs font-bold uppercase tracking-widest text-wood mb-4">04</span>
            <h3 className="font-serif text-3xl text-charcoal leading-tight group-hover:translate-x-1 transition-transform duration-500">Naprawiam po innych firmach.</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
