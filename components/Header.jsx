"use client";
import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X, Phone, Tag } from 'lucide-react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { cart } = useCart();

  const menuItems = [
    {
      name: 'PRINTERS',
      items: [
        { name: 'Inkjet Printers', href: '#' },
        { name: 'Laser Printers', href: '#' },
        { name: 'All-in-One', href: '#' },
        { name: 'Photo Printers', href: '#' }
      ]
    },
    {
      name: 'INK & TONER',
      items: [
        { name: 'Ink Cartridges', href: '#' },
        { name: 'Toner Cartridges', href: '#' },
        { name: 'Ink Bottles', href: '#' },
        { name: 'Compatible Ink', href: '#' }
      ]
    },
    {
      name: 'PAPER',
      items: [
        { name: 'Copy Paper', href: '#' },
        { name: 'Photo Paper', href: '#' },
        { name: 'Cardstock', href: '#' },
        { name: 'Specialty Paper', href: '#' }
      ]
    },
    {
      name: 'ACCESSORIES',
      items: [
        { name: 'Printer Cables', href: '#' },
        { name: 'Print Heads', href: '#' },
        { name: 'Maintenance Kits', href: '#' },
        { name: 'Printer Stands', href: '#' }
      ]
    },
    {
      name: 'SOFTWARE',
      items: [
        { name: 'Antivirus & Security', href: '#' },
        { name: 'Graphics & Publishing', href: '#' },
        { name: 'Mac Software', href: '#' },
        { name: 'Office Software', href: '#' },
        { name: 'Operating Software', href: '#' }
      ]
    }
  ];

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      {/* Top Promo Bar */}
      <div className="bg-red-600 text-white text-xs py-2">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-6">
          <span className="flex items-center gap-1">
            <Tag size={12} />
            40% OFF on All Printers
          </span>
          <span className="hidden sm:inline">•</span>
          <span className="hidden sm:inline">Free Shipping Over $50</span>
        </div>
      </div>

      {/* Main Header */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <Link href="/" className="text-xl font-bold text-red-600 flex-shrink-0">
              <img 
              className='w-24'
              src='/logo.png'/>
            </Link>
            {/* M2N<span className="text-gray-800">Digital</span> */}

            {/* Desktop Search */}
            <div className="hidden md:flex flex-1 max-w-xl mx-4">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-full focus:outline-none focus:border-red-500 text-sm"
                />
                <button className="absolute cursor-pointer right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-600">
                  <Search size={18} />
                </button>
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              {/* Mobile Search Toggle */}
              <button 
                className="md:hidden p-2 cursor-pointer hover:bg-gray-100 rounded-full"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                <Search size={20} />
              </button>

              {/* Contact */}
              <a href="tel:+1234567890" className="hidden lg:flex items-center gap-2 text-sm hover:text-red-600">
                <Phone size={16} />
                <span className="font-medium">+1 234-567-890</span>
              </a>

              {/* Account */}
              <button className="hidden md:flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-lg text-sm">
                <User size={18} />
                <span>Account</span>
              </button>

              {/* Cart */}
              <Link 
              href="/cart"
              className="relative p-2 hover:bg-gray-100 rounded-full">
                <ShoppingCart size={20} />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {cart.length}
                </span>
              </Link>

              {/* Mobile Menu Toggle */}
              <button 
                className="md:hidden cursor-pointer p-2 hover:bg-gray-100 rounded-full"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Search Bar */}
          {isSearchOpen && (
            <div className="md:hidden mt-3">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-full focus:outline-none focus:border-red-500 text-sm"
                />
                <button className="absolute cursor-pointer right-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <Search size={18} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center justify-center gap-8 py-2 text-sm">
            {menuItems.map((menu, index) => (
              <li 
                key={index}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(index)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="font-medium cursor-pointer text-gray-700 hover:text-red-600 transition-colors flex items-center gap-1">
                  {menu.name}
                  <svg 
                    className={`w-4 h-4 transition-transform ${activeDropdown === index ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Dropdown Menu */}
                {activeDropdown === index && (
                  <div className="absolute top-full left-0 mt-1 bg-white shadow-xl rounded py-2 w-48 border border-gray-100 z-50">
                    {menu.items.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-2">
              {menuItems.map((menu, index) => (
                <div key={index} className="border-b border-gray-200">
                  <button
                    className="w-full flex items-center cursor-pointer justify-between py-2 font-medium text-gray-700"
                    onClick={() => setActiveDropdown(activeDropdown === index ? null : index)}
                  >
                    {menu.name}
                    <svg 
                      className={`w-4 h-4 transition-transform ${activeDropdown === index ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {activeDropdown === index && (
                    <div className="pl-4 pb-3 space-y-1">
                      {menu.items.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.href}
                          className="block py-2 text-sm text-gray-600 hover:text-red-600"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 mt-4 border-t border-gray-300">
                <Link href="#" className="flex items-center gap-2 py-2 text-gray-700">
                  <User size={18} />
                  My Account
                </Link>
                <a href="tel:+1234567890" className="flex items-center gap-2 py-2 text-gray-700">
                  <Phone size={18} />
                  +1 234-567-890
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}