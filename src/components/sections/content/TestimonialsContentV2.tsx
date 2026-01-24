// Wariant 2: Duże centrowane cytaty (minimalistyczny styl)
"use client";

import { useState } from "react";

export function TestimonialsContentV2() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      author: "Marcin Stroński",
      badge: "Lokalny przewodnik, 161 opinii",
      text: "Świetny specjalista, profesjonalne podejście, terminowość, wysoka jakość wykonania usługi, czystość miejsca pracy, kultura osobista. Polecam - podłoga wygląda jak nowa.",
    },
    {
      author: "Hanna Kozioł",
      badge: null,
      text: "Pełen profesjonalizm i naprawdę bezpyłowo. Mój 50-letni parkiet odmłodniał o co najmniej 50 lat - na pewno wygląda teraz lepiej niż 50 lat temu. Polecam.",
    },
    {
      author: "Adam Łącki",
      badge: null,
      text: "Bardzo dokładnie, podłogi jak nowe. To jest naprawdę specjalista - ogromna wiedza, profesjonalizm, osobista kultura. Praca wykonana czysto. Polecam.",
    },
    {
      author: "Tomasz Pisiewicz",
      badge: null,
      text: "Wymiana i dopasowanie zniszczonych klepek, uzupełnienie brakującej części parkietu. Dodatkowo szpachlowanie, cyklinowanie, malowanie całości oraz listewkowanie. I 50-letnia podłoga w całym mieszkaniu jak nowa!",
    },
    {
      author: "Agnieszka Krężołek",
      badge: null,
      text: "Polecam Pana Piotra, który uratował mi parkiet po poprzedniej firmie. Praca wykonana fachowo, rzetelnie i w terminie.",
    },
  ];

  return (
    <section className="bg-paper px-6 py-24 lg:px-12 lg:py-40 overflow-hidden" id="opinie">
      <div className="mx-auto max-w-5xl text-center">
        {/* Header */}
        <span className="material-symbols-outlined text-7xl text-wood/40 mb-8">format_quote</span>

        {/* Main quote */}
        <div className="min-h-[280px] lg:min-h-[320px] flex items-center justify-center">
          <div className="relative">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  activeIndex === index
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8 absolute inset-0 pointer-events-none"
                }`}
              >
                <p className="font-serif text-3xl md:text-4xl lg:text-5xl italic leading-tight text-charcoal">
                  "{t.text}"
                </p>
                <div className="mt-10">
                  <cite className="not-italic font-bold text-sm uppercase tracking-widest block text-charcoal">
                    {t.author}
                  </cite>
                  {t.badge && (
                    <span className="text-xs text-gray-500 mt-1 block">{t.badge}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "bg-wood scale-100"
                  : "bg-gray-300 scale-75 hover:bg-gray-400"
              }`}
              aria-label={`Opinia ${index + 1}`}
            />
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <p className="text-gray-500 text-sm">
            <span className="font-bold text-charcoal">50</span> opinii na Google &bull;
            średnia <span className="text-wood font-bold">4.9★</span>
          </p>
          <a
            href="https://www.google.com/maps/place/Pan+Piotr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 text-charcoal font-bold text-xs uppercase tracking-wider hover:text-wood transition-colors"
          >
            <span>Zobacz wszystkie opinie</span>
            <span className="material-symbols-outlined text-sm">arrow_outward</span>
          </a>
        </div>
      </div>
    </section>
  );
}
