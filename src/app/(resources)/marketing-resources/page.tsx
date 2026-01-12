'use client';

import { Metadata } from 'next';
import Image from 'next/image';

export default function MarketingResourcesPage() {
  const handleDownloadPDF = () => {
    window.print();
  };

  return (
    <>
      <style jsx global>{`
        @media print {
          a {
            color: #0891b2 !important;
            text-decoration: underline !important;
          }
          a[href^='http']:not([href*='javascript']) {
            word-wrap: break-word;
          }
        }
      `}</style>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
        {/* Header Section */}
        <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 shadow-sm print:hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3 sm:gap-6 w-full sm:w-auto">
                <Image
                  src="https://ceety-asset-hub.s3.us-east-1.amazonaws.com/ceetyobjects/292b74c9-f117-4255-a087-85d0dca96591-ceety-primary-logo.png"
                  alt="Ceety Systems Logo"
                  width={100}
                  height={33}
                  className="h-8 sm:h-10 w-auto flex-shrink-0"
                />
                <div className="h-6 sm:h-8 w-px bg-teal-500/30 hidden xs:block"></div>
                <div className="flex-1 min-w-0">
                  <h1 className="text-base sm:text-xl font-bold text-gray-900 leading-tight">
                    Glory Regenerative Center
                  </h1>
                  <p className="text-xs sm:text-sm text-teal-600">
                    Marketing Resource Hub
                  </p>
                </div>
              </div>
              <button
                onClick={handleDownloadPDF}
                className="bg-teal-500 hover:bg-teal-600 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg font-semibold transition-colors duration-200 shadow-sm text-sm sm:text-base w-full sm:w-auto whitespace-nowrap"
              >
                Download PDF
              </button>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          {/* Company Information Card */}
          <section className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-8 mb-6 sm:mb-8 shadow-sm">
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-teal-50 rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 text-teal-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <div className="flex-1 w-full">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Ceety Systems
                </h2>
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 text-gray-700">
                  <div>
                    <p className="text-sm text-teal-600 font-semibold mb-1">
                      Address
                    </p>
                    <p className="text-sm leading-relaxed">
                      11806 Bruce B. Downs Blvd,
                      <br />
                      Unit #1203,
                      <br />
                      Tampa, FL 33612
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-teal-600 font-semibold mb-1">
                      Contact
                    </p>
                    <p className="text-sm">
                      <a
                        href="mailto:info@ceetysystems.com"
                        className="text-teal-600 hover:text-teal-700 transition-colors underline"
                      >
                        info@ceetysystems.com
                      </a>
                      <br />
                      <a
                        href="mailto:info@esceety.com"
                        className="text-teal-600 hover:text-teal-700 transition-colors underline"
                      >
                        info@esceety.com
                      </a>
                      <br />
                      <a
                        href="https://www.ceetysystems.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-600 hover:text-teal-700 transition-colors underline"
                      >
                        www.ceetysystems.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Marketing Overview */}
          <section className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-8 mb-6 sm:mb-8 shadow-sm">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-teal-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-900">
                Marketing Overview
              </h2>
            </div>

            <div className="bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-200 rounded-lg sm:rounded-xl p-4 sm:p-6 mb-4 sm:mb-6">
              <h3 className="text-base sm:text-xl font-bold text-teal-700 mb-2 sm:mb-3">
                Glory Regenerative Center – Knee, Hip, Neck, Lower Back & Joint Pain Relief
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 italic">
                In-Clinic · Tampa Bay Area
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-teal-700 mb-2 sm:mb-3">
                  Purpose
                </h4>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Please review this document in full with your team to gain a
                  complete understanding of the marketing and patient
                  acquisition process for Glory Regenerative Center. This
                  overview walks through the end-to-end experience—from initial
                  patient engagement and education to appointment booking and
                  in-clinic care—so all stakeholders understand how each step
                  supports patient trust, treatment readiness, and overall
                  campaign performance. The goal is to align messaging, user
                  experience, and operational follow-up in order to maximize
                  patient outcomes, appointment conversions, and return on
                  marketing investment (ROI).
                </p>
              </div>
            </div>
          </section>

          {/* Campaign Links */}
          <section className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-8 mb-6 sm:mb-8 shadow-sm">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-teal-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>
              </div>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-900">
                Campaign Links
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              {[
                {
                  title: 'Landing Page',
                  url: 'https://gloryregenerativemed.com/',
                  description: 'Main campaign landing page',
                },
                {
                  title: 'Book Appointment',
                  url: 'https://gloryregenerativemed.com/book',
                  description: 'Direct booking page',
                },
                {
                  title: 'Success Page',
                  url: 'https://gloryregenerativemed.com/success',
                  description: 'Post-submission confirmation',
                },
                {
                  title: 'Privacy Policy & Terms',
                  url: 'https://gloryregenerativemed.com/privacy-policy-terms-conditions',
                  description: 'Legal information',
                },
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gray-50 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 rounded-xl p-5 transition-all duration-200 hover:shadow-md"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                      <svg
                        className="w-5 h-5 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-800 group-hover:text-blue-700 transition-colors mb-1">
                        {link.title}
                      </p>
                      <p className="text-xs text-gray-600 mb-2">
                        {link.description}
                      </p>
                      <p className="text-xs text-gray-500 font-mono truncate">
                        {link.url}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Lead Tracking */}
          <section className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-8 mb-6 sm:mb-8 shadow-sm">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-teal-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-900">
                Lead Tracking
              </h2>
            </div>

            <a
              href="https://docs.google.com/spreadsheets/d/1O0XOwKr11KryfjawOkGmW81d5__qQGqIxpanYWMW5XA/edit?gid=0#gid=0"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 hover:border-green-400 rounded-xl p-6 transition-all duration-200 hover:shadow-md flex items-center gap-4"
            >
              <div className="flex-shrink-0 w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-200 transition-colors">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-lg font-bold text-gray-800 group-hover:text-green-700 transition-colors mb-1">
                  Glory Regenerative Center - Master Lead Spreadsheet-v1
                </p>
                <p className="text-sm text-gray-600">
                  Google Sheets • Click to open
                </p>
              </div>
              <svg
                className="w-6 h-6 text-gray-500 group-hover:text-green-600 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </section>

          {/* Video Resources */}
          <section className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-8 mb-6 sm:mb-8 shadow-sm">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-teal-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Video Resources
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              {[
                {
                  title: 'Managing Facebook Advertising Comments and Messages',
                  url: 'https://www.loom.com/share/5ebb84adee09449db3cfa648887f33d4',
                },
                {
                  title:
                    'How to Manually Reschedule a Patient and Update Appointment Reminders',
                  url: 'https://www.loom.com/share/fa72376d303e4e2484fae2904e9adc83',
                },
                {
                  title:
                    'Understanding Contacts in GoHighLevel: Features and Functionality',
                  url: 'https://www.loom.com/share/aa3abe5804234ec39274cc0afac9812c',
                },
                {
                  title: 'Navigating the CRM Calendar for Appointments 📅',
                  url: 'https://www.loom.com/share/a1235d165c81482895058c3ea18dcf7a',
                },
                {
                  title:
                    'Mastering the Conversations Tab for Effective Lead Management',
                  url: 'https://www.loom.com/share/dd887c121a2b4fd9b0c6eb6efc556aa1',
                },
                {
                  title:
                    'Understanding the Opportunities Pipeline in the CRM (GoHiLevel)',
                  url: 'https://www.loom.com/share/0f88e536d3b54ad3b56d65812868d444',
                },
              ].map((video, index) => (
                <a
                  key={index}
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gray-50 border border-gray-200 hover:border-teal-300 hover:bg-teal-50 rounded-xl p-5 transition-all duration-200 hover:shadow-md"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center group-hover:bg-teal-200 transition-colors">
                      <svg
                        className="w-5 h-5 text-teal-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-800 group-hover:text-teal-700 transition-colors leading-snug">
                        {video.title}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Click to watch
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Google Spreadsheet */}
          <section className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-8 mb-6 sm:mb-8 shadow-sm">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-teal-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-900">
                Lead Tracking
              </h2>
            </div>

            <a
              href="https://docs.google.com/spreadsheets/d/1O0XOwKr11KryfjawOkGmW81d5__qQGqIxpanYWMW5XA/edit?gid=0#gid=0"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 hover:border-green-400 rounded-xl p-6 transition-all duration-200 hover:shadow-md flex items-center gap-4"
            >
              <div className="flex-shrink-0 w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-200 transition-colors">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-lg font-bold text-gray-800 group-hover:text-green-700 transition-colors mb-1">
                  Glory Regenerative Center - Master Lead Spreadsheet-v1
                </p>
                <p className="text-sm text-gray-600">
                  Google Sheets • Click to open
                </p>
              </div>
              <svg
                className="w-6 h-6 text-gray-500 group-hover:text-green-600 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </section>

          {/* CRM Details */}
          <section className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-8 mb-6 sm:mb-8 shadow-sm">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-teal-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Ceety CRM Details
              </h2>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg sm:rounded-xl p-4 sm:p-6 space-y-4">
              <div>
                <p className="text-sm text-purple-700 font-semibold mb-2">
                  CRM Access
                </p>
                <div className="space-y-2">
                  <a
                    href="https://app.esceety-us.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-600 hover:text-teal-700 transition-colors text-sm font-medium flex items-center gap-2 underline"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    CRM Portal: app.esceety-us.com
                  </a>
                  <p className="text-sm text-gray-700">
                    Phone App:{' '}
                    <span className="text-teal-700 font-semibold">
                      &quot;Lead Connector&quot;
                    </span>
                  </p>
                </div>
              </div>

              <div className="border-t border-purple-200 pt-4">
                <p className="text-sm text-purple-700 font-semibold mb-2">
                  Login Credentials
                </p>
                <div className="bg-white rounded-lg p-4 space-y-2 border border-purple-100">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Username:</span>
                    <span className="text-sm text-gray-900 font-mono">
                      Dayisi@aol.om
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Password:</span>
                    <span className="text-sm text-amber-600 italic">
                      Will be provided via email
                    </span>
                  </div>
                </div>
              </div>

              <div className="border-t border-purple-200 pt-4">
                <p className="text-sm text-purple-700 font-semibold mb-2">
                  Automation
                </p>
                <p className="text-sm text-gray-700">
                  High Level Automation Phone Number:{' '}
                  <span className="text-amber-600 italic">Coming soon!</span>
                </p>
              </div>

              <div className="border-t border-purple-200 pt-4">
                <p className="text-sm text-purple-700 font-semibold mb-3">
                  Support Contact
                </p>
                <div className="space-y-2">
                  <a
                    href="mailto:chris@esceety.com"
                    className="text-teal-600 hover:text-teal-700 transition-colors text-sm block underline"
                  >
                    chris@esceety.com
                  </a>
                  <a
                    href="mailto:info@esceety.com"
                    className="text-teal-600 hover:text-teal-700 transition-colors text-sm block underline"
                  >
                    info@esceety.com
                  </a>
                  <p className="text-sm text-gray-700 mt-2">
                    Or call your assigned Account Manager
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Next Steps */}
          <section className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl sm:rounded-2xl border border-teal-200 p-4 sm:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-900">
                Next Steps
              </h2>
            </div>
            <p className="text-gray-700 text-lg">
              Next, we will create ads in Facebook Ads Manager.
            </p>
          </section>
        </div>

        {/* Footer */}
        <footer className="bg-gray-100 border-t border-gray-200 mt-12 sm:mt-16 print:bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-center sm:text-left">
              <p className="text-xs sm:text-sm text-gray-600">
                Ceety Systems is a DBA of Esceety Inc. (USA). In Nigeria,
                services are provided by Ceety Systems & Consulting Ltd.
              </p>
              <p className="text-xs sm:text-sm text-gray-500 whitespace-nowrap">
                © 2025 Esceety Inc. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
