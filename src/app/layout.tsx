import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "latin-ext"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
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
    <html lang="pl">
      <body className={`${manrope.variable} ${playfair.variable} font-sans antialiased selection:bg-primary selection:text-midnight-dark`}>
        {children}
      </body>
    </html>
  );
}
