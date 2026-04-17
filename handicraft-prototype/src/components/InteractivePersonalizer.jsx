import { useState } from 'react';
import { PenTool } from 'lucide-react';

export default function InteractivePersonalizer() {
  const [name, setName] = useState('Florian');

  return (
    <div className="bg-rustic-50 bg-paper-texture p-8 md:p-12 relative overflow-hidden group max-w-sm w-full mx-auto md:mx-0 shadow-2xl border border-rustic-800/10 rounded-sm">
      {/* Subtle corner decorations */}
      <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-terracotta-400 opacity-30 m-4"></div>
      <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-terracotta-400 opacity-30 m-4"></div>
      
      <div className="mb-8 flex flex-col items-center justify-center relative z-10 text-center">
        <div className="w-12 h-12 rounded-full border border-terracotta-400/30 flex items-center justify-center text-terracotta-500 mb-4 bg-terracotta-50">
          <PenTool className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-2xl font-display italic text-navy-900 mb-1">Live Personalisatie</h3>
          <p className="text-xs uppercase tracking-widest text-rustic-800/60 font-sans">Zie het voor je</p>
        </div>
      </div>
      
      <div className="mb-10 relative z-10 w-4/5 mx-auto">
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={15}
          placeholder="Naam of inscriptie"
          className="w-full px-2 py-3 border-b border-rustic-800/20 focus:border-terracotta-400 focus:outline-none transition-all bg-transparent text-center text-lg font-sans text-navy-900 placeholder:text-rustic-800/30"
        />
      </div>

      <div className="relative w-full aspect-square bg-[#7c5b4e] flex items-center justify-center shadow-inner overflow-hidden border border-rustic-900/10 rounded-sm group-hover:shadow-2xl transition-all duration-700">
        {/* Wood texture background for the engraving */}
        <div className="absolute inset-0 opacity-80 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] bg-cover mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-orange-900/10 mix-blend-color-burn"></div>
        
        {/* The interactive text in gold foil */}
        <div className="z-10 text-center transform transition-all duration-500 scale-100 group-hover:scale-110">
          <span className="font-script text-6xl tracking-wide gold-foil">
            {name || '...'}
          </span>
        </div>
        
        <div className="absolute bottom-4 text-[10px] uppercase tracking-widest font-sans text-white/50 text-center w-full">
          Goudfolie op hout
        </div>
      </div>
    </div>
  );
}
