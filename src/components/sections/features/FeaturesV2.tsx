import { Wind, History, Sparkles, Hammer } from "lucide-react";

const features = [
  {
    num: "01",
    icon: Wind,
    title: "Bezpyłowo naprawdę",
    desc: "Maszyny z systemem odciągu pyłu. Pracuję w mieszkaniu z meblami - kurz nie leci po całym domu. Sprawdź opinie - \"bez kurzu\" pojawia się w co drugiej.",
  },
  {
    num: "02",
    icon: History,
    title: "Stare parkiety to moja specjalność",
    desc: "20, 30, 50 lat - widziałem już wszystko. Parkiet po pół wieku użytkowania może wyglądać jak nowy. Mam na to dowody w opiniach: \"50-letnia podłoga odmłodniała o 50 lat\".",
  },
  {
    num: "03",
    icon: Sparkles,
    title: "Wiem co robię z drewnem",
    desc: "Znam gatunki drewna, wiem które lakiery do czego. Po renowacji dostajesz wskazówki jak dbać o parkiet, żeby wyglądał dobrze przez lata.",
  },
  {
    num: "04",
    icon: Hammer,
    title: "Naprawiam po innych firmach",
    desc: "Źle zrobione cyklinowanie? Uszkodzenia przy listwach? Nierówności? Naprawiam błędy poprzednich wykonawców. Kilku klientów trafiło do mnie właśnie po nieudanych renowacjach.",
  },
];

export function FeaturesV2() {
  return (
    <section className="relative border-b border-gray-200 bg-surface px-6 py-24 lg:px-12 lg:py-40 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply"
        style={{
          backgroundImage: `url('data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 20 Q 50 10 100 20 M0 40 Q 50 50 100 40 M0 60 Q 50 50 100 60 M0 80 Q 50 90 100 80\' stroke=\'%23CCA383\' fill=\'none\' stroke-width=\'1\'/%3E%3C/svg%3E')`,
          backgroundSize: "120px 120px",
        }}
      />
      <div className="relative mx-auto max-w-[1600px]">
        {/* Header */}
        <div className="mx-auto max-w-5xl text-center mb-16 lg:mb-24">
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-charcoal">
            Cyklinuję bez kurzu — <br />
            <span className="italic text-wood">nie musisz sprzątać po mnie.</span>
          </h2>
          <p className="mt-8 text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Standardowe cyklinowanie = kurz wszędzie. Meble, zasłony, szafy. U mnie pracują maszyny z odciągiem pyłu. Cyklinuję, Ty nie sprzątasz.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200">
          {features.map((feature) => (
            <div
              key={feature.num}
              className="group relative p-8 lg:p-10 bg-surface hover:bg-wood/5 transition-all duration-500"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-wood/50">
                  {feature.num}
                </span>
                <feature.icon className="w-8 h-8 text-wood stroke-[1.2] group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="font-serif text-2xl lg:text-3xl text-charcoal leading-tight mb-4 group-hover:text-wood transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed font-light">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
