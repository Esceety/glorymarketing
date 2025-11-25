import { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'Glory Regenerative | Knee & Hip Pain Relief Without Surgery',
  description:
    'Experience relief from knee and hip pain with advanced regenerative medicine at Glory Regenerative Center. Non-surgical treatment options in Tampa Bay.',
};

export default function HomePage() {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <Section id="hero" className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">New Patient Offer</Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Relieve Knee & Hip Pain Without Surgery
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Experience advanced regenerative medicine at Glory Regenerative
                Center. Our innovative treatments help you return to the
                activities you love—without lengthy downtime or invasive
                procedures.
              </p>
              <Button href="#optin" className="text-lg px-8 py-4">
                Claim My Pain Relief Voucher
              </Button>
            </div>
            <div className="bg-gray-200 rounded-lg aspect-[4/3] flex items-center justify-center">
              <p className="text-gray-500 text-center px-8">
                Hero image placeholder – patient + doctor
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* How It Works Section */}
      <Section title="How It Works" eyebrow="Simple Process">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📋</span>
            </div>
            <h3 className="text-xl font-bold mb-3">1. Request Your Voucher</h3>
            <p className="text-gray-600">
              Fill out our simple form to claim your new patient consultation
              voucher.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📅</span>
            </div>
            <h3 className="text-xl font-bold mb-3">2. Schedule Your Visit</h3>
            <p className="text-gray-600">
              Book a convenient appointment time at one of our Tampa Bay
              locations.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">✨</span>
            </div>
            <h3 className="text-xl font-bold mb-3">
              3. Meet Our Regenerative Medicine Team
            </h3>
            <p className="text-gray-600">
              Get a comprehensive evaluation and personalized treatment plan for
              lasting relief.
            </p>
          </div>
        </div>
      </Section>

      {/* Conditions & Benefits Section */}
      <Section className="bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Conditions We Treat & Expected Benefits
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-blue-700">
                Common Knee & Hip Issues
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <span>Chronic pain when walking or climbing stairs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <span>Stiffness and reduced range of motion</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <span>Joint instability and weakness</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <span>Difficulty with daily activities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <span>Arthritis-related discomfort</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-green-700">
                Expected Benefits
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Significant reduction in pain levels</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Improved mobility and flexibility</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Non-surgical, minimally invasive approach</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Faster recovery compared to surgery</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Return to activities you enjoy</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Locations Section */}
      <Section title="Convenient Locations in Tampa Bay" eyebrow="Where We Serve">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-3">Tampa</h3>
            <p className="text-gray-600 mb-4">
              Serving the greater Tampa area with convenient access from I-275
              and I-4.
            </p>
            <p className="text-sm text-gray-500 mb-3">Call: (813) 555-0100</p>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 font-semibold text-sm"
            >
              View on map →
            </a>
          </div>
          <div className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-3">Lakeland</h3>
            <p className="text-gray-600 mb-4">
              Conveniently located between Tampa and Orlando on I-4 corridor.
            </p>
            <p className="text-sm text-gray-500 mb-3">Call: (863) 555-0100</p>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 font-semibold text-sm"
            >
              View on map →
            </a>
          </div>
          <div className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-3">New Port Richey</h3>
            <p className="text-gray-600 mb-4">
              Easy access from US-19 serving Pasco County and surrounding areas.
            </p>
            <p className="text-sm text-gray-500 mb-3">Call: (727) 555-0100</p>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 font-semibold text-sm"
            >
              View on map →
            </a>
          </div>
        </div>
      </Section>

      {/* Doctor / Trust Section */}
      <Section className="bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-200 rounded-lg aspect-square flex items-center justify-center">
              <p className="text-gray-500 text-center px-8">
                Headshot image placeholder with accessible alt text
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Meet Dr. David Ikudayisi
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Dr. Ikudayisi is a board-certified physician specializing in
                regenerative medicine and aesthetic treatments. With years of
                experience helping patients find relief from chronic pain, he
                combines cutting-edge techniques with compassionate,
                patient-centered care.
              </p>
              <p className="text-gray-700 leading-relaxed">
                His approach focuses on treating the root cause of pain rather
                than just managing symptoms, helping patients achieve lasting
                results without surgery.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section title="What Our Patients Say" eyebrow="Patient Success Stories">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white border rounded-lg p-8 shadow-sm">
            <div className="mb-4 text-yellow-500 text-2xl">★★★★★</div>
            <p className="text-gray-700 italic mb-6 leading-relaxed">
              &quot;After years of knee pain, I can finally walk without
              discomfort. The regenerative treatment was life-changing, and Dr.
              Ikudayisi&apos;s team made me feel cared for every step of the
              way.&quot;
            </p>
            <p className="font-semibold">— Margaret T., Tampa</p>
          </div>
          <div className="bg-white border rounded-lg p-8 shadow-sm">
            <div className="mb-4 text-yellow-500 text-2xl">★★★★★</div>
            <p className="text-gray-700 italic mb-6 leading-relaxed">
              &quot;I was skeptical at first, but the results speak for
              themselves. My hip pain has decreased dramatically, and I avoided
              surgery. Highly recommend Glory Regenerative!&quot;
            </p>
            <p className="font-semibold">— Robert K., Lakeland</p>
          </div>
          <div className="bg-white border rounded-lg p-8 shadow-sm">
            <div className="mb-4 text-yellow-500 text-2xl">★★★★★</div>
            <p className="text-gray-700 italic mb-6 leading-relaxed">
              &quot;The personalized care I received was exceptional. Within
              weeks, I noticed significant improvement in my mobility and pain
              levels. Thank you!&quot;
            </p>
            <p className="font-semibold">— Linda M., New Port Richey</p>
          </div>
          <div className="bg-white border rounded-lg p-8 shadow-sm">
            <div className="mb-4 text-yellow-500 text-2xl">★★★★★</div>
            <p className="text-gray-700 italic mb-6 leading-relaxed">
              &quot;Professional, knowledgeable, and genuinely caring. The
              regenerative medicine approach gave me my quality of life back
              without going under the knife.&quot;
            </p>
            <p className="font-semibold">— James D., Tampa</p>
          </div>
        </div>
      </Section>

      {/* Opt-in Section */}
      <Section id="optin" className="bg-gradient-to-b from-blue-700 to-blue-800 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Request Your Voucher</h2>
          <p className="text-xl mb-8 text-blue-100">
            Take the first step toward pain-free living. Fill out the form below
            to receive your new patient consultation voucher.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <p className="text-lg text-blue-100">
              Form placeholder – GHL opt-in form will be embedded here in Gate 3
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
