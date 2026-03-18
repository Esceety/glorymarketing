import { ReactNode } from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Script from 'next/script';

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

// Force dynamic rendering to support useSearchParams in child pages
export const dynamic = 'force-dynamic';

export default function NigeriaLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {/* Nigeria-Specific Meta Pixel */}
      <Script
        id="meta-pixel-nigeria"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window,document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2567808313570758');
            fbq('track', 'PageView');
          `,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=2567808313570758&ev=PageView&noscript=1"
        />
      </noscript>

      {/* Google Analytics Tag */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-XNJH08H8XZ"
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics-nigeria"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XNJH08H8XZ');
          `,
        }}
      />

      <div className="flex min-h-screen flex-col bg-white">
      {/* Simple Institutional Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-1">
              <a href="/regenerative-nigeria" className="inline-block">
                <Image
                  src="/images/Glory-logo-ng.png"
                  alt="Glory Wellness & Regenerative Centre – Nigeria"
                  width={200}
                  height={60}
                  className="h-10 w-auto sm:h-12"
                  priority
                />
              </a>
            </div>

            {/* Location Chips - Link to landing page sections */}
            <div className="flex items-center gap-2 ml-4">
              <a
                href="/regenerative-nigeria#abuja"
                className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 border border-blue-200 hover:bg-blue-100 transition-colors"
              >
                Abuja
              </a>
              <a
                href="/regenerative-nigeria#lagos"
                className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 border border-blue-200 hover:bg-blue-100 transition-colors"
              >
                Lagos
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Simple Institutional Footer */}
      <footer className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Abuja Location */}
            <div className="space-y-3">
              <h3 className="text-base font-bold text-gray-900">
                Abuja Location
              </h3>
              <p className="text-sm text-gray-700">
                7 Mammam Kontagora Crescent
                <br />
                Katampe Extension, Abuja, FCT
              </p>
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <a
                  href="https://wa.me/2349135300003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-green-600 hover:text-green-700"
                >
                  +234 913 530 0003
                </a>
              </div>
            </div>

            {/* Lagos Location */}
            <div className="space-y-3">
              <h3 className="text-base font-bold text-gray-900">
                Lagos Location
              </h3>
              <p className="text-sm text-gray-700">
                Block 78 Plot 14B, Dan Ogbeide Close
                <br />
                Lekki Phase 1
              </p>
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <a
                  href="https://wa.me/2348183816733"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-green-600 hover:text-green-700"
                >
                  +234 818 381 6733
                </a>
              </div>
            </div>
          </div>

          {/* Medical Disclaimer */}
          <div className="mt-8 border-t border-gray-200 pt-8">
            <p className="text-xs text-gray-600 leading-relaxed">
              <strong>Medical Disclaimer:</strong> Medical information on this
              page is for educational purposes only and is not a substitute for
              professional medical advice. Outcomes vary by individual. A
              consultation is required to determine eligibility and appropriate
              options.
            </p>
          </div>

          {/* Copyright */}
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} Glory Wellness & Regenerative Centre
              – Nigeria. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      </div>
    </>
  );
}
