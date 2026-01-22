# Plan migracji: unique-sections.html → Next.js

## Stan obecny vs docelowy

### Obecne komponenty (page.tsx)
```
Hero        → ZASTĄPIĆ nowym hero
StatsBar    → USUNĄĆ (brak w nowym designie)
WhyUs       → ZASTĄPIĆ przez features (2 warianty)
Services    → ZASTĄPIĆ (4 warianty)
Process     → USUNĄĆ (brak w nowym designie)
CaseStudies → ZASTĄPIĆ nowym
Testimonials→ ZASTĄPIĆ nowym
FAQ         → ZASTĄPIĆ nowym
Contact     → ZASTĄPIĆ przez footer
FloatingCTA → USUNĄĆ lub zachować opcjonalnie
```

### Nowe komponenty z unique-sections.html
```
header       (1 wariant)  → NOWY - nawigacja sticky
hero         (1 wariant)  → przepisać
features-v1  (avatar)     → NOWY wariant
features-v2  (grid)       → NOWY wariant
philosophy   (1 wariant)  → NOWY
services-v1  (lista)      → przepisać wariant
services-v2  (karty)      → przepisać wariant
services-v3  (accordion)  → przepisać wariant
services-v4  (grid)       → przepisać wariant
caseStudies  (1 wariant)  → przepisać
testimonials (1 wariant)  → przepisać
faq          (1 wariant)  → przepisać
footer       (1 wariant)  → NOWY - zastępuje Contact
```

---

## Plan wykonania

### FAZA 1: Przygotowanie struktury
**Czas: ~15 min**

- [ ] 1.1 Wyczyścić folder `src/components/sections/`
- [ ] 1.2 Stworzyć nową strukturę folderów:
  ```
  src/components/sections/
  ├── Header.tsx
  ├── Hero.tsx
  ├── features/
  │   ├── FeaturesV1.tsx (avatar)
  │   └── FeaturesV2.tsx (grid)
  ├── Philosophy.tsx
  ├── services/
  │   ├── ServicesV1.tsx (lista)
  │   ├── ServicesV2.tsx (karty z ikonami)
  │   ├── ServicesV3.tsx (accordion)
  │   └── ServicesV4.tsx (grid 3x2)
  ├── CaseStudies.tsx
  ├── Testimonials.tsx
  ├── FAQ.tsx
  └── Footer.tsx
  ```
- [ ] 1.3 Zaktualizować `globals.css` z nowym design systemem

### FAZA 2: Konwersja komponentów identycznych (7 szt)
**Czas: ~30 min | Można równolegle (agenty Haiku)**

| # | Komponent | Źródło HTML | Trudność |
|---|-----------|-------------|----------|
| 1 | Header | `header/header.html` | Łatwa |
| 2 | Hero | `hero/hero.html` | Łatwa |
| 3 | Philosophy | `philosophy/philosophy.html` | Średnia (obrazy) |
| 4 | CaseStudies | `caseStudies/caseStudies.html` | Średnia (obrazy) |
| 5 | Testimonials | `testimonials/testimonials.html` | Łatwa |
| 6 | FAQ | `faq/faq.html` | Łatwa |
| 7 | Footer | `footer/footer.html` | Średnia (mapa) |

### FAZA 3: Konwersja komponentów z wariantami (6 szt)
**Czas: ~45 min | Można równolegle (agenty Haiku)**

| # | Komponent | Źródło HTML | Trudność |
|---|-----------|-------------|----------|
| 1 | FeaturesV1 | `features/features-v1.html` | Średnia (avatar) |
| 2 | FeaturesV2 | `features/features-v2.html` | Łatwa |
| 3 | ServicesV1 | `services/services-v1.html` | Łatwa |
| 4 | ServicesV2 | `services/services-v2.html` | Średnia (ikony) |
| 5 | ServicesV3 | `services/services-v3.html` | Trudna (accordion) |
| 6 | ServicesV4 | `services/services-v4.html` | Średnia |

### FAZA 4: Integracja
**Czas: ~15 min**

- [ ] 4.1 Zaktualizować `page.tsx` z nowymi importami
- [ ] 4.2 Wybrać domyślne warianty (features-v2, services-v2)
- [ ] 4.3 Opcjonalnie: stworzyć stronę `/variants` do porównania

### FAZA 5: Polish & QA
**Czas: ~20 min**

- [ ] 5.1 Sprawdzić responsywność (mobile/tablet/desktop)
- [ ] 5.2 Sprawdzić fonty (Manrope, Playfair Display)
- [ ] 5.3 Sprawdzić ikony (Material Symbols → Lucide)
- [ ] 5.4 Poprawić obrazy (next/image)
- [ ] 5.5 Dodać metadata (SEO)

---

## Konwersja HTML → React (checklist)

Dla każdego komponentu:

```
□ class="" → className=""
□ style="..." → style={{...}} (obiekty JS)
□ <img> → <Image> z next/image
□ <a href> → <Link> dla wewnętrznych linków
□ onclick → onClick
□ for="" → htmlFor=""
□ Material Symbols → Lucide icons lub zachować
□ Inline SVG → komponent lub plik
□ Wyciągnąć dane do stałych/props
□ Dodać TypeScript interface
```

---

## Nowa struktura page.tsx

```tsx
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { FeaturesV2 } from "@/components/sections/features/FeaturesV2";
import { Philosophy } from "@/components/sections/Philosophy";
import { ServicesV2 } from "@/components/sections/services/ServicesV2";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-paper text-charcoal">
      <Header />
      <main>
        <Hero />
        <FeaturesV2 />
        <Philosophy />
        <ServicesV2 />
        <CaseStudies />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
```

---

## Nowy globals.css

```css
@import "tailwindcss";

:root {
  --wood: #CCA383;
  --charcoal: #1a1a1a;
  --paper: #f4f4f0;
  --surface: #ffffff;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: "Manrope", sans-serif;
  background: var(--paper);
  color: var(--charcoal);
}

::selection {
  background: var(--wood);
  color: white;
}

::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background: var(--paper);
}
::-webkit-scrollbar-thumb {
  background: var(--charcoal);
}
```

---

## Strategia wykonania

### Opcja A: Sekwencyjnie (Opus)
- Bezpieczne, kontrolowane
- Wolniejsze (~2h)

### Opcja B: Równolegle (Haiku × 13)
- Szybkie (~30 min)
- Wymaga review na końcu

### Opcja C: Hybrydowa (REKOMENDOWANA)
1. Opus: Faza 1 (przygotowanie)
2. Haiku × 7: Faza 2 (komponenty identyczne) - równolegle
3. Haiku × 6: Faza 3 (komponenty z wariantami) - równolegle
4. Opus: Faza 4-5 (integracja, QA)

---

## Pliki do usunięcia po migracji

```
src/components/sections/StatsBar.tsx
src/components/sections/Process.tsx
src/components/sections/Contact.tsx
src/components/sections/WhyUs.tsx
src/components/sections/Gallery.tsx
src/components/sections/BeforeAfter.tsx
src/components/sections/hero-variations/ (cały folder)
```

---

## Gotowe?

Uruchom migrację komendą:
```
"Zaimplementuj PLAN-MIGRACJI.md - Faza X"
```
