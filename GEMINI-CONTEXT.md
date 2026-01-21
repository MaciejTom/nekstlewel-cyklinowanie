# Context dla Gemini - Cyklinowanie Website

## Cel
Zbuduj landing page dla firmy "Cyklinowanie bezpyłowe" (Pan Piotr, Kielce).

## Stack technologiczny
- Next.js 16 + React 19
- Tailwind CSS 4
- shadcn/ui components (button, card, input już zainstalowane)
- Lucide React icons

## Design Tokens (globals.css)

```css
--primary: #8b5a2b;           /* Oak Brown - główny */
--primary-foreground: #ffffff;
--secondary: #d4a574;         /* Light Wood - akcent */
--background: #fffbf5;        /* Kremowe tło */
--foreground: #1c1410;        /* Ciemny tekst */
--muted: #fdf6ed;
--muted-foreground: #6b5b4f;
--border: #e8ddd0;
--radius: 0.75rem;
--font-sans: 'Nunito';
```

**Direction:** WARM (ciepłe, osobiste, B2C)

## Brand Voice

**Używaj:**
- "bezpyłowo", "bez kurzu"
- "Twój parkiet", "Pan Piotr"
- "jak nowy"
- Konkretne liczby: 50 opinii, 4.9★

**Unikaj:**
- "kompleksowe usługi"
- "profesjonalna firma"
- pustych obietnic

## Sekcje do zbudowania (w tej kolejności)

### 1. HERO
```
H1: Twój parkiet jak nowy. Bez kurzu.
Subheadline: Pan Piotr przywraca życie starym podłogom od lat.
             50 opinii, 4.9 gwiazdek. Kielce i okolice.
CTA Primary: Zadzwoń: 511 692 325
CTA Secondary: Wyślij zdjęcie do wyceny
Social proof: 4.9★ na 50 opinii | Bezpyłowe maszyny | Parkiety 20-50 lat
Zdjęcie: /images/1.jpg (parkiet jodełka)
```

### 2. DLACZEGO MY (USP)
```
H2: Cyklinuję bez kurzu - nie musisz sprzątać po mnie

USP 1: Bezpyłowo naprawdę
USP 2: Stare parkiety to moja specjalność (20-50 lat)
USP 3: Wiem co robię z drewnem
USP 4: Naprawiam po innych firmach
```

### 3. USŁUGI
```
H2: Co mogę zrobić dla Twojej podłogi

1. Cyklinowanie bezpyłowe
2. Lakierowanie (mat/połysk)
3. Renowacja starych parkietów
4. Naprawy i uzupełnienia
5. Listwy przypodłogowe
```

### 4. JAK PRACUJĘ (Proces)
```
H2: Od telefonu do nowej podłogi

1. Kontakt i wycena → bezpłatna
2. Termin → punktualność
3. Praca → czysto
4. Odbiór i wskazówki
```

### 5. REALIZACJE (Galeria)
```
H2: Efekty mojej pracy
Zdjęcia: /images/1.jpg do /images/8.jpg
Każde z krótkim opisem efektu
```

### 6. OPINIE
```
H2: Co mówią klienci

5 opinii z Google:
- Marcin Stroński: "Świetny specjalista..."
- Adam Łącki: "Bardzo dokładnie, podłogi jak nowe..."
- Hanna Kozioł: "50-letni parkiet odmłodniał o 50 lat..."
- Tomasz Pisiewicz: "Wymiana klepek... 50-letnia podłoga jak nowa!"
- Agnieszka Krężołek: "Uratował mi parkiet po poprzedniej firmie..."
```

### 7. FAQ
```
H2: Najczęściej zadawane pytania

Q: Czy naprawdę jest bezpyłowo?
Q: Ile trwa cyklinowanie?
Q: Kiedy można stawiać meble?
Q: Mam bardzo stary parkiet - da się uratować?
Q: Poprzednia firma źle zrobiła - naprawisz?
Q: Ile to kosztuje?
```

### 8. KONTAKT
```
H2: Zadzwoń lub napisz

Telefon: 511 692 325
Adres: Kielce, ul. Turystyczna
Zasięg: Kielce i okolice
```

## Struktura plików

```
src/
├── app/
│   ├── page.tsx          # Główna strona (importuje sekcje)
│   └── globals.css       # Tokeny (GOTOWE)
├── components/
│   ├── ui/               # shadcn (GOTOWE)
│   └── sections/         # DO ZBUDOWANIA
│       ├── Hero.tsx
│       ├── WhyUs.tsx
│       ├── Services.tsx
│       ├── Process.tsx
│       ├── Gallery.tsx
│       ├── Testimonials.tsx
│       ├── FAQ.tsx
│       └── Contact.tsx
```

## Instrukcje dla Gemini

1. **Buduj sekcja po sekcji** - nie wszystko naraz
2. **Używaj Tailwind classes** zgodnych z tokenami (bg-primary, text-foreground, etc.)
3. **Używaj shadcn components** gdzie pasuje (Button, Card)
4. **Mobile-first** - responsywne
5. **Po każdej sekcji** - pokaż efekt i czekaj na feedback

## Rozpocznij od:
Stwórz komponent `Hero.tsx` w `src/components/sections/`
