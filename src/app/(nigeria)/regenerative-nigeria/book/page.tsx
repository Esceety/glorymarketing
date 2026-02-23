'use client';

import Link from 'next/link';
import { useState, FormEvent } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { trackNigeriaWhatsAppLead } from '@/lib/nigeriaTracking';

export default function RegenerativeNigeriaBookPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [testEventCode] = useState<string | null>(
    searchParams?.get('test_event_code') || null
  );

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    preferredLocation: '',
    primaryConcern: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleWhatsAppClick = (location: 'Abuja' | 'Lagos') => {
    trackNigeriaWhatsAppLead(location, testEventCode);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate required fields
    if (
      !formData.fullName.trim() ||
      !formData.phone.trim() ||
      !formData.preferredLocation
    ) {
      alert('Please fill in all required fields.');
      setIsSubmitting(false);
      return;
    }

    // Store in localStorage for success page
    const leadDraft = {
      fullName: formData.fullName,
      phone: formData.phone,
      email: formData.email,
      preferredLocation: formData.preferredLocation,
      primaryConcern: formData.primaryConcern,
      timestamp: new Date().toISOString(),
    };

    localStorage.setItem('nigeriaLeadDraft', JSON.stringify(leadDraft));

    // Construct WhatsApp message
    const whatsappNumber =
      formData.preferredLocation === 'Abuja'
        ? '2349135300003'
        : '2348183816733';

    let message = `Hello, I'm interested in regenerative treatment.\n\n`;
    message += `Name: ${formData.fullName}\n`;
    message += `Phone: ${formData.phone}\n`;
    if (formData.email) {
      message += `Email: ${formData.email}\n`;
    }
    message += `Location: ${formData.preferredLocation}\n`;
    if (formData.primaryConcern) {
      message += `\nConcern: ${formData.primaryConcern}`;
    }

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    // Navigate to success page with query params preserved
    const currentParams = new URLSearchParams(window.location.search);
    const queryString = currentParams.toString();
    router.push(
      `/regenerative-nigeria/success${queryString ? `?${queryString}` : ''}`
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex items-center rounded-full bg-blue-100 px-4 py-2">
            <span className="text-sm font-medium text-blue-700">
              Step 1: Request Consultation
            </span>
          </div>
          <h1 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            Request a Consultation
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            We'll respond via WhatsApp or phone to schedule your private
            consultation in Abuja or Lagos.
          </p>
        </div>

        {/* Primary WhatsApp CTAs */}
        <div className="mb-12 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 p-6 sm:p-8">
          <h2 className="mb-4 text-center text-xl font-bold text-gray-900">
            Fastest Way to Connect: WhatsApp
          </h2>
          <p className="mb-6 text-center text-gray-600">
            Chat directly with our team for immediate response
          </p>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <a
              href="https://wa.me/2349135300003?text=Hello%2C%20I%27m%20interested%20in%20regenerative%20treatment%20in%20Abuja.%20Please%20share%20the%20next%20steps."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleWhatsAppClick('Abuja')}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-green-600 px-6 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-green-700 sm:w-auto sm:px-8"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp (Abuja)
            </a>

            <a
              href="https://wa.me/2348183816733?text=Hello%2C%20I%27m%20interested%20in%20regenerative%20treatment%20in%20Lagos.%20Please%20share%20the%20next%20steps."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleWhatsAppClick('Lagos')}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-green-600 px-6 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-green-700 sm:w-auto sm:px-8"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp (Lagos)
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="relative mb-12">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-gray-50 px-4 text-gray-500">
              Or fill out the form below
            </span>
          </div>
        </div>

        {/* Contact Form */}
        <div className="rounded-lg bg-white p-6 shadow-sm sm:p-8">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            Request a Consultation Form
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                required
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="John Doe"
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number <span className="text-red-600">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                required
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="+234 XXX XXX XXXX"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address (Optional)
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="john@example.com"
              />
            </div>

            {/* Preferred Location */}
            <div>
              <label
                htmlFor="preferredLocation"
                className="block text-sm font-medium text-gray-700"
              >
                Preferred Location <span className="text-red-600">*</span>
              </label>
              <select
                id="preferredLocation"
                required
                value={formData.preferredLocation}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    preferredLocation: e.target.value,
                  })
                }
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                <option value="">Select a location</option>
                <option value="Abuja">Abuja</option>
                <option value="Lagos">Lagos</option>
              </select>
            </div>

            {/* Primary Concern */}
            <div>
              <label
                htmlFor="primaryConcern"
                className="block text-sm font-medium text-gray-700"
              >
                Primary Concern or Condition (Optional)
              </label>
              <textarea
                id="primaryConcern"
                rows={4}
                value={formData.primaryConcern}
                onChange={(e) =>
                  setFormData({ ...formData, primaryConcern: e.target.value })
                }
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Tell us briefly about your health concern..."
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-lg bg-blue-600 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-blue-700 disabled:bg-gray-400"
              >
                {isSubmitting
                  ? 'Submitting...'
                  : 'Submit & Open WhatsApp'}
              </button>
            </div>

            <p className="text-center text-xs text-gray-500">
              By submitting, you'll be redirected to WhatsApp to complete your
              request. We'll respond within 24 hours.
            </p>
          </form>
        </div>

        {/* Back Link */}
        <div className="mt-8 text-center">
          <Link
            href="/regenerative-nigeria"
            className="text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            ← Back to Nigeria Landing
          </Link>
        </div>
      </div>
    </div>
  );
}
