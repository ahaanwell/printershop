"use client";
/*eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { Star, ShoppingCart, Heart, Truck, Shield, RotateCcw, Check } from 'lucide-react';
import { products } from '@/constants/productdatas';
import MainLayout from '@/components/MainLayout';
import { useParams } from 'next/navigation';
import { useCart } from '@/context/CartContext';

export default function ProductDetailsPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [selectedProductId, setSelectedProductId] = useState(1);
  const { addToCart } = useCart();
//   const { sku } = params;
const { sku } = useParams();
  console.log("SKU from params:", sku);
  // Get current product
const product = products.find((p) => p.sku === sku);
  // Get related products (exclude current product)
  const relatedProducts = products
    .filter(p => p.id !== selectedProductId && p.category === product.category)
    .slice(0, 4);



  return (
    <MainLayout>
        <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center text-sm text-gray-600">
            <span className="hover:text-blue-600 cursor-pointer">Home</span>
            <span className="mx-2">/</span>
            <span className="hover:text-blue-600 cursor-pointer">Printers</span>
            <span className="mx-2">/</span>
            <span className="hover:text-blue-600 cursor-pointer">Laser Printers</span>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Image Gallery */}
          <div>
            <div className="bg-white rounded-lg p-4 mb-4">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-96 object-contain"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((img, idx) => (
                <div 
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`bg-white rounded-lg p-2 cursor-pointer border-2 ${
                    selectedImage === idx ? 'border-blue-600' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt={`View ${idx + 1}`} className="w-full h-20 object-contain" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="bg-white rounded-lg p-6">
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <span className="font-medium text-blue-600">{product.brand}</span>
                <span>•</span>
                <span>SKU: {product.sku}</span>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                  <span className="ml-2 text-gray-700 font-medium">{product.rating}</span>
                </div>
                <span className="text-gray-600">({product.reviews} reviews)</span>
              </div>

              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-4xl font-bold text-gray-900">${product.price}</span>
                <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
                <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                  Save {Math.round((1 - product.price / product.originalPrice) * 100)}%
                </span>
              </div>

              <div className={`flex items-center gap-2 mb-6 ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                <Check className="w-5 h-5" />
                <span className="font-medium">{product.inStock ? 'In Stock' : 'Out of Stock'}</span>
              </div>

              {/* Quantity Selector */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Quantity:</label>
                <div className="flex items-center gap-3">
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-2 hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span className="px-6 py-2 border-x border-gray-300">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-2 hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mb-6">
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
                className="flex-1 bg-red-600 text-white cursor-pointer py-3 px-6 rounded-lg font-medium hover:bg-red-700 flex items-center justify-center gap-2 transition-all">
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
                <button className="border border-gray-300 p-3 cursor-pointer rounded-lg hover:bg-gray-50 transition-all">
                  <Heart className="w-6 h-6 text-gray-600" />
                </button>
              </div>

              <button className="w-full bg-orange-500 cursor-pointer text-white py-3 px-6 rounded-lg font-medium hover:bg-orange-600 transition-all">
                Buy Now
              </button>

              {/* Features */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">Key Features:</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Delivery Info */}
              <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
                <div className="flex items-center gap-3 text-gray-700">
                  <Truck className="w-5 h-5 text-blue-600" />
                  <span>Free shipping on orders over $50</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Shield className="w-5 h-5 text-blue-600" />
                  <span>2-year manufacturer warranty</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <RotateCcw className="w-5 h-5 text-blue-600" />
                  <span>30-day return policy</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="bg-white rounded-lg mb-12">
          <div className="border-b border-gray-200">
            <div className="flex gap-8 px-6">
              {['description', 'specifications', 'reviews'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 font-medium capitalize ${
                    activeTab === tab
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="p-6">
            {activeTab === 'description' && (
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  {product.description}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This product combines cutting-edge technology with user-friendly features to deliver exceptional performance. 
                  Whether you're printing important documents, scanning receipts, or creating vibrant color prints, this device 
                  handles it all with ease and efficiency.
                </p>
              </div>
            )}

            {activeTab === 'specifications' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="flex py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900 w-1/2">{key}:</span>
                    <span className="text-gray-700 w-1/2">{value}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-6">
                {[1, 2, 3].map((review) => (
                  <div key={review} className="border-b border-gray-200 pb-6 last:border-0">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="font-medium text-gray-900">John Doe</span>
                      <span className="text-gray-500 text-sm">2 weeks ago</span>
                    </div>
                    <h4 className="font-medium text-gray-900 mb-2">Excellent printer for office use</h4>
                    <p className="text-gray-700">
                      This printer has exceeded my expectations. Print quality is sharp, setup was easy, and it handles our daily 
                      printing needs without any issues. Highly recommend for small businesses!
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((item) => (
              <div 
                key={item.id} 
                className="bg-white rounded-lg p-4 hover:shadow-lg transition-shadow border border-gray-100"
              >
                <img src={item.images[0]} alt={item.name} className="w-full h-48 object-contain mb-4" />
                <h3 className="font-medium text-gray-900 mb-2">{item.name}</h3>
                <p className="text-xl font-bold text-red-600">${item.price}</p>
                <div className="flex gap-2 mt-3">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleProductChange(item.id);
                    }}
                    className="flex-1 bg-red-600 text-white py-2 rounded-lg text-sm hover:bg-red-700 transition-all"
                  >
                    View Details
                  </button>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      alert(`Added ${item.name} to cart!`);
                    }}
                    className="px-3 bg-white border-2 border-red-600 text-red-600 py-2 rounded-lg hover:bg-red-50 transition-all"
                  >
                    <ShoppingCart className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </MainLayout>
  );
}