import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Thank You | Appointment Request Received',
  description: 'Your appointment request has been received.',
};

export default function SuccessPage() {
  return (
    <div className="space-y-12 py-12">
      {/* Success Message */}
      <section className="text-center">
        <div className="mb-6">
          <svg
            className="w-20 h-20 mx-auto text-green-500"
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
        </div>
        <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
        <p className="text-xl text-gray-600 mb-8">
          Your appointment request has been received. Please note that this is
          not yet confirmed until our clinic calls or texts you.
        </p>
      </section>

      {/* Next Steps */}
      <section className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">What Happens Next</h2>
        <ul className="space-y-4 list-decimal list-inside">
          <li className="text-lg">
            Our team will review your appointment request within 24 hours
          </li>
          <li className="text-lg">
            You&apos;ll receive a confirmation call or text message
          </li>
          <li className="text-lg">
            We&apos;ll send you any necessary pre-appointment forms and
            information
          </li>
        </ul>
      </section>

      {/* About Section */}
      <section className="max-w-2xl mx-auto py-8">
        <h2 className="text-3xl font-bold mb-6">About Dr. David Ikudayisi</h2>
        <p className="text-gray-600 mb-4">
          Placeholder text about Dr. David Ikudayisi and his expertise in
          regenerative medicine. Information about his background, training, and
          commitment to patient care.
        </p>
        <p className="text-gray-600">
          More placeholder text about the clinic&apos;s approach and values.
        </p>
      </section>

      {/* Testimonials */}
      <section className="max-w-2xl mx-auto py-8">
        <h2 className="text-3xl font-bold mb-6">Patient Reviews</h2>
        <div className="space-y-6">
          <div className="p-6 bg-gray-50 rounded-lg">
            <p className="text-gray-600 italic mb-2">
              &quot;Review/testimonial placeholder&quot;
            </p>
            <p className="font-semibold">- Patient Name</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <p className="text-gray-600 italic mb-2">
              &quot;Review/testimonial placeholder&quot;
            </p>
            <p className="font-semibold">- Patient Name</p>
          </div>
        </div>
      </section>
    </div>
  );
}
