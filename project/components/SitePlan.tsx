'use client';

import { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface SitePlanProps {
  onOpenForm: (formType: string) => void;
}

export default function SitePlan({ onOpenForm }: SitePlanProps) {
  const [selectedPlanTab, setSelectedPlanTab] = useState('2bhk'); // Default to 2BHK as per image
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Custom CSS for the animating button gradient, injected on component mount.
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes site-plan-button-gradient-animation {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      .animate-site-plan-button-gradient {
        background-size: 200% 200%;
        animation: site-plan-button-gradient-animation 4s ease-in-out infinite;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Array of floor plan data, now including an array of image URLs for each BHK
  const floorPlans = [
    { 
      id: '1bhk', 
      name: '1 BHK', 
      images: [
        '/layout/1bhk-s1.webp', // Placeholder for 1BHK image 1
        '/layout/1bhk-s2-s10.webp',
        '/layout/1bhk-s3-s4.webp',
        '/layout/1bhk-s5.webp',
        '/layout/1bhk-s8.webp',
        '/layout/1bhk-s9.webp',
        '/layout/1bhk-s11.webp'
      ],
      description: 'Optimally designed 1 BHK layout with efficient space utilization and modern amenities.',
    },
    { 
      id: '2bhk', 
      name: '2 BHK', 
      images: [
        '/layout/2bhk-s1.webp', // Placeholder for 2BHK image 1
        '/layout/2bhk-s1-s8.webp',
        '/layout/2bhk-s2-s5.webp',
        '/layout/2bhk-s3-s4.webp',
        '/layout/2bhk-s6-s7.webp',
        '/layout/2bhk-t2-s2-s4.webp',
        '/layout/2bhk-t3-s6-s7.webp',
      ],
      description: 'Spacious 2 BHK configuration offering comfort and style, perfect for modern families.',
    },
    { 
      id: '3bhk', 
      name: '3 BHK', 
      images: [
        '/layout/3bhk-s5-s6.webp', // Placeholder for 3BHK image 1
      ],
      description: 'Luxurious 3 BHK apartments with expansive living areas and premium finishes for an elevated lifestyle.',
    },
  ];

  // Reset image index when tab changes
  const handleTabChange = (tabId: string) => {
    setSelectedPlanTab(tabId);
    setCurrentImageIndex(0); // Reset carousel to first image for the new tab
  };

  const currentPlan = floorPlans.find(plan => plan.id === selectedPlanTab);
  const totalImages = currentPlan ? currentPlan.images.length : 0;

  const goToNextImage = () => {
    if (currentPlan) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % totalImages);
    }
  };

  const goToPreviousImage = () => {
    if (currentPlan) {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
    }
  };

  return (
    <section id="site-plan" className="py-20 bg-[#EAEAEA] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#000000] mb-4">
            Master Plan & <span className="text-[#030961]">Plans</span>
          </h2>
          <p className="text-xl text-[#3C3C3C] max-w-3xl mx-auto opacity-80">
            Explore our thoughtfully designed layouts and comprehensive site planning
          </p>
        </div>

        <div className="grid gap-12">
          
          {/* Master Plan Card (NOT blurred) */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#000000] text-center">Master Plan</h3>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-[#EAEAEA]">
              <img
                src="/layout/master-plan.webp"
                alt="Master Plan"
                className="w-full h-full object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold text-[#000000] mb-2">Project Layout</h4>
                <p className="text-[#3C3C3C] opacity-70">
                  Comprehensive site development with optimized space utilization, 
                  green areas, and modern infrastructure.
                </p>
              </div>
            </div>
          </div>

          {/* Floor Plans Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#000000] text-center">Plans</h3>
            
            {/* Plan Selection Tabs */}
            <div className="flex justify-center space-x-2 flex-wrap gap-2">
              {floorPlans.map((plan) => (
                <button
                  key={plan.id}
                  onClick={() => handleTabChange(plan.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 border border-transparent ${
                    selectedPlanTab === plan.id
                      ? 'bg-[#030961] text-white shadow-md'
                      : 'bg-white text-[#3C3C3C] hover:bg-[#F0F0F0] border-[#EAEAEA]'
                  }`}
                >
                  {plan.name}
                </button>
              ))}
            </div>

            {/* Selected Floor Plan Carousel (with blur and overlay) */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-[#EAEAEA] relative">
              {currentPlan && (
                <>
                  <div className="relative w-full h-full">
                  <img
                    src={currentPlan.images[currentImageIndex]}
                    alt={`${currentPlan.name} Floor Plan ${currentImageIndex + 1}`}
                    className="w-auto h-auto object-contain blur-sm object-center" // object-contain to show full plan
                  />
                    
                    {/* Overlay to prompt for form */}
                    <div 
                      className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center cursor-pointer"
                      onClick={() => onOpenForm('floor-plans')}
                    >
                      <p className="text-xl font-semibold mb-2">Request to See Floor Plans</p>
                      <p className="text-sm opacity-80">Click to get detailed layouts</p>
                      <button 
                        className="mt-4 px-6 py-2 bg-[#030961] text-white rounded-lg hover:bg-[#242f40] transition-colors"
                      >
                        Enquire Now
                      </button>
                    </div>

                    {totalImages > 1 && (
                      <>
                        {/* Previous Button */}
                        <button
                          onClick={goToPreviousImage}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full focus:outline-none transition-colors duration-300 z-10"
                          aria-label="Previous floor plan"
                        >
                          <ChevronLeftIcon className="w-5 h-5" />
                        </button>
                        {/* Next Button */}
                        <button
                          onClick={goToNextImage}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full focus:outline-none transition-colors duration-300 z-10"
                          aria-label="Next floor plan"
                        >
                          <ChevronRightIcon className="w-5 h-5" />
                        </button>
                        {/* Image Indicators */}
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1 z-10">
                          {currentPlan.images.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentImageIndex(index)}
                              className={`h-2 w-2 rounded-full bg-white transition-opacity duration-300 
                                ${index === currentImageIndex ? 'opacity-100' : 'opacity-50 hover:opacity-75'}`}
                              aria-label={`Go to image ${index + 1}`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>

                  <div className="p-6">
                    <h4 className="text-xl font-semibold text-[#000000] mb-2">
                      {currentPlan.name} Configuration
                    </h4>
                    <p className="text-[#3C3C3C] mb-4 opacity-70">
                      {currentPlan.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-[#EAEAEA] text-[#030961] rounded-md text-sm font-medium">
                        Vastu Compliant
                      </span>
                      <span className="px-3 py-1 bg-[#EAEAEA] text-[#3C3C3C] rounded-md text-sm font-medium">
                        Well Ventilated
                      </span>
                      <span className="px-3 py-1 bg-[#EAEAEA] text-[#3C3C3C] rounded-md text-sm font-medium">
                        Premium Finishes
                      </span>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => onOpenForm('floor-plans')}
            className="px-8 py-4 text-white text-lg font-semibold rounded-lg hover:scale-105 transition-all duration-200 shadow-md
              bg-gradient-to-r from-[#fad643] via-[#030961] to-[#fad643] animate-site-plan-button-gradient"
          >
            Request for More Floor Plans
          </button>
        </div>
      </div>
    </section>
  );
}
