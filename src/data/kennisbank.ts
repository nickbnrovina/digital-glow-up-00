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
    description: "Een vriendelijke maar duidelijke eerste betalingsherinnering zorgt voor snellere betaling zonder de klantrelatie te schaden. Gebruik onze professionele template.",
    content: `<h2>Het Belang van een Goede Eerste Herinnering</h2>
    <p>Een onbetaalde factuur is vaak het gevolg van een simpele administratieve vergetelheid. Het doel van de eerste herinnering is daarom niet om te dreigen, maar om de klant op een professionele manier te herinneren aan de openstaande schuld. Dit helpt om de klantrelatie optimaal te behouden terwijl je tegelijkertijd jouw cashflow beschermt.</p>
    
    <h3>Waarom de toon ertoe doet</h3>
    <p>Als je te agressief start, loop je het risico een waardevolle klant te verliezen. Een te zachte aanpak leidt er echter toe dat de factuur verder naar beneden op de prioriteitenlijst verschuift. De perfecte eerste herinnering is <strong>vriendelijk, feitelijk en duidelijk</strong>.</p>
    
    <h3>Gratis Template Eerste Herinnering</h3>
    <div class='bg-muted p-5 rounded-md my-6 font-mono text-sm border shadow-sm'>
      <strong>Onderwerp:</strong> Herinnering: Factuur [Factuurnummer] vervallen<br/><br/>
      Beste [Naam Contactpersoon],<br/><br/>
      We hopen dat alles goed met u gaat.<br/><br/>
      Uit onze administratie blijkt dat factuur <strong>[Factuurnummer]</strong> met een bedrag van <strong>€[Bedrag]</strong> momenteel nog openstaat. De vervaldatum was op [Datum].<br/><br/>
      Waarschijnlijk is deze factuur aan uw aandacht ontsnapt. We willen u daarom vriendelijk verzoeken om het openstaande bedrag binnen de 5 werkdagen over te maken op rekeningnummer [IBAN] ten name van [Jouw Bedrijf].<br/><br/>
      Mocht deze betaling het bericht gekruist hebben, dan kunt u deze e-mail als onverzonden beschouwen.<br/><br/>
      Voor de volledigheid hebben wij een kopie van de factuur in de bijlage toegevoegd. Mocht u vragen hebben, neem dan gerust contact met ons op.<br/><br/>
      Met vriendelijke groet,<br/><br/>
      [Jouw Naam/Bedrijf]
    </div>
    
    <h3>Tips voor het versturen</h3>
    <ul>
      <li><strong>Timing:</strong> Stuur de eerste herinnering idealiter 3 tot 5 dagen na de vervaldatum.</li>
      <li><strong>Betaallink:</strong> Voeg altijd een directe betaallink toe in uw e-mail. Dit verlaagt de drempel om te betalen aanzienlijk. Systemen zoals <em>BetaalSneller</em> doen dit automatisch.</li>
      <li><strong>Bijlage:</strong> Voeg altijd de originele factuur toe als PDF. Zo hoeft de klant niet te zoeken in zijn inbox.</li>
    </ul>`,
    category: "Templates",
    readTime: "4 min",
    date: "2026-04-29"
  },
  {
    id: "2",
    slug: "wettelijke-rente-belgie-b2b",
    title: "Wettelijke Rente in België (B2B): Wat mag je precies aanrekenen?",
    description: "Hoeveel verwijlintresten mag je wettelijk aanrekenen als een bedrijf je factuur niet betaalt? Een compleet overzicht van de Belgische B2B wetgeving.",
    content: `<h2>Wet Betalingsachterstand bij Handelstransacties</h2>
    <p>In België is de wetgeving rond B2B-betalingen (Business to Business) relatief streng, wat goed nieuws is voor jou als schuldeiser. Volgens de wet van 2 augustus 2002 ter bestrijding van de betalingsachterstand bij handelstransacties, heb je automatisch recht op verwijlinteresten vanaf de dag volgend op de vervaldatum van de factuur, zonder dat hiervoor een voorafgaande ingebrekestelling nodig is.</p>
    
    <h3>Actuele Tarieven en Toepassing</h3>
    <p>De wettelijke intrestvoet voor handelstransacties wordt elk semester (halfjaarlijks) opnieuw vastgelegd door de FOD Financiën. Voor de actuele rentevoet verwijzen wij altijd naar het Belgisch Staatsblad of de officiële website van de overheid. Over het algemeen schommelt dit tarief historisch tussen de 8% en 12.5% op jaarbasis.</p>
    
    <h3>Kan ik zelf een intrestvoet bepalen?</h3>
    <p>Ja, je bent vrij om contractueel een andere intrestvoet vast te leggen in je Algemene Voorwaarden. Zolang beide partijen (in een B2B context) hiermee vooraf hebben ingestemd, is deze contractuele rente geldig. Veel bedrijven hanteren standaard 10% of 1% per begonnen maand.</p>
    
    <div class='bg-blue-50 border-l-4 border-blue-500 p-4 my-6'>
      <strong>Let op: B2B versus B2C</strong><br/>
      De regels rondom wettelijke rente zijn fundamenteel anders wanneer je zaken doet met particulieren (consumenten). Sinds de nieuwe incassowetgeving (Boek XIX WER) gelden er voor consumenten strikte plafonds en verplichte wachttermijnen.
    </div>
    
    <h3>Hoe bereken je de rente?</h3>
    <p>Verwijlintresten worden per dag berekend. De formule is: <br/>
    <code>(Openstaand Bedrag) x (Intrestvoet / 365) x (Aantal dagen te laat)</code></p>
    <p>Het is een administratieve last om dit handmatig bij te houden. Daarom kiezen steeds meer KMO's voor geautomatiseerde facturatie-oplossingen die deze intresten automatisch berekenen op de vervaldag.</p>`,
    category: "Juridisch",
    readTime: "6 min",
    date: "2026-04-29"
  },
  {
    id: "3",
    slug: "factuur-niet-betaald-stappenplan",
    title: "Klant betaalt factuur niet: Hét 5-Stappenplan tot actie",
    description: "Wat moet je doen als een factuur na meerdere herinneringen onbetaald blijft? Voorkom paniek en volg dit bewezen, effectieve 5-stappenplan.",
    content: `<h2>Gestructureerd Optreden Voorkomt Verlies</h2>
    <p>Niets is zo frustrerend als een klant die weigert te betalen voor geleverd werk of diensten. Wanneer je emotioneel reageert, maak je sneller juridische fouten. Een vast proces zorgt voor rust en professionaliteit. Volg deze 5 stappen om de kans op recuperatie te maximaliseren.</p>
    
    <h3>Stap 1: De Vriendelijke Herinnering (Dag +3)</h3>
    <p>Stuur kort na de vervaldatum een vriendelijke email. Ga ervan uit dat de factuur over het hoofd is gezien. Voeg altijd de originele factuur en een betaallink toe.</p>
    
    <h3>Stap 2: De Tweede Herinnering / Telefonisch Contact (Dag +14)</h3>
    <p>Blijft reactie uit? Stuur een formelere tweede herinnering. Beter nog: pak de telefoon. Een telefoongesprek haalt vaak de angel uit de situatie. Soms is er sprake van ontevredenheid of een tijdelijk liquiditeitsprobleem. Samen praten lost 70% van de gevallen op.</p>
    
    <h3>Stap 3: De Formele Ingebrekestelling (Dag +25)</h3>
    <p>Heeft bellen geen nut gehad of weigert de klant afspraken na te komen? Dan is het tijd voor een aangetekende ingebrekestelling. Hierin eis je de betaling binnen een specifieke termijn (bijv. 8 dagen) en verwijs je naar eventuele juridische stappen, intresten en schadebedingen.</p>
    
    <h3>Stap 4: Schakel Externe Hulp in (Incassobureau / IOS procedure)</h3>
    <p>Voor B2B facturen in België bestaat er sinds 2016 een IOS-procedure (Invordering van Onbetwiste Schulden). Hiermee kan je via een advocaat en gerechtsdeurwaarder zonder rechtbank een uitvoerbare titel verkrijgen, mits de factuur onbetwist is. Dit is sneller en goedkoper dan een klassieke rechtszaak.</p>
    
    <h3>Stap 5: Dagvaarding (Rechtbank)</h3>
    <p>Heeft de klant de factuur inhoudelijk betwist, of gaat het om een B2C klant? Dan is de rechtbank helaas de laatste optie. Schakel hiervoor altijd een gespecialiseerde advocaat in. Maak vooraf een kosten-batenanalyse: voor een factuur van €150 is een rechtszaak financieel niet verantwoord.</p>`,
    category: "Gids",
    readTime: "5 min",
    date: "2026-04-29"
  },
  {
    id: "4",
    slug: "automatisatie-debiteurenbeheer",
    title: "Waarom handmatig debiteurenbeheer de groei van je KMO afremt",
    description: "Zelf wekelijks achter onbetaalde facturen aanzitten is duur en inefficiënt. Ontdek de enorme voordelen van geautomatiseerd debiteurenbeheer.",
    content: `<h2>De Verborgen Kosten van Handmatig Werk</h2>
    <p>Voor veel freelancers en kleine KMO's ziet de vrijdagmiddag er als volgt uit: inloggen in de bank, lijsten afvinken op een Excel sheet, en daarna handmatig e-mails typen naar klanten die niet betaald hebben. Dit proces is tijdrovend, foutgevoelig en vooral bijzonder demotiverend.</p>
    
    <h3>1. Tijd is Je Meest Waardevolle Activa</h3>
    <p>Stel dat je 4 uur per maand besteedt aan het najagen van facturen. Als jouw uurtarief €80 bedraagt, kost dit proces je maandelijks €320. Een goed geautomatiseerd systeem, zoals <em>BetaalSneller</em>, kost slechts een fractie hiervan en voert de taken sneller én constanter uit.</p>
    
    <h3>2. Emotionele Afstand</h3>
    <p>Geld vragen aan klanten is vaak ongemakkelijk, zeker als je intensief met hen hebt samengewerkt. Automatisering creëert een buffer. Klanten percipiëren een geautomatiseerde herinnering vanuit een systeem als zakelijker en professioneler dan een persoonlijk berichtje via WhatsApp.</p>
    
    <h3>3. Consistentie Brengt Cash</h3>
    <p>Het grootste probleem met handmatig beheer is inconsistentie. Tijdens drukke periodes vergeet je herinneringen te sturen, waardoor de betalingen nog verder vertragen. Een geautomatiseerd systeem kijkt niet naar werkdruk: dag +3 betekent dat de mail stipt wordt verstuurd. Deze consistentie verlaagt de DSO (Days Sales Outstanding) drastisch.</p>
    
    <h3>Hoe begin je met automatisering?</h3>
    <p>De overstap hoeft niet complex te zijn. Je hebt geen zware ERP-pakketten nodig. Moderne tools koppelen met je bestaande werkwijze en nemen enkel het nazorg-traject uit handen. Begin met het standaardiseren van je betalingsvoorwaarden en kies een tool die automatische follow-ups met betaallinks verstuurt.</p>`,
    category: "Automatisering",
    readTime: "4 min",
    date: "2026-04-29"
  },
  {
    id: "5",
    slug: "schadebeding-algemene-voorwaarden",
    title: "Het schadebeding in je algemene voorwaarden uitgelegd",
    description: "Zonder waterdichte algemene voorwaarden kan je geen schadebeding of administratiekosten aanrekenen. Zorg dat je juridisch volledig gedekt bent.",
    content: `<h2>Wat is een Schadebeding Precies?</h2>
    <p>Een schadebeding is een contractueel overeengekomen clausule (vaak in de Algemene Voorwaarden) die bepaalt dat de wanbetaler een forfaitair bedrag moet betalen ter compensatie van de buitengerechtelijke invorderingskosten en de administratieve overlast die gepaard gaat met de late betaling.</p>
    <p>Let op: dit is niet hetzelfde als verwijlinteresten (wat de vergoeding is voor de vertraging van de betaling zelf).</p>
    
    <h3>Waarom is het onmisbaar?</h3>
    <p>Het invorderen van een factuur kost tijd en moeite. De wettelijke intresten alleen dekken zelden de effectieve administratieve kost (denk aan aangetekende zendingen, dossierbeheer, etc.). Met een geldig schadebeding verschuif je deze kosten naar de wanbetaler.</p>
    
    <h3>Voorwaarden voor Geldigheid (B2B)</h3>
    <p>In B2B relaties ben je vrij om een schadebeding op te nemen, maar dit beding moet voldoen aan de volgende vereisten om afdwingbaar te zijn:</p>
    <ul>
      <li><strong>Expliciet aanvaard:</strong> De klant moet je algemene voorwaarden gekend en aanvaard hebben, bij voorkeur vóór of bij het sluiten van de overeenkomst.</li>
      <li><strong>Redelijkheid:</strong> Het bedrag moet redelijk blijven. Meestal wordt 10% van het factuurbedrag geaccepteerd, met een minimum van bijvoorbeeld €40.</li>
      <li><strong>Wederkerigheid:</strong> Hoewel niet altijd strikt vereist in B2B (in tegenstelling tot B2C), is een wederkerig beding altijd sterker in de rechtbank.</li>
    </ul>
    
    <div class='bg-red-50 border-l-4 border-red-500 p-4 my-6'>
      <strong>Belangrijke Wijziging B2C:</strong><br/>
      Sinds de nieuwe regelgeving van kracht is, zijn schadebedingen naar consumenten toe zeer strikt gelimiteerd tot wettelijke plafonds. Een forfaitair beding van 10% op een factuur van €5000 is naar een consument toe niet meer zomaar geldig. Laat je voorwaarden dus altijd nakijken door een expert.
    </div>`,
    category: "Juridisch",
    readTime: "6 min",
    date: "2026-04-29"
  },
  {
    id: "6",
    slug: "tweede-betalingsherinnering-ingebrekestelling",
    title: "Tweede herinnering of direct ingebrekestelling? Een afweging",
    description: "Wanneer is het tijd voor een tweede vriendelijke mail, en wanneer moet je harder optreden? Ontdek onze best practices voor effectieve communicatie.",
    content: `<h2>De Escalatie-ladder van Debiteurenbeheer</h2>
    <p>Je hebt de eerste herinnering verstuurd, maar het blijft oorverdovend stil aan de andere kant. De vraag die dan volgt is: sturen we nog een "vriendelijke" mail, of schakelen we direct over naar een formele ingebrekestelling?</p>
    
    <h3>Het verschil tussen beide documenten</h3>
    <ul>
      <li><strong>Tweede Herinnering:</strong> Heeft geen speciale juridische waarde. Het dient puur als een dringendere opvolging.</li>
      <li><strong>Ingebrekestelling:</strong> Is een formele juridische stap die noodzakelijk is (of sterk aangeraden) voordat je contractuele intresten en het schadebeding kunt opeisen via de rechtbank.</li>
    </ul>
    
    <h3>Onze Best Practice Aanpak</h3>
    <p>In 85% van de gevallen raden wij de volgende workflow aan voor B2B-facturen:</p>
    <ol>
      <li><strong>Vervaldatum + 3 dagen:</strong> Vriendelijke herinnering.</li>
      <li><strong>Vervaldatum + 14 dagen:</strong> Tweede herinnering. De toon wordt zakelijker. Je stelt een harde deadline van 5 werkdagen en waarschuwt voor verdere stappen.</li>
      <li><strong>Vervaldatum + 21 dagen:</strong> Formele ingebrekestelling. Deze stuur je idealiter zowel per mail als aangetekend.</li>
    </ol>
    
    <h3>Wanneer sla je de tweede herinnering over?</h3>
    <p>Als je al weet dat de klant liquiditeitsproblemen heeft, of als de communicatie met de klant is verzuurd, heeft een tweede herinnering weinig zin. In zulke gevallen is direct overschakelen naar een ingebrekestelling de meest efficiënte route om je positie als schuldeiser veilig te stellen.</p>`,
    category: "Gids",
    readTime: "4 min",
    date: "2026-04-29"
  },
  {
    id: "7",
    slug: "waarom-sneller-betaald-worden-belangrijk-is",
    title: "Cashflow optimalisatie: Waarom je Days Sales Outstanding (DSO) omlaag moet",
    description: "Een gezonde cashflow is de zuurstof van je bedrijf. Ontdek strategische tips om je DSO te verlagen en je financiële gezondheid te versterken.",
    content: `<h2>Cash is King</h2>
    <p>Je bedrijf kan op papier enorm winstgevend zijn, maar als je klanten hun facturen pas na 90 dagen betalen, loop je toch het risico op een faillissement. Dit fenomeen wordt veroorzaakt door een slecht cashflow-beheer. Het meten en verlagen van je DSO (Days Sales Outstanding) is daarom de belangrijkste prioriteit voor elke CFO of zaakvoerder.</p>
    
    <h3>Wat is DSO en hoe bereken je het?</h3>
    <p>De Days Sales Outstanding toont aan hoe lang het gemiddeld duurt voordat een factuur betaald wordt na uitgifte. <br/>
    Formule: <code>(Totaal debiteurensaldo / Totale kredietverkopen) x Aantal dagen in periode</code></p>
    
    <h3>De Gevolgen van een hoge DSO</h3>
    <ul>
      <li><strong>Gebrek aan liquiditeit:</strong> Je kunt zelf je leveranciers, BTW of personeel niet tijdig betalen.</li>
      <li><strong>Gederfde inkomsten:</strong> Geld dat op de bank staat bij je klant, brengt jou geen rente op en kan niet geïnvesteerd worden in je eigen groei.</li>
      <li><strong>Verhoogd risico op oninbaarheid:</strong> Hoe ouder een factuur, hoe kleiner de kans dat deze uiteindelijk nog volledig betaald wordt.</li>
    </ul>
    
    <h3>3 Tactieken om je DSO drastisch te verlagen</h3>
    <p><strong>1. Factureer Onmiddellijk:</strong> Wacht niet tot het einde van de maand om je facturen de deur uit te doen. Diensten geleverd? Factuur verstuurd.</p>
    <p><strong>2. Korte Betalingstermijnen:</strong> Vraag je af of 30 dagen echt nodig is. Veel KMO's stappen over op betalingstermijnen van 14 of zelfs 7 dagen. Als je uitmuntend werk levert, zullen klanten dit accepteren.</p>
    <p><strong>3. Elimineer Frictie:</strong> Maak betalen zo makkelijk mogelijk. Integreer Bancontact, iDeal of creditcard betaallinks in je facturen. Hoe minder kliks de klant moet doen, hoe sneller het geld op je rekening staat.</p>`,
    category: "Financieel",
    readTime: "5 min",
    date: "2026-04-29"
  },
  {
    id: "8",
    slug: "aangetekende-ingebrekestelling-voorbeeld",
    title: "Formele Ingebrekestelling: Voorbeeld en Juridische Eisen",
    description: "De laatste stap voor incasso of de rechtbank: de formele ingebrekestelling. Download ons voorbeeld en ontdek waaraan deze exact moet voldoen.",
    content: `<h2>De Laatste Waarschuwing</h2>
    <p>Een formele ingebrekestelling is een juridisch zwaarwichtig document. Het is de laatste officiële waarschuwing aan je debiteur alvorens je het dossier uit handen geeft aan een incassobureau, gerechtsdeurwaarder of advocaat.</p>
    
    <h3>Wat MOET er in de brief staan?</h3>
    <p>Een geldige ingebrekestelling is geen vage bedreiging. Ze moet specifieke elementen bevatten:</p>
    <ul>
      <li>Het woord <strong>"Ingebrekestelling"</strong> in de titel.</li>
      <li>Een nauwkeurige omschrijving van de openstaande factuur (datum, factuurnummer).</li>
      <li>De <strong>berekening</strong> van het exacte totaalbedrag: hoofdsom + intresten + schadebeding.</li>
      <li>Een <strong>ultieme termijn</strong> waarbinnen betaald moet worden (doorgaans 8 tot 15 dagen).</li>
      <li>De melding van verdere acties (bijv. "Bij gebreke aan betaling binnen de gestelde termijn, zullen wij dit dossier ter invordering overdragen aan...").</li>
    </ul>
    
    <h3>Gratis Template Ingebrekestelling (B2B)</h3>
    <div class='bg-muted p-5 rounded-md my-6 font-mono text-sm border shadow-sm'>
      <strong>Aangetekend schrijven en per gewone post/e-mail</strong><br/><br/>
      <strong>Onderwerp: INGEBREKESTELLING – Betreft factuur [Nummer]</strong><br/><br/>
      Beste [Naam],<br/><br/>
      Ondanks onze eerdere herinneringen mochten wij tot op heden geen betaling ontvangen met betrekking tot factuur [Factuurnummer] van [Datum] voor een oorspronkelijk bedrag van €[Bedrag].<br/><br/>
      Hiermee stellen wij u <strong>formeel in gebreke</strong>.<br/><br/>
      Overeenkomstig onze algemene voorwaarden, werd het verschuldigde bedrag inmiddels verhoogd met de overeengekomen verwijlintresten en het schadebeding. Het totaal verschuldigde bedrag komt hiermee op <strong>€[Nieuw Totaalbedrag]</strong>.<br/><br/>
      Wij verzoeken en voor zover als nodig sommeren wij u om het totaalbedrag van €[Nieuw Totaalbedrag] binnen een fatale termijn van <strong>8 dagen</strong> na dagtekening van deze brief over te maken op rekening [IBAN].<br/><br/>
      Indien betaling uitblijft, zullen wij ons genoodzaakt zien dit dossier zonder verdere waarschuwing uit handen te geven. Alle hieruit voortvloeiende kosten zullen eveneens op u verhaald worden.<br/><br/>
      Wij vertrouwen erop dat u het niet zover laat komen.<br/><br/>
      Hoogachtend,<br/>
      [Jouw Handtekening]
    </div>`,
    category: "Templates",
    readTime: "5 min",
    date: "2026-04-29"
  },
  {
    id: "9",
    slug: "voorschotfacturen-waarom-en-hoe",
    title: "Voorschotfacturen: Het geheime wapen voor een sterke cashflow",
    description: "Durf jij een voorschot te vragen? Ontdek waarom voorschotfacturen standaard in je B2B proces zouden moeten zitten en hoe je dit aanpakt.",
    content: `<h2>Waarom wachten op je geld?</h2>
    <p>Als freelancer, agency of aannemer maak je vaak kosten nog vóór het project goed en wel is begonnen. Je koopt licenties in, reserveert tijd en schaft materialen aan. Toch wachten veel ondernemers tot de oplevering om te factureren. Dit is een enorm risico voor je cashflow en legt alle financiële druk bij jou.</p>
    
    <h3>De Voordelen van een Voorschot</h3>
    <ul>
      <li><strong>Directe Liquiditeit:</strong> Je hebt meteen budget om externe kosten te dekken.</li>
      <li><strong>Commitment van de klant:</strong> Zodra een klant betaalt, zijn ze psychologisch en financieel gecommitteerd aan het project. De kans op annulaties daalt naar nagenoeg nul.</li>
      <li><strong>Kredietrisico spreiding:</strong> Als een project halverwege spaak loopt, heb je in ieder geval al een deel van je uren vergoed gekregen.</li>
    </ul>
    
    <h3>Hoeveel procent vraag je?</h3>
    <p>In de dienstensector (zoals webdesign, consulting, marketing) is <strong>30% tot 50%</strong> bij akkoord een industriestandaard. Voor projecten met hoge materiaalkosten (zoals de bouwsector) loopt dit vaak nog hoger op om hardware- of inkoopkosten direct te dekken.</p>
    
    <h3>Hoe communiceer je dit professioneel?</h3>
    <p>Maak het geen "ding". Vermeld de voorschotregeling gewoon standaard in je offertes. Een zin zoals <em>"Na akkoord op deze offerte ontvangt u de eerste voorschotfactuur (30%). De werkzaamheden starten na ontvangst van deze betaling."</em> is zakelijk, duidelijk en professioneel.</p>`,
    category: "Financieel",
    readTime: "4 min",
    date: "2026-04-29"
  },
  {
    id: "10",
    slug: "klanten-screenen-op-kredietwaardigheid",
    title: "Voorkom wanbetalers: Hoe screen je B2B klanten op kredietwaardigheid?",
    description: "Een factuur sturen naar een bedrijf dat op de rand van het faillissement staat, is zinloos. Leer hoe je financiële risico's op voorhand inschat.",
    content: `<h2>Genezen is duur, Voorkomen is beter</h2>
    <p>Elk debiteurenbeheer-proces start eigenlijk al vóór je de eerste dienst geleverd hebt. Als je in zee gaat met een bedrijf dat financiële moeilijkheden kent, helpen zelfs de beste betalingsherinneringen en incassobureaus je niet verder.</p>
    
    <h3>Zelf een basis-screening uitvoeren (België)</h3>
    <p>Een diepgaande financiële screening uitbesteden kost geld, maar je kan zelf gratis al heel veel te weten komen over een potentiële Belgische klant:</p>
    
    <ol>
      <li><strong>Kruispuntbank van Ondernemingen (KBO):</strong> Zoek het ondernemingsnummer op. Is de onderneming nog actief? Wie zijn de bestuurders? Komt het adres overeen met wat ze jou hebben verteld?</li>
      <li><strong>Balanscentrale (NBB):</strong> Belgische vennootschappen (zoals een BV of NV) moeten jaarlijks hun jaarrekening neerleggen bij de Nationale Bank. Je kunt de meest recente balans gratis downloaden als PDF. Kijk specifiek naar het eigen vermogen en de liquide middelen. Staan ze dik in het rood? Dan is een 100% voorschot geen overbodige luxe.</li>
      <li><strong>Staatsblad Publicaties:</strong> Zoek op of er recent bestuurders zijn opgestapt, of dat de zetel onlangs meermaals is verplaatst. Dit kunnen 'red flags' zijn.</li>
    </ol>
    
    <h3>Wanneer schakel je een professionele kredietbeoordelaar in?</h3>
    <p>Als je contracten sluit met een hoge aannemingssom (bijv. €50.000+), is het absoluut aangeraden om een bedrijfsrapport aan te vragen bij partijen zoals Graydon of Creditsafe. Voor een kleine kost krijg je een compleet risicoprofiel en een concreet kredietadvies.</p>`,
    category: "Gids",
    readTime: "5 min",
    date: "2026-04-29"
  },
  {
    id: "11",
    slug: "impact-bancontact-op-betaalsnelheid",
    title: "De impact van online betaallinks op de betaalsnelheid van facturen",
    description: "Wist je dat facturen met een betaallink (zoals Bancontact of iDeal) gemiddeld 3x sneller betaald worden? Ontdek de data.",
    content: `<h2>Frictie: De Vijand van Betalingen</h2>
    <p>Bekijk het proces van je klant eens als zij jouw factuur moeten betalen via een klassieke bankoverschrijving:</p>
    <ol>
      <li>Ze openen de PDF.</li>
      <li>Ze openen hun bank-app of website op een ander scherm.</li>
      <li>Ze typen de naam van jouw bedrijf over.</li>
      <li>Ze kopiëren het IBAN nummer.</li>
      <li>Ze vullen het exacte bedrag in.</li>
      <li>Ze kopiëren de gestructureerde mededeling (als dit al lukt zonder typfouten).</li>
    </ol>
    <p>Dit proces bevat enorm veel frictie. En frictie leidt altijd tot uitstelgedrag. "Ik doe het vanavond wel op de laptop."</p>
    
    <h3>De Psychologie van Betaallinks</h3>
    <p>Door een knop toe te voegen in je email (bijvoorbeeld "Betaal nu via Bancontact"), reduceer je die 6 stappen tot 2 stappen. Het bedrag, rekeningnummer en mededeling zijn vooraf ingevuld in de betaalomgeving. De klant verifieert via hun banking app (bijv. Payconiq) en klaar.</p>
    
    <h3>Harde Cijfers</h3>
    <p>Uit analyses van fintech platformen blijkt dat facturen met een online betaallink gemiddeld <strong>3 tot 4 keer sneller</strong> worden voldaan. Bovendien wordt meer dan 40% van die facturen zelfs al betaald binnen de eerste 24 uur na verzending.</p>
    <p>Dit was de exacte filosofie achter de ontwikkeling van <em>BetaalSneller</em>. Wij zagen dat herinneringsmails veel meer effect hadden als de betaalknop centraal in de mail stond, in plaats van verborgen in een bijlage.</p>`,
    category: "Automatisering",
    readTime: "4 min",
    date: "2026-04-29"
  },
  {
    id: "12",
    slug: "verschil-b2b-en-b2c-incasso",
    title: "Het grote verschil tussen B2B en B2C incasso uitgelegd",
    description: "Particuliere klanten (consumenten) en bedrijven worden juridisch compleet anders behandeld bij betalingsachterstanden. Maak deze cruciale fout niet.",
    content: `<h2>Twee Werelden in Één Bedrijf</h2>
    <p>Als jouw bedrijf zowel aan andere bedrijven (B2B) als aan particuliere consumenten (B2C) levert, dan moet je extreem goed opletten. De incassowetgeving is voor beide groepen compleet verschillend.</p>
    
    <h3>B2C: Strenge Bescherming van de Consument</h3>
    <p>Sinds de introductie van Boek XIX van het Wetboek Economisch Recht (WER) worden consumenten sterk beschermd tegen agressieve incassopraktijken.</p>
    <ul>
      <li><strong>Eerste herinnering is altijd gratis:</strong> Je mag absoluut geen administratiekosten of intresten aanrekenen bij een eerste herinnering aan een consument.</li>
      <li><strong>Verplichte wachttermijn:</strong> Na het sturen van de eerste herinnering, moet je wettelijk 14 dagen wachten voordat je enige kosten in rekening mag brengen.</li>
      <li><strong>Strikte plafonds op kosten:</strong> De maximale schadebedingen zijn wettelijk vastgelegd op basis van de factuurwaarde. Je Algemene Voorwaarden kunnen deze limieten nooit overrulen.</li>
    </ul>
    
    <h3>B2B: Contractuele Vrijheid</h3>
    <p>Bij zakelijke klanten is de wet veel soepeler. Ondernemers worden geacht de gevolgen van contracten beter in te schatten.</p>
    <ul>
      <li>Vanaf de vervaldatum (vaak dag 1) mag je theoretisch al intresten aanrekenen, zonder verplichte voorafgaande, kosteloze herinnering.</li>
      <li>De plafonds voor schadebedingen zijn veel vrijer en voornamelijk afhankelijk van wat overeengekomen is in je getekende Algemene Voorwaarden.</li>
    </ul>
    
    <h3>Conclusie</h3>
    <p>Hanteer altijd een ander opvolgingsproces voor consumenten dan voor bedrijven. Als je via een softwarepakket herinneringen stuurt, zorg er dan voor dat dit systeem rekening houdt met de wettelijke wachttermijnen voor consumenten, anders riskeer je zware economische boetes.</p>`,
    category: "Juridisch",
    readTime: "5 min",
    date: "2026-04-29"
  }
];
