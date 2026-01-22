export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA94GyGi2mqej2PNsu-5SYNBbEybAsT40qfv2rOEUdajN7W_wZkJAfbUiLZIvBBmO4C0OYFQKcaqWw-Zhkcp1ey8cZq2bBzOpJTqZYEe_xeuAvE6__azTz4dZzs3xWvWW5Th4IUIHhwNl1ygR9i0Lv9rqEeQ5s9UygsrF2-W83H_Oero6-jqIp4m8P59-FUqyfvgLXgbiAJuFdbhHdZ-HwyXu49TdaSwpmXjdgUaKk-kzvzgmiPRxs4GyF6wlOue_XEwCdiEozsNpU")',
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      <div className="absolute bottom-0 left-0 h-full w-full max-w-[1600px] mx-auto px-6 lg:px-12 pointer-events-none flex flex-col justify-end pb-12 lg:pb-24">
        <div className="max-w-4xl pointer-events-auto">
          <div className="mb-6 flex items-center gap-4 text-white/90">
            <span className="h-[1px] w-12 bg-white"></span>
            <span className="font-serif italic text-lg">Od 2004 roku w Kielcach</span>
          </div>
          <h1 className="font-serif text-6xl text-white sm:text-7xl lg:text-9xl leading-[0.9] lg:leading-[0.85] tracking-tight">
            <span className="block font-medium italic">Twój parkiet</span>
            <span className="block font-black not-italic">Jak Nowy.</span>
          </h1>
          <p className="mt-8 max-w-lg text-lg text-white/90 font-light leading-relaxed">
            Sztuka renowacji podłóg bez zbędnego kurzu. Przywracamy duszę drewnianym wnętrzom, łącząc
            rzemieślniczą precyzję z nowoczesną technologią Bona.
          </p>
          <div className="mt-10 flex gap-6">
            <a
              className="border-b border-white pb-1 text-white text-lg hover:border-wood hover:text-wood transition-colors font-serif italic"
              href="tel:511692325"
            >
              Zadzwoń: 511 692 325
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}