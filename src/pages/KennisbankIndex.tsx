import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import { kennisbankArticles } from "@/data/kennisbank";

import { Helmet } from 'react-helmet-async';

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
