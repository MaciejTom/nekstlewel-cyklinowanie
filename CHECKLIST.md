# Checklist przed oddaniem strony

## 1. Build & Kod
- [ ] `npm run build` przechodzi bez błędów
- [ ] Brak błędów TypeScript
- [ ] Brak warningów w konsoli przeglądarki
- [ ] Brak `console.log` w kodzie produkcyjnym
- [ ] Brak hardcodowanych URLi localhost

## 2. Content
- [ ] Cały tekst z content.md jest na stronie
- [ ] Brak lorem ipsum / placeholder tekstu
- [ ] Brak literówek (sprawdzić manualnie lub narzędziem)
- [ ] Numery telefonów są poprawne i klikalne (`tel:`)
- [ ] Adresy email są poprawne i klikalne (`mailto:`)
- [ ] Adresy fizyczne są poprawne

## 3. Obrazki
- [ ] Wszystkie obrazki się ładują
- [ ] Obrazki mają atrybut `alt`
- [ ] Obrazki są zoptymalizowane (WebP/AVIF gdzie możliwe)
- [ ] Brak placeholder obrazków
- [ ] Favicon jest ustawiony

## 4. Nawigacja & Linki
- [ ] Wszystkie linki w nav działają
- [ ] Anchor linki (#sekcja) scrollują do właściwych miejsc
- [ ] Linki zewnętrzne otwierają się w nowej karcie (`target="_blank"`)
- [ ] Brak broken links (404)
- [ ] Logo linkuje do strony głównej

## 5. SEO
- [ ] `<title>` jest ustawiony i unikalny na każdej stronie
- [ ] `<meta name="description">` jest ustawiony
- [ ] Open Graph tagi (og:title, og:description, og:image)
- [ ] Canonical URL
- [ ] robots.txt
- [ ] sitemap.xml
- [ ] Struktura nagłówków (jeden H1, logiczna hierarchia H2-H6)

## 6. Responsywność
- [ ] Mobile (375px) - wygląda dobrze
- [ ] Tablet (768px) - wygląda dobrze
- [ ] Desktop (1440px) - wygląda dobrze
- [ ] Duży desktop (1920px+) - nie rozjeżdża się
- [ ] Brak horizontal scroll na mobile
- [ ] Tekst jest czytelny bez zoomowania
- [ ] Przyciski są wystarczająco duże na dotyk (min 44x44px)

## 7. Formularze
- [ ] Walidacja działa (required, email format, etc.)
- [ ] Komunikaty błędów są zrozumiałe
- [ ] Formularz wysyła dane poprawnie
- [ ] Jest potwierdzenie wysłania
- [ ] Placeholdery/labele są opisowe

## 8. Dostępność (a11y)
- [ ] Kontrast tekstu jest wystarczający (WCAG AA: 4.5:1)
- [ ] Focus states są widoczne
- [ ] Nawigacja klawiaturą działa (Tab, Enter)
- [ ] Aria labels gdzie potrzebne
- [ ] Skip to content link
- [ ] Alt teksty opisują obrazki

## 9. Wydajność
- [ ] Lighthouse Performance > 90
- [ ] LCP (Largest Contentful Paint) < 2.5s
- [ ] FID (First Input Delay) < 100ms
- [ ] CLS (Cumulative Layout Shift) < 0.1
- [ ] Obrazki lazy loading
- [ ] Fonty preload

## 10. Bezpieczeństwo
- [ ] HTTPS działa
- [ ] Brak wrażliwych danych w kodzie (API keys, hasła)
- [ ] CSP headers (opcjonalnie)
- [ ] X-Frame-Options header

## 11. Analityka & Tracking
- [ ] Google Analytics / inne zainstalowane
- [ ] Events tracking (kliknięcia CTA, formularze)
- [ ] Consent banner dla cookies (RODO)

## 12. Legal
- [ ] Polityka prywatności
- [ ] Regulamin (jeśli potrzebny)
- [ ] Informacja o cookies
- [ ] Dane firmy w stopce (NIP, adres)

## 13. Cross-browser
- [ ] Chrome - działa
- [ ] Firefox - działa
- [ ] Safari - działa
- [ ] Edge - działa
- [ ] Mobile Safari (iOS) - działa
- [ ] Mobile Chrome (Android) - działa

## 14. Przed deployem
- [ ] Zmienne środowiskowe ustawione (.env.production)
- [ ] Domain/DNS skonfigurowane
- [ ] SSL certyfikat
- [ ] Backup poprzedniej wersji (jeśli update)
- [ ] Redirect z www na non-www (lub odwrotnie)

## 15. Po deployu
- [ ] Strona ładuje się poprawnie
- [ ] Formularze działają na produkcji
- [ ] Analytics zbiera dane
- [ ] Sprawdzić w Google Search Console
- [ ] Test speed na PageSpeed Insights

---

## Quick Check (najważniejsze)
```bash
npm run build          # build przechodzi
npm run lint           # brak błędów lint
```

## Narzędzia do sprawdzenia
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [WAVE Accessibility](https://wave.webaim.org/)
- [Broken Link Checker](https://www.brokenlinkcheck.com/)
- [Meta Tags Preview](https://metatags.io/)
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
