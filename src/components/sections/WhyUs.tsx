import { Wind, Wrench, FlaskConical, CircleCheck } from "lucide-react";

const features = [
  {
    icon: Wind,
    title: "Czystość Absolutna",
    description:
      "Systemy Bona pochłaniają 99% pyłu. Twoje ściany, meble i zasłony pozostają nieskazitelnie czyste.",
  },
  {
    icon: Wrench,
    title: "Ekspert od Staroci",
    description:
      "Przywracamy świetność przedwojennym parkietom, traktując każdą klepkę z należytą uwagą.",
  },
  {
    icon: FlaskConical,
    title: "Alchemia Drewna",
    description:
      "Dobieramy lakiery i oleje idealnie do gatunku drewna, aby wydobyć jego szlachetny rysunek.",
  },
  {
    icon: CircleCheck,
    title: "Mistrzowska Korekta",
    description:
      "Skutecznie naprawiamy błędy poprzednich ekip, niwelując wszelkie nierówności.",
  },
];

export function WhyUs() {
  return (
    <section className="py-20 sm:py-32 bg-midnight relative overflow-hidden">
      {/* Decorative blur */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif text-white sm:text-5xl mb-6">
            <span className="text-primary italic">Rzemiosło</span> spotyka
            technologię
          </h2>
          <p className="text-lg font-light text-gray-400">
            Renowacja podłogi nie musi oznaczać remontu całego domu. Nasz proces
            łączy tradycyjne stolarstwo z nowoczesnymi systemami bezpyłowymi.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative p-8 bg-midnight-light border border-white/5 hover:border-primary/40 transition-all duration-500 rounded-sm hover:-translate-y-2"
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full border border-primary/20 bg-midnight text-primary shadow-[0_0_15px_rgba(212,165,116,0.1)] group-hover:shadow-[0_0_20px_rgba(212,165,116,0.3)] transition-shadow">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-serif text-white">
                  {feature.title}
                </h3>
                <p className="text-sm font-light leading-relaxed text-gray-400">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
