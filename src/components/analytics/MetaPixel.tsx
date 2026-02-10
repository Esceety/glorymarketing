'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

declare global {
  interface Window {
    fbq: any;
    _fbq: any;
  }
}

export function MetaPixel() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Track PageView on route change with test_event_code support
    if (window.fbq) {
      const testEventCode = searchParams?.get('test_event_code');
      
      if (testEventCode) {
        // Include test_event_code for Meta Test Events tool
        window.fbq('track', 'PageView', {}, { eventID: `pageview_${Date.now()}`, test_event_code: testEventCode });
      } else {
        window.fbq('track', 'PageView');
      }
    }
  }, [pathname, searchParams]);

  return null;
}
