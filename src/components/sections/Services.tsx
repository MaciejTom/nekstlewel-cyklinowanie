import Image from "next/image";
import { ArrowRight, Palette } from "lucide-react";

const services = [
  {
    title: "Cyklinowanie Bezpyłowe",
    description:
      "Precyzyjne usuwanie starych powłok z użyciem maszyn z certyfikatem HEPA. Czystość i perfekcja.",
    image: "/images/2.jpg",
  },
  {
    title: "Lakierowanie Premium",
    description:
      "Aplikacja najwyższej klasy lakierów (mat, satyna, połysk) lub naturalnych olejowosków.",
    image: "/images/3.jpg",
  },
  {
    title: "Renowacja Detali",
    description:
      "Szpachlowanie ubytków, wymiana klepek, doklejanie luźnych elementów. Dbałość o każdy milimetr.",
    image: "/images/4.jpg",
  },
  {
    title: "Montaż Listew",
    description:
      "Idealne zwieńczenie podłogi. Listwy drewniane lub MDF montowane z jubilerską precyzją.",
    image: "/images/5.jpg",
  },
];

export function Services() {
  return (
    <section className="bg-midnight-dark py-20 lg:py-32 border-t border-white/5" id="uslugi">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 flex flex-col justify-between gap-6 sm:flex-row sm:items-end border-b border-white/10 pb-8">
          <div>
            <h2 className="text-4xl font-serif text-white mb-2">Nasze Usługi</h2>
            <p className="text-gray-400 font-light">
              Kompleksowa renowacja podłóg drewnianych.
            </p>
          </div>
          <button className="flex items-center gap-2 text-sm uppercase tracking-widest font-bold text-primary hover:text-white transition-colors">
            Pełna oferta <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-sm border border-white/10 bg-midnight transition-all hover:border-primary/50 h-80"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent z-10 opacity-90" />

              {/* Image */}
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                <div className="w-12 h-0.5 bg-primary mb-4 transition-all group-hover:w-24" />
                <h3 className="mb-2 text-2xl font-serif text-white">
                  {service.title}
                </h3>
                <p className="text-sm font-light text-gray-300 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  {service.description}
                </p>
              </div>
            </div>
          ))}

          {/* Featured service - spans 2 columns */}
          <div className="group relative overflow-hidden rounded-sm border border-white/10 bg-midnight transition-all hover:border-primary/50 lg:col-span-2 min-h-[320px]">
            <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/80 to-transparent z-10" />
            <Image
              src="/images/6.jpg"
              alt="Artystyczne barwienie drewna"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="relative z-20 flex h-full flex-col justify-center p-8 sm:p-12 max-w-lg">
              <div className="w-12 h-0.5 bg-primary mb-6 transition-all group-hover:w-24" />
              <h3 className="mb-4 text-3xl font-serif text-white">
                Artystyczne Barwienie
              </h3>
              <p className="mb-6 text-base font-light text-gray-300 leading-relaxed">
                Zmień charakter swojego wnętrza bez wymiany podłogi. Od
                skandynawskiej bieli po głęboki orzech czy heban. Używamy
                profesjonalnych bejc penetrujących.
              </p>
              <button className="w-fit text-sm font-bold uppercase tracking-widest text-primary hover:text-white transition-colors flex items-center gap-2">
                Zobacz paletę kolorów <Palette className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
