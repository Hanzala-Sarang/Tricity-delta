'use client';

import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('interior');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const interiorImages = [
    'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
    'https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg',
    'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg',
    'https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg',
    'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg',
  ];

  const exteriorImages = [
    'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg',
    'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
    'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
    'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg',
    'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg',
  ];

  const currentImages = activeTab === 'interior' ? interiorImages : exteriorImages;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % currentImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length);
  };

  return (
    <section id="gallery" className="py-20 bg-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3C3C3C] mb-4">
            Project <span className="text-[#4B7B87]">Gallery</span>
          </h2>
          <p className="text-xl text-[#3C3C3C] max-w-3xl mx-auto">
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
                  ? 'bg-[#4B7B87] text-white shadow-md'
                  : 'text-[#3C3C3C] hover:bg-[#EAEAEA]'
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
                  ? 'bg-[#4B7B87] text-white shadow-md'
                  : 'text-[#3C3C3C] hover:bg-[#EAEAEA]'
              }`}
            >
              Exterior Views
            </button>
          </div>
        </div>

        {/* Main Gallery */}
        <div className="relative">
          {/* Main Image */}
          <div className="relative h-96 md:h-[500px] overflow-hidden border-2 border-white shadow-lg mb-6">
            <img
              src={currentImages[currentImageIndex]}
              alt={`${activeTab} view ${currentImageIndex + 1}`}
              className="w-full h-full object-cover"
            />
            
            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white p-3 shadow-md transition-all duration-200"
            >
              <ChevronLeftIcon className="w-6 h-6 text-[#3C3C3C]" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white p-3 shadow-md transition-all duration-200"
            >
              <ChevronRightIcon className="w-6 h-6 text-[#3C3C3C]" />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 right-4 bg-black text-white px-4 py-2 border border-[#4B7B87] font-mono text-sm">
              {currentImageIndex + 1} / {currentImages.length}
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center space-x-2 overflow-x-auto pb-2">
            {currentImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`flex-shrink-0 w-20 h-20 overflow-hidden border-2 transition-all duration-200 ${
                  index === currentImageIndex
                    ? 'border-[#4B7B87] shadow-md'
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

        {/* Gallery Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center bg-white border border-[#EAEAEA] p-6 shadow-sm">
            <div className="text-3xl font-bold text-[#4B7B87] font-mono mb-2">50+</div>
            <div className="text-[#3C3C3C]">High-res Images</div>
          </div>
          <div className="text-center bg-white border border-[#EAEAEA] p-6 shadow-sm">
            <div className="text-3xl font-bold text-[#4B7B87] font-mono mb-2">360°</div>
            <div className="text-[#3C3C3C]">Virtual Tours</div>
          </div>
          <div className="text-center bg-white border border-[#EAEAEA] p-6 shadow-sm">
            <div className="text-3xl font-bold text-[#4B7B87] font-mono mb-2">4K</div>
            <div className="text-[#3C3C3C]">Video Quality</div>
          </div>
          <div className="text-center bg-white border border-[#EAEAEA] p-6 shadow-sm">
            <div className="text-3xl font-bold text-[#4B7B87] font-mono mb-2">24/7</div>
            <div className="text-[#3C3C3C]">Live Webcam</div>
          </div>
        </div>
      </div>
    </section>
  );
}