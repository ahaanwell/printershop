import React from 'react';
import { RotateCcw, Mail, CheckCircle, Package, AlertTriangle, Clock } from 'lucide-react';
import MainLayout from '@/components/MainLayout';

export default function RefundPolicyPage() {
  return (
    <MainLayout>
        <div className="w-full bg-gray-50">
      {/* Hero Section */}
      <div className="bg-red-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
            <RotateCcw size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Refund Policy</h1>
          <p className="text-lg text-white/90">
            Shop with confidence. Your satisfaction is our priority.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          {/* Introduction */}
          <div className="mb-8">
            <p className="text-gray-700 leading-relaxed">
              At <strong>M2N Digital</strong>, we want you to shop with confidence. If you are not completely satisfied with your purchase, we offer a straightforward return and refund process.
            </p>
          </div>

          {/* Section 1 */}
          <section className="mb-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle size={24} className="text-orange-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  1. Eligibility for Returns
                </h2>
              </div>
            </div>
            <ul className="space-y-2 ml-16">
              <li className="text-gray-700 leading-relaxed flex gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>Returns are accepted within <strong>14 days</strong> of receiving your order.</span>
              </li>
              <li className="text-gray-700 leading-relaxed flex gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>Items must be unused, unopened, and in their original packaging.</span>
              </li>
              <li className="text-gray-700 leading-relaxed flex gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>Opened ink cartridges, partially used products, and printers that have been used cannot be returned unless they are defective.</span>
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="mb-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Package size={24} className="text-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  2. How to Initiate a Return
                </h2>
              </div>
            </div>
            <ol className="space-y-3 ml-16">
              <li className="text-gray-700 leading-relaxed flex gap-3">
                <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                <span>Email our support team at <a href="mailto:support@m2ndigital.online" className="text-blue-600 hover:underline font-semibold">support@m2ndigital.online</a> with your order ID and reason for return.</span>
              </li>
              <li className="text-gray-700 leading-relaxed flex gap-3">
                <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                <span>Our team will review your request and provide instructions for returning the item.</span>
              </li>
              <li className="text-gray-700 leading-relaxed flex gap-3">
                <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                <span>Ship the item back following the instructions provided.</span>
              </li>
            </ol>
          </section>

          {/* Section 3 */}
          <section className="mb-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock size={24} className="text-green-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  3. Refund Process
                </h2>
              </div>
            </div>
            <ul className="space-y-2 ml-16">
              <li className="text-gray-700 leading-relaxed flex gap-2">
                <span className="text-green-600 font-bold">•</span>
                <span>Once we receive and inspect the returned product, we will issue a refund to the original payment method within <strong>7–10 business days</strong>.</span>
              </li>
              <li className="text-gray-700 leading-relaxed flex gap-2">
                <span className="text-green-600 font-bold">•</span>
                <span>Shipping charges are non-refundable unless the return was due to our error.</span>
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="mb-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <RotateCcw size={24} className="text-purple-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  4. Exchanges
                </h2>
              </div>
            </div>
            <ul className="space-y-2 ml-16">
              <li className="text-gray-700 leading-relaxed flex gap-2">
                <span className="text-purple-600 font-bold">•</span>
                <span>If your item is defective, damaged, or incorrect, we will replace it at no additional cost.</span>
              </li>
              <li className="text-gray-700 leading-relaxed flex gap-2">
                <span className="text-purple-600 font-bold">•</span>
                <span>Please notify us within <strong>48 hours</strong> of receiving the order to qualify for a replacement.</span>
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="mb-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <AlertTriangle size={24} className="text-red-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  5. Damaged or Incorrect Items
                </h2>
              </div>
            </div>
            <ul className="space-y-2 ml-16">
              <li className="text-gray-700 leading-relaxed flex gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span>In the rare event that your order arrives damaged or incorrect, contact us immediately at <a href="mailto:support@m2ndigital.online" className="text-red-600 hover:underline font-semibold">support@m2ndigital.online</a>.</span>
              </li>
              <li className="text-gray-700 leading-relaxed flex gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span>We will provide either a full refund or send a replacement at no extra cost.</span>
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="mb-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Package size={24} className="text-indigo-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  6. Additional Notes
                </h2>
              </div>
            </div>
            <ul className="space-y-2 ml-16">
              <li className="text-gray-700 leading-relaxed flex gap-2">
                <span className="text-indigo-600 font-bold">•</span>
                <span>Refunds may take several days to appear, depending on your bank or payment provider.</span>
              </li>
              <li className="text-gray-700 leading-relaxed flex gap-2">
                <span className="text-indigo-600 font-bold">•</span>
                <span>Keep the original packaging and receipts until your return is processed.</span>
              </li>
            </ul>
          </section>

          {/* Important Notice */}
          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-lg mb-8">
            <div className="flex gap-3">
              <AlertTriangle size={24} className="text-orange-600 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Important Reminder</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Please ensure items are unused and in original packaging. Opened ink cartridges cannot be returned unless defective. Contact us within 48 hours for damaged or incorrect items.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-12 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 border border-orange-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">📩 Contact Us</h3>
                <p className="text-gray-700 mb-2">
                  For any questions regarding returns or refunds, email us at:
                </p>
                <a 
                  href="mailto:support@m2ndigital.online" 
                  className="text-orange-600 hover:underline font-semibold"
                >
                  support@m2ndigital.online
                </a>
                <p className="text-gray-600 text-sm mt-2">
                  Our team is here to help ensure a smooth and hassle-free experience.
                </p>
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