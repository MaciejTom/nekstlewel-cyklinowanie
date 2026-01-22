import Image from "next/image";

const caseStudies = [
  {
    id: 1,
    location: "Osiedle Słoneczne, Kielce",
    type: "Renowacja Dębu",
    title: "Drugie życie 40-letniego parkietu.",
    description:
      "Właściciele planowali przykryć ten parkiet panelami. To byłby grzech. Po zeszlifowaniu zniszczonej warstwy lakieru ukazało się zdrowe, piękne drewno dębowe. Zastosowaliśmy lakier Bona Traffic HD Mat, aby zachować naturalny wygląd i zapewnić maksymalną odporność.",
    quote: "Pan Piotr to magik. Nie wierzyliśmy, że to ta sama podłoga.",
    afterImage: "/images/4.jpg",
    beforeImage: "/images/1.jpg",
    reversed: false,
  },
  {
    id: 2,
    location: "Dom pod Kielcami",
    type: "Bielenie Sosny",
    title: "Skandynawska świeżość w starym domu.",
    description:
      "Stara deska sosnowa, pożółkła od czasu i starego lakieru. Klient marzył o jasnym, nowoczesnym wnętrzu. Zastosowaliśmy proces ługowania i olejowania na biało, co optycznie powiększyło przestrzeń i nadało jej lekkości.",
    quote: "Efekt przeszedł nasze oczekiwania. Podłoga wygląda nowocześnie i świeżo.",
    afterImage: "/images/5.jpg",
    beforeImage: "/images/3.jpg",
    reversed: true,
  },
];

export function CaseStudies() {
  return (
    <section className="bg-midnight-dark py-20 lg:py-40 border-t border-white/5" id="case-studies">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-24 font-serif text-6xl lg:text-8xl text-center text-white">
          Case Studies
        </h2>

        <div className="space-y-32">
          {caseStudies.map((study) => (
            <article key={study.id}>
              <div
                className={`grid lg:grid-cols-2 gap-12 lg:gap-24 items-center ${
                  study.reversed ? "" : ""
                }`}
              >
                {/* Image with polaroid before */}
                <div
                  className={`relative aspect-[4/3] w-full overflow-hidden bg-midnight-light group ${
                    study.reversed ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={study.afterImage}
                    alt={`${study.title} - po renowacji`}
                    fill
                    className="object-cover transition-transform group-hover:scale-105 duration-[1.5s]"
                  />

                  {/* Before polaroid */}
                  <div
                    className={`absolute w-32 aspect-square border-2 border-white overflow-hidden shadow-lg bg-white transition-transform hover:rotate-0 ${
                      study.reversed
                        ? "bottom-6 right-6 rotate-3"
                        : "top-6 left-6 -rotate-3"
                    }`}
                  >
                    <Image
                      src={study.beforeImage}
                      alt={`${study.title} - przed renowacją`}
                      fill
                      className="object-cover grayscale"
                    />
                    <div className="absolute bottom-0 w-full bg-black/60 text-white text-[10px] text-center py-1 uppercase font-bold">
                      Przed
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={study.reversed ? "lg:order-1 lg:text-right" : ""}>
                  <div
                    className={`mb-6 flex items-center gap-4 ${
                      study.reversed ? "justify-end" : ""
                    }`}
                  >
                    {study.reversed ? (
                      <>
                        <span className="font-serif italic text-primary">
                          {study.type}
                        </span>
                        <span className="h-px w-8 bg-white/20" />
                        <span className="font-sans text-xs font-bold uppercase tracking-widest text-gray-500">
                          {study.location}
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="font-sans text-xs font-bold uppercase tracking-widest text-gray-500">
                          {study.location}
                        </span>
                        <span className="h-px w-8 bg-white/20" />
                        <span className="font-serif italic text-primary">
                          {study.type}
                        </span>
                      </>
                    )}
                  </div>

                  <h3 className="mb-8 font-serif text-4xl lg:text-5xl leading-tight text-white">
                    {study.title}
                  </h3>

                  <p
                    className={`mb-8 text-lg text-gray-400 leading-relaxed font-light ${
                      study.reversed ? "ml-auto" : ""
                    }`}
                  >
                    {study.description}
                  </p>

                  <blockquote
                    className={`italic text-gray-500 ${
                      study.reversed
                        ? "border-r-2 border-primary pr-6"
                        : "border-l-2 border-primary pl-6"
                    }`}
                  >
                    &ldquo;{study.quote}&rdquo;
                  </blockquote>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
