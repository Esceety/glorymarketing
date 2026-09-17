import {
  SMS_CONSENT_MARKETING_LEAD_IN,
  SMS_CONSENT_MARKETING_TEXT,
  SMS_CONSENT_SERVICE_LEAD_IN,
  SMS_CONSENT_SERVICE_TEXT,
} from '@/lib/sms-consent';

/**
 * Always-rendered SMS disclosure.
 *
 * Carrier and TCR reviewers read the page as it loads — they do not work
 * through the booking wizard. The A2P campaign was rejected (error 30896)
 * because the only copy of this wording sat behind step 2, so it is repeated
 * here in the server-rendered HTML.
 *
 * Both opt-ins are shown separately because they are separate boxes on the
 * form: the second rejection was for bundling promotional consent with
 * service messages.
 *
 * Wording comes from `@/lib/sms-consent`, the same constants the checkboxes
 * use, which are themselves kept identical to the consultation site's copy.
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
        The booking form on this page has{' '}
        <strong className="font-semibold text-gray-800">
          two separate, optional, unchecked
        </strong>{' '}
        boxes asking whether we may text you — one for messages about your
        appointment, and a separate one for offers and promotions. You may tick
        either, both or neither. The form submits either way, and consent is
        never a condition of purchase or treatment. This is the wording beside
        each box:
      </p>

      <blockquote className="mt-3 border-l-2 border-blue-500/40 pl-4 text-sm leading-relaxed text-gray-600">
        <span className="font-semibold text-gray-800">
          {SMS_CONSENT_SERVICE_LEAD_IN}
        </span>{' '}
        {SMS_CONSENT_SERVICE_TEXT} See our{' '}
        <a
          href="/weight-loss/privacy-policy-terms-conditions"
          className="underline underline-offset-2 hover:text-gray-900"
        >
          Privacy Policy &amp; Terms
        </a>
        .
      </blockquote>

      <blockquote className="mt-3 border-l-2 border-blue-500/40 pl-4 text-sm leading-relaxed text-gray-600">
        <span className="font-semibold text-gray-800">
          {SMS_CONSENT_MARKETING_LEAD_IN}
        </span>{' '}
        {SMS_CONSENT_MARKETING_TEXT} See our{' '}
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
        programme details, our opt-out keywords and a picture of the opt-ins are
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
