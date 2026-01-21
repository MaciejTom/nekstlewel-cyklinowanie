"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

const faqData = [
  {
    question: "Czy naprawdę jest bezpyłowo?",
    answer: "Tak! Używam maszyn z systemem odpylania HEPA. Kurz jest zasysany bezpośrednio przy źródle. Nie musisz sprzątać całego mieszkania po mojej pracy.",
  },
  {
    question: "Ile trwa cyklinowanie?",
    answer: "Standardowe mieszkanie (50-70m²) to 2-3 dni robocze. Pierwszy dzień - cyklinowanie, kolejne - lakierowanie i schnięcie.",
  },
  {
    question: "Kiedy można stawiać meble?",
    answer: "Po lakierowaniu - minimum 24h do lekkiego chodzenia, 48-72h do stawiania mebli.",
  },
  {
    question: "Mam bardzo stary parkiet - da się uratować?",
    answer: "W 90% przypadków tak! Parkiety 30, 40, nawet 50-letnie można odnowić. Przyślij zdjęcie - ocenię bezpłatnie.",
  },
  {
    question: "Poprzednia firma źle zrobiła - naprawisz?",
    answer: "Tak, naprawiam po innych. Często trafiam na źle wycyklinowane lub polakierowane podłogi. Da się to naprawić.",
  },
  {
    question: "Ile to kosztuje?",
    answer: "Orientacyjnie 70-100 zł/m². Zadzwoń lub wyślij zdjęcie - wycenię bezpłatnie.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-background py-16 lg:py-24 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Najczęściej zadawane pytania
        </h2>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border border-border rounded-lg overflow-hidden bg-card"
            >
              <button
                className="w-full flex justify-between items-center p-4 text-left font-medium text-lg focus:outline-none hover:bg-muted/50 transition-colors"
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-foreground">{item.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-muted-foreground" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-muted-foreground" />
                )}
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <div className="p-4 pt-0 text-muted-foreground">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
