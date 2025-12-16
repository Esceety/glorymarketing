import { Metadata } from 'next';
import { Badge } from '@/components/ui/Badge';
import { CalendarEmbed } from '@/components/ui/CalendarEmbed';

export const metadata: Metadata = {
  title: 'Book Your Voucher Visit | Glory Regenerative',
  description:
    'Schedule your consultation appointment for pain relief at Glory Regenerative Center.',
};

export default function BookPage() {
  return (
    <div className="space-y-12 py-8">
      {/* Hero / Intro */}
      <section className="text-center max-w-3xl mx-auto">
        <Badge className="mb-4">Limited Daily Appointment Spots</Badge>
        <h1 className="text-4xl lg:text-5xl font-bold mb-6">
          Book Your Voucher Visit
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Congratulations on taking the next step after claiming your offer!
          Schedule your consultation at a convenient time and location below.
        </p>
      </section>

      {/* Two-column layout on desktop, stacked on mobile */}
      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Left Column: What to Expect */}
        <div className="space-y-8">
          {/* Video Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Learn About Your Visit</h2>
            <div className="rounded-lg aspect-video overflow-hidden">
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

          {/* What to Expect */}
          <div>
            <h2 className="text-2xl font-bold mb-4">What to Expect</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 mt-1">✓</span>
                <span className="text-gray-700">
                  Comprehensive evaluation of your knee or hip condition
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 mt-1">✓</span>
                <span className="text-gray-700">
                  Review of your medical history and current symptoms
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 mt-1">✓</span>
                <span className="text-gray-700">
                  Discussion of available treatment options tailored to you
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 mt-1">✓</span>
                <span className="text-gray-700">
                  Time to ask questions about the regenerative medicine approach
                </span>
              </li>
            </ul>
          </div>

          {/* Need Help */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-bold mb-3">
              Need Help? Contact Us Directly
            </h3>
            <p className="text-gray-600 mb-4 text-sm">
              If you don&apos;t see a time that works, please call us directly.
              Our team is happy to accommodate your schedule.
            </p>
            <div className="space-y-2 text-sm">
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

        {/* Right Column: Booking */}
        <div className="space-y-6">
          <div className="bg-white border-2 border-blue-200 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">
              Choose Your Location & Time
            </h2>
            <CalendarEmbed />
            <p className="text-sm text-gray-500 mt-4 text-center">
              After booking, you&apos;ll receive a confirmation call/text from
              our clinic.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
