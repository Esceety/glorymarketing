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
 * is forwarded to GHL exactly as before.
 *
 * The lead still reaches GHL even if the consent write fails; a booking is
 * never lost over an audit record.
 */
export const runtime = 'nodejs';

const GHL_WEBHOOK_URL =
  process.env.WEIGHT_LOSS_WEBHOOK_URL ??
  'https://services.leadconnectorhq.com/hooks/frOF5AUZh2Y3wYJ8wlQw/webhook-trigger/a71bc017-5d5a-4e54-b07c-35e7887106bd';

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

  // 2. Forward the lead to GoHighLevel, unchanged.
  try {
    const res = await fetch(GHL_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      console.error('[weight-loss-booking] webhook returned', res.status);
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
