'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  
  // Detect if we're in the weight-loss funnel
  const isWeightLossPage = pathname?.startsWith('/weight-loss') ?? false;
  
  // Use weight-loss specific privacy page if in that funnel
  const privacyHref = isWeightLossPage
    ? '/weight-loss/privacy-policy-terms-conditions'
    : '/privacy-policy-terms-conditions';

  return (
    <footer className="border-t mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-gray-600">
              © {currentYear} Glory Regenerative. All rights reserved.
            </p>
          </div>
          <div>
            <Link
              href={privacyHref}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Privacy Policy & Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
