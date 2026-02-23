'use client';

import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { trackNigeriaSuccessLead } from '@/lib/nigeriaTracking';

export default function RegenerativeNigeriaSuccessPage() {
  const hasTrackedRef = useRef(false);
  const searchParams = useSearchParams();
  const [leadData, setLeadData] = useState<{
    fullName?: string;
    phone?: string;
    email?: string;
    preferredLocation?: string;
    primaryConcern?: string;
    timestamp?: string;
  } | null>(null);

  useEffect(() => {
    // Fire Lead event only once when page mounts
    if (!hasTrackedRef.current) {
      const testEventCode = searchParams?.get('test_event_code');
      trackNigeriaSuccessLead(testEventCode);
      hasTrackedRef.current = true;
    }
  }, [searchParams]);

  useEffect(() => {
    // Load lead data from localStorage if available
    try {
      const storedData = localStorage.getItem('nigeriaLeadDraft');
      if (storedData) {
        const data = JSON.parse(storedData);
        setLeadData(data);
        // Clear after reading
        localStorage.removeItem('nigeriaLeadDraft');
      }
    } catch (error) {
      console.error('Error reading lead data:', error);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Success Icon */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
            <svg
              className="h-12 w-12 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h1 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            Thank You — Request Received
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Your consultation request has been received. Our team will respond
            via WhatsApp or phone shortly.
          </p>
        </div>

        {/* Lead Summary Card (if data available) */}
        {leadData && (
          <div className="mb-8 rounded-lg bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-bold text-gray-900">
              Your Request Summary
            </h2>
            <dl className="space-y-3">
              {leadData.fullName && (
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <dt className="text-sm font-medium text-gray-500">Name:</dt>
                  <dd className="text-sm text-gray-900">{leadData.fullName}</dd>
                </div>
              )}
              {leadData.phone && (
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <dt className="text-sm font-medium text-gray-500">Phone:</dt>
                  <dd className="text-sm text-gray-900">{leadData.phone}</dd>
                </div>
              )}
              {leadData.email && (
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <dt className="text-sm font-medium text-gray-500">Email:</dt>
                  <dd className="text-sm text-gray-900">{leadData.email}</dd>
                </div>
              )}
              {leadData.preferredLocation && (
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <dt className="text-sm font-medium text-gray-500">
                    Location:
                  </dt>
                  <dd className="text-sm text-gray-900">
                    {leadData.preferredLocation}
                  </dd>
                </div>
              )}
              {leadData.primaryConcern && (
                <div className="border-b border-gray-100 pb-2">
                  <dt className="mb-1 text-sm font-medium text-gray-500">
                    Concern:
                  </dt>
                  <dd className="text-sm text-gray-700">
                    {leadData.primaryConcern}
                  </dd>
                </div>
              )}
            </dl>
          </div>
        )}

        {/* Next Steps */}
        <div className="mb-8 rounded-lg bg-blue-50 p-6">
          <h2 className="mb-4 text-lg font-bold text-gray-900">
            What Happens Next?
          </h2>
          <ol className="space-y-3 text-sm text-gray-700">
            <li className="flex items-start gap-3">
              <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                1
              </div>
              <span>
                Our team will review your request and reach out via WhatsApp or
                phone within 24 hours
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                2
              </div>
              <span>
                We'll schedule a convenient time for your private consultation
                at either our Abuja or Lagos location
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                3
              </div>
              <span>
                During your consultation, we'll review your medical history and
                discuss available regenerative options
              </span>
            </li>
          </ol>
        </div>

        {/* WhatsApp Contact (Backup) */}
        <div className="mb-8 rounded-lg border-2 border-green-200 bg-green-50 p-6">
          <h2 className="mb-4 text-lg font-bold text-gray-900">
            Need Immediate Assistance?
          </h2>
          <p className="mb-4 text-sm text-gray-600">
            You can also reach us directly on WhatsApp:
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            {/* Abuja */}
            <a
              href="https://wa.me/2349135300003?text=Hello%2C%20I%20just%20submitted%20a%20consultation%20request.%20Can%20you%20confirm%20receipt%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg bg-green-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-green-700"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat Abuja
            </a>

            {/* Lagos */}
            <a
              href="https://wa.me/2348183816733?text=Hello%2C%20I%20just%20submitted%20a%20consultation%20request.%20Can%20you%20confirm%20receipt%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg bg-green-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-green-700"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat Lagos
            </a>
          </div>
        </div>

        {/* Back to Home Link */}
        <div className="text-center">
          <Link
            href="/regenerative-nigeria"
            className="inline-flex items-center justify-center rounded-lg border-2 border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 transition-all hover:border-gray-400 hover:bg-gray-50"
          >
            ← Back to Nigeria Landing
          </Link>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 text-center text-xs text-gray-500">
          <p>
            By submitting your information, you consent to being contacted by
            Glory Wellness & Regenerative Centre – Nigeria via phone, WhatsApp,
            or email regarding your consultation request.
          </p>
        </div>
      </div>
    </div>
  );
}
