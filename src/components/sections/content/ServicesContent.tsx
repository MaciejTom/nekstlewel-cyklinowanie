export function ServicesContent() {
  const services = [
    {
      num: "01",
      title: "Cyklinowanie bezpyłowe",
      desc: "Szlifowanie parkietu maszynami z odciągiem pyłu. Usuwam starą warstwę lakieru, wyrównuję powierzchnię. Efekt: gładka, przygotowana do lakierowania podłoga.",
    },
    {
      num: "02",
      title: "Lakierowanie",
      desc: "Mat, półmat, wysoki połysk - do wyboru. Stosuję lakiery wodorozcieńczalne lub poliuretanowe, w zależności od rodzaju drewna i oczekiwań. 2-3 warstwy dla trwałości.",
    },
    {
      num: "03",
      title: "Renowacja starych parkietów",
      desc: "Parkiet po 20-50 latach użytkowania. Cyklinowanie, szpachlowanie szczelin, lakierowanie. Podłoga wygląda jak nowa - mam na to dziesiątki opinii.",
    },
    {
      num: "04",
      title: "Naprawy i uzupełnienia",
      desc: "Wymiana zniszczonych klepek, uzupełnianie brakujących fragmentów, szpachlowanie ubytków. Dopasowuję nowe elementy do istniejącego parkietu.",
    },
    {
      num: "05",
      title: "Listwy przypodłogowe",
      desc: "Montaż nowych listew po renowacji. Drewniane lub MDF, dopasowane kolorystycznie do podłogi.",
    },
  ];

  return (
    <section className="bg-charcoal text-white px-6 py-24 lg:px-12 lg:py-32 relative overflow-hidden" id="uslugi">
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <div className="mx-auto max-w-[1600px] relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-8">
          <div className="max-w-4xl">
            <h2 className="font-serif text-5xl md:text-7xl leading-[1.1] tracking-tight">
              Co mogę zrobić <br />
              <span className="text-wood italic">dla Twojej podłogi.</span>
            </h2>
          </div>
          <p className="text-xl text-gray-400 font-light max-w-sm leading-relaxed text-left lg:text-right border-l-2 lg:border-l-0 lg:border-r-2 border-wood pl-6 lg:pl-0 lg:pr-6">
            Od odświeżenia lekko zmatowiałego parkietu po całkowitą renowację podłogi po 50 latach.
          </p>
        </div>

        {/* Services list */}
        <div className="flex flex-col border-t border-white/10">
          {services.map((service) => (
            <div
              key={service.num}
              className="group py-8 md:py-12 border-b border-white/10 cursor-pointer transition-all duration-500 hover:bg-white/5"
            >
              <div className="flex flex-col md:flex-row items-baseline md:items-start gap-6 md:gap-12 px-4">
                <span className="font-serif text-5xl md:text-6xl text-wood opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  {service.num}
                </span>
                <div className="flex-1 w-full">
                  <div className="flex justify-between items-center w-full">
                    <h3 className="font-serif text-3xl md:text-5xl group-hover:translate-x-2 transition-transform duration-500 ease-out">
                      {service.title}
                    </h3>
                    <span className="material-symbols-outlined text-4xl text-wood opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 hidden md:block">
                      arrow_forward
                    </span>
                  </div>
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
                    <div className="overflow-hidden">
                      <p className="pt-6 text-gray-300 font-light max-w-xl text-lg leading-relaxed group-hover:translate-x-2 transition-transform duration-500 delay-75">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
