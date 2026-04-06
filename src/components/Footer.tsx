const Footer = () => (
  <footer className="border-t border-border py-8 px-4">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <a href="#" className="text-lg font-heading font-bold">
        Kust<span className="text-primary">lab</span>
      </a>
      <p className="text-sm text-muted-foreground flex items-center gap-4">
        <span>© 2026 Kustlab. Alle rechten voorbehouden.</span>
      </p>
      <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">
        <a href="mailto:hello@kustlab.com" className="hover:text-foreground transition-colors">hello@kustlab.com</a>
        <span className="hidden md:inline">•</span>
        <a href="tel:+32479271206" className="hover:text-foreground transition-colors">0479 27 12 06</a>
        <span className="hidden md:inline">•</span>
        <span>Brugge, BE</span>
      </div>
    </div>
  </footer>
);

export default Footer;
