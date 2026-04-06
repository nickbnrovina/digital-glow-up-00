import { Check } from "lucide-react";
import { motion } from "framer-motion";

const packages = [
  {
    name: "Starter",
    subtitle: "Zichtbaarheid",
    description: "Professionele, snelle website.",
    price: "Vanaf € 1.450",
    monthlyPrice: "€ 50",
    features: [
      "Modern & Responsive Webdesign",
      "Basis SEO",
      "Digitaal Contactformulier",
    ],
    highlighted: false,
  },
  {
    name: "Business",
    subtitle: "Automatisering",
    description: "Website gekoppeld aan slimme processen.",
    price: "Vanaf € 2.950",
    monthlyPrice: "€ 150",
    badge: "Meest Gekozen",
    features: [
      "Alles uit Starter +",
      "Leadgeneratie & CRM koppeling",
      "Geautomatiseerde afspraakplanning",
      "Basis e-mail automation",
    ],
    highlighted: true,
  },
  {
    name: "E-Commerce / Premium",
    subtitle: "Digitale Dominantie",
    description: "Volledig ontzorgd met AI.",
    price: "Op aanvraag",
    monthlyPrice: "Maatwerk retainer",
    features: [
      "Alles uit Business +",
      "Custom Portals",
      "Geavanceerde AI-chatbots",
      "Maandelijks onderhoud & advies",
    ],
    highlighted: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const PricingSection = () => {
  return (
    <section id="pakketten" className="section-padding overflow-hidden">
      <div className="container mx-auto">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            <span className="text-gradient-flow inline-block pb-1">Oplossingen die meegroeien</span>
          </h2>
          <p className="text-muted-foreground text-sm">
            Alle vermelde tarieven zijn vrijgesteld van BTW (kleine onderneming).
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {packages.map((pkg) => (
            <motion.div
              variants={itemVariants}
              key={pkg.name}
              className={`relative glass rounded-2xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                pkg.highlighted
                  ? "border-primary/40 glow-primary scale-[1.02]"
                  : "hover:border-foreground/10"
              }`}
            >
              {pkg.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-flow text-white shadow-[0_0_15px_rgba(0,235,211,0.3)] text-xs font-semibold">
                  {pkg.badge}
                </span>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-heading font-bold">{pkg.name}</h3>
                <p className="text-sm text-primary font-medium mb-3">{pkg.subtitle}</p>
                <p className="text-sm text-muted-foreground mt-2">{pkg.description}</p>
                
                <div className="mt-6 mb-2">
                  <span className="text-3xl font-heading font-bold">{pkg.price}</span>
                </div>
                {pkg.monthlyPrice && (
                  <p className="text-sm flex flex-col font-medium mb-4">
                    <span className="text-muted-foreground">+ {pkg.monthlyPrice} /mnd</span>
                    <span className="text-muted-foreground/60 text-xs mt-1">service & hosting</span>
                  </p>
                )}
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {pkg.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm">
                    <Check size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center py-3 rounded-lg font-semibold text-sm transition-all duration-300 ${
                  pkg.highlighted
                    ? "bg-gradient-flow text-white hover:opacity-90 glow-primary shadow-[0_0_20px_rgba(0,235,211,0.4)]"
                    : "border border-foreground/15 text-foreground hover:bg-foreground/5"
                }`}
              >
                Meer informatie
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
