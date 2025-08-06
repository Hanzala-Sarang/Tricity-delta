'use client';

import { useState, useEffect } from 'react';
import { IndianRupeeIcon } from 'lucide-react';

interface BookingCardProps {
  onOpenForm: (formType: string) => void;
}

export default function BookingCard({ onOpenForm }: BookingCardProps) {
  // Custom CSS for the blinking animation, injected once on component mount.
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes pulse-once {
        0%, 100% { opacity: 1; transform: scale(1); }
        50% { opacity: 0.8; transform: scale(1.02); }
      }
      .animate-pulse-once {
        animation: pulse-once 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
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
    <section className="relative z-20 w-full flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="bg-white/90 backdrop-blur-sm p-8 md:p-10 rounded-xl shadow-2xl w-full max-w-lg text-black">
        
        {/* Booking Status with a subtle pulse animation */}
        <div className="flex items-center gap-2 mb-4">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
          </span>
          <p className="text-sm font-bold tracking-widest text-blue-800">BOOKING OPEN</p>
        </div>
        
        {/* Project Info */}
        <h1 className="text-3xl md:text-4xl font-bold font-['Montserrat'] mb-1">Tricity Delta</h1>
        <p className="text-lg text-gray-800 font-medium font-['Roboto'] mb-6">At Airoli, Navi Mumbai</p>

        {/* Key Highlights with blinking animation */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center text-gray-700 font-['Roboto'] animate-pulse-once">
            <span className="text-[#4B7B87] mr-2">📍</span>
            <span className="text-base">5 Mins to Railway Station</span>
          </div>
          <div className="flex items-center text-gray-700 font-['Roboto'] animate-pulse-once animation-delay-200">
            <span className="text-[#4B7B87] mr-2">🌳</span>
            <span className="text-base">6 Acres Land Parcel</span>
          </div>
          <div className="flex items-center text-gray-700 font-['Roboto'] animate-pulse-once animation-delay-400">
            <span className="text-[#4B7B87] mr-2">🏢</span>
            <span className="text-base">3 Towers, 30+ Storey</span>
          </div>
          <div className="flex items-center text-gray-700 font-['Roboto'] animate-pulse-once animation-delay-600">
            <span className="text-[#4B7B87] mr-2">✨</span>
            <span className="text-base">30+ Podium & Ground Amenities</span>
          </div>
        </div>
        
        {/* Price Information */}
        <div className="mb-6">
          <p className="text-base text-gray-700 font-['Inter']">Luxury 1, 2 & 3 BHK Apartments</p>
          <p className="text-sm text-gray-600 mb-1 font-['Inter']">Starting Price</p>
          <p className="text-4xl md:text-5xl font-extrabold text-[#4B7B87] font-['Montserrat']">
            <IndianRupeeIcon className="inline-block w-8 h-8 mr-1 align-sub" />84 Lacs* <span className="text-lg">Onwards</span>
          </p>
        </div>
        
        {/* CTA Button */}
        <button
          onClick={() => onOpenForm('enquiry')}
          className="w-full px-6 py-4 bg-[#4B7B87] text-white text-lg font-semibold rounded-lg hover:bg-[#5C8C9A] transition-all duration-200 shadow-lg transform hover:scale-[1.01]"
        >
          Enquire Now
        </button>
      </div>
    </section>
  );
}
