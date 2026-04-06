import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/30">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="prose prose-invert max-w-none prose-headings:font-heading prose-headings:font-bold prose-a:text-primary"
          >
            <h1 className="text-4xl md:text-5xl mb-8">Privacybeleid</h1>
            <p className="text-muted-foreground mb-8">Laatst bijgewerkt: {new Date().toLocaleDateString('nl-BE')}</p>

            <section className="mb-8">
              <h2 className="text-2xl mt-8 mb-4">1. Wie zijn wij?</h2>
              <p>
                Kustlab (hierna "wij", "ons" of "onze") is verantwoordelijk voor de verwerking van
                persoonsgegevens zoals weergegeven in deze privacyverklaring.
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong>Bedrijfsnaam:</strong> Kustlab</li>
                <li><strong>Ondernemingsnummer:</strong> BE 1036.200.223</li>
                <li><strong>Adres:</strong> Brugge, België</li>
                <li><strong>E-mailadres:</strong> hello@kustlab.com</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl mt-8 mb-4">2. Welke persoonsgegevens verwerken wij?</h2>
              <p>Wij verwerken uw persoonsgegevens doordat u gebruik maakt van onze diensten en/of omdat u deze zelf aan ons verstrekt.</p>
              <p className="mt-4">Hieronder vindt u een overzicht van de persoonsgegevens die wij verwerken (bijvoorbeeld via het contactformulier):</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Voor- en achternaam</li>
                <li>E-mailadres</li>
                <li>Inhoud van uw bericht</li>
                <li>IP-adres en surfgedrag (via cookies/analytics)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl mt-8 mb-4">3. Met welk doel verwerken wij gegevens?</h2>
              <p>Wij verwerken persoonsgegevens voor de volgende doelen:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>U te kunnen bellen of e-mailen indien dit nodig is om onze dienstverlening uit te kunnen voeren.</li>
                <li>Om goederen en diensten bij u af te leveren.</li>
                <li>Het afhandelen van uw betaling.</li>
                <li>Kustlab analyseert uw gedrag op de website om daarmee de website te verbeteren en het aanbod af te stemmen op uw voorkeuren.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl mt-8 mb-4">4. Cookies of vergelijkbare technieken</h2>
              <p>
                Kustlab gebruikt alleen technische/functionele cookies en analytische cookies die geen inbreuk maken op uw privacy.
                Een cookie is een klein tekstbestand dat bij het eerste bezoek aan deze website wordt opgeslagen op uw apparaat.
                U kunt zich afmelden voor cookies door uw internetbrowser zo in te stellen dat deze geen cookies meer opslaat.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl mt-8 mb-4">5. Gegevens inzien, aanpassen of verwijderen</h2>
              <p>
                U heeft het recht om uw persoonsgegevens in te zien, te corrigeren of te verwijderen.
                Daarnaast heeft u het recht om uw eventuele toestemming voor de gegevensverwerking in te trekken
                of bezwaar te maken tegen de verwerking van uw persoonsgegevens door Kustlab.
              </p>
              <p className="mt-4">
                U kunt een verzoek tot inzage, correctie, of verwijdering sturen naar <strong>hello@kustlab.com</strong>.
              </p>
            </section>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
