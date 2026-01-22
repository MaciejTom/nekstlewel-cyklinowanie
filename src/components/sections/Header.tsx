"use client";

import Link from "next/link";
import { Phone, Hammer } from "lucide-react";

const navLinks = [
  { href: "#uslugi", label: "Usługi" },
  { href: "#proces", label: "Proces" },
  { href: "#realizacje", label: "Realizacje" },
  { href: "#opinie", label: "Opinie" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-midnight-dark/95 backdrop-blur-md border-b border-white/10 shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex items-center justify-center rounded-full border border-primary/30 bg-midnight p-2 text-primary">
              <Hammer className="h-6 w-6" />
            </div>
            <h2 className="text-xl font-serif font-bold leading-tight tracking-wide text-white">
              Pan <span className="text-primary">Piotr</span>
            </h2>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm uppercase tracking-widest text-gray-300 hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="flex gap-4">
            <a
              href="tel:511692325"
              className="hidden sm:flex h-11 items-center justify-center rounded-sm bg-primary px-6 text-sm font-bold uppercase tracking-wider text-midnight shadow-[0_0_15px_rgba(212,165,116,0.3)] transition-all hover:bg-primary-light hover:shadow-[0_0_20px_rgba(212,165,116,0.5)] active:scale-95"
            >
              <Phone className="mr-2 h-4 w-4" />
              Zadzwoń
            </a>
            <Link
              href="#kontakt"
              className="flex h-11 items-center justify-center rounded-sm border border-primary/30 bg-transparent px-6 text-sm font-bold uppercase tracking-wider text-primary hover:bg-primary/10 transition-colors"
            >
              Wycena
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
