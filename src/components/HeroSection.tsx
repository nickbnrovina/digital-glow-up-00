const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center section-padding pt-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[100px] animate-pulse-glow animate-delay-200" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="opacity-0 animate-fade-in-up">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium border border-primary/30 text-primary tracking-wider uppercase">
                Digitale Transformatie Partner
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold leading-tight opacity-0 animate-fade-in-up animate-delay-100">
              Meer dan alleen een{" "}
              <span className="gradient-text">website</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl opacity-0 animate-fade-in-up animate-delay-200">
              Wij transformeren servicebedrijven met krachtige websites,
              geautomatiseerde workflows en digitale processen. Bespaar tijd,
              verlaag administratiekosten en win meer klanten.
            </p>

            <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in-up animate-delay-300">
              <a
                href="#pakketten"
                className="px-7 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all duration-300 glow-primary"
              >
                Bekijk onze pakketten
              </a>
              <a
                href="#contact"
                className="px-7 py-3.5 rounded-lg border border-foreground/20 text-foreground font-semibold hover:border-foreground/40 hover:bg-foreground/5 transition-all duration-300"
              >
                Neem contact op
              </a>
            </div>
          </div>

          {/* Abstract visual */}
          <div className="hidden lg:flex justify-center items-center opacity-0 animate-fade-in-up animate-delay-400">
            <div className="relative w-[420px] h-[420px]">
              {/* Rotating ring */}
              <div className="absolute inset-0 rounded-full border border-primary/20 animate-rotate-slow" />
              <div className="absolute inset-6 rounded-full border border-accent/15 animate-rotate-slow" style={{ animationDirection: "reverse", animationDuration: "15s" }} />

              {/* Floating glass cards */}
              <div className="absolute top-8 right-4 glass rounded-xl p-4 w-48 animate-float">
                <div className="text-xs text-muted-foreground mb-1">Conversie</div>
                <div className="text-2xl font-heading font-bold text-primary">+340%</div>
              </div>
              <div className="absolute bottom-12 left-0 glass rounded-xl p-4 w-44 animate-float animate-delay-200">
                <div className="text-xs text-muted-foreground mb-1">Tijd bespaard</div>
                <div className="text-2xl font-heading font-bold text-accent">12u/wk</div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 glass rounded-2xl p-6 w-52 animate-float animate-delay-100">
                <div className="text-xs text-muted-foreground mb-2">Leads per maand</div>
                <div className="flex items-end gap-1">
                  {[30, 50, 45, 70, 65, 90, 85].map((h, i) => (
                    <div
                      key={i}
                      className="w-4 rounded-sm bg-gradient-to-t from-primary/60 to-primary"
                      style={{ height: `${h * 0.5}px` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
