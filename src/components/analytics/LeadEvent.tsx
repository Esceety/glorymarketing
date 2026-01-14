'use client';

import { useEffect } from 'react';

export function LeadEvent() {
  useEffect(() => {
    // Fire Lead event when component mounts (user lands on /success page)
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Lead');
    }
  }, []);

  return null;
}
