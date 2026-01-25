export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full pointer-events-none">
      <div className="mx-auto flex h-24 max-w-[1600px] items-center justify-between px-6 lg:px-12 text-white">
        <div className="flex items-center gap-3 pointer-events-auto">
          <span className="font-serif text-2xl font-bold tracking-tighter italic">Pan Piotr.</span>
        </div>

        <nav className="hidden md:flex items-center gap-10 px-8 py-3 rounded-full bg-black/20 backdrop-blur-md border border-white/10 pointer-events-auto">
          <a className="text-[10px] font-bold uppercase tracking-[0.2em] hover:text-wood transition-colors" href="#realizacje">Realizacje</a>
          <a className="text-[10px] font-bold uppercase tracking-[0.2em] hover:text-wood transition-colors" href="#uslugi">Usługi</a>
          <a className="text-[10px] font-bold uppercase tracking-[0.2em] hover:text-wood transition-colors" href="#opinie">Opinie</a>
        </nav>

        <a className="group flex items-center gap-2 border border-white/20 bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300 pointer-events-auto" href="#kontakt">
          <span className="text-xs font-bold uppercase tracking-wider">Kontakt</span>
        </a>
      </div>
    </header>
  );
}
