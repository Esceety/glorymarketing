// SMS / A2P 10DLC consent language — keep identical to
// gloryregenerative-platform apps/web/src/data/sms-consent.ts. Shown beside
// the optional, unchecked SMS opt-in and sent with the submission
// (`smsConsentText`) so the Operations Platform keeps what was agreed.

export const SMS_BRAND = 'Glory MedClinic, LLC (Glory Regenerative Center)';

export const SMS_CONSENT_TEXT =
  `I agree to receive text messages from ${SMS_BRAND} at the phone number ` +
  'provided about my consultation request, appointment scheduling and ' +
  'reminders, follow-ups, and occasional offers and promotions. Message ' +
  'frequency varies. Message and data rates may apply. Reply STOP to opt ' +
  'out or HELP for help. Consent is not a condition of purchase or ' +
  'treatment. Mobile information will not be shared with third parties or ' +
  'affiliates for marketing or promotional purposes.';

/** Bold lead-in that opens the checkbox label and the filed wording. */
export const SMS_CONSENT_LEAD_IN = 'Text me (optional).';

/** Closing sentence; rendered with a live link to the privacy/terms page. */
export const SMS_CONSENT_CLOSING = 'See our Privacy Policy and Terms.';

/** The complete wording as filed with TCR — stored with every opt-in. */
export const SMS_CONSENT_FULL_TEXT = `${SMS_CONSENT_LEAD_IN} ${SMS_CONSENT_TEXT} ${SMS_CONSENT_CLOSING}`;

/** Bump whenever the wording changes, so old records stay attributable. */
export const SMS_CONSENT_VERSION = '2026-09-17';
