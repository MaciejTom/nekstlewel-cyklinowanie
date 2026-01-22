import { Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="w-full py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 mx-auto">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
            Zadzwoń lub napisz
          </h2>
          <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl">
            Bezpłatna wycena - wyślij zdjęcie parkietu lub zadzwoń
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 py-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
          <div className="grid gap-2 text-center">
            <div className="flex items-center justify-center">
              <Phone className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-bold">Telefon</h3>
            <p className="text-primary-foreground/90">
              <a href="tel:511692325" className="hover:underline text-xl font-semibold">
                511 692 325
              </a>
            </p>
          </div>
          <div className="grid gap-2 text-center">
            <div className="flex items-center justify-center">
              <MapPin className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-bold">Lokalizacja</h3>
            <p className="text-primary-foreground/90">Kielce, ul. Turystyczna</p>
            <p className="text-primary-foreground/70 text-sm">Kielce i okolice (do 50km)</p>
          </div>
          <div className="grid gap-2 text-center">
            <div className="flex items-center justify-center">
              <Clock className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-bold">Godziny pracy</h3>
            <p className="text-primary-foreground/90">Pon - Pt: 7:00 - 18:00</p>
            <p className="text-primary-foreground/90">Sobota: 8:00 - 14:00</p>
          </div>
        </div>
        <div className="flex justify-center">
          <Button size="lg" variant="secondary" asChild className="text-lg font-semibold px-8 py-6 h-auto shadow-lg hover:shadow-xl transition-all">
            <a href="tel:511692325">
              <Phone className="mr-2 h-5 w-5" />
              Zadzwoń teraz: 511 692 325
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
