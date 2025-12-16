import { Metadata } from 'next';
import { Badge } from '@/components/ui/Badge';
import { MultiStepCalendar } from '@/components/ui/MultiStepCalendar';

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
          <div className="rounded-lg aspect-video overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/OLP_zLSOCRc"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            />
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
