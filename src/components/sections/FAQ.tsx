"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Czy naprawdę jest bezpyłowo?",
    answer: "Tak! Używam maszyn z systemem odpylania HEPA. Kurz jest zasysany bezpośrednio przy źródle. Nie musisz sprzątać całego mieszkania po mojej pracy."
  },
  {
    question: "Ile trwa cyklinowanie?",
    answer: "Standardowe mieszkanie (50-70m²) to 2-3 dni robocze. Pierwszy dzień - cyklinowanie, kolejne - lakierowanie i schnięcie."
  },
  {
    question: "Kiedy można stawiać meble?",
    answer: "Po lakierowaniu - minimum 24h do lekkiego chodzenia, 48-72h do stawiania mebli."
  },
  {
    question: "Mam bardzo stary parkiet - da się uratować?",
    answer: "W 90% przypadków tak! Parkiety 30, 40, nawet 50-letnie można odnowić. Przyślij zdjęcie - ocenię bezpłatnie."
  },
  {
    question: "Poprzednia firma źle zrobiła - naprawisz?",
    answer: "Tak, naprawiam po innych. Często trafiam na źle wycyklinowane lub polakierowane podłogi. Da się to naprawić."
  },
  {
    question: "Ile to kosztuje?",
    answer: "Orientacyjnie 70-100 zł/m². Zadzwoń lub wyślij zdjęcie - wycenię bezpłatnie."
  }
];

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
            Najczęściej zadawane pytania
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-lg">
            Masz pytania? Tutaj znajdziesz odpowiedzi na najczęstsze z nich.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-3xl">
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="rounded-lg border border-border bg-card">
                <button
                  className="flex w-full items-center justify-between p-4 text-left font-medium text-foreground hover:bg-muted/50 transition-colors rounded-lg"
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-muted-foreground transform transition-transform duration-300 ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    activeIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-4 pb-4 text-muted-foreground">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
