# Antigravity — Geavanceerde Concepten

## Concept 1: Model Selectie

| Taak | Model |
|---|---|
| Site bouwen, code schrijven | Gemini 3.1 Pro |
| Strategie, schrijven, redeneren | Claude Sonnet |
| Offerte of e-mail schrijven | Claude Sonnet |
| Snel prototype bouwen | Gemini 3.1 Pro |
| Complexe bug debuggen | Claude Sonnet |

**Ezelsbruggetje:** Bouwen → Gemini. Denken en schrijven → Claude.

---

## Concept 2: Multi-Agent in Manager View

Meerdere agents tegelijk op onafhankelijke taken. Elke agent werkt in zijn eigen context zonder de andere te blokkeren.

**Wanneer gebruiken:** taken die niet van elkaar afhangen.

**Voorbeeld Kustlab:**
- Agent 1 → homepage klant A bouwen
- Agent 2 → offerte klant B schrijven
- Agent 3 → QA test klant C

Relevante skill: `dispatching-parallel-agents`

---

## Concept 3: Git Integratie

**Commit** — snapshot opslaan van huidige staat
**Branch** — aparte werkruimte zodat live site veilig blijft
**Push** — backup uploaden naar GitHub

**Kustlab flow:**
Antigravity → GitHub → Netlify (eigen site) of Vercel (klantensites) — automatische deployment bij elke push.

**Gouden regel:** altijd op een branch werken, pas mergen naar main na goedkeuring Nick.

Relevante skill: `finishing-a-development-branch`

---

## Concept 4: Antigravity voor Sales & Acquisitie

**Voor het gesprek:**
Agent doet research over de prospect — website analyseren, pijnpunten identificeren, briefing opstellen.

**Tijdens/na het gesprek:**
`/prototype [naam]` → werkende site URL binnen 15 minuten → zelfde dag naar prospect sturen.

**Na het gesprek:**
Agent schrijft gepersonaliseerde follow-up e-mail en offerte.

**De formule:**
> Jij doet het gesprek. De agent doet de rest.
