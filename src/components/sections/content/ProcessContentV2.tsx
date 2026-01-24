// Wariant 2: Poziomy timeline (bez zdjęcia)
export function ProcessContentV2() {
  const steps = [
    {
      num: "01",
      title: "Kontakt i wycena",
      desc: "Zadzwoń (511 692 325) lub wyślij zdjęcie podłogi. Wycena bezpłatna.",
    },
    {
      num: "02",
      title: "Termin",
      desc: "Umawiamy się na konkretny dzień. Punktualność to podstawa.",
    },
    {
      num: "03",
      title: "Praca",
      desc: "Cyklinowanie, szpachlowanie, lakierowanie. Od 1 do kilku dni.",
    },
    {
      num: "04",
      title: "Odbiór",
      desc: "Pokazuję efekt i daję wskazówki jak dbać o podłogę.",
    },
  ];

  return (
    <section className="bg-surface px-6 py-24 lg:px-12 lg:py-32 border-y border-gray-200">
      <div className="mx-auto max-w-[1600px]">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="font-serif text-5xl lg:text-6xl mb-6">Od telefonu do nowej podłogi</h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Prosty proces - zadzwoń lub wyślij zdjęcie, umówimy się, zrobię robotę.
          </p>
        </div>

        {/* Horizontal timeline */}
        <div className="relative">
          {/* Line */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-px bg-wood/30" />

          {/* Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <div key={step.num} className="relative text-center lg:text-left">
                {/* Number circle */}
                <div className="relative z-10 mx-auto lg:mx-0 w-32 h-32 rounded-full border-2 border-wood/30 flex items-center justify-center bg-surface mb-8 group hover:border-wood hover:bg-wood/5 transition-all duration-500">
                  <span className="font-serif text-5xl text-wood/50 group-hover:text-wood transition-colors">
                    {step.num}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-serif text-2xl mb-3">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>

                {/* Arrow (not on last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 -right-4 transform translate-x-1/2">
                    <span className="material-symbols-outlined text-wood/30">chevron_right</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <a
            href="tel:511692325"
            className="inline-flex items-center gap-3 bg-wood text-white px-10 py-5 font-bold text-sm uppercase tracking-wider hover:bg-charcoal transition-colors"
          >
            <span>Zadzwoń: 511 692 325</span>
            <span className="material-symbols-outlined">phone</span>
          </a>
        </div>
      </div>
    </section>
  );
}
