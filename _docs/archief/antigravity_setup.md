# Antigravity — Setup Samenvatting

## Wat is er vandaag ingesteld?

### 1. CLAUDE.md Bijgewerkt
Het CLAUDE.md bestand is volledig herschreven en bevat nu:
- Land & Expand businessmodel
- Volledige tech stack (React/Vite/Tailwind/Vercel/Supabase)
- MCP-server strategie per klant
- QA workflow via browser subagent
- Rapid prototyping sales strategie
- Instructie dat Nick geen code schrijft

### 2. Knowledge Base Gevuld
De Antigravity Knowledge Base bevat nu "Kustlab Company Profile & Core Model" — geladen vanuit CLAUDE.md. De agent weet bij elke sessie wie Kustlab is.

### 3. Skills Aangemaakt
Locatie: `C:\Users\nick_\.agents\skills\`
- `nieuwe-klantsite/` — volledige setup van nul tot deployment
- `qa-deployment/` — browser test met video rapport
- `rapid-prototype/` — prototype in 15 min voor sales
- `klant-offerte/` — offerte opmaken na discovery call

### 4. Workflows Aangemaakt
Locatie: `digital solutions consultant/.claude/commands/`
- `/nieuwe-klant` — start nieuw klantproject
- `/qa` — test site en maak rapport
- `/prototype` — snel prototype voor prospect
- `/offerte` — offerte opstellen

### 5. Mappenstructuur Opgekuist
- Hoofdfolder bevat max 5 .md bestanden
- Archief in `_docs/` map
- Strategie gedocumenteerd in `kustlab_mappenstructuur.md`

---

## MCP Status
| Server | Status | Wanneer |
|---|---|---|
| context7 | ✅ Aan | Altijd |
| supabase | ✅ Aan | Database projecten |
| firebase | ⚪ Uit | Op klantverzoek |
| notion | ⚪ Uit | Wanneer klantenbeheer actief |
| vercel | ⚪ Uit in Kustlab eigen folder | Aan in klantworkspaces |

---

## Klantworkspace Aanmaken (checklist)
1. Nieuwe folder aanmaken met klantnaam
2. Open folder in Antigravity
3. Typ `/nieuwe-klant [naam]`
4. MCP-servers configureren via Settings → Customizations
5. CLAUDE.md aanmaken met klantspecifieke info
6. Knowledge Base vullen met klantcontext
