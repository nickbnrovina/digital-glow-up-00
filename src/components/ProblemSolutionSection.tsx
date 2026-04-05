import { X, Check } from "lucide-react";

const problems = [
  "Je website levert geen gekwalificeerde leads op.",
  "Handmatig offertes sturen kost te veel tijd.",
  "Klantgegevens zitten verspreid over systemen.",
];

const solutions = [
  "Een website die werkt als je beste verkoper, 24/7.",
  "Geautomatiseerde e-mails en opvolging.",
  "Gekoppeld aan je CRM en boekhouding.",
];

const ProblemSolutionSection = () => {
  return (
    <section id="diensten" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Waarom je meer nodig hebt dan een{" "}
            <span className="gradient-text">'digitale folder'</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Problem */}
          <div className="glass rounded-2xl p-8 border-destructive/20 hover:border-destructive/40 transition-colors duration-300">
            <h3 className="text-lg font-heading font-semibold text-destructive mb-6">
              Het probleem
            </h3>
            <ul className="space-y-5">
              {problems.map((p, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-destructive/15 flex items-center justify-center">
                    <X size={14} className="text-destructive" />
                  </span>
                  <span className="text-muted-foreground">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution */}
          <div className="glass rounded-2xl p-8 border-primary/20 hover:border-primary/40 transition-colors duration-300 glow-primary">
            <h3 className="text-lg font-heading font-semibold text-primary mb-6">
              Onze oplossing
            </h3>
            <ul className="space-y-5">
              {solutions.map((s, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center">
                    <Check size={14} className="text-primary" />
                  </span>
                  <span className="text-muted-foreground">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
