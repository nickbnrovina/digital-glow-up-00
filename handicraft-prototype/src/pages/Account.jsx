import React, { useState } from 'react';
import { Gift, Star, Award, ChevronRight } from 'lucide-react';

const Account = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email) setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return (
      <div className="max-w-xl mx-auto px-6 py-20 w-full flex flex-col justify-center items-center">
        <div className="rustic-card p-8 sm:p-12 w-full relative overflow-hidden">
          {/* Subtle decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-terracotta-100 rounded-full blur-3xl -mr-16 -mt-16 z-0" />
          
          <div className="relative z-10 text-center mb-8">
            <Gift className="w-10 h-10 text-terracotta-500 mx-auto mb-4" />
            <h1 className="text-3xl font-display font-semibold text-navy-900 mb-2">Jouw Spaarkaart</h1>
            <p className="text-sm text-rustic-600">Log in om je "Craft Points" te bekijken en in te wisselen voor exclusieve kortingen op je volgende bestelling!</p>
          </div>

          <form onSubmit={handleLogin} className="relative z-10 space-y-6">
            <div>
              <label className="block text-xs uppercase tracking-widest font-semibold text-navy-900 mb-2">E-mailadres</label>
              <input 
                type="email" 
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-rustic-800/20 focus:outline-none focus:border-terracotta-500 text-navy-900"
                placeholder="naam@voorbeeld.be"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest font-semibold text-navy-900 mb-2">Wachtwoord</label>
              <input 
                type="password" 
                required
                className="w-full px-4 py-3 bg-white border border-rustic-800/20 focus:outline-none focus:border-terracotta-500 text-navy-900"
                placeholder="••••••••"
              />
            </div>
            <button type="submit" className="w-full bg-navy-900 text-white px-6 py-4 text-sm uppercase tracking-widest font-medium hover:bg-terracotta-500 transition-colors shadow-lg">
              Aanmelden
            </button>
            <p className="text-xs text-center text-rustic-500">
              Nog geen account? <a href="#" className="text-terracotta-600 underline">Registreer hier</a>
            </p>
          </form>
        </div>
      </div>
    );
  }

  // Logged in UI
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 w-full grid md:grid-cols-3 gap-8">
      
      {/* Sidebar */}
      <div className="md:col-span-1 space-y-6">
        <div className="rustic-card p-6 text-center">
          <div className="w-20 h-20 bg-terracotta-100 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-terracotta-200">
            <span className="text-2xl font-display text-terracotta-600">{email.charAt(0).toUpperCase()}</span>
          </div>
          <h2 className="font-display text-xl font-semibold text-navy-900">{email.split('@')[0]}</h2>
          <p className="text-xs uppercase tracking-widest text-rustic-500 mt-1">Premium VIP</p>
        </div>

        <div className="flex flex-col">
          <button className="text-left px-6 py-4 bg-navy-900 text-white text-sm uppercase tracking-widest border-l-4 border-terracotta-500 font-semibold shadow-md">
            Mijn Spaarkaart
          </button>
          <button className="text-left px-6 py-4 text-navy-800 text-sm uppercase tracking-widest hover:bg-white/50 border-l-4 border-transparent font-medium transition-colors">
            Bestelgeschiedenis
          </button>
          <button className="text-left px-6 py-4 text-navy-800 text-sm uppercase tracking-widest hover:bg-white/50 border-l-4 border-transparent font-medium transition-colors">
            Adresgegevens
          </button>
          <button 
            onClick={() => setIsLoggedIn(false)}
            className="text-left px-6 py-4 text-red-600 text-sm uppercase tracking-widest hover:bg-white/50 border-l-4 border-transparent font-medium transition-colors mt-6"
          >
            Afmelden
          </button>
        </div>
      </div>

      {/* Main Content (Loyalty Card) */}
      <div className="md:col-span-2 space-y-8">
        
        <div className="flex items-center justify-between border-b border-rustic-800/10 pb-4">
          <h1 className="text-3xl font-display text-navy-900">Jouw Craft Points</h1>
          <div className="flex items-center gap-2 bg-terracotta-100 px-4 py-2 rounded-full">
            <Award className="w-5 h-5 text-terracotta-600" />
            <span className="font-bold text-terracotta-800">450 CP</span>
          </div>
        </div>

        {/* Card visualization */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-navy-800 to-navy-950 p-8 shadow-2xl text-white">
          <div className="absolute top-0 right-0 w-64 h-64 bg-terracotta-500 opacity-20 rounded-full blur-3xl -mr-20 -mt-20"></div>
          
          <div className="relative z-10 flex justify-between items-start mb-12">
            <div>
              <span className="font-sans text-xs uppercase tracking-[0.3em] text-terracotta-400 font-semibold mb-1 block">Craft</span>
              <span className="font-script text-3xl leading-7">Valerie.</span>
            </div>
            <Star className="w-8 h-8 text-terracotta-400/50" />
          </div>

          <div className="relative z-10">
            <p className="text-sm text-blue-200 mb-2 uppercase tracking-widest">Huidige status</p>
            <div className="w-full bg-navy-950 rounded-full h-3 mb-2 border border-navy-700">
              <div className="bg-gradient-to-r from-terracotta-400 to-terracotta-300 h-3 rounded-full" style={{ width: '75%' }}></div>
            </div>
            <div className="flex justify-between text-xs text-blue-200">
              <span>Nog 50 CP</span>
              <span>Tot €10 Korting!</span>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="grid sm:grid-cols-2 gap-6 pt-4">
          <div className="border border-rustic-800/10 p-6 bg-white flex flex-col">
            <Gift className="w-8 h-8 text-terracotta-500 mb-4" />
            <h3 className="font-display font-semibold text-xl text-navy-900 mb-2">Verjaardagscadeau</h3>
            <p className="text-sm text-rustic-600 mb-4 flex-grow">We vieren jouw verjaardag met 200 extra Craft Points!</p>
            <button className="text-xs uppercase tracking-widest text-navy-900 font-semibold flex items-center hover:text-terracotta-500">
              Vul geboortedatum in <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>
          <div className="border border-rustic-800/10 p-6 bg-white flex flex-col">
            <Star className="w-8 h-8 text-terracotta-500 mb-4" />
            <h3 className="font-display font-semibold text-xl text-navy-900 mb-2">Vrienden Uitnodigen</h3>
            <p className="text-sm text-rustic-600 mb-4 flex-grow">Geef een vriend(in) 10% korting en ontvang zelf 300 CP bij hun eerste bestelling.</p>
            <button className="text-xs uppercase tracking-widest text-navy-900 font-semibold flex items-center hover:text-terracotta-500">
              Kopieer Link <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Account;
