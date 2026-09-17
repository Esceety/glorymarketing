// SMS / A2P 10DLC consent language — keep identical to
// gloryregenerative-platform apps/web/src/data/sms-consent.ts.
//
// TWO separate opt-ins, never bundled. The carrier reviewer rejected the
// campaign with: "Marketing text consent is bundled into a single checkbox
// with non marketing sms consent. Action Required: Separate the form
// mechanics by creating a dedicated, standalone checkbox exclusively for
// promotional text messages."
//
// Both boxes are optional and unchecked, and either may be ticked without the
// other. The wording of whichever box was ticked is sent with the submission
// so the Operations Platform keeps proof of exactly what was agreed.

export const SMS_BRAND = 'Glory MedClinic, LLC (Glory Regenerative Center)';

/** Bold lead-ins that open each checkbox label. */
export const SMS_CONSENT_SERVICE_LEAD_IN =
  'Text me about my appointment (optional).';
export const SMS_CONSENT_MARKETING_LEAD_IN =
  'Text me offers and promotions (optional).';

/** Service / transactional messages. */
export const SMS_CONSENT_SERVICE_TEXT =
  `I agree to receive text messages from ${SMS_BRAND} at the phone number ` +
  'provided about my consultation request, appointment scheduling, ' +
  'confirmations, reminders and follow-ups. Message frequency varies. ' +
  'Message and data rates may apply. Reply STOP to opt out or HELP for ' +
  'help. Consent is not a condition of purchase or treatment. Mobile ' +
  'information will not be shared with third parties or affiliates for ' +
  'marketing or promotional purposes.';

/** Promotional messages — a separate, standalone opt-in. */
export const SMS_CONSENT_MARKETING_TEXT =
  `I agree to receive promotional text messages from ${SMS_BRAND} at the ` +
  'phone number provided about offers, promotions and clinic news. Message ' +
  'frequency varies. Message and data rates may apply. Reply STOP to opt ' +
  'out or HELP for help. Consent is not a condition of purchase or ' +
  'treatment. Mobile information will not be shared with third parties or ' +
  'affiliates for marketing or promotional purposes.';

/** Closing sentence; rendered with live links to the privacy/terms pages. */
export const SMS_CONSENT_CLOSING = 'See our Privacy Policy and Terms.';

/** Complete wording per opt-in — what a person sees, and what is stored. */
export const SMS_CONSENT_SERVICE_FULL_TEXT = `${SMS_CONSENT_SERVICE_LEAD_IN} ${SMS_CONSENT_SERVICE_TEXT} ${SMS_CONSENT_CLOSING}`;
export const SMS_CONSENT_MARKETING_FULL_TEXT = `${SMS_CONSENT_MARKETING_LEAD_IN} ${SMS_CONSENT_MARKETING_TEXT} ${SMS_CONSENT_CLOSING}`;

/** Bump whenever either wording changes, so old records stay attributable. */
export const SMS_CONSENT_VERSION = '2026-09-17.2';
