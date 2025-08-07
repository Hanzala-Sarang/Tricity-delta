'use client';

import { useState, useEffect, useRef } from 'react';
import { XMarkIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { toast } from 'sonner';
import { CheckCircleIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/solid';
import { IndianRupeeIcon } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  formType: string;
}

interface Country {
  name: { common: string };
  idd: { root?: string; suffixes?: string[] };
  cca2: string;
}

export default function ContactModal({ isOpen, onClose, formType }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    unitInterested: '',
    countryCode: '+91',
    countryFlag: 'in',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [countries, setCountries] = useState<any[]>([]);
  const [isLoadingCountries, setIsLoadingCountries] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Custom CSS for the animating button gradient, injected on component mount.
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes gradient-animation-button {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      .animate-gradient-button {
        background-size: 200% 200%;
        animation: gradient-animation-button 4s ease-in-out infinite;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  useEffect(() => {
    if (isOpen && countries.length === 0) {
      const fetchCountries = async () => {
        try {
          const response = await fetch('https://restcountries.com/v3.1/all?fields=name,idd,cca2');
          if (!response.ok) throw new Error('Failed to fetch country data');
          const data = await response.json();

          const formatted = data
            .filter((country: Country) => country.idd?.root)
            .map((country: Country) => ({
              name: country.name.common,
              code: `${country.idd.root}${country.idd.suffixes?.[0] || ''}`,
              flag: country.cca2.toLowerCase(),
            }))
            .sort((a, b) => a.name.localeCompare(b.name));
          setCountries(formatted);
        } catch (err: any) {
          setError(err.message);
          toast.error('Failed to load country codes.');
        } finally {
          setIsLoadingCountries(false);
        }
      };
      fetchCountries();
    }
  }, [isOpen, countries.length]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (!isOpen) return null;

  const getFormTitle = () => {
    switch (formType) {
      case 'enquiry': return 'General Enquiry';
      case 'callback': return 'Request Call Back';
      case 'brochure': return 'Download Brochure';
      case 'price-breakup': return 'Price Breakup Request';
      case 'floor-plans': return 'Floor Plans Request';
      case 'site-visit': return 'Site Visit Booking';
      case 'location-request': return 'Request Location Map';
      case 'connectivity': return 'Connectivity Overview';
      default: return 'Contact Us';
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setFormData(prev => ({ ...prev, mobile: value }));
  };

  const handleCountryCodeSelect = (code: string, flag: string) => {
    setFormData(prev => ({
      ...prev,
      countryCode: code,
      countryFlag: flag,
    }));
    setIsDropdownOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const submissionData = {
      name: formData.name,
      mobile: `${formData.countryCode}${formData.mobile}`,
      email: formData.email,
      unitInterested: formData.unitInterested,
      formType: formType,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      if (!response.ok) {
        throw new Error('Failed to send inquiry.');
      }

      toast.success('Thank you! We will get back to you soon.');
      setFormData({
        name: '',
        mobile: '',
        email: '',
        unitInterested: '',
        countryCode: '+91',
        countryFlag: 'in',
      });
      onClose();
    } catch (error: any) {
      console.error('Form submission error:', error);
      toast.error(error.message || 'Form submission failed.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto font-sans">
      <div className="flex min-h-screen items-center justify-center px-2 py-2">
        <div className="fixed inset-0 bg-black/60" onClick={onClose}></div>

        {/* Modal container with grid layout (no gradient animation) */}
        <div
          className="
            relative bg-white rounded-lg shadow-2xl w-full max-w-sm sm:max-w-md lg:max-w-3xl z-50 overflow-hidden
            grid grid-cols-1 grid-rows-[auto_auto] gap-4
            sm:grid-rows-1 sm:grid-cols-[1fr_2fr_1fr] sm:gap-0
          "
        >
          
          {/* We Promise Section: visible only on sm+ */}
          <div
            className="hidden sm:flex flex-col items-center justify-center bg-gray-100 p-2 text-center text-gray-800 min-h-[180px]"
          >
            <h3 className="text-base font-bold border-b-2 border-[#4B7B87] pb-1 mb-1">We Promise</h3>
            <div className="flex flex-row sm:flex-row lg:flex-col justify-around items-center w-full space-x-1 lg:space-x-0 lg:space-y-1">
              <div className="flex flex-col items-center text-center w-1/3 sm:w-auto">
                <PhoneIcon className="w-5 h-5 text-blue-500" />
                <p className="mt-0.5 text-xs font-medium">Instant Call Back</p>
              </div>
              <div className="flex flex-col items-center text-center w-1/3 sm:w-auto">
                <MapPinIcon className="w-5 h-5 text-red-500" />
                <p className="mt-0.5 text-xs font-medium">Free Site Visit</p>
              </div>
              <div className="flex flex-col items-center text-center w-1/3 sm:w-auto">
                <IndianRupeeIcon className="w-5 h-5 text-green-500" />
                <p className="mt-0.5 text-xs font-medium">Unmatched Price</p>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div
            className="p-3 sm:p-4 md:p-6 flex flex-col justify-center min-h-[180px]"
          >
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg sm:text-xl font-bold text-[#000000]">{getFormTitle()}</h2>
              <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-lg">
                <XMarkIcon className="w-5 h-5 text-[#3C3C3C]" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-2">
              <div>
                <label htmlFor="name" className="block mb-1 text-xs font-medium text-gray-700">Full Name *</label>
                <input
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className="w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-1 focus:ring-[#4B7B87] text-sm"
                />
              </div>

              <div>
                <label htmlFor="mobile" className="block mb-1 text-xs font-medium text-gray-700">Mobile Number *</label>
                <div className="flex gap-1">
                  <div className="relative" ref={dropdownRef}>
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="flex items-center px-2 py-1.5 border rounded-lg text-xs justify-between w-20"
                    >
                      <img
                        src={`https://flagcdn.com/w40/${formData.countryFlag}.png`}
                        alt="Flag"
                        className="w-4 h-3 mr-1"
                      />
                      {formData.countryCode}
                      {isDropdownOpen ? (
                        <ChevronUpIcon className="w-3 h-3" />
                      ) : (
                        <ChevronDownIcon className="w-3 h-3" />
                      )}
                    </button>
                    {isDropdownOpen && (
                      <div className="absolute z-10 bg-white border rounded-lg shadow-md max-h-52 overflow-y-auto mt-1 w-44">
                        {isLoadingCountries ? (
                          <div className="p-2 text-center text-xs">Loading...</div>
                        ) : error ? (
                          <div className="p-2 text-center text-xs text-red-500">{error}</div>
                        ) : (
                          countries.map((country) => (
                            <div
                              key={country.code}
                              onClick={() => handleCountryCodeSelect(country.code, country.flag)}
                              className="flex items-center px-2 py-1 hover:bg-gray-100 cursor-pointer text-xs"
                            >
                              <img
                                src={`https://flagcdn.com/w40/${country.flag}.png`}
                                alt={country.name}
                                className="w-4 h-3 mr-2"
                              />
                              <span>{country.name} ({country.code})</span>
                            </div>
                          ))
                        )}
                      </div>
                    )}
                  </div>
                  <input
                    id="mobile"
                    required
                    type="tel"
                    value={formData.mobile}
                    onChange={handleMobileChange}
                    placeholder="Your mobile number"
                    className="flex-1 px-3 py-2 border rounded-lg shadow-sm focus:ring-1 focus:ring-[#4B7B87] text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block mb-1 text-xs font-medium text-gray-700">Email Address *</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-1 focus:ring-[#4B7B87] text-sm"
                />
              </div>

              {(formType === 'enquiry' || formType === 'price-breakup') && (
                <div>
                  <label htmlFor="unitInterested" className="block mb-1 text-xs font-medium text-gray-700">Unit Interested In</label>
                  <select
                    id="unitInterested"
                    value={formData.unitInterested}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-1 focus:ring-[#4B7B87] text-sm"
                  >
                    <option value="">Select unit type</option>
                    <option value="1bhk">1 BHK</option>
                    <option value="2bhk">2 BHK</option>
                    <option value="3bhk">3 BHK</option>
                  </select>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full text-black font-semibold py-2.5 rounded-lg text-sm transition bg-gradient-to-r from-[#4B7B87] via-[#5C8C9A] to-white animate-gradient-button hover:scale-[1.01] shadow-lg"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Request'}
              </button>
            </form>

            <p className="text-[10px] text-center mt-2 text-gray-500">
              We respect your privacy. Your data will not be shared.
            </p>
          </div>
          {/* Get Information Section: always visible */}
          <div
            className="bg-[#4B7B87] p-2 text-white flex flex-col items-center justify-center min-h-[180px]"
          >
            <h3 className="text-lg font-bold text-center border-b-2 border-white pb-1 mb-1">
              Get Information On Availabilities
            </h3>
            <ul className="flex flex-row sm:flex-row lg:flex-col justify-around items-center w-full space-x-1 lg:space-x-0 lg:space-y-1">
              <li className="flex flex-col items-center text-center w-1/3 sm:w-auto text-sm font-medium">
                <CheckCircleIcon className="w-5 h-5 mr-0 text-white" />
                <span className="mt-0.5">Available Units</span>
              </li>
              <li className="flex flex-col items-center text-center w-1/3 sm:w-auto text-sm font-medium">
                <CheckCircleIcon className="w-5 h-5 mr-0 text-white" />
                <span className="mt-0.5">Payment Plan</span>
              </li>
              <li className="flex flex-col items-center text-center w-1/3 sm:w-auto text-sm font-medium">
                <CheckCircleIcon className="w-5 h-5 mr-0 text-white" />
                <span className="mt-0.5">Floor Plans</span>
              </li>
            </ul>
          </div>
        </div>
        
      </div>
    </div>
  );
}
