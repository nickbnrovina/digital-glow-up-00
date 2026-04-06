import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border py-12 px-4 mt-20">
    <div className="container mx-auto flex flex-col items-center justify-between gap-8 md:flex-row md:items-start text-center md:text-left">
      
      {/* Kolom 1: Logo & Bedrijfsgegevens */}
      <div className="flex flex-col gap-3">
        <a href="#" className="text-xl font-heading font-extrabold tracking-tight">
          <span className="text-gradient-flow inline-block pb-1">Kustlab.</span>
        </a>
        <div className="text-sm text-muted-foreground flex flex-col gap-1">
          <span>Kustlab</span>
          <span>Brugge, België</span>
          <span>BE 1036.200.223</span>
        </div>
      </div>

      {/* Kolom 2: Contact */}
      <div className="flex flex-col gap-3 text-sm text-muted-foreground">
        <span className="font-semibold text-foreground mb-1">Contact</span>
        <a href="mailto:hello@kustlab.com" className="hover:text-foreground transition-colors">hello@kustlab.com</a>
        <a href="tel:+32479271206" className="hover:text-foreground transition-colors">0479 27 12 06</a>
      </div>

      {/* Kolom 3: Juridisch */}
      <div className="flex flex-col gap-3 text-sm text-muted-foreground">
        <span className="font-semibold text-foreground mb-1">Juridisch</span>
        <Link to="/privacy" className="hover:text-foreground transition-colors">Privacybeleid</Link>
        <Link to="/voorwaarden" className="hover:text-foreground transition-colors">Algemene Voorwaarden</Link>
      </div>

    </div>
    
    <div className="container mx-auto mt-12 pt-6 border-t border-border text-center">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Kustlab. Alle rechten voorbehouden.
      </p>
    </div>
  </footer>
);

export default Footer;
