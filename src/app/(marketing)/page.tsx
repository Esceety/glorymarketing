import { Metadata } from 'next';
import Image from 'next/image';
import { Section } from '@/components/ui/Section';
import { BookingButton } from '@/components/ui/BookingButton';
import { ScrollToTopButton } from '@/components/ui/ScrollToTopButton';
import { Testimonials } from '@/components/ui/Testimonials';

export const metadata: Metadata = {
  title:
    'Glory Regenerative Center - 40 Pain Relief Vouchers for Knee, Hip, Neck, Lower Back & Joint Pain!',
  description:
    'Glory Regenerative Center is giving away 40 Pain Relief Vouchers for Knee, Hip, Neck, Lower Back & Joint Pain! Full Health History Consultation, Evaluation, and Personalized Treatment Plan - $450 value for just $100.',
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Inspired by Florida Regenerative */}
      <section className="relative min-h-[600px] w-full text-white overflow-visible py-6">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/gloryregenerativeimage.png"
            alt="Glory Regenerative Center Background"
            fill
            className="object-cover"
            priority
            quality={100}
            sizes="100vw"
            style={{ objectPosition: 'center center' }}
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-slate-900/75"></div>
        </div>

        {/* Content - Centered */}
        <div className="relative z-10 w-full h-full flex items-center justify-center py-6">
          <div className="w-full max-w-5xl px-6 sm:px-8 lg:px-12 py-6 text-center">
            {/* Top Badge */}
            <div className="mb-4">
              <div
                className="inline-flex items-center backdrop-blur-sm rounded-full px-6 py-2.5 border shadow-lg"
                style={{
                  backgroundColor: '#078AAD',
                  borderColor: 'rgba(7, 138, 173, 0.3)',
                }}
              >
                <span className="text-sm font-bold uppercase tracking-wider">
                  🏥 Glory Regenerative Center
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight mb-6 max-w-4xl mx-auto">
              Glory Regenerative Center Is Giving Away{' '}
              <span className="text-yellow-400">
                40 Pain Relief Vouchers for Knee, Hip, Neck, Lower Back & Joint
                Pain
              </span>
            </h1>

            {/* Validation Sub-Headline */}
            <p className="text-xl sm:text-2xl font-semibold mb-6 text-cyan-100">
              Suffering from Knee, Hip, Neck, Lower Back, or Joint Pain? You May
              Qualify.
            </p>

            {/* Local Callout */}
            <div className="mb-6">
              <p className="text-xl sm:text-2xl font-bold mb-1 text-cyan-100">
                Hey Tampa! 👋
              </p>
              <p className="text-base sm:text-lg text-gray-200">
                Now serving patients in Tampa, Lakeland & New Port Richey
              </p>
            </div>

            {/* Supporting Body Copy */}
            <p className="text-base sm:text-lg leading-relaxed mb-8 text-gray-100 max-w-3xl mx-auto">
              If knee, hip, neck, lower back, or joint pain is limiting your
              mobility and quality of life, it can feel like you have run out of
              options—but if you are looking for a{' '}
              <strong className="text-yellow-400">
                long-lasting, non-surgical solution
              </strong>
              , you are in the right place.
            </p>

            {/* Value Prop Box */}
            <div
              className="backdrop-blur-md rounded-2xl p-6 sm:p-8 border-2 shadow-2xl mb-4 max-w-2xl mx-auto"
              style={{
                background:
                  'linear-gradient(to bottom right, rgba(7, 138, 173, 0.15), rgba(7, 138, 173, 0.15))',
                borderColor: 'rgba(7, 138, 173, 0.3)',
              }}
            >
              <p className="font-bold text-xl sm:text-2xl mb-4 text-yellow-400">
                ⏰ For the Next Week Only
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-white mb-3">
                We are giving away{' '}
                <strong className="text-yellow-400 text-xl sm:text-2xl">
                  40 Pain Relief Vouchers
                </strong>{' '}
                for a <strong>Comprehensive Pain Relief Assessment</strong>,
                which includes:
              </p>
              <ul className="text-white space-y-2 mb-4 ml-4">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    A <strong>Full Health History Consultation</strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    A thorough <strong>Clinical Evaluation</strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    A <strong>Personalized Treatment Plan</strong> tailored to
                    your condition
                  </span>
                </li>
              </ul>
              <p className="text-base sm:text-lg text-white mb-2">
                <strong>This assessment covers:</strong>
              </p>
              <p className="text-base sm:text-lg italic text-cyan-200 font-semibold mb-3">
                Knee, Hip, Neck, Lower Back & Joint Pain
              </p>
              <div className="my-4">
                <div className="flex items-center justify-center gap-3">
                  <span className="text-2xl sm:text-3xl font-bold text-gray-400 line-through opacity-75">
                    $450
                  </span>
                  <span className="text-4xl sm:text-5xl font-black text-yellow-400">
                    $100
                  </span>
                </div>
                <p className="text-sm sm:text-base text-green-400 font-semibold mt-2 text-center">
                  Save $350 with this exclusive, limited-time offer
                </p>
              </div>
              <p className="text-xs sm:text-sm italic text-cyan-100 border-t border-white/20 pt-3">
                This is a cash-pay offer. Insurance is not accepted.
              </p>
            </div>

            {/* CTA Button */}
            <div className="mt-4 relative z-20">
              <BookingButton className="group inline-flex items-center justify-center px-8 py-4 text-base sm:text-lg font-bold bg-red-600 hover:bg-red-700 text-white rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300 uppercase tracking-wide">
                <span className="mr-2 text-xl">🎁</span>
                Receive My Pain Relief Voucher Now!
                <svg
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </BookingButton>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions We Treat - Image Showcase */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p
              className="font-semibold uppercase tracking-wide text-sm mb-2"
              style={{ color: '#078AAD' }}
            >
              What We Treat
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Advanced Treatment for Joint Pain
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized regenerative medicine solutions for lasting relief
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* Chronic Pain Relief */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src="/images/regenerative-img1.png"
                  alt="Chronic Pain Treatment - Knee, Hip, Neck, Lower Back & Joints"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div
                  className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3"
                  style={{ backgroundColor: '#078AAD', color: 'white' }}
                >
                  SPECIALIZED CARE
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Chronic Pain Relief
                </h3>
                <p className="text-gray-200 text-sm">
                  (Knee, Hip, Neck, Lower Back & Joints)
                </p>
              </div>
            </div>

            {/* Osteoarthritis */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src="/images/regenerative-img2.png"
                  alt="Osteoarthritis Treatment"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div
                  className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3"
                  style={{ backgroundColor: '#078AAD', color: 'white' }}
                >
                  SPECIALIZED CARE
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Osteoarthritis
                </h3>
                <p className="text-gray-200 text-sm">
                  Non-surgical solutions to manage and reduce arthritis symptoms
                </p>
              </div>
            </div>

            {/* Bone-on-Bone Conditions */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src="/images/regenerative-img3.jpeg"
                  alt="Bone-on-Bone Conditions Treatment"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div
                  className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3"
                  style={{ backgroundColor: '#078AAD', color: 'white' }}
                >
                  SPECIALIZED CARE
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Bone-on-Bone Conditions
                </h3>
                <p className="text-gray-200 text-sm">
                  Innovative treatments for severe joint degeneration
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <Section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-blue-600 font-semibold uppercase tracking-wide text-sm mb-2">
              Simple Process
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three easy steps to start your journey toward pain-free living
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <div className="relative text-center group">
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform shadow-lg"
                style={{ backgroundColor: '#078AAD' }}
              >
                <span className="text-4xl">📋</span>
              </div>
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3 w-10 h-10 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg"
                style={{ backgroundColor: '#078AAD' }}
              >
                1
              </div>
              <h3 className="text-2xl font-bold mb-3">Request Your Voucher</h3>
              <p className="text-gray-600 leading-relaxed">
                Fill out our simple form to claim your new patient consultation
                voucher - a{' '}
                <span className="line-through text-gray-400">$450</span>{' '}
                <span className="font-bold text-green-600">$100</span> value.
              </p>
            </div>

            <div className="relative text-center group">
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform shadow-lg"
                style={{ backgroundColor: '#078AAD' }}
              >
                <span className="text-4xl">📅</span>
              </div>
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3 w-10 h-10 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg"
                style={{ backgroundColor: '#078AAD' }}
              >
                2
              </div>
              <h3 className="text-2xl font-bold mb-3">Schedule Your Visit</h3>
              <p className="text-gray-600 leading-relaxed">
                Book a convenient appointment time at one of our Tampa Bay
                locations.
              </p>
            </div>

            <div className="relative text-center group">
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform shadow-lg"
                style={{ backgroundColor: '#078AAD' }}
              >
                <span className="text-4xl">✨</span>
              </div>
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3 w-10 h-10 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg"
                style={{ backgroundColor: '#078AAD' }}
              >
                3
              </div>
              <h3 className="text-2xl font-bold mb-3">
                Meet Our Regenerative Medicine Team
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Get a comprehensive evaluation and personalized treatment plan
                for lasting relief.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Conditions & Benefits Section */}
      <Section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
            Conditions We Treat & Expected Benefits
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">⚠️</span>
                </div>
                <h3 className="text-3xl font-bold text-red-700">
                  Common Pain Issues We Address
                </h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 text-xl mt-1">✗</span>
                  <span className="text-gray-700 text-lg">
                    Chronic knee & hip pain when walking or climbing stairs
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 text-xl mt-1">✗</span>
                  <span className="text-gray-700 text-lg">
                    Persistent neck pain & stiffness
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 text-xl mt-1">✗</span>
                  <span className="text-gray-700 text-lg">
                    Lower back pain affecting daily movement
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 text-xl mt-1">✗</span>
                  <span className="text-gray-700 text-lg">
                    Joint instability and reduced range of motion
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 text-xl mt-1">✗</span>
                  <span className="text-gray-700 text-lg">
                    Difficulty with daily activities due to pain
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 text-xl mt-1">✗</span>
                  <span className="text-gray-700 text-lg">
                    Arthritis-related discomfort in multiple joints
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="text-3xl font-bold text-green-700">
                  Expected Benefits
                </h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-xl mt-1">✓</span>
                  <span className="text-gray-700 text-lg">
                    Significant reduction in pain levels
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-xl mt-1">✓</span>
                  <span className="text-gray-700 text-lg">
                    Improved mobility and flexibility
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-xl mt-1">✓</span>
                  <span className="text-gray-700 text-lg">
                    Non-surgical, minimally invasive approach
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-xl mt-1">✓</span>
                  <span className="text-gray-700 text-lg">
                    Faster recovery compared to surgery
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-xl mt-1">✓</span>
                  <span className="text-gray-700 text-lg">
                    Return to activities you enjoy
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Locations Section */}
      <Section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-blue-600 font-semibold uppercase tracking-wide text-sm mb-2">
              Where We Serve
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Convenient Locations in Tampa Bay
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-shadow">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: '#078AAD' }}
              >
                <span className="text-2xl">📍</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Tampa</h3>
              <p className="text-gray-700 mb-2 text-sm">
                8019 N. Himes Ave., Suite 200
                <br />
                Tampa, FL 33614
              </p>
              <p className="text-lg font-semibold text-blue-600 mb-4">
                (813) 932-9798
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=8019+N.+Himes+Ave.+Suite+200+Tampa+FL+33614"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center location-link font-semibold"
              >
                View on map
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-shadow">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: '#078AAD' }}
              >
                <span className="text-2xl">📍</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Lakeland</h3>
              <p className="text-gray-700 mb-2 text-sm">
                1818 Harden Blvd, Suite 110
                <br />
                Lakeland, FL 33803
              </p>
              <p className="text-lg font-semibold text-blue-600 mb-4">
                (863) 248-6881
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=1818+Harden+Blvd+Suite+110+Lakeland+FL+33803"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center location-link font-semibold"
              >
                View on map
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-shadow">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: '#078AAD' }}
              >
                <span className="text-2xl">📍</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">New Port Richey</h3>
              <p className="text-gray-700 mb-2 text-sm">
                5622 Marine Parkway, Suite 8<br />
                New Port Richey, FL 34652
              </p>
              <p className="text-lg font-semibold text-blue-600 mb-4">
                (727) 232-0826
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=5622+Marine+Parkway+Suite+8+New+Port+Richey+FL+34652"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center location-link font-semibold"
              >
                View on map
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Doctor / Trust Section */}
      <Section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/images/drikudayisi.JPG"
                  alt="Dr. David Ikudayisi - Board-Certified Physician"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div
                className="absolute -bottom-6 -right-6 w-32 h-32 rounded-3xl opacity-10"
                style={{ backgroundColor: '#078AAD' }}
              ></div>
            </div>
            <div className="order-1 lg:order-2">
              <div
                className="inline-block rounded-lg px-4 py-2 mb-4"
                style={{ backgroundColor: 'rgba(7, 138, 173, 0.1)' }}
              >
                <p
                  className="font-semibold uppercase tracking-wide text-sm"
                  style={{ color: '#078AAD' }}
                >
                  Expert Care
                </p>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Meet Dr. David Ikudayisi
              </h2>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                Dr. Ikudayisi is a board-certified internist with specialized
                expertise in regenerative medicine, pain management, and
                cosmetic and aesthetic medicine. With years of experience
                helping patients find lasting relief from chronic pain, he
                blends advanced, evidence-based techniques with compassionate,
                patient-centered care.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                His approach focuses on treating the root cause of pain rather
                than simply managing symptoms, empowering patients to achieve
                long-term healing and improved quality of life—often without
                surgery.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-blue-600 font-semibold uppercase tracking-wide text-sm mb-2">
              Patient Success Stories
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              What Our Patients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real results from real people who found relief at Glory
              Regenerative
            </p>
          </div>

          <Testimonials />
        </div>
      </Section>

      {/* Opt-in Section */}
      <Section
        id="optin"
        className="py-20 bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.2),transparent_50%)]"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-yellow-400 text-red-900 rounded-lg px-6 py-2 mb-6 font-bold uppercase tracking-wide text-sm">
            Limited Time Offer - Save $350!
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-6">
            Request Your <span className="line-through text-red-300">$450</span>{' '}
            $100 Voucher Now!
          </h2>
          <p className="text-2xl mb-4 font-semibold">
            Don&apos;t Miss Out on This Exclusive Offer
          </p>
          <p className="text-xl mb-12 text-red-100 leading-relaxed max-w-2xl mx-auto">
            Take the first step toward pain-free living. Fill out the form below
            to receive your new patient consultation voucher - a{' '}
            <span className="line-through text-red-300">$450</span> value for
            just <span className="font-bold text-yellow-400">$100</span>.
          </p>

          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-10 shadow-2xl border-4 border-yellow-400">
            <div className="text-gray-800">
              <div className="mb-6">
                <p className="text-2xl font-bold text-red-700 mb-2">
                  🎯 Reserve Your Spot Today
                </p>
                <p className="text-lg text-gray-600">
                  Only 40 vouchers available this week!
                </p>
              </div>
              <ScrollToTopButton className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-xl py-6 px-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 uppercase tracking-wide">
                🎁 Click Here to Claim Your Voucher Now!
              </ScrollToTopButton>
            </div>
          </div>

          <p className="text-sm text-red-100 mt-8 italic">
            *This is a cash pay offer. We do not accept insurance for this
            promotional voucher.
          </p>
        </div>
      </Section>
    </div>
  );
}
