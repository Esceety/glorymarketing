'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { FormModal } from '@/components/ui/FormModal';

const navItems = [{ label: 'Home', href: '/' }];

export function SiteHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();

  // Hide navigation on payment-related pages
  const isPaymentPage =
    pathname?.includes('/voucher-payment') ||
    pathname?.includes('/payment-success') ||
    pathname?.includes('/payment-cancelled');

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center ${isPaymentPage ? 'justify-center' : 'justify-between'} h-16`}
          >
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center hover:opacity-80 transition-opacity"
            >
              <Image
                src="/images/glorylogo-2x.jpg.webp"
                alt="Glory Regenerative Center"
                width={280}
                height={70}
                className="h-14 w-auto"
                priority
              />
            </Link>

            {/* Navigation - Hidden on payment pages */}
            {!isPaymentPage && (
              <>
                <nav className="hidden md:flex items-center gap-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-gray-700 hover-link font-medium transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="text-gray-700 hover-link font-medium transition-colors"
                  >
                    Book
                  </button>
                </nav>

                {/* CTA Button */}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="book-now-button text-white px-6 py-2.5 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                >
                  Book Now
                </button>
              </>
            )}
          </div>

          {/* Mobile Navigation - Hidden on payment pages */}
          {!isPaymentPage && (
            <nav className="md:hidden flex items-center justify-center gap-6 py-3 border-t">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover-link font-medium transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <button
                onClick={() => setIsModalOpen(true)}
                className="text-gray-700 hover-link font-medium transition-colors"
              >
                Book
              </button>
            </nav>
          )}
        </div>

        <style jsx global>{`
          .hover-link:hover {
            color: #078aad;
          }
          .book-now-button {
            background: #078aad;
          }
          .book-now-button:hover {
            background: #056a85;
          }
        `}</style>
      </header>

      <FormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
