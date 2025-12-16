import { Metadata } from 'next';
import { Testimonials } from '@/components/ui/Testimonials';

export const metadata: Metadata = {
  title: 'Thank You — Your Request Has Been Received | Glory Regenerative',
  description: 'Your appointment request has been received by our team.',
};

export default function SuccessPage() {
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
          Thank You — Your Request Has Been Received
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          We&apos;ve received your appointment request. Please note that{' '}
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
                Our team will review your appointment request within 24 hours
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

      {/* Before Your Visit */}
      <section className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Before Your Visit</h2>
        <div className="bg-white border rounded-lg p-6">
          <p className="text-gray-600 mb-4 leading-relaxed">
            To help us serve you better, here are a few suggestions:
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
                Bring a list of current medications and supplements
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 mt-1">•</span>
              <span className="text-gray-700">
                Be ready to discuss any prior treatments you&apos;ve tried
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 mt-1">•</span>
              <span className="text-gray-700">
                Prepare questions about regenerative medicine options
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Questions? Contact Us */}
      <section className="max-w-3xl mx-auto bg-gray-50 border rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-6">Questions? Contact Us</h2>
        <p className="text-gray-600 mb-6">
          If you have any questions before your appointment or need to reach us,
          feel free to call any of our locations:
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
