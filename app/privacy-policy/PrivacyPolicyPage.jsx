import React from 'react';
import { Shield, Mail, Lock, Eye, Database, UserCheck } from 'lucide-react';
import MainLayout from '@/components/MainLayout';

export default function PrivacyPolicyPage() {
  return (
    <MainLayout>
        <div className="w-full bg-gray-50">
      {/* Hero Section */}
      <div className="bg-red-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
            <Shield size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg text-white/90">
            Your privacy is our priority. Learn how we protect your information.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          {/* Introduction */}
          <div className="mb-8">
            <p className="text-gray-700 leading-relaxed">
              At <strong>M2N Digital</strong>, your privacy is our priority. This Privacy Policy explains how we collect, use, and protect the personal information you share when using our website.
            </p>
          </div>

          {/* Section 1 */}
          <section className="mb-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Database size={24} className="text-red-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Information We Collect
                </h2>
              </div>
            </div>
            <p className="text-gray-700 mb-3 ml-16">We may collect the following types of information:</p>
            <ul className="space-y-2 ml-16">
              <li className="text-gray-700 leading-relaxed flex gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span><strong>Personal Details:</strong> Your name, email address, phone number, and billing or shipping addresses to process your orders.</span>
              </li>
              <li className="text-gray-700 leading-relaxed flex gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span><strong>Payment Information:</strong> Handled securely by our payment partners; we do not store full credit card details.</span>
              </li>
              <li className="text-gray-700 leading-relaxed flex gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span><strong>Device & Usage Information:</strong> IP address, browser type, operating system, and pages visited on our website, collected via cookies and similar technologies.</span>
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="mb-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Eye size={24} className="text-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  How We Use Your Information
                </h2>
              </div>
            </div>
            <p className="text-gray-700 mb-3 ml-16">We use your information to:</p>
            <ul className="space-y-2 ml-16">
              <li className="text-gray-700 leading-relaxed flex gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Fulfill orders and deliver products to you efficiently.</span>
              </li>
              <li className="text-gray-700 leading-relaxed flex gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Communicate order updates, service announcements, or responses to your inquiries.</span>
              </li>
              <li className="text-gray-700 leading-relaxed flex gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Provide promotional offers and newsletters if you have opted in.</span>
              </li>
              <li className="text-gray-700 leading-relaxed flex gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Analyze and improve our website, products, and customer experience.</span>
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="mb-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <UserCheck size={24} className="text-purple-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Sharing Your Information
                </h2>
              </div>
            </div>
            <p className="text-gray-700 mb-3 ml-16">Your data is shared only as necessary to provide services:</p>
            <ul className="space-y-2 ml-16">
              <li className="text-gray-700 leading-relaxed flex gap-2">
                <span className="text-purple-600 font-bold">•</span>
                <span>With shipping providers to deliver your purchases.</span>
              </li>
              <li className="text-gray-700 leading-relaxed flex gap-2">
                <span className="text-purple-600 font-bold">•</span>
                <span>With payment processors to complete transactions.</span>
              </li>
              <li className="text-gray-700 leading-relaxed flex gap-2">
                <span className="text-purple-600 font-bold">•</span>
                <span>With authorities or legal bodies if required by law.</span>
              </li>
            </ul>
            <div className="mt-4 ml-16 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
              <p className="text-gray-700 font-semibold">
                <strong>Note:</strong> We do not sell, trade, or rent your information to third parties.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Eye size={24} className="text-orange-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Cookies and Tracking
                </h2>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed ml-16">
              Our website uses cookies to enhance functionality, personalize your experience, and collect analytics. You can manage or disable cookies in your browser settings, though some features may not work properly without them.
            </p>
          </section>

          {/* Section 5 */}
          <section className="mb-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <UserCheck size={24} className="text-indigo-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Your Privacy Rights
                </h2>
              </div>
            </div>
            <p className="text-gray-700 mb-3 ml-16">You have the right to:</p>
            <ul className="space-y-2 ml-16">
              <li className="text-gray-700 leading-relaxed flex gap-2">
                <span className="text-indigo-600 font-bold">•</span>
                <span>Access, update, or delete your personal information.</span>
              </li>
              <li className="text-gray-700 leading-relaxed flex gap-2">
                <span className="text-indigo-600 font-bold">•</span>
                <span>Opt out of receiving marketing emails at any time.</span>
              </li>
              <li className="text-gray-700 leading-relaxed flex gap-2">
                <span className="text-indigo-600 font-bold">•</span>
                <span>Exercise additional rights under CCPA if you are a California resident.</span>
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="mb-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Lock size={24} className="text-red-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Data Security
                </h2>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed ml-16">
              We implement robust technical and organizational measures to protect your personal information from unauthorized access, use, or disclosure.
            </p>
          </section>

          {/* Section 7 */}
          <section className="mb-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield size={24} className="text-teal-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Changes to This Policy
                </h2>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed ml-16">
              We may update this Privacy Policy occasionally. The latest version will always be available on our website. Continued use of the site constitutes acceptance of the updated policy.
            </p>
          </section>

          {/* Contact Section */}
          <div className="mt-12 bg-gradient-to-r from-red-50 to-teal-50 rounded-xl p-6 border border-red-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Contact Us</h3>
                <p className="text-gray-700 mb-2">
                  If you have questions or concerns regarding your privacy, email us at:
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