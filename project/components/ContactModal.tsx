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
      mobile: `${formData.countryCode}${formData.mobile}`, // Combine country code and mobile
      email: formData.email,
      unitInterested: formData.unitInterested,
      formType: formType, // Pass the formType from props
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
      <div className="flex min-h-screen items-center justify-center px-2 py-6">
        <div className="fixed inset-0 bg-black/60 " onClick={onClose}></div>

        <div className="relative bg-white rounded-lg shadow-2xl w-full max-w-4xl z-50 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr]">
            {/* Left Column - We Promise */}
            {/* On mobile (sm:), content will be a row; on larger screens (lg:), it will be a column */}
            <div className="flex flex-col items-center justify-center bg-gray-100 p-6 text-center text-gray-800">
              <h3 className="text-xl font-bold border-b-2 border-[#4B7B87] pb-2 mb-4">We Promise</h3>
              <div className="flex flex-row sm:flex-row lg:flex-col justify-around sm:justify-center items-center w-full space-x-4 sm:space-x-6 lg:space-x-0 lg:space-y-6">
                <div className="flex flex-col items-center text-center w-1/3 sm:w-auto">
                  <PhoneIcon className="w-8 h-8 text-blue-500" />
                  <p className="mt-1 text-sm font-medium">Instant Call Back</p>
                </div>
                <div className="flex flex-col items-center text-center w-1/3 sm:w-auto">
                  <MapPinIcon className="w-8 h-8 text-red-500" />
                  <p className="mt-1 text-sm font-medium">Free Site Visit</p>
                </div>
                <div className="flex flex-col items-center text-center w-1/3 sm:w-auto">
                  <IndianRupeeIcon className="w-8 h-8 text-green-500" />
                  <p className="mt-1 text-sm font-medium">Unmatched Price</p>
                </div>
              </div>
            </div>

            {/* Center Column - Form */}
            <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-center">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-[#000000]">{getFormTitle()}</h2>
                <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
                  <XMarkIcon className="w-6 h-6 text-[#3C3C3C]" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">Full Name *</label>
                  <input
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-1 focus:ring-[#4B7B87]"
                  />
                </div>

                <div>
                  <label htmlFor="mobile" className="block mb-2 text-sm font-medium text-gray-700">Mobile Number *</label>
                  <div className="flex gap-2">
                    <div className="relative" ref={dropdownRef}>
                      <button
                        type="button"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="flex items-center px-3 py-2 border rounded-lg text-sm justify-between w-24"
                      >
                        <img
                          src={`https://flagcdn.com/w40/${formData.countryFlag}.png`}
                          alt="Flag"
                          className="w-5 h-4 mr-1"
                        />
                        {formData.countryCode}
                        {isDropdownOpen ? <ChevronUpIcon className="w-4 h-4" /> : <ChevronDownIcon className="w-4 h-4" />}
                      </button>
                      {isDropdownOpen && (
                        <div className="absolute z-10 bg-white border rounded-lg shadow-md max-h-60 overflow-y-auto mt-2 w-52">
                          {isLoadingCountries ? (
                            <div className="p-3 text-center">Loading...</div>
                          ) : error ? (
                            <div className="p-3 text-center text-red-500">{error}</div>
                          ) : (
                            countries.map((country) => (
                              <div
                                key={country.code}
                                onClick={() => handleCountryCodeSelect(country.code, country.flag)}
                                className="flex items-center px-3 py-2 hover:bg-gray-100 cursor-pointer"
                              >
                                <img
                                  src={`https://flagcdn.com/w40/${country.flag}.png`}
                                  alt={country.name}
                                  className="w-5 h-4 mr-2"
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
                      className="flex-1 px-4 py-3 border rounded-lg shadow-sm focus:ring-1 focus:ring-[#4B7B87]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Email Address *</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-1 focus:ring-[#4B7B87]"
                  />
                </div>

                {(formType === 'enquiry' || formType === 'price-breakup') && (
                  <div>
                    <label htmlFor="unitInterested" className="block mb-2 text-sm font-medium text-gray-700">Unit Interested In</label>
                    <select
                      id="unitInterested"
                      value={formData.unitInterested}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-1 focus:ring-[#4B7B87]"
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
                  className="w-full bg-[#4B7B87] text-white font-semibold py-3 rounded-lg hover:bg-[#5C8C9A] transition"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Request'}
                </button>
              </form>

              <p className="text-xs text-center mt-4 text-gray-500">
                We respect your privacy. Your data will not be shared.
              </p>
            </div>

            {/* Right Column - Get Information On Availabilities */}
            {/* On mobile (sm:), content will be a row; on larger screens (lg:), it will be a column */}
            <div className="flex flex-col items-center justify-center bg-[#4B7B87] p-6 text-white">
              <h3 className="text-2xl font-bold text-center border-b-2 border-white pb-2 mb-4">Get Information On Availabilities</h3>
              <ul className="flex flex-row sm:flex-row lg:flex-col justify-around sm:justify-center items-center w-full space-x-4 sm:space-x-6 lg:space-x-0 lg:space-y-4">
                <li className="flex flex-col items-center text-center w-1/3 sm:w-auto text-lg font-medium">
                  <CheckCircleIcon className="w-6 h-6 mr-0 sm:mr-3 text-white" />
                  <span className="mt-1">Available Units</span>
                </li>
                <li className="flex flex-col items-center text-center w-1/3 sm:w-auto text-lg font-medium">
                  <CheckCircleIcon className="w-6 h-6 mr-0 sm:mr-3 text-white" />
                  <span className="mt-1">Payment Plan</span>
                </li>
                <li className="flex flex-col items-center text-center w-1/3 sm:w-auto text-lg font-medium">
                  <CheckCircleIcon className="w-6 h-6 mr-0 sm:mr-3 text-white" />
                  <span className="mt-1">Floor Plans</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
