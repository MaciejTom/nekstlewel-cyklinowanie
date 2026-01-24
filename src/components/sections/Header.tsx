export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-6 lg:px-12">
        <div className="flex items-center gap-3">
          <span className="font-serif text-2xl font-bold tracking-tighter italic text-charcoal">Pan Piotr.</span>
        </div>

        <nav className="hidden md:flex items-center gap-10 px-8 py-3 rounded-full bg-charcoal text-white">
          <a className="text-[10px] font-bold uppercase tracking-[0.2em] hover:text-wood transition-colors" href="#case-studies">Realizacje</a>
          <a className="text-[10px] font-bold uppercase tracking-[0.2em] hover:text-wood transition-colors" href="#uslugi">Usługi</a>
          <a className="text-[10px] font-bold uppercase tracking-[0.2em] hover:text-wood transition-colors" href="#proces">Proces</a>
        </nav>

        <a className="group flex items-center gap-2 bg-wood text-white px-6 py-2 rounded-full hover:bg-wood/90 transition-all duration-300" href="tel:511692325">
          <span className="text-xs font-bold uppercase tracking-wider">511 692 325</span>
        </a>
      </div>
    </header>
  );
}
