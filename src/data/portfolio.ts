export type PortfolioItem = {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string[];
  techStack: string[];
  imageUrl: string;
  client: string;
  year: string;
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    slug: "betaalsneller",
    title: "BetaalSneller",
    shortDescription: "Een geautomatiseerde SaaS-oplossing voor efficiënt debiteurenbeheer.",
    fullDescription: [
      "BetaalSneller is een in-house ontwikkeld SaaS-product door Kustlab, ontworpen om KMO's te helpen met het automatiseren van hun betalingsherinneringen.",
      "Het platform integreert naadloos met e-mail systemen om op gezette tijden gepersonaliseerde, vriendelijke of formele herinneringen uit te sturen. Dit verlaagt de Days Sales Outstanding (DSO) en verbetert de cashflow zonder dat de ondernemer handmatig e-mails hoeft op te stellen.",
      "Gebouwd met een focus op conversie, veiligheid (Supabase Auth/RLS) en gebruiksvriendelijkheid."
    ],
    techStack: ["React", "Vite", "Tailwind CSS", "Supabase", "PostgreSQL"],
    imageUrl: "/placeholder.svg", // We will use a placeholder or relevant icon for now
    client: "In-house (SaaS)",
    year: "2026"
  }
];
