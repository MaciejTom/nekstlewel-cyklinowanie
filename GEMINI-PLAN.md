# Plan budowy strony - Cyklinowanie

## Workflow

Dla każdej sekcji uruchom nową sesję Gemini:

```bash
cd "C:/Nekst Lewel/cyklinowanie-website"

# Sekcja 1: Hero
gemini "Przeczytaj plik prompts/1-hero.md i zbuduj komponent Hero.tsx"

# Sekcja 2: Why Us
gemini "Przeczytaj plik prompts/2-why-us.md i zbuduj komponent WhyUs.tsx"

# Sekcja 3: Services
gemini "Przeczytaj plik prompts/3-services.md i zbuduj komponent Services.tsx"

# ... itd
```

## Kolejność sekcji

| # | Sekcja | Plik promptu | Output |
|---|--------|--------------|--------|
| 1 | Hero | prompts/1-hero.md | components/sections/Hero.tsx |
| 2 | Why Us | prompts/2-why-us.md | components/sections/WhyUs.tsx |
| 3 | Services | prompts/3-services.md | components/sections/Services.tsx |
| 4 | Process | prompts/4-process.md | components/sections/Process.tsx |
| 5 | Gallery | prompts/5-gallery.md | components/sections/Gallery.tsx |
| 6 | Testimonials | prompts/6-testimonials.md | components/sections/Testimonials.tsx |
| 7 | FAQ | prompts/7-faq.md | components/sections/FAQ.tsx |
| 8 | Contact | prompts/8-contact.md | components/sections/Contact.tsx |
| 9 | Final | prompts/9-page.md | app/page.tsx (złożenie całości) |

## Po każdej sekcji

1. Sprawdź czy plik został utworzony
2. Uruchom `npm run dev` i sprawdź wizualnie
3. Jeśli OK → następna sekcja
4. Jeśli poprawki → kontynuuj w tej samej sesji

## Tokeny do użycia (globals.css)

```
bg-background     → #fffbf5 (kremowe tło)
bg-primary        → #8b5a2b (Oak Brown)
bg-secondary      → #d4a574 (Light Wood)
bg-muted          → #fdf6ed
text-foreground   → #1c1410
text-primary      → #8b5a2b
text-muted-foreground → #6b5b4f
border-border     → #e8ddd0
rounded-lg        → 0.75rem
```
