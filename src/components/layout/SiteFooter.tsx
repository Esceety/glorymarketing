import Link from 'next/link';

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

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
              href="/privacy-policy-terms-conditions"
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
