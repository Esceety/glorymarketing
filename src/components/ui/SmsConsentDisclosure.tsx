import { SMS_CONSENT_LEAD_IN, SMS_CONSENT_TEXT } from '@/lib/sms-consent';

/**
 * Always-rendered SMS disclosure.
 *
 * Carrier and TCR reviewers read the page as it loads — they do not work
 * through the booking wizard. The A2P campaign was rejected (error 30896)
 * because the only copy of this wording sat behind step 2, so it is repeated
 * here in the server-rendered HTML.
 *
 * Wording comes from `@/lib/sms-consent`, the same constant the checkbox
 * uses, which is itself kept identical to the consultation site's copy.
 */
export function SmsConsentDisclosure({
  className = '',
}: {
  className?: string;
}) {
  return (
    <aside
      id="sms-consent-disclosure"
      aria-label="SMS messaging consent disclosure"
      className={`rounded-lg border border-gray-200 bg-gray-50 p-5 sm:p-6 ${className}`}
    >
      <h2 className="text-base font-semibold text-gray-900">
        Text messages from Glory Regenerative Center
      </h2>

      <p className="mt-2 text-sm leading-relaxed text-gray-600">
        The booking form on this page includes an{' '}
        <strong className="font-semibold text-gray-800">
          optional, unchecked
        </strong>{' '}
        box asking whether we may text you. Ticking it is never required — the
        form submits either way, and consent is not a condition of purchase or
        treatment. This is the wording beside that box:
      </p>

      <blockquote className="mt-3 border-l-2 border-blue-500/40 pl-4 text-sm leading-relaxed text-gray-600">
        <span className="font-semibold text-gray-800">
          {SMS_CONSENT_LEAD_IN}
        </span>{' '}
        {SMS_CONSENT_TEXT} See our{' '}
        <a
          href="/weight-loss/privacy-policy-terms-conditions"
          className="underline underline-offset-2 hover:text-gray-900"
        >
          Privacy Policy &amp; Terms
        </a>
        .
      </blockquote>

      <p className="mt-3 text-sm leading-relaxed text-gray-600">
        Reply STOP to any message to opt out, or HELP for help. The full
        programme details, our opt-out keywords and a picture of the opt-in are
        on{' '}
        <a
          href="https://gloryregenerative.com/sms-consent"
          className="underline underline-offset-2 hover:text-gray-900"
        >
          gloryregenerative.com/sms-consent
        </a>
        .
      </p>
    </aside>
  );
}
