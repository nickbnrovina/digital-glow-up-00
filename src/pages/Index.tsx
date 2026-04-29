import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import PricingSection from "@/components/PricingSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

import { Helmet } from 'react-helmet-async';

const Index = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Kustlab",
    "url": "https://kustlab.com",
    "description": "Digital Solutions Consultant voor KMO's",
    "logo": "https://kustlab.com/logo.png"
  };

  return (
  <div className="min-h-screen bg-background">
    <Helmet>
      <title>Kustlab | Digital Solutions Consultant</title>
      <meta name="description" content="Kustlab: Jouw partner voor digitalisering, automatisering, en moderne web development. Optimaliseer je KMO processen." />
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
    <Navbar />
    <HeroSection />
    <ServicesSection />
    <AboutSection />
    <PortfolioSection />
    <PricingSection />
    <FaqSection />
    <ContactSection />
    <Footer />
  </div>
  );
};

export default Index;
