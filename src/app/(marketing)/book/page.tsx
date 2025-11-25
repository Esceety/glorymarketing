import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book Your Visit | Glory Regenerative',
  description: 'Schedule your appointment for pain relief consultation.',
};

export default function BookPage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">Book Your Appointment</h1>
        <p className="text-xl text-gray-600">
          Take the first step toward pain-free living
        </p>
      </section>

      {/* Video Section */}
      <section className="py-8">
        <h2 className="text-3xl font-bold mb-6">How It Works</h2>
        <div className="bg-gray-200 rounded-lg p-12 text-center">
          <p className="text-gray-600">YouTube video placeholder</p>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="py-8">
        <h2 className="text-3xl font-bold mb-6">Choose Your Time</h2>
        <div className="bg-gray-100 rounded-lg p-12 text-center">
          <p className="text-gray-600">GHL calendar embed placeholder</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-8">
        <h2 className="text-3xl font-bold mb-6">What to Expect</h2>
        <ul className="space-y-4 list-disc list-inside">
          <li className="text-lg">Comprehensive consultation with our team</li>
          <li className="text-lg">
            Personalized treatment plan tailored to your needs
          </li>
          <li className="text-lg">
            Advanced diagnostic assessment of your condition
          </li>
          <li className="text-lg">
            Clear explanation of available treatment options
          </li>
        </ul>
      </section>
    </div>
  );
}
