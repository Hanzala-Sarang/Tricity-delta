'use client';

import { useState } from 'react';

interface SitePlanProps {
  onOpenForm: (formType: string) => void;
}

export default function SitePlan({ onOpenForm }: SitePlanProps) {
  // State to manage which floor plan tab is currently selected
  const [selectedPlan, setSelectedPlan] = useState('1bhk');

  // Array of floor plan data, including a unique ID, name, and image URL
  const floorPlans = [
    { id: '1bhk', name: '1 BHK', image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg' },
    { id: '2bhk', name: '2 BHK', image: 'https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg' },
    { id: '3bhk', name: '3 BHK', image: 'https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg' },
  ];

  return (
    <section id="site-plan" className="py-20 bg-[#EAEAEA] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#000000] mb-4">
            Master Plan & <span className="text-[#4B7B87]">Floor Plans</span>
          </h2>
          <p className="text-xl text-[#3C3C3C] max-w-3xl mx-auto opacity-80">
            Explore our thoughtfully designed layouts and comprehensive site planning
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Master Plan Card */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#000000] text-center">Master Plan</h3>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-[#EAEAEA]">
              <img
                src="https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg"
                alt="Master Plan"
                className="w-full h-80 object-cover"
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
            <h3 className="text-2xl font-bold text-[#000000] text-center">Floor Plans</h3>
            
            {/* Plan Selection Tabs */}
            <div className="flex justify-center space-x-2">
              {floorPlans.map((plan) => (
                <button
                  key={plan.id}
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 border border-transparent ${
                    selectedPlan === plan.id
                      ? 'bg-[#4B7B87] text-white shadow-md'
                      : 'bg-white text-[#3C3C3C] hover:bg-[#F0F0F0] border-[#EAEAEA]'
                  }`}
                >
                  {plan.name}
                </button>
              ))}
            </div>

            {/* Selected Floor Plan Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-[#EAEAEA]">
              {floorPlans.map((plan) => (
                <div
                  key={plan.id}
                  className={`${selectedPlan === plan.id ? 'block' : 'hidden'}`}
                >
                  <img
                    src={plan.image}
                    alt={`${plan.name} Floor Plan`}
                    className="w-full h-80 object-cover"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-semibold text-[#000000] mb-2">
                      {plan.name} Configuration
                    </h4>
                    <p className="text-[#3C3C3C] mb-4 opacity-70">
                      Optimally designed layout with efficient space utilization and modern amenities.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-[#EAEAEA] text-[#4B7B87] rounded-md text-sm font-medium">
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
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => onOpenForm('floor-plans')}
            className="px-8 py-4 bg-[#4B7B87] text-white text-lg font-semibold rounded-lg hover:bg-[#5C8C9A] transform hover:scale-105 transition-all duration-200 shadow-md"
          >
            Request for More Floor Plans
          </button>
        </div>
      </div>
    </section>
  );
}
