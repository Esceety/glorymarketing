import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Glory Regenerative | Knee & Hip Pain Relief',
  description:
    'Discover innovative pain management and regenerative medicine solutions for knee and hip pain.',
};

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section id="hero" className="py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Your Journey to Pain-Free Living Starts Here
        </h1>
        <p className="text-xl mb-8 text-gray-600">
          Advanced regenerative medicine for knee and hip pain relief
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700">
          Claim My Voucher
        </button>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16">
        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose Glory Regenerative
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg">
            <h3 className="text-2xl font-semibold mb-3">Benefit Card 1</h3>
            <p className="text-gray-600">
              Placeholder text for benefit description
            </p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-2xl font-semibold mb-3">Benefit Card 2</h3>
            <p className="text-gray-600">
              Placeholder text for benefit description
            </p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-2xl font-semibold mb-3">Benefit Card 3</h3>
            <p className="text-gray-600">
              Placeholder text for benefit description
            </p>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-16 bg-gray-50 -mx-8 px-8">
        <h2 className="text-4xl font-bold text-center mb-8">
          Convenient Location
        </h2>
        <div className="max-w-2xl mx-auto">
          <p className="text-center text-gray-600">
            [Location map placeholder]
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16">
        <h2 className="text-4xl font-bold text-center mb-12">
          What Our Patients Say
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 border rounded-lg">
            <p className="text-gray-600 italic mb-4">
              &quot;Patient testimonial placeholder&quot;
            </p>
            <p className="font-semibold">- Patient Name</p>
          </div>
          <div className="p-6 border rounded-lg">
            <p className="text-gray-600 italic mb-4">
              &quot;Patient testimonial placeholder&quot;
            </p>
            <p className="font-semibold">- Patient Name</p>
          </div>
        </div>
      </section>
    </div>
  );
}
