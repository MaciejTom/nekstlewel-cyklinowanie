# PageSpeed Optimizations - Cyklinowanie Website

## Wyniki
| Metryka | Przed | Po |
|---------|-------|-----|
| Mobile Performance | 57 | ~85+ |
| Desktop Performance | 85 | ~95+ |
| FCP (Mobile) | 8.0s | ~2s |
| LCP (Mobile) | 8.9s | ~2.5s |

---

## 1. Optymalizacja obrazów (największy impact)

### Problem
- 9 obrazów JPG w `/public/images/` = **15 MB**
- Brak `sizes` prop na `<Image>` = przeglądarka pobiera za duże obrazy
- Hero używał CSS `background-image` zamiast `next/image`

### Rozwiązanie
```bash
# Konwersja JPG -> WebP za pomocą sharp
node -e "
const sharp = require('sharp');
sharp('./public/images/1.jpg')
  .webp({ quality: 80 })
  .resize({ width: 1200, withoutEnlargement: true })
  .toFile('./public/images/1.webp');
"
```

### Zmiany w kodzie
```tsx
// PRZED - brak sizes, brak lazy
<Image src="/images/1.jpg" alt="..." fill />

// PO - z sizes i lazy loading
<Image
  src="/images/1.webp"
  alt="..."
  fill
  sizes="(max-width: 1024px) 100vw, 50vw"
  loading="lazy"
/>
```

### Hero z priority (LCP)
```tsx
// PRZED - CSS background (nie optymalizowane)
<div style={{ backgroundImage: 'url(...)' }} />

// PO - next/image z priority
<Image
  src="/images/hero.webp"
  alt="..."
  fill
  priority
  quality={90}
  sizes="100vw"
/>
```

### Wynik
- **15 MB → 780 KB** (95% mniejsze)
- Hero ładuje się jako pierwszy (priority)

---

## 2. next.config.ts - Optymalizacja obrazów

```ts
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [...],
    formats: ["image/avif", "image/webp"],  // Nowoczesne formaty
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 31536000,  // 1 rok cache
  },
};
```

---

## 3. Fonty - next/font zamiast Google Fonts link

### Problem
- Google Fonts link = render-blocking
- Ładowanie wszystkich wag fontów (200-800)

### Rozwiązanie
```tsx
// PRZED - render-blocking
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800..." rel="stylesheet" />

// PO - next/font (self-hosted, nie blokuje)
import { Manrope, Playfair_Display } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin-ext"],  // tylko potrzebne znaki (polskie)
  weight: ["400", "600", "700"],  // tylko używane wagi
  variable: "--font-manrope",
  display: "swap",
});
```

### CSS
```css
@theme {
  --font-family-sans: var(--font-manrope), "Manrope", sans-serif;
  --font-family-serif: var(--font-playfair), "Playfair Display", serif;
}
```

---

## 4. Ikony - Inline SVG zamiast font libraries

### Problem
- `lucide-react` = ~40 KB (używane tylko 4 ikony)
- Material Symbols font = **301 KB** (używane tylko 8 ikon)

### Rozwiązanie

#### Usunięcie lucide-react
```bash
npm uninstall lucide-react
```

#### Własne komponenty SVG (`src/components/icons.tsx`)
```tsx
type IconProps = { className?: string };

export const IconPhone = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.62 10.79c1.44 2.83..."/>
  </svg>
);

export const IconArrowForward = ({ className }: IconProps) => (...);
export const IconSchedule = ({ className }: IconProps) => (...);
export const IconLocationOn = ({ className }: IconProps) => (...);
export const IconMap = ({ className }: IconProps) => (...);
export const IconFormatQuote = ({ className }: IconProps) => (...);
export const IconAdd = ({ className }: IconProps) => (...);
export const IconArrowOutward = ({ className }: IconProps) => (...);
```

#### Użycie w komponentach
```tsx
// PRZED
<span className="material-symbols-outlined">phone</span>

// PO
import { IconPhone } from "@/components/icons";
<IconPhone className="w-5 h-5" />
```

### Wynik
- **341 KB oszczędności** (40 KB lucide + 301 KB Material Symbols)

---

## 5. Preconnect i DNS Prefetch

```tsx
<head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
  <link rel="dns-prefetch" href="https://lh3.googleusercontent.com" />
</head>
```

---

## 6. Layout.tsx - Finalna wersja

```tsx
import { Manrope, Playfair_Display } from "next/font/google";

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

export default function RootLayout({ children }) {
  return (
    <html lang="pl" className={`${manrope.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
```

---

## Checklist na przyszłość

### Obrazy
- [ ] Używaj WebP/AVIF zamiast JPG/PNG
- [ ] Dodawaj `sizes` prop do wszystkich `<Image>`
- [ ] Używaj `priority` tylko dla above-the-fold (hero)
- [ ] Używaj `loading="lazy"` dla below-the-fold
- [ ] Kompresuj obrazy (quality 80-90)
- [ ] Max szerokość 1920px dla full-width

### Fonty
- [ ] Używaj `next/font` zamiast Google Fonts link
- [ ] Ładuj tylko potrzebne wagi (400, 600, 700)
- [ ] Używaj `latin-ext` dla polskich znaków
- [ ] `display: "swap"` dla FOUT zamiast FOIT

### Ikony
- [ ] Nie używaj font libraries (Material Icons, Font Awesome)
- [ ] Używaj inline SVG lub dedykowane komponenty
- [ ] Jeśli używasz library, importuj pojedyncze ikony

### JavaScript
- [ ] Usuwaj nieużywane dependencies
- [ ] Lazy load komponentów below-the-fold (dynamic imports)
- [ ] Sprawdzaj bundle size (`npm run build`)

### Narzędzia
- PageSpeed Insights: https://pagespeed.web.dev/
- WebPageTest: https://www.webpagetest.org/
- Lighthouse (Chrome DevTools)

---

## Commits

1. `7b1932d` - Obrazy WebP, preconnect, usunięcie lucide-react
2. `66adbdc` - next/font zamiast Google Fonts link
3. `943888f` - Inline SVG zamiast Material Symbols (-301KB)
