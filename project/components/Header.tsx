'use client';

import { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import {
  CurrencyDollarIcon,
  MapIcon,
  SparklesIcon,
  PhotoIcon,
  MapPinIcon,
  VideoCameraIcon,
  DocumentArrowDownIcon,
} from '@heroicons/react/24/solid';
import Image from 'next/image';

interface HeaderProps {
  onOpenForm: (formType: string) => void;
}

export default function Header({ onOpenForm }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const navigation = [
    { name: 'Price', href: '#price', icon: CurrencyDollarIcon },
    { name: 'Site Plan', href: '#site-plan', icon: MapIcon },
    { name: 'Amenities', href: '#amenities', icon: SparklesIcon },
    { name: 'Gallery', href: '#gallery', icon: PhotoIcon },
    { name: 'Location', href: '#location', icon: MapPinIcon },
    { name: 'Virtual Tour', href: '#video', icon: VideoCameraIcon },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' : 'bg-white/80 backdrop-blur-lg'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image src='/logo.png' alt='logo' width={150} height={10}/>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="group flex items-center px-4 py-3 text-base font-medium text-gray-700 rounded-lg hover:bg-gray-100 hover:text-[#4B7B87] transition-all duration-200"
              >
                <item.icon className="w-5 h-5 mr-2 text-gray-500 group-hover:text-[#4B7B87] transition-colors" />
                {item.name}
              </button>
            ))}
            <button
              onClick={() => onOpenForm('brochure')}
              className="flex items-center px-6 py-3 ml-4 text-white text-base font-medium rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200
                bg-gradient-to-r from-[#fad643] via-[#030961] to-[#fad643] animate-header-button-gradient"
            >
              <DocumentArrowDownIcon className="w-5 h-5 mr-2" />
              Download Brochure
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-800 hover:text-[#4B7B87] p-2"
            >
              {isMenuOpen ? (
                <XMarkIcon className="w-7 h-7" />
              ) : (
                <Bars3Icon className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white/95 border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="group flex items-center w-full px-4 py-3 text-base font-medium text-gray-700 rounded-lg hover:text-[#4B7B87] hover:bg-gray-100 transition-all duration-200"
                >
                  <item.icon className="w-6 h-6 mr-3 text-gray-500 group-hover:text-[#4B7B87] transition-colors" />
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => onOpenForm('brochure')}
                className="flex items-center w-full px-4 py-3 mt-2 text-white text-base font-medium rounded-lg shadow-md transition-all duration-200
                  bg-gradient-to-r from-[#cca43b] via-[#242f40] to-[#cca43b] animate-header-button-gradient"
              >
                <DocumentArrowDownIcon className="w-5 h-5 mr-3" />
                Download Brochure
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
