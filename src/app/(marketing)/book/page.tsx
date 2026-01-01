import { Metadata } from 'next';
import { Badge } from '@/components/ui/Badge';
import { MultiStepCalendar } from '@/components/ui/MultiStepCalendar';
import { CustomVideoPlayer } from '@/components/ui/CustomVideoPlayer';

export const metadata: Metadata = {
  title: 'Book Your Voucher Visit | Glory Regenerative',
  description:
    'Schedule your consultation appointment for pain relief at Glory Regenerative Center.',
};

export default function BookPage() {
  return (
    <div className="space-y-12 py-8 px-4 sm:px-6">
      {/* Hero / Intro */}
      <section className="text-center max-w-3xl mx-auto">
        <Badge className="mb-4">Limited Daily Appointment Spots</Badge>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
          Book Your Voucher Visit
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
          Congratulations on taking the next step after claiming your offer!
          Schedule your consultation at a convenient time and location below.
        </p>
      </section>

      {/* Single column layout */}
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Video Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Learn About Your Visit</h2>
          <CustomVideoPlayer
            src="https://ceety-asset-hub.s3.us-east-1.amazonaws.com/glory-medclinic/2befc198-785d-4902-bd4c-51ca0a78fd82-2026-campaign-vid1.mp4"
            title="Learn About Your Visit at Glory Regenerative Center"
            className="aspect-video"
            captionsUrl="https://ceety-asset-hub.s3.us-east-1.amazonaws.com/glory-medclinic/11fdde51-79f7-48b1-9c57-619befc77269-2026-campaign-vid1-v3.vtt.txt"
          />
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
                Ready to Book Your New Patient Appointment?
              </h3>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Great! Let&apos;s get you scheduled. Simply select your
                preferred location below, and you&apos;ll be able to choose a
                convenient date and time for your consultation. We look forward
                to helping you on your journey to pain-free living!
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
          <h2 className="text-2xl font-bold mb-4">What to Expect</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 mt-1 text-xl">✓</span>
              <span className="text-gray-700 text-sm sm:text-base">
                Comprehensive evaluation of your knee or hip condition
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
                Discussion of available treatment options tailored to you
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 mt-1 text-xl">✓</span>
              <span className="text-gray-700 text-sm sm:text-base">
                Time to ask questions about the regenerative medicine approach
              </span>
            </li>
          </ul>
        </div>

        {/* Need Help */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 sm:p-8 shadow-sm">
          <h3 className="text-lg sm:text-xl font-bold mb-3">
            Need Help? Contact Us Directly
          </h3>
          <p className="text-gray-600 mb-4 text-sm sm:text-base">
            If you don&apos;t see a time that works, please call us directly.
            Our team is happy to accommodate your schedule.
          </p>
          <div className="space-y-2 text-sm sm:text-base">
            <p>
              <span className="font-semibold">Tampa:</span> (813) 932-9798
            </p>
            <p>
              <span className="font-semibold">Lakeland:</span> (863) 248-6881
            </p>
            <p>
              <span className="font-semibold">New Port Richey:</span> (727)
              232-0826
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
