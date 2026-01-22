/**
 * COMBINE UNIQUE - Łączy wszystkie unikalne sekcje w jeden czysty HTML
 */

const fs = require('fs');
const path = require('path');

const SECTIONS_DIR = 'C:/Nekst Lewel/cyklinowanie-website/extracted-sections';
const OUTPUT_FILE = 'C:/Nekst Lewel/cyklinowanie-website/unique-sections.html';

// Kolejność sekcji na stronie
const SECTION_ORDER = [
    'header',
    'hero',
    'features',
    'philosophy',
    'services',
    'caseStudies',
    'testimonials',
    'faq',
    'footer'
];

function main() {
    let html = `<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Unikalne sekcje - Pan Piotr Cyklinowanie</title>
    <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
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
    <style>
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #f4f4f0; }
        ::-webkit-scrollbar-thumb { background: #1a1a1a; }
    </style>
</head>
<body class="bg-paper font-sans text-charcoal antialiased selection:bg-wood selection:text-white">
<div class="relative flex min-h-screen w-full flex-col overflow-x-hidden">
`;

    let count = 0;

    SECTION_ORDER.forEach(sectionName => {
        const sectionDir = path.join(SECTIONS_DIR, sectionName);

        if (fs.existsSync(sectionDir)) {
            const files = fs.readdirSync(sectionDir)
                .filter(f => f.endsWith('.html'))
                .sort();

            files.forEach(file => {
                const filepath = path.join(sectionDir, file);
                let content = fs.readFileSync(filepath, 'utf-8');

                // Usuń komentarze z metadanymi (pierwsze linie)
                content = content.replace(/<!--[\s\S]*?-->\n?/g, '');

                // Dodaj komentarz z nazwą (krótki)
                const variantName = file.replace('.html', '');
                html += `\n<!-- ${variantName} -->\n`;
                html += content.trim();
                html += '\n';

                count++;
            });
        }
    });

    html += `
</div>
</body>
</html>`;

    fs.writeFileSync(OUTPUT_FILE, html);

    console.log(`Zapisano ${count} sekcji do: ${OUTPUT_FILE}`);
}

main();
