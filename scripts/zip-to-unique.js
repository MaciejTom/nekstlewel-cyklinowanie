#!/usr/bin/env node
/**
 * ZIP TO UNIQUE HTML
 *
 * Użycie:
 *   node zip-to-unique.js                    # użyj bieżącego folderu
 *   node zip-to-unique.js ./moje-zipy        # użyj podanego folderu
 *   node zip-to-unique.js ./zipy output.html # własna nazwa wyjściowa
 *
 * Lub globalnie (po npm link):
 *   zip-to-unique
 *   zip-to-unique ./folder
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { execSync } = require('child_process');

// ============================================
// KONFIGURACJA
// ============================================
const args = process.argv.slice(2);
const SOURCE_DIR = args[0] || process.cwd();
const OUTPUT_FILE = args[1] || path.join(SOURCE_DIR, 'unique-sections.html');

// Kolejność sekcji
const SECTION_ORDER = [
    'header', 'hero', 'features', 'philosophy', 'services',
    'caseStudies', 'testimonials', 'faq', 'footer'
];

// ============================================
// FUNKCJE POMOCNICZE
// ============================================

function log(msg) {
    console.log(`  ${msg}`);
}

function header(msg) {
    console.log(`\n${'='.repeat(50)}`);
    console.log(`  ${msg}`);
    console.log('='.repeat(50));
}

function hashSection(html) {
    const normalized = html.replace(/\s+/g, ' ').replace(/<!--[\s\S]*?-->/g, '').trim();
    return crypto.createHash('md5').update(normalized).digest('hex').substring(0, 12);
}

function extractSections(html) {
    const sections = [];

    // Header
    const headerMatch = html.match(/<header[^>]*>[\s\S]*?<\/header>/gi);
    if (headerMatch) {
        sections.push({ name: 'header', html: headerMatch[0] });
    }

    // Sections
    const sectionRegex = /<section[^>]*>[\s\S]*?<\/section>/gi;
    let match;

    while ((match = sectionRegex.exec(html)) !== null) {
        const sectionHtml = match[0];
        const id = sectionHtml.match(/id="([^"]+)"/)?.[1] || null;
        const h2 = sectionHtml.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i)?.[1]?.replace(/<[^>]+>/g, '').trim() || '';

        let name = 'unknown';
        if (id === 'uslugi') name = 'services';
        else if (id === 'filozofia') name = 'philosophy';
        else if (id === 'case-studies') name = 'caseStudies';
        else if (sectionHtml.includes('h-screen')) name = 'hero';
        else if (h2.includes('Cyklinuję') || sectionHtml.includes('Bezpyłowo naprawdę')) name = 'features';
        else if (h2.includes('Dlaczego')) name = 'philosophy';
        else if (h2.includes('Case')) name = 'caseStudies';
        else if (h2.includes('FAQ')) name = 'faq';
        else if (sectionHtml.includes('format_quote') && sectionHtml.includes('opacity')) name = 'testimonials';

        sections.push({ name, html: sectionHtml, h2: h2.substring(0, 40) });
    }

    // Footer
    const footerMatch = html.match(/<footer[^>]*>[\s\S]*?<\/footer>/gi);
    if (footerMatch) {
        sections.push({ name: 'footer', html: footerMatch[0] });
    }

    return sections;
}

// ============================================
// GŁÓWNA LOGIKA
// ============================================

function main() {
    header('ZIP TO UNIQUE HTML');
    log(`Źródło: ${SOURCE_DIR}`);
    log(`Wyjście: ${OUTPUT_FILE}`);

    // 1. Znajdź ZIPy
    header('1. Szukam plików ZIP');

    const zipFiles = fs.readdirSync(SOURCE_DIR).filter(f => f.endsWith('.zip'));

    if (zipFiles.length === 0) {
        console.error('Nie znaleziono plików ZIP w folderze!');
        process.exit(1);
    }

    log(`Znaleziono: ${zipFiles.length} plików ZIP`);

    // 2. Rozpakuj ZIPy
    header('2. Rozpakowuję ZIP-y');

    zipFiles.forEach((zipFile, i) => {
        const zipPath = path.join(SOURCE_DIR, zipFile);
        const extractDir = path.join(SOURCE_DIR, zipFile.replace('.zip', ''));

        if (!fs.existsSync(extractDir)) {
            try {
                // Próbuj unzip (Git Bash / Linux / Mac)
                execSync(`unzip -q -o "${zipPath}" -d "${extractDir}"`, { stdio: 'pipe' });
            } catch {
                try {
                    // Próbuj PowerShell (Windows)
                    execSync(`powershell -Command "Expand-Archive -Path '${zipPath}' -DestinationPath '${extractDir}' -Force"`, { stdio: 'pipe' });
                } catch (e) {
                    console.error(`  Błąd rozpakowania: ${zipFile}`);
                }
            }
        }
        log(`[${i + 1}/${zipFiles.length}] ${zipFile}`);
    });

    // 3. Wyciągnij sekcje
    header('3. Wyciągam sekcje z HTML');

    const folders = fs.readdirSync(SOURCE_DIR)
        .filter(f => fs.statSync(path.join(SOURCE_DIR, f)).isDirectory())
        .filter(f => {
            const htmlPath = path.join(SOURCE_DIR, f, 'code.html');
            return fs.existsSync(htmlPath);
        });

    log(`Folderów z code.html: ${folders.length}`);

    const allSections = {};

    folders.forEach((folder, i) => {
        const htmlPath = path.join(SOURCE_DIR, folder, 'code.html');
        const html = fs.readFileSync(htmlPath, 'utf-8');
        const sections = extractSections(html);

        log(`[${i + 1}] ${folder.substring(0, 40)}... (${sections.length} sekcji)`);

        sections.forEach(section => {
            const hash = hashSection(section.html);

            if (!allSections[section.name]) {
                allSections[section.name] = [];
            }

            const exists = allSections[section.name].find(s => s.hash === hash);
            if (!exists) {
                allSections[section.name].push({
                    hash,
                    html: section.html,
                    h2: section.h2,
                    source: folder
                });
            }
        });
    });

    // 4. Podsumowanie
    header('4. Podsumowanie');

    let totalUnique = 0;
    SECTION_ORDER.forEach(name => {
        const variants = allSections[name] || [];
        const count = variants.length;
        totalUnique += count;
        const status = count === 1 ? '✓' : `${count} warianty`;
        log(`${name.padEnd(15)} ${status}`);
    });

    log(`${'─'.repeat(30)}`);
    log(`Razem unikalnych: ${totalUnique}`);

    // 5. Generuj HTML
    header('5. Generuję HTML');

    let html = `<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Unikalne sekcje</title>
    <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: { wood: "#CCA383", charcoal: "#1a1a1a", paper: "#f4f4f0", surface: "#ffffff" },
                    fontFamily: { sans: ["Manrope", "sans-serif"], serif: ["Playfair Display", "serif"] }
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

    SECTION_ORDER.forEach(name => {
        const variants = allSections[name] || [];
        variants.forEach((variant, i) => {
            const label = variants.length > 1 ? `${name}-v${i + 1}` : name;
            html += `\n<!-- ${label} -->\n`;
            html += variant.html.trim();
            html += '\n';
        });
    });

    html += `
</div>
</body>
</html>`;

    fs.writeFileSync(OUTPUT_FILE, html);

    header('GOTOWE!');
    log(`Plik: ${OUTPUT_FILE}`);
    log(`Rozmiar: ${(fs.statSync(OUTPUT_FILE).size / 1024).toFixed(1)} KB`);

    console.log(`\nOtwórz: file://${OUTPUT_FILE.replace(/\\/g, '/')}\n`);
}

main();
