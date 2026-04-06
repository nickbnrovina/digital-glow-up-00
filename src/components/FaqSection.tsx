import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "Hoe snel staat mijn nieuwe website online?",
    answer: "Voor een Starter website streven we naar 2 tot 4 weken. Business en E-commerce projecten vergen meer maatwerk en structuur, waarbij we doorgaans op 6 tot 8 weken mikken. Kwaliteit en een vlotte samenwerking staan hierbij voorop."
  },
  {
    question: "Wat is er inbegrepen in het hosting & onderhoud aspect?",
    answer: "Ons onderhoud omvat snelle cloud-hosting, automatische backups, beveiligingsupdates (zoals SSL), en technische ondersteuning. Zo hoeft u zich geen zorgen te maken over de technische werking van uw website en kunt u zich focussen op uw zaak."
  },
  {
    question: "Kan ik later nog functionaliteiten laten toevoegen?",
    answer: "Absoluut. We ontwikkelen onze oplossingen modulair. Begint u met een Starter pakket en heeft u later nood aan een afsprakenmodule (Business pakket) of webshop-functionaliteit? Dan kunnen we dit naadloos integreren zonder vanaf nul te hoeven beginnen."
  },
  {
    question: "Hoe zorgen jullie ervoor dat ik lokaal gevonden word (SEO)?",
    answer: "Vanaf het Business pakket focussen we sterk op on-page SEO: geoptimaliseerde code, snelle laadtijden, juiste tag-structuur en optimalisatie van afbeeldingen. Daarnaast integreren we Google Business Profiel om uw lokale vindbaarheid te vergroten."
  },
  {
    question: "Werken jullie ook voor startende ondernemers?",
    answer: "Zeker. We begrijpen dat budgetten voor starters beperkt kunnen zijn. Daarom is ons Starter pakket ontworpen om een professionele, converterende aanwezigheid op te bouwen zonder de complexiteit (en kosten) van grote systemen."
  }
];

const FaqItem = ({ faq, isOpen, onClick }: { faq: FAQ; isOpen: boolean; onClick: () => void }) => {
  return (
    <div className="border border-border rounded-xl glass overflow-hidden mb-4 transition-all duration-300">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
      >
        <span className="font-heading font-semibold text-lg">{faq.question}</span>
        <ChevronDown 
          className={`shrink-0 transition-transform duration-300 text-primary ${isOpen ? "rotate-180" : ""}`} 
          size={20} 
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="p-6 pt-0 text-muted-foreground leading-relaxed">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-background/50">
      <div className="container mx-auto max-w-3xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium border border-primary/30 text-primary mb-4 bg-background/50 backdrop-blur-md">
            Veelgestelde Vragen
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Duidelijkheid <span className="italic">vooraf</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Alles wat je moet weten over onze werkwijze en oplossingen.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-muted-foreground mb-4">Heb je nog een andere vraag?</p>
          <a href="#contact" className="text-primary hover:underline font-medium inline-flex items-center gap-2">
            Stel ze via ons formulier &rarr;
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;
