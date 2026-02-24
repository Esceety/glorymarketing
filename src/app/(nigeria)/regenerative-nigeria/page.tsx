'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { trackNigeriaWhatsAppLead } from '@/lib/nigeriaTracking';

export default function RegenerativeNigeriaPage() {
  const searchParams = useSearchParams();
  const testEventCode = searchParams?.get('test_event_code') || null;

  const handleWhatsAppClick = (location: 'Abuja' | 'Lagos') => {
    trackNigeriaWhatsAppLead(location, testEventCode);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[600px] w-full overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/regenerative-nigeria-hero.jpg"
            alt="Glory Wellness & Regenerative Centre – Nigeria"
            fill
            className="object-cover"
            priority
            quality={85}
            sizes="100vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            style={{ objectPosition: 'center center' }}
          />
          {/* Subtle overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/60 to-gray-900/70"></div>
        </div>

        {/* Content - Centered */}
        <div className="relative z-10 flex h-full min-h-[600px] items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-4xl text-center text-white">
            {/* Main Headline */}
            <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Advanced Regenerative Medicine
              <br />
              <span className="text-blue-300">Now Available in Nigeria</span>
            </h1>

            {/* Subheadline */}
            <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-gray-100 sm:text-xl">
              Private, consultation-led regenerative and cellular therapy
              options delivered in Abuja and Lagos, using internationally
              aligned medical standards — without the need to travel abroad.
            </p>

            {/* Primary CTAs - WhatsApp */}
            <div className="mb-6 flex flex-col items-center justify-center gap-3 px-4 sm:flex-row sm:gap-4 sm:px-0">
              <a
                href="https://wa.me/2349135300003?text=Hello%2C%20I%27m%20interested%20in%20regenerative%20treatment%20in%20Abuja.%20Please%20share%20the%20next%20steps."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleWhatsAppClick('Abuja')}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-green-600 px-6 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-green-700 sm:w-auto sm:px-8"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp (Abuja)
              </a>

              <a
                href="https://wa.me/2348183816733?text=Hello%2C%20I%27m%20interested%20in%20regenerative%20treatment%20in%20Lagos.%20Please%20share%20the%20next%20steps."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleWhatsAppClick('Lagos')}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-green-600 px-6 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-green-700 sm:w-auto sm:px-8"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp (Lagos)
              </a>
            </div>

            {/* Secondary CTA */}
            <div className="mb-8">
              <Link
                href="/regenerative-nigeria/book"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white bg-white/10 px-8 py-3 text-base font-medium text-white backdrop-blur-sm transition-all hover:bg-white hover:text-gray-900"
              >
                Request a Consultation
              </Link>
            </div>

            {/* Trust Strip */}
            <div className="mx-auto mt-10 flex max-w-4xl flex-wrap items-center justify-center gap-6 text-sm text-gray-200">
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 text-blue-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <span>Private Consultations</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 text-blue-300"
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
                <span>Appointment-Based Care</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 text-blue-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Two Locations: Abuja & Lagos</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 text-blue-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Internationally Aligned Standards</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Patients Choose Local Care */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Why Patients Choose Local Care Over Medical Travel
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Access internationally aligned regenerative medicine options
              without the need to travel abroad.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Card 1 */}
            <div className="rounded-lg bg-white p-8 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                <svg
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">
                Internationally Aligned Standards
              </h3>
              <p className="text-gray-600">
                Our facilities follow internationally recognized protocols for
                regenerative medicine, with careful attention to safety,
                sterility, and clinical best practices.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-lg bg-white p-8 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                <svg
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">
                Consultation-Led Approach
              </h3>
              <p className="text-gray-600">
                Every patient begins with a comprehensive consultation to review
                medical history, assess suitability, and discuss potential
                regenerative options tailored to individual needs.
              </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-lg bg-white p-8 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                <svg
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">
                Care Available in Nigeria
              </h3>
              <p className="text-gray-600">
                No need for expensive international travel. Receive
                consultation, evaluation, and treatment locally in Abuja or
                Lagos with convenient follow-up care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions We Commonly Support */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Conditions We Commonly Support
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Regenerative medicine may offer supportive care options for a
              variety of conditions. A consultation is required to determine
              suitability.
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                'Joint & Back Pain',
                'Knee Pain',
                'Neck/Shoulder Pain',
                'Stroke Recovery Support',
                'Diabetes Support',
                'Chronic Kidney Disease Support',
                'Erectile Dysfunction Support',
                'Autism & Cerebral Palsy (Supportive Care)',
                'PRP Therapy Options',
                'Regenerative Medicine Evaluation',
              ].map((condition, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded-lg border border-gray-200 bg-gray-50 p-4"
                >
                  <svg
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600"
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
                  <span className="text-sm font-medium text-gray-700">
                    {condition}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm italic text-gray-500">
              Individual results vary. These are informational categories only,
              not guarantees of outcome. A clinical consultation is required.
            </p>
          </div>
        </div>
      </section>

      {/* Additional Conditions Evaluated During Consultation */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
              Additional Conditions Evaluated During Consultation
            </h2>

            <div className="space-y-6 text-gray-700">
              <p className="text-lg leading-relaxed">
                While our primary focus includes the conditions listed above,
                regenerative medicine evaluation may also be considered for
                certain complex medical conditions on a case-by-case basis.
              </p>

              <p className="leading-relaxed">
                Because every patient&apos;s medical history, diagnostic
                findings, and overall health profile are unique, eligibility for
                regenerative treatment options is determined only after a
                comprehensive clinical consultation.
              </p>

              <p className="leading-relaxed">
                Depending on individual assessment, evaluation may be considered
                for:
              </p>

              <ul className="ml-6 space-y-2 text-base">
                <li className="leading-relaxed">
                  Selected autoimmune and inflammatory conditions
                </li>
                <li className="leading-relaxed">
                  Certain neurological and degenerative disorders
                </li>
                <li className="leading-relaxed">
                  Complex musculoskeletal conditions
                </li>
                <li className="leading-relaxed">
                  Metabolic and inflammatory diseases
                </li>
                <li className="leading-relaxed">
                  Early-stage degenerative conditions
                </li>
              </ul>

              <p className="mt-6 leading-relaxed font-medium">
                Not all patients are candidates for regenerative therapies. A
                detailed consultation is required to determine suitability and
                appropriate options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Is Regenerative Medicine */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
              What Is Regenerative Medicine?
            </h2>

            <div className="space-y-6 text-gray-700">
              <p className="text-lg leading-relaxed">
                Regenerative medicine is a field of medical care focused on
                supporting the body's natural healing processes. It may involve
                the use of cellular therapies, growth factors, and biologics
                designed to help repair damaged tissue and support function.
              </p>

              <p className="leading-relaxed">
                While regenerative medicine is advancing globally, it is
                important to understand that outcomes vary by individual, and
                not all patients are suitable candidates. A comprehensive
                medical consultation and evaluation is always the first step.
              </p>

              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-lg font-bold text-gray-900">
                  Key Principles:
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-3">
                    <svg
                      className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600"
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
                    <span>
                      Working with the body&apos;s natural healing mechanisms,
                      not against them
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600"
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
                    <span>
                      Focusing on tissue repair and functional support
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600"
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
                    <span>
                      Using biologics and cellular therapies in controlled
                      clinical settings
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600"
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
                    <span>
                      Individualized treatment planning based on patient history
                      and clinical assessment
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supporting Therapies */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-4 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
              Supporting Therapies
            </h2>
            <p className="mb-10 text-center text-lg text-gray-600">
              These therapies may be used alongside regenerative care as part of
              an individualized plan—especially for orthopedic patients.
            </p>

            <div className="space-y-6 text-gray-700">
              <p className="text-base leading-relaxed">
                We also offer supporting therapies that may complement
                regenerative medicine as part of a personalized care plan.
                Recommendations are based on individual assessment and clinical
                suitability.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3 rounded-lg bg-white p-4 shadow-sm">
                  <svg
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600"
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
                  <div>
                    <p className="font-semibold text-gray-900">
                      Ozone Therapy (MAH, Prolozone, etc.)
                    </p>
                    <p className="mt-1 text-sm text-gray-600">
                      may be considered as a supportive option in certain
                      orthopedic care plans.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-lg bg-white p-4 shadow-sm">
                  <svg
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600"
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
                  <div>
                    <p className="font-semibold text-gray-900">
                      Photobiomodulation / Polychromatic (6-light) Therapy
                    </p>
                    <p className="mt-1 text-sm text-gray-600">
                      a supportive light-based modality that may be incorporated
                      into select care plans; availability may be limited.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-lg bg-white p-4 shadow-sm">
                  <svg
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600"
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
                  <div>
                    <p className="font-semibold text-gray-900">
                      Shockwave Therapy
                    </p>
                    <p className="mt-1 text-sm text-gray-600">
                      may be used as a supportive option for certain
                      musculoskeletal concerns as determined during
                      consultation.
                    </p>
                  </div>
                </div>
              </div>

              {/* Clinic Note Callout */}
              <div className="mt-6 rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4">
                <div className="flex items-start gap-3">
                  <svg
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600"
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
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      Clinic Note:
                    </p>
                    <p className="mt-1 text-sm text-gray-700">
                      Our Photobiomodulation / Polychromatic (6-light) Therapy
                      system is a specialized capability currently uncommon in
                      Nigeria.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your Consultation Process */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Your Consultation Process
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              We take a structured, appointment-based approach to ensure every
              patient receives appropriate evaluation and guidance.
            </p>
          </div>

          <div className="mx-auto max-w-5xl">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {/* Step 1 */}
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">
                  Private Consultation
                </h3>
                <p className="text-sm text-gray-600">
                  Schedule a confidential consultation to discuss your health
                  concerns and goals.
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">
                  Clinical Review
                </h3>
                <p className="text-sm text-gray-600">
                  Comprehensive review of your medical history, current
                  condition, and suitability for regenerative options.
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">
                  Care Plan Options
                </h3>
                <p className="text-sm text-gray-600">
                  Receive a personalized care plan with available options,
                  timelines, and what to expect.
                </p>
              </div>

              {/* Step 4 */}
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <span className="text-2xl font-bold text-blue-600">4</span>
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">
                  Follow-Up Guidance
                </h3>
                <p className="text-sm text-gray-600">
                  Ongoing support and follow-up to monitor progress and address
                  any questions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - PLACEHOLDER */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* TODO: Replace with approved Nigeria testimonials or remove section if not allowed */}
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Patient Experiences
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              While outcomes vary, many patients report positive experiences
              with regenerative care.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Placeholder Testimonial 1 */}
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <div className="mb-4 flex text-xl text-yellow-400">★★★★★</div>
              <p className="mb-4 italic text-gray-700">
                "The consultation process was thorough and professional. I felt
                heard and supported throughout."
              </p>
              <p className="font-medium text-gray-900">— Patient, Abuja</p>
            </div>

            {/* Placeholder Testimonial 2 */}
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <div className="mb-4 flex text-xl text-yellow-400">★★★★★</div>
              <p className="mb-4 italic text-gray-700">
                "I appreciated the careful evaluation and clear explanation of
                my options. Very professional care."
              </p>
              <p className="font-medium text-gray-900">— Patient, Lagos</p>
            </div>

            {/* Placeholder Testimonial 3 */}
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <div className="mb-4 flex text-xl text-yellow-400">★★★★★</div>
              <p className="mb-4 italic text-gray-700">
                "The team was knowledgeable and took the time to answer all my
                questions. I felt confident in their approach."
              </p>
              <p className="font-medium text-gray-900">— Patient, Abuja</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs italic text-gray-500">
              Individual experiences vary. These testimonials are for
              informational purposes and do not guarantee specific outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="bg-white py-16" id="locations">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Our Locations
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Visit us in Abuja or Lagos for your consultation.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
            {/* Abuja Card */}
            <div
              id="abuja"
              className="rounded-lg border border-gray-200 bg-gray-50 p-8 scroll-mt-20"
            >
              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                Abuja Location
              </h3>
              <p className="mb-6 text-gray-700">
                7 Mammam Kontagora Crescent
                <br />
                Katampe Extension, Abuja, FCT
              </p>

              <div className="space-y-3">
                <a
                  href="https://wa.me/2349135300003?text=Hello%2C%20I%27m%20interested%20in%20regenerative%20treatment%20in%20Abuja.%20Please%20share%20the%20next%20steps."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleWhatsAppClick('Abuja')}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-green-600 px-6 py-3 text-base font-semibold text-white transition-all hover:bg-green-700"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chat on WhatsApp
                </a>

                <Link
                  href="/regenerative-nigeria/book"
                  className="flex w-full items-center justify-center rounded-lg border-2 border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 transition-all hover:border-gray-400 hover:bg-gray-50"
                >
                  Request Consultation
                </Link>
              </div>
            </div>

            {/* Lagos Card */}
            <div
              id="lagos"
              className="rounded-lg border border-gray-200 bg-gray-50 p-8 scroll-mt-20"
            >
              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                Lagos Location
              </h3>
              <p className="mb-6 text-gray-700">
                Block 78 Plot 14B, Dan Ogbeide Close
                <br />
                Lekki Phase 1
              </p>

              <div className="space-y-3">
                <a
                  href="https://wa.me/2348183816733?text=Hello%2C%20I%27m%20interested%20in%20regenerative%20treatment%20in%20Lagos.%20Please%20share%20the%20next%20steps."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleWhatsAppClick('Lagos')}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-green-600 px-6 py-3 text-base font-semibold text-white transition-all hover:bg-green-700"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chat on WhatsApp
                </a>

                <Link
                  href="/regenerative-nigeria/book"
                  className="flex w-full items-center justify-center rounded-lg border-2 border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 transition-all hover:border-gray-400 hover:bg-gray-50"
                >
                  Request Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gray-900 py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Ready to Take the Next Step?
          </h2>
          <p className="mb-8 text-lg text-gray-300">
            Contact us today to schedule your private consultation in Abuja or
            Lagos.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/2349135300003?text=Hello%2C%20I%27m%20interested%20in%20regenerative%20treatment%20in%20Abuja.%20Please%20share%20the%20next%20steps."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleWhatsAppClick('Abuja')}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-green-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-green-700 sm:w-auto"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp (Abuja)
            </a>

            <a
              href="https://wa.me/2348183816733?text=Hello%2C%20I%27m%20interested%20in%20regenerative%20treatment%20in%20Lagos.%20Please%20share%20the%20next%20steps."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleWhatsAppClick('Lagos')}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-green-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-green-700 sm:w-auto"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp (Lagos)
            </a>
          </div>

          <div className="mt-6">
            <Link
              href="/regenerative-nigeria/book"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white bg-white/10 px-8 py-3 text-base font-medium text-white backdrop-blur-sm transition-all hover:bg-white hover:text-gray-900"
            >
              Request a Consultation
            </Link>
          </div>

          <p className="mt-8 text-xs text-gray-400">
            Medical information on this page is for educational purposes only
            and is not a substitute for professional medical advice. A
            consultation is required to determine eligibility and appropriate
            options.
          </p>
        </div>
      </section>
    </div>
  );
}
