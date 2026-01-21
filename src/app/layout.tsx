import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Cyklinowanie bezpyłowe Kielce | Pan Piotr - 4.9★ na 50 opinii",
  description: "Cyklinowanie bez kurzu w Kielcach. Renowacja starych parkietów, lakierowanie, naprawy. 50 opinii 4.9★. Bezpłatna wycena - zadzwoń: 511 692 325",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${nunito.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
