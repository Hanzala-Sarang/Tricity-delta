'use client';

import { useState, useEffect, useRef } from 'react';
import { Toaster } from 'sonner';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Overview from '@/components/Overview';
import Price from '@/components/Price';
import SitePlan from '@/components/SitePlan';
import Amenities from '@/components/Amenities';
import Gallery from '@/components/Gallery';
import Location from '@/components/Location';
import Video from '@/components/Video';
import About from '@/components/About';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';
import BookingCard from '@/components/BookingCard';
import Loader from '@/components/Loader';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentFormType, setCurrentFormType] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Ref to hold the timeout ID for the automatic modal pop-up
  const autoModalTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Function to start the periodic modal display cycle
  const startAutoModalTimer = () => {
    // Clear any existing timer to prevent multiple timers running
    if (autoModalTimeoutRef.current) {
      clearTimeout(autoModalTimeoutRef.current);
    }

    // Set a timer to open the modal after the defined interval (e.g., 5 seconds)
    autoModalTimeoutRef.current = setTimeout(() => {
      setIsModalOpen(true);
      setCurrentFormType('enquiry'); // Default type for the automatically opened modal
      // NO nested setTimeout here, as the modal should not close automatically
    }, 30000); // Modal will pop up every 5 seconds
  };

  // Effect for initial page loading and starting the automatic modal timer
  useEffect(() => {
    // Simulate initial content loading
    const loadContentTimer = setTimeout(() => {
      setIsLoading(false); // Hide the loader after content is "loaded"
      startAutoModalTimer(); // Start the automatic modal timer after the page loads
    }, 1500); // Simulate 1.5 seconds loading time for the page

    // Cleanup function: clear both timers if the component unmounts
    return () => {
      clearTimeout(loadContentTimer);
      if (autoModalTimeoutRef.current) {
        clearTimeout(autoModalTimeoutRef.current);
      }
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  // Handler for opening the form from manual clicks (e.g., "Enquire Now" buttons)
  const handleOpenForm = (formType: string) => {
    // When the form is opened manually, clear any pending automatic pop-up
    if (autoModalTimeoutRef.current) {
      clearTimeout(autoModalTimeoutRef.current);
      autoModalTimeoutRef.current = null; // Explicitly nullify the ref
    }
    setCurrentFormType(formType);
    setIsModalOpen(true);
  };

  // Handler for closing the form (both manual and automatic)
  const handleCloseForm = () => {
    setIsModalOpen(false);
    setCurrentFormType('');
    // After closing, restart the automatic modal timer to respect the user's interaction
    // The timer will now wait 5 seconds before attempting to open the modal again
    startAutoModalTimer(); 
  };

  return (
    <div className="min-h-screen bg-white">
      <Toaster position="top-right" />
      
      {/* Conditionally render the Loader */}
      <Loader show={isLoading} />

      {/* Render main content only when not loading */}
      {!isLoading && (
        <>
          <Header onOpenForm={handleOpenForm} />
          
          {/* Main content area with responsive flex layout */}
          <div className="bg-[#EAEAEA] flex flex-col lg:mt-20 lg:flex-row min-h-screen pt-16 lg:pt-0">
            <div className="w-full h-full lg:w-8/12 relative">
              <Hero onOpenForm={handleOpenForm} />
            </div>
            <div className="w-full h-full lg:w-4/12 flex items-center justify-center">
              <BookingCard onOpenForm={handleOpenForm} />
            </div>
          </div>

          {/* Other sections of your landing page */}
          <Overview onOpenForm={handleOpenForm} />
          <Price onOpenForm={handleOpenForm} />
          <SitePlan onOpenForm={handleOpenForm} />
          <Amenities />
          <Gallery />
          <Location onOpenForm={handleOpenForm} />
          <Video />
          <About />
          <Footer onOpenForm={handleOpenForm} />
          
          <ContactModal
            isOpen={isModalOpen}
            onClose={handleCloseForm} // Pass the close handler to the modal
            formType={currentFormType}
          />

          {/* Sticky Call and WhatsApp Buttons */}
          <div className="fixed bottom-6 md:bottom-8 right-6 md:right-8 z-50 flex flex-col items-center space-y-4">
            <a
              href="https://wa.me/+919324242484" // Replace with your WhatsApp number
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300"
              aria-label="Chat on WhatsApp"
            >
              <FaWhatsapp className="h-6 w-6" />
            </a>

            <a
              href="tel:+919324242484" // Replace with your phone number
              className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300"
              aria-label="Call us"
            >
              <FaPhoneAlt className="h-6 w-6" />
            </a>
          </div>
        </>
      )}
    </div>
  );
}
