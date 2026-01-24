// Wariant 2: Kompaktowy grid kart (zamiast dużych zdjęć z tekstem)
import Image from "next/image";

export function CaseStudiesContentV2() {
  const projects = [
    {
      image: "/images/1.jpg",
      location: "Kielce",
      type: "Parkiet jodełkowy",
      title: "Lustrzane odbicia",
      desc: "Cyklinowanie + 3 warstwy lakieru wysoki połysk.",
      quote: "Nie wiedziałem, że tak może wyglądać",
    },
    {
      image: "/images/4.jpg",
      location: "Dom pod Kielcami",
      type: "Podłoga dębowa",
      title: "Naturalna barwa dębu",
      desc: "Renowacja + lakier satynowy, matowe wykończenie.",
      quote: null,
    },
    {
      image: "/images/5.jpg",
      location: "Kielce, Centrum",
      type: "Mozaika dębowa",
      title: "Parkiet po 25 latach",
      desc: "Cyklinowanie bezpyłowe + szpachlowanie + lakierowanie.",
      quote: "Pan Piotr posiada ogromną wiedzę na temat drewna",
    },
    {
      image: "/images/7.jpg",
      location: "Kielce",
      type: "Parkiet 50-letni",
      title: "50-letnia podłoga jak nowa",
      desc: "Wymiana klepek + uzupełnienia + cyklinowanie + lakierowanie.",
      quote: "Wygląda lepiej niż na początku",
    },
  ];

  return (
    <section className="bg-charcoal text-white px-6 py-24 lg:px-12 lg:py-32" id="realizacje">
      <div className="mx-auto max-w-[1600px]">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <span className="block text-xs font-bold uppercase tracking-widest text-wood mb-4">
            Portfolio
          </span>
          <h2 className="font-serif text-5xl lg:text-6xl mb-6">Efekty mojej pracy</h2>
          <p className="text-white/60 text-lg font-light">
            Różne gatunki drewna, różny stan wyjściowy — ten sam efekt: podłoga jak nowa.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <article
              key={index}
              className="group relative overflow-hidden bg-white/5 hover:bg-white/10 transition-colors duration-500"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
              </div>

              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-white/60">
                    {project.location}
                  </span>
                  <span className="h-px w-6 bg-white/30" />
                  <span className="font-serif italic text-wood text-sm">{project.type}</span>
                </div>

                <h3 className="font-serif text-2xl lg:text-3xl mb-2">{project.title}</h3>
                <p className="text-white/60 text-sm font-light">{project.desc}</p>

                {project.quote && (
                  <p className="mt-4 text-wood italic text-sm border-l-2 border-wood/50 pl-4">
                    "{project.quote}"
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
