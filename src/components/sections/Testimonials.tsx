import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    initials: "MK",
    name: "Marek Kowalski",
    location: "Kielce, Centrum",
    text: "Pan Piotr to prawdziwy wirtuoz. Podłoga z lat 70-tych wygląda jak nowa. Co najważniejsze - zero pyłu w mieszkaniu. Usługa warta każdej złotówki.",
  },
  {
    initials: "AN",
    name: "Anna Nowak",
    location: "Masłów",
    text: "Terminowość i kultura pracy na niespotykanym dziś poziomie. Parkiet po zalaniu wygląda lepiej niż przed szkodą. Pełen profesjonalizm.",
  },
  {
    initials: "TJ",
    name: "Tomasz J.",
    location: "Kielce, Barwinek",
    text: "Szukałem kogoś kto podejmie się renowacji zabytkowego parkietu we dworze. Pan Piotr sprostał zadaniu celująco. Polecam z czystym sumieniem.",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-midnight" id="opinie">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <Quote className="h-10 w-10 text-primary mb-4" />
          <h2 className="text-4xl font-serif text-white">Głos naszych klientów</h2>
          <div className="mt-4 flex items-center gap-1">
            <div className="flex text-primary">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-primary" />
              ))}
            </div>
            <span className="ml-3 text-white font-medium">4.9/5 (50+ opinii)</span>
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="relative rounded-sm bg-midnight-light p-8 border border-white/5 hover:border-primary/30 transition-colors"
            >
              {/* Decorative quote */}
              <div className="absolute -top-3 -right-3">
                <Quote className="h-16 w-16 text-white/5" />
              </div>

              <p className="mb-6 text-sm font-light leading-relaxed text-gray-300 italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              <div className="flex items-center gap-4 border-t border-white/5 pt-4">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-serif font-bold border border-primary/30">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{testimonial.name}</p>
                  <p className="text-xs text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
