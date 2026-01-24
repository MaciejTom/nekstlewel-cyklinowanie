// Wariant 2: Statyczny grid pytań (bez akordeon)
export function FAQContentV2() {
  const faqs = [
    {
      q: "Czy naprawdę jest bezpyłowo?",
      a: "Tak. Maszyny mają system odciągu pyłu. Oczywiście nie jest to 100% - trochę pyłu zawsze się unosi, ale to nieporównywalne z tradycyjnym cyklinowaniem.",
    },
    {
      q: "Ile trwa cyklinowanie?",
      a: "Zależy od metrażu i stanu podłogi. Pokój 20 m² - 1 dzień. Całe mieszkanie 60 m² - 2-3 dni. Lakier musi schnąć między warstwami.",
    },
    {
      q: "Kiedy można stawiać meble?",
      a: "Po ostatniej warstwie lakieru - minimum 24h dla lekkich mebli, 48-72h dla ciężkich. Dam dokładne instrukcje na miejscu.",
    },
    {
      q: "Mam bardzo stary parkiet - da się go uratować?",
      a: "Zwykle tak. Robiłem parkiety 50-letnie, które wyglądają teraz lepiej niż na początku. Zadzwoń, opisz problem lub wyślij zdjęcie.",
    },
    {
      q: "Poprzednia firma źle zrobiła - naprawisz?",
      a: "Tak, naprawiam po innych wykonawcach. Najczęściej: nierówności, ślady po maszynie, źle położony lakier.",
    },
    {
      q: "Ile to kosztuje?",
      a: "Zależy od metrażu, stanu podłogi i typu wykończenia. Wycena bezpłatna - zadzwoń lub wyślij zdjęcie, powiem konkretnie.",
    },
  ];

  return (
    <section className="bg-charcoal text-white px-6 py-24 lg:px-12 lg:py-32" id="faq">
      <div className="mx-auto max-w-[1600px]">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="font-serif text-5xl lg:text-6xl mb-4">Pytania i odpowiedzi</h2>
          <p className="text-white/60 text-lg">Odpowiedzi na najczęściej zadawane pytania</p>
        </div>

        {/* Grid of Q&A */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group border-l-2 border-wood/30 pl-6 hover:border-wood transition-colors duration-300"
            >
              <span className="block text-xs font-bold uppercase tracking-widest text-wood/60 mb-3">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-serif text-xl lg:text-2xl mb-4 group-hover:text-wood transition-colors">
                {faq.q}
              </h3>
              <p className="text-white/50 font-light leading-relaxed text-sm">{faq.a}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <p className="text-white/60 mb-6">Masz inne pytanie?</p>
          <a
            href="tel:511692325"
            className="inline-flex items-center gap-3 bg-wood text-charcoal px-10 py-5 font-bold text-sm uppercase tracking-wider hover:bg-white transition-colors"
          >
            <span>Zadzwoń: 511 692 325</span>
            <span className="material-symbols-outlined">phone</span>
          </a>
        </div>
      </div>
    </section>
  );
}
