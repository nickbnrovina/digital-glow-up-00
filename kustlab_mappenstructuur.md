# Kustlab — Mappenstructuur & Strategie

## De Gouden Regel
De agent leest alles in de hoofdfolder. Minder ruis = betere agent. Houd de hoofdfolder zo clean mogelijk.

---

## Structuur Hoofdfolder: `digital solutions consultant/`

```
digital solutions consultant/
│
├── .claude/                          ← Antigravity configuratie (niet aanraken)
│   ├── settings.local.json
│   └── commands/                     ← Jouw workflows (/nieuwe-klant, /qa, etc.)
│
├── src/                              ← Kustlab website code (niet aanraken)
├── public/                           ← Publieke assets website
├── assets/                           ← Logo's, afbeeldingen
├── dist/                             ← Build output (niet aanraken)
├── node_modules/                     ← Dependencies (niet aanraken)
│
├── _docs/                            ← ARCHIEF (agent leest dit NIET actief)
│   ├── business/                     ← KBO, bedrijfsplan, voorwaarden, factuursjabloon
│   ├── campagnes/                    ← Lead bestanden, Lindy prompts, campagne docs
│   ├── brand/                        ← Brand guidelines docs
│   └── archief/                      ← Afgewerkte of inactieve bestanden
│
├── _klanten/                         ← Overzicht actieve klanten
│   └── [klantnaam].md                ← Één bestand per klant met status
│
├── CLAUDE.md                         ← ✅ ALTIJD HIER — agent instructies
├── kustlab_ai_context.md             ← ✅ ALTIJD HIER — extra context
└── kustlab_systeem_prompt.md         ← ✅ ALTIJD HIER — systeem prompt
```

---

## Welke bestanden horen waar?

### Blijft in hoofdfolder (max 5 bestanden):
- `CLAUDE.md`
- `kustlab_ai_context.md`
- `kustlab_systeem_prompt.md`
- Actief werkbestand van het moment (bv. huidige campagne)

### Gaat naar `_docs/business/`:
- `Bedrijfsplan_Kustlab.docx`
- `kustlab_algemene_voorwaarden.md`
- `kustlab_factuur_sjabloon.md`
- `kbo.html`
- `client_onboarding_workflow.md`

### Gaat naar `_docs/campagnes/`:
- `campagne_brugge_leads.md`
- `campagne_brugge_leads_batch4.md`
- `lead_profielen_onderzoek_batch2.md`
- `lead_rapport_brugge.md`
- `lead_tracker.csv`
- `lead_tracker.md`
- `lindy_ai_outreach_prompt_batch2.md`
- `gmail_offerte_automatisering.md`
- `google_script_offerte.js`
- `intake_voorbeelden_playbook.md`
- `intake_vragenlijsten.md`

### Gaat naar `_docs/brand/`:
- `brand_guidelines.md`
- `brand_guidelines_visual.html`

### Gaat naar `_docs/archief/`:
- `3d-hero-demo.html` (demo, niet actief)
- `generate_plan.py` (niet actief)
- `cookiebeleid.md` (afgewerkt)

---

## Klantworkspace Strategie

Elke klant krijgt een **eigen aparte folder** naast `digital solutions consultant`:

```
C:\Users\nick_\
├── digital solutions consultant/     ← Kustlab eigen site + business
├── klanten/
│   ├── stijn-bouvry/                 ← Klant 1
│   ├── tandarts-stevens/             ← Klant 2
│   └── kinesist-maes/               ← Klant 3
└── .agents/
    └── skills/                       ← Globale skills
```

Elke klantfolder heeft:
```
[klantnaam]/
├── .claude/
│   ├── settings.local.json           ← MCP config voor deze klant
│   └── commands/                     ← Workflows voor deze klant
├── src/
├── CLAUDE.md                         ← Klantspecifieke context
└── _docs/                            ← Klantdocumenten (intake, offerte, etc.)
```

---

## Dagelijkse Regels

1. **Nieuwe klant** → nieuwe folder, nooit in de Kustlab hoofdfolder
2. **Afgewerkt document** → direct naar `_docs/archief/`
3. **Campagne afgewerkt** → bestanden naar `_docs/campagnes/archief/`
4. **Hoofdfolder blijft max 5 .md bestanden**
5. **Nooit code bestanden handmatig aanpassen** — altijd via de agent

---

## Wanneer Opruimen?

- Bij start van een nieuwe klant
- Bij afsluiten van een campagne
- Elke eerste dag van de maand (maandelijkse cleanup)
