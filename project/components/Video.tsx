'use client';

import { useState } from 'react';
import { PlayIcon } from '@heroicons/react/24/solid';
import ContactModal from './ContactModal'; // Assuming ContactModal is in the same components directory

export default function Video() {
  // Array of video data, with the video URL removed.
  const videos = [
    {
      title: 'Sample Apartments',
      thumbnail: '/layout/hero1.webp',
      description: 'Virtual walkthrough of our premium apartment configurations',
    },
    {
      title: 'Virtual Site Tour',
      thumbnail: '/layout/hero2.webp',
      description: 'Comprehensive site tour showcasing amenities and facilities',
    }
  ];

  // State to control the visibility of the modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  // State to set the form type dynamically
  const [formType, setFormType] = useState('');

  // Function to handle opening the modal and setting the form type
  const handleOpenModal = (type: string) => {
    setFormType(type);
    setIsModalOpen(true);
  };

  // The close function is passed to the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="video" className="py-20 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#000000] mb-4">
            Virtual <span className="text-[#030961]">Experience</span> {/* Changed text color to dark blue */}
          </h2>
          <p className="text-xl text-[#3C3C3C] max-w-3xl mx-auto opacity-80">
            Explore our project through immersive virtual tours and detailed apartment walkthroughs
          </p>
        </div>

        {/* Video Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
              // Call the new handler to open the modal
              onClick={() => handleOpenModal('site-visit')} 
            >
              <div className="relative group">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/60 transition-all duration-300">
                  <div className="bg-white rounded-full p-6 transform group-hover:scale-110 transition-all duration-300">
                    <PlayIcon className="w-12 h-12 text-[#030961] ml-1" /> {/* Changed icon color to dark blue */}
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  {index === 0 ? '3:45' : '5:20'}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#000000] mb-3">{video.title}</h3>
                <p className="text-[#3C3C3C] mb-4 opacity-70">{video.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-[#3C3C3C] opacity-70">
                    <span className="flex items-center">
                      <span className="w-2 h-2 bg-[#fad643] rounded-full mr-2"></span> {/* Changed background to golden */}
                      HD Quality
                    </span>
                    <span className="flex items-center">
                      <span className="w-2 h-2 bg-[#030961] rounded-full mr-2"></span> {/* Changed background to dark blue */}
                      360° View
                    </span>
                  </div>
                  
                  {/* "Watch Now" link, now opens the modal */}
                  <button 
                    onClick={() => handleOpenModal('site-visit')}
                    className="text-[#030961] font-medium hover:text-[#fad643] transition-colors" /* Changed text and hover color */
                  >
                    Request Site Visit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Stats Banner */}
        <div className="mt-16 bg-[#030961] rounded-lg p-8 text-white"> {/* Changed background to dark blue */}
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Interactive Experience</h3>
            <p className="text-white/90 max-w-2xl mx-auto opacity-70">
              Experience our project like never before with cutting-edge virtual reality tours 
              and high-definition apartment showcases
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2 font-mono">4K</div>
              <div className="text-white/80 text-sm">Ultra HD Videos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2 font-mono">360°</div>
              <div className="text-white/80 text-sm">Virtual Tours</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2 font-mono">15+</div>
              <div className="text-white/80 text-sm">Video Tours</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2 font-mono">VR</div>
              <div className="text-white/80 text-sm">Ready Experience</div>
            </div>
          </div>
        </div>

        {/* The ContactModal component is rendered here */}
        <ContactModal 
          isOpen={isModalOpen} 
          onClose={handleCloseModal} 
          formType={formType} 
        />
      </div>
    </section>
  );
}
