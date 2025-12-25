"use client";
import React from 'react';
import { ArrowRight, Zap, Award, TrendingUp, Truck, Shield, Headphones, Percent } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
    const features = [
        { icon: Truck, title: "Free Shipping", desc: "On orders over $50" },
        { icon: Shield, title: "Secure Payment", desc: "100% protected" },
        { icon: Headphones, title: "24/7 Support", desc: "Dedicated support" },
        { icon: Percent, title: "Best Prices", desc: "Guaranteed savings" }
      ];
  return (
    <div className="w-full bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 pb-12 pt-6">
        {/* Main Hero Banner */}
        <div className="bg-red-600 rounded-2xl overflow-hidden shadow-xl">
          <div className="grid md:grid-cols-2 gap-8 items-center p-8 md:p-12">
            {/* Left Content */}
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Zap size={16} className="text-yellow-300" />
                Limited Time Offer
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                Quality Printers & Ink at Unbeatable Prices
              </h1>
              
              <p className="text-lg text-white/90 mb-6">
                Shop premium printing solutions with up to 40% off. Free shipping on orders over $50.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Link 
                href="/shop"
                className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2">
                  Shop Now
                  <ArrowRight size={18} />
                </Link>
                <button className="border-2 cursor-pointer border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  View Deals
                </button>
              </div>
            </div>

            {/* Right Image/Visual */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <TrendingUp className="text-yellow-300 mb-3" size={32} />
                  <h3 className="text-white font-bold text-lg mb-1">40% Off</h3>
                  <p className="text-white/80 text-sm">On all printers</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <Award className="text-green-300 mb-3" size={32} />
                  <h3 className="text-white font-bold text-lg mb-1">Top Quality</h3>
                  <p className="text-white/80 text-sm">Genuine products</p>
                </div>
                <div className="col-span-2 bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-bold text-xl mb-1">Free Shipping</h3>
                      <p className="text-white/80">On orders above $50</p>
                    </div>
                    <div className="text-4xl">🚚</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Feature Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white flex gap-2 rounded-lg p-4 shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow">
                <div className="bg-red-100 text-red-600 p-3 rounded-lg">
                  <feature.icon size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

        {/* Mini Promo Banner */}
        <div className="mt-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white">
            <h3 className="text-xl font-bold mb-1">🔥 Flash Sale Alert!</h3>
            <p className="text-white/90">Get 30% off on all ink cartridges. Ends in 24 hours!</p>
          </div>
          <button className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap">
            Grab Deal Now
          </button>
        </div>
      </div>
    </div>
  );
}