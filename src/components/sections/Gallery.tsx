import Image from "next/image";

const galleryItems = [
  {
    src: "/images/1.jpg",
    alt: "Parkiet jodełka klasyczna",
  },
  {
    src: "/images/2.jpg",
    alt: "Renowacja parkietu 30-letniego",
  },
  {
    src: "/images/3.jpg",
    alt: "Parkiet dębowy po lakierowaniu",
  },
  {
    src: "/images/4.jpg",
    alt: "Stary parkiet przed/po",
  },
  {
    src: "/images/5.jpg",
    alt: "Wykończenie przy listwach",
  },
  {
    src: "/images/6.jpg",
    alt: "Parkiet w salonie",
  },
  {
    src: "/images/7.jpg",
    alt: "Detale pracy",
  },
  {
    src: "/images/8.jpg",
    alt: "Efekt końcowy",
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-foreground">
          Efekty mojej pracy
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative aspect-square w-full overflow-hidden rounded-lg bg-muted"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="px-4 text-center text-sm font-medium text-white">
                  {item.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
