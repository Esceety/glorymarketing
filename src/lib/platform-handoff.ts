import type { NextRequest } from 'next/server';

// Server-side only: imported by API routes, never by a component (it reads
// SMS_CONSENT_INGEST_KEY).

/**
 * Hand-off from gloryregenerativemed.com to the Glory Operations Platform
 * (ops.gloryregenerative.com), which replaced GoHighLevel on 2026-09-23.
 *
 * Two steps, in this order, for every form:
 *   1. Proof of text-message consent: each ticked box is written to the
 *      consent table on gloryregenerative.com (the same store the
 *      consultation wizard uses) before anything can go wrong downstream.
 *   2. The lead goes to the platform's public intake, which files it as a
 *      patient with a card on Patient Journey → New Lead and fires the
 *      clinic's automations for that form.
 * A failed consent write never loses the lead; a failed hand-off is reported
 * to the visitor, never swallowed. Nothing personal is logged.
 */

const PLATFORM_INTAKE_URL =
  process.env.PLATFORM_INTAKE_URL ||
  'https://ops.gloryregenerative.com/api/public/intake';

const CONSENT_ENDPOINT =
  process.env.SMS_CONSENT_ENDPOINT ||
  'https://gloryregenerative.com/api/sms-consent';

export function clientIp(req: NextRequest): string | null {
  const forwarded = req.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0]?.trim() || null;
  return req.headers.get('x-real-ip') || null;
}

const str = (payload: Record<string, unknown>, key: string): string | null =>
  typeof payload[key] === 'string' ? (payload[key] as string) : null;

/** Step 1: one consent row per ticked box (service and marketing are separate). */
export async function recordSmsConsents(
  req: NextRequest,
  payload: Record<string, unknown>,
  sourceForm: string,
  defaultSourceUrl: string,
): Promise<void> {
  const consents: { type: 'service' | 'marketing'; text: string | null }[] = [];
  if (payload.smsConsent === true) {
    consents.push({ type: 'service', text: str(payload, 'smsConsentText') });
  }
  if (payload.smsMarketingConsent === true) {
    consents.push({ type: 'marketing', text: str(payload, 'smsMarketingConsentText') });
  }
  if (consents.length === 0 || !str(payload, 'phone')) return;

  const ingestKey = process.env.SMS_CONSENT_INGEST_KEY;
  if (!ingestKey) {
    console.error(`[${sourceForm}] SMS_CONSENT_INGEST_KEY not set`);
    return;
  }
  for (const consent of consents) {
    try {
      const res = await fetch(CONSENT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-consent-key': ingestKey },
        body: JSON.stringify({
          phone: str(payload, 'phone'),
          email: str(payload, 'email'),
          name: [str(payload, 'firstName'), str(payload, 'lastName')].filter(Boolean).join(' '),
          sourceUrl: str(payload, 'sourceUrl') ?? defaultSourceUrl,
          sourceForm,
          consentType: consent.type,
          consentText: consent.text,
          consentVersion: str(payload, 'smsConsentVersion'),
          ipAddress: clientIp(req),
          userAgent: req.headers.get('user-agent'),
        }),
      });
      if (!res.ok) console.error(`[${sourceForm}] ${consent.type} consent record HTTP`, res.status);
    } catch {
      console.error(`[${sourceForm}] ${consent.type} consent record failed`);
    }
  }
}

/** Step 2: the lead to the platform. Returns whether the platform accepted it. */
export async function forwardToPlatform(
  req: NextRequest,
  body: Record<string, unknown>,
): Promise<{ ok: boolean; status: number }> {
  const ip = clientIp(req);
  try {
    const res = await fetch(PLATFORM_INTAKE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(ip ? { 'x-forwarded-for': ip } : {}),
        'user-agent': req.headers.get('user-agent') || 'gloryregenerativemed.com',
      },
      body: JSON.stringify(body),
      cache: 'no-store',
    });
    return { ok: res.ok, status: res.status };
  } catch {
    return { ok: false, status: 0 };
  }
}
