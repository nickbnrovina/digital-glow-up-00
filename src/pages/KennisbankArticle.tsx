import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { kennisbankArticles } from "@/data/kennisbank";
import { Button } from "@/components/ui/button";

import { Helmet } from 'react-helmet-async';

const KennisbankArticlePage = () => {
  const { slug } = useParams();
  const article = kennisbankArticles.find((a) => a.slug === slug);

  if (!article) {
    return <Navigate to="/kennisbank" replace />;
  }

  return (
    <div className="min-h-screen bg-background pt-24 pb-24">
      <Helmet>
        <title>{article.title} | Kennisbank | Kustlab</title>
        <meta name="description" content={article.description} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": article.title,
            "description": article.description,
            "datePublished": article.date,
            "author": {
              "@type": "Organization",
              "name": "Kustlab"
            }
          })}
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
          <Button size="lg" className="w-full sm:w-auto" onClick={() => window.open('https://betaalsneller.kustlab.com', '_blank')}>
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
