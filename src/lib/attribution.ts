/**
 * Where a visitor came from (2026-09-25, owner: "anything that comes through
 * the funnel should also be captured today"). The first landing of a visit
 * keeps its ad codes, landing page and referrer; the opt-in sends them to the
 * Glory Operations Platform, where Marketing → Leads reports on them.
 *
 * First touch wins for 30 days: a person who came from a Facebook ad and later
 * types the address in still counts for the ad. A newer link WITH ad codes
 * replaces it (a second campaign brought them back). Browser storage only;
 * nothing is sent until they opt in.
 */

const KEY = 'glory.attribution.v1';
const TTL_MS = 30 * 24 * 60 * 60 * 1000;
const CODES = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'fbclid', 'gclid'] as const;

export interface Attribution {
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmTerm?: string;
  fbclid?: string;
  gclid?: string;
  landingPage?: string;
  referrer?: string;
  firstSeenAt?: string;
}

const clip = (v: string | null) => (v ? v.slice(0, 300) : undefined);

function read(): Attribution | null {
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return null;
    const a = JSON.parse(raw) as Attribution;
    if (!a.firstSeenAt || Date.now() - Date.parse(a.firstSeenAt) > TTL_MS) return null;
    return a;
  } catch {
    return null;
  }
}

/** Call on every page view; records the first landing (or a newer ad click). */
export function captureAttribution(): void {
  if (typeof window === 'undefined') return;
  try {
    const q = new URLSearchParams(window.location.search);
    const hasCodes = CODES.some((c) => q.get(c));
    if (read() && !hasCodes) return;
    const ref = document.referrer && !document.referrer.includes(window.location.host) ? document.referrer : undefined;
    const a: Attribution = {
      utmSource: clip(q.get('utm_source')),
      utmMedium: clip(q.get('utm_medium')),
      utmCampaign: clip(q.get('utm_campaign')),
      utmContent: clip(q.get('utm_content')),
      utmTerm: clip(q.get('utm_term')),
      fbclid: clip(q.get('fbclid')),
      gclid: clip(q.get('gclid')),
      landingPage: window.location.origin + window.location.pathname,
      referrer: clip(ref ?? null),
      firstSeenAt: new Date().toISOString(),
    };
    window.localStorage.setItem(KEY, JSON.stringify(a));
  } catch {
    // Private mode / storage blocked: the opt-in still works, just without a source.
  }
}

/** What to send with an opt-in. */
export function getAttribution(): Attribution | null {
  if (typeof window === 'undefined') return null;
  return read();
}
