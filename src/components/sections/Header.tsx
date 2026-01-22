export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full mix-blend-difference text-white">
      <div className="mx-auto flex h-24 max-w-[1600px] items-center justify-between px-6 lg:px-12">
        <div className="flex items-center gap-3">
          <span className="font-serif text-2xl font-bold tracking-tighter italic">Pan Piotr.</span>
        </div>
        <nav className="hidden md:flex items-center gap-12">
          <a className="text-xs font-bold uppercase tracking-[0.2em] hover:opacity-70 transition-opacity" href="#case-studies">Realizacje</a>
          <a className="text-xs font-bold uppercase tracking-[0.2em] hover:opacity-70 transition-opacity" href="#uslugi">Usługi</a>
          <a className="text-xs font-bold uppercase tracking-[0.2em] hover:opacity-70 transition-opacity" href="#filozofia">Filozofia</a>
        </nav>
        <a className="group flex items-center gap-2 border border-white/30 px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300" href="#kontakt">
          <span className="text-xs font-bold uppercase tracking-wider">Kontakt</span>
        </a>
      </div>
    </header>
  );
}
