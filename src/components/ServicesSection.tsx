import { Code, ShoppingCart, Search, Settings, Server, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

interface Service {
  title: string;
  description: string;
  icon: React.ElementType;
}

const services: Service[] = [
  {
    title: "Maatwerk Websites",
    description: "Unieke, pixel-perfect websites die de identiteit van uw bedrijf online versterken en bezoekers omzetten in klanten.",
    icon: Code,
  },
  {
    title: "E-Commerce & Webshops",
    description: "Schaalbare en gebruiksvriendelijke webshops gebouwd om uw producten online optimaal te presenteren en verkopen.",
    icon: ShoppingCart,
  },
  {
    title: "Zoekmachineoptimalisatie (SEO)",
    description: "Strategische oplossingen om uw zichtbaarheid in Google te vergroten en organisch meer relevante bezoekers aan te trekken.",
    icon: Search,
  },
  {
    title: "Webapplicaties op maat",
    description: "Krachtige op maat gemaakte applicaties (zoals portalen en tools) om uw bedrijfsprocessen te digitaliseren en stroomlijnen.",
    icon: Settings,
  },
  {
    title: "Hosting & Onderhoud",
    description: "Zorgeloze cloud-hosting, reguliere updates en veiligheidsmonitoring zodat u zich kan focussen op uw zaak.",
    icon: Server,
  },
  {
    title: "Digitale Strategie",
    description: "Persoonlijk advies over hoe u technologie en automatisatie kunt inzetten om slimmer en efficiënter te werken.",
    icon: Lightbulb,
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

const ServicesSection = () => {
  return (
    <section id="diensten" className="py-24 relative bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold">
            Volledige <span className="text-primary">Digitale Oplossingen</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Bij Kustlab bieden we meer dan alleen webdesign. We bouwen digitale oplossingen die uw volledige bedrijfsprocessen ondersteunen en laten groeien.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-5 transition-opacity duration-300">
                  <Icon className="w-24 h-24" />
                </div>
                
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                
                <h3 className="text-xl font-bold mb-3 font-heading">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
