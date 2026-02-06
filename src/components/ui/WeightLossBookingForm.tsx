'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface Location {
  id: string;
  name: string;
  address: string;
}

const locations: Location[] = [
  {
    id: 'tampa',
    name: 'Tampa',
    address: '8019 N. Himes Ave., Suite 200, Tampa, FL 33614',
  },
  {
    id: 'lakeland',
    name: 'Lakeland',
    address: '1818 Harden Blvd, Suite 110, Lakeland, FL 33803',
  },
  {
    id: 'newportrichey',
    name: 'New Port Richey',
    address: '5622 Marine Parkway, Suite 8, New Port Richey, 34652',
  },
];

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  preferredDate: string;
  preferredTime: string;
  currentWeight: string;
  goalWeight: string;
  notes: string;
}

export function WeightLossBookingForm() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    preferredDate: '',
    preferredTime: '',
    currentWeight: '',
    goalWeight: '',
    notes: '',
  });

  const handleLocationSelect = (location: Location) => {
    setSelectedLocation(location);
    setFormData((prev) => ({ ...prev, location: location.name }));
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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Prepare data for webhook
      const webhookData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        location: formData.location,
        preferredDate: formData.preferredDate,
        preferredTime: formData.preferredTime,
        currentWeight: formData.currentWeight,
        goalWeight: formData.goalWeight,
        notes: formData.notes,
        program: 'Weight Loss',
        timestamp: new Date().toISOString(),
      };

      // Send to webhook
      const response = await fetch(
        'https://services.leadconnectorhq.com/hooks/frOF5AUZh2Y3wYJ8wlQw/webhook-trigger/a71bc017-5d5a-4e54-b07c-35e7887106bd',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(webhookData),
        }
      );

      if (response.ok) {
        // Store minimal data in localStorage for success page
        localStorage.setItem(
          'weightLossBooking',
          JSON.stringify({
            firstName: formData.firstName,
            location: formData.location,
            timestamp: new Date().toISOString(),
          })
        );

        // Redirect to success page
        router.push('/weight-loss/success');
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert(
        'There was an error submitting your request. Please try again or call us directly.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Step Indicator */}
      <div className="flex items-center justify-center mb-8 gap-4">
        <div className="flex items-center">
          <div
            className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-sm sm:text-base ${
              currentStep === 1
                ? 'bg-blue-600 text-white'
                : 'bg-green-500 text-white'
            }`}
          >
            {currentStep > 1 ? '✓' : '1'}
          </div>
          <span
            className={`ml-2 text-sm sm:text-base font-medium ${
              currentStep === 1 ? 'text-gray-900' : 'text-gray-500'
            }`}
          >
            Select Location
          </span>
        </div>
        <div className="w-12 sm:w-16 h-1 bg-gray-300"></div>
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
            className={`ml-2 text-sm sm:text-base font-medium ${
              currentStep === 2 ? 'text-gray-900' : 'text-gray-500'
            }`}
          >
            Your Information
          </span>
        </div>
      </div>

      {/* Step 1: Location Selection */}
      {currentStep === 1 && (
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
            Choose Your Preferred Location
          </h2>
          <div className="grid gap-4 mb-6">
            {locations.map((location) => (
              <button
                key={location.id}
                onClick={() => handleLocationSelect(location)}
                className={`text-left p-6 rounded-xl border-2 transition-all duration-200 ${
                  selectedLocation?.id === location.id
                    ? 'border-blue-600 bg-blue-50 shadow-md'
                    : 'border-gray-200 hover:border-blue-300 bg-white'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{location.name}</h3>
                    <p className="text-gray-600 text-sm">{location.address}</p>
                  </div>
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      selectedLocation?.id === location.id
                        ? 'border-blue-600 bg-blue-600'
                        : 'border-gray-300'
                    }`}
                  >
                    {selectedLocation?.id === location.id && (
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
          <button
            onClick={handleNext}
            disabled={!selectedLocation}
            className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-200 ${
              selectedLocation
                ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            Continue to Form →
          </button>
        </div>
      )}

      {/* Step 2: Patient Information Form */}
      {currentStep === 2 && (
        <div>
          <button
            onClick={handlePrevious}
            className="mb-6 text-blue-600 hover:text-blue-700 font-medium flex items-center"
          >
            <svg
              className="w-5 h-5 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Location
          </button>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
            <p className="text-sm font-medium text-gray-800">
              <strong>Selected Location:</strong> {selectedLocation?.name}
            </p>
            <p className="text-sm text-gray-600">
              {selectedLocation?.address}
            </p>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
            Tell Us About Yourself
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Personal Information */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="John"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Doe"
                />
              </div>
            </div>

            {/* Contact Information */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="(813) 555-0100"
                />
              </div>
            </div>

            {/* Appointment Preferences */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="preferredDate"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Preferred Date *
                </label>
                <input
                  type="date"
                  id="preferredDate"
                  name="preferredDate"
                  required
                  value={formData.preferredDate}
                  onChange={handleInputChange}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>
              <div>
                <label
                  htmlFor="preferredTime"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Preferred Time *
                </label>
                <select
                  id="preferredTime"
                  name="preferredTime"
                  required
                  value={formData.preferredTime}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      preferredTime: e.target.value,
                    }))
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                >
                  <option value="">Select a time</option>
                  <option value="morning">Morning (8am - 12pm)</option>
                  <option value="afternoon">Afternoon (12pm - 4pm)</option>
                  <option value="evening">Evening (4pm - 6pm)</option>
                </select>
              </div>
            </div>

            {/* Weight Information */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="currentWeight"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Current Weight (lbs) *
                </label>
                <input
                  type="number"
                  id="currentWeight"
                  name="currentWeight"
                  required
                  value={formData.currentWeight}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="e.g., 200"
                  min="50"
                  max="500"
                />
              </div>
              <div>
                <label
                  htmlFor="goalWeight"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Goal Weight (lbs) *
                </label>
                <input
                  type="number"
                  id="goalWeight"
                  name="goalWeight"
                  required
                  value={formData.goalWeight}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="e.g., 170"
                  min="50"
                  max="500"
                />
              </div>
            </div>

            {/* Additional Notes */}
            <div>
              <label
                htmlFor="notes"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Additional Information (Optional)
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={4}
                value={formData.notes}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none"
                placeholder="Any medical conditions, medications, or other information we should know..."
              />
            </div>

            {/* Important Notice */}
            <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <p className="text-sm font-semibold text-gray-900 mb-1">
                    Important Notice
                  </p>
                  <p className="text-sm text-gray-700">
                    This is a consultation request, not a confirmed appointment.
                    Our clinic will contact you within 24 hours to confirm your
                    appointment time and answer any questions.
                  </p>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-200 ${
                isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl'
              } text-white`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Submitting...
                </span>
              ) : (
                'Submit Request'
              )}
            </button>

            <p className="text-xs text-center text-gray-500 mt-4">
              By submitting this form, you agree to be contacted by Glory
              Regenerative Center regarding your consultation request.
            </p>
          </form>
        </div>
      )}
    </div>
  );
}
