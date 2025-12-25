"use client";
import MainLayout from "@/components/MainLayout";
import { products } from "@/constants/productdatas";
import { useCart } from "@/context/CartContext";
import { Eye, Heart, ShoppingCart, Star } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
function ShopPage(){
    const [wishlist, setWishlist] = useState([]);
      const [activeTab, setActiveTab] = useState('all');
      const { addToCart } = useCart();
    
      const toggleWishlist = (productId) => {
        setWishlist(prev => 
          prev.includes(productId) 
            ? prev.filter(id => id !== productId)
            : [...prev, productId]
        );
      };
    return (
        <MainLayout>
            <div className="w-full bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="w-full md:w-[90%] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Shop Our Best Deals
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover premium printers and genuine ink cartridges at unbeatable prices
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-3 mb-8 flex-wrap">
          <button 
            onClick={() => setActiveTab('all')}
            className={`px-5 py-2 cursor-pointer rounded-full font-medium text-sm transition-all ${
              activeTab === 'all' 
                ? 'bg-red-600 text-white shadow-lg' 
                : 'bg-white text-gray-700 border border-gray-300 hover:border-red-400'
            }`}
          >
            All Products
          </button>
          <button 
            onClick={() => setActiveTab('printer')}
            className={`px-5 py-2 cursor-pointer rounded-full font-medium text-sm transition-all ${
              activeTab === 'printer' 
                ? 'bg-red-600 text-white shadow-lg' 
                : 'bg-white text-gray-700 border border-gray-300 hover:border-red-400'
            }`}
          >
            Printers
          </button>
          <button 
            onClick={() => setActiveTab('ink')}
            className={`px-5 py-2 cursor-pointer rounded-full font-medium text-sm transition-all ${
              activeTab === 'ink' 
                ? 'bg-red-600 text-white shadow-lg' 
                : 'bg-white text-gray-700 border border-gray-300 hover:border-red-400'
            }`}
          >
            Ink & Toner
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {products
            .filter(p => activeTab === 'all' || p.category === activeTab)
            .map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Discount Badge */}
                {product.discount && (
                  <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                    {product.discount}% OFF
                  </div>
                )}

                {/* Wishlist Button */}
                <button 
                  onClick={() => toggleWishlist(product.id)}
                  className={`absolute cursor-pointer top-3 right-3 p-2 rounded-full shadow-lg transition-all ${
                    wishlist.includes(product.id) 
                      ? 'bg-red-500 text-white scale-110' 
                      : 'bg-white text-gray-600 hover:scale-110'
                  }`}
                >
                  <Heart size={16} fill={wishlist.includes(product.id) ? 'currentColor' : 'none'} />
                </button>
              </div>

              {/* Product Info */}
              <div className="p-4">
                {/* Badge */}
                <span className="inline-block text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded mb-2">
                  {product.badge}
                </span>

                {/* Product Name */}
                <h3 className="text-sm font-bold text-gray-900 mb-2 line-clamp-2 min-h-[40px]">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={12}
                        className={i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500">({product.reviews})</span>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-xl font-bold text-gray-900">${product.price}</span>
                  <span className="text-xs text-gray-400 line-through">${product.originalPrice}</span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  {/* Add to Cart Button */}
                  <Link 
                    href={`/product/${product.sku}`}
                    className="flex-1 cursor-pointer bg-red-600 text-white py-2.5 rounded-xl font-medium hover:bg-red-700 transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                  >
                    <Eye size={16} />
                    <span className="text-sm">View Details</span>
                  </Link>

                  {/* View Details Button */}
                  <button 
                  onClick={() =>
                      addToCart({
                        id: product.id,
                        title: product.name,
                        price: product.originalPrice,
                        image: product.images[0],
                        quantity: 1,
                      })
                    }
                    className="px-3 py-2.5 cursor-pointer bg-white border-2 border-red-600 text-red-600 rounded-xl hover:bg-red-50 transition-all flex items-center justify-center shadow-md hover:shadow-lg"
                  >
                    <ShoppingCart size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
        </MainLayout>
    )
}

export default ShopPage;