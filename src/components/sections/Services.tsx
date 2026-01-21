import { Sparkles, Paintbrush, RefreshCw, Hammer, Frame } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Sparkles,
    title: "Cyklinowanie bezpyłowe",
    description: "Usuwam starą warstwę lakieru bez kurzu. Gładka powierzchnia gotowa do lakierowania.",
  },
  {
    icon: Paintbrush,
    title: "Lakierowanie (mat/połysk)",
    description: "Lakiery najwyższej jakości. Ochrona na lata i piękny wygląd.",
  },
  {
    icon: RefreshCw,
    title: "Renowacja starych parkietów",
    description: "Przywracam życie parkietom 20-50 letnim. Stary parkiet jak nowy.",
  },
  {
    icon: Hammer,
    title: "Naprawy i uzupełnienia",
    description: "Wymieniam uszkodzone klepki, uzupełniam braki. Jednolita powierzchnia.",
  },
  {
    icon: Frame,
    title: "Listwy przypodłogowe",
    description: "Montuję lub wymieniam listwy pasujące do podłogi.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Co mogę zrobić dla Twojej podłogi
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-card border-primary/10 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader className="pb-4">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <service.icon className="h-7 w-7" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground leading-tight">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
