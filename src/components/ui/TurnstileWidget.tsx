'use client';

/**
 * Cloudflare Turnstile on the voucher pop-up (owner 2026-09-25: "make sure
 * turnstile is turned on and working on all our form submissions"). The same
 * component as the Glory Operations Platform's booking form; the token goes
 * with the lead to the platform intake, which verifies it.
 *
 * Renders only where the app has NEXT_PUBLIC_TURNSTILE_SITE_KEY (inlined at
 * build); `turnstileEnabled` tells the form whether to wait for a token. The
 * token is single-use: after any submit the server has spent, remount with a
 * new `key` to get a fresh one. Managed mode is usually invisible; it asks
 * for a click only when Cloudflare is unsure about the visitor.
 */

import { useEffect, useRef } from 'react';

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? '';
const SCRIPT_SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';

export const turnstileEnabled = SITE_KEY.length > 0;

interface TurnstileApi {
  render: (el: HTMLElement, opts: Record<string, unknown>) => string;
  remove: (id: string) => void;
}

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

let loading: Promise<void> | null = null;
function loadScript(): Promise<void> {
  if (typeof window === 'undefined') return Promise.resolve();
  if (window.turnstile) return Promise.resolve();
  if (!loading) {
    loading = new Promise<void>((resolve, reject) => {
      const s = document.createElement('script');
      s.src = SCRIPT_SRC;
      s.async = true;
      s.onload = () => resolve();
      s.onerror = () => {
        loading = null;
        reject(new Error('turnstile script failed'));
      };
      document.head.appendChild(s);
    });
  }
  return loading;
}

export function TurnstileWidget({ onToken }: { onToken: (token: string | null, failed?: boolean) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const cb = useRef(onToken);
  cb.current = onToken;

  useEffect(() => {
    if (!turnstileEnabled) return;
    let id: string | null = null;
    let cancelled = false;
    loadScript()
      .then(() => {
        if (cancelled || !ref.current || !window.turnstile) return;
        id = window.turnstile.render(ref.current, {
          sitekey: SITE_KEY,
          appearance: 'interaction-only',
          'refresh-expired': 'auto',
          callback: (t: string) => cb.current(t),
          'expired-callback': () => cb.current(null),
          'error-callback': () => cb.current(null, true),
        });
      })
      .catch(() => cb.current(null, true));
    return () => {
      cancelled = true;
      if (id && window.turnstile) window.turnstile.remove(id);
    };
  }, []);

  if (!turnstileEnabled) return null;
  return <div ref={ref} className="flex justify-center" />;
}
