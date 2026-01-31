import { IconSchedule, IconLocationOn, IconMap } from "@/components/icons";

export function FooterContent() {
  return (
    <footer className="bg-charcoal text-white pt-24 pb-12 px-6 lg:px-12" id="kontakt">
      <div className="mx-auto max-w-[1600px]">
        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
          {/* Left - Contact */}
          <div>
            <h2 className="font-serif text-4xl lg:text-5xl mb-8">Zadzwoń lub napisz</h2>
            <p className="text-gray-400 text-lg mb-12 max-w-md leading-relaxed">
              Wycena bezpłatna. Powiedz jaki masz metraż i w jakim stanie jest podłoga - powiem ile to potrwa i ile będzie kosztować.
            </p>

            {/* Phone - Big CTA */}
            <a
              href="tel:511692325"
              className="block font-serif text-5xl sm:text-6xl lg:text-7xl leading-none hover:text-wood transition-colors mb-12"
            >
              511 692 325
            </a>

            {/* Details */}
            <div className="space-y-4 text-gray-400">
              <div className="flex items-center gap-3">
                <IconSchedule className="w-6 h-6 text-wood" />
                <span>Elastyczne godziny - zadzwoń, umówimy się</span>
              </div>
              <div className="flex items-center gap-3">
                <IconLocationOn className="w-6 h-6 text-wood" />
                <span>Kielce, ul. Turystyczna</span>
              </div>
              <div className="flex items-center gap-3">
                <IconMap className="w-6 h-6 text-wood" />
                <span>Zasięg: Kielce i okolice</span>
              </div>
            </div>
          </div>

          {/* Right - Map placeholder */}
          <div className="relative aspect-square lg:aspect-auto lg:h-full min-h-[400px] bg-charcoal/50 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d80516.46614881078!2d20.543844399999998!3d50.8660773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4718234627d5e825%3A0x848dc49e75c31c89!2sKielce!5e0!3m2!1spl!2spl!4v1706000000000!5m2!1spl!2spl"
              className="absolute inset-0 w-full h-full border-0 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <span className="font-serif text-2xl font-bold tracking-tighter italic">Pan Piotr.</span>
            <span className="text-gray-500 text-sm">Cyklinowanie bezpyłowe Kielce</span>
          </div>
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Wszelkie prawa zastrzeżone
          </div>
        </div>
      </div>
    </footer>
  );
}
