'use client';

import { captureAttribution, getAttribution, type Attribution } from '@/lib/attribution';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

/**
 * Two-step booking: choose an office, then pick a time on that office's
 * booking page on the Glory Operations Platform (ops.gloryregenerative.com).
 * Until 2026-09-23 step 2 framed a GoHighLevel calendar from
 * link.esceety-us.com, which has served another site's 404 since 2026-09-06.
 * The platform page reports its content height ('ceety:embed-height'), so
 * the frame grows with it on phones instead of clipping the time slots.
 */
export interface Location {
  id: string;
  name: string;
  address: string;
  iframeUrl: string;
}

const BOOKING_ORIGIN = 'https://ops.gloryregenerative.com';

/** The three weight-loss calendars (Weight Loss Visit; no payment, staff confirm). */
export const WEIGHT_LOSS_LOCATIONS: Location[] = [
  {
    id: 'tampa',
    name: 'Tampa',
    address: '8019 N. Himes Ave., Suite 200, Tampa, FL 33614',
    iframeUrl: `${BOOKING_ORIGIN}/book/weight-loss-tampa`,
  },
  {
    id: 'lakeland',
    name: 'Lakeland',
    address: '1818 Harden Blvd., Suite 110, Lakeland, FL 33803',
    iframeUrl: `${BOOKING_ORIGIN}/book/weight-loss-lakeland`,
  },
  {
    id: 'newportrichey',
    name: 'New Port Richey',
    address: '5622 Marine Parkway, Suite 8, New Port Richey, FL 34652',
    iframeUrl: `${BOOKING_ORIGIN}/book/weight-loss-new-port-richey`,
  },
];

const DEFAULT_LOCATIONS: Location[] = [
  {
    id: 'tampa',
    name: 'Tampa',
    address: '8019 N. Himes Ave., Suite 200, Tampa, FL 33614',
    iframeUrl: `${BOOKING_ORIGIN}/book/tampa`,
  },
  {
    id: 'lakeland',
    name: 'Lakeland',
    address: '1818 Harden Blvd., Suite 110, Lakeland, FL 33803',
    iframeUrl: `${BOOKING_ORIGIN}/book/lakeland`,
  },
  {
    id: 'newportrichey',
    name: 'New Port Richey',
    address: '5622 Marine Parkway, Suite 8, New Port Richey, FL 34652',
    iframeUrl: `${BOOKING_ORIGIN}/book/new-port-richey`,
  },
];

/**
 * The pain (/book) and stem-cell (/stem-cell/book) funnels are one offer and
 * book the same three Glory Regenerative consultation calendars (owner
 * 2026-09-24); the platform tells them apart by the lead's tag. A caller can
 * still pass its own list; with one office the visitor starts on the time
 * picker.
 */
export function MultiStepCalendar({
  locations = DEFAULT_LOCATIONS,
  service,
  successPath,
}: {
  locations?: Location[];
  /**
   * Where a finished booking goes (2026-09-24): its own confirmation URL, so
   * ad platforms can count it. Absent = the confirmation stays in the frame.
   */
  successPath?: string;
  /** Preselects the offer on the platform page's "What would you like to discuss?" (2026-09-24). */
  service?: string;
} = {}) {
  const only = locations.length === 1 ? locations[0] : null;
  const [currentStep, setCurrentStep] = useState(only ? 2 : 1);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    only
  );
  const [frameHeight, setFrameHeight] = useState(1200);
  // The voucher opt-in's lead pass (?lead=), handed to the platform page so
  // it recognises the visitor instead of asking their details again.
  const [lead, setLead] = useState<string | null>(null);
  // Where the visitor came from, passed to the platform's booking page so a
  // booking without an opt-in still counts for its ad or channel (2026-09-25).
  const [attribution, setAttribution] = useState<Attribution | null>(null);
  const router = useRouter();
  useEffect(() => {
    const v = new URLSearchParams(window.location.search).get('lead');
    if (v && /^[sp]\.[0-9a-f-]{36}\.\d{9,11}\.[A-Za-z0-9_-]{20,}$/.test(v)) setLead(v);
    captureAttribution();
    setAttribution(getAttribution());
  }, []);

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (event.origin !== BOOKING_ORIGIN) return;
      const data = event.data as { type?: string; height?: number } | null;
      if (data?.type === 'ceety:embed-height' && typeof data.height === 'number' && data.height > 200) {
        setFrameHeight(Math.ceil(data.height));
      }
      // The platform page reports a finished booking: open the confirmation
      // page, keeping the ad codes (utm_*, click ids, test_event_code).
      const done = event.data as { type?: string; ref?: string; slug?: string; status?: string } | null;
      if (successPath && done?.type === 'ceety:booking-complete' && done.ref && done.slug) {
        const q = new URLSearchParams();
        const here = new URLSearchParams(window.location.search);
        for (const [k, v] of here) if (/^(utm_|fbclid$|gclid$|test_event_code$)/.test(k)) q.set(k, v);
        q.set('office', done.slug);
        q.set('ref', done.ref);
        q.set('status', done.status === 'confirmed' ? 'confirmed' : 'requested');
        router.push(`${successPath}?${q.toString()}`);
      }
    };
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, [successPath, router]);

  const handleLocationSelect = (location: Location) => {
    setSelectedLocation(location);
  };

  const handleNext = () => {
    if (selectedLocation && currentStep === 1) {
      setCurrentStep(2);
    }
  };

  const handlePrevious = () => {
    if (currentStep === 2) {
      setCurrentStep(1);
    }
  };

  return (
    <div className="w-full">
      {/* Step Indicator */}
      <div className="flex items-center justify-center mb-8 gap-4">
        <div className="flex items-center">
          <div
            className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-sm sm:text-base ${
              currentStep === 1
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-600'
            }`}
          >
            1
          </div>
          <span
            className={`ml-2 sm:ml-3 font-semibold text-sm sm:text-base ${
              currentStep === 1 ? 'text-gray-900' : 'text-gray-400'
            }`}
          >
            Location
          </span>
        </div>

        <div className="w-8 sm:w-12 h-0.5 bg-gray-300"></div>

        <div className="flex items-center">
          <div
            className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-sm sm:text-base ${
              currentStep === 2
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-600'
            }`}
          >
            2
          </div>
          <span
            className={`ml-2 sm:ml-3 font-semibold text-sm sm:text-base ${
              currentStep === 2 ? 'text-gray-900' : 'text-gray-400'
            }`}
          >
            Details and Finish
          </span>
        </div>
      </div>

      {/* Step Content */}
      <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-8 shadow-sm">
        {currentStep === 1 && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-blue-600"
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
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                Location
              </h2>
            </div>

            <p className="text-sm sm:text-base text-gray-600 mb-4">
              Choose your preferred location to book your appointment:
            </p>

            <div className="space-y-3">
              {locations.map((location) => (
                <label
                  key={location.id}
                  className={`flex items-start p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    selectedLocation?.id === location.id
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="location"
                    value={location.id}
                    checked={selectedLocation?.id === location.id}
                    onChange={() => handleLocationSelect(location)}
                    className="mt-1 w-4 h-4 text-blue-600 focus:ring-blue-500"
                  />
                  <div className="ml-3 flex-1">
                    <div className="font-semibold text-gray-900 text-sm sm:text-base">
                      {location.name}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 mt-1">
                      {location.address}
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </div>
        )}

        {currentStep === 2 && selectedLocation && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-blue-600"
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
              </div>
              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                  Book Your Appointment
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  Location:{' '}
                  <span className="font-semibold">{selectedLocation.name}</span>
                </p>
              </div>
            </div>

            <div className="rounded-lg w-full">
              <iframe
                key={selectedLocation.id}
                src={`${selectedLocation.iframeUrl}${bookingQuery(service, lead, attribution)}`}
                title={`Book an appointment in ${selectedLocation.name}`}
                style={{
                  width: '100%',
                  height: `${frameHeight}px`,
                  border: 'none',
                }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center mt-6 gap-4">
        <button
          onClick={handlePrevious}
          disabled={currentStep === 1}
          className={`px-6 py-2.5 rounded-lg font-semibold transition-all text-sm sm:text-base ${
            currentStep === 1
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50'
          }`}
        >
          Previous
        </button>

        {currentStep === 1 && (
          <button
            onClick={handleNext}
            disabled={!selectedLocation}
            className={`px-6 py-2.5 rounded-lg font-semibold transition-all text-sm sm:text-base ${
              selectedLocation
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}

/** `?service=…&lead=…` plus the visit's ad codes / landing page / referrer. */
function bookingQuery(service: string | undefined, lead: string | null, a: Attribution | null): string {
  const q = new URLSearchParams();
  if (service) q.set('service', service);
  if (lead) q.set('lead', lead);
  if (a) {
    const put = (k: string, v: string | undefined) => { if (v) q.set(k, v); };
    put('utm_source', a.utmSource);
    put('utm_medium', a.utmMedium);
    put('utm_campaign', a.utmCampaign);
    put('utm_content', a.utmContent);
    put('utm_term', a.utmTerm);
    put('fbclid', a.fbclid);
    put('gclid', a.gclid);
    put('lp', a.landingPage);
    put('rf', a.referrer);
  }
  const s = q.toString();
  return s ? `?${s}` : '';
}
