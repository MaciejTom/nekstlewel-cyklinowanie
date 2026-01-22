import Image from "next/image";
import { Phone, Camera, Star, ShieldCheck } from "lucide-react";

export function Hero() {
  return (
    <section className="relative bg-midnight overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-hero-glow z-0 pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-midnight-light/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary backdrop-blur-md">
              <Star className="h-4 w-4" />
              Premium Quality Service
            </div>

            <h1 className="mb-6 text-5xl font-serif font-medium leading-tight text-white sm:text-6xl lg:text-7xl">
              Twój parkiet. <br />
              <span className="bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent italic">
                Perfekcja
              </span>{" "}
              w każdym detalu.
            </h1>

            <p className="mb-10 text-lg font-light leading-relaxed text-gray-300 sm:text-xl border-l-2 border-primary pl-6">
              Specjalistyczna renowacja podłóg drewnianych w Kielcach. Technologia
              bezpyłowa klasy premium dla wymagających wnętrz.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <a
                href="tel:511692325"
                className="flex h-14 items-center justify-center rounded-sm bg-primary px-8 text-base font-bold uppercase tracking-wider text-midnight shadow-[0_0_20px_rgba(212,165,116,0.25)] transition-all hover:translate-y-[-2px] hover:shadow-[0_0_30px_rgba(212,165,116,0.4)]"
              >
                <Phone className="mr-2 h-5 w-5" />
                511 692 325
              </a>
              <button className="group flex h-14 items-center justify-center rounded-sm border border-white/20 bg-white/5 px-8 text-base font-medium text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-primary/50">
                <Camera className="mr-2 h-5 w-5 group-hover:text-primary transition-colors" />
                Wyślij zdjęcie podłogi
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative hidden lg:block h-[600px]">
            <div className="absolute inset-0 rounded-lg overflow-hidden border border-white/5 shadow-2xl rotate-3 bg-midnight-dark">
              <div className="absolute inset-0 bg-black/20 z-10" />
              <Image
                src="/images/1.jpg"
                alt="Pięknie odnowiony parkiet dębowy"
                fill
                className="object-cover opacity-90"
                priority
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-8 -left-8 bg-midnight-light p-6 rounded-lg border border-primary/20 shadow-xl z-20 max-w-xs">
              <div className="flex items-center gap-4 mb-3">
                <div className="bg-primary/10 p-2 rounded-full text-primary">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-white font-serif text-lg">Gwarancja Jakości</p>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">
                    Certyfikowany Mistrz
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-300 font-light italic">
                &ldquo;Każda deska traktowana jest z najwyższym szacunkiem dla
                tradycji rzemiosła.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
