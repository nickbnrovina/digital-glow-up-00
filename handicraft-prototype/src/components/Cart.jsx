import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { isCartOpen, setIsCartOpen, cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-navy-900/40 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />
      
      {/* Slide-over panel */}
      <div className="fixed inset-y-0 right-0 max-w-md w-full sm:w-[400px] flex">
        <div className="flex-1 w-full bg-rustic-50 shadow-2xl flex flex-col transform transition-transform border-l border-rustic-800/10">
          
          {/* Header */}
          <div className="px-6 py-6 border-b border-rustic-800/10 flex items-center justify-between">
            <h2 className="text-2xl font-display font-semibold text-navy-900 flex items-center gap-3">
              <ShoppingBag className="w-6 h-6 text-terracotta-500" />
              Winkeltas
            </h2>
            <button 
              onClick={() => setIsCartOpen(false)}
              className="text-rustic-600 hover:text-terracotta-500 transition-colors p-2"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-50">
                <ShoppingBag className="w-16 h-16 text-navy-800" />
                <p className="font-sans font-medium text-navy-900">Je mandje is nog leeg.</p>
              </div>
            ) : (
              <ul className="space-y-6">
                {cartItems.map((item) => (
                  <li key={item.cartItemId} className="flex gap-4 p-4 rustic-card">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden border border-rustic-800/10">
                      <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <div className="flex justify-between">
                        <h3 className="text-sm font-semibold font-sans text-navy-900">{item.title}</h3>
                        <p className="text-sm font-semibold text-terracotta-600">€{(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                      
                      {item.customization && (
                        <div className="mt-1 text-xs text-rustic-700 italic border-l border-terracotta-300 pl-2">
                          "{item.customization}"
                        </div>
                      )}
                      
                      <div className="mt-auto flex items-center justify-between">
                        <div className="flex items-center border border-rustic-800/20 bg-white">
                          <button 
                            onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                            className="p-1 text-navy-800 hover:text-terracotta-500"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-xs font-semibold text-navy-900">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                            className="p-1 text-navy-800 hover:text-terracotta-500"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.cartItemId)}
                          className="text-xs uppercase tracking-widest text-rustic-500 hover:text-red-500 underline"
                        >
                          Verwijder
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Footer / Checkout */}
          {cartItems.length > 0 && (
            <div className="border-t border-rustic-800/10 p-6 bg-white shrink-0">
              <div className="flex justify-between text-base font-medium text-navy-900 mb-6">
                <p>Subtotaal</p>
                <p>€{cartTotal.toFixed(2)}</p>
              </div>
              <p className="text-xs text-rustic-600 mb-4 text-center">Verzendkosten en btw berekend in volgende stap.</p>
              <button className="w-full bg-navy-900 text-white px-6 py-4 text-sm uppercase tracking-widest font-medium hover:bg-terracotta-500 transition-colors shadow-lg">
                Afrekenen
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
