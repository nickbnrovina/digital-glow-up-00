# Antigravity — Concepten Samenvatting

## Concept 1: Wat is een Agent?
Een agent is een AI die niet alleen antwoordt maar ook handelt. Hij opent bestanden, schrijft code, voert terminal commands uit en test in de browser — allemaal zelf. Jij geeft de richting, de agent doet het werk.

## Concept 2: Editor View vs Manager View
- **Editor View** — hands-on werkplek, ziet eruit als VS Code, AI helpt mee
- **Manager View** — commandocentrum waar je agents taken geeft en zij zelfstandig werken
- Voor Nick: bijna altijd Manager View

## Concept 3: Autopilot vs Review vs Agent-Assisted
- **Autopilot** — agent doet alles zelf, snel maar risicovol
- **Review-driven** — agent vraagt toestemming bij elke stap, veilig maar traag
- **Agent-Assisted** — gulden middenweg, aanbevolen
- Voor Nick: Review-driven voor klantensites live, Autopilot voor prototypes

## Concept 4: Artifacts
Tastbaar bewijs van wat de agent gedaan heeft: takenlijsten, implementatieplannen, screenshots, video-opnames, diffs. Jouw manier om te controleren zonder code te kennen. Verschijnen als tabs bovenaan in Antigravity.

## Concept 5: Knowledge Base
Het geheugen van Antigravity. Sla je op via: linksonder in Antigravity → Knowledge. Gevuld door de agent automatisch of op jouw vraag. Kustlab Company Profile is al opgeslagen.

## Concept 6: Skills
Pakketjes kennis die slapend liggen tot ze nodig zijn. Globaal opgeslagen in `C:\Users\nick_\.agents\skills\`. Elke skill in een eigen map. Kustlab heeft 4 nieuwe skills: nieuwe-klantsite, qa-deployment, rapid-prototype, klant-offerte.

## Concept 7: Workflows
Vaste reeksen stappen als commando's met `/`. Per workspace opgeslagen in `.claude/commands/`. Kustlab heeft 4 workflows: `/nieuwe-klant`, `/qa`, `/prototype`, `/offerte`.

## Concept 8: MCP-Servers
Verbindingen tussen Antigravity en externe tools. Per klantworkspace configureren:
- context7: altijd aan
- vercel: altijd aan voor klantensites
- supabase: alleen bij database projecten
- firebase: alleen op klantverzoek
- notion: wanneer klantenbeheer actief is

## Concept 9: Browser Subagent
Aparte agent die de browser bedient — klikt, scrollt, test formulieren, maakt screenshots en video-opnames. Vereist Antigravity browser extensie (al geïnstalleerd). Gebruik na elke deployment voor QA.

## Concept 10: Plan Mode vs Fast Mode
- **Plan Mode** — agent maakt eerst een plan, jij keurt goed, dan pas uitvoering. Voor grote taken.
- **Fast Mode** — agent voert direct uit. Voor kleine snelle fixes.
- Voor Nick: Plan Mode voor alles wat belangrijk is.
