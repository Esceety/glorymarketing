/**
 * Meta Pixel tracking helpers for Nigeria regenerative medicine funnel
 */

/**
 * Track WhatsApp CTA click on landing or book pages
 * Fires once per click (no duplicates on double click)
 */
export function trackNigeriaWhatsAppLead(
  location: 'Abuja' | 'Lagos',
  testEventCode?: string | null
): void {
  if (typeof window === 'undefined' || !window.fbq) {
    return;
  }

  const eventData = {
    content_name: 'Nigeria Regenerative',
    content_category: 'Nigeria',
    location,
    lead_source: 'whatsapp_click',
  };

  if (testEventCode) {
    window.fbq('track', 'Lead', eventData, {
      eventID: `lead_nigeria_wa_${location.toLowerCase()}_${Date.now()}`,
      test_event_code: testEventCode,
    });
  } else {
    window.fbq('track', 'Lead', eventData);
  }
}

/**
 * Track success page load (form submission complete)
 * Should be called once per page load using useRef guard
 */
export function trackNigeriaSuccessLead(testEventCode?: string | null): void {
  if (typeof window === 'undefined' || !window.fbq) {
    return;
  }

  const eventData = {
    content_name: 'Nigeria Regenerative',
    content_category: 'Nigeria',
    lead_source: 'whatsapp_or_form',
  };

  if (testEventCode) {
    window.fbq('track', 'Lead', eventData, {
      eventID: `lead_nigeria_success_${Date.now()}`,
      test_event_code: testEventCode,
    });
  } else {
    window.fbq('track', 'Lead', eventData);
  }
}
