import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Heart, Box } from 'lucide-react';

const Success = () => {
  useEffect(() => {
    // Quick confetti effect for wow-factor
    const triggerConfetti = async () => {
      try {
        const confetti = (await import('canvas-confetti')).default;
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#D97757', '#1E293B', '#F5F0EA'] // Match branding
        });
      } catch (e) {
        // Fallback or ignore if canvas-confetti isn't installed
      }
    };
    
    triggerConfetti();
  }, []);

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="rustic-card max-w-2xl w-full p-10 sm:p-16 text-center relative overflow-hidden">
        {/* Decorative BG Blob */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-terracotta-100 rounded-full blur-3xl -mr-32 -mt-32 opacity-50 z-0" />
        
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-script text-navy-900 mb-4">
            Bedankt voor je bestelling!
          </h1>
          
          <p className="text-base text-rustic-700 max-w-md mx-auto mb-10 leading-relaxed font-sans">
            We hebben je betaling goed ontvangen. We gaan met liefde en de grootste zorg aan de slag met jouw creatie. Je krijgt een bevestigingsmail met de details.
          </p>

          <div className="grid grid-cols-2 gap-4 w-full max-w-sm mb-10">
            <div className="bg-white p-4 border border-rustic-800/10 flex flex-col items-center text-center">
              <Box className="w-6 h-6 text-terracotta-500 mb-2" />
              <span className="text-[10px] uppercase tracking-widest font-semibold text-navy-900">Order #30841</span>
            </div>
            <div className="bg-white p-4 border border-rustic-800/10 flex flex-col items-center text-center">
              <Heart className="w-6 h-6 text-terracotta-500 mb-2" />
              <span className="text-[10px] uppercase tracking-widest font-semibold text-navy-900">Handgemaakt</span>
            </div>
          </div>
          
          <Link 
            to="/" 
            className="bg-navy-900 text-white px-8 py-4 text-xs uppercase tracking-widest font-semibold hover:bg-terracotta-500 transition-colors shadow-lg"
          >
            Terug naar Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Success;
