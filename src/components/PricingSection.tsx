import { Check } from "lucide-react";

const packages = [
  {
    name: "Instap",
    subtitle: "Zichtbaarheid",
    description: "Professionele, snelle website.",
    features: [
      "Modern & Responsive Webdesign",
      "Basis SEO",
      "Digitaal Contactformulier",
    ],
    highlighted: false,
  },
  {
    name: "Midden",
    subtitle: "Automatisering",
    description: "Website gekoppeld aan slimme processen.",
    badge: "Meest Gekozen",
    features: [
      "Alles uit Instap +",
      "Leadgeneratie & CRM koppeling",
      "Geautomatiseerde afspraakplanning",
      "Basis e-mail automation",
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    subtitle: "Digitale Dominantie",
    description: "Volledig ontzorgd met AI.",
    features: [
      "Alles uit Midden +",
      "Custom Portals",
      "Geavanceerde AI-chatbots",
      "Maandelijks onderhoud & advies",
    ],
    highlighted: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pakketten" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Oplossingen die{" "}
            <span className="gradient-text">meegroeien</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative glass rounded-2xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                pkg.highlighted
                  ? "border-primary/40 glow-primary scale-[1.02]"
                  : "hover:border-foreground/10"
              }`}
            >
              {pkg.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                  {pkg.badge}
                </span>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-heading font-bold">{pkg.name}</h3>
                <p className="text-sm text-primary font-medium">{pkg.subtitle}</p>
                <p className="text-sm text-muted-foreground mt-2">{pkg.description}</p>
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
                    ? "bg-primary text-primary-foreground hover:opacity-90 glow-primary"
                    : "border border-foreground/15 text-foreground hover:bg-foreground/5"
                }`}
              >
                Meer informatie
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
