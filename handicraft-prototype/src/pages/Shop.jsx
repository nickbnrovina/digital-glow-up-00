import React, { useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { ShoppingBag } from 'lucide-react';

const Shop = () => {
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get('cat');
  const { addToCart } = useCart();

  const filteredProducts = useMemo(() => {
    if (!categoryFilter) return products;
    return products.filter(p => p.category.toLowerCase() === categoryFilter.toLowerCase());
  }, [categoryFilter]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 w-full">
      
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-script text-navy-900 mb-4">
          {categoryFilter ? `Collectie: ${categoryFilter.charAt(0).toUpperCase() + categoryFilter.slice(1)}` : 'Alle Collecties'}
        </h1>
        <p className="text-sm font-sans text-rustic-700 max-w-2xl">
          Ontdek onze met hand gemaakte producten. Elk stuk is uniek en met liefde voor het vak samengesteld.
        </p>

        {/* Filter Badges */}
        <div className="flex flex-wrap gap-3 mt-6">
          <Link 
            to="/shop" 
            className={`px-4 py-2 text-xs uppercase tracking-widest font-semibold border ${!categoryFilter ? 'bg-navy-900 text-white border-navy-900' : 'bg-transparent text-navy-900 border-navy-900/20 hover:border-navy-900'}`}
          >
            Alles
          </Link>
          <Link 
            to="/shop?cat=doopsuiker" 
            className={`px-4 py-2 text-xs uppercase tracking-widest font-semibold border ${categoryFilter === 'doopsuiker' ? 'bg-navy-900 text-white border-navy-900' : 'bg-transparent text-navy-900 border-navy-900/20 hover:border-navy-900'}`}
          >
            Doopsuiker
          </Link>
          <Link 
            to="/shop?cat=houtwerk" 
            className={`px-4 py-2 text-xs uppercase tracking-widest font-semibold border ${categoryFilter === 'houtwerk' ? 'bg-navy-900 text-white border-navy-900' : 'bg-transparent text-navy-900 border-navy-900/20 hover:border-navy-900'}`}
          >
            Houtwerk
          </Link>
          <Link 
            to="/shop?cat=huwelijk" 
            className={`px-4 py-2 text-xs uppercase tracking-widest font-semibold border ${categoryFilter === 'huwelijk' ? 'bg-navy-900 text-white border-navy-900' : 'bg-transparent text-navy-900 border-navy-900/20 hover:border-navy-900'}`}
          >
            Huwelijk
          </Link>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredProducts.map(product => (
          <div key={product.id} className="group flex flex-col">
            <Link to={`/shop/${product.id}`} className="block relative aspect-square overflow-hidden mb-4 border border-rustic-800/10">
              <div className="absolute inset-0 bg-navy-900/10 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </Link>
            
            <div className="flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-2">
                <Link to={`/shop/${product.id}`}>
                  <h3 className="font-display font-semibold text-xl text-navy-900 group-hover:text-terracotta-500 transition-colors">
                    {product.title}
                  </h3>
                </Link>
                <span className="font-semibold text-lg text-terracotta-600 ml-4 shrink-0">
                  €{product.price.toFixed(2)}
                </span>
              </div>
              <p className="text-xs uppercase tracking-widest text-rustic-500 mb-4">{product.category}</p>
              
              <div className="mt-auto pt-4">
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    addToCart(product);
                  }}
                  className="w-full border border-navy-900 text-navy-900 py-3 text-xs uppercase tracking-widest font-semibold hover:bg-navy-900 hover:text-white transition-colors flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  In Winkelmand
                </button>
              </div>
            </div>
          </div>
        ))}
        
        {filteredProducts.length === 0 && (
          <div className="col-span-full text-center py-24 text-rustic-500">
            Geen producten gevonden in deze categorie.
          </div>
        )}
      </div>
      
    </div>
  );
};

export default Shop;
