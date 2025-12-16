'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FormModal({ isOpen, onClose }: FormModalProps) {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

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

  useEffect(() => {
    // Listen for messages from the iframe (form submission)
    const handleMessage = (event: MessageEvent) => {
      // Check if message is from GoHighLevel
      if (event.origin === 'https://link.esceety-us.com') {
        // Check if this is a form submission event
        if (event.data && typeof event.data === 'object') {
          const data = event.data;
          
          // Store form data in localStorage for pre-filling the calendar
          if (data.contact || data.firstName || data.first_name) {
            const formData = {
              firstName: data.firstName || data.first_name || data.contact?.firstName || '',
              lastName: data.lastName || data.last_name || data.contact?.lastName || '',
              email: data.email || data.contact?.email || '',
              phone: data.phone || data.phoneNumber || data.contact?.phone || '',
              timestamp: new Date().toISOString(),
            };
            
            // Only store if we have at least some data
            if (formData.firstName || formData.email || formData.phone) {
              localStorage.setItem('userFormData', JSON.stringify(formData));
            }
          }

          // If the message indicates success or redirection, navigate to book page
          if (data.eventName === 'form_submitted' || data.type === 'redirect' || data.success) {
            setTimeout(() => {
              onClose();
              router.push('/book');
            }, 500);
          }
        }
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [onClose, router]);

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
