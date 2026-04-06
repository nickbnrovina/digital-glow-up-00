import { useState } from "react";
import { Send, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString(),
    })
      .then(() => setSubmitted(true))
      .catch((error) => console.error("Netlify form error:", error));
  };

  return (
    <section id="contact" className="section-padding overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Klaar om digitaal te <span className="text-primary italic">groeien</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Laat je gegevens achter en we plannen een vrijblijvende kennismaking in om jouw digitale project te bespreken.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Calendly & Info */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass p-8 rounded-2xl border border-border">
              <h3 className="text-2xl font-bold font-heading mb-6">Direct inplannen?</h3>
              <p className="text-muted-foreground mb-8">
                Geen zin om te wachten? Kies een moment dat voor u past in onze agenda voor een vrijblijvend video-gesprek van 30 minuten.
              </p>
              
              <a 
                href="https://calendly.com/brovinanick/15min" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 glow-primary transition-all duration-300 shadow-lg hover:-translate-y-1"
              >
                <Calendar size={18} />
                Boek een Strategiegesprek
              </a>
              
              <div className="mt-8 pt-6 border-t border-border flex flex-col gap-3">
                <div>
                  <p className="text-sm font-medium mb-1">Liever mailen?</p>
                  <a href="mailto:hello@kustlab.com" className="text-primary hover:underline font-medium">
                    hello@kustlab.com
                  </a>
                </div>
                <div>
                  <p className="text-sm font-medium mb-1">Of direct bellen?</p>
                  <a href="tel:+32479271206" className="text-primary hover:underline font-medium">
                    0479 27 12 06
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="glass rounded-2xl p-8 border border-border">
              {submitted ? (
                <div className="text-center py-12 animate-fade-in-up">
                  <div className="w-16 h-16 rounded-full bg-primary/15 flex items-center justify-center mx-auto mb-4">
                    <Send size={28} className="text-primary" />
                  </div>
                  <p className="text-xl font-heading font-semibold">Bedankt voor je bericht!</p>
                  <p className="text-muted-foreground mt-2">
                    Ik neem zo snel mogelijk contact met je op.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} name="contact" data-netlify="true" className="space-y-5">
                  <input type="hidden" name="form-name" value="contact" />
                  <h3 className="text-xl font-bold font-heading mb-6">Stuur ons een bericht</h3>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Naam</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="Je volledige naam"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">E-mail</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="hello@kustlab.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Interesse in</label>
                    <select
                      name="subject"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Kies een onderwerp
                      </option>
                      <option>Starter Pakket</option>
                      <option>Business Pakket</option>
                      <option>E-commerce / Premium Pakket</option>
                      <option>Iets anders...</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Bericht (optioneel)</label>
                    <textarea
                      name="message"
                      rows={3}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                      placeholder="Vertel kort over je project..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 rounded-lg bg-foreground text-background font-semibold hover:bg-foreground/90 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Verstuur Aanvraag
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
