import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { portfolioItems } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Helmet } from 'react-helmet-async';

const PortfolioDetail = () => {
  const { slug } = useParams();
  const project = portfolioItems.find((item) => item.slug === slug);

  if (!project) {
    return <div className="container py-24 text-center">Project niet gevonden.</div>;
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.title,
    "description": project.shortDescription,
    "author": {
      "@type": "Organization",
      "name": "Kustlab"
    }
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-12">
      <Helmet>
        <title>{`${project.title} | Case Study | Kustlab`}</title>
        <meta name="description" content={project.shortDescription} />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
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
                <span key={tech} className="px-2 py-1 bg-muted rounded-md text-xs font-medium">{tech}</span>
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
            <Button size="lg" onClick={() => window.open('https://betaalsneller.kustlab.com', '_blank')}>
              Bezoek BetaalSneller
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetail;
