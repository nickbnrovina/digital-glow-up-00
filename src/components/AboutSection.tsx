import { CheckCircle2, User, Globe2 } from "lucide-react";

const AboutSection = () => {
  const processSteps = [
    { title: "Kennismaking", description: "Samen bespreken we uw doelen, visie en de benodigde functionaliteiten." },
    { title: "Ontwerp", description: "Ik maak een passend en uniek design gericht op conversie." },
    { title: "Bouw", description: "Het design wordt omgezet in een razendsnelle en responsive website." },
    { title: "Lancering", description: "Uw gloednieuwe website gaat live en is klaar voor bezoekers." },
  ];

  return (
    <section id="werkwijze" className="py-24 relative overflow-hidden bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Text Content */}
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-heading font-bold">
                <span className="text-gradient-flow inline-block pb-1">Aangenaam, ik ben Nick</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                De drijvende kracht achter Kustlab. Vanuit Brugge help ik startende zelfstandigen, lokale kmo's en creatieve freelancers met betaalbare en professionele digitale oplossingen.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Mijn aanpak is persoonlijk, transparant en resultaatgericht. Geen ingewikkeld jargon, maar heldere afspraken en een website die voor u werkt.
              </p>
            </div>
          </div>

          {/* Process & Photo */}
          <div className="flex-1 w-full relative">
            <div className="p-8 rounded-2xl bg-card border border-border shadow-lg space-y-8 relative z-10">
              <h3 className="text-2xl font-bold font-heading">Onze Werkwijze</h3>
              <div className="space-y-6">
                {processSteps.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">{step.title}</h4>
                      <p className="text-muted-foreground text-sm mt-1">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Visual flair - Blob */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10 animate-blob" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl -z-10 animate-blob animation-delay-2000" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
