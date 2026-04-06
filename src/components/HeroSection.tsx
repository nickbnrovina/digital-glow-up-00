import { useEffect } from "react";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  useEffect(() => {
    const root = document.documentElement;
    let cx = window.innerWidth / 2;
    let cy = window.innerHeight / 2;
    
    const handleResize = () => {
        cx = window.innerWidth / 2;
        cy = window.innerHeight / 2;
    };

    let ticking = false;
    const handleMouseMove = (e: MouseEvent) => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const dx = e.clientX - cx;
                const dy = e.clientY - cy;
                root.style.setProperty('--mouse-x', `${dx}px`);
                root.style.setProperty('--mouse-y', `${dy}px`);
                ticking = false;
            });
            ticking = true;
        }
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousemove', handleMouseMove);
      root.style.removeProperty('--mouse-x');
      root.style.removeProperty('--mouse-y');
    };
  }, []);

  return (
    <section id="start" className="relative w-full min-h-screen overflow-hidden flex items-center justify-center text-white bg-[#111318]" style={{ perspective: "1000px" }}>
      <style>{`
        .scene {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            transform-style: preserve-3d;
            z-index: 1;
        }

        .parallax-layer {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            transform-style: preserve-3d;
        }

        .layer-bg-anim {
            transform: translate3d(calc(var(--mouse-x, 0px) * 0.01), calc(var(--mouse-y, 0px) * 0.01), -500px);
        }

        .layer-mid-anim {
            transform: translate3d(calc(var(--mouse-x, 0px) * -0.05), calc(var(--mouse-y, 0px) * -0.05), -200px);
        }

        .grid-container {
            position: absolute;
            bottom: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            perspective: 600px;
            transform-style: preserve-3d;
            opacity: 0;
            animation: gridFade 1.5s ease-out 0.4s forwards;
            background-image: 
                linear-gradient(rgba(0, 255, 223, 0.15) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 255, 223, 0.15) 1px, transparent 1px);
            background-size: 50px 50px;
            transform: rotateX(75deg) translateY(200px);
            mask-image: radial-gradient(ellipse at center, black 10%, transparent 60%);
            -webkit-mask-image: radial-gradient(ellipse at center, black 10%, transparent 60%);
        }

        .grid-animation {
            width: 100%;
            height: 100%;
            animation: gridMove 5s linear infinite;
        }

        @keyframes gridMove {
            0% { transform: translateY(0); }
            100% { transform: translateY(50px); }
        }

        .shape-container {
            position: absolute;
            transform-style: preserve-3d;
            opacity: 0;
        }

        .cube {
            position: relative;
            width: 60px;
            height: 60px;
            transform-style: preserve-3d;
            animation: rotateCube 15s linear infinite;
        }

        .cube .face {
            position: absolute;
            width: 60px;
            height: 60px;
            border: 1px solid rgba(0, 255, 223, 0.6);
            background: rgba(0, 255, 223, 0.05);
            box-shadow: inset 0 0 12px rgba(0, 255, 223, 0.2);
        }

        .cube .front  { transform: translateZ(30px); }
        .cube .back   { transform: rotateY(180deg) translateZ(30px); }
        .cube .right  { transform: rotateY(90deg) translateZ(30px); }
        .cube .left   { transform: rotateY(-90deg) translateZ(30px); }
        .cube .top    { transform: rotateX(90deg) translateZ(30px); }
        .cube .bottom { transform: rotateX(-90deg) translateZ(30px); }

        .sc-1 { top: 20%; left: 15%; animation: shapeIn 1s cubic-bezier(0.1, 0.8, 0.2, 1) 0.6s forwards, floatHero 6s ease-in-out infinite alternate; }
        .sc-2 { top: 70%; left: 25%; animation: shapeIn 1s cubic-bezier(0.1, 0.8, 0.2, 1) 0.8s forwards, floatHero 8s ease-in-out infinite alternate-reverse; }
        .sc-2 .cube { transform: scale(1.5); animation-duration: 25s; animation-direction: reverse; }
        
        .sc-3 { top: 30%; left: 80%; animation: shapeIn 1s cubic-bezier(0.1, 0.8, 0.2, 1) 0.9s forwards, floatHero 7s ease-in-out infinite alternate; }
        .sc-3 .cube { transform: scale(0.8); animation-duration: 18s; }
        
        .sc-4 { top: 75%; left: 75%; animation: shapeIn 1s cubic-bezier(0.1, 0.8, 0.2, 1) 1.0s forwards, floatHero 9s ease-in-out infinite alternate-reverse; }
        .sc-4 .cube { transform: scale(1.2); animation-duration: 22s; animation-direction: reverse; }
        
        .sc-5 { top: 10%; left: 60%; animation: shapeIn 1s cubic-bezier(0.1, 0.8, 0.2, 1) 1.2s forwards, floatHero 10s ease-in-out infinite alternate; }
        .sc-5 .cube { transform: scale(0.5); animation-duration: 15s; }

        @keyframes rotateCube {
            0% { transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(var(--scale, 1)); }
            100% { transform: rotateX(360deg) rotateY(360deg) rotateZ(180deg) scale(var(--scale, 1)); }
        }

        @keyframes floatHero {
            0% { transform: translateY(0px) rotateZ(0deg); }
            100% { transform: translateY(40px) rotateZ(10deg); }
        }

        @keyframes gridFade {
            0% { opacity: 0; }
            100% { opacity: 0.8; }
        }

        @keyframes shapeIn {
            0% { opacity: 0; transform: translateZ(-800px); }
            100% { opacity: 1; transform: translateZ(0); }
        }

        .scanlines {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0) 50%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.15));
            background-size: 100% 4px;
            pointer-events: none;
            z-index: 100;
        }

        .noise-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 99;
            opacity: 0.04;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }

        .glow-overlay-bg {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 80%;
            height: 80%;
            transform: translate(-50%, -50%);
            background: radial-gradient(circle at center, rgba(0, 255, 223, 0.08) 0%, transparent 60%);
            pointer-events: none;
            z-index: 1;
            mix-blend-mode: screen;
        }
        
        .text-content-wrapper {
            position: relative;
            z-index: 10;
            pointer-events: none;
            transform: translate3d(calc(var(--mouse-x, 0px) * -0.02), calc(var(--mouse-y, 0px) * -0.02), 0);
        }

        .text-content-wrapper > * {
            pointer-events: auto;
        }

        .cta-btn-hero {
            position: relative;
            overflow: hidden;
        }

        .cta-btn-hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 50%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(0, 255, 223, 0.4), transparent);
            transform: skewX(-20deg);
            transition: 0.5s;
        }

        .cta-btn-hero:hover::before {
            left: 150%;
        }

        .hero-fade-bottom {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 150px;
            background: linear-gradient(to bottom, transparent, hsl(var(--background)));
            z-index: 101;
            pointer-events: none;
        }
      `}</style>

      {/* Overlays */}
      <div className="noise-overlay" />
      <div className="scanlines" />
      <div className="hero-fade-bottom" />
      
      {/* Background Gradient */}
      {/* Remove hardcoded #0a0a1a to just fade safely from transparent or match exact HSL */}
      <div className="absolute inset-0 z-0 pointer-events-none" style={{ background: 'radial-gradient(circle at center, rgba(17,19,24,1) 0%, hsl(var(--background)) 100%)' }} />

      {/* 3D Scene */}
      <div className="scene" id="scene">
        {/* Background Grid Parallax */}
        <div className="parallax-layer layer-bg-anim">
            <div className="grid-container">
                <div className="grid-animation"></div>
            </div>
            <div className="glow-overlay-bg"></div>
        </div>

        {/* Mid Layer Floating Shapes Parallax */}
        <div className="parallax-layer layer-mid-anim">
            <div className="shape-container sc-1">
                <div className="cube" style={{ '--scale': 1 } as React.CSSProperties}>
                    <div className="face front"></div><div className="face back"></div>
                    <div className="face right"></div><div className="face left"></div>
                    <div className="face top"></div><div className="face bottom"></div>
                </div>
            </div>
            
            <div className="shape-container sc-2">
                <div className="cube" style={{ '--scale': 1.5 } as React.CSSProperties}>
                    <div className="face front"></div><div className="face back"></div>
                    <div className="face right"></div><div className="face left"></div>
                    <div className="face top"></div><div className="face bottom"></div>
                </div>
            </div>

            <div className="shape-container sc-3">
                <div className="cube" style={{ '--scale': 0.8 } as React.CSSProperties}>
                    <div className="face front"></div><div className="face back"></div>
                    <div className="face right"></div><div className="face left"></div>
                    <div className="face top"></div><div className="face bottom"></div>
                </div>
            </div>

            <div className="shape-container sc-4">
                <div className="cube" style={{ '--scale': 1.2 } as React.CSSProperties}>
                    <div className="face front"></div><div className="face back"></div>
                    <div className="face right"></div><div className="face left"></div>
                    <div className="face top"></div><div className="face bottom"></div>
                </div>
            </div>

            <div className="shape-container sc-5">
                <div className="cube" style={{ '--scale': 0.5 } as React.CSSProperties}>
                    <div className="face front"></div><div className="face back"></div>
                    <div className="face right"></div><div className="face left"></div>
                    <div className="face top"></div><div className="face bottom"></div>
                </div>
            </div>
        </div>
      </div>

      {/* Content overlays */}
      <div className="container mx-auto px-4 relative z-10 w-full flex flex-col items-center justify-center text-center text-content-wrapper h-full pt-16">
          <div className="space-y-6 max-w-4xl mx-auto flex flex-col items-center">
            
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium border border-[#00ffdf]/30 text-[#00ffdf] tracking-wider uppercase bg-[#00ffdf]/5 backdrop-blur-md animate-fade-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
              Digital Solutions Consultant
            </span>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold leading-tight text-white mb-6 uppercase tracking-tight animate-fade-in-up" style={{ animationDelay: '0.8s', animationFillMode: 'both', textShadow: '0 0 30px rgba(0, 255, 223, 0.2)' }}>
             Wij Bouwen de <br className="hidden md:block"/> Digitale <span className="text-[#00ffdf]">Infrastructuur</span><br className="md:hidden block"/> van Morgen
            </h1>

            <p className="text-lg md:text-xl text-white/70 font-light max-w-2xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '1.0s', animationFillMode: 'both' }}>
             Websites &middot; Automatisering &middot; Optimalisatie &mdash; gebouwd om jouw bedrijf op te schalen.
            </p>

            <a
              href="#pakketten"
              className="cta-btn-hero inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-[#00ffdf] border border-[#00ffdf] rounded bg-transparent transition-all duration-300 hover:bg-[#00ffdf]/10 group animate-fade-in-up"
              style={{ 
                animationDelay: '1.2s', 
                animationFillMode: 'both',
                boxShadow: '0 0 15px rgba(0, 255, 223, 0.1), inset 0 0 15px rgba(0, 255, 223, 0.1)'
              }}
            >
              Start jouw project <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>

          </div>
      </div>

    </section>
  );
};

export default HeroSection;
