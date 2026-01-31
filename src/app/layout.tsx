import type { Metadata } from "next";
import "./globals.css";

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
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://lh3.googleusercontent.com" />
        <link rel="dns-prefetch" href="https://lh3.googleusercontent.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
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