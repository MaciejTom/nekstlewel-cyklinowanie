import { Button } from "@/components/ui/button";
import { Phone, MapPin, Map, Clock, BadgeCheck } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="bg-primary text-primary-foreground py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Zadzwoń lub napisz
            </h2>

            <div className="grid gap-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary-foreground/10 rounded-lg shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Telefon</h3>
                  <a href="tel:511692325" className="text-primary-foreground/90 hover:text-white transition-colors">
                    511 692 325
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary-foreground/10 rounded-lg shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Adres</h3>
                  <p className="text-primary-foreground/90">
                    Kielce, ul. Turystyczna
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary-foreground/10 rounded-lg shrink-0">
                  <Map className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Zasięg</h3>
                  <p className="text-primary-foreground/90">
                    Kielce i okolice (do 50km)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary-foreground/10 rounded-lg shrink-0">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Godziny</h3>
                  <p className="text-primary-foreground/90">
                    Pon-Pt 7:00-18:00
                    <br />
                    Sob 8:00-14:00
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary-foreground/10 rounded-lg shrink-0">
                  <BadgeCheck className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Wycena</h3>
                  <p className="text-primary-foreground/90">
                    Bezpłatna
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-end text-center lg:text-right space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Potrzebujesz szybkiej wyceny?</h3>
              <p className="text-primary-foreground/80 max-w-md">
                Skontaktuj się ze mną telefonicznie, aby omówić szczegóły Twojego zlecenia. Gwarantuję fachowe doradztwo.
              </p>
            </div>

            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6 h-auto w-full md:w-auto shadow-lg hover:shadow-xl transition-all"
              asChild
            >
              <a href="tel:511692325">
                <Phone className="mr-2 h-6 w-6" />
                Zadzwoń teraz: 511 692 325
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
