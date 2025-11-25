import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy & Terms of Use | Glory Regenerative',
  description:
    'Privacy policy and terms of service for Glory Regenerative Center.',
};

export default function PrivacyPolicyTermsPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 space-y-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Privacy Policy & Terms of Use
        </h1>
        <p className="text-gray-600">Last updated: November 2025</p>
      </div>

      {/* Privacy Policy Section */}
      <section className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold mb-4">Privacy Policy</h2>
          <p className="text-gray-700 leading-relaxed">
            At Glory Regenerative Center, we are committed to protecting your
            privacy and ensuring the security of your personal health
            information. This privacy policy explains how we collect, use, and
            safeguard your information when you visit our website or use our
            services.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-3">
            Information We Collect
          </h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            We collect information that you provide directly to us, including:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>
              Personal identification information (name, email, phone number)
            </li>
            <li>Medical history and health-related information</li>
            <li>Appointment scheduling details and preferences</li>
            <li>Payment and insurance information</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-3">
            How We Use Your Information
          </h3>
          <p className="text-gray-700 leading-relaxed">
            We use the information we collect to provide, maintain, and improve
            our services, including scheduling appointments, processing
            payments, communicating about your care, and sending important
            updates about our services. Your health information is protected
            under HIPAA regulations and will never be shared without your
            explicit consent except as required by law.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-3">Your Rights</h3>
          <p className="text-gray-700 leading-relaxed">
            You have the right to access, correct, or delete your personal
            information. You may also opt out of marketing communications at any
            time. To exercise these rights, please contact our office directly.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-3">Data Security</h3>
          <p className="text-gray-700 leading-relaxed">
            We implement appropriate technical and organizational measures to
            protect your personal information against unauthorized access,
            alteration, disclosure, or destruction. However, no method of
            transmission over the internet is 100% secure, and we cannot
            guarantee absolute security.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-3">Medical Disclaimer</h3>
          <p className="text-gray-700 leading-relaxed">
            The information provided on this website is for informational
            purposes only and is not intended as a substitute for professional
            medical advice, diagnosis, or treatment. Always seek the advice of
            your physician or other qualified health provider with any questions
            you may have regarding a medical condition. Never disregard
            professional medical advice or delay in seeking it because of
            something you have read on this website.
          </p>
        </div>
      </section>

      <hr className="border-gray-300" />

      {/* Terms & Conditions Section */}
      <section className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold mb-4">Terms & Conditions</h2>
          <p className="text-gray-700 leading-relaxed">
            By accessing and using this website and our services, you accept and
            agree to be bound by the terms and conditions outlined below.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-3">Use of Services</h3>
          <p className="text-gray-700 leading-relaxed">
            Our services are intended for individuals seeking regenerative
            medicine treatments for pain management. You agree to provide
            accurate, current, and complete information during the registration
            and appointment booking process. You are responsible for maintaining
            the confidentiality of your account information.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-3">Appointment Policies</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            We understand that schedules change. Please provide at least 24
            hours&apos; notice if you need to cancel or reschedule an
            appointment. Failure to provide adequate notice may result in a
            cancellation fee. All appointments are subject to confirmation by
            our staff.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-3">Payment Terms</h3>
          <p className="text-gray-700 leading-relaxed">
            Payment is due at the time of service unless other arrangements have
            been made in advance. We accept various forms of payment and work
            with most insurance providers. It is your responsibility to verify
            coverage with your insurance company prior to treatment.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-3">
            Limitation of Liability
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Glory Regenerative Center and its physicians provide services in
            good faith. While we strive for the best possible outcomes, we
            cannot guarantee specific results. Treatment outcomes vary by
            individual. We are not liable for any indirect, incidental, or
            consequential damages arising from the use of our services.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-3">
            Changes to These Terms
          </h3>
          <p className="text-gray-700 leading-relaxed">
            We reserve the right to modify these terms at any time. Changes will
            be effective immediately upon posting to this website. Your
            continued use of our services after changes are posted constitutes
            your acceptance of the modified terms.
          </p>
        </div>
      </section>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-12">
        <h3 className="text-xl font-bold mb-3">Questions?</h3>
        <p className="text-gray-700">
          If you have any questions about our Privacy Policy or Terms of Use,
          please contact us at any of our locations or email us at
          info@gloryregenerative.com
        </p>
      </div>
    </div>
  );
}
