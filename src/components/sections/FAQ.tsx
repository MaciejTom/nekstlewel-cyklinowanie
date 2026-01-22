"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Czy cyklinowanie jest w 100% bezpyłowe?",
    answer:
      "Nasz sprzęt Bona wychwytuje 99.8% pyłu. Jest to standard 'szpitalny'. Pozostała ilość jest niemal niewidoczna gołym okiem i łatwa do usunięcia podczas standardowego odkurzania. Nie ma potrzeby zabezpieczania całego domu folią.",
  },
  {
    question: "Jaki jest czas realizacji usługi?",
    answer:
      "Standardowy salon (20-30m²) to 2 dni pracy. Większe powierzchnie (całe mieszkania) zajmują od 3 do 5 dni. Czas ten obejmuje wszystkie etapy technologiczne, w tym czas schnięcia lakierów.",
  },
  {
    question: "Czy stosują Państwo lakiery bezpieczne dla dzieci?",
    answer:
      "Tak, pracujemy wyłącznie na certyfikowanej chemii (Bona, Loba). Są to nowoczesne lakiery wodne, bezzapachowe, hipoalergiczne i w pełni bezpieczne dla dzieci oraz zwierząt domowych zaraz po wyschnięciu.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-midnight-dark py-20 border-t border-white/5">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-serif text-white">
          Częste pytania
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-sm border border-white/5 bg-midnight p-1 transition-all ${
                openIndex === index ? "bg-midnight-light" : ""
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full cursor-pointer items-center justify-between gap-4 p-4 text-white hover:text-primary transition-colors"
              >
                <h3 className="font-medium text-left">{faq.question}</h3>
                <ChevronDown
                  className={`h-5 w-5 text-primary transition-transform duration-300 shrink-0 ${
                    openIndex === index ? "-rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-4 pb-4 pt-2">
                  <p className="leading-relaxed text-gray-400 font-light text-sm border-l border-primary pl-4">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
