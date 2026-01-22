import Image from "next/image";
import { Phone, Star, Camera, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="hero" className="bg-background py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2 items-center">
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl xl:text-6xl/none">
                Twój parkiet jak nowy. <br className="hidden sm:inline" />
                <span className="text-primary">Bez kurzu.</span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl font-medium">
                Pan Piotr przywraca życie starym podłogom od lat.
                50 opinii, 4.9 gwiazdek. Kielce i okolice.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="gap-2 text-base shadow-lg shadow-primary/20">
                <a href="tel:511692325">
                  <Phone className="size-5" />
                  Zadzwoń: 511 692 325
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="gap-2 text-base border-primary/20 hover:bg-primary/5">
                <a href="#contact">
                  <Camera className="size-5 text-primary" />
                  Wyślij zdjęcie do wyceny
                </a>
              </Button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 text-sm font-medium text-muted-foreground pt-4">
              <div className="flex items-center gap-2">
                <div className="flex text-primary">
                  <Star className="size-4 fill-primary" />
                  <Star className="size-4 fill-primary" />
                  <Star className="size-4 fill-primary" />
                  <Star className="size-4 fill-primary" />
                  <Star className="size-4 fill-primary" />
                </div>
                <span>4.9 na 50 opinii</span>
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

          <div className="relative mx-auto aspect-square w-full max-w-[500px] lg:max-w-none lg:mr-0 rounded-2xl overflow-hidden shadow-2xl shadow-black/5 border-4 border-white/50">
            <Image
              src="/images/1.jpg"
              alt="Odnawianie parkietu w jodełkę - efekt przed i po"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            />

            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-xl shadow-lg border border-border/50">
              <p className="text-sm font-bold text-foreground">Gwarancja czystości</p>
              <p className="text-xs text-muted-foreground">Nie musisz sprzątać po cyklinowaniu</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
