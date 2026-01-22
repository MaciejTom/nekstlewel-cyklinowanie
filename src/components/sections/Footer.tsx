import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Hammer, Facebook, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-midnight pt-20 pb-10 border-t border-white/10" id="kontakt">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Contact info */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="flex items-center justify-center rounded-full border border-primary bg-midnight p-2 text-primary">
                <Hammer className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-serif text-white">
                Pan <span className="text-primary">Piotr</span>
              </h2>
            </div>

            <p className="mb-10 max-w-md text-gray-400 font-light leading-relaxed">
              Ekskluzywna renowacja podłóg. Łączymy rzemieślniczą precyzję z
              nowoczesną technologią. Skontaktuj się z nami, aby nadać swojemu
              wnętrzu nowy blask.
            </p>

            <div className="space-y-6">
              <a
                href="tel:511692325"
                className="group flex items-center gap-6 text-xl text-white transition-colors hover:text-primary"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-white/5 border border-white/10 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <span className="font-serif tracking-wide">511 692 325</span>
              </a>

              <a
                href="mailto:kontakt@panpiotr.pl"
                className="group flex items-center gap-6 text-xl text-white transition-colors hover:text-primary"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-white/5 border border-white/10 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <span className="font-serif tracking-wide text-base">
                  kontakt@panpiotr.pl
                </span>
              </a>

              <div className="flex items-center gap-6 text-xl text-white">
                <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-white/5 border border-white/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <span className="font-serif tracking-wide text-base">
                  Kielce i okolice (woj. Świętokrzyskie)
                </span>
              </div>
            </div>
          </div>

          {/* Map & Social */}
          <div className="flex flex-col gap-8">
            <div className="h-80 w-full overflow-hidden rounded-sm border border-white/10 bg-midnight-dark relative group">
              <div className="absolute inset-0 bg-primary/10 z-10 pointer-events-none group-hover:bg-transparent transition-colors duration-500" />
              <Image
                src="/images/7.jpg"
                alt="Mapa Kielce"
                fill
                className="object-cover opacity-70 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0"
              />
              <div className="absolute bottom-4 left-4 z-20 bg-midnight/90 border border-primary/30 px-4 py-2 rounded-sm backdrop-blur-md">
                <p className="text-primary text-xs font-bold uppercase tracking-widest">
                  Obszar działania
                </p>
                <p className="text-white text-sm">Kielce + 50km</p>
              </div>
            </div>

            <div className="flex gap-4 justify-end">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-sm border border-white/10 bg-white/5 text-gray-400 transition-all hover:bg-primary hover:text-midnight hover:border-primary"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-sm border border-white/10 bg-white/5 text-gray-400 transition-all hover:bg-primary hover:text-midnight hover:border-primary"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-light">
          <p>&copy; 2024 Pan Piotr Cyklinowanie Premium. Wszelkie prawa zastrzeżone.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-primary transition-colors">
              Polityka Prywatności
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Regulamin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
