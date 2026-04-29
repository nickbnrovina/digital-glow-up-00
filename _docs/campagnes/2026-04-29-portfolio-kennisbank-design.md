# Design Specificatie: Kustlab Portfolio & Kennisbank

## 1. Doel
Het integreren van de 'BetaalSneller' marketing content en SaaS-case study op de Kustlab website. Dit dient twee doelen:
1. **Autoriteit & SEO (Kennisbank):** Lokale ondernemers aantrekken via SEO-geoptimaliseerde artikelen over facturatie en automatisering.
2. **Social Proof (Portfolio):** BetaalSneller inzetten als hét ultieme bewijs van Kustlab's consultancy- en ontwikkelingsvaardigheden.

## 2. Architectuur & Routing

De Kustlab applicatie (React + Vite + React Router) wordt uitgebreid met de volgende routes:

### 2.1 Nieuwe Pagina's (Routes)
- `/portfolio/betaalsneller`: Uitgebreide Case Study pagina over de bouw en visie van BetaalSneller.
- `/kennisbank`: Overzichtspagina van alle SEO-artikelen met categorie-filtering.
- `/kennisbank/:slug`: Detailpagina voor het lezen van een specifiek artikel.

### 2.2 Data Structuur
Er komen twee statische data-bestanden om de content te beheren (geen database nodig voor maximale snelheid en veiligheid):
- `src/data/portfolio.ts`: Bevat de case studies (momenteel enkel BetaalSneller).
- `src/data/kennisbank.ts`: Bevat de structuur en inhoud van alle SEO-artikelen.

## 3. SEO & Juridische Compliance

### 3.1 SEO Optimalisatie (Perfect tot in de puntjes)
- Implementatie van `react-helmet-async` (indien nog niet aanwezig) om dynamisch de `<title>` en `<meta name="description">` tags te veranderen per artikel.
- Semantische HTML5 (juist gebruik van `<h1>`, `<h2>`, `<article>`).
- Toevoegen van **JSON-LD Schema Markup** (Type: `Article` of `BlogPosting`) voor perfecte Google indexering.

### 3.2 Juridische Disclaimer (Wettelijk correct)
Omdat de kennisbank deels gaat over wettelijke rente en betalingsherinneringen in België, moet elk artikel in de footer een duidelijke, professionele disclaimer bevatten:
*Disclaimer: Deze artikelen bieden algemene informatie over facturatie- en incassoprocessen in België en vormen geen formeel juridisch of financieel advies. Raadpleeg bij complexe geschillen steeds een advocaat of incassobureau.*

## 4. UI / UX Design

De toevoegingen moeten naadloos aansluiten bij het premium design van Kustlab:

### 4.1 Homepage: Portfolio Sectie (`PortfolioSection.tsx`)
- Komt tussen 'Diensten' en 'Werkwijze'.
- Eén grote, opvallende "Featured Project" lay-out.
- Strakke mock-up afbeelding van het BetaalSneller dashboard.
- Link naar de uitgebreide case study (`/portfolio/betaalsneller`).

### 4.2 Kennisbank Overzicht (`KennisbankIndex.tsx`)
- Strakke grid-layout van artikelkaarten.
- Tags/Pills voor categorieën (Bijv. 'Juridisch', 'Templates', 'Gids').
- Leestijd (bijv. "5 min lezen") weergeven op de kaart voor hogere doorklikratio.

### 4.3 Artikel Pagina (`KennisbankArtikel.tsx`)
- Gecentreerde, smalle leeskolom (max-w-prose) voor optimale leesbaarheid.
- Duidelijke "Call to Action" blokken naar BetaalSneller, zacht geïntegreerd in de tekst.
- Component voor 'Templates': Een grijze box met een makkelijke "Kopieer tekst" knop voor de betalingsherinnering-voorbeelden.

## 5. Implementatie Stappen

1. **Afhankelijkheden:** Installeren van `react-helmet-async` en `lucide-react` (indien nog ontbrekend) voor SEO tags en iconen.
2. **Data Creatie:** Aanmaken van de 8 initiële artikelen in `kennisbank.ts`.
3. **Componenten:** Ontwikkelen van de Portfolio sectie voor op de homepage.
4. **Pagina's:** Ontwikkelen van `/kennisbank`, de artikel view, en de BetaalSneller case study pagina.
5. **Koppeling:** Updaten van `App.tsx` en de navigatiemenu's om de nieuwe routes te ontsluiten.
