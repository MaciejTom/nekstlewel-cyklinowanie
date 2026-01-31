import Image from "next/image";

export function CaseStudiesContent() {
  const projects = [
    {
      image: "/images/1.webp",
      location: "Kielce",
      type: "Parkiet jodełkowy",
      title: "Lustrzane odbicia, widoczny rysunek drewna.",
      desc: "Cyklinowanie + 3 warstwy lakieru wysoki połysk. Właściciel: \"Nie wiedziałem, że tak może wyglądać\".",
      reverse: false,
    },
    {
      image: "/images/4.webp",
      location: "Dom pod Kielcami",
      type: "Podłoga dębowa",
      title: "Naturalna barwa dębu w nowoczesnym wnętrzu.",
      desc: "Renowacja + lakier satynowy. Matowe wykończenie, spójne z nowoczesnym wystrojem.",
      reverse: true,
    },
    {
      image: "/images/5.webp",
      location: "Kielce, Centrum",
      type: "Mozaika dębowa",
      title: "Parkiet po 25 latach jak nowy.",
      desc: "Cyklinowanie bezpyłowe + szpachlowanie + lakierowanie. Klientka: \"Pan Piotr posiada ogromną wiedzę na temat drewna.\"",
      reverse: false,
    },
    {
      image: "/images/7.webp",
      location: "Kielce",
      type: "Parkiet 50-letni",
      title: "50-letnia podłoga odmłodniała o 50 lat.",
      desc: "Wymiana klepek + uzupełnienia + cyklinowanie + lakierowanie. Klient: \"Wygląda lepiej niż na początku.\"",
      reverse: true,
    },
  ];

  return (
    <section className="bg-surface px-6 py-24 lg:px-12 lg:py-40" id="realizacje">
      <div className="mx-auto max-w-[1600px]">
        {/* Header */}
        <div className="mb-24 text-center">
          <h2 className="font-serif text-5xl lg:text-7xl mb-6">Efekty mojej pracy</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Zdjęcia podłóg po renowacji. Każda historia jest inna - różne gatunki drewna,
            różny stan wyjściowy, ten sam efekt: podłoga jak nowa.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <article key={index}>
              <div className={`grid lg:grid-cols-2 gap-12 lg:gap-24 items-center`}>
                {/* Image */}
                <div className={`relative aspect-[4/3] w-full overflow-hidden bg-gray-100 ${project.reverse ? "lg:order-2" : ""}`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    loading="lazy"
                    className="object-cover transition-transform hover:scale-105 duration-[1.5s]"
                  />
                </div>

                {/* Content */}
                <div className={project.reverse ? "lg:order-1 lg:text-right" : ""}>
                  <div className={`mb-6 flex items-center gap-4 ${project.reverse ? "justify-end" : ""}`}>
                    <span className="font-sans text-xs font-bold uppercase tracking-widest text-gray-400">
                      {project.location}
                    </span>
                    <span className="h-px w-8 bg-gray-300" />
                    <span className="font-serif italic text-wood">{project.type}</span>
                  </div>

                  <h3 className="mb-8 font-serif text-3xl lg:text-4xl leading-tight">
                    {project.title}
                  </h3>

                  <p className={`text-lg text-gray-600 leading-relaxed font-light ${project.reverse ? "ml-auto" : ""} max-w-lg`}>
                    {project.desc}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
