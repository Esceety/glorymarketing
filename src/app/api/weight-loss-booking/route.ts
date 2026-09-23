import { NextRequest, NextResponse } from 'next/server';

/**
 * Weight-loss booking submissions.
 *
 * The form used to POST straight from the browser to the GoHighLevel
 * webhook, which left no proof of consent anywhere we control: no source
 * URL, no IP, no user agent, and nothing retained if GHL ever changed hands.
 * Submissions now come here first so that, when the optional SMS box is
 * ticked, the opt-in is written to the consent table on
 * gloryregenerative.com (same store as consultation opt-ins) before the lead
 * is handed to the Glory Operations Platform (GoHighLevel until 2026-09-23).
 *
 * The lead still reaches the platform even if the consent write fails; a
 * booking is never lost over an audit record.
 */
export const runtime = 'nodejs';

// The Glory Operations Platform replaced the GoHighLevel webhook at go-live
// (2026-09-23). `PLATFORM_INTAKE_URL` overrides the target for local testing
// only.
const PLATFORM_INTAKE_URL =
  process.env.PLATFORM_INTAKE_URL ||
  'https://ops.gloryregenerative.com/api/public/intake';

const CONSENT_ENDPOINT =
  process.env.SMS_CONSENT_ENDPOINT ??
  'https://gloryregenerative.com/api/sms-consent';

function clientIp(req: NextRequest): string | null {
  const forwarded = req.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0]?.trim() || null;
  return req.headers.get('x-real-ip') || null;
}

export async function POST(req: NextRequest) {
  let payload: Record<string, unknown>;
  try {
    payload = (await req.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: 'Invalid body.' }, { status: 400 });
  }

  const str = (key: string): string | null =>
    typeof payload[key] === 'string' ? (payload[key] as string) : null;

  // 1. Proof of consent, before anything can go wrong downstream. The service
  // and marketing boxes are separate controls, so each ticked box is recorded
  // as its own row — a marketing audit must never be answered with a service
  // opt-in.
  const ingestKey = process.env.SMS_CONSENT_INGEST_KEY;
  const consents: { type: 'service' | 'marketing'; text: string | null }[] = [];
  if (payload.smsConsent === true) {
    consents.push({ type: 'service', text: str('smsConsentText') });
  }
  if (payload.smsMarketingConsent === true) {
    consents.push({ type: 'marketing', text: str('smsMarketingConsentText') });
  }

  if (consents.length > 0 && str('phone')) {
    if (!ingestKey) {
      console.error('[weight-loss-booking] SMS_CONSENT_INGEST_KEY not set');
    } else {
      for (const consent of consents) {
        try {
          const res = await fetch(CONSENT_ENDPOINT, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'x-consent-key': ingestKey,
            },
            body: JSON.stringify({
              phone: str('phone'),
              email: str('email'),
              name: [str('firstName'), str('lastName')]
                .filter(Boolean)
                .join(' '),
              sourceUrl:
                str('sourceUrl') ??
                'https://gloryregenerativemed.com/weight-loss/book',
              sourceForm: 'weight-loss-booking',
              consentType: consent.type,
              consentText: consent.text,
              consentVersion: str('smsConsentVersion'),
              ipAddress: clientIp(req),
              userAgent: req.headers.get('user-agent'),
            }),
          });
          if (!res.ok) {
            console.error(
              `[weight-loss-booking] ${consent.type} consent record HTTP`,
              res.status,
            );
          }
        } catch {
          console.error(
            `[weight-loss-booking] ${consent.type} consent record failed`,
          );
        }
      }
    }
  }

  // 2. Hand the lead to the platform: it becomes a patient at the chosen
  // office with a card on Patient Journey → New Lead, the whole request kept
  // on the record (current and goal weight included) and the clinic's
  // automations fired. `services` names the program, because notes are
  // optional here and the platform needs a message or a service. The
  // visitor's IP and browser go along so the platform records the person.
  const ip = clientIp(req);
  try {
    const res = await fetch(PLATFORM_INTAKE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(ip ? { 'x-forwarded-for': ip } : {}),
        'user-agent': req.headers.get('user-agent') || 'gloryregenerativemed.com',
      },
      body: JSON.stringify({
        ...payload,
        formKey: 'weight-loss-booking',
        productLine: 'weight_loss',
        services: ['Weight Loss Program'],
      }),
      cache: 'no-store',
    });
    if (!res.ok) {
      console.error('[weight-loss-booking] platform intake returned', res.status);
      return NextResponse.json(
        { error: 'Submission failed. Please try again.' },
        { status: 502 },
      );
    }
  } catch {
    return NextResponse.json(
      { error: 'Submission failed. Please try again.' },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
