export function Philosophy() {
  return (
    <section className="bg-paper px-6 py-24 lg:px-12 lg:py-40" id="filozofia">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-24 flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-black pb-8">
          <h2 className="font-serif text-5xl lg:text-7xl">Dlaczego My?</h2>
          <p className="max-w-md text-sm text-gray-600 font-medium uppercase tracking-wide text-right">Standardy, które zmieniają branżę.</p>
        </div>
        <div className="grid gap-y-24 gap-x-12 lg:grid-cols-12">
          <div className="lg:col-span-5 relative group">
            <div className="aspect-[4/5] w-full overflow-hidden bg-gray-200 grayscale hover:grayscale-0 transition-all duration-700">
              <img alt="Dust free sanding machine" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_XtdsD5jnHKvNSJLhdXvnN1jgWoaeo0XuVOupW5xGrRxXCiyWCsl2WCFXR_8EkJsCGDAAUSNZu9U57POKxEmAQ0oi8PkafKv4i3ULAwelhFNr7Jh7Fh5BALuNvACsezpcC1l05wRkmh-qYgPTNUsPQYS-PR3GWdVPBYtWgzTdTAAWRCjmWnoJW2rXvEx3POTGdfaoroO-Gx4nQyNfL27UyrWC0DBixYWRtQfl-ZH4wJxDfyHVPkgQMhI_UirR1fvcbVEDup4nF7k" />
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center">
            <span className="text-xs font-bold uppercase tracking-widest text-wood mb-4">01. Technologia</span>
            <h3 className="mb-6 font-serif text-4xl italic">Absolutnie Bezpyłowo.</h3>
            <p className="max-w-md text-lg text-gray-600 leading-relaxed">
              Zapomnij o sprzątaniu całego domu. Nasze maszyny Bona pochłaniają 99% pyłu w momencie jego powstawania. To nie jest po prostu szlifowanie – to higiena pracy na poziomie laboratoryjnym.
            </p>
          </div>
          <div className="lg:col-span-5 flex flex-col justify-center lg:text-right order-2 lg:order-1">
            <div className="flex flex-col items-end">
              <span className="text-xs font-bold uppercase tracking-widest text-wood mb-4">02. Renowacja</span>
              <h3 className="mb-6 font-serif text-4xl italic">Ratujemy Historię.</h3>
              <p className="max-w-md text-lg text-gray-600 leading-relaxed">
                Specjalizujemy się w "przypadkach beznadziejnych". Przedwojenne parkiety, zalane deski, podłogi spisane na straty – my widzimy w nich potencjał, którego inni nie dostrzegają.
              </p>
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 order-1 lg:order-2">
            <div className="aspect-square w-full overflow-hidden bg-gray-200 grayscale hover:grayscale-0 transition-all duration-700">
              <img alt="Old wooden floor detail" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8ZAxHvbebUtA9ersQ5CCCWOtYJ82g0kj4fap3q58qVF_DRWuTprpA5w1_lAa9dAiI6hJnnEoGgF0P0cnH65T3Dts_mLwzLZp5npA37l1cTc_Af3I5eKXNRt1ysRZa8TPytJT_rZUgpqMw1GoCbH3uPkLlxtzqqwYKPhfcyQk5ph3Ces9DOV0xlQDGEcDTxkGPTygB4-7trrJtnEnX84zly0xo1w2atY-7HoyIP09xjBsG5f6oc9yjRGr1mA9-ExejkuIwWMSFyIw" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
