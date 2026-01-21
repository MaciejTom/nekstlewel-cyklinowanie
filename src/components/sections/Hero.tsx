import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone, Camera, Star, CheckCircle2 } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full py-12 lg:py-24 overflow-hidden bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">

          {/* Left Column: Text Content */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-foreground">
                Twój parkiet jak nowy. <span className="text-primary">Bez kurzu.</span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground text-lg sm:text-xl">
                Pan Piotr przywraca życie starym podłogom od lat.
                50 opinii, 4.9 gwiazdek. Kielce i okolice.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="gap-2 text-base font-semibold shadow-lg hover:shadow-xl transition-all">
                <a href="tel:511692325">
                  <Phone className="size-5" />
                  Zadzwoń: 511 692 325
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="gap-2 text-base border-primary/20 hover:bg-secondary/10">
                <a href="#contact">
                  <Camera className="size-5" />
                  Wyślij zdjęcie do wyceny
                </a>
              </Button>
            </div>

            {/* Social Proof & Features */}
            <div className="pt-4 border-t border-border/50">
              <div className="flex flex-wrap gap-y-4 gap-x-6 text-sm font-medium text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="flex text-amber-500">
                    <Star className="size-4 fill-current" />
                    <Star className="size-4 fill-current" />
                    <Star className="size-4 fill-current" />
                    <Star className="size-4 fill-current" />
                    <Star className="size-4 fill-current" />
                  </div>
                  <span className="text-foreground">4.9/5 (50 opinii)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-primary" />
                  <span>Bezpyłowe maszyny</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-primary" />
                  <span>Parkiety 20-50 lat</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-2xl ring-1 ring-border/50">
              <Image
                src="/images/1.jpg"
                alt="Renowacja parkietu w jodełkę - efekt przed i po"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Optional: Floating Badge */}
              <div className="absolute bottom-4 left-4 bg-background/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg border border-border/50">
                <p className="text-sm font-semibold text-primary">
                  Realizacja: Kielce, Centrum
                </p>
              </div>
            </div>

            {/* Decorative Element behind image */}
            <div className="absolute -z-10 top-4 -right-4 w-full h-full rounded-2xl bg-secondary/20" />
          </div>

        </div>
      </div>
    </section>
  );
}
