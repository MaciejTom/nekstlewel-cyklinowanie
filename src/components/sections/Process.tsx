const steps = [
  {
    number: 1,
    title: "Konsultacja",
    description:
      "Rozmowa o Twoich oczekiwaniach. Wstępna wycena online lub telefonicznie.",
    active: true,
  },
  {
    number: 2,
    title: "Ekspertyza",
    description:
      "Wizyta na miejscu. Pomiar wilgotności drewna, ocena uszkodzeń, dobór chemii.",
    active: false,
  },
  {
    number: 3,
    title: "Renowacja",
    description:
      "Prace właściwe. Szlifowanie, szpachlowanie i lakierowanie. 2-4 dni robocze.",
    active: false,
  },
  {
    number: 4,
    title: "Odbiór",
    description: "Finalna inspekcja jakości. Przekazanie instrukcji pielęgnacji.",
    active: false,
  },
];

export function Process() {
  return (
    <section className="py-20 bg-midnight relative" id="proces">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-bold uppercase tracking-widest">
            Transparentność
          </span>
          <h2 className="mt-2 text-4xl font-serif text-white">Jak pracujemy?</h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-12 hidden h-0.5 w-full bg-white/10 lg:block" />

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="relative flex flex-col items-center text-center group"
              >
                <div
                  className={`relative z-10 flex h-24 w-24 items-center justify-center rounded-full border text-2xl font-serif shadow-lg transition-all group-hover:scale-110 group-hover:border-primary group-hover:text-primary ${
                    step.active
                      ? "border-primary/30 bg-midnight text-primary shadow-[0_0_15px_rgba(212,165,116,0.1)] group-hover:shadow-[0_0_25px_rgba(212,165,116,0.3)]"
                      : "border-white/10 bg-midnight-light text-gray-300"
                  }`}
                >
                  {step.number}
                </div>
                <h3 className="mt-8 text-xl font-serif text-white">{step.title}</h3>
                <p className="mt-3 text-sm font-light text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
