import React from 'react';
import { Truck, Lock, Headphones, Award, Zap, Shield } from 'lucide-react';

export default function WhyShopWithUs() {
  const features = [
    {
      icon: Truck,
      title: "Fast & Free Delivery",
      description: "Get your orders delivered quickly, with free shipping on qualifying purchases.",
      color: "text-red-600",
      bgColor: "bg-red-50"
    },
    {
      icon: Lock,
      title: "Hassle-Free Payments",
      description: "Pay securely with multiple trusted options designed for convenience.",
      color: "text-red-600",
      bgColor: "bg-red-50"
    },
    {
      icon: Headphones,
      title: "Always Here to Help",
      description: "Our dedicated team ensures a smooth shopping experience and provides support whenever you need it.",
      color: "text-red-600",
      bgColor: "bg-red-50"
    }
  ];

  return (
    <div className="w-full bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Shop With Us?
          </h2>
          <p className="text-lg text-gray-600">
            Your trusted partner for printers, inks, and accessories.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-shadow duration-300 text-center"
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-20 h-20 ${feature.bgColor} rounded-2xl mb-6`}>
                <feature.icon size={40} className={feature.color} strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-red-600">50K+</div>
              <div className="text-sm text-gray-600">Happy Customers</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-red-600">500+</div>
              <div className="text-sm text-gray-600">Products Available</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-red-600">24/7</div>
              <div className="text-sm text-gray-600">Customer Support</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-red-600">98%</div>
              <div className="text-sm text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}