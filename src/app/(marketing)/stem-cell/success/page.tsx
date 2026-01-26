'use client';

import { useEffect, useRef } from 'react';
import { Testimonials } from '@/components/ui/Testimonials';

export default function StemCellSuccessPage() {
  const hasTrackedRef = useRef(false);

  useEffect(() => {
    // Fire Lead event only once when page mounts
    if (!hasTrackedRef.current && typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Lead');
      hasTrackedRef.current = true;
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
          Request Submitted! We&apos;ll Confirm Your Consultation Shortly
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          We&apos;ve received your appointment request for a stem cell therapy
          consultation. Please note that{' '}
          <strong className="text-gray-900">this is not yet confirmed</strong>{' '}
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
                Our team will review your stem cell therapy consultation request
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
                staff
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

      {/* Important Information About Your Consultation */}
      <section className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">
          About Your Stem Cell Therapy Consultation
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
              What You&apos;ll Learn
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>
                  How bone marrow, umbilical, and exosome stem cell therapies
                  work for orthopedic conditions
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>
                  Whether stem cell therapy is appropriate for your specific
                  pain condition
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>
                  Treatment options, expected outcomes, and recovery timeline
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>
                  FDA compliance and Florida legal requirements (House Bill
                  1617)
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <h3 className="font-bold text-lg mb-2 flex items-center">
              <svg
                className="w-5 h-5 text-yellow-600 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              Important Reminder
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed italic">
              As required by Florida law: Stem cell therapies performed at Glory
              Regenerative Center have not yet been approved by the United
              States Food and Drug Administration. You are encouraged to consult
              with your primary care provider before undergoing any stem cell
              therapy.
            </p>
          </div>
        </div>
      </section>

      {/* Before Your Visit */}
      <section className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Before Your Consultation</h2>
        <div className="bg-white border rounded-lg p-6">
          <p className="text-gray-600 mb-4 leading-relaxed">
            To make the most of your stem cell therapy consultation:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 mt-1">•</span>
              <span className="text-gray-700">
                Arrive 10–15 minutes early to complete any necessary paperwork
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 mt-1">•</span>
              <span className="text-gray-700">
                Bring a list of current medications, supplements, and any prior
                treatments
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 mt-1">•</span>
              <span className="text-gray-700">
                If available, bring recent imaging or test results related to
                your condition
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 mt-1">•</span>
              <span className="text-gray-700">
                Prepare questions about stem cell therapy options, costs, and
                expected outcomes
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 mt-1">•</span>
              <span className="text-gray-700">
                Wear comfortable clothing that allows easy access to the area of
                pain
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Your $100 Voucher Details */}
      <section className="max-w-3xl mx-auto bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-4">
          Your $100 Consultation Voucher
        </h2>
        <div className="space-y-3">
          <div className="flex items-start">
            <svg
              className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-gray-700">
              <strong>Full health history consultation</strong> — normally
              valued at $450
            </p>
          </div>
          <div className="flex items-start">
            <svg
              className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-gray-700">
              <strong>Comprehensive evaluation</strong> of your orthopedic
              condition
            </p>
          </div>
          <div className="flex items-start">
            <svg
              className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-gray-700">
              <strong>Personalized treatment plan</strong> for stem cell therapy
              options
            </p>
          </div>
          <div className="bg-white rounded-lg p-4 mt-4">
            <p className="text-center text-sm text-gray-600">
              You&apos;re one of only{' '}
              <strong className="text-blue-600">40 patients</strong> to receive
              this limited-time offer
            </p>
          </div>
        </div>
      </section>

      {/* Questions? Contact Us */}
      <section className="max-w-3xl mx-auto bg-gray-50 border rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-6">Questions? Contact Us</h2>
        <p className="text-gray-600 mb-6">
          If you have any questions before your consultation or need to reach
          us, feel free to call any of our locations:
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <h3 className="font-bold mb-2">Tampa</h3>
            <p className="text-sm text-gray-600 mb-1">
              8019 N. Himes Ave., Suite 200
            </p>
            <p className="text-sm text-gray-600 mb-2">Tampa, FL 33614</p>
            <p className="text-blue-600 font-semibold">(813) 932-9798</p>
          </div>
          <div className="text-center">
            <h3 className="font-bold mb-2">Lakeland</h3>
            <p className="text-sm text-gray-600 mb-1">
              1818 Harden Blvd, Suite 110
            </p>
            <p className="text-sm text-gray-600 mb-2">Lakeland, FL 33803</p>
            <p className="text-blue-600 font-semibold">(863) 248-6881</p>
          </div>
          <div className="text-center">
            <h3 className="font-bold mb-2">New Port Richey</h3>
            <p className="text-sm text-gray-600 mb-1">
              5622 Marine Parkway, Suite 8
            </p>
            <p className="text-sm text-gray-600 mb-2">
              New Port Richey, FL 34652
            </p>
            <p className="text-blue-600 font-semibold">(727) 232-0826</p>
          </div>
        </div>
      </section>

      {/* Patient Testimonials */}
      <section className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold uppercase tracking-wide text-sm mb-2">
            Patient Success Stories
          </p>
          <h2 className="text-3xl font-bold mb-4">What Our Patients Say</h2>
          <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Real results from real people who found relief at Glory Regenerative
          </p>
        </div>

        <Testimonials />
      </section>
    </div>
  );
}
