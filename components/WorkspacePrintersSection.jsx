import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function WorkspacePrintersSection() {
  return (
    <div className="w-full pb-4">
      <div className="w-[90%] mx-auto px-4 py-4 rounded-2xl border border-gray-200 shadow-sm bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-4">
            <div>
              <span className="inline-block bg-red-500 text-white px-3 py-1.5 rounded-lg font-semibold text-xs">
                Exclusive Deal
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Smart Printers
              <br />
              <span className="text-red-600">for Modern Workspaces</span>
            </h2>
            
            <p className="text-base text-gray-600 leading-relaxed">
              Upgrade your printing experience today. Limited stock available — grab yours now!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button className="bg-red-600 text-white px-6 py-2.5 cursor-pointer rounded-lg font-semibold hover:bg-red-700 transition-colors inline-flex items-center justify-center gap-2 shadow-lg shadow-blue-200 text-sm">
                Shop Now
                <ArrowRight size={16} />
              </button>
              
              <button className="border-2 border-gray-300 cursor-pointer text-gray-700 px-6 py-2.5 rounded-lg font-semibold hover:border-red-500 hover:red-blue-600 transition-colors text-sm">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative h-56 md:h-64">
            <div className="relative z-10 h-full">
              <svg viewBox="0 0 600 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                {/* Background Elements */}
                <rect x="50" y="20" width="80" height="80" fill="#E0F2FE" opacity="0.5" rx="8"/>
                <rect x="470" y="280" width="60" height="60" fill="#DBEAFE" opacity="0.5" rx="8"/>
                
                {/* Left Printer */}
                <g transform="translate(80, 150)">
                  <rect x="0" y="0" width="120" height="100" fill="#3B82F6" rx="8"/>
                  <rect x="10" y="10" width="100" height="60" fill="#60A5FA" rx="4"/>
                  <rect x="20" y="20" width="30" height="8" fill="#DBEAFE" rx="2"/>
                  <rect x="20" y="32" width="30" height="8" fill="#DBEAFE" rx="2"/>
                  <rect x="20" y="44" width="30" height="8" fill="#DBEAFE" rx="2"/>
                  <circle cx="85" cy="40" r="15" fill="#1E40AF"/>
                  <rect x="0" y="100" width="120" height="20" fill="#1E40AF" rx="4"/>
                </g>

                {/* Center Person Standing */}
                <g transform="translate(250, 100)">
                  <ellipse cx="25" cy="15" rx="15" ry="18" fill="#F59E0B"/>
                  <rect x="15" y="30" width="20" height="40" fill="#10B981" rx="10"/>
                  <rect x="8" y="35" width="12" height="35" fill="#059669" rx="6"/>
                  <rect x="32" y="35" width="12" height="35" fill="#059669" rx="6"/>
                  <rect x="18" y="70" width="7" height="30" fill="#1F2937" rx="3"/>
                  <rect x="27" y="70" width="7" height="30" fill="#1F2937" rx="3"/>
                  {/* Plant pot */}
                  <rect x="35" y="25" width="15" height="20" fill="#92400E" rx="2"/>
                  <path d="M 37 20 Q 42 10 47 20" fill="#10B981"/>
                  <path d="M 40 18 Q 42 8 44 18" fill="#34D399"/>
                </g>

                {/* Person Sitting Left */}
                <g transform="translate(140, 180)">
                  <ellipse cx="20" cy="10" rx="12" ry="15" fill="#EC4899"/>
                  <rect x="12" y="22" width="16" height="25" fill="#8B5CF6" rx="8"/>
                  <rect x="10" y="47" width="20" height="15" fill="#7C3AED" rx="5"/>
                  <rect x="8" y="27" width="10" height="25" fill="#6D28D9" rx="5"/>
                  <rect x="24" y="27" width="10" height="25" fill="#6D28D9" rx="5"/>
                </g>

                {/* Desk/Table for sitting person */}
                <rect x="120" y="210" width="80" height="8" fill="#9CA3AF" rx="4"/>

                {/* Person Sitting Right */}
                <g transform="translate(380, 180)">
                  <ellipse cx="20" cy="10" rx="12" ry="15" fill="#F97316"/>
                  <rect x="12" y="22" width="16" height="25" fill="#14B8A6" rx="8"/>
                  <rect x="10" y="47" width="20" height="15" fill="#0D9488" rx="5"/>
                  <rect x="8" y="27" width="10" height="25" fill="#0F766E" rx="5"/>
                  <rect x="24" y="27" width="10" height="25" fill="#0F766E" rx="5"/>
                </g>

                {/* Desk for right person */}
                <rect x="360" y="210" width="80" height="8" fill="#9CA3AF" rx="4"/>

                {/* Right Printer */}
                <g transform="translate(450, 150)">
                  <rect x="0" y="0" width="100" height="90" fill="#6366F1" rx="8"/>
                  <rect x="10" y="10" width="80" height="50" fill="#818CF8" rx="4"/>
                  <rect x="15" y="15" width="25" height="6" fill="#E0E7FF" rx="2"/>
                  <rect x="15" y="25" width="25" height="6" fill="#E0E7FF" rx="2"/>
                  <rect x="15" y="35" width="25" height="6" fill="#E0E7FF" rx="2"/>
                  <circle cx="70" cy="35" r="12" fill="#4338CA"/>
                  <rect x="0" y="90" width="100" height="18" fill="#4338CA" rx="4"/>
                </g>

                {/* Person Standing Right */}
                <g transform="translate(480, 270)">
                  <ellipse cx="20" cy="12" rx="12" ry="15" fill="#EF4444"/>
                  <rect x="12" y="25" width="16" height="35" fill="#1F2937" rx="8"/>
                  <rect x="8" y="30" width="10" height="30" fill="#374151" rx="5"/>
                  <rect x="24" y="30" width="10" height="30" fill="#374151" rx="5"/>
                  <rect x="15" y="60" width="6" height="25" fill="#0F172A" rx="3"/>
                  <rect x="21" y="60" width="6" height="25" fill="#0F172A" rx="3"/>
                </g>

                {/* Plants */}
                <g transform="translate(320, 250)">
                  <rect x="0" y="20" width="20" height="25" fill="#78350F" rx="3"/>
                  <ellipse cx="10" cy="15" rx="15" ry="20" fill="#10B981"/>
                  <ellipse cx="10" cy="12" rx="12" ry="16" fill="#34D399"/>
                </g>

                <g transform="translate(200, 270)">
                  <rect x="0" y="15" width="15" height="20" fill="#78350F" rx="2"/>
                  <ellipse cx="7" cy="10" rx="12" ry="15" fill="#059669"/>
                </g>

                {/* Decorative leaves */}
                <path d="M 50 100 Q 55 90 60 100" fill="#10B981" opacity="0.6"/>
                <path d="M 540 320 Q 545 310 550 320" fill="#34D399" opacity="0.6"/>
              </svg>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute top-10 right-10 bg-white p-4 rounded-lg shadow-lg animate-bounce">
              <div className="text-2xl font-bold text-red-600">30%</div>
              <div className="text-xs text-gray-600">OFF</div>
            </div>
            
            <div className="absolute bottom-20 left-0 bg-white p-3 rounded-lg shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">✓</div>
                <div className="text-xs text-gray-700 font-medium">Fast Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}