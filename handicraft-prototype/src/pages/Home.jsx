import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Gift, Baby, ChevronRight } from 'lucide-react';
import InteractivePersonalizer from '../components/InteractivePersonalizer';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex-grow flex items-center pt-8 pb-16 lg:pt-16 lg:pb-24 px-6 max-w-7xl mx-auto w-full">
        {/* Subtle background abstract shapes */}
        <div className="absolute top-20 right-0 -z-10 translate-x-1/4 opacity-40">
           <svg width="600" height="600" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#f5f0ea" d="M42.7,-73.4C55.9,-67.6,67.6,-57.4,76.5,-45.1C85.4,-32.8,91.5,-18.4,90.4,-4.3C89.3,9.8,81.1,23.5,72.2,35.6C63.2,47.8,53.5,58.3,41.9,65.8C30.3,73.4,16.8,78,2.7,73.6C-11.4,69.2,-25.1,55.9,-37,45.5C-48.9,35.2,-58.9,27.8,-67.2,17.4C-75.5,7,-82.1,-6.6,-79.8,-18.8C-77.5,-31,-66.3,-41.8,-54.2,-48.6C-42.1,-55.4,-29.2,-58.1,-16.9,-61.8C-4.7,-65.4,6.9,-70.1,18.9,-72.6C30.9,-75.2,43.2,-75.6,42.7,-73.4Z" transform="translate(100 100)" />
          </svg>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center w-full">
          <div className="space-y-10 relative z-10 w-full">
            <div className="inline-flex items-center space-x-3 pb-2 border-b border-terracotta-400/30">
              <Star className="w-3 h-3 text-terracotta-500 fill-terracotta-500" />
              <span className="text-xs uppercase tracking-widest font-semibold text-rustic-800">Handgemaakt in Lissewege</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-display italic leading-[1.05] text-navy-900 w-full break-words">
              Puur.<br />
              <span className="font-sans font-bold text-4xl sm:text-5xl lg:text-7xl not-italic uppercase tracking-tight text-rustic-900 block mt-2">Natuurlijk.</span>
              <span className="gold-foil block mt-2">Persoonlijk.</span>
            </h1>
            
            <p className="text-sm sm:text-base text-rustic-800 leading-relaxed max-w-md font-sans border-l-2 border-terracotta-300 pl-6">
              Van doopsuiker met bloemen tot houtcreaties. Ontdek het vakmanschap en de materialen die we koesteren.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <Link to="/shop" className="bg-navy-900 text-white px-8 py-4 sm:px-10 sm:py-5 text-sm uppercase tracking-widest font-medium hover:bg-terracotta-500 transition-colors duration-500 shadow-xl flex items-center justify-center gap-3">
                Ga Naar Shop
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="relative w-full overflow-hidden max-w-[100vw] px-4 sm:px-0">
            <InteractivePersonalizer />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 sm:py-24 bg-white/40 border-t border-rustic-800/5 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl font-script text-terracotta-500 mb-4">Ontdek de Collecties</h2>
            <p className="text-xs uppercase tracking-widest text-navy-800 font-semibold">Tastbare herinneringen</p>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
            {/* Category Card 1 */}
            <Link to="/shop?cat=doopsuiker" className="group cursor-pointer">
              <div className="rustic-card aspect-[3/4] p-6 relative overflow-hidden flex flex-col justify-end text-center">
                <div className="absolute inset-0 bg-navy-900/20 group-hover:bg-navy-900/10 transition-colors z-10"></div>
                <img src="https://images.unsplash.com/photo-1601222448375-71be0fcde419?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Doopsuiker" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                
                <div className="relative z-20 bg-rustic-50/95 p-4 sm:p-6 border border-rustic-800/10 m-2">
                  <Baby className="w-5 h-5 text-terracotta-500 mx-auto mb-3" />
                  <h3 className="text-lg sm:text-xl font-display font-semibold text-navy-900 mb-1">Geboorte</h3>
                  <p className="text-[10px] uppercase tracking-widest text-rustic-800/60">Doopsuiker Collectie</p>
                </div>
              </div>
            </Link>

            {/* Category Card 2 */}
            <Link to="/shop?cat=houtwerk" className="group cursor-pointer md:mt-12">
              <div className="rustic-card aspect-[3/4] p-6 relative overflow-hidden flex flex-col justify-end text-center">
                <div className="absolute inset-0 bg-navy-900/20 group-hover:bg-navy-900/10 transition-colors z-10"></div>
                <img src="https://images.unsplash.com/photo-1610444310543-9ddb8cb04230?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Hout" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                
                <div className="relative z-20 bg-rustic-50/95 p-4 sm:p-6 border border-rustic-800/10 m-2">
                  <Gift className="w-5 h-5 text-terracotta-500 mx-auto mb-3" />
                  <h3 className="text-lg sm:text-xl font-display font-semibold text-navy-900 mb-1">Hout & Acryl</h3>
                  <p className="text-[10px] uppercase tracking-widest text-rustic-800/60">Gepersonaliseerd</p>
                </div>
              </div>
            </Link>

            {/* Category Card 3 */}
            <Link to="/shop?cat=huwelijk" className="group cursor-pointer sm:col-span-2 md:col-span-1">
              <div className="rustic-card aspect-[3/4] p-6 relative overflow-hidden flex flex-col justify-end text-center">
                <div className="absolute inset-0 bg-navy-900/20 group-hover:bg-navy-900/10 transition-colors z-10"></div>
                <img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Huwelijk" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                
                <div className="relative z-20 bg-rustic-50/95 p-4 sm:p-6 border border-rustic-800/10 m-2">
                  <Star className="w-5 h-5 text-terracotta-500 mx-auto mb-3" />
                  <h3 className="text-lg sm:text-xl font-display font-semibold text-navy-900 mb-1">Huwelijk</h3>
                  <p className="text-[10px] uppercase tracking-widest text-rustic-800/60">Details op Maat</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
