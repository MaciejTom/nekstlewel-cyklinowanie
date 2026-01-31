"use client";

import { useState } from "react";
import { IconAdd, IconPhone } from "@/components/icons";

export function FAQContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Czy naprawdę jest bezpyłowo?",
      a: "Tak. Maszyny mają system odciągu pyłu. Oczywiście nie jest to 100% - trochę pyłu zawsze się unosi, ale to nieporównywalne z tradycyjnym cyklinowaniem. Możesz mieć meble w pokoju, nie musisz pakować całego mieszkania.",
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
      a: "Zwykle tak. Robiłem parkiety 50-letnie, które wyglądają teraz lepiej niż na początku. Zadzwoń, opisz problem lub wyślij zdjęcie - powiem czy da się naprawić.",
    },
    {
      q: "Poprzednia firma źle zrobiła - naprawisz?",
      a: "Tak, naprawiam po innych wykonawcach. Kilku klientów trafiło do mnie właśnie z takimi problemami. Najczęściej: nierówności, ślady po maszynie, źle położony lakier.",
    },
    {
      q: "Ile to kosztuje?",
      a: "Zależy od metrażu, stanu podłogi i typu wykończenia. Wycena bezpłatna - zadzwoń lub wyślij zdjęcie, powiem konkretnie.",
    },
  ];

  return (
    <section className="bg-surface px-6 py-24 lg:px-12 lg:py-32" id="faq">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="font-serif text-5xl lg:text-6xl mb-4">Najczęściej zadawane pytania</h2>
        </div>

        {/* FAQ Accordion */}
        <div className="divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <div key={index} className="py-6">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-start gap-4 text-left group"
              >
                <h3 className="font-serif text-xl lg:text-2xl group-hover:text-wood transition-colors">
                  {faq.q}
                </h3>
                <IconAdd
                  className={`w-6 h-6 text-wood shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  openIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="pt-4 text-gray-600 leading-relaxed text-lg font-light">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center border-t border-gray-200 pt-12">
          <p className="text-gray-600 mb-6">Masz inne pytanie?</p>
          <a
            href="tel:511692325"
            className="inline-flex items-center gap-3 bg-charcoal text-white px-8 py-4 font-bold text-sm uppercase tracking-wider hover:bg-wood transition-colors"
          >
            <span>Zadzwoń: 511 692 325</span>
            <IconPhone className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
