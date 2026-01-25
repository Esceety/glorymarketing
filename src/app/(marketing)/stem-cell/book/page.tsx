import { Metadata } from 'next';
import { Badge } from '@/components/ui/Badge';
import { MultiStepCalendar } from '@/components/ui/MultiStepCalendar';

export const metadata: Metadata = {
  title: 'Book Your Stem Cell Consultation | Glory Regenerative',
  description:
    'Schedule your stem cell therapy consultation appointment at Glory Regenerative Center.',
};

export default function StemCellBookPage() {
  return (
    <div className="space-y-12 py-8 px-4 sm:px-6">
      {/* Hero / Intro */}
      <section className="text-center max-w-3xl mx-auto">
        <Badge className="mb-4">Limited Daily Appointment Spots</Badge>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
          Book Your Stem Cell Therapy Consultation
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
          Congratulations on taking the next step! Schedule your consultation at a convenient
          time and location below to learn if stem cell therapy is right for you.
        </p>
      </section>

      {/* Florida Legal Notice */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-blue-50 border-2 border-blue-600 rounded-xl p-6 shadow-md">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
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
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Important Florida Law Notice
              </h3>
              <p className="text-sm font-medium text-gray-800 italic leading-relaxed">
                &quot;THIS NOTICE MUST BE PROVIDED TO YOU UNDER FLORIDA LAW. This health care
                practitioner performs one or more stem cell therapies that have not yet been
                approved by the United States Food and Drug Administration. You are encouraged to
                consult with your primary care provider before undergoing any stem cell therapy.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Single column layout */}
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Image Section - Placeholder for Stem Cell Therapy Visual */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Understanding Stem Cell Therapy</h2>
          <div className="relative w-full aspect-video bg-gradient-to-br from-blue-100 via-cyan-50 to-blue-100 rounded-xl overflow-hidden shadow-lg border-2 border-blue-200">
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-12 h-12 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Learn About Your Stem Cell Therapy Options
                </h3>
                <p className="text-gray-600 max-w-xl mx-auto">
                  During your consultation, we&apos;ll explain how bone marrow, umbilical, and exosome
                  stem cell therapies can help with your specific orthopedic condition.
                </p>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-3 text-center italic">
            Image placeholder: Professional medical illustration showing the stem cell therapy
            process for orthopedic treatment
          </p>
        </div>

        {/* Call-to-Action Section */}
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
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
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                Ready to Book Your Stem Cell Consultation?
              </h3>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Great! Let&apos;s get you scheduled. Simply select your preferred location below,
                and you&apos;ll be able to choose a convenient date and time for your
                consultation. We look forward to helping you explore if stem cell therapy is the
                right solution for your pain!
              </p>
            </div>
          </div>
        </div>

        {/* Multi-Step Calendar */}
        <div>
          <MultiStepCalendar />
        </div>

        {/* What to Expect */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-4">What to Expect at Your Consultation</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 mt-1 text-xl">✓</span>
              <span className="text-gray-700 text-sm sm:text-base">
                Comprehensive evaluation of your orthopedic condition (knee, hip, shoulder, elbow,
                back, neck, or joint pain)
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 mt-1 text-xl">✓</span>
              <span className="text-gray-700 text-sm sm:text-base">
                Review of your medical history and current symptoms
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 mt-1 text-xl">✓</span>
              <span className="text-gray-700 text-sm sm:text-base">
                Detailed explanation of stem cell therapy types: bone marrow, umbilical, and
                exosome
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 mt-1 text-xl">✓</span>
              <span className="text-gray-700 text-sm sm:text-base">
                Discussion of treatment options tailored to your specific condition
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 mt-1 text-xl">✓</span>
              <span className="text-gray-700 text-sm sm:text-base">
                Answers to all your questions about stem cell therapy, FDA compliance, and Florida
                law requirements
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 mt-1 text-xl">✓</span>
              <span className="text-gray-700 text-sm sm:text-base">
                Personalized treatment plan and next steps if stem cell therapy is right for you
              </span>
            </li>
          </ul>
        </div>

        {/* Important Reminders */}
        <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-6 sm:p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <svg
              className="w-6 h-6 text-yellow-600 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
            Important Reminders
          </h3>
          <ul className="space-y-3 text-sm sm:text-base text-gray-700">
            <li className="flex items-start">
              <span className="text-yellow-600 mr-2">•</span>
              <span>
                <strong>Arrive 10-15 minutes early</strong> to complete any necessary paperwork
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-600 mr-2">•</span>
              <span>
                <strong>Bring your medical records</strong> if you have recent imaging or test
                results related to your condition
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-600 mr-2">•</span>
              <span>
                <strong>List your current medications</strong> and any previous treatments you&apos;ve
                tried
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-600 mr-2">•</span>
              <span>
                <strong>Prepare your questions</strong> about stem cell therapy, costs, recovery
                time, and expected outcomes
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-600 mr-2">•</span>
              <span>
                <strong>Wear comfortable clothing</strong> that allows easy access to the area of
                pain
              </span>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="bg-gray-50 border rounded-xl p-6 sm:p-8">
          <h3 className="text-xl font-bold mb-4">Have Questions? Contact Us</h3>
          <p className="text-gray-600 mb-6">
            If you need to reschedule or have questions before your appointment, feel free to call
            any of our locations:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <h4 className="font-bold mb-2">Tampa</h4>
              <p className="text-sm text-gray-600 mb-1">8019 N. Himes Ave., Suite 200</p>
              <p className="text-sm text-gray-600 mb-2">Tampa, FL 33614</p>
              <p className="text-blue-600 font-semibold">(813) 932-9798</p>
            </div>
            <div className="text-center">
              <h4 className="font-bold mb-2">Lakeland</h4>
              <p className="text-sm text-gray-600 mb-1">1818 Harden Blvd, Suite 110</p>
              <p className="text-sm text-gray-600 mb-2">Lakeland, FL 33803</p>
              <p className="text-blue-600 font-semibold">(863) 248-6881</p>
            </div>
            <div className="text-center">
              <h4 className="font-bold mb-2">New Port Richey</h4>
              <p className="text-sm text-gray-600 mb-1">5622 Marine Parkway, Suite 8</p>
              <p className="text-sm text-gray-600 mb-2">New Port Richey, FL 34652</p>
              <p className="text-blue-600 font-semibold">(727) 232-0826</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
