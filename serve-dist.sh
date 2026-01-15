#!/bin/bash
# Script para servir a pasta dist localmente

echo "🚀 Servindo a pasta dist..."
echo "📂 Abra: http://localhost:8080"
echo ""

cd dist && python3 -m http.server 8080

