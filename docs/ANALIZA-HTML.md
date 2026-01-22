# Analiza HTML - Pan Piotr Cyklinowanie

## Podsumowanie

Przeanalizowano 5 plików HTML z folderu `C:\Nekst Lewel\Klienci\Cyklinowanie\HTML\`

### Pliki źródłowe:
- stitch_pan_piotr_cyklinowanie_bezpy_owe_landing_page (4).zip
- stitch_pan_piotr_cyklinowanie_bezpy_owe_landing_page (5).zip
- stitch_pan_piotr_cyklinowanie_bezpy_owe_landing_page (6).zip
- stitch_pan_piotr_cyklinowanie_bezpy_owe_landing_page (7).zip
- stitch_pan_piotr_cyklinowanie_bezpy_owe_landing_page (8).zip

---

## Design System (wspólny dla wszystkich)

### Kolory:
```css
--wood: #CCA383;        /* akcent główny (brązowy/złoty) */
--charcoal: #1a1a1a;    /* tekst, ciemne tło */
--paper: #f4f4f0;       /* tło jasne */
--surface: #ffffff;     /* tło białe */
--primary: #19e65e;     /* zielony (nieużywany) */
```

### Fonty:
- **Sans**: Manrope (200-800)
- **Serif**: Playfair Display (400, 600, 700 + italic)
- **Ikony**: Material Symbols Outlined

### Scrollbar:
```css
width: 6px;
track: #f4f4f0;
thumb: #1a1a1a;
```

---

## Sekcje IDENTYCZNE (7 komponentów)

| Sekcja | ID | Opis |
|--------|-----|------|
| Header | - | Fixed navbar, mix-blend-difference, logo "Pan Piotr." |
| Hero | - | Fullscreen, background image, H1 "Twój parkiet Jak Nowy." |
| Philosophy | #filozofia | "Dlaczego My?" - 2 bloki (Technologia + Renowacja) z obrazami |
| CaseStudies | #case-studies | 2 artykuły before/after (Dąb 40-letni, Sosna bielona) |
| Testimonials | - | 2 opinie (Marek Kowalski, Anna Nowak), hover opacity |
| FAQ | - | 4 pytania-odpowiedzi (statyczne, bez accordion) |
| Footer | #kontakt | Duży telefon, email, mapa, social links |

---

## Sekcje z WARIANTAMI

### Features/USP Section (2 warianty)

#### FeaturesV1 (plik #4)
- **Layout**: Avatar "PP" po lewej + 4 karty z ikonami (2x2 grid) po prawej
- **Nagłówek**: "Cyklinuję bez kurzu - nie musisz po mnie sprzątać."
- **Elementy**: Avatar z inicjałami, cytat, podpis "Pan Piotr"
- **Ikony**: air, texture, handyman, healing

#### FeaturesV2 (pliki #5, #6, #7, #8)
- **Layout**: Duży nagłówek centered + 4 karty w rzędzie (grid 4 kolumny)
- **Nagłówek**: "Cyklinuję bez kurzu — nie musisz po mnie sprzątać."
- **Elementy**: Numeracja 01-04, hover translate-x, SVG pattern w tle

---

### Services Section (4 warianty)

#### ServicesListV1 (pliki #4, #8)
- **Layout**: 2 kolumny (tytuł po lewej, lista po prawej)
- **Styl**: Lista ul/li, hover → italic + arrow_outward
- **Usługi**: 5 pozycji (Cyklinowanie, Lakierowanie, Uzupełnianie, Listwy, Barwienie)

#### ServicesCardsV2 (plik #5)
- **Layout**: Grid 6 kolumn (3+3, 2+2+2)
- **Styl**: Karty z ikonami Material, hover → bg-white
- **Ikony**: air, format_paint, history, healing, straighten
- **Usługi**: 5 pozycji z opisami

#### ServicesAccordionV3 (plik #6)
- **Layout**: Lista pionowa, full-width
- **Styl**: Accordion - opisy rozwijane na hover (grid-rows animation)
- **Animacje**: translate-x na tytule, opacity na numerze, arrow_forward
- **Usługi**: 5 pozycji z rozwijalnymi opisami

#### ServicesGridV4 (plik #7)
- **Layout**: Grid 3 kolumny (3x2)
- **Styl**: Karty z border, hover → border-wood, arrow_right_alt
- **Usługi**: 5 pozycji z opisami (min-h-320px)

---

## Struktura komponentów Next.js

```
src/components/sections/
├── Header.tsx
├── Hero.tsx
├── Philosophy.tsx
├── CaseStudies.tsx
├── Testimonials.tsx
├── FAQ.tsx
├── Footer.tsx
│
├── features/
│   ├── FeaturesV1.tsx      # Avatar + karty (z #4)
│   └── FeaturesV2.tsx      # 4 karty grid (z #5-8)
│
└── services/
    ├── ServicesListV1.tsx      # Lista prosta (z #4, #8)
    ├── ServicesCardsV2.tsx     # Karty z ikonami (z #5)
    ├── ServicesAccordionV3.tsx # Accordion (z #6)
    └── ServicesGridV4.tsx      # Grid 3x2 (z #7)
```

**Razem: 13 komponentów**

---

## Mapowanie plików źródłowych

| Plik | Features | Services |
|------|----------|----------|
| #4 | FeaturesV1 (avatar) | ServicesListV1 (lista) |
| #5 | FeaturesV2 (grid) | ServicesCardsV2 (karty z ikonami) |
| #6 | FeaturesV2 (grid) | ServicesAccordionV3 (accordion) |
| #7 | FeaturesV2 (grid) | ServicesGridV4 (grid 3x2) |
| #8 | FeaturesV2 (grid) | ServicesListV1 (lista) |
