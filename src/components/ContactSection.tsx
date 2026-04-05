import { useState } from "react";
import { Send } from "lucide-react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto max-w-xl">
        <div className="glass rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3">
              Klaar om te automatiseren en{" "}
              <span className="gradient-text">domineren</span>?
            </h2>
            <p className="text-muted-foreground">
              Laat je gegevens achter en we plannen een vrijblijvende
              strategiesessie in.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-8 animate-fade-in-up">
              <div className="w-16 h-16 rounded-full bg-primary/15 flex items-center justify-center mx-auto mb-4">
                <Send size={28} className="text-primary" />
              </div>
              <p className="text-lg font-heading font-semibold">Bedankt!</p>
              <p className="text-muted-foreground text-sm mt-1">
                We nemen zo snel mogelijk contact op.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-1.5">Naam</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="Je volledige naam"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">E-mail</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="je@email.nl"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Pakket</label>
                <select
                  required
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Selecteer een pakket
                  </option>
                  <option>Instap (Zichtbaarheid)</option>
                  <option>Midden (Automatisering)</option>
                  <option>Premium (Digitale Dominantie)</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all duration-300 glow-primary flex items-center justify-center gap-2"
              >
                Verstuur Aanvraag
                <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
