'use client';

import { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'; // Importing icons for navigation

interface HeroProps {
  onOpenForm: (formType: string) => void;
}

export default function Hero({ onOpenForm }: HeroProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false); // New state to track mobile view

  // Define images with separate sources for desktop and mobile
  const images = [
    {
      desktopSrc: '/layout/hero1.webp',
      mobileSrc: '/g1.webp' // Assuming mobile image is the same for now, replace if different
    },
    {
      desktopSrc: '/layout/hero2.webp',
      mobileSrc: '/g2.webp' // Assuming mobile image is the same for now, replace if different
    },
  ];

  useEffect(() => {
    // Function to check and set mobile state
    const checkIsMobile = () => {
      // Tailwind's 'lg' breakpoint is typically 1024px. Adjust if your 'lg' is different.
      setIsMobile(window.innerWidth < 1024);
    };

    // Initial check
    checkIsMobile();

    // Event listener for window resize
    window.addEventListener('resize', checkIsMobile);

    // Cleanup event listener
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []); // Empty dependency array means this runs once on mount and cleans up on unmount

  useEffect(() => {
    // Carousel auto-play logic
    const carouselTimer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => {
      clearInterval(carouselTimer);
    };
  }, [images.length]);

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden font-sans">
      {/* Background Image Carousel Container */}
      <div className="absolute inset-0 w-full h-full">
        {images.map((img, index) => (
          <img
            key={index}
            // Conditionally choose src based on isMobile state
            src={isMobile ? img.mobileSrc : img.desktopSrc}
            alt={`Luxury residential project ${index + 1}`}
            className={`
              absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out
              ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}
            `}
          />
        ))}

        {/* Navigation Buttons */}
        <button
          onClick={goToPreviousImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full focus:outline-none transition-colors duration-300 z-30"
          aria-label="Previous image"
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
        <button
          onClick={goToNextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full focus:outline-none transition-colors duration-300 z-30"
          aria-label="Next image"
        >
          <ChevronRightIcon className="w-6 h-6" />
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-30">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`h-2 w-2 rounded-full bg-white transition-opacity duration-300
                ${index === currentImageIndex ? 'opacity-100' : 'opacity-50 hover:opacity-75'}`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Optional: Add content directly on the carousel if needed, e.g., a main title */}
      <div className="relative z-10 flex items-center justify-center h-full text-white text-center">
        {/* You can place a main title or a subtle message here if desired */}
        {/* <h1 className="text-5xl md:text-7xl font-bold">Your Project Name Here</h1> */}
      </div>
    </section>
  );
}