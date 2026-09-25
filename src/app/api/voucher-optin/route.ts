import { NextRequest, NextResponse } from 'next/server';

import { forwardToPlatform, recordSmsConsents } from '@/lib/platform-handoff';

/**
 * Voucher opt-in forms (the "Claim your voucher" pop-ups on the home page,
 * /stem-cell and /weight-loss). They were GoHighLevel form iframes served
 * from link.esceety-us.com, which has answered with another site's 404 since
 * 2026-09-06, so no voucher lead arrived after that. They are native forms
 * now (2026-09-23) and hand off to the Glory Operations Platform.
 *
 * The form key tells the platform which voucher automation to run, so each
 * pop-up keeps the key its GoHighLevel form had.
 */
export const runtime = 'nodejs';

const FORMS: Record<
  string,
  { formKey: string; productLine: string; services: string[]; program: string }
> = {
  'pain-relief': {
    formKey: 'a-new-preferred-lead-optin-form',
    productLine: 'stem_cell_voucher',
    services: ['Pain & Orthopedic Care'],
    program: 'Pain Relief Voucher',
  },
  'stem-cell': {
    formKey: 'b-new-preferred-lead-optin-form',
    productLine: 'stem_cell_voucher',
    services: ['Stem Cell Therapy'],
    program: 'Stem Cell Consultation Voucher',
  },
  'weight-loss': {
    formKey: 'entry-weight-loss-lead-optin-form',
    productLine: 'weight_loss',
    services: ['Weight Loss Program'],
    program: 'Weight Loss (50% off first month)',
  },
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  let payload: Record<string, unknown>;
  try {
    payload = (await req.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: 'Invalid body.' }, { status: 400 });
  }
  const form = FORMS[typeof payload.offer === 'string' ? payload.offer : ''];
  if (!form) return NextResponse.json({ error: 'Unknown form.' }, { status: 400 });

  const text = (k: string) => (typeof payload[k] === 'string' ? (payload[k] as string).trim() : '');
  if (!text('firstName') || !text('lastName') || !EMAIL_RE.test(text('email')) || !text('phone')) {
    return NextResponse.json(
      { error: 'Please enter your first and last name, a valid email and your phone number.' },
      { status: 400 },
    );
  }

  await recordSmsConsents(req, payload, form.formKey, 'https://gloryregenerativemed.com/');

  const result = await forwardToPlatform(req, {
    formKey: form.formKey,
    productLine: form.productLine,
    services: form.services,
    program: form.program,
    firstName: text('firstName'),
    lastName: text('lastName'),
    email: text('email'),
    phone: text('phone'),
    smsConsent: payload.smsConsent === true,
    smsConsentText: payload.smsConsent === true ? text('smsConsentText') : '',
    smsMarketingConsent: payload.smsMarketingConsent === true,
    smsMarketingConsentText: payload.smsMarketingConsent === true ? text('smsMarketingConsentText') : '',
    smsConsentVersion: text('smsConsentVersion'),
    sourceUrl: text('sourceUrl'),
    website: text('website'), // honeypot, passed through for the platform's spam check
    // Turnstile: verified by the platform intake with the visitor's IP (2026-09-25).
    turnstileToken: text('turnstileToken'),
    // Ad codes, landing page and referrer from the visit (Marketing → Leads, 2026-09-25).
    ...(payload.attribution && typeof payload.attribution === 'object' ? { attribution: payload.attribution } : {}),
  });
  if (!result.ok) {
    console.error(`[voucher-optin] platform intake returned ${result.status}`);
    return NextResponse.json(
      { error: 'We could not send your request. Please try again or call (813) 932-9798.' },
      { status: 502 },
    );
  }
  const leadPass = typeof result.body?.leadPass === 'string' ? result.body.leadPass : null;
  return NextResponse.json({ ok: true, leadPass });
}
