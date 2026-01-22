import Image from "next/image";

const philosophyItems = [
  {
    number: "01",
    label: "Technologia",
    title: "Absolutnie Bezpyłowo.",
    description:
      "Zapomnij o sprzątaniu całego domu. Nasze maszyny Bona pochłaniają 99% pyłu w momencie jego powstawania. To nie jest po prostu szlifowanie – to higiena pracy na poziomie laboratoryjnym.",
    image: "/images/2.jpg",
    imageAlt: "Maszyna do cyklinowania bezpyłowego",
  },
  {
    number: "02",
    label: "Renowacja",
    title: "Ratujemy Historię.",
    description:
      'Specjalizujemy się w "przypadkach beznadziejnych". Przedwojenne parkiety, zalane deski, podłogi spisane na straty – my widzimy w nich potencjał, którego inni nie dostrzegają.',
    image: "/images/3.jpg",
    imageAlt: "Stary parkiet drewniany",
    reversed: true,
  },
];

export function Philosophy() {
  return (
    <section className="bg-midnight py-20 lg:py-40" id="filozofia">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-24 flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-white/10 pb-8">
          <h2 className="font-serif text-5xl lg:text-7xl text-white">
            Dlaczego My?
          </h2>
          <p className="max-w-md text-sm text-gray-400 font-medium uppercase tracking-wide lg:text-right">
            Standardy, które zmieniają branżę.
          </p>
        </div>

        {/* Content grid */}
        <div className="space-y-24 lg:space-y-32">
          {philosophyItems.map((item) => (
            <div
              key={item.number}
              className={`grid gap-12 lg:gap-24 lg:grid-cols-12 items-center ${
                item.reversed ? "" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`lg:col-span-5 ${
                  item.reversed ? "lg:order-2 lg:col-start-8" : ""
                }`}
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-midnight-light group">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>

              {/* Text */}
              <div
                className={`lg:col-span-6 flex flex-col justify-center ${
                  item.reversed
                    ? "lg:order-1 lg:text-right lg:items-end"
                    : "lg:col-start-7"
                }`}
              >
                <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4">
                  {item.number}. {item.label}
                </span>
                <h3 className="mb-6 font-serif text-4xl italic text-white">
                  {item.title}
                </h3>
                <p className="max-w-md text-lg text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
