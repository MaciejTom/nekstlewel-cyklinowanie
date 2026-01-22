export function Footer() {
  return (
    <footer className="bg-charcoal text-white pt-24 pb-12 px-6 lg:px-12" id="kontakt">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-24">
          <div>
            <span className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Kontakt</span>
            <a className="block font-serif text-6xl sm:text-8xl lg:text-[9rem] leading-none hover:text-wood transition-colors mb-8" href="tel:511692325">
              511 692 325
            </a>
            <a className="text-xl lg:text-2xl text-gray-400 hover:text-white transition-colors border-b border-transparent hover:border-white inline-block pb-1" href="mailto:kontakt@panpiotr.pl">
              kontakt@panpiotr.pl
            </a>
            <div className="mt-12 text-gray-400">
              <p className="uppercase tracking-widest text-xs font-bold mb-2">Lokalizacja</p>
              <p className="font-serif text-2xl">Kielce, ul. Sienkiewicza</p>
              <p className="text-sm mt-1">(Dojazd do klienta w całym województwie)</p>
            </div>
          </div>
          <div className="h-[400px] w-full rounded-sm overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 relative">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBCT42iLfU20l5MToYMTLPjB6w0rWxDnyozwOdi62EZRji3-ggpXscqaYrgtEnRXSWLNusAuPNQLvH_xYz0ABNk7VQiTjGGtYUQgtCuVkZXKA6xfsLg33yZqhmEong22LoPlVcnToNbNCYX_ObsEXsEN0jr7cD7NhDx14AQo72Rkn9XYKBZCrGPaXXoX_Kq9Q4F8RPGFHstV0lU4C4xlF863C5qN7tpWM1JYQF-b97PAyJ72mcbKDE1wNKDUS0Dqc8L5t5KhGt5bRQ')" }}></div>
            <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-colors"></div>
            <div className="absolute bottom-6 left-6 bg-white text-black px-4 py-2 font-bold text-xs uppercase tracking-widest">Obszar działania</div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-8 text-xs text-gray-500 uppercase tracking-widest">
          <p>© 2024 Pan Piotr Cyklinowanie</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a className="hover:text-white transition-colors" href="#">Instagram</a>
            <a className="hover:text-white transition-colors" href="#">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
