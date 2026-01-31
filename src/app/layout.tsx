import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin-ext"],
  weight: ["400", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin-ext"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pan Piotr - Premium Cyklinowanie Bezpyłowe Kielce",
  description: "Specjalistyczna renowacja podłóg drewnianych w Kielcach. Technologia bezpyłowa klasy premium. 4.9★ na 50 opinii. Zadzwoń: 511 692 325",
  keywords: "cyklinowanie, bezpyłowe, kielce, parkiet, renowacja, lakierowanie",
  openGraph: {
    title: "Pan Piotr - Premium Cyklinowanie Bezpyłowe Kielce",
    description: "Specjalistyczna renowacja podłóg drewnianych. Technologia bezpyłowa klasy premium.",
    locale: "pl_PL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${manrope.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        {/* Material Symbols loaded async - not render blocking */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL@24,400,0&display=swap"
          as="style"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL@24,400,0&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}