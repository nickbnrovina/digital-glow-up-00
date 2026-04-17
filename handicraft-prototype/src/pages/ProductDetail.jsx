import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { ChevronLeft, Info, Paintbrush, Truck, ShoppingBag } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === id);
  
  const [quantity, setQuantity] = useState(1);
  const [customizationText, setCustomizationText] = useState('');

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h2 className="text-2xl font-display text-navy-900 mb-4">Product niet gevonden</h2>
        <Link to="/shop" className="text-terracotta-500 hover:underline">Terug naar de shop</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity, customizationText || null);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 sm:py-12 w-full">
      <Link to="/shop" className="inline-flex items-center text-xs uppercase tracking-widest font-semibold text-rustic-500 hover:text-navy-900 mb-8 transition-colors">
        <ChevronLeft className="w-4 h-4 mr-1" /> Terug naar overzicht
      </Link>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
        
        {/* Product Image */}
        <div className="aspect-[4/5] bg-rustic-200 border border-rustic-800/10 overflow-hidden">
          <img 
            src={product.image} 
            alt={product.title} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <p className="text-xs uppercase tracking-widest text-terracotta-500 font-semibold mb-3">
            {product.category}
          </p>
          <h1 className="text-4xl lg:text-5xl font-script text-navy-900 mb-4 leading-tight">
            {product.title}
          </h1>
          <p className="text-2xl font-sans font-semibold text-navy-900 mb-6">
            €{product.price.toFixed(2)}
          </p>

          <div className="prose prose-sm text-rustic-800 mb-8 font-sans leading-relaxed">
            <p>{product.description}</p>
            <p className="mt-4">{product.longDescription}</p>
          </div>

          <div className="border-t border-rustic-800/10 py-6 space-y-6">
            
            {product.customizable && (
              <div className="space-y-3">
                <label htmlFor="customization" className="block text-xs uppercase tracking-widest font-semibold text-navy-900 flex items-center gap-2">
                  <Paintbrush className="w-4 h-4 text-terracotta-500" />
                  Gepersonaliseerde tekst
                </label>
                <input
                  id="customization"
                  type="text"
                  placeholder="Bv. Naam of datum..."
                  value={customizationText}
                  onChange={(e) => setCustomizationText(e.target.value)}
                  className="w-full border-b-2 border-rustic-800/20 bg-transparent py-3 text-navy-900 placeholder:text-rustic-400 focus:outline-none focus:border-terracotta-500 transition-colors font-sans"
                />
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center border border-rustic-800/20 bg-white h-14">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 text-navy-800 hover:text-terracotta-500 h-full"
                >
                  -
                </button>
                <span className="px-4 text-sm font-semibold text-navy-900 min-w-[3rem] text-center">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 text-navy-800 hover:text-terracotta-500 h-full"
                >
                  +
                </button>
              </div>

              <button 
                onClick={handleAddToCart}
                className="flex-1 bg-navy-900 text-white px-8 h-14 text-sm uppercase tracking-widest font-medium hover:bg-terracotta-500 transition-colors duration-300 flex items-center justify-center gap-3 shadow-lg"
              >
                <ShoppingBag className="w-5 h-5" />
                Voeg toe
              </button>
            </div>
          </div>

          {/* Accordion style info */}
          <div className="mt-8 pt-8 border-t border-rustic-800/10 space-y-4">
            <div className="flex items-start gap-4">
              <Truck className="w-5 h-5 text-rustic-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-navy-900">Levering & Retour</h4>
                <p className="text-xs text-rustic-600 mt-1">Omdat dit product met de hand wordt afgewerkt, rekenen we op een levertijd van 3-5 werkdagen. Gepersonaliseerde producten kunnen niet geretourneerd worden.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 pt-4">
              <Info className="w-5 h-5 text-rustic-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-navy-900">Ambachtelijke Kwaliteit</h4>
                <p className="text-xs text-rustic-600 mt-1">Hout is een natuurlijk product. De kleur en nerven kunnen licht afwijken van de foto, wat elk stuk uniek maakt.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
