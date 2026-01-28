import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Stem Cell Therapy Ad Preview | Glory Regenerative',
  description:
    'Preview Facebook ad variations for stem cell therapy before deployment',
};

export default function StemCellAdsPreviewPage() {
  const adContent = {
    pageTitle: 'Glory Regenerative Center',
    primaryText: `Tampa Bay Area Residents 👋

Glory Regenerative Center is offering a limited number of Stem Cell Therapy Consultations for individuals exploring natural pain relief options.

Stem cell therapy uses your body's own healing mechanisms to target pain at its source — whether it's your knee, hip, shoulder, back, or neck.

Each consultation includes a comprehensive evaluation, medical history review, and a personalized treatment plan discussion.

⚠️ Limited consultation spots available.

THIS NOTICE MUST BE PROVIDED TO YOU UNDER FLORIDA LAW: This health care practitioner performs one or more stem cell therapies that have not yet been approved by the United States Food and Drug Administration.`,
    ctaText: 'Book Consultation',
    url: 'gloryregenerativemed.com',
  };

  const variants = [
    {
      id: 'A',
      name: 'Version A - Stem Cell Process',
      image: '/images/stem-cell-therapy.png',
      headline: 'Stem Cell Therapy Consultations Available – Tampa Bay Area',
      description:
        'Comprehensive evaluation and personalized treatment plan discussion',
    },
    {
      id: 'B',
      name: 'Version B - Coming Soon',
      image: '/images/stem-cell-therapy.png',
      headline: 'Natural Pain Relief with Stem Cell Therapy',
      description: 'Limited consultation spots available for qualified candidates',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Facebook Ad Preview - Stem Cell Therapy
          </h1>
          <p className="text-gray-600">
            A/B Test Comparison - Review before deploying to Facebook Ads
            Manager
          </p>
          <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">
              Campaign: Stem Cell Therapy
            </span>
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full font-medium">
              Objective: Lead Generation
            </span>
            <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full font-medium">
              Florida Compliant
            </span>
          </div>
        </div>
      </div>

      {/* A/B Comparison */}
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          {variants.map((variant) => (
            <div key={variant.id} className="space-y-3">
              {/* Variant Label */}
              <div className="bg-white rounded-lg shadow-sm p-3">
                <h2 className="text-lg font-bold text-gray-900">
                  {variant.name}
                </h2>
              </div>

              {/* Facebook Ad Mockup */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                {/* Ad Header */}
                <div className="p-3 flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
                    GR
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-1">
                      <span className="font-semibold text-sm text-gray-900">
                        {adContent.pageTitle}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <span>Sponsored</span>
                      <span>·</span>
                      <svg
                        className="w-3 h-3"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0a8 8 0 100 16A8 8 0 008 0zM4.5 7.5a.5.5 0 000 1h5.793l-2.147 2.146a.5.5 0 00.708.708l3-3a.5.5 0 000-.708l-3-3a.5.5 0 10-.708.708L10.293 7.5H4.5z" />
                      </svg>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                  </button>
                </div>

                {/* Ad Copy */}
                <div className="px-3 pb-3">
                  <p className="text-sm text-gray-900 whitespace-pre-wrap">
                    {adContent.primaryText}
                  </p>
                </div>

                {/* Ad Image */}
                <div className="relative w-full aspect-[1.91/1.15] bg-gray-100">
                  <img
                    src={variant.image}
                    alt={`Ad variant ${variant.id}`}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Link Preview Card */}
                <div className="border-t border-gray-200 p-3 bg-gray-50">
                  <div className="text-xs text-gray-500 mb-1">
                    {adContent.url.toUpperCase()}
                  </div>
                  <div className="font-semibold text-sm text-gray-900 mb-1">
                    {variant.headline}
                  </div>
                  <div className="text-xs text-gray-600">
                    {variant.description}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="border-t border-gray-200 p-3">
                  <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-md text-sm transition-colors">
                    {adContent.ctaText}
                  </button>
                </div>

                {/* Engagement Bar */}
                <div className="border-t border-gray-200 px-3 py-2">
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-4">
                      <button className="flex items-center gap-1 hover:text-blue-600">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                          />
                        </svg>
                        <span>Like</span>
                      </button>
                      <button className="flex items-center gap-1 hover:text-blue-600">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                          />
                        </svg>
                        <span>Comment</span>
                      </button>
                      <button className="flex items-center gap-1 hover:text-blue-600">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                          />
                        </svg>
                        <span>Share</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Meta Compliance Notes */}
      <div className="max-w-7xl mx-auto mt-8">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
            Meta & Florida Law Compliance Checklist
          </h3>
          <ul className="space-y-1 text-sm text-blue-800">
            <li className="flex items-center gap-2">
              <span className="text-green-600">✓</span> Florida House Bill 1617
              notice included in ad copy
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-600">✓</span> No FDA approval claims
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-600">✓</span> No guaranteed outcomes
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-600">✓</span> Consultation-focused,
              not direct treatment claims
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-600">✓</span> No diagnosis language
            </li>
            <li className="flex items-center gap-2">
              <span className="text-yellow-600">⚠️</span> Version B image
              placeholder - replace with provided image
            </li>
          </ul>
        </div>
      </div>

      {/* Navigation */}
      <div className="max-w-7xl mx-auto mt-8">
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="flex items-center justify-between">
            <a
              href="/"
              className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center gap-2"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Pain Relief Voucher Ads
            </a>
            <p className="text-sm text-gray-500">
              Preview URL: ads.gloryregenerativemed.com/stem-cell
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
