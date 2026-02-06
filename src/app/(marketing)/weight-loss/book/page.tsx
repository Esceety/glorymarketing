import { Metadata } from 'next';
import Image from 'next/image';
import { Badge } from '@/components/ui/Badge';
import { WeightLossBookingForm } from '@/components/ui/WeightLossBookingForm';

export const metadata: Metadata = {
  title: 'Book Your Weight Loss Consultation | Glory Regenerative',
  description:
    'Schedule your medical weight loss consultation at Glory Regenerative Center. Get 50% off your first month.',
};

export default function WeightLossBookPage() {
  return (
    <div className="space-y-12 py-8 px-4 sm:px-6">
      {/* Hero / Intro */}
      <section className="text-center max-w-3xl mx-auto">
        <Badge className="mb-4">New Patient Special Offer</Badge>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
          Book Your Weight Loss Consultation
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
          Ready to take the first step? Schedule your consultation below to
          learn how our medical weight loss program can help you achieve your
          goals.
        </p>
      </section>

      {/* Special Offer Reminder */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-400 rounded-xl p-6 shadow-md">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                🎉 50% Off Your First Month
              </h3>
              <p className="text-gray-700 leading-relaxed">
                New patients receive 50% off their first month of our
                comprehensive medical weight loss program. This includes
                physician supervision, medications, nutrition guidance, and
                ongoing support.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Image Section - Weight Loss Program Visual */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">
          Our Medical Weight Loss Approach
        </h2>
        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/images/weight-loss-program.jpg"
            alt="Medical Weight Loss Program"
            fill
            className="object-cover"
            sizes="(max-width: 896px) 100vw, 896px"
            quality={85}
            priority
          />
        </div>
        <p className="text-gray-600 text-center mt-4 leading-relaxed">
          Our physician-supervised weight loss program combines FDA-approved
          medications, personalized nutrition plans, and ongoing medical support
          to help you achieve sustainable, long-term results.
        </p>
      </div>

      {/* Booking Form */}
      <div className="max-w-4xl mx-auto">
        <WeightLossBookingForm />
      </div>

      {/* What to Expect */}
      <div className="max-w-4xl mx-auto bg-white rounded-xl border border-gray-200 p-6 sm:p-8 shadow-sm">
        <h2 className="text-2xl font-bold mb-4">
          What to Expect at Your Consultation
        </h2>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-blue-600 mr-3 mt-1 text-xl">✓</span>
            <span className="text-gray-700 text-sm sm:text-base">
              Comprehensive medical evaluation and health history review
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-3 mt-1 text-xl">✓</span>
            <span className="text-gray-700 text-sm sm:text-base">
              Discussion of your weight loss goals and challenges
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-3 mt-1 text-xl">✓</span>
            <span className="text-gray-700 text-sm sm:text-base">
              Review of available FDA-approved weight loss medications (GLP-1s,
              etc.)
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-3 mt-1 text-xl">✓</span>
            <span className="text-gray-700 text-sm sm:text-base">
              Personalized treatment plan tailored to your needs
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-3 mt-1 text-xl">✓</span>
            <span className="text-gray-700 text-sm sm:text-base">
              Nutrition and lifestyle guidance to support your journey
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-3 mt-1 text-xl">✓</span>
            <span className="text-gray-700 text-sm sm:text-base">
              Overview of what to expect during the program
            </span>
          </li>
        </ul>

        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm text-gray-700">
            <strong className="text-gray-900">Duration:</strong> Your initial
            consultation typically takes 30-45 minutes. We recommend arriving 10
            minutes early to complete any necessary paperwork.
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto bg-gray-50 rounded-xl p-6 sm:p-8">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-lg mb-2">
              Is medical weight loss safe?
            </h3>
            <p className="text-gray-600">
              Yes, our program is physician-supervised and uses FDA-approved
              medications. We monitor your progress closely to ensure safe,
              effective weight loss.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">
              How much weight can I expect to lose?
            </h3>
            <p className="text-gray-600">
              Results vary by individual, but many patients lose 10-15% of their
              body weight within the first 3-6 months. Your results depend on
              adherence to the program and individual factors.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">
              Does insurance cover this program?
            </h3>
            <p className="text-gray-600">
              Our weight loss program is typically a cash-pay service. We offer
              competitive pricing and payment plans to make it accessible.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">
              What medications do you offer?
            </h3>
            <p className="text-gray-600">
              We offer a range of FDA-approved weight loss medications including
              GLP-1 agonists and other proven treatments. Your physician will
              recommend the best option based on your medical history and goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
