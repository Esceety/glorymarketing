'use client';

import { useEffect, useState } from 'react';

interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FormModal({ isOpen, onClose }: FormModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Set mounted on the next tick to avoid SSR issues
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!mounted || !isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto"
      onClick={onClose}
    >
      <div className="min-h-full flex items-center justify-center p-4">
        <div
          className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl animate-in zoom-in-95 duration-300"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute -top-4 -right-4 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white hover:bg-gray-100 shadow-lg transition-all hover:scale-110"
            aria-label="Close form"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Form Content */}
          <div className="w-full rounded-2xl overflow-hidden">
            <iframe
              src="https://link.esceety-us.com/widget/form/ouANN3PSeW0qb7AAdVpr"
              style={{
                width: '100%',
                height: '650px',
                border: 'none',
              }}
              id="inline-ouANN3PSeW0qb7AAdVpr"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name='A) New "Preferred" Lead Optin Form'
              data-height="638"
              data-layout-iframe-id="inline-ouANN3PSeW0qb7AAdVpr"
              data-form-id="ouANN3PSeW0qb7AAdVpr"
              title='A) New "Preferred" Lead Optin Form'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
