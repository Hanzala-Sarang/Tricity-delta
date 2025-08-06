'use client';

import { useState, useEffect } from 'react';
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
import BookingCard from '@/components/BookingCard'; // Ensure this import is correct
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentFormType, setCurrentFormType] = useState('');

  // This useEffect will open the modal on the initial page load.
  useEffect(() => {
    // You can set a timeout here if you want it to pop up after a delay
    // For now, it will open instantly on load.
    setIsModalOpen(true);
    setCurrentFormType('enquiry'); // Set a default form type
  }, []);

  const handleOpenForm = (formType: string) => {
    setCurrentFormType(formType);
    setIsModalOpen(true);
  };

  const handleCloseForm = () => {
    setIsModalOpen(false);
    setCurrentFormType('');
  };

  return (
    <div className="min-h-screen bg-white">
      <Toaster position="top-right" />
      
      <Header onOpenForm={handleOpenForm} />
      
      {/* Main content area with responsive flex layout */}
      <div className="bg-[#EAEAEA] flex flex-col lg:mt-20 lg:flex-row min-h-screen pt-16 lg:pt-0">
        {/* BookingCard section wrapper - takes 30% width on large screens, full width on small */}
        {/* Hero section wrapper - takes 70% width on large screens, full width on small */}
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
      <Location />
      <Video />
      <About />
      <Footer onOpenForm={handleOpenForm} />
      
      <ContactModal
        isOpen={isModalOpen}
        onClose={handleCloseForm}
        formType={currentFormType}
      />

      {/* Sticky Call and WhatsApp Buttons */}
      <div className="fixed bottom-6 md:bottom-8 right-6 md:right-8 z-50 flex flex-col items-center space-y-4">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/+919876543210" // Replace with your WhatsApp number including country code
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp className="h-6 w-6" />
        </a>

        {/* Phone Call Button */}
        <a
          href="tel:+919876543210" // Replace with your phone number
          className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300"
          aria-label="Call us"
        >
          <FaPhoneAlt className="h-6 w-6" />
        </a>
      </div>
    </div>
  );
}
