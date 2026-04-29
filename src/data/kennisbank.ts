export type KennisbankArticle = {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string; // HTML or Markdown strings
  category: string;
  readTime: string;
  date: string;
};

export const kennisbankArticles: KennisbankArticle[] = [
  {
    id: "1",
    slug: "eerste-betalingsherinnering-voorbeeld",
    title: "De perfecte eerste betalingsherinnering: Voorbeeld & Tips",
    description: "Een vriendelijke maar duidelijke eerste betalingsherinnering zorgt voor snellere betaling zonder de klantrelatie te schaden. Gebruik ons gratis voorbeeld.",
    content: "<h2>Waarom een goede eerste herinnering cruciaal is</h2><p>Vaak is een factuur gewoon vergeten. Een vriendelijke mail is genoeg.</p><h3>Voorbeeld Eerste Herinnering</h3><div class='bg-muted p-4 rounded-md my-4 font-mono text-sm border'>Beste [Naam],<br/><br/>We merkten op dat factuur [Nummer] nog openstaat. Waarschijnlijk is dit aan uw aandacht ontsnapt. Kunt u dit zo spoedig mogelijk nakijken?<br/><br/>Met vriendelijke groet,<br/>[Uw Bedrijf]</div>",
    category: "Templates",
    readTime: "3 min",
    date: "2026-04-29"
  },
  {
    id: "2",
    slug: "wettelijke-rente-belgie-b2b",
    title: "Wettelijke Rente in België (B2B): Wat mag je aanrekenen?",
    description: "Hoeveel verwijlintresten mag je wettelijk aanrekenen als een bedrijf je factuur niet betaalt? Ontdek de actuele tarieven en regels.",
    content: "<h2>Wet Betalingsachterstand bij Handelstransacties</h2><p>In België is de wetgeving rond B2B betalingen streng, maar eerlijk. Je hebt recht op een vergoeding.</p><h3>Actuele Tarieven</h3><p>De wettelijke intrestvoet verandert per halfjaar. Controleer altijd de actuele stand bij de FOD Financiën.</p>",
    category: "Juridisch",
    readTime: "5 min",
    date: "2026-04-29"
  },
  {
    id: "3",
    slug: "factuur-niet-betaald-stappenplan",
    title: "Klant betaalt factuur niet: 5 Stappen tot actie",
    description: "Wat moet je doen als een factuur na meerdere herinneringen onbetaald blijft? Volg dit concrete 5-stappenplan.",
    content: "<h2>Stappenplan bij wanbetaling</h2><ol><li>Vriendelijke herinnering</li><li>Telefonisch contact</li><li>Aangetekende ingebrekestelling</li><li>Incassobureau</li><li>Gerechtelijke stappen (via advocaat)</li></ol>",
    category: "Gids",
    readTime: "4 min",
    date: "2026-04-29"
  },
  {
    id: "4",
    slug: "automatisatie-debiteurenbeheer",
    title: "Waarom handmatig debiteurenbeheer je geld kost",
    description: "Zelf achter onbetaalde facturen aanzitten kost zeeën van tijd. Leer hoe automatisering je cashflow verbetert.",
    content: "<h2>Tijd is Geld</h2><p>Elke minuut die je spendeert aan het manueel versturen van emails is een minuut die je niet besteedt aan je core business.</p>",
    category: "Automatisering",
    readTime: "4 min",
    date: "2026-04-29"
  },
  {
    id: "5",
    slug: "schadebeding-algemene-voorwaarden",
    title: "Het schadebeding in je algemene voorwaarden",
    description: "Zonder goede algemene voorwaarden kan je geen schadebeding of administratiekosten aanrekenen. Zorg dat je gedekt bent.",
    content: "<h2>Wat is een schadebeding?</h2><p>Een forfaitaire vergoeding voor de administratieve last van een onbetaalde factuur.</p>",
    category: "Juridisch",
    readTime: "5 min",
    date: "2026-04-29"
  },
  {
    id: "6",
    slug: "tweede-betalingsherinnering-ingebrekestelling",
    title: "Tweede herinnering of direct ingebrekestelling?",
    description: "Wanneer is het tijd voor een tweede vriendelijke mail, en wanneer moet je harder optreden? Ontdek onze best practices.",
    content: "<h2>De Toon Bepalen</h2><p>De tweede mail moet zakelijker zijn. Geef een duidelijke deadline (bijv. 5 werkdagen).</p>",
    category: "Gids",
    readTime: "3 min",
    date: "2026-04-29"
  },
  {
    id: "7",
    slug: "waarom-sneller-betaald-worden-belangrijk-is",
    title: "Cashflow optimalisatie: Het belang van stipte betalingen",
    description: "Een gezonde cashflow is de zuurstof van je bedrijf. Ontdek tips om je Days Sales Outstanding (DSO) te verlagen.",
    content: "<h2>Wat is DSO?</h2><p>Days Sales Outstanding is de gemiddelde tijd voordat je facturen betaald worden. Hoe lager, hoe beter.</p>",
    category: "Financieel",
    readTime: "4 min",
    date: "2026-04-29"
  },
  {
    id: "8",
    slug: "aangetekende-ingebrekestelling-voorbeeld",
    title: "Voorbeeld aangetekende ingebrekestelling",
    description: "De laatste stap voor de rechtbank: de formele ingebrekestelling. Download ons voorbeeld en ontdek waaraan deze moet voldoen.",
    content: "<h2>Juridische Vereisten</h2><p>Een ingebrekestelling moet duidelijk vermelden dat het om een formele aanmaning gaat, met vermelding van het exacte bedrag plus eventuele intresten en schadebeding.</p>",
    category: "Templates",
    readTime: "3 min",
    date: "2026-04-29"
  }
];
