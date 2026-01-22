/**
 * EXTRACT SECTIONS - Wyciąga i porównuje sekcje z plików HTML
 *
 * Użycie: node extract-sections.js
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// Konfiguracja
const SOURCE_DIR = 'C:/Nekst Lewel/Klienci/Cyklinowanie/HTML';
const OUTPUT_DIR = 'C:/Nekst Lewel/cyklinowanie-website/extracted-sections';

// Prosty parser HTML (bez zewnętrznych zależności)
function extractSections(html) {
    const sections = [];

    // Wyciągnij header
    const headerMatch = html.match(/<header[^>]*>([\s\S]*?)<\/header>/gi);
    if (headerMatch) {
        headerMatch.forEach((match, i) => {
            sections.push({
                type: 'header',
                index: i,
                html: match
            });
        });
    }

    // Wyciągnij wszystkie section
    const sectionRegex = /<section[^>]*>([\s\S]*?)<\/section>/gi;
    let match;
    let index = 0;

    while ((match = sectionRegex.exec(html)) !== null) {
        const sectionHtml = match[0];

        // Wykryj typ sekcji
        const id = sectionHtml.match(/id="([^"]+)"/)?.[1] || null;
        const h2Match = sectionHtml.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i);
        const h2Text = h2Match ? h2Match[1].replace(/<[^>]+>/g, '').trim().substring(0, 50) : null;

        // Określ nazwę sekcji
        let name = 'unknown';
        if (id === 'uslugi') name = 'services';
        else if (id === 'filozofia') name = 'philosophy';
        else if (id === 'case-studies') name = 'caseStudies';
        else if (sectionHtml.includes('h-screen')) name = 'hero';
        else if (h2Text?.includes('Cyklinuję bez kurzu') || sectionHtml.includes('Bezpyłowo naprawdę')) name = 'features';
        else if (h2Text?.includes('Dlaczego My')) name = 'philosophy';
        else if (h2Text?.includes('Case Studies')) name = 'caseStudies';
        else if (h2Text?.includes('FAQ')) name = 'faq';
        else if (sectionHtml.includes('format_quote') && sectionHtml.includes('opacity-40')) name = 'testimonials';

        sections.push({
            type: 'section',
            name: name,
            id: id,
            h2: h2Text,
            index: index++,
            html: sectionHtml
        });
    }

    // Wyciągnij footer
    const footerMatch = html.match(/<footer[^>]*>([\s\S]*?)<\/footer>/gi);
    if (footerMatch) {
        footerMatch.forEach((match, i) => {
            sections.push({
                type: 'footer',
                index: i,
                html: match
            });
        });
    }

    return sections;
}

// Hash do porównywania (ignoruje whitespace)
function hashSection(html) {
    const normalized = html
        .replace(/\s+/g, ' ')
        .replace(/<!--[\s\S]*?-->/g, '')
        .trim();
    return crypto.createHash('md5').update(normalized).digest('hex').substring(0, 12);
}

// Główna funkcja
function main() {
    console.log('========================================');
    console.log('EXTRACT SECTIONS');
    console.log('========================================\n');

    // Stwórz folder wyjściowy
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    // Znajdź wszystkie rozpakowane foldery
    const folders = fs.readdirSync(SOURCE_DIR)
        .filter(f => fs.statSync(path.join(SOURCE_DIR, f)).isDirectory())
        .filter(f => f.includes('stitch_pan_piotr'));

    console.log(`Znaleziono ${folders.length} folderów\n`);

    // Zbierz wszystkie sekcje
    const allSections = {};
    const filesSections = {};

    folders.forEach((folder, folderIndex) => {
        const htmlPath = path.join(SOURCE_DIR, folder, 'code.html');

        if (fs.existsSync(htmlPath)) {
            console.log(`[${folderIndex + 1}] ${folder}`);

            const html = fs.readFileSync(htmlPath, 'utf-8');
            const sections = extractSections(html);

            filesSections[folder] = sections;

            sections.forEach(section => {
                const key = section.name || section.type;
                const hash = hashSection(section.html);

                if (!allSections[key]) {
                    allSections[key] = [];
                }

                // Sprawdź czy wariant już istnieje
                const existingVariant = allSections[key].find(v => v.hash === hash);

                if (existingVariant) {
                    existingVariant.sources.push(folder);
                } else {
                    allSections[key].push({
                        hash: hash,
                        sources: [folder],
                        html: section.html,
                        h2: section.h2,
                        id: section.id
                    });
                }
            });
        }
    });

    // Raport
    console.log('\n========================================');
    console.log('RAPORT - UNIKALNE WARIANTY');
    console.log('========================================\n');

    const report = [];

    Object.entries(allSections).forEach(([name, variants]) => {
        const uniqueCount = variants.length;
        const isUnique = uniqueCount === 1;

        console.log(`${name.toUpperCase()}: ${uniqueCount} wariant(y)`);

        variants.forEach((variant, i) => {
            console.log(`  [${i + 1}] hash: ${variant.hash} | źródła: ${variant.sources.length} plików`);
            if (variant.h2) {
                console.log(`      h2: "${variant.h2}"`);
            }
        });
        console.log('');

        report.push({
            section: name,
            uniqueVariants: uniqueCount,
            isIdentical: isUnique,
            variants: variants.map((v, i) => ({
                variantNumber: i + 1,
                hash: v.hash,
                sources: v.sources,
                h2: v.h2
            }))
        });
    });

    // Zapisz raport JSON
    fs.writeFileSync(
        path.join(OUTPUT_DIR, 'sections-report.json'),
        JSON.stringify(report, null, 2)
    );

    // Zapisz każdy unikalny wariant do osobnego pliku
    console.log('========================================');
    console.log('ZAPISUJĘ PLIKI');
    console.log('========================================\n');

    Object.entries(allSections).forEach(([name, variants]) => {
        const sectionDir = path.join(OUTPUT_DIR, name);

        if (!fs.existsSync(sectionDir)) {
            fs.mkdirSync(sectionDir, { recursive: true });
        }

        variants.forEach((variant, i) => {
            const filename = variants.length > 1
                ? `${name}-v${i + 1}.html`
                : `${name}.html`;

            const filepath = path.join(sectionDir, filename);

            // Dodaj komentarz z metadanymi
            const content = `<!--
  Section: ${name}
  Variant: ${i + 1}/${variants.length}
  Hash: ${variant.hash}
  Sources: ${variant.sources.join(', ')}
  ${variant.h2 ? `H2: ${variant.h2}` : ''}
-->
${variant.html}`;

            fs.writeFileSync(filepath, content);
            console.log(`  Zapisano: ${name}/${filename}`);
        });
    });

    // Podsumowanie
    console.log('\n========================================');
    console.log('PODSUMOWANIE');
    console.log('========================================\n');

    const totalVariants = Object.values(allSections).reduce((sum, v) => sum + v.length, 0);
    const identicalSections = Object.values(allSections).filter(v => v.length === 1).length;
    const sectionsWithVariants = Object.values(allSections).filter(v => v.length > 1).length;

    console.log(`Sekcji razem: ${Object.keys(allSections).length}`);
    console.log(`Identycznych (1 wariant): ${identicalSections}`);
    console.log(`Z wariantami: ${sectionsWithVariants}`);
    console.log(`Unikalnych wariantów łącznie: ${totalVariants}`);
    console.log(`\nPliki zapisane w: ${OUTPUT_DIR}`);

    // Zapisz też podsumowanie jako markdown
    let markdown = `# Analiza sekcji HTML\n\n`;
    markdown += `## Podsumowanie\n\n`;
    markdown += `- Sekcji razem: **${Object.keys(allSections).length}**\n`;
    markdown += `- Identycznych: **${identicalSections}**\n`;
    markdown += `- Z wariantami: **${sectionsWithVariants}**\n`;
    markdown += `- Unikalnych wariantów: **${totalVariants}**\n\n`;
    markdown += `## Szczegóły\n\n`;
    markdown += `| Sekcja | Warianty | Status |\n`;
    markdown += `|--------|----------|--------|\n`;

    report.forEach(r => {
        const status = r.isIdentical ? 'Identyczna' : `${r.uniqueVariants} warianty`;
        markdown += `| ${r.section} | ${r.uniqueVariants} | ${status} |\n`;
    });

    markdown += `\n## Warianty do przekonwertowania\n\n`;

    report.filter(r => !r.isIdentical).forEach(r => {
        markdown += `### ${r.section}\n\n`;
        r.variants.forEach(v => {
            markdown += `- **Wariant ${v.variantNumber}** (hash: \`${v.hash}\`)\n`;
            markdown += `  - Źródła: ${v.sources.map(s => s.match(/\((\d+)\)/)?.[1] || s).join(', ')}\n`;
            if (v.h2) markdown += `  - H2: "${v.h2}"\n`;
        });
        markdown += '\n';
    });

    fs.writeFileSync(path.join(OUTPUT_DIR, 'RAPORT.md'), markdown);
    console.log(`\nRaport markdown: ${OUTPUT_DIR}/RAPORT.md`);
}

main();
