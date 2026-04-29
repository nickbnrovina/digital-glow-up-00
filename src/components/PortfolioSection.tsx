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
