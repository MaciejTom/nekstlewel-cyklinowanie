# Automatyzacja wyciągania unikalnych sekcji HTML

## Cel
Automatyczne przetwarzanie spakowanych plików HTML i wyciąganie unikalnych wariantów sekcji.

---

## Schemat procesu

```
[ZIP files] → [Rozpakowanie] → [Parsowanie HTML] → [Porównanie sekcji] → [Jeden HTML z wariantami]
```

---

## Krok 1: Rozpakowanie ZIPów (Bash)

```bash
#!/bin/bash
# unzip-all.sh

SOURCE_DIR="C:/Nekst Lewel/Klienci/Cyklinowanie/HTML"
OUTPUT_DIR="$SOURCE_DIR/extracted"

mkdir -p "$OUTPUT_DIR"

for zip in "$SOURCE_DIR"/*.zip; do
    folder_name=$(basename "$zip" .zip)
    unzip -o "$zip" -d "$OUTPUT_DIR/$folder_name"
done

echo "Rozpakowano $(ls -1 "$OUTPUT_DIR" | wc -l) folderów"
```

---

## Krok 2: Wyciąganie sekcji z HTML (Node.js)

```javascript
// extract-sections.js
const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const EXTRACTED_DIR = 'C:/Nekst Lewel/Klienci/Cyklinowanie/HTML/extracted';

function extractSections(htmlPath) {
    const html = fs.readFileSync(htmlPath, 'utf-8');
    const $ = cheerio.load(html);

    const sections = [];

    // Header
    sections.push({
        name: 'header',
        id: null,
        html: $('header').first().toString(),
        hash: hashContent($('header').first().text())
    });

    // Wszystkie sekcje
    $('section').each((i, el) => {
        const $section = $(el);
        const id = $section.attr('id') || null;
        const h2 = $section.find('h2').first().text().trim();

        sections.push({
            name: detectSectionName($section, h2, id),
            id: id,
            h2: h2,
            html: $.html($section),
            hash: hashContent($section.text())
        });
    });

    // Footer
    sections.push({
        name: 'footer',
        id: $('footer').attr('id') || 'kontakt',
        html: $('footer').first().toString(),
        hash: hashContent($('footer').first().text())
    });

    return sections;
}

function detectSectionName($section, h2, id) {
    if (id === 'uslugi') return 'services';
    if (id === 'filozofia') return 'philosophy';
    if (id === 'case-studies') return 'caseStudies';
    if (id === 'kontakt') return 'footer';
    if (h2.includes('Cyklinuję bez kurzu')) return 'features';
    if (h2.includes('Dlaczego My')) return 'philosophy';
    if (h2.includes('Case Studies')) return 'caseStudies';
    if (h2.includes('FAQ')) return 'faq';
    if ($section.find('.format_quote').length) return 'testimonials';
    if ($section.hasClass('h-screen')) return 'hero';
    return 'unknown';
}

function hashContent(text) {
    // Prosty hash do porównywania
    return require('crypto')
        .createHash('md5')
        .update(text.replace(/\s+/g, ' ').trim())
        .digest('hex')
        .substring(0, 8);
}

// Główna funkcja
function processAllFiles() {
    const folders = fs.readdirSync(EXTRACTED_DIR);
    const allSections = {};

    folders.forEach(folder => {
        const htmlPath = path.join(EXTRACTED_DIR, folder, 'code.html');
        if (fs.existsSync(htmlPath)) {
            const sections = extractSections(htmlPath);

            sections.forEach(section => {
                if (!allSections[section.name]) {
                    allSections[section.name] = [];
                }

                // Sprawdź czy wariant już istnieje (po hash)
                const exists = allSections[section.name].some(s => s.hash === section.hash);
                if (!exists) {
                    allSections[section.name].push({
                        ...section,
                        source: folder
                    });
                }
            });
        }
    });

    return allSections;
}

// Zapisz wyniki
const results = processAllFiles();
fs.writeFileSync('sections-analysis.json', JSON.stringify(results, null, 2));
console.log('Analiza zapisana do sections-analysis.json');
```

---

## Krok 3: Generowanie unikalnego HTML

```javascript
// generate-unique-html.js
const fs = require('fs');

const sections = JSON.parse(fs.readFileSync('sections-analysis.json', 'utf-8'));

function generateHTML() {
    let html = `<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Pan Piotr - Wszystkie warianty</title>
    <!-- Fonts & Tailwind -->
    <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet"/>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        wood: "#CCA383",
                        charcoal: "#1a1a1a",
                        paper: "#f4f4f0",
                        surface: "#ffffff"
                    },
                    fontFamily: {
                        sans: ["Manrope", "sans-serif"],
                        serif: ["Playfair Display", "serif"]
                    }
                }
            }
        }
    </script>
</head>
<body class="bg-paper font-sans text-charcoal">
`;

    // Dla każdej sekcji z wariantami, dodaj wszystkie warianty z komentarzami
    Object.entries(sections).forEach(([name, variants]) => {
        html += `\n<!-- ========== ${name.toUpperCase()} (${variants.length} wariant(y)) ========== -->\n`;

        variants.forEach((variant, i) => {
            html += `\n<!-- WARIANT ${i + 1} - źródło: ${variant.source} -->\n`;
            html += `<!-- hash: ${variant.hash} -->\n`;
            html += variant.html;
            html += '\n';
        });
    });

    html += `\n</body>\n</html>`;
    return html;
}

fs.writeFileSync('all-variants.html', generateHTML());
console.log('Wygenerowano all-variants.html');
```

---

## Krok 4: Konwersja do komponentów Next.js

```javascript
// html-to-nextjs.js
const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const COMPONENTS_DIR = 'src/components/sections';

function convertToReact(html, componentName) {
    let jsx = html
        // class → className
        .replace(/\bclass="/g, 'className="')
        // style string → object (uproszczone)
        .replace(/style="([^"]*)"/g, (match, style) => {
            const obj = style.split(';')
                .filter(s => s.trim())
                .map(s => {
                    const [key, value] = s.split(':').map(x => x.trim());
                    const camelKey = key.replace(/-([a-z])/g, g => g[1].toUpperCase());
                    return `${camelKey}: "${value}"`;
                })
                .join(', ');
            return `style={{${obj}}}`;
        })
        // Self-closing tags
        .replace(/<img([^>]*)>/g, '<img$1 />')
        .replace(/<br>/g, '<br />')
        .replace(/<hr>/g, '<hr />')
        // Material icons → Lucide lub własny komponent
        .replace(/<span class="material-symbols-outlined[^"]*">([^<]*)<\/span>/g,
            '<span className="material-symbols-outlined">$1</span>');

    return `export function ${componentName}() {
  return (
    ${jsx}
  );
}
`;
}

// Użycie
const sections = JSON.parse(fs.readFileSync('sections-analysis.json', 'utf-8'));

Object.entries(sections).forEach(([name, variants]) => {
    variants.forEach((variant, i) => {
        const componentName = `${capitalize(name)}${variants.length > 1 ? `V${i + 1}` : ''}`;
        const code = convertToReact(variant.html, componentName);

        const dir = variants.length > 1
            ? path.join(COMPONENTS_DIR, name)
            : COMPONENTS_DIR;

        fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(path.join(dir, `${componentName}.tsx`), code);
    });
});
```

---

## Szybka wersja (jeden skrypt)

```bash
# quick-extract.sh
# Uruchom z folderu projektu

SOURCE="C:/Nekst Lewel/Klienci/Cyklinowanie/HTML"

# 1. Rozpakuj wszystko
for zip in "$SOURCE"/*.zip; do
    unzip -o "$zip" -d "${zip%.zip}" 2>/dev/null
done

# 2. Połącz wszystkie HTML w jeden plik do przeglądu
echo "<!-- WSZYSTKIE WARIANTY -->" > all-html-combined.html
for html in "$SOURCE"/*/code.html; do
    echo "<!-- ===== $(dirname $html) ===== -->" >> all-html-combined.html
    cat "$html" >> all-html-combined.html
    echo "" >> all-html-combined.html
done

echo "Gotowe! Sprawdź all-html-combined.html"
```

---

## Wymagane zależności (Node.js)

```bash
npm install cheerio
```

---

## Użycie

1. **Szybkie** (Bash): `./quick-extract.sh` → jeden plik z wszystkimi HTML
2. **Pełne** (Node.js):
   ```bash
   node extract-sections.js    # → sections-analysis.json
   node generate-unique-html.js # → all-variants.html
   node html-to-nextjs.js      # → komponenty React
   ```

---

## Uwagi

- Skrypty zakładają strukturę: `folder.zip` → `folder/code.html`
- Hash MD5 służy do wykrywania duplikatów (porównuje tekst, ignoruje whitespace)
- Konwersja do React jest uproszczona - może wymagać ręcznych poprawek (szczególnie inline styles)
- Material Symbols wymaga osobnej obsługi (można zamienić na Lucide icons)
