import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Diensten", href: "#diensten" },
    { label: "Werkwijze", href: "#werkwijze" },
    { label: "Pakketten", href: "#pakketten" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-strong py-3 shadow-lg shadow-background/50"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <a href="#" className="text-xl md:text-2xl font-heading font-bold tracking-tight">
          <span className="text-foreground">Digital</span>
          <span className="text-primary">.</span>
          <span className="text-foreground">Solutions</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-all duration-300 glow-primary"
          >
            Boek een Strategiegesprek
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground p-2"
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden glass-strong mt-2 mx-4 rounded-xl p-6 animate-fade-in space-y-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="block text-center px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold"
          >
            Boek een Strategiegesprek
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
