import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Testimonials } from '@/components/ui/Testimonials';

export const metadata: Metadata = {
  title:
    'Stem Cell Therapy Tampa - 40 Free Consultation Vouchers | Glory Regenerative',
  description:
    'Glory Regenerative Center is offering 40 free stem cell therapy consultation vouchers for knee, hip, neck, lower back & joint pain. Legal in Florida. Book your appointment today!',
};

export default function StemCellPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[600px] w-full text-white overflow-visible py-6">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/stem-cell-therapy-hero.jpg"
            alt="Glory Regenerative Center - Stem Cell Therapy"
            fill
            className="object-cover"
            priority
            quality={85}
            sizes="100vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            style={{ objectPosition: 'center center' }}
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-slate-900/75"></div>
        </div>

        {/* Content - Centered */}
        <div className="relative z-10 w-full h-full flex items-center justify-center py-6">
          <div className="w-full max-w-5xl px-6 sm:px-8 lg:px-12 py-6 text-center">
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight mb-6 max-w-4xl mx-auto">
              <span className="block">Glory Regenerative Center</span>
              <span className="block text-yellow-400 my-3">
                Is Giving Away 40
              </span>
              <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent drop-shadow-lg my-4">
                Stem Cell Therapy
              </span>
              <span className="block text-yellow-400">
                Consultation Vouchers
              </span>
            </h1>

            {/* Validation Sub-Headline */}
            <p className="text-xl sm:text-2xl font-semibold mb-6 text-cyan-100">
              Now Legal in Florida — Bone Marrow, Umbilical & Exosome Stem Cell
              Therapy
            </p>

            {/* Local Callout */}
            <div className="mb-6">
              <p className="text-xl sm:text-2xl font-bold mb-1 text-cyan-100">
                Hey Tampa Bay Area! 👋
              </p>
              <p className="text-base sm:text-lg text-gray-200">
                Now serving patients in Tampa, Lakeland & New Port Richey
              </p>
            </div>

            {/* Supporting Body Copy */}
            <p className="text-base sm:text-lg leading-relaxed mb-8 text-gray-100 max-w-3xl mx-auto">
              If knee, hip, neck, lower back, shoulder, elbow, or joint pain is
              limiting your mobility and quality of life, stem cell therapy
              offers a{' '}
              <strong className="text-yellow-400">
                long-lasting, non-surgical solution
              </strong>{' '}
              that works with your body&apos;s natural healing processes.
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
              <p className="text-base sm:text-lg leading-relaxed mb-4">
                Glory Regenerative Center is offering{' '}
                <strong className="text-yellow-400">
                  40 complimentary stem cell therapy consultations
                </strong>{' '}
                to help more people discover if this innovative treatment is
                right for them.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-4">
                <p className="text-2xl sm:text-3xl font-extrabold mb-2">
                  <span className="line-through text-gray-400">$450</span>{' '}
                  <span className="text-yellow-400">→ $100</span>
                </p>
                <p className="text-sm text-gray-200">
                  Limited-Time Offer — 40 Vouchers Only
                </p>
              </div>
              <ul className="text-left space-y-2 text-sm sm:text-base mb-6">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span>Full Health History Consultation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span>Comprehensive Evaluation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span>Personalized Treatment Plan</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span>Learn About Stem Cell Therapy Options</span>
                </li>
              </ul>
              <div className="space-y-3">
                <Link
                  href="/stem-cell/book"
                  className="group inline-flex items-center justify-center w-full px-8 py-4 text-base sm:text-lg font-bold bg-red-600 hover:bg-red-700 text-white rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300 uppercase tracking-wide"
                >
                  🎁 Claim Your $100 Stem Cell Consultation Voucher →
                </Link>
                <p className="text-xs text-gray-300">
                  ⚡ Only 40 vouchers available — First come, first served
                </p>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300">
              <span className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Legal in Florida
              </span>
              <span className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                No Surgery Required
              </span>
              <span className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                FDA-Certified Facilities
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Florida Legal Notice - Prominent Placement */}
      <section
        className="py-16 bg-white border-t-4"
        style={{ borderColor: '#078AAD' }}
      >
        <div className="max-w-4xl mx-auto">
          <div
            className="border-2 rounded-xl p-6 sm:p-8 shadow-lg"
            style={{
              backgroundColor: 'rgba(7, 138, 173, 0.1)',
              borderColor: '#078AAD',
            }}
          >
            <div className="flex items-start gap-4 mb-4">
              <div
                className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                style={{ backgroundColor: '#078AAD' }}
              >
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
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Important Florida Law Notice
                </h2>
                <div className="prose prose-blue max-w-none">
                  <p className="text-lg font-semibold text-gray-900 mb-3 italic leading-relaxed">
                    &quot;THIS NOTICE MUST BE PROVIDED TO YOU UNDER FLORIDA LAW.
                    This health care practitioner performs one or more stem cell
                    therapies that have not yet been approved by the United
                    States Food and Drug Administration. You are encouraged to
                    consult with your primary care provider before undergoing
                    any stem cell therapy.&quot;
                  </p>
                  <div
                    className="bg-white rounded-lg p-4 border"
                    style={{ borderColor: 'rgba(7, 138, 173, 0.3)' }}
                  >
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Stem Cell Therapy Now Legal in Florida
                    </h3>
                    <p className="text-gray-700 text-base leading-relaxed mb-3">
                      House Bill 1617 (2025) authorizes licensed physicians in
                      Florida to perform certain stem cell therapies for
                      orthopedic, wound care, and pain management applications.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="mr-2" style={{ color: '#078AAD' }}>
                          •
                        </span>
                        <span>Bone marrow stem cell therapy</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2" style={{ color: '#078AAD' }}>
                          •
                        </span>
                        <span>Umbilical stem cell therapy</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2" style={{ color: '#078AAD' }}>
                          •
                        </span>
                        <span>Exosome stem cell therapy</span>
                      </li>
                    </ul>
                    <p className="text-sm text-gray-600 mt-3">
                      *Excluding fat-derived stem cell therapy, embryonic and
                      fetal stem cell therapy
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Stem Cell Therapy Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p
              className="font-semibold uppercase tracking-wide text-sm mb-2"
              style={{ color: '#078AAD' }}
            >
              The Science
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              What is Stem Cell Therapy?
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
              Stem cell therapy uses your body&apos;s natural healing mechanisms
              to repair damaged tissue, reduce inflammation, and promote
              long-term pain relief.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="w-full h-48 bg-gray-100 rounded-lg mb-4 overflow-hidden relative">
                <Image
                  src="/images/regenerative-img1.png"
                  alt="Natural Healing with Stem Cells"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  quality={80}
                  loading="lazy"
                />
              </div>
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: 'rgba(7, 138, 173, 0.15)' }}
              >
                <span className="text-2xl">🧬</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Natural Healing</h3>
              <p className="text-gray-600 leading-relaxed">
                Stem cells work with your body&apos;s natural processes to
                repair and regenerate damaged tissues, offering a non-surgical
                alternative.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="w-full h-48 bg-gray-100 rounded-lg mb-4 overflow-hidden relative">
                <Image
                  src="/images/regenerative-img2.png"
                  alt="Targeted Stem Cell Treatment"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  quality={80}
                  loading="lazy"
                />
              </div>
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: 'rgba(7, 138, 173, 0.15)' }}
              >
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Targeted Treatment</h3>
              <p className="text-gray-600 leading-relaxed">
                Precisely delivered to the source of pain—whether in your knee,
                hip, shoulder, elbow, back, or neck.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="w-full h-48 bg-gray-100 rounded-lg mb-4 overflow-hidden relative">
                <Image
                  src="/images/regenerative-img3.jpeg"
                  alt="Long-Lasting Stem Cell Therapy Results"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  quality={80}
                  loading="lazy"
                />
              </div>
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: 'rgba(7, 138, 173, 0.15)' }}
              >
                <span className="text-2xl">⏱️</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Long-Lasting Results</h3>
              <p className="text-gray-600 leading-relaxed">
                Many patients experience sustained pain relief and improved
                mobility for months or even years.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/stem-cell/book"
              className="group inline-flex items-center justify-center px-8 py-4 text-base sm:text-lg font-bold text-white rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
              style={{ backgroundColor: '#078AAD' }}
            >
              Learn If Stem Cell Therapy Is Right for You →
            </Link>
          </div>
        </div>
      </section>

      {/* Conditions Treated */}
      <section className="py-16 bg-white">
        <div className="text-center mb-12">
          <p
            className="font-semibold uppercase tracking-wide text-sm mb-2"
            style={{ color: '#078AAD' }}
          >
            Orthopedic Applications
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Conditions We Treat with Stem Cell Therapy
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
            Stem cell therapy is specifically approved for orthopedic cases
            involving joint, muscle, and soft tissue pain.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              icon: '🦵',
              title: 'Knee Pain',
              desc: 'Arthritis, meniscus tears, ligament injuries',
            },
            {
              icon: '🦴',
              title: 'Hip Pain',
              desc: 'Hip arthritis, bursitis, labral tears',
            },
            {
              icon: '🫱',
              title: 'Shoulder Pain',
              desc: 'Rotator cuff injuries, frozen shoulder',
            },
            {
              icon: '💪',
              title: 'Elbow Pain',
              desc: "Tennis elbow, golfer's elbow, tendonitis",
            },
            {
              icon: '🧍',
              title: 'Back Pain',
              desc: 'Lower back pain, disc degeneration',
            },
            {
              icon: '🧑',
              title: 'Neck Pain',
              desc: 'Cervical disc issues, chronic neck pain',
            },
          ].map((condition, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br rounded-lg p-6 hover:shadow-md transition-shadow border"
              style={{
                backgroundImage:
                  'linear-gradient(to bottom right, rgba(7, 138, 173, 0.08), white)',
                borderColor: 'rgba(7, 138, 173, 0.2)',
              }}
            >
              <div className="text-4xl mb-3">{condition.icon}</div>
              <h3 className="text-lg font-bold mb-2">{condition.title}</h3>
              <p className="text-gray-600 text-sm">{condition.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Glory Section */}
      <section className="py-16 bg-gray-50">
        <div className="text-center mb-12">
          <p
            className="font-semibold uppercase tracking-wide text-sm mb-2"
            style={{ color: '#078AAD' }}
          >
            Why Glory Regenerative
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-green-600"
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
              <div>
                <h3 className="text-xl font-bold mb-2">Licensed & Certified</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our physicians are fully licensed and comply with Florida
                  House Bill 1617 requirements for stem cell therapy.
                </p>
              </div>
            </div>
          </div>


          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-green-600"
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
              <div>
                <h3 className="text-xl font-bold mb-2">Informed Consent</h3>
                <p className="text-gray-600 leading-relaxed">
                  Full transparency with written notices and comprehensive
                  consent procedures as required by Florida law.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-green-600"
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
              <div>
                <h3 className="text-xl font-bold mb-2">Personalized Care</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every treatment plan is customized to your specific condition,
                  health history, and recovery goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p
              className="font-semibold uppercase tracking-wide text-sm mb-2"
              style={{ color: '#078AAD' }}
            >
              Patient Success Stories
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Real Results from Real People
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
              Hear from patients who found relief at Glory Regenerative Center
            </p>
          </div>

          <Testimonials />
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="py-16 text-center text-white"
        style={{ backgroundColor: '#078AAD' }}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Explore Stem Cell Therapy?
          </h2>
          <p
            className="text-xl mb-8 leading-relaxed"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            Claim one of our 40 limited-time consultation vouchers and discover
            if stem cell therapy is the right solution for your pain.
          </p>
          <Link
            href="/stem-cell/book"
            className="group inline-flex items-center justify-center px-8 py-4 text-base sm:text-lg font-bold bg-white hover:bg-gray-100 text-blue-600 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            🎁 Claim Your $100 Consultation Voucher Now →
          </Link>
          <p className="text-sm text-blue-200 mt-4">
            ⚡ Only 40 vouchers available — Act now before they&apos;re gone
          </p>
        </div>
      </section>
    </div>
  );
}
