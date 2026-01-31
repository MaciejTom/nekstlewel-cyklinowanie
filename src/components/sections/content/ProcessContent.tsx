import Image from "next/image";
import { IconPhone } from "@/components/icons";

export function ProcessContent() {
  const steps = [
    {
      num: "01",
      title: "Kontakt i wycena",
      desc: "Zadzwoń (511 692 325) lub wyślij zdjęcie podłogi. Powiem ile to potrwa i ile będzie kosztować. Wycena bezpłatna.",
    },
    {
      num: "02",
      title: "Termin",
      desc: "Umawiamy się na konkretny dzień. Punktualność to podstawa - przyjadę kiedy się umówimy.",
    },
    {
      num: "03",
      title: "Praca",
      desc: "Cyklinowanie, szpachlowanie, lakierowanie. Zależnie od stanu podłogi i metrażu - od 1 do kilku dni. Pracuję czysto, sprzątam po sobie.",
    },
    {
      num: "04",
      title: "Odbiór i wskazówki",
      desc: "Pokazuję efekt, daję wskazówki jak dbać o podłogę. Kiedy można stawiać meble, jak myć, czego unikać.",
    },
  ];

  return (
    <section className="bg-paper px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1600px]">
        {/* Header */}
        <div className="mb-20 flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-charcoal/20 pb-8">
          <h2 className="font-serif text-5xl lg:text-7xl">Od telefonu do nowej podłogi</h2>
          <p className="max-w-md text-gray-600 font-light text-lg">
            Prosty proces - zadzwoń lub wyślij zdjęcie, umówimy się, zrobię robotę.
          </p>
        </div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
          {/* Left - Image */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] w-full overflow-hidden bg-gray-200 sticky top-24">
              <Image
                src="/images/maszyna.webp"
                alt="Profesjonalna maszyna do cyklinowania bezpyłowego"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                loading="lazy"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right - Steps */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div
                  key={step.num}
                  className="group flex gap-8 items-start border-b border-charcoal/10 pb-12 last:border-0"
                >
                  <div className="shrink-0">
                    <span className="font-serif text-6xl lg:text-7xl text-wood/30 group-hover:text-wood transition-colors duration-500">
                      {step.num}
                    </span>
                  </div>
                  <div className="pt-4">
                    <h3 className="font-serif text-3xl lg:text-4xl mb-4 group-hover:text-wood transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed font-light">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-16">
              <a
                href="tel:511692325"
                className="inline-flex items-center gap-4 bg-charcoal text-white px-8 py-4 font-bold text-sm uppercase tracking-wider hover:bg-wood transition-colors"
              >
                <span>Zadzwoń teraz</span>
                <IconPhone className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
