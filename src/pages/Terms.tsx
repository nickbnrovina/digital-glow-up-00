import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Terms = () => {
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
            <h1 className="text-4xl md:text-5xl mb-8">Algemene Voorwaarden</h1>
            <p className="text-muted-foreground mb-8">Laatst bijgewerkt: {new Date().toLocaleDateString('nl-BE')}</p>

            <section className="mb-8">
              <h2 className="text-2xl mt-8 mb-4">1. Toepasselijkheid</h2>
              <p>
                Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, offertes, werkzaamheden, opdrachten 
                en overeenkomsten tussen Kustlab (BE 1036.200.223, te Brugge) en de opdrachtgever / klant.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl mt-8 mb-4">2. Offertes en Aanbiedingen</h2>
              <p>
                Alle offertes en aanbiedingen van Kustlab zijn vrijblijvend, tenzij in de offerte een termijn voor aanvaarding is gesteld. 
                Een offerte vervalt in ieder geval na 30 dagen, tenzij anders vermeld. Aanbiedingen gelden niet automatisch voor toekomstige opdrachten.
              </p>
              <p className="mt-4">
                Let op: <strong>Alle vermelde prijzen op onze website en in onze offertes zijn exclusief 21% BTW</strong>, tenzij expliciet vermeld (B2B focus).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl mt-8 mb-4">3. Uitvoering van de Overeenkomst</h2>
              <p>
                Kustlab streeft ernaar om de diensten (zoals webdesign, automatisering en consultancy) naar beste inzicht en vermogen uit te voeren. 
                Dit betreft echter steeds een inspanningsverbintenis en geen resultaatsverbintenis.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl mt-8 mb-4">4. Betalingsvoorwaarden</h2>
              <p>
                Betaling dient te geschieden binnen 14 dagen na factuurdatum. 
                Indien de opdrachtgever in gebreke blijft met de tijdige betaling, dan is de opdrachtgever van rechtswege in verzuim. 
                Kustlab heeft in dat geval het recht om verdere diensten (zoals hosting of onderhoud) tijdelijk op te schorten.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl mt-8 mb-4">5. Intellectueel Eigendom</h2>
              <p>
                Alle door Kustlab ontwikkelde of ter beschikking gestelde ontwerpen, software, teksten en systemen blijven eigendom van Kustlab 
                totdat de facturen volledig betaald zijn. U krijgt een exclusief gebruiksrecht voor de duur van de overeenkomst of zoals afgesproken.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl mt-8 mb-4">6. Toepasselijk Recht & Bevoegde Rechtbank</h2>
              <p>
                Op alle rechtsbetrekkingen waarbij Kustlab partij is, is uitsluitend het Belgisch recht van toepassing. 
                Geschillen zullen uitsluitend worden voorgelegd aan de bevoegde rechtbanken van het arrondissement West-Vlaanderen, afdeling Brugge (RPR Brugge).
              </p>
            </section>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;
