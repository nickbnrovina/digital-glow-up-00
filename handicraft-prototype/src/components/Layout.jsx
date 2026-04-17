import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ShoppingCart, User, Menu } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Cart from './Cart';

const Layout = () => {
  const { cartCount, setIsCartOpen } = useCart();

  return (
    <div className="min-h-screen bg-rustic-100 bg-paper-texture flex flex-col relative w-full overflow-x-hidden">
      {/* Navigation */}
      <nav className="w-full z-40 border-b border-rustic-800/10 px-6 py-4 sm:px-8 sm:py-6 mx-auto bg-rustic-50/90 backdrop-blur sticky top-0">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo brand */}
          <Link to="/" className="flex flex-col flex-shrink-0">
            <span className="font-sans text-[10px] sm:text-xs uppercase tracking-[0.3em] text-terracotta-500 font-semibold mb-1">Handicraft</span>
            <span className="font-script text-3xl sm:text-4xl leading-7 text-navy-900">Valerie.</span>
          </Link>
          
          {/* Desktop Links */}
          <div className="hidden lg:flex space-x-10 flex-grow justify-center text-xs uppercase tracking-widest font-semibold text-navy-800">
            <Link to="/shop" className="hover:text-terracotta-500 transition-colors">Shop</Link>
            <Link to="/shop?cat=doopsuiker" className="hover:text-terracotta-500 transition-colors">Doopsuiker</Link>
            <Link to="/shop?cat=houtwerk" className="hover:text-terracotta-500 transition-colors">Houtwerk</Link>
            <Link to="/shop?cat=huwelijk" className="hover:text-terracotta-500 transition-colors">Huwelijk</Link>
          </div>
          
          {/* Actions */}
          <div className="flex items-center gap-4 sm:gap-6">
            <Link to="/account" className="text-navy-900 hover:text-terracotta-500 transition-colors flex items-center gap-2 group">
              <User className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="hidden sm:block text-xs font-semibold uppercase tracking-widest group-hover:text-terracotta-500">Mijn Spaarkaart</span>
            </Link>

            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative text-navy-900 hover:text-terracotta-500 transition-colors p-2"
            >
              <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-terracotta-500 text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            <button className="lg:hidden text-navy-900 p-2">
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-grow flex flex-col min-w-0">
        <Outlet />
      </main>
      
      {/* Footer */}
      <footer className="w-full bg-navy-900 text-rustic-100 py-12 text-center mt-auto">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-script text-3xl mb-4 text-terracotta-400">Handicraft Valerie</h3>
          <p className="text-xs uppercase tracking-widest font-sans opacity-70">Lissewege • Handgemaakt met detail</p>
        </div>
      </footer>

      {/* Absolute Overlays */}
      <Cart />
    </div>
  );
};

export default Layout;
