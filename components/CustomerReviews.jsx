"use client";
// eslint-disable react/no-unescaped-entities
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

export default function CustomerReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      rating: 5,
      text: "The printer I ordered works flawlessly. Setup was super easy, and the print quality is exactly what I was looking for. Delivery arrived earlier than promised. I'll definitely be back!",
      author: "Michael T.",
      verified: true
    },
    {
      id: 2,
      rating: 4,
      text: "I was searching everywhere for genuine inks at reasonable prices, and I finally found them here. Ordering was smooth and the inks arrived securely packed.",
      author: "Priya S.",
      verified: true
    },
    {
      id: 3,
      rating: 5,
      text: "I bought a multifunction printer and the experience was great overall. The staff helped guide me to the right model.",
      author: "David L.",
      verified: true
    },
    {
      id: 4,
      rating: 5,
      text: "Amazing service! The quality of the ink cartridges is top-notch and they last much longer than expected. Great value for money.",
      author: "Sarah M.",
      verified: true
    },
    {
      id: 5,
      rating: 4,
      text: "Fast shipping and excellent customer support. Had a question about compatibility and they responded within minutes. Highly recommend!",
      author: "James K.",
      verified: true
    },
    {
      id: 6,
      rating: 5,
      text: "Best place to buy printer supplies online. Prices are competitive and the product range is extensive. Will definitely shop here again.",
      author: "Emily R.",
      verified: true
    }
  ];

  const itemsPerPage = 3;
  const totalPages = Math.ceil(reviews.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const visibleReviews = reviews.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  return (
    <div className="w-full bg-gray-50 py-16">
      <div className="w-full md:w-[90%] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            What Our Happy Customers Say
          </h2>
          <p className="text-gray-600 text-lg">
            Real experiences from our valued customers
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {visibleReviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-blue-100">
                <Quote size={40} fill="currentColor" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={
                      i < review.rating
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'fill-gray-200 text-gray-200'
                    }
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 italic mb-6 leading-relaxed">
                {review.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {review.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{review.author}</p>
                  {review.verified && (
                    <p className="text-sm text-green-600 flex items-center gap-1">
                      <span className="inline-block w-4 h-4 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">
                        ✓
                      </span>
                      Verified Purchase
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center items-center gap-4">
          <button
            onClick={prevSlide}
            className="p-3 border-2 border-red-600 text-red-600 rounded-lg hover:bg-red-600 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentIndex === 0}
          >
            <ChevronLeft size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="flex gap-2">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-red-600 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-3 border-2 border-red-600 text-red-600 rounded-lg hover:bg-red-600 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentIndex === totalPages - 1}
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-red-600 mb-2">50K+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-red-600 mb-2">4.8</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-red-600 mb-2">15K+</div>
            <div className="text-gray-600">Reviews</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-red-600 mb-2">98%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </div>
  );
}