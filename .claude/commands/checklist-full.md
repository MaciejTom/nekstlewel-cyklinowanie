Przeprowadź PEŁNY audyt strony przed oddaniem na produkcję.

Wykonaj wszystko z `/checklist` (demo) PLUS dodatkowe punkty poniżej.

## Dodatkowe kroki (poza demo):

### 1. Formularze - pełna funkcjonalność
- Formularz wysyła dane poprawnie (testuj submit)
- Backend/API odbiera dane
- Jest potwierdzenie wysłania (success message)
- Obsługa błędów (error message gdy nie wyśle)
- Email notification działa (jeśli dotyczy)

### 2. Wydajność
Uruchom Lighthouse lub PageSpeed Insights:
- Performance score > 90
- LCP (Largest Contentful Paint) < 2.5s
- FID (First Input Delay) < 100ms
- CLS (Cumulative Layout Shift) < 0.1
- Obrazki lazy loading
- Fonty preload

### 3. Bezpieczeństwo
- HTTPS działa
- Brak API keys / haseł w kodzie
- Formularz ma CSRF protection (jeśli dotyczy)

### 4. Cross-browser
Przetestuj na:
- Chrome
- Firefox
- Safari
- Edge
- Mobile Safari (iOS)
- Mobile Chrome (Android)

### 5. Analytics
- Google Analytics zainstalowany
- Events tracking (CTA clicks, form submit)
- Consent banner (RODO/cookies)

### 6. Legal
- Polityka prywatności
- Informacja o cookies
- Dane firmy w stopce (NIP, adres jeśli wymagane)

---

## Output Format (dodaj do raportu demo)

```
## Checklist FULL Report

[... wszystko z demo ...]

### Formularze (backend)
- [ ] Submit działa
- [ ] Potwierdzenie wysłania
- [ ] Obsługa błędów
- [ ] Email notification

### Wydajność
- [ ] Lighthouse Performance: XX/100
- [ ] LCP: X.Xs
- [ ] FID: XXms
- [ ] CLS: X.XX

### Bezpieczeństwo
- [ ] HTTPS OK
- [ ] Brak secrets w kodzie

### Cross-browser
- [ ] Chrome OK
- [ ] Firefox OK
- [ ] Safari OK
- [ ] Edge OK
- [ ] iOS Safari OK
- [ ] Android Chrome OK

### Analytics
- [ ] GA zainstalowany
- [ ] Events tracking
- [ ] Consent banner

### Legal
- [ ] Polityka prywatności
- [ ] Cookies info
- [ ] Dane firmy

---

## Podsumowanie FULL
OK: X/Y
Blokuje deploy: ...
Do poprawy po launchu: ...
```
