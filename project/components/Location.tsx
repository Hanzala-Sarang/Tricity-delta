'use client';

import { useState } from 'react';
import { MapPinIcon } from '@heroicons/react/24/solid';

interface LocationProps {
  onOpenForm: (formType: string) => void;
}

export default function Location({ onOpenForm = () => {} }: LocationProps) { // Added default empty function
  const landmarks = [
    { category: 'Transport Hubs', items: ['International Airport - 30mins',
'Vashi - 20mins',
'Airoli station - 5mins',
'Rabale station -5mins only'] },
    { category: 'Healthcare Facilities', items: ['Reputed Hospitals - Nearby', 'Specialty Clinics - Accessible'] },
    { category: 'Educational Institutions', items: ['Top Schools - Short Drive', 'Renowned Colleges - Convenient Reach'] },
    { category: 'Shopping & Entertainment', items: ['Shopping Malls - Close By', 'Multiplexes & Dining - Vibrant Options'] },
    { category: 'Business Parks', items: ['Major IT/Business Hubs - Seamless Commute', 'Corporate Offices - Well Connected'] },
    { category: 'Recreational Spots', items: ['Parks & Green Spaces - Serene Environment', 'Lakes & Nature Trails - Refreshing Escapes'] },
  ];

  return (
    <section id="location" className="py-20 bg-[#EAEAEA] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#000000] mb-4">
            Prime <span className="text-[#030961]">Location</span>
          </h2>
          <p className="text-xl text-[#3C3C3C] max-w-3xl mx-auto opacity-80">
            Strategically located in the bustling heart of Airoli, Navi Mumbai, offering unparalleled connectivity and proximity to key city landmarks.
          </p>
        </div>

        {/* Maps Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Interactive Map View */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-[#EAEAEA]">
            <div className="bg-[#3C3C3C] p-4">
              <h3 className="text-xl font-bold text-white text-center">Interactive Map View</h3>
            </div>
            <div className="h-80 bg-white flex items-center justify-center">
              {/* Google Maps Embed for Airoli, Navi Mumbai */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15077.10850233481!2d73.00392665!3d19.1554516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b931498b0f7f%3A0x2914619d0e7e1e67!2sAiroli%2C%20Navi%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1678987654321!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Airoli, Navi Mumbai Map"
              ></iframe>
            </div>
          </div>

          {/* Connectivity Map Card (can be replaced with an image if you have one) */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-[#EAEAEA]">
            <div className="bg-[#3C3C3C] p-4">
              <h3 className="text-xl font-bold text-white text-center">Connectivity Overview</h3>
            </div>
            <div className="h-80 bg-white flex items-center justify-center">
              <div className="text-center">
                <MapPinIcon className="w-12 h-12 text-[#fad643] mb-4 mx-auto" />
                <div className="text-[#3C3C3C] opacity-90 text-lg font-semibold">Detailed Connectivity Map</div>
                <div className="text-sm text-[#3C3C3C] mt-2 opacity-70">
                  Request for a comprehensive map showcasing transport links and key routes.
                </div>
                <button
                  onClick={() => onOpenForm('location-request')}
                  className="mt-4 px-6 py-2 bg-[#030961] text-white rounded-lg hover:bg-[#242f40] transition-colors shadow-md"
                >
                  Request Map
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Landmarks Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {landmarks.map((landmark, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-[#EAEAEA]"
            >
              <h3 className="text-xl font-bold text-[#000000] mb-4 flex items-center">
                <span className="w-3 h-3 bg-[#030961] rounded-sm mr-3"></span>
                {landmark.category}
              </h3>
              <ul className="space-y-2">
                {landmark.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-[#3C3C3C] flex items-center opacity-80">
                    <span className="w-2 h-2 bg-[#030961] rounded-full mr-3 flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Location Highlights Banner */}
        <div className="mt-16 bg-[#030961] rounded-lg p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Why Airoli, Navi Mumbai?</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🏙️</div>
                <h4 className="text-lg font-semibold mb-2">Thriving Urban Hub</h4>
                <p className="text-white/90 opacity-70">A rapidly developing area with modern infrastructure and amenities.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🚄</div>
                <h4 className="text-lg font-semibold mb-2">Seamless Connectivity</h4>
                <p className="text-white/90 opacity-70">Excellent access to Mumbai, Thane, and other key areas via road and rail.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">📈</div>
                <h4 className="text-lg font-semibold mb-2">High Growth Potential</h4>
                <p className="text-white/90 opacity-70">A prime investment destination with promising real estate appreciation.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
