import { Wind, History, Award, Wrench } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const usps = [
  {
    icon: Wind,
    title: "Bezpyłowo naprawdę",
    description: "Maszyny z filtracją HEPA. Kurzem się nie najesz, a meble nie wymagają czyszczenia.",
  },
  {
    icon: History,
    title: "Stare parkiety to moja specjalność",
    description: "20-letni, 30-letni, 50-letni - im starszy, tym bardziej mnie interesuje. Drewno ma duszę.",
  },
  {
    icon: Award,
    title: "Wiem co robię z drewnem",
    description: "Rozpoznam gatunek, dobiorę lakier, doradzę pielęgnację. Lata doświadczenia.",
  },
  {
    icon: Wrench,
    title: "Naprawiam po innych firmach",
    description: "Ktoś spartaczył? Zdarza się. Naprawię i zrobię jak należy.",
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="py-16 md:py-24 bg-muted">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Cyklinuję bez kurzu - nie musisz sprzątać po mnie
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {usps.map((usp, index) => (
            <Card
              key={index}
              className="bg-background border-primary/10 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader className="pb-4">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <usp.icon className="h-7 w-7" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground leading-tight">
                  {usp.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {usp.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
