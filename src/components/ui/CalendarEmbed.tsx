'use client';

import { useEffect } from 'react';

export function CalendarEmbed() {
  useEffect(() => {
    // Load the script dynamically
    const script = document.createElement('script');
    script.src = 'https://link.esceety-us.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="rounded-lg min-h-[400px]">
      <iframe
        src="https://link.esceety-us.com/widget/booking/8Z3JN19i8waO6kIbz4HF"
        style={{ width: '100%', border: 'none', overflow: 'hidden' }}
        scrolling="no"
        id="8Z3JN19i8waO6kIbz4HF_1764614468737"
      />
    </div>
  );
}
