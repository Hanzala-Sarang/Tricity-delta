'use client';

import { useState, useEffect } from 'react';
import { IndianRupeeIcon } from 'lucide-react';

interface BookingCardProps {
  onOpenForm: (formType: string) => void;
}

export default function BookingCard({ onOpenForm }: BookingCardProps) {
  // Custom CSS for the blinking animation and animating gradient, injected on component mount.
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes highlight-bulb {
        0%, 100% { opacity: 1; transform: scale(1); }
        50% { opacity: 0.3; transform: scale(1.02); }
      }
      .animate-highlight-bulb {
        animation: highlight-bulb 2s ease-in-out infinite;
      }
      @keyframes gradient-animation {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      .animate-gradient {
        background-size: 200% 200%;
        animation: gradient-animation 4s ease-in-out infinite;
      }
      .animation-delay-200 { animation-delay: 0.2s; }
      .animation-delay-400 { animation-delay: 0.4s; }
      .animation-delay-600 { animation-delay: 0.6s; }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section className="relative z-20 w-full flex items-center justify-center text-black py-8 px-4 sm:px-6 lg:px-8 font-sans">
      {/* Animated gradient background with rounded corners and shadow */}
      <div className="bg-gradient-to-r from-[#4B7B87] via-[#5C8C9A] to-white animate-gradient p-8 md:p-10 rounded-xl shadow-2xl w-full max-w-lg text-black">
        
        {/* Booking Status with a subtle pulse animation */}
        <div className="flex items-center gap-2 mb-4">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
          </span>
          <p className="text-sm font-bold tracking-widest text-blue-100">BOOKING OPEN</p>
        </div>
        
        {/* Project Info */}
        <h1 className="text-3xl md:text-4xl font-bold font-['Montserrat'] mb-1">Tricity Delta</h1>
        <p className="text-lg text-black font-medium font-['Roboto'] mb-6">At Airoli, Navi Mumbai</p>

        {/* Key Highlights with new "bulb on/off" animation */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center text-gray-100 font-['Roboto'] animate-highlight-bulb">
            <span className="text-white mr-2">📍</span>
            <span className="text-base text-black">5 Mins to Railway Station</span>
          </div>
          <div className="flex items-center text-gray-100 font-['Roboto'] animate-highlight-bulb animation-delay-200">
            <span className="text-white mr-2">🌳</span>
            <span className="text-base text-black">6 Acres Land Parcel</span>
          </div>
          <div className="flex items-center text-gray-100 font-['Roboto'] animate-highlight-bulb animation-delay-400">
            <span className="text-white mr-2">🏢</span>
            <span className="text-base text-black">3 Towers, 30+ Storey</span>
          </div>
          <div className="flex items-center text-gray-100 font-['Roboto'] animate-highlight-bulb animation-delay-600">
            <span className="text-white mr-2">✨</span>
            <span className="text-base text-black">30+ Podium & Ground Amenities</span>
          </div>
        </div>
        
        {/* Price Information */}
        <div className="mb-6">
          <p className="text-base text-black font-['Inter']">Luxury 1, 2 & 3 BHK Apartments</p>
          <p className="text-sm text-black mb-1 font-['Inter']">Starting Price</p>
          <p className="text-4xl md:text-5xl font-extrabold text-black font-['Montserrat']">
            <IndianRupeeIcon className="inline-block text-black w-8 h-8 mr-1 align-sub" />84 Lacs* <span className="text-lg">Onwards</span>
          </p>
        </div>
        
        {/* CTA Button */}
        <button
          onClick={() => onOpenForm('enquiry')}
          className="w-full px-6 py-4 bg-white text-[#4B7B87] text-lg font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg transform hover:scale-[1.01]"
        >
          Enquire Now
        </button>
      </div>
    </section>
  );
}
