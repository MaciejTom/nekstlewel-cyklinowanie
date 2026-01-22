import { Phone, CalendarClock, Hammer, CircleCheck } from 'lucide-react';

const steps = [
  {
    icon: Phone,
    title: "Kontakt i wycena",
    description: "Zadzwoń lub wyślij zdjęcie. Wycena bezpłatna."
  },
  {
    icon: CalendarClock,
    title: "Ustalamy termin",
    description: "Przyjeżdżam punktualnie. Szanuję Twój czas."
  },
  {
    icon: Hammer,
    title: "Praca",
    description: "Cyklinuję bezpyłowo. Po mnie jest czysto."
  },
  {
    icon: CircleCheck,
    title: "Odbiór i wskazówki",
    description: "Pokazuję efekt, daję wskazówki pielęgnacji."
  }
];

export function Process() {
  return (
    <section id="process" className="bg-muted py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
          Od telefonu do nowej podłogi
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-8 left-0 w-full h-0.5 bg-primary/20 -z-10" />

          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center relative z-10">
              <div className="w-16 h-16 rounded-full bg-background border border-primary/20 flex items-center justify-center mb-6 shadow-sm text-primary">
                <step.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>

              {/* Step Number Background */}
              <div className="absolute top-0 right-1/4 -mt-2 text-6xl font-black text-primary/5 -z-10 select-none">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
