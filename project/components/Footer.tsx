'use client';

import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid';

interface FooterProps {
  onOpenForm: (formType: string) => void;
}

export default function Footer({ onOpenForm }: FooterProps) {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              Premium<span className="text-[#4B7B87]">Homes</span>
            </h3>
            <p className="text-white/80 leading-relaxed">
              Creating exceptional living experiences with luxury, comfort, and innovation at the heart of every project.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-[#4B7B87] transition-colors">
                <span className="sr-only">Facebook</span>
                <div className="w-6 h-6">📘</div>
              </a>
              <a href="#" className="text-white/60 hover:text-[#4B7B87] transition-colors">
                <span className="sr-only">Instagram</span>
                <div className="w-6 h-6">📸</div>
              </a>
              <a href="#" className="text-white/60 hover:text-[#4B7B87] transition-colors">
                <span className="sr-only">LinkedIn</span>
                <div className="w-6 h-6">💼</div>
              </a>
              <a href="#" className="text-white/60 hover:text-[#4B7B87] transition-colors">
                <span className="sr-only">YouTube</span>
                <div className="w-6 h-6">📺</div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-[#4B7B87]">Quick Links</h4>
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
            <h4 className="text-lg font-semibold text-[#4B7B87]">Services</h4>
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
            <h4 className="text-lg font-semibold text-[#4B7B87]">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPinIcon className="w-5 h-5 text-[#4B7B87] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/80 text-sm">
                    Sales Office: 123 Linking Road,<br />
                    Bandra West, Mumbai - 400050
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <PhoneIcon className="w-5 h-5 text-[#4B7B87] flex-shrink-0" />
                <div className="text-white/80 text-sm">
                  <a href="tel:+919876543210" className="hover:text-white transition-colors">
                    +91 98765 43210
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <EnvelopeIcon className="w-5 h-5 text-[#4B7B87] flex-shrink-0" />
                <div className="text-white/80 text-sm">
                  <a href="mailto:info@premiumhomes.com" className="hover:text-white transition-colors">
                    info@premiumhomes.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/50 text-sm">
              © 2024 Premium Developers Ltd. All rights reserved.
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