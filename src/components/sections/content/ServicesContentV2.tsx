// Wariant 2: Grid kart (bazowany na ServicesV4)
export function ServicesContentV2() {
  const services = [
    {
      num: "01",
      title: "Cyklinowanie bezpyłowe",
      desc: "Szlifowanie parkietu maszynami z odciągiem pyłu. Usuwam starą warstwę lakieru, wyrównuję powierzchnię.",
    },
    {
      num: "02",
      title: "Lakierowanie",
      desc: "Mat, półmat, wysoki połysk. Lakiery wodorozcieńczalne lub poliuretanowe. 2-3 warstwy dla trwałości.",
    },
    {
      num: "03",
      title: "Renowacja starych parkietów",
      desc: "Parkiet po 20-50 latach. Cyklinowanie, szpachlowanie szczelin, lakierowanie. Jak nowy.",
    },
    {
      num: "04",
      title: "Naprawy i uzupełnienia",
      desc: "Wymiana zniszczonych klepek, uzupełnianie brakujących fragmentów, szpachlowanie ubytków.",
    },
    {
      num: "05",
      title: "Listwy przypodłogowe",
      desc: "Montaż nowych listew po renowacji. Drewniane lub MDF, dopasowane kolorystycznie.",
    },
  ];

  return (
    <section className="bg-charcoal text-white px-6 py-24 lg:px-12 lg:py-32" id="uslugi">
      <div className="mx-auto max-w-[1600px]">
        {/* Header */}
        <div className="mb-20 max-w-3xl">
          <h2 className="font-serif text-5xl md:text-6xl mb-6 leading-[1.1]">
            Co mogę zrobić dla <span className="text-wood italic">Twojej podłogi</span>
          </h2>
          <p className="text-white/60 text-lg font-light leading-relaxed max-w-2xl">
            Od odświeżenia lekko zmatowiałego parkietu po całkowitą renowację podłogi po 50 latach.
          </p>
        </div>

        {/* Grid cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.num}
              className="group border border-white/10 p-10 hover:border-wood/50 hover:bg-white/[0.02] transition-all duration-500 flex flex-col min-h-[320px]"
            >
              <div className="mb-auto">
                <span className="block font-sans text-xs text-wood mb-6 tracking-widest font-bold">
                  {service.num}
                </span>
                <h3 className="font-serif text-3xl mb-4 group-hover:text-wood transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/50 font-light leading-relaxed text-sm">
                  {service.desc}
                </p>
              </div>
              <div className="mt-8 flex justify-end">
                <span className="material-symbols-outlined text-wood opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                  arrow_right_alt
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
