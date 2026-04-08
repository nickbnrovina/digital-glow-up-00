# Brand Guidelines: Kustlab Digital Solutions

Dit document fungeert als de centrale bron voor de visuele identiteit, missie, communicatie en styling van Kustlab. Het waarborgt een consistente en premium uitstraling over alle kanalen heen.

## 1. Merkidentiteit & Positionering
- **Naam:** Kustlab
- **Positionering:** Digital Solutions Consultant & Strategisch Partner.
- **Doelgroep:** Lokale (KMO) bedrijven (bijv. regio Brugge en de kust) die worstelen met digitale inefficiëntie.
- **Kernwaarden:** Premium, Ontzorgend, Tech-forward, Strategisch, Transparant.

### Tone of Voice
- **Professioneel & Meedenkend:** Geen snelle "wij maken even je website" verkooppraatjes, maar een diepgaande benadering aangaande de bedrijfsvoering van de klant.
- **Oplossingsgericht:** Focus op pijnpunten (meer leads, minder administratie, hogere winstmarges) in plaats van pure technische specificaties.
- **Duidelijk & Toegankelijk:** Vermijd onnodig technisch jargon in klantcommunicatie, behalve om expliciet autoriteit aan te tonen daar waar nodig (zoals "Workflow Automatisering" of "Lead Funnels").

## 2. Typografie
We maken gebruik van moderne Google Fonts voor een strakke, digitale en professionele uitstraling.

- **Koppen (Headings):** `Outfit`
  - *Doel:* Gebruikt voor titels (H1-H6), de logo letter en call-to-actions. Het is een geometrisch, modern font dat innovatie en design uitstraalt.
- **Lopende tekst (Body):** `Inter`
  - *Doel:* Zeer heldere, gebalanceerde en optimaal leesbare letters. Ideaal voor lange teksten, paragrafen en formuleringen op schermen.

## 3. Kleurenpalet (Premium Dark Mode)

Het Kustlab design hanteert primair een 'Dark Mode' esthetiek, wat onmiddellijk een high-end en technologisch geavanceerde sfeer creëert.

### Achtergronden
- **Dark Background:** `#0a0a0e` (Zeer diep donkerblauw/zwart voor optimale contrastwaarde)
- **Secondary Background:** `#0f1016` (Gebruikt voor afwijkende secties om subtiel onderscheid te maken)

### Primaire Accenten
- **Neon Teal (Huisstijlkleur 1):** `#00f2fe`
  - *Gebruik:* Links, Call-To-Action borders, iconen, "Solution" accenten en voor de primary brand gradient.
- **Neon Gradient:** `linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)` (Standaard accentgradient, o.a. gebruikt in knoppen en voor de highlights in de section-titles).

### Secundaire Accenten
- **Neon Orange (Huisstijlkleur 2):** `#ff7b00`
  - *Gebruik:* Belangrijke waarschuwingen of contrasterende "Problem" accenten (zoals in de pijn-vs-oplossing secties op de website).
- **Orange Gradient:** `linear-gradient(135deg, #ff7b00 0%, #ff5200 100%)`

### Tekstkleuren
- **Primary Text:** `#f0f0f0` (Gebroken wit voor hoofdteksten; zachter aan de ogen dan `#ffffff` in dark mode)
- **Secondary Text:** `#a0a0b0` (Licht, 'muted' middengrijs voor subteksten en hints)

## 4. Visuele Stijl & UI Elementen

### Glassmorphism
Kustlab maakt gebruik van elegante glass-effecten in de User Interface. Componenten zoals prijstabellen of navigatiebalken hebben een transparante glow en blur.
- ***CSS Variabelen Implementatie:***
  - Achtergrond: `rgba(255, 255, 255, 0.02)`
  - Randen: `rgba(255, 255, 255, 0.08)`
  - Blur Effect: `backdrop-filter: blur(16px);`

### Banners / Depth
Achtergronden worden verrijkt met zeer zachte, meebewegende (floating) radial gradients van Neon Teal / Oranje om diepte te suggereren (denk aan een subtiele aurora). Dit is altijd ondergeschikt aan de informatie en minder dan 15% opacity.

### Buttons (Knoppen)
- **Primary Button:** Gebruikt de neon-teal gradient achtergrond, volledig afgeronde randen (`border-radius: 30px`), de `Outfit` font, met lichte schaduw en een `hover` effect dat de knop een zachte stijging meegeeft (`transform: translateY(-2px)`).
- **Secondary / Glass Button:** Transparante knoppen met een heldere rand (glass effect), gebruikt voor minder prominente acties (Learn More).
- **Outline Button:** Transparante achtergrond met puur een `2px solid #00f2fe` (Neon Teal) rand en tekst. Bij een 'hover' ontstaat vulling met een lichte (0.1) opacity.

## 5. Logo Regels
- **Type:** Typografisch logo (Wordmark) dat dynamiek en vooruitgang uitstraalt.
- **Font & Gewicht:** `Outfit`, font-weight `800` (bold).
- **Styling:** Het volledige woord inclusief de punt ("Kustlab.") maakt gebruik van een vloeiende, oneindige css-animatie die een specifieke multi-color gradient van links naar rechts doorschuift (`background-size: 200%`).
- **Gradient Kleuren:** Binnen de animatie vloeien de kleuren zachtjes in elkaar over, gebaseerd op het "meegroeien" kleurenpalet:
  - Start (Turquoise/Teal): `#00ebd3`
  - Midden-links (Zachtgroen): `#61c87a`
  - Midden-rechts (Olijf/Khaki): `#a5b55e`
  - Einde woord (Aanzwellend Oranje): `#ff8a00`, `#ff5200`, `#ff3300`
- **Resultaat:** Het verloop benadrukt de beweging van koudere, technologische kleuren (blauw/groen) naar een uiterst warme, energieke en menselijke afronding (diep oranje) op de `b` en het puntje `.`.

## 6. Fotografie & Assets
- **Beeldstijl:** Minimalistisch, abstracte 3D elementen, of strakke werk/tech settings.
- Harmonieert altijd met Dark-Mode. Abstracte lichten, of donkere ruimtes met verlichting die accenten legt op de belangrijke details om zo de premium 'Consultancy' indruk vorm te geven.
