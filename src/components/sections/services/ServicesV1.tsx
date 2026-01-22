export function ServicesV1() {
  return (
    <section className="bg-charcoal text-white px-6 py-24 lg:px-12 lg:py-32" id="uslugi">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="font-serif text-5xl mb-8">Usługi</h2>
            <p className="text-gray-400 max-w-xs leading-relaxed">
              Kompleksowe podejście do drewna. Od surowej deski po lśniącą taflę parkietu.
            </p>
          </div>
          <div className="lg:col-span-8">
            <ul className="divide-y divide-white/20">
              <li className="group py-12 flex flex-col sm:flex-row justify-between items-start sm:items-center cursor-pointer hover:bg-white/5 transition-colors px-4 -mx-4 rounded-lg">
                <span className="font-sans text-xs text-wood mb-2 sm:mb-0">01</span>
                <h3 className="font-serif text-3xl sm:text-5xl group-hover:italic transition-all">Cyklinowanie Bezpyłowe</h3>
                <span className="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity">arrow_outward</span>
              </li>
              <li className="group py-12 flex flex-col sm:flex-row justify-between items-start sm:items-center cursor-pointer hover:bg-white/5 transition-colors px-4 -mx-4 rounded-lg">
                <span className="font-sans text-xs text-wood mb-2 sm:mb-0">02</span>
                <h3 className="font-serif text-3xl sm:text-5xl group-hover:italic transition-all">Lakierowanie & Olejowanie</h3>
                <span className="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity">arrow_outward</span>
              </li>
              <li className="group py-12 flex flex-col sm:flex-row justify-between items-start sm:items-center cursor-pointer hover:bg-white/5 transition-colors px-4 -mx-4 rounded-lg">
                <span className="font-sans text-xs text-wood mb-2 sm:mb-0">03</span>
                <h3 className="font-serif text-3xl sm:text-5xl group-hover:italic transition-all">Uzupełnianie Ubytków</h3>
                <span className="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity">arrow_outward</span>
              </li>
              <li className="group py-12 flex flex-col sm:flex-row justify-between items-start sm:items-center cursor-pointer hover:bg-white/5 transition-colors px-4 -mx-4 rounded-lg">
                <span className="font-sans text-xs text-wood mb-2 sm:mb-0">04</span>
                <h3 className="font-serif text-3xl sm:text-5xl group-hover:italic transition-all">Montaż Listew</h3>
                <span className="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity">arrow_outward</span>
              </li>
              <li className="group py-12 flex flex-col sm:flex-row justify-between items-start sm:items-center cursor-pointer hover:bg-white/5 transition-colors px-4 -mx-4 rounded-lg">
                <span className="font-sans text-xs text-wood mb-2 sm:mb-0">05</span>
                <h3 className="font-serif text-3xl sm:text-5xl group-hover:italic transition-all">Barwienie Drewna</h3>
                <span className="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity">arrow_outward</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
