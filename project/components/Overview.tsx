'use client';

import { useEffect } from 'react';
interface OverviewProps {
  onOpenForm: (formType: string) => void;
}

export default function Overview({ onOpenForm }: OverviewProps) {

    // Custom CSS for the animating button gradient, injected on component mount.
    useEffect(() => {
      const style = document.createElement('style');
      style.innerHTML = `
        @keyframes header-button-gradient-animation {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-header-button-gradient {
          background-size: 200% 200%;
          animation: header-button-gradient-animation 4s ease-in-out infinite;
        }
      `;
      document.head.appendChild(style);
  
      return () => {
        document.head.removeChild(style);
      };
    }, []);


  return (
    <section className="py-20 bg-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3C3C3C] mb-8">
            Where Luxury Meets <span className="text-[#030961]">Lifestyle</span>
          </h2>
          
          <p className="text-xl text-justify text-[#3C3C3C] leading-relaxed mb-12">
Delta & Tricity bring you a visionary lifestyle concept that seamlessly integrates residential, IT Park, and High-Street Retail spaces in creating a holistic ecosystem that harmonizes work, shop, play & life. Located at Airoli Nexus opposite the Airoli Underpass along Thane Belapur Highway, this integrated development is thoughtfully designed to foster connections, spark joy and empower well-being.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 border border-[#EAEAEA] shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-transparent border border-[#4B7B87] flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏗️</span>
              </div>
              <h3 className="text-xl font-bold text-[#3C3C3C] mb-2">Premium Architecture</h3>
              <p className="text-[#3C3C3C]/80">Contemporary design with attention to every detail</p>
            </div>

            <div className="bg-white p-6 border border-[#EAEAEA] shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-transparent border border-[#4B7B87] flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌿</span>
              </div>
              <h3 className="text-xl font-bold text-[#3C3C3C] mb-2">Green Living</h3>
              <p className="text-[#3C3C3C]/80">Lush landscaping and eco-friendly features</p>
            </div>

            <div className="bg-white p-6 border border-[#EAEAEA] shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-transparent border border-[#4B7B87] flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚇</span>
              </div>
              <h3 className="text-xl font-bold text-[#3C3C3C] mb-2">Prime Connectivity</h3>
              <p className="text-[#3C3C3C]/80">Strategic location with excellent transport links</p>
            </div>
          </div>

          <button
            onClick={() => onOpenForm('brochure')}
            className="px-8 py-4 rounded-lg text-white text-lg font-semibold hover:bg-[#5C8C9A] transition-all duration-200 shadow-md hover:shadow-lg bg-gradient-to-r from-[#fad643] via-[#030961] to-[#fad643] animate-header-button-gradient"
          >
            Download Detailed Brochure
          </button>
        </div>
      </div>
    </section>
  );
}