'use client';

import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('interior');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const interiorImages = [
    '/gallery/i1.webp',
    '/gallery/i2.webp',
    '/gallery/i3.webp',
    '/gallery/i4.webp',
  ];

  const exteriorImages = [
    '/layout/hero1.webp',
    '/layout/hero2.webp',
  ];

  const currentImages = activeTab === 'interior' ? interiorImages : exteriorImages;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % currentImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length);
  };

  return (
    <section id="gallery" className="py-20 bg-[#EAEAEA] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#000000] mb-4">
            Project <span className="text-[#030961]">Gallery</span> {/* Changed text color to dark blue */}
          </h2>
          <p className="text-xl text-[#3C3C3C] max-w-3xl mx-auto opacity-80">
            Take a virtual tour through our stunning interiors and impressive exteriors
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-10">
          <div className="bg-white border border-[#EAEAEA] p-1 shadow-sm">
            <button
              onClick={() => {
                setActiveTab('interior');
                setCurrentImageIndex(0);
              }}
              className={`px-6 py-3 font-semibold transition-all duration-200 ${
                activeTab === 'interior'
                  ? 'bg-[#030961] text-white shadow-md' // Changed background to dark blue
                  : 'text-[#3C3C3C] hover:bg-[#fad643]/20' // Changed hover background to golden with opacity
              }`}
            >
              Interior Views
            </button>
            <button
              onClick={() => {
                setActiveTab('exterior');
                setCurrentImageIndex(0);
              }}
              className={`px-6 py-3 font-semibold transition-all duration-200 ${
                activeTab === 'exterior'
                  ? 'bg-[#030961] text-white shadow-md' // Changed background to dark blue
                  : 'text-[#3C3C3C] hover:bg-[#fad643]/20' // Changed hover background to golden with opacity
              }`}
            >
              Exterior Views
            </button>
          </div>
        </div>

        {/* Main Gallery */}
        <div className="relative">
          {/* Main Image */}
          <div className="relative h-96 md:h-[500px] overflow-hidden border-2 border-[#fad643] shadow-lg mb-6"> {/* Changed border color to golden */}
            <img
              src={currentImages[currentImageIndex]}
              alt={`${activeTab} view ${currentImageIndex + 1}`}
              className="w-full h-full object-cover"
            />
            
            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white p-3 shadow-md transition-all duration-200 rounded-full"
            >
              <ChevronLeftIcon className="w-6 h-6 text-[#030961]" /> {/* Changed icon color to dark blue */}
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white p-3 shadow-md transition-all duration-200 rounded-full"
            >
              <ChevronRightIcon className="w-6 h-6 text-[#030961]" /> {/* Changed icon color to dark blue */}
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 right-4 bg-black/70 text-white px-4 py-2 border border-[#fad643] font-mono text-sm rounded-lg"> {/* Changed border color to golden */}
              {currentImageIndex + 1} / {currentImages.length}
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center space-x-2 overflow-x-auto pb-2">
            {currentImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`flex-shrink-0 w-20 h-20 overflow-hidden border-2 rounded-lg transition-all duration-200 ${
                  index === currentImageIndex
                    ? 'border-[#030961] shadow-md' // Changed border color to dark blue
                    : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
        <p className='text-center'>Optimistic Images</p>
        {/* Gallery Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center bg-white border border-[#EAEAEA] p-6 shadow-sm rounded-lg">
            <div className="text-3xl font-bold text-[#030961] font-mono mb-2">50+</div> {/* Changed text color to dark blue */}
            <div className="text-[#3C3C3C]">High-res Images</div>
          </div>
          <div className="text-center bg-white border border-[#EAEAEA] p-6 shadow-sm rounded-lg">
            <div className="text-3xl font-bold text-[#030961] font-mono mb-2">360°</div> {/* Changed text color to dark blue */}
            <div className="text-[#3C3C3C]">Virtual Tours</div>
          </div>
          <div className="text-center bg-white border border-[#EAEAEA] p-6 shadow-sm rounded-lg">
            <div className="text-3xl font-bold text-[#030961] font-mono mb-2">4K</div> {/* Changed text color to dark blue */}
            <div className="text-[#3C3C3C]">Video Quality</div>
          </div>
          <div className="text-center bg-white border border-[#EAEAEA] p-6 shadow-sm rounded-lg">
            <div className="text-3xl font-bold text-[#030961] font-mono mb-2">24/7</div> {/* Changed text color to dark blue */}
            <div className="text-[#3C3C3C]">Live Webcam</div>
          </div>
        </div>
      </div>
    </section>
  );
}
