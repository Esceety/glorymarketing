import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Unsubscribed | Glory Regenerative Center',
  description:
    'You have been successfully unsubscribed from Glory Regenerative Center email communications.',
};

export default function UnsubscribePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full">
        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          {/* Header Section */}
          <div
            className="px-8 py-10 text-center"
            style={{
              background:
                'linear-gradient(to bottom right, rgba(7, 138, 173, 0.08), rgba(7, 138, 173, 0.12))',
            }}
          >
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 mb-6">
              <svg
                className="w-10 h-10 text-gray-600"
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
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              You&apos;ve Been Unsubscribed
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-gray-600 leading-relaxed">
              We&apos;ve successfully removed you from our mailing list.
            </p>
          </div>

          {/* Content Section */}
          <div className="px-8 py-10 space-y-6">
            {/* Main Message */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <p className="text-base text-gray-700 leading-relaxed">
                You will no longer receive email communications from{' '}
                <strong className="text-gray-900">
                  Glory Regenerative Center
                </strong>
                , including:
              </p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>Promotional offers and special vouchers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>Health tips and wellness information</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>Appointment reminders and follow-ups</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>Updates about our services and locations</span>
                </li>
              </ul>
            </div>

            {/* Mistake Message */}
            <div
              className="rounded-xl p-6 border-2"
              style={{
                backgroundColor: 'rgba(7, 138, 173, 0.05)',
                borderColor: 'rgba(7, 138, 173, 0.2)',
              }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <svg
                    className="w-6 h-6"
                    style={{ color: '#078AAD' }}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3
                    className="text-lg font-bold mb-2"
                    style={{ color: '#078AAD' }}
                  >
                    Unsubscribed by Mistake?
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    If you clicked the unsubscribe link accidentally and would
                    like to continue receiving our emails, please give us a call
                    and we&apos;ll be happy to reactivate your subscription.
                  </p>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-gray-600"
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
                      <a
                        href="tel:+18139329798"
                        className="text-lg font-bold hover:underline"
                        style={{ color: '#078AAD' }}
                      >
                        (813) 932-9798
                      </a>
                    </div>
                    <span className="text-gray-500 text-sm hidden sm:block">
                      •
                    </span>
                    <span className="text-gray-600 text-sm">
                      Monday - Friday, 9:00 AM - 5:00 PM
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Back to Home Button */}
            <div className="pt-4 text-center">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-semibold text-white shadow-lg transform hover:scale-105 transition-all duration-300"
                style={{ backgroundColor: '#078AAD' }}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Return to Homepage
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-center text-sm text-gray-500 mt-8 px-4">
          Note: It may take up to 48 hours for this change to take effect.
          <br />
          You may receive emails that were already in process.
        </p>
      </div>
    </div>
  );
}
