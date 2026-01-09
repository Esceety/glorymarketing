'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Suspense } from 'react';

function PaymentCancelledContent() {
  const searchParams = useSearchParams();
  const contactId = searchParams?.get('contact_id') || null;

  const tryAgainUrl = contactId
    ? `/voucher-payment?contact_id=${contactId}`
    : '/';

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Icon */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-yellow-100 mb-6">
            <svg
              className="w-10 h-10 text-yellow-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Payment Not Completed
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your payment was cancelled and no charges were made.
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden mb-6">
          <div className="px-6 py-8 sm:px-8">
            <div className="text-center mb-6">
              <p className="text-gray-700 text-lg">
                No worries! Your voucher is still available.
              </p>
            </div>

            {/* Why Complete Payment Section */}
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-6 mb-6 border border-cyan-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Why complete your payment?
              </h3>
              <ul className="space-y-2">
                {[
                  'Reserve your spot for a comprehensive pain assessment',
                  'Save $350 off the regular $450 consultation value',
                  'Take the first step toward lasting pain relief',
                  'Secure scheduling with our specialized team',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start text-gray-700">
                    <svg
                      className="w-5 h-5 text-cyan-600 mr-2 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <Link
                href={tryAgainUrl}
                className="block w-full text-center px-6 py-4 rounded-lg text-white font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                style={{
                  background:
                    'linear-gradient(135deg, #078AAD 0%, #0A9FCA 100%)',
                }}
              >
                🔒 Try Again - Complete Payment
              </Link>

              <Link
                href="/"
                className="block w-full text-center px-6 py-3 border-2 border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
              >
                Return to Home
              </Link>
            </div>
          </div>
        </div>

        {/* Help Section */}
        <div className="bg-white rounded-xl shadow-md border border-gray-200 px-6 py-6 sm:px-8">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-cyan-100 text-cyan-600">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Have Questions?
              </h3>
              <p className="text-gray-600 mb-3">
                If you experienced an issue during checkout or have questions
                about the voucher, we&apos;re here to help.
              </p>
              <a
                href="tel:+18135551234"
                className="inline-flex items-center text-cyan-600 hover:text-cyan-700 font-medium"
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
                (813) 555-1234
              </a>
              <p className="text-sm text-gray-500 mt-2">
                Monday - Friday, 9 AM - 5 PM EST
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PaymentCancelledClient() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading...</p>
          </div>
        </div>
      }
    >
      <PaymentCancelledContent />
    </Suspense>
  );
}
