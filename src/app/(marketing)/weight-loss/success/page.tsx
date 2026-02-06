'use client';

import { useEffect, useRef, useState } from 'react';
import { Testimonials } from '@/components/ui/Testimonials';

export default function WeightLossSuccessPage() {
  const hasTrackedRef = useRef(false);
  const [bookingData, setBookingData] = useState<{
    firstName: string;
    location: string;
  } | null>(null);

  useEffect(() => {
    // Fire Lead event only once when page mounts
    if (!hasTrackedRef.current && typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Lead');
      hasTrackedRef.current = true;
    }

    // Retrieve booking data from localStorage
    try {
      const stored = localStorage.getItem('weightLossBooking');
      const userFormStored = localStorage.getItem('userFormData');
      
      if (stored) {
        const data = JSON.parse(stored);
        setBookingData(data);
      } else if (userFormStored) {
        // Fallback to userFormData if weightLossBooking doesn't exist
        const data = JSON.parse(userFormStored);
        setBookingData({
          firstName: data.firstName || '',
          location: 'Tampa Bay Area',
        });
      }
    } catch (error) {
      console.error('Error reading booking data:', error);
    }
  }, []);

  return (
    <div className="space-y-16 py-12">
      {/* Hero Success Message */}
      <section className="text-center max-w-3xl mx-auto">
        <div className="mb-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <svg
              className="w-12 h-12 text-green-600"
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
          </div>
        </div>
        <h1 className="text-4xl lg:text-5xl font-bold mb-6">
          {bookingData?.firstName
            ? `Thank You, ${bookingData.firstName}!`
            : 'Request Submitted Successfully!'}
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          We&apos;ve received your consultation request for our medical weight
          loss program
          {bookingData?.location && ` at our ${bookingData.location} location`}
          . Please note that{' '}
          <strong className="text-gray-900">
            this is not yet a confirmed appointment
          </strong>{' '}
          until our clinic contacts you directly.
        </p>
      </section>

      {/* What Happens Next */}
      <section className="max-w-3xl mx-auto bg-blue-50 border border-blue-200 rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-6">What Happens Next</h2>
        <ol className="space-y-4">
          <li className="flex items-start">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
              1
            </span>
            <div>
              <p className="text-lg text-gray-700">
                Our team will review your weight loss consultation request
                within 24 hours
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
              2
            </span>
            <div>
              <p className="text-lg text-gray-700">
                You&apos;ll receive a confirmation call or text message from our
                medical staff
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
              3
            </span>
            <div>
              <p className="text-lg text-gray-700">
                Your final appointment time will be confirmed with all the
                details you need
              </p>
            </div>
          </li>
        </ol>
      </section>

      {/* Check Your Inbox */}
      <section className="max-w-3xl mx-auto bg-yellow-50 border-2 border-yellow-400 rounded-lg p-6">
        <div className="flex items-start gap-4">
          <svg
            className="w-8 h-8 text-yellow-600 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <div>
            <h3 className="font-bold text-lg mb-2">Check Your Email & Phone</h3>
            <p className="text-gray-700">
              We&apos;ll send you a confirmation email shortly. Please check
              your spam folder if you don&apos;t see it. Keep your phone nearby
              as we may call or text to confirm your appointment.
            </p>
          </div>
        </div>
      </section>

      {/* Important Information About Your Consultation */}
      <section className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">
          About Your Weight Loss Consultation
        </h2>
        <div className="bg-white border rounded-lg p-6 space-y-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-bold text-lg mb-2 flex items-center">
              <svg
                className="w-5 h-5 text-blue-600 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
              What to Bring
            </h3>
            <ul className="text-sm text-gray-700 space-y-1 ml-7">
              <li>• Photo ID (driver&apos;s license or state ID)</li>
              <li>• List of current medications and supplements</li>
              <li>• Medical history information</li>
              <li>• Any questions you have about the program</li>
            </ul>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h3 className="font-bold text-lg mb-2 flex items-center">
              <svg
                className="w-5 h-5 text-green-600 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              What&apos;s Included
            </h3>
            <ul className="text-sm text-gray-700 space-y-1 ml-7">
              <li>• Complete medical evaluation (30-45 minutes)</li>
              <li>• Review of weight loss goals and expectations</li>
              <li>• Discussion of FDA-approved medication options</li>
              <li>• Personalized treatment plan</li>
              <li>• Nutrition and lifestyle guidance</li>
            </ul>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <h3 className="font-bold text-lg mb-2 flex items-center">
              <svg
                className="w-5 h-5 text-purple-600 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
              Your Special Offer
            </h3>
            <p className="text-sm text-gray-700 ml-7">
              As a new patient, you&apos;ll receive{' '}
              <strong className="text-purple-800">
                50% off your first month
              </strong>{' '}
              of our comprehensive medical weight loss program. This offer will
              be discussed and applied during your consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Preparation Tips */}
      <section className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Prepare for Success</h2>
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-6">
          <p className="text-gray-700 mb-4">
            To get the most out of your consultation, consider these tips:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span>
                Write down your weight loss goals and any questions you have
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span>
                Track what you typically eat for a few days before your visit
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span>
                Note any previous weight loss attempts and what worked/didn&apos;t
                work
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span>
                Be ready to discuss your health history and current medications
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p
            className="font-semibold uppercase tracking-wide text-sm mb-2"
            style={{ color: '#078AAD' }}
          >
            Patient Reviews
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            What Our Patients Say
          </h2>
        </div>
        <Testimonials />
      </section>

      {/* Contact Information */}
      <section className="max-w-3xl mx-auto text-center bg-white border rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Need to Contact Us?</h2>
        <p className="text-gray-600 mb-4">
          If you have any questions or need to make changes to your request,
          please don&apos;t hesitate to reach out.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+18135551234"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            Call Us
          </a>
          <a
            href="mailto:info@gloryregenerativemd.com"
            className="inline-flex items-center justify-center px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Email Us
          </a>
        </div>
      </section>
    </div>
  );
}
