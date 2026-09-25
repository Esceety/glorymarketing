'use client';

/**
 * The page a funnel booking lands on: its own URL (/book/requested,
 * /stem-cell/book/requested), so Meta and other ad platforms can count a
 * booked appointment as a conversion (owner 2026-09-24: "the success page is
 * typically a URL to measure"). It fires the Meta "Schedule" event once and
 * shows the platform's own confirmation (requested time, office, what
 * happens next) for the appointment in `?ref=`.
 */

import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';

const BOOKING_ORIGIN = 'https://ops.gloryregenerative.com';
// The consultation calendars and the weight-loss ones (weight-loss-tampa, …).
const CALENDAR = /^(weight-loss-)?(tampa|lakeland|new-port-richey)$/;
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export function BookingRequested({ offer }: { offer: string }) {
  const params = useSearchParams();
  const office = params?.get('office') ?? '';
  const ref = params?.get('ref') ?? '';
  // The platform's confirmation (inside the frame) says requested or confirmed.
  const status = params?.get('status') === 'confirmed' ? 'confirmed' : 'requested';
  const valid = CALENDAR.test(office) && UUID.test(ref);
  const [height, setHeight] = useState(900);
  const tracked = useRef(false);

  useEffect(() => {
    if (tracked.current || typeof window === 'undefined' || !window.fbq) return;
    tracked.current = true;
    const testEventCode = params?.get('test_event_code');
    const data = { content_name: offer, content_category: 'Consultation' };
    if (testEventCode) {
      window.fbq('track', 'Schedule', data, { eventID: `schedule_${ref || Date.now()}`, test_event_code: testEventCode });
    } else {
      window.fbq('track', 'Schedule', data, { eventID: `schedule_${ref || Date.now()}` });
    }
  }, [offer, params, ref]);

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (event.origin !== BOOKING_ORIGIN) return;
      const d = event.data as { type?: string; height?: number } | null;
      if (d?.type === 'ceety:embed-height' && typeof d.height === 'number' && d.height > 200) {
        setHeight(Math.ceil(d.height));
      }
    };
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, []);

  return (
    <div className="space-y-10 py-8 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {valid ? (
          <iframe
            src={`${BOOKING_ORIGIN}/book/${office}/success?ref=${encodeURIComponent(ref)}&status=${status}`}
            title="Your appointment"
            className="w-full rounded-xl border border-gray-200 bg-white"
            style={{ height }}
          />
        ) : (
          <p className="text-center text-gray-700 text-lg">
            <strong className="block text-2xl text-gray-900 mb-2">Appointment Requested</strong>
            We received your request. You&apos;ll get a confirmation by email and text shortly.
          </p>
        )}
      </div>

      <div className="max-w-4xl mx-auto bg-blue-50 border border-blue-200 rounded-xl p-6 sm:p-8">
        <h2 className="text-xl font-bold mb-3">Questions?</h2>
        <p className="text-gray-700 mb-3">Call the office you chose. We&apos;re happy to help.</p>
        <p className="text-gray-800">
          <strong>Tampa:</strong> (813) 932-9798 · <strong>Lakeland:</strong> (863) 248-6881 ·{' '}
          <strong>New Port Richey:</strong> (727) 232-0826
        </p>
      </div>
    </div>
  );
}
