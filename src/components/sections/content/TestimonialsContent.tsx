export function TestimonialsContent() {
  const testimonials = [
    {
      author: "Marcin Stroński",
      badge: "Lokalny przewodnik, 161 opinii",
      text: "Świetny specjalista, profesjonalne podejście, terminowość, wysoka jakość wykonania usługi, czystość miejsca pracy, kultura osobista. Polecam - podłoga wygląda jak nowa.",
      stars: 5,
    },
    {
      author: "Adam Łącki",
      badge: null,
      text: "Bardzo dokładnie, podłogi jak nowe. To jest naprawdę specjalista - ogromna wiedza, profesjonalizm, osobista kultura. Praca wykonana czysto. Polecam.",
      stars: 5,
    },
    {
      author: "Hanna Kozioł",
      badge: null,
      text: "Pełen profesjonalizm i naprawdę bezpyłowo. Mój 50-letni parkiet odmłodniał o co najmniej 50 lat - na pewno wygląda teraz lepiej niż 50 lat temu. Polecam.",
      stars: 5,
    },
    {
      author: "Tomasz Pisiewicz",
      badge: null,
      text: "Wymiana i dopasowanie zniszczonych klepek, uzupełnienie brakującej części parkietu. Dodatkowo szpachlowanie, cyklinowanie, malowanie całości oraz listewkowanie. I 50-letnia podłoga w całym mieszkaniu jak nowa!",
      stars: 5,
    },
    {
      author: "Agnieszka Krężołek",
      badge: null,
      text: "Polecam Pana Piotra, który uratował mi parkiet po poprzedniej firmie. Praca wykonana fachowo, rzetelnie i w terminie.",
      stars: 5,
    },
  ];

  return (
    <section className="bg-paper px-6 py-24 lg:px-12 lg:py-32" id="opinie">
      <div className="mx-auto max-w-[1600px]">
        {/* Header */}
        <div className="mb-20 text-center">
          <span className="material-symbols-outlined text-6xl text-wood mb-6">format_quote</span>
          <h2 className="font-serif text-5xl lg:text-6xl mb-4">Co mówią klienci</h2>
          <p className="text-gray-600 text-lg">
            50 opinii na Google, średnia <span className="text-wood font-bold">4.9★</span>
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className={`group bg-surface p-8 lg:p-10 border border-gray-100 hover:border-wood/30 hover:shadow-lg transition-all duration-500 ${
                index === 0 ? "lg:col-span-2" : ""
              }`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6 text-wood">
                {[...Array(t.stars)].map((_, i) => (
                  <span key={i} className="text-lg">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="font-serif text-xl lg:text-2xl italic leading-relaxed text-charcoal/80 group-hover:text-charcoal transition-colors mb-8">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="border-t border-gray-100 pt-6">
                <cite className="not-italic font-bold text-sm uppercase tracking-wider block">
                  {t.author}
                </cite>
                {t.badge && (
                  <span className="text-xs text-gray-500 mt-1 block">{t.badge}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="https://www.google.com/maps/place/Pan+Piotr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-charcoal font-bold text-sm uppercase tracking-wider hover:text-wood transition-colors"
          >
            <span>Zobacz wszystkie 50 opinii na Google</span>
            <span className="material-symbols-outlined">arrow_outward</span>
          </a>
        </div>
      </div>
    </section>
  );
}
