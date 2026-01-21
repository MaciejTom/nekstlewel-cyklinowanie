import Image from "next/image";

const images = [
  { src: "/images/1.jpg", alt: "Parkiet jodełka klasyczna" },
  { src: "/images/2.jpg", alt: "Renowacja parkietu 30-letniego" },
  { src: "/images/3.jpg", alt: "Parkiet dębowy po lakierowaniu" },
  { src: "/images/4.jpg", alt: "Stary parkiet przed/po" },
  { src: "/images/5.jpg", alt: "Wykończenie przy listwach" },
  { src: "/images/6.jpg", alt: "Parkiet w salonie" },
  { src: "/images/7.jpg", alt: "Detale pracy" },
  { src: "/images/8.jpg", alt: "Efekt końcowy" },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-16 md:py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-foreground">
            Efekty mojej <span className="text-primary">pracy</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-[700px] mx-auto">
            Zobacz metamorfozy podłóg, które przeszły pod moje maszyny. Od zniszczonych parkietów po lśniące realizacje.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-2xl bg-muted shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4 md:p-6">
                <p className="text-white font-bold text-sm md:text-base transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
