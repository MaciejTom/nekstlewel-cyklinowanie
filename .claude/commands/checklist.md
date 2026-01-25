Przeprowadź audyt strony DEMO przed pokazaniem klientowi.

## Kroki:

### 1. Build
```bash
npm run build
```
Sprawdź czy przechodzi bez błędów i brak warningów TypeScript.

### 2. Content Matching
Porównaj `output/4-content.md` z komponentami w `src/components/sections/content/`:
- Przeczytaj content.md
- Przeczytaj każdy komponent
- Sprawdź czy teksty się zgadzają
- Sprawdź brak lorem ipsum / placeholder

### 3. Linki i Nawigacja
- Wszystkie `href="#..."` w Header mają odpowiadające `id="..."` w sekcjach
- Linki `tel:` poprawny format
- Linki `mailto:` poprawny format
- Logo linkuje do strony głównej
- Brak broken links

### 4. Obrazki
- Wszystkie `<Image>` mają `alt`
- Pliki istnieją w `public/images/`
- Brak placeholder obrazków (picsum, unsplash random)
- Obrazki się ładują

### 5. SEO
Sprawdź `app/layout.tsx`:
- `<title>` ustawiony
- `metadata.description` ustawiony
- Open Graph tagi (og:title, og:description, og:image)
- Favicon ustawiony

### 6. Responsywność
Sprawdź czy layout nie jest zepsuty na:
- Mobile 375px
- Tablet 768px
- Desktop 1440px
- Brak horizontal scroll na mobile

### 7. Dostępność
- Kontrast tekstu czytelny
- Focus states widoczne na linkach/buttonach
- Nawigacja Tab działa

### 8. Kod
- Brak `console.log` w kodzie produkcyjnym
- Brak hardcodowanych `localhost`
- Brak błędów w konsoli przeglądarki

### 9. Formularze (tylko frontend)
- Pola formularza wyświetlają się poprawnie
- Walidacja wizualna działa (required, format email)
- Placeholder/label są opisowe

### 10. Pliki dodatkowe
- robots.txt istnieje
- sitemap.xml istnieje (lub będzie generowany)

---

## Output Format

```
## Checklist DEMO Report

### Build
- [ ] Build przechodzi bez błędów
- [ ] Brak warningów TypeScript

### Content (X/Y sekcji)
- [ ] Hero - OK/BRAK
- [ ] Features - OK/BRAK
...

### Linki
- [ ] Nav #realizacje → id="realizacje" OK
- [ ] Nav #uslugi → id="uslugi" OK
...

### Obrazki (X/Y)
- [ ] Wszystkie mają alt
- [ ] Wszystkie pliki istnieją
- [ ] Brak placeholderów

### SEO
- [ ] Title: "..."
- [ ] Description: "..."
- [ ] OG tags: OK/BRAK
- [ ] Favicon: OK/BRAK

### Responsywność
- [ ] Mobile 375px - OK
- [ ] Tablet 768px - OK
- [ ] Desktop 1440px - OK
- [ ] Brak horizontal scroll

### Dostępność
- [ ] Kontrast OK
- [ ] Focus states OK
- [ ] Tab navigation OK

### Kod
- [ ] Brak console.log
- [ ] Brak localhost
- [ ] Brak błędów konsoli

### Formularze (frontend)
- [ ] Wyświetlanie OK
- [ ] Walidacja wizualna OK

### Pliki
- [ ] robots.txt
- [ ] sitemap.xml

---

## Podsumowanie
OK: X/Y
Krytyczne: ...
Do poprawy: ...
```
