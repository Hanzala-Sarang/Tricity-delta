'use client';

import React from 'react';

export default function Amenities() {
  const amenities = [
    { name: 'Swimming Pool', imageUrl: '/gym1.webp', description: 'Olympic-size swimming pool' },
    { name: 'Gymnasium', imageUrl: '/av2.webp', description: 'Fully equipped fitness center' },
    { name: 'Basketball Court', imageUrl: '/pk4.webp', description: 'Professional basketball court' },
    { name: 'Jogging Track', imageUrl: '/st3.webp', description: 'Scenic jogging track' },
  ];

  return (
    <section id="amenities" className="py-20 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#000000] mb-4">
            World-Class <span className="text-[#030961]">Amenities</span> {/* Changed span color to dark blue */}
          </h2>
          <p className="text-xl text-justify text-[#3C3C3C] max-w-3xl mx-auto opacity-80">
            Experience luxury living with our comprehensive range of premium amenities designed for your comfort and convenience
          </p>
        </div>

        {/* Adjusted grid to display 2 columns on all screen sizes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-[#EAEAEA] overflow-hidden"
            >
              <img 
                src={amenity.imageUrl} 
                alt={amenity.name} 
                // Changed object-contain to object-cover to ensure images fill the space
                className="w-full h-full object-cover object-center rounded-t-lg"
/>
            </div>
          ))}
        </div>

        {/* Additional Amenities Banner */}
        <div className="mt-16 bg-gradient-to-r from-[#fad643] to-[#030961] rounded-lg p-8 text-center text-white"> {/* Changed gradient colors */}
          <h3 className="text-2xl md:text-3xl font-bold mb-4">And Many More...</h3>
          <p className="text-lg text-justify mb-6 max-w-3xl mx-auto">
            Discover over 30 premium amenities including library, business center, 
            meditation zone, senior citizen area, and much more.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 bg-white/20 rounded-md text-sm font-medium">Library</span>
            <span className="px-4 py-2 bg-white/20 rounded-md text-sm font-medium">Business Center</span>
            <span className="px-4 py-2 bg-white/20 rounded-md text-sm font-medium">Yoga Deck</span>
            <span className="px-4 py-2 bg-white/20 rounded-md text-sm font-medium">Meditation Zone</span>
            <span className="px-4 py-2 bg-white/20 rounded-md text-sm font-medium">Amphitheatre</span>
            <span className="px-4 py-2 bg-white/20 rounded-md text-sm font-medium">Grocery Store</span>
          </div>
        </div>
      </div>
    </section>
  );
}
