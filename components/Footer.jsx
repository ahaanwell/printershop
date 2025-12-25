import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Send } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const footerLinks = {
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Contact Us', href: '#' },
      { name: 'Careers', href: '#' }
    ],
    shop: [
      { name: 'Printers', href: '#' },
      { name: 'Ink & Toner', href: '#' },
      { name: 'Accessories', href: '#' }
    ],
    support: [
      { name: 'Terms and Conditions', href: '/terms-and-conditions' },
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Refund Policy', href: '/refund-policy' }
    ]
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Newsletter Section */}
      <div className="bg-red-600">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-white text-center md:text-left">
              <h3 className="text-lg font-bold mb-1">Subscribe to Our Newsletter</h3>
              <p className="text-sm text-red-100">Get exclusive deals and printing tips!</p>
            </div>
            <div className="w-full md:w-auto">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 md:w-64 px-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-300"
                />
                <button className="bg-gray-900 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center gap-1 text-sm">
                  <Send size={16} />
                  <span className="hidden sm:inline">Subscribe</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-8">
          {/* Company Info */}
          <div className="col-span-2">
            {/* <h3 className="text-xl font-bold text-white mb-3">
              M2N<span className="text-red-500">Digital</span>
            </h3> */}
            <Link
            href="/"
            >
            <img 
              className='w-24'
              src='/logo.png'
            />
            </Link>

            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Your trusted partner for all printing needs.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-red-500 flex-shrink-0" />
                <span className="text-xs">+1 (234) 567-890</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-red-500 flex-shrink-0" />
                <span className="text-xs">info@m2ndigital.online</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-xs hover:text-red-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Shop</h4>
            <ul className="space-y-2">
              {footerLinks.shop.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-xs hover:text-red-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Links</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-xs hover:text-red-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Trust Badges */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Social Media */}
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                <Linkedin size={16} />
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-400">
              <span>🔒 Secure</span>
              <span>✓ Authentic</span>
              <span>🚚 Free Ship $50+</span>
              <span>↺ 30-Day Returns</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-6 pt-6 text-center text-xs text-gray-400">
          <p>© 2024 M2NDigital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}