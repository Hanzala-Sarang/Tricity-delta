'use client';

import React from 'react';

interface LoaderProps {
  show: boolean; // Controls the visibility of the loader
}

export default function Loader({ show}: LoaderProps) {
  if (!show) {
    return null; // Don't render anything if show is false
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white bg-opacity-70 backdrop-blur-sm">
      <div className="flex flex-col items-center text-white">
        {/* Logo Image */}
        {/* Replace '/path/to/your/logo.png' with the actual path to your website's logo */}
        <img 
          src="/logo.png" // Assuming your logo is in the public directory
          alt="Website Logo" 
          className="w-40 h-20 mb-6 animate-pulse-fade" // Added a subtle pulse-fade animation
        />

        {/* Spinner animation */}
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white mb-4"></div>
      </div>

      {/* Custom CSS for a subtle pulse-fade animation on the logo */}
      <style jsx>{`
        @keyframes pulse-fade {
          0% { opacity: 0.7; transform: scale(0.95); }
          50% { opacity: 1; transform: scale(1); }
          100% { opacity: 0.7; transform: scale(0.95); }
        }
        .animate-pulse-fade {
          animation: pulse-fade 2s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}
