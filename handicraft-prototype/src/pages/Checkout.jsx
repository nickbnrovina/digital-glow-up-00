import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ChevronLeft, CreditCard, Smartphone } from 'lucide-react';

const Checkout = () => {
  const { cartItems, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('bancontact');

  const shipping = 5.95;
  const total = cartTotal + shipping;

  const handlePayment = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment API call
    setTimeout(() => {
      clearCart();
      setIsProcessing(false);
      navigate('/success');
    }, 2000); // 2 second fake delay
  };

  // If cart is empty and not processing, redirect back to shop
  if (cartItems.length === 0 && !isProcessing) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h2 className="text-2xl font-display text-navy-900 mb-4">Je mandje is leeg</h2>
        <Link to="/shop" className="text-terracotta-500 hover:underline">Terug naar de shop</Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 sm:py-12 w-full grid lg:grid-cols-12 gap-12">
      
      {/* Left Column: Form & Payment */}
      <div className="lg:col-span-7 xl:col-span-8 space-y-8">
        <div>
          <Link to="/shop" className="inline-flex items-center text-xs uppercase tracking-widest font-semibold text-rustic-500 hover:text-navy-900 mb-8 transition-colors">
            <ChevronLeft className="w-4 h-4 mr-1" /> Verder winkelen
          </Link>
          <h1 className="text-4xl font-display font-semibold text-navy-900 mb-2">Afrekenen</h1>
          <p className="text-sm text-rustic-600">Beveiligde en versleutelde betaling.</p>
        </div>

        <form onSubmit={handlePayment} className="space-y-10">
          
          {/* Contact Details */}
          <section className="space-y-4">
            <h2 className="text-xl font-display text-navy-900 border-b border-rustic-800/10 pb-2">Contactgegevens</h2>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-[10px] uppercase tracking-widest font-semibold text-navy-900 mb-1">Voornaam</label>
                <input required type="text" className="w-full px-4 py-3 bg-white border border-rustic-800/20 focus:outline-none focus:border-terracotta-500 text-sm" placeholder="Valerie" />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest font-semibold text-navy-900 mb-1">Achternaam</label>
                <input required type="text" className="w-full px-4 py-3 bg-white border border-rustic-800/20 focus:outline-none focus:border-terracotta-500 text-sm" placeholder="Janssens" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-[10px] uppercase tracking-widest font-semibold text-navy-900 mb-1">E-mailadres</label>
                <input required type="email" className="w-full px-4 py-3 bg-white border border-rustic-800/20 focus:outline-none focus:border-terracotta-500 text-sm" placeholder="info@voorbeeld.be" />
              </div>
              <div className="sm:col-span-2 mt-4">
                <h2 className="text-xl font-display text-navy-900 border-b border-rustic-800/10 pb-2 mb-4">Verzendadres</h2>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-[10px] uppercase tracking-widest font-semibold text-navy-900 mb-1">Straat en huisnummer</label>
                    <input required type="text" className="w-full px-4 py-3 bg-white border border-rustic-800/20 focus:outline-none focus:border-terracotta-500 text-sm" placeholder="Lissewegestraat 1" />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-semibold text-navy-900 mb-1">Postcode</label>
                    <input required type="text" className="w-full px-4 py-3 bg-white border border-rustic-800/20 focus:outline-none focus:border-terracotta-500 text-sm" placeholder="8380" />
                  </div>
                  <div className="sm:col-span-3">
                    <label className="block text-[10px] uppercase tracking-widest font-semibold text-navy-900 mb-1">Plaats</label>
                    <input required type="text" className="w-full px-4 py-3 bg-white border border-rustic-800/20 focus:outline-none focus:border-terracotta-500 text-sm" placeholder="Brugge (Lissewege)" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Payment Method */}
          <section className="space-y-4 pt-4">
            <h2 className="text-xl font-display text-navy-900 border-b border-rustic-800/10 pb-2">Betaalmethode</h2>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <label className={`cursor-pointer border p-4 flex items-center justify-between transition-colors ${paymentMethod === 'bancontact' ? 'border-terracotta-500 bg-terracotta-50' : 'border-rustic-800/20 bg-white hover:border-terracotta-300'}`}>
                <div className="flex items-center gap-3">
                  <input 
                    type="radio" 
                    name="payment" 
                    value="bancontact" 
                    checked={paymentMethod === 'bancontact'} 
                    onChange={() => setPaymentMethod('bancontact')}
                    className="w-4 h-4 text-terracotta-500 focus:ring-terracotta-500" 
                  />
                  <span className="font-semibold text-sm text-navy-900">Bancontact</span>
                </div>
                <CreditCard className="w-6 h-6 text-navy-700" />
              </label>

              <label className={`cursor-pointer border p-4 flex items-center justify-between transition-colors ${paymentMethod === 'payconiq' ? 'border-terracotta-500 bg-terracotta-50' : 'border-rustic-800/20 bg-white hover:border-terracotta-300'}`}>
                <div className="flex items-center gap-3">
                  <input 
                    type="radio" 
                    name="payment" 
                    value="payconiq" 
                    checked={paymentMethod === 'payconiq'} 
                    onChange={() => setPaymentMethod('payconiq')}
                    className="w-4 h-4 text-terracotta-500 focus:ring-terracotta-500" 
                  />
                  <span className="font-semibold text-sm text-navy-900">Payconiq by Bancontact</span>
                </div>
                <Smartphone className="w-6 h-6 text-navy-700" />
              </label>
            </div>
          </section>

          <button 
            type="submit" 
            disabled={isProcessing}
            className="w-full bg-navy-900 text-white px-6 py-5 text-sm uppercase tracking-widest font-bold hover:bg-terracotta-500 transition-all shadow-xl disabled:bg-navy-900/50 disabled:cursor-not-allowed flex items-center justify-center gap-3 mt-8"
          >
            {isProcessing ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Bestelling verwerken...
              </>
            ) : (
              `Nu Veilige Betalen (€${total.toFixed(2)})`
            )}
          </button>
        </form>
      </div>

      {/* Right Column: Order Summary */}
      <div className="lg:col-span-5 xl:col-span-4 mt-8 lg:mt-0">
        <div className="bg-rustic-50 border border-rustic-800/10 p-6 sticky top-32">
          <h2 className="text-xl font-display font-semibold text-navy-900 mb-6 border-b border-rustic-800/10 pb-4">Overzicht van je Bestelling</h2>
          
          <ul className="space-y-4 mb-6">
            {cartItems.map((item) => (
              <li key={item.cartItemId} className="flex gap-4">
                <div className="relative h-16 w-16 border border-rustic-800/10 bg-white shrink-0">
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                  <span className="absolute -top-2 -right-2 bg-navy-900 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full z-10">
                    {item.quantity}
                  </span>
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="text-sm font-semibold text-navy-900 leading-tight">{item.title}</h3>
                  {item.customization && (
                    <p className="text-[10px] text-rustic-600 mt-1 italic">"{item.customization}"</p>
                  )}
                </div>
                <div className="text-sm font-semibold text-navy-900 pt-1">
                  €{(item.price * item.quantity).toFixed(2)}
                </div>
              </li>
            ))}
          </ul>

          <div className="space-y-3 pt-6 border-t border-rustic-800/10 text-sm">
            <div className="flex justify-between text-rustic-700">
              <span>Subtotaal</span>
              <span>€{cartTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-rustic-700">
              <span>Verzending</span>
              <span>€{shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-lg font-display font-semibold text-navy-900 pt-3 border-t border-rustic-800/10">
              <span>Totaal</span>
              <span className="text-terracotta-600">€{total.toFixed(2)}</span>
            </div>
            <p className="text-[10px] text-rustic-500 text-right">Inclusief BTW</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Checkout;
