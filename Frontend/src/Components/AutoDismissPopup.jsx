import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdvancedPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Show popup after a brief delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  const acceptAndContinue = () => {
    // Close popup and stay on page
    setIsVisible(false);
  };

  const declineAndExit = () => {
    // Close popup and navigate away (you can change this to wherever you want)
    setIsVisible(false);
    navigate('/');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full overflow-hidden transform transition-all animate-fadeIn">
        {/* Header with green gradient */}
        <div className="bg-gradient-to-r from-green-600 to-green-400 p-4">
          <h3 className="text-xl font-bold text-white">Our Natural Promise</h3>
        </div>
        
        {/* Content area */}
        <div className="p-6">
          <div className="flex items-start mb-4">
            <div className="bg-green-100 p-2 rounded-full flex-shrink-0 mt-1">
              <svg className="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="ml-3 text-gray-700">
              <strong className="block text-gray-900 mb-1">100% Natural, Chemical-Free Products</strong>
              We proudly offer premium wheat, rice, and flour cultivated using traditional farming methods to preserve authentic flavor and nutritional value.
            </p>
          </div>
          
          <div className="flex items-start">
            <div className="bg-green-100 p-2 rounded-full flex-shrink-0 mt-1">
              <svg className="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <p className="ml-3 text-gray-700">
              <strong className="block text-gray-900 mb-1">Satisfaction Guaranteed</strong>
              We stand behind our quality with a comprehensive exchange policy for your complete satisfaction.
            </p>
          </div>
          
          <div className="mt-6 border-t pt-6 flex flex-col sm:flex-row sm:justify-between gap-3">
            <button
              onClick={declineAndExit}
              className="w-full sm:w-auto px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
            >
              No thanks
            </button>
            <button
              onClick={acceptAndContinue}
              className="w-full sm:w-auto px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors font-medium"
            >
              I agree, continue to site
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedPopup;