'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useRouter } from 'next/navigation';
import {
  SMS_CONSENT_MARKETING_FULL_TEXT,
  SMS_CONSENT_MARKETING_LEAD_IN,
  SMS_CONSENT_MARKETING_TEXT,
  SMS_CONSENT_SERVICE_FULL_TEXT,
  SMS_CONSENT_SERVICE_LEAD_IN,
  SMS_CONSENT_SERVICE_TEXT,
  SMS_CONSENT_VERSION,
} from '@/lib/sms-consent';
import { TurnstileWidget, turnstileEnabled } from './TurnstileWidget';
import { getAttribution } from '@/lib/attribution';

interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
  formId?: string; // which offer; the ids are the old GoHighLevel form ids
}

/**
 * The "Claim your voucher" pop-up. Until 2026-09-23 it framed a GoHighLevel
 * form from link.esceety-us.com; that host has served another site's 404
 * since 2026-09-06, so the pop-up showed an error and no voucher lead arrived.
 * It is a native form now, posting to /api/voucher-optin, which hands the
 * lead to the Glory Operations Platform. Callers still pass the old GHL form
 * id, which picks the offer below.
 */
const OFFERS: Record<
  string,
  { offer: string; heading: string; sub: string; successPath: string; privacyHref: string }
> = {
  ouANN3PSeW0qb7AAdVpr: {
    offer: 'pain-relief',
    heading: 'Claim your $100 Pain Relief Voucher',
    sub: 'Knee, hip, neck, lower back and joint pain assessment. We will be in touch to schedule your visit.',
    successPath: '/book',
    privacyHref: '/privacy-policy-terms-conditions',
  },
  unuDEJBs8DPU2COLwKLT: {
    offer: 'stem-cell',
    heading: 'Claim your $100 Stem Cell Consultation Voucher',
    sub: 'Full health history, comprehensive evaluation and a personalized treatment plan.',
    // Its own booking page, which preselects the stem-cell voucher (it sent
    // stem-cell leads to /book, the pain-relief page, until 2026-09-24).
    successPath: '/stem-cell/book',
    privacyHref: '/privacy-policy-terms-conditions',
  },
  wz9f6DHcnCdzO5C7vX0x: {
    offer: 'weight-loss',
    heading: 'Claim 50% off your first month',
    sub: 'Physician-supervised medical weight loss for new patients.',
    // The weight-loss calendars, like the other offers (2026-09-24; the old
    // /weight-loss/success page had no way to book).
    successPath: '/weight-loss/book',
    privacyHref: '/weight-loss/privacy-policy-terms-conditions',
  },
};

const EMPTY = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  smsConsent: false,
  smsMarketingConsent: false,
  website: '', // honeypot: people never see it
};

export function FormModal({ isOpen, onClose, formId = 'ouANN3PSeW0qb7AAdVpr' }: FormModalProps) {
  const [mounted, setMounted] = useState(false);
  const [form, setForm] = useState(EMPTY);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  // Bot check: one token per submit; a failed submit remounts for a new one.
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [turnstileFailed, setTurnstileFailed] = useState(false);
  const [turnstileKey, setTurnstileKey] = useState(0);
  const router = useRouter();
  const config = OFFERS[formId] ?? OFFERS['ouANN3PSeW0qb7AAdVpr'];

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const set = (key: keyof typeof EMPTY, value: string | boolean) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);
    try {
      const res = await fetch('/api/voucher-optin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          offer: config.offer,
          turnstileToken: turnstileToken ?? '',
          attribution: getAttribution(),
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          phone: form.phone,
          smsConsent: form.smsConsent,
          smsConsentText: form.smsConsent ? SMS_CONSENT_SERVICE_FULL_TEXT : '',
          smsMarketingConsent: form.smsMarketingConsent,
          smsMarketingConsentText: form.smsMarketingConsent ? SMS_CONSENT_MARKETING_FULL_TEXT : '',
          smsConsentVersion: form.smsConsent || form.smsMarketingConsent ? SMS_CONSENT_VERSION : '',
          sourceUrl: window.location.href,
          website: form.website,
        }),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(data.error || 'Something went wrong. Please try again or call (813) 932-9798.');
      }
      const data = (await res.json().catch(() => ({}))) as { leadPass?: string | null };
      // Meta "Lead" at the claim itself. The old /success pages fired it;
      // since the pop-up leads straight to booking (2026-09-23) nothing did.
      // (A /success page still fires it itself: weight loss.)
      if (typeof window !== 'undefined' && window.fbq && !config.successPath.endsWith('/success')) {
        const testEventCode = new URLSearchParams(window.location.search).get('test_event_code');
        const leadData = { content_name: config.heading, content_category: config.offer };
        if (testEventCode) {
          window.fbq('track', 'Lead', leadData, { eventID: `lead_${config.offer}_${Date.now()}`, test_event_code: testEventCode });
        } else {
          window.fbq('track', 'Lead', leadData, { eventID: `lead_${config.offer}_${Date.now()}` });
        }
      }
      setForm(EMPTY);
      onClose();
      // Keep campaign parameters (UTM, test codes) across the redirect, and
      // add the lead pass: the booking calendar then shows "Booking as …"
      // instead of asking name, email and phone again. The pass names no one;
      // it is a signed reference the platform checks (2026-09-24).
      const query = new URLSearchParams(window.location.search);
      if (data.leadPass) query.set('lead', data.leadPass);
      const qs = query.toString();
      router.push(`${config.successPath}${qs ? `?${qs}` : ''}`);
    } catch (err) {
      if (turnstileEnabled) {
        setTurnstileToken(null);
        setTurnstileKey((k) => k + 1);
      }
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (!mounted || !isOpen) return null;

  const input =
    'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent';

  // Portalled to <body>: the pages open this from inside sections with a
  // backdrop blur, and a blur makes that section the frame for anything
  // `fixed`, so the overlay was clipped to the section instead of the screen.
  return createPortal(
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto"
      onClick={onClose}
    >
      <div className="min-h-full flex items-center justify-center p-4">
        <div
          className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl animate-in zoom-in-95 duration-300"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute -top-4 -right-4 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white hover:bg-gray-100 shadow-lg transition-all hover:scale-110"
            aria-label="Close form"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <form onSubmit={onSubmit} className="p-6 sm:p-8 space-y-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{config.heading}</h2>
              <p className="mt-1 text-sm text-gray-600">{config.sub}</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="vo-first" className="block text-sm font-medium text-gray-700 mb-1">First name *</label>
                <input id="vo-first" required autoComplete="given-name" value={form.firstName}
                  onChange={(e) => set('firstName', e.target.value)} className={input} />
              </div>
              <div>
                <label htmlFor="vo-last" className="block text-sm font-medium text-gray-700 mb-1">Last name *</label>
                <input id="vo-last" required autoComplete="family-name" value={form.lastName}
                  onChange={(e) => set('lastName', e.target.value)} className={input} />
              </div>
            </div>
            <div>
              <label htmlFor="vo-email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
              <input id="vo-email" type="email" required autoComplete="email" value={form.email}
                onChange={(e) => set('email', e.target.value)} className={input} />
            </div>
            <div>
              <label htmlFor="vo-phone" className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
              <input id="vo-phone" type="tel" required autoComplete="tel" value={form.phone}
                onChange={(e) => set('phone', e.target.value)} className={input} />
            </div>

            {/* Honeypot: hidden from people, filled by bots. */}
            <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true"
              value={form.website} onChange={(e) => set('website', e.target.value)}
              style={{ position: 'absolute', left: '-10000px', width: 1, height: 1, opacity: 0 }} />

            {/* SMS opt-ins (A2P 10DLC): TWO separate boxes, both optional and
                unchecked, either one alone. Same wording as every other form. */}
            <div className="space-y-3">
              <label className="flex items-start gap-3 rounded-lg border border-gray-200 p-4 cursor-pointer">
                <input type="checkbox" name="smsConsent" checked={form.smsConsent}
                  onChange={(e) => set('smsConsent', e.target.checked)} className="mt-1 h-4 w-4 flex-shrink-0" />
                <span className="text-xs leading-relaxed text-gray-600">
                  <span className="font-semibold text-gray-800">{SMS_CONSENT_SERVICE_LEAD_IN}</span>{' '}
                  {SMS_CONSENT_SERVICE_TEXT} See our{' '}
                  <a href={config.privacyHref} className="underline">Privacy Policy &amp; Terms</a>.
                </span>
              </label>
              <label className="flex items-start gap-3 rounded-lg border border-gray-200 p-4 cursor-pointer">
                <input type="checkbox" name="smsMarketingConsent" checked={form.smsMarketingConsent}
                  onChange={(e) => set('smsMarketingConsent', e.target.checked)} className="mt-1 h-4 w-4 flex-shrink-0" />
                <span className="text-xs leading-relaxed text-gray-600">
                  <span className="font-semibold text-gray-800">{SMS_CONSENT_MARKETING_LEAD_IN}</span>{' '}
                  {SMS_CONSENT_MARKETING_TEXT} See our{' '}
                  <a href={config.privacyHref} className="underline">Privacy Policy &amp; Terms</a>.
                </span>
              </label>
            </div>

            <TurnstileWidget
              key={turnstileKey}
              onToken={(t, failed) => {
                setTurnstileToken(t);
                setTurnstileFailed(Boolean(failed));
              }}
            />
            {turnstileEnabled && !turnstileToken && (
              <p className="text-xs text-center text-gray-500">
                {turnstileFailed
                  ? 'The security check could not load. Please refresh the page, or call (813) 932-9798.'
                  : 'Checking your connection is secure…'}
              </p>
            )}
            {error && <p className="text-sm text-red-600" role="alert">{error}</p>}

            <button type="submit" disabled={submitting || (turnstileEnabled && !turnstileToken)}
              className="w-full py-4 rounded-xl font-bold text-white bg-red-600 hover:bg-red-700 disabled:opacity-60 transition-colors">
              {submitting ? 'Sending…' : 'Claim my voucher'}
            </button>
          </form>
        </div>
      </div>
    </div>,
    document.body,
  );
}
