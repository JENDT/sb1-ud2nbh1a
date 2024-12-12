import React from 'react';
import { Heart } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1450778869180-41d0601e046e"
          alt="Peaceful dog"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Find Peace with Your Pets
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Join our community of pet lovers on a journey of mindfulness, healing, and joy
          </p>
          <div className="flex space-x-4">
            <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg flex items-center">
              <Heart className="mr-2 h-5 w-5" />
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}