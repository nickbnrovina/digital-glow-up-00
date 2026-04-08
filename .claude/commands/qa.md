# Command: /qa

## Beschrijving
Test de huidige site volledig via de browser subagent en maak een rapport voor Nick.

## Gebruik
`/qa [vercel preview url of live url]`

Voorbeeld: `/qa https://mijnklant.vercel.app`

## Stappen

1. Gebruik de skill `qa-deployment` om de volledige test uit te voeren

2. Maak een Artifact met:
   - Screenshots van elke pagina
   - Video-opname van de volledige test
   - Lijst van issues (kritiek / minor)

3. Geef Nick een duidelijk advies:
   - ✅ Klaar voor live
   - ⚠️ Minor issues, kan live maar fix dit daarna
   - ❌ Kritieke issues, eerst oplossen
