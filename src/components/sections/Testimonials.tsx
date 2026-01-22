import { Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonialsData = [
  {
    name: "Marcin Stroński",
    stars: 5,
    review: "Świetny specjalista od cyklinowania. Praca wykonana bardzo dokładnie i profesjonalnie. Polecam!"
  },
  {
    name: "Adam Łącki",
    stars: 5,
    review: "Bardzo dokładnie, podłogi jak nowe. Pan Piotr doradził też w kwestii pielęgnacji. Polecam serdecznie."
  },
  {
    name: "Hanna Kozioł",
    stars: 5,
    review: "50-letni parkiet odmłodniał o 50 lat. Naprawdę bezpyłowo - nie musiałam sprzątać po remoncie!"
  },
  {
    name: "Tomasz Pisiewicz",
    stars: 5,
    review: "Wymiana uszkodzonych klepek i cyklinowanie całości. 50-letnia podłoga jak nowa! Terminowo i czysto."
  },
  {
    name: "Agnieszka Krężołek",
    stars: 5,
    review: "Uratował mi parkiet po poprzedniej firmie, która go zniszczyła. Teraz wygląda pięknie. Dziękuję!"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
            Co mówią klienci
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
            4.9★ na podstawie 50 opinii w Google
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialsData.map((testimonial) => (
            <Card key={testimonial.name} className="flex flex-col hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-semibold">{testimonial.name}</CardTitle>
                  <div className="flex items-center gap-0.5">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">&ldquo;{testimonial.review}&rdquo;</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
