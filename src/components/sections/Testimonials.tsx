import { Star } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const testimonials = [
  {
    name: "Marcin Stroński",
    rating: 5,
    text: "Świetny specjalista od cyklinowania. Praca wykonana bardzo dokładnie i profesjonalnie. Polecam!",
  },
  {
    name: "Adam Łącki",
    rating: 5,
    text: "Bardzo dokładnie, podłogi jak nowe. Pan Piotr doradził też w kwestii pielęgnacji. Polecam serdecznie.",
  },
  {
    name: "Hanna Kozioł",
    rating: 5,
    text: "50-letni parkiet odmłodniał o 50 lat. Naprawdę bezpyłowo - nie musiałam sprzątać po remoncie!",
  },
  {
    name: "Tomasz Pisiewicz",
    rating: 5,
    text: "Wymiana uszkodzonych klepek i cyklinowanie całości. 50-letnia podłoga jak nowa! Terminowo i czysto.",
  },
  {
    name: "Agnieszka Krężołek",
    rating: 5,
    text: "Uratował mi parkiet po poprzedniej firmie, która go zniszczyła. Teraz wygląda pięknie. Dziękuję!",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-muted py-12 lg:py-24">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
            Co mówią klienci
          </h2>
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="flex text-amber-500">
              <Star className="size-5 fill-current" />
              <Star className="size-5 fill-current" />
              <Star className="size-5 fill-current" />
              <Star className="size-5 fill-current" />
              <Star className="size-5 fill-current" />
            </div>
            <span className="font-medium">
              4.9 na podstawie 50 opinii w Google
            </span>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="h-full bg-card border-border/50 shadow-sm hover:shadow-md transition-shadow"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-1 text-amber-500 mb-2">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </div>
                <h3 className="font-semibold text-lg">{testimonial.name}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
