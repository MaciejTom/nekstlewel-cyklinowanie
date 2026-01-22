import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eraser, PaintRoller, RefreshCw, Hammer, Ruler } from "lucide-react";

const services = [
  {
    title: "Cyklinowanie bezpyłowe",
    description: "Usuwam starą warstwę lakieru bez kurzu. Gładka powierzchnia gotowa do lakierowania.",
    icon: Eraser,
  },
  {
    title: "Lakierowanie (mat/połysk)",
    description: "Lakiery najwyższej jakości. Ochrona na lata i piękny wygląd.",
    icon: PaintRoller,
  },
  {
    title: "Renowacja starych parkietów",
    description: "Przywracam życie parkietom 20-50 letnim. Stary parkiet jak nowy.",
    icon: RefreshCw,
  },
  {
    title: "Naprawy i uzupełnienia",
    description: "Wymieniam uszkodzone klepki, uzupełniam braki. Jednolita powierzchnia.",
    icon: Hammer,
  },
  {
    title: "Listwy przypodłogowe",
    description: "Montuję lub wymieniam listwy pasujące do podłogi.",
    icon: Ruler,
  },
];

export function Services() {
  return (
    <section id="services" className="bg-background py-16 md:py-24">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-foreground">
          Co mogę zrobić dla Twojej podłogi
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col hover:shadow-md transition-shadow">
              <CardHeader>
                <service.icon className="h-10 w-10 text-primary mb-2" />
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
