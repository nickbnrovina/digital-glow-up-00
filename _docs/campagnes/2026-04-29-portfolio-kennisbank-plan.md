# Kustlab Portfolio & Kennisbank Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Integrate the BetaalSneller SaaS project as a core portfolio piece and build an SEO-optimized Kennisbank on the Kustlab website.

**Architecture:** Client-side React with `react-helmet-async` for SEO metadata. Static data files for content (no DB) to ensure high speed. New routes for `/portfolio/betaalsneller`, `/kennisbank`, and `/kennisbank/:slug`.

**Tech Stack:** React, Vite, TailwindCSS, React Router DOM, React Helmet Async, Lucide React.

---

### Task 1: Setup Dependencies & HelmetProvider

**Files:**
- Modify: `package.json`
- Modify: `src/App.tsx`

- [ ] **Step 1: Install dependencies**

Run: `npm install react-helmet-async lucide-react` in `C:\Users\nick_\OneDrive\Bureaublad\digital solutions consultant`
Expected: PASS

- [ ] **Step 2: Add HelmetProvider to App.tsx**

Modify `src/App.tsx` to wrap the app in `<HelmetProvider>`.

```tsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import Terms from "./pages/Terms.tsx";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/voorwaarden" element={<Terms />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
```

- [ ] **Step 3: Commit**

```bash
git add package.json package-lock.json src/App.tsx
git commit -m "chore: setup react-helmet-async and lucide-react"
```

---

### Task 2: Create Data Files

**Files:**
- Create: `src/data/kennisbank.ts`
- Create: `src/data/portfolio.ts`

- [ ] **Step 1: Create Kennisbank Data**

Create `src/data/kennisbank.ts` with the 8 articles.

```ts
export type KennisbankArticle = {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string; // HTML or Markdown strings
  category: string;
  readTime: string;
  date: string;
};

export const kennisbankArticles: KennisbankArticle[] = [
  {
    id: "1",
    slug: "eerste-betalingsherinnering-voorbeeld",
    title: "De perfecte eerste betalingsherinnering: Voorbeeld & Tips",
    description: "Een vriendelijke maar duidelijke eerste betalingsherinnering zorgt voor snellere betaling zonder de klantrelatie te schaden. Gebruik ons gratis voorbeeld.",
    content: "<h2>Waarom een goede eerste herinnering cruciaal is</h2><p>Vaak is een factuur gewoon vergeten. Een vriendelijke mail is genoeg.</p><h3>Voorbeeld Eerste Herinnering</h3><div class='bg-muted p-4 rounded-md my-4 font-mono text-sm'>Beste [Naam],<br/><br/>We merkten op dat factuur [Nummer] nog openstaat. Waarschijnlijk is dit aan uw aandacht ontsnapt. Kunt u dit zo spoedig mogelijk nakijken?<br/><br/>Met vriendelijke groet,<br/>[Uw Bedrijf]</div>",
    category: "Templates",
    readTime: "3 min",
    date: "2026-04-29"
  },
  {
    id: "2",
    slug: "wettelijke-rente-belgie-b2b",
    title: "Wettelijke Rente in België (B2B): Wat mag je aanrekenen?",
    description: "Hoeveel verwijlintresten mag je wettelijk aanrekenen als een bedrijf je factuur niet betaalt? Ontdek de actuele tarieven en regels.",
    content: "<h2>Wet Betalingsachterstand bij Handelstransacties</h2><p>In België is de wetgeving rond B2B betalingen streng, maar eerlijk. Je hebt recht op een vergoeding.</p><h3>Actuele Tarieven</h3><p>De wettelijke intrestvoet verandert per halfjaar. Controleer altijd de actuele stand bij de FOD Financiën.</p>",
    category: "Juridisch",
    readTime: "5 min",
    date: "2026-04-29"
  },
  {
    id: "3",
    slug: "factuur-niet-betaald-stappenplan",
    title: "Klant betaalt factuur niet: 5 Stappen tot actie",
    description: "Wat moet je doen als een factuur na meerdere herinneringen onbetaald blijft? Volg dit concrete 5-stappenplan.",
    content: "<h2>Stappenplan bij wanbetaling</h2><ol><li>Vriendelijke herinnering</li><li>Telefonisch contact</li><li>Aangetekende ingebrekestelling</li><li>Incassobureau</li><li>Gerechtelijke stappen (via advocaat)</li></ol>",
    category: "Gids",
    readTime: "4 min",
    date: "2026-04-29"
  },
  {
    id: "4",
    slug: "automatisatie-debiteurenbeheer",
    title: "Waarom handmatig debiteurenbeheer je geld kost",
    description: "Zelf achter onbetaalde facturen aanzitten kost zeeën van tijd. Leer hoe automatisering je cashflow verbetert.",
    content: "<h2>Tijd is Geld</h2><p>Elke minuut die je spendeert aan het manueel versturen van emails is een minuut die je niet besteedt aan je core business.</p>",
    category: "Automatisering",
    readTime: "4 min",
    date: "2026-04-29"
  },
  {
    id: "5",
    slug: "schadebeding-algemene-voorwaarden",
    title: "Het schadebeding in je algemene voorwaarden",
    description: "Zonder goede algemene voorwaarden kan je geen schadebeding of administratiekosten aanrekenen. Zorg dat je gedekt bent.",
    content: "<h2>Wat is een schadebeding?</h2><p>Een forfaitaire vergoeding voor de administratieve last van een onbetaalde factuur.</p>",
    category: "Juridisch",
    readTime: "5 min",
    date: "2026-04-29"
  },
  {
    id: "6",
    slug: "tweede-betalingsherinnering-ingebrekestelling",
    title: "Tweede herinnering of direct ingebrekestelling?",
    description: "Wanneer is het tijd voor een tweede vriendelijke mail, en wanneer moet je harder optreden? Ontdek onze best practices.",
    content: "<h2>De Toon Bepalen</h2><p>De tweede mail moet zakelijker zijn. Geef een duidelijke deadline (bijv. 5 werkdagen).</p>",
    category: "Gids",
    readTime: "3 min",
    date: "2026-04-29"
  },
  {
    id: "7",
    slug: "waarom-sneller-betaald-worden-belangrijk-is",
    title: "Cashflow optimalisatie: Het belang van stipte betalingen",
    description: "Een gezonde cashflow is de zuurstof van je bedrijf. Ontdek tips om je Days Sales Outstanding (DSO) te verlagen.",
    content: "<h2>Wat is DSO?</h2><p>Days Sales Outstanding is de gemiddelde tijd voordat je facturen betaald worden. Hoe lager, hoe beter.</p>",
    category: "Financieel",
    readTime: "4 min",
    date: "2026-04-29"
  },
  {
    id: "8",
    slug: "aangetekende-ingebrekestelling-voorbeeld",
    title: "Voorbeeld aangetekende ingebrekestelling",
    description: "De laatste stap voor de rechtbank: de formele ingebrekestelling. Download ons voorbeeld en ontdek waaraan deze moet voldoen.",
    content: "<h2>Juridische Vereisten</h2><p>Een ingebrekestelling moet duidelijk vermelden dat het om een formele aanmaning gaat, met vermelding van het exacte bedrag plus eventuele intresten en schadebeding.</p>",
    category: "Templates",
    readTime: "3 min",
    date: "2026-04-29"
  }
];
```

- [ ] **Step 2: Create Portfolio Data**

Create `src/data/portfolio.ts`.

```ts
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
```

- [ ] **Step 3: Commit**

```bash
git add src/data/
git commit -m "feat: add knowledge base and portfolio data"
```

---

### Task 3: Portfolio Section on Homepage

**Files:**
- Create: `src/components/PortfolioSection.tsx`
- Modify: `src/pages/Index.tsx`

- [ ] **Step 1: Create PortfolioSection Component**

```tsx
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { portfolioItems } from "@/data/portfolio";
import { Button } from "@/components/ui/button";

export const PortfolioSection = () => {
  const featured = portfolioItems[0];

  return (
    <section className="py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Project</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Bekijk hoe wij complexe bedrijfsprocessen omzetten in gebruiksvriendelijke digitale oplossingen.
          </p>
        </div>
        
        <div className="mx-auto max-w-5xl overflow-hidden rounded-xl border bg-background shadow-lg transition-all hover:shadow-xl">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary w-fit mb-4">
                SaaS Productie
              </div>
              <h3 className="text-3xl font-bold mb-4">{featured.title}</h3>
              <p className="text-muted-foreground mb-6 text-lg">
                {featured.shortDescription}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {featured.techStack.slice(0, 3).map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-muted rounded-md text-xs font-medium">
                    {tech}
                  </span>
                ))}
              </div>
              <Button asChild className="w-fit">
                <Link to={`/portfolio/${featured.slug}`}>
                  Lees de Case Study <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="bg-primary/5 flex items-center justify-center p-8 border-t md:border-t-0 md:border-l">
              {/* Replace with actual screenshot later */}
              <div className="w-full max-w-sm aspect-[4/3] rounded-lg shadow-2xl bg-white border flex items-center justify-center relative overflow-hidden">
                <div className="absolute top-0 w-full h-8 bg-muted border-b flex items-center px-3 space-x-1.5">
                   <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                   <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                   <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                </div>
                <div className="text-primary font-bold text-2xl tracking-tight mt-4">
                  Betaal<span className="text-blue-600">Sneller</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
```

- [ ] **Step 2: Add to Index.tsx**

Modify `src/pages/Index.tsx` to include `<PortfolioSection />` between the hero/services and the contact section.
*(Note: Assume standard imports. Add the import `import { PortfolioSection } from "@/components/PortfolioSection";` and place it in the return block)*

- [ ] **Step 3: Commit**

```bash
git add src/components/PortfolioSection.tsx src/pages/Index.tsx
git commit -m "feat: add featured portfolio section to homepage"
```

---

### Task 4: Portfolio Detail Page

**Files:**
- Create: `src/pages/PortfolioDetail.tsx`
- Modify: `src/App.tsx`

- [ ] **Step 1: Create PortfolioDetail Page**

```tsx
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { portfolioItems } from "@/data/portfolio";
import { Button } from "@/components/ui/button";

const PortfolioDetail = () => {
  const { slug } = useParams();
  const project = portfolioItems.find((item) => item.slug === slug);

  if (!project) {
    return <div className="container py-24 text-center">Project niet gevonden.</div>;
  }

  return (
    <div className="min-h-screen bg-background pt-24 pb-12">
      <Helmet>
        <title>{project.title} | Case Study | Kustlab</title>
        <meta name="description" content={project.shortDescription} />
      </Helmet>

      <div className="container max-w-4xl px-4 md:px-6">
        <Button variant="ghost" asChild className="mb-8 -ml-4 text-muted-foreground">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" /> Terug naar Home
          </Link>
        </Button>

        <div className="space-y-4 mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">{project.title}</h1>
          <p className="text-xl text-muted-foreground">{project.shortDescription}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12 border-y py-8">
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-2">Client</h3>
            <p className="font-medium">{project.client}</p>
          </div>
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-2">Year</h3>
            <p className="font-medium">{project.year}</p>
          </div>
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-2">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map(tech => (
                <span key={tech} className="text-sm font-medium">{tech}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          {project.fullDescription.map((paragraph, index) => (
            <p key={index} className="leading-relaxed mb-6">{paragraph}</p>
          ))}
          
          <div className="my-12 p-8 bg-primary/5 rounded-2xl border">
            <h3 className="text-2xl font-bold mb-4 mt-0">Wil je BetaalSneller in actie zien?</h3>
            <p className="mb-6">Deze tool is live en beschikbaar voor KMO's die hun cashflow willen optimaliseren.</p>
            <Button size="lg" onClick={() => window.open('https://betaalsneller.be', '_blank')}>
              Bezoek BetaalSneller
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetail;
```

- [ ] **Step 2: Add Route to App.tsx**

Modify `src/App.tsx` to add:
```tsx
import PortfolioDetail from "./pages/PortfolioDetail.tsx";
// ... inside <Routes>
<Route path="/portfolio/:slug" element={<PortfolioDetail />} />
```

- [ ] **Step 3: Commit**

```bash
git add src/pages/PortfolioDetail.tsx src/App.tsx
git commit -m "feat: add portfolio detail page"
```

---

### Task 5: Kennisbank Index Page

**Files:**
- Create: `src/pages/KennisbankIndex.tsx`
- Modify: `src/App.tsx`

- [ ] **Step 1: Create KennisbankIndex Page**

```tsx
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Clock } from "lucide-react";
import { kennisbankArticles } from "@/data/kennisbank";

const KennisbankIndex = () => {
  return (
    <div className="min-h-screen bg-background pt-24 pb-24">
      <Helmet>
        <title>Kennisbank & Blog | Kustlab</title>
        <meta name="description" content="Kennisbank vol met tips, templates en juridische richtlijnen rondom debiteurenbeheer, facturatie en automatisering voor KMO's." />
      </Helmet>

      <div className="container px-4 md:px-6 max-w-6xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-2">
            Kennisbank
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Inzichten & <span className="text-primary">Templates</span>
          </h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            Praktische gidsen en juridische tips om sneller betaald te worden en je administratie te stroomlijnen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {kennisbankArticles.map((article) => (
            <Link 
              key={article.id} 
              to={`/kennisbank/${article.slug}`}
              className="group flex flex-col justify-between rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/50"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-muted text-muted-foreground">
                    {article.category}
                  </span>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="mr-1 h-3 w-3" />
                    {article.readTime}
                  </div>
                </div>
                <h3 className="text-xl font-bold leading-tight mb-3 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-3 mb-6">
                  {article.description}
                </p>
              </div>
              <div className="flex items-center text-sm font-medium text-primary">
                Lees artikel <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KennisbankIndex;
```

- [ ] **Step 2: Add Route to App.tsx**

Modify `src/App.tsx` to add:
```tsx
import KennisbankIndex from "./pages/KennisbankIndex.tsx";
// ... inside <Routes>
<Route path="/kennisbank" element={<KennisbankIndex />} />
```

- [ ] **Step 3: Commit**

```bash
git add src/pages/KennisbankIndex.tsx src/App.tsx
git commit -m "feat: add kennisbank index page"
```

---

### Task 6: Kennisbank Article Page

**Files:**
- Create: `src/pages/KennisbankArticle.tsx`
- Modify: `src/App.tsx`

- [ ] **Step 1: Create KennisbankArticle Page**

```tsx
import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { kennisbankArticles } from "@/data/kennisbank";
import { Button } from "@/components/ui/button";

const KennisbankArticlePage = () => {
  const { slug } = useParams();
  const article = kennisbankArticles.find((a) => a.slug === slug);

  if (!article) {
    return <Navigate to="/kennisbank" replace />;
  }

  // Generate JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "description": article.description,
    "datePublished": article.date,
    "author": {
      "@type": "Organization",
      "name": "Kustlab"
    }
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-24">
      <Helmet>
        <title>{article.title} | Kennisbank | Kustlab</title>
        <meta name="description" content={article.description} />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <div className="container px-4 md:px-6 max-w-3xl">
        <Button variant="ghost" asChild className="mb-8 -ml-4 text-muted-foreground">
          <Link to="/kennisbank">
            <ArrowLeft className="mr-2 h-4 w-4" /> Terug naar overzicht
          </Link>
        </Button>

        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              <Tag className="mr-1.5 h-3 w-3" /> {article.category}
            </span>
            <span className="flex items-center">
              <Clock className="mr-1.5 h-4 w-4" /> {article.readTime}
            </span>
            <span className="flex items-center">
              <Calendar className="mr-1.5 h-4 w-4" /> {new Date(article.date).toLocaleDateString('nl-BE')}
            </span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl leading-tight mb-6">
            {article.title}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {article.description}
          </p>
        </header>

        <div className="border-t pt-10">
          <article 
            className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-primary prose-img:rounded-xl"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>

        {/* CTA Block */}
        <div className="mt-16 p-8 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl border border-primary/20 text-center">
          <h3 className="text-2xl font-bold mb-3">Wil je facturen sneller betaald krijgen?</h3>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Stop met handmatig e-mails sturen. Probeer BetaalSneller, onze slimme automatiseringstool, en verlaag je DSO.
          </p>
          <Button size="lg" className="w-full sm:w-auto" onClick={() => window.open('https://betaalsneller.be', '_blank')}>
            Ontdek BetaalSneller
          </Button>
        </div>

        {/* Disclaimer */}
        <div className="mt-16 pt-8 border-t text-sm text-muted-foreground/80 italic text-center px-4">
          Disclaimer: Dit artikel biedt algemene informatie over facturatie en incassoprocessen in België en vormt geen formeel juridisch of financieel advies. Raadpleeg bij complexe geschillen steeds een advocaat.
        </div>
      </div>
    </div>
  );
};

export default KennisbankArticlePage;
```

- [ ] **Step 2: Add Route to App.tsx**

Modify `src/App.tsx` to add:
```tsx
import KennisbankArticlePage from "./pages/KennisbankArticle.tsx";
// ... inside <Routes>
<Route path="/kennisbank/:slug" element={<KennisbankArticlePage />} />
```

- [ ] **Step 3: Commit**

```bash
git add src/pages/KennisbankArticle.tsx src/App.tsx
git commit -m "feat: add kennisbank article page with JSON-LD and CTA"
```
