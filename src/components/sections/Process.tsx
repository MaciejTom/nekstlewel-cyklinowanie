import { Phone, Calendar, Sparkles, CheckCircle2 } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Kontakt i wycena",
    description: "Zadzwoń lub wyślij zdjęcie. Wycena bezpłatna.",
    icon: Phone,
  },
  {
    id: 2,
    title: "Ustalamy termin",
    description: "Przyjeżdżam punktualnie. Szanuję Twój czas.",
    icon: Calendar,
  },
  {
    id: 3,
    title: "Praca",
    description: "Cyklinuję bezpyłowo. Po mnie jest czysto.",
    icon: Sparkles,
  },
  {
    id: 4,
    title: "Odbiór i wskazówki",
    description: "Pokazuję efekt, daję wskazówki pielęgnacji.",
    icon: CheckCircle2,
  },
];

export function Process() {
  return (
    <section id="process" className="py-12 lg:py-24 bg-muted">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
            Od telefonu do nowej podłogi
          </h2>
          <p className="max-w-[700px] text-muted-foreground text-lg">
            Jasne zasady i prosty proces. Bez niespodzianek.
          </p>
        </div>

        <div className="relative grid gap-8 md:grid-cols-4">
          {/* Connecting Line (Desktop only) */}
          <div
            className="hidden md:block absolute top-12 left-[12.5%] w-[75%] h-0.5 bg-border/30 -z-10"
            aria-hidden="true"
          />

          {steps.map((step) => (
            <div key={step.id} className="relative flex flex-col items-center text-center group">
              {/* Step Number/Icon Container */}
              <div className="relative flex items-center justify-center w-24 h-24 mb-6 rounded-full bg-background border-4 border-white shadow-sm group-hover:border-primary/20 group-hover:scale-105 transition-all duration-300">
                <step.icon className="w-10 h-10 text-primary" strokeWidth={1.5} />

                {/* Badge with number */}
                <div className="absolute -top-1 -right-1 w-8 h-8 flex items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm shadow-md ring-2 ring-background">
                  {step.id}
                </div>
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-bold mb-3 text-foreground">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed max-w-[250px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
