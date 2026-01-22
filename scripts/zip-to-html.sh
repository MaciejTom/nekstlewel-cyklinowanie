#!/bin/bash
# ===========================================
# ZIP TO HTML - Łączy wiele ZIPów w jeden HTML
# ===========================================
# Użycie: ./zip-to-html.sh [FOLDER_Z_ZIPAMI] [PLIK_WYJSCIOWY]
# Przykład: ./zip-to-html.sh "C:/Nekst Lewel/Klienci/Cyklinowanie/HTML" output.html

SOURCE_DIR="${1:-C:/Nekst Lewel/Klienci/Cyklinowanie/HTML}"
OUTPUT_FILE="${2:-combined-all.html}"

echo "========================================"
echo "ZIP TO HTML"
echo "========================================"
echo "Źródło: $SOURCE_DIR"
echo "Wyjście: $OUTPUT_FILE"
echo ""

# Licznik
COUNT=0

# Nagłówek HTML
cat > "$OUTPUT_FILE" << 'HEADER'
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Wszystkie warianty - Pan Piotr Cyklinowanie</title>
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
        .variant-separator {
            background: linear-gradient(90deg, transparent, #CCA383, transparent);
            height: 4px;
            margin: 80px 0;
        }
        .variant-label {
            position: fixed;
            top: 10px;
            right: 10px;
            background: #1a1a1a;
            color: #CCA383;
            padding: 8px 16px;
            font-family: monospace;
            font-size: 12px;
            z-index: 9999;
            border-radius: 4px;
        }
    </style>
</head>
<body class="bg-paper font-sans text-charcoal">
HEADER

echo "Przetwarzam pliki ZIP..."

# Dla każdego ZIPa
for zipfile in "$SOURCE_DIR"/*.zip; do
    if [ -f "$zipfile" ]; then
        COUNT=$((COUNT + 1))
        BASENAME=$(basename "$zipfile" .zip)
        EXTRACT_DIR="$SOURCE_DIR/$BASENAME"

        echo "  [$COUNT] $BASENAME"

        # Rozpakuj (jeśli jeszcze nie rozpakowany)
        if [ ! -d "$EXTRACT_DIR" ]; then
            unzip -q -o "$zipfile" -d "$EXTRACT_DIR"
        fi

        # Znajdź code.html
        HTML_FILE="$EXTRACT_DIR/code.html"
        if [ -f "$HTML_FILE" ]; then
            # Dodaj separator i komentarz
            cat >> "$OUTPUT_FILE" << SEPARATOR

<!-- ################################################################### -->
<!-- WARIANT $COUNT: $BASENAME -->
<!-- ################################################################### -->
<div class="variant-separator"></div>
<div style="text-align:center; padding:20px; background:#1a1a1a; color:#CCA383; font-family:monospace;">
    WARIANT $COUNT: $BASENAME
</div>

SEPARATOR

            # Wyciągnij zawartość body (bez html/head/body tagów)
            sed -n '/<body/,/<\/body>/p' "$HTML_FILE" | \
                sed '1d;$d' | \
                sed 's/<body[^>]*>//g' >> "$OUTPUT_FILE"
        else
            echo "    [!] Brak code.html w $EXTRACT_DIR"
        fi
    fi
done

# Zamknij HTML
cat >> "$OUTPUT_FILE" << 'FOOTER'

</body>
</html>
FOOTER

echo ""
echo "========================================"
echo "GOTOWE!"
echo "========================================"
echo "Przetworzono: $COUNT plików ZIP"
echo "Wyjście: $OUTPUT_FILE"
echo ""
echo "Otwórz w przeglądarce: file://$(pwd)/$OUTPUT_FILE"
