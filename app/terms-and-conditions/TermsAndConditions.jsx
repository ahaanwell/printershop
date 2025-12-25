import React from 'react';
import { Mail, FileText } from 'lucide-react';
import MainLayout from '@/components/MainLayout';

export default function TermsAndConditions() {
  return (
    <MainLayout>
        <div className="w-full bg-gray-50">
      {/* Hero Section */}
      <div className="bg-red-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
            <FileText size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-lg text-white/90">
            Please read these terms carefully before using our services
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          {/* Introduction */}
          <div className="mb-8">
            <p className="text-gray-700 leading-relaxed">
              Welcome to <strong>M2N Digital</strong>. By accessing or using our website at{' '}
              <a href="https://m2ndigital.online" className="text-red-600 hover:underline">
                m2ndigital.online
              </a>
              , you agree to comply with the following terms and conditions. Please read them carefully before making a purchase.
            </p>
          </div>
          {/* Section 1 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold">
                1
              </span>
              Use of Website
            </h2>
            <ul className="space-y-2 ml-10">
              <li className="text-gray-700 leading-relaxed flex gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span>You agree to use our website for lawful purposes only.</span>
              </li>
              <li className="text-gray-700 leading-relaxed flex gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span>You must not attempt to access, interfere with, or misuse any part of the website or its services.</span>
              </li>
              <li className="text-gray-700 leading-relaxed flex gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span>Unauthorized use may result in suspension or legal action.</span>
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold">
                2
              </span>
              Products and Pricing
            </h2>
            <ul className="space-y-2 ml-10">
              <li className="text-gray-700 leading-relaxed flex gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span>All products and prices are listed in USD.</span>
              </li>
              <li className="text-gray-700 leading-relaxed flex gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span>Product descriptions and availability are provided in good faith but may contain errors.</span>
              </li>
              <li className="text-gray-700 leading-relaxed flex gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span>Prices and promotions may change at any time without prior notice.</span>
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold">
                3
              </span>
              Orders and Payment
            </h2>
            <ul className="space-y-2 ml-10">
              <li className="text-gray-700 leading-relaxed flex gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span>Orders are confirmed only after successful payment.</span>
              </li>
              <li className="text-gray-700 leading-relaxed flex gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span>We accept credit/debit cards, PayPal, and other secure payment methods.</span>
              </li>
              <li className="text-gray-700 leading-relaxed flex gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span>M2N Digital reserves the right to cancel orders if fraud or suspicious activity is detected.</span>
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold">
                4
              </span>
              Shipping and Delivery
            </h2>
            <ul className="space-y-2 ml-10">
              <li className="text-gray-700 leading-relaxed flex gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span>We ship across the United States using standard and express delivery options.</span>
              </li>
              <li className="text-gray-700 leading-relaxed flex gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span>Delivery times are estimated and may vary due to factors beyond our control.</span>
              </li>
              <li className="text-gray-700 leading-relaxed flex gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span>Customers are responsible for providing accurate shipping information.</span>
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold">
                5
              </span>
              Returns and Refunds
            </h2>
            <p className="text-gray-700 leading-relaxed ml-10">
              Please review our{' '}
              <a href="/refund-policy" className="text-red-600 hover:underline font-semibold">
                Refund Policy
              </a>{' '}
              for details regarding returns, refunds, and exchanges.
            </p>
          </section>

          {/* Section 6 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold">
                6
              </span>
              Intellectual Property
            </h2>
            <ul className="space-y-2 ml-10">
              <li className="text-gray-700 leading-relaxed flex gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span>All content on the website, including text, images, logos, and designs, is the property of M2N Digital or its licensors.</span>
              </li>
              <li className="text-gray-700 leading-relaxed flex gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span>You may not copy, reproduce, or use any content without prior written permission.</span>
              </li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold">
                7
              </span>
              Limitation of Liability
            </h2>
            <ul className="space-y-2 ml-10">
              <li className="text-gray-700 leading-relaxed flex gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span>M2N Digital is not liable for indirect, incidental, or consequential damages arising from the use of our website or products.</span>
              </li>
              <li className="text-gray-700 leading-relaxed flex gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span>We do not guarantee uninterrupted or error-free access to the website.</span>
              </li>
            </ul>
          </section>

          {/* Section 8 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold">
                8
              </span>
              Privacy
            </h2>
            <p className="text-gray-700 leading-relaxed ml-10">
              Your personal information is handled according to our{' '}
              <a href="/privacy-policy" className="text-red-600 hover:underline font-semibold">
                Privacy Policy
              </a>
              , which is incorporated by reference.
            </p>
          </section>

          {/* Section 9 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold">
                9
              </span>
              Governing Law
            </h2>
            <ul className="space-y-2 ml-10">
              <li className="text-gray-700 leading-relaxed flex gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span>These terms are governed by the laws of the United States, specifically the State of California.</span>
              </li>
              <li className="text-gray-700 leading-relaxed flex gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span>Any disputes arising from these terms will be resolved in the courts located in California.</span>
              </li>
            </ul>
          </section>

          {/* Section 10 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold">
                10
              </span>
              Changes to Terms
            </h2>
            <ul className="space-y-2 ml-10">
              <li className="text-gray-700 leading-relaxed flex gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span>We may update these terms at any time without prior notice.</span>
              </li>
              <li className="text-gray-700 leading-relaxed flex gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span>Continued use of our website after changes constitutes acceptance of the updated terms.</span>
              </li>
            </ul>
          </section>

          {/* Contact Section */}
          <div className="mt-12 bg-gradient-to-r from-red-50 to-purple-50 rounded-xl p-6 border border-red-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">📩 Contact Us</h3>
                <p className="text-gray-700 mb-2">
                  For questions about these Terms & Conditions, email us at:
                </p>
                <a 
                  href="mailto:support@m2ndigital.online" 
                  className="text-red-600 hover:underline font-semibold"
                >
                  support@m2ndigital.online
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Last Updated */}
        <div className="text-center mt-8 text-sm text-gray-500">
          Last updated: December 2024
        </div>
      </div>
    </div>
    </MainLayout>
  );
}