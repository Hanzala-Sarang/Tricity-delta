'use client';

import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'; // Importing react-icons

interface FooterProps {
  onOpenForm: (formType: string) => void;
}

export default function Footer({ onOpenForm }: FooterProps) {
  return (
    <footer className="bg-black text-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              Delta<span className="text-white"> Group </span> {/* Changed span color to dark blue */}
            </h3>
            <p className="text-white/80 leading-relaxed">
              Creating exceptional living experiences with luxury, comfort, and innovation at the heart of every project.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-[#fad643] transition-colors"> {/* Changed hover color to golden */}
                <span className="sr-only">Facebook</span>
                <FaFacebookF className="w-6 h-6" /> {/* Replaced emoji with Font Awesome icon */}
              </a>
              <a href="#" className="text-white/60 hover:text-[#fad643] transition-colors"> {/* Changed hover color to golden */}
                <span className="sr-only">Instagram</span>
                <FaInstagram className="w-6 h-6" /> {/* Replaced emoji with Font Awesome icon */}
              </a>
              <a href="#" className="text-white/60 hover:text-[#fad643] transition-colors"> {/* Changed hover color to golden */}
                <span className="sr-only">LinkedIn</span>
                <FaLinkedinIn className="w-6 h-6" /> {/* Replaced emoji with Font Awesome icon */}
              </a>
              <a href="#" className="text-white/60 hover:text-[#fad643] transition-colors"> {/* Changed hover color to golden */}
                <span className="sr-only">YouTube</span>
                <FaYoutube className="w-6 h-6" /> {/* Replaced emoji with Font Awesome icon */}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4> {/* Changed text color to dark blue */}
            <ul className="space-y-2">
              <li><a href="#price" className="text-white/80 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#site-plan" className="text-white/80 hover:text-white transition-colors">Floor Plans</a></li>
              <li><a href="#amenities" className="text-white/80 hover:text-white transition-colors">Amenities</a></li>
              <li><a href="#gallery" className="text-white/80 hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#location" className="text-white/80 hover:text-white transition-colors">Location</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Services</h4> {/* Changed text color to dark blue */}
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => onOpenForm('site-visit')}
                  className="text-white/80 hover:text-white transition-colors text-left"
                >
                  Site Visit Booking
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onOpenForm('brochure')}
                  className="text-white/80 hover:text-white transition-colors text-left"
                >
                  Download Brochure
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onOpenForm('callback')}
                  className="text-white/80 hover:text-white transition-colors text-left"
                >
                  Request Callback
                </button>
              </li>
              <li><a href="#video" className="text-white/80 hover:text-white transition-colors">Virtual Tour</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">EMI Calculator</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Us</h4> {/* Changed text color to dark blue */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <PhoneIcon className="w-5 h-5 text-[#fad643] flex-shrink-0" /> {/* Changed icon color to golden */}
                <div className="text-white/80 text-sm">
                  <a href="tel:+919876543210" className="hover:text-white transition-colors">
                    +91 9324242484
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <EnvelopeIcon className="w-5 h-5 text-[#fad643] flex-shrink-0" /> {/* Changed icon color to golden */}
                <div className="text-white/80 text-sm">
                  <a href="mailto:projects.hometownrealty@gmail.com" className="hover:text-white transition-colors">
                    projects.hometownrealty@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/50 text-sm">
              © 2024 Delta Group Pvt Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">RERA Details</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
