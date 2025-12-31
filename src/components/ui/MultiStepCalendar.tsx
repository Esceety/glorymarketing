'use client';

import { useState, useEffect } from 'react';

interface Location {
  id: string;
  name: string;
  address: string;
  iframeUrl: string;
  iframeId: string;
}

const locations: Location[] = [
  {
    id: 'tampa',
    name: 'Tampa',
    address: '8019 N. Himes Ave., Tampa, FL 33614',
    iframeUrl:
      'https://link.esceety-us.com/widget/booking/gCPl71CVES7GLObW5Dam',
    iframeId: 'gCPl71CVES7GLObW5Dam_1765900295400',
  },
  {
    id: 'lakeland',
    name: 'Lakeland',
    address: '1818 Harden Blvd, Lakeland, FL 33803',
    iframeUrl:
      'https://link.esceety-us.com/widget/booking/5YhjHb59G10dCmhnZZko',
    iframeId: '5YhjHb59G10dCmhnZZko_1765900315932',
  },
  {
    id: 'newportrichey',
    name: 'New Port Richey',
    address: '5622 Marine Parkway, New Port Richey, FL 34652',
    iframeUrl:
      'https://link.esceety-us.com/widget/booking/EuY0MqMtvTYQuVsxwqQv',
    iframeId: 'EuY0MqMtvTYQuVsxwqQv_1765900305715',
  },
];

export function MultiStepCalendar() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null
  );
  const [userFormData, setUserFormData] = useState<any>(null);

  useEffect(() => {
    // Load the calendar embed script
    const script = document.createElement('script');
    script.src = 'https://link.esceety-us.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  useEffect(() => {
    // Check URL parameters first (in case redirected from form with data)
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const firstName =
        urlParams.get('first_name') || urlParams.get('firstName');
      const lastName = urlParams.get('last_name') || urlParams.get('lastName');
      const email = urlParams.get('email');
      const phone = urlParams.get('phone') || urlParams.get('phoneNumber');

      if (firstName || email || phone) {
        const urlData = {
          firstName: firstName || '',
          lastName: lastName || '',
          email: email || '',
          phone: phone || '',
          timestamp: new Date().toISOString(),
        };
        localStorage.setItem('userFormData', JSON.stringify(urlData));
        setUserFormData(urlData);
        return;
      }
    }

    // Read stored form data from localStorage
    try {
      const storedData = localStorage.getItem('userFormData');
      if (storedData) {
        const data = JSON.parse(storedData);
        // Check if data is recent (within last 24 hours)
        const timestamp = new Date(data.timestamp);
        const now = new Date();
        const hoursDiff =
          (now.getTime() - timestamp.getTime()) / (1000 * 60 * 60);

        if (hoursDiff < 24) {
          setUserFormData(data);
        } else {
          // Clear old data
          localStorage.removeItem('userFormData');
        }
      }
    } catch (error) {
      console.error('Error reading form data:', error);
    }
  }, []);

  const getIframeUrlWithParams = (baseUrl: string) => {
    if (!userFormData) return baseUrl;

    const params = new URLSearchParams();

    // Add available data as URL parameters
    if (userFormData.firstName)
      params.append('first_name', userFormData.firstName);
    if (userFormData.lastName)
      params.append('last_name', userFormData.lastName);
    if (userFormData.email) params.append('email', userFormData.email);
    if (userFormData.phone) params.append('phone', userFormData.phone);

    const queryString = params.toString();
    return queryString ? `${baseUrl}?${queryString}` : baseUrl;
  };

  const handleLocationSelect = (location: Location) => {
    setSelectedLocation(location);
  };

  const handleNext = () => {
    if (selectedLocation && currentStep === 1) {
      setCurrentStep(2);
    }
  };

  const handlePrevious = () => {
    if (currentStep === 2) {
      setCurrentStep(1);
    }
  };

  return (
    <div className="w-full">
      {/* Step Indicator */}
      <div className="flex items-center justify-center mb-8 gap-4">
        <div className="flex items-center">
          <div
            className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-sm sm:text-base ${
              currentStep === 1
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-600'
            }`}
          >
            1
          </div>
          <span
            className={`ml-2 sm:ml-3 font-semibold text-sm sm:text-base ${
              currentStep === 1 ? 'text-gray-900' : 'text-gray-400'
            }`}
          >
            Location
          </span>
        </div>

        <div className="w-8 sm:w-12 h-0.5 bg-gray-300"></div>

        <div className="flex items-center">
          <div
            className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-sm sm:text-base ${
              currentStep === 2
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-600'
            }`}
          >
            2
          </div>
          <span
            className={`ml-2 sm:ml-3 font-semibold text-sm sm:text-base ${
              currentStep === 2 ? 'text-gray-900' : 'text-gray-400'
            }`}
          >
            Details and Finish
          </span>
        </div>
      </div>

      {/* Step Content */}
      <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-8 shadow-sm">
        {currentStep === 1 && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                Location
              </h2>
            </div>

            <p className="text-sm sm:text-base text-gray-600 mb-4">
              Choose your preferred location to book your appointment:
            </p>

            <div className="space-y-3">
              {locations.map((location) => (
                <label
                  key={location.id}
                  className={`flex items-start p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    selectedLocation?.id === location.id
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="location"
                    value={location.id}
                    checked={selectedLocation?.id === location.id}
                    onChange={() => handleLocationSelect(location)}
                    className="mt-1 w-4 h-4 text-blue-600 focus:ring-blue-500"
                  />
                  <div className="ml-3 flex-1">
                    <div className="font-semibold text-gray-900 text-sm sm:text-base">
                      {location.name}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 mt-1">
                      {location.address}
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </div>
        )}

        {currentStep === 2 && selectedLocation && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                  Book Your Appointment
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  Location:{' '}
                  <span className="font-semibold">{selectedLocation.name}</span>
                </p>
              </div>
            </div>

            <div className="rounded-lg w-full" style={{ minHeight: '800px' }}>
              <iframe
                key={selectedLocation.id}
                src={getIframeUrlWithParams(selectedLocation.iframeUrl)}
                style={{
                  width: '100%',
                  height: '800px',
                  minHeight: '800px',
                  border: 'none',
                  overflow: 'hidden',
                }}
                scrolling="no"
                id={selectedLocation.iframeId}
              />
              {userFormData && (
                <p className="text-xs text-gray-500 mt-2 text-center">
                  ✓ Your information has been pre-filled
                </p>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center mt-6 gap-4">
        <button
          onClick={handlePrevious}
          disabled={currentStep === 1}
          className={`px-6 py-2.5 rounded-lg font-semibold transition-all text-sm sm:text-base ${
            currentStep === 1
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50'
          }`}
        >
          Previous
        </button>

        {currentStep === 1 && (
          <button
            onClick={handleNext}
            disabled={!selectedLocation}
            className={`px-6 py-2.5 rounded-lg font-semibold transition-all text-sm sm:text-base ${
              selectedLocation
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}
