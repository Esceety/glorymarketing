'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

export default function BrochurePage() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [controlsVisible, setControlsVisible] = useState(true);

  const exitFullscreen = useCallback(() => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
  }, []);

  const enterFullscreen = useCallback(() => {
    document.documentElement.requestFullscreen();
  }, []);

  // Fullscreen handling
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullscreen) {
        exitFullscreen();
      }
      // Arrow key navigation
      if (e.key === 'ArrowLeft' && currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
      if (e.key === 'ArrowRight' && currentPage < 2) {
        setCurrentPage(currentPage + 1);
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isFullscreen, exitFullscreen, currentPage]);

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Toggle Button for Controls */}
      <button
        onClick={() => setControlsVisible(!controlsVisible)}
        className="no-print fixed top-4 right-4 z-[60] rounded-full bg-white/95 backdrop-blur-sm p-3 shadow-xl hover:shadow-2xl transition-all border border-gray-200 hover:scale-110"
        title={controlsVisible ? 'Hide Controls' : 'Show Controls'}
      >
        {controlsVisible ? (
          <svg
            className="w-5 h-5 text-gray-700"
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
        ) : (
          <svg
            className="w-5 h-5 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {/* Floating Controls - Show/Hide based on state */}
      {controlsVisible && (
        <div
          className={`no-print fixed top-16 right-4 z-50 flex flex-col gap-3 transition-all duration-300 animate-in fade-in slide-in-from-top-2 ${
            isFullscreen ? 'opacity-20 hover:opacity-100' : 'opacity-100'
          }`}
        >
          {/* Fullscreen Toggle */}
          <button
            onClick={isFullscreen ? exitFullscreen : enterFullscreen}
            className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-lg transition-all hover:bg-gray-50 hover:shadow-xl"
            title={isFullscreen ? 'Exit Fullscreen (ESC)' : 'Enter Fullscreen'}
          >
            {isFullscreen ? (
              <>
                <svg
                  className="h-5 w-5"
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
                Exit Fullscreen
              </>
            ) : (
              <>
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                  />
                </svg>
                Fullscreen
              </>
            )}
          </button>
        </div>
      )}

      {/* Page Navigation - Left/Right Arrows */}
      {/* Mobile & Desktop: Horizontal navigation */}
      <div className="no-print fixed bottom-8 right-8 z-50 flex items-center gap-3 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-full shadow-2xl border border-gray-200">
        <button
          onClick={() => goToPage(1)}
          disabled={currentPage === 1}
          className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
            currentPage === 1
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-[#4D6F91] text-white hover:bg-[#3D5F81] shadow-lg'
          }`}
          title="Previous Page"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span className="font-semibold text-sm">Previous</span>
        </button>

        <div className="flex items-center gap-2 px-3">
          <div
            className={`w-2 h-2 rounded-full transition-all ${
              currentPage === 1 ? 'bg-[#4D6F91] scale-125' : 'bg-gray-300'
            }`}
          ></div>
          <div
            className={`w-2 h-2 rounded-full transition-all ${
              currentPage === 2 ? 'bg-[#4D6F91] scale-125' : 'bg-gray-300'
            }`}
          ></div>
        </div>

        <button
          onClick={() => goToPage(2)}
          disabled={currentPage === 2}
          className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
            currentPage === 2
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-[#4D6F91] text-white hover:bg-[#3D5F81] shadow-lg'
          }`}
          title="Next Page"
        >
          <span className="font-semibold text-sm">Next</span>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Main Content - Reading Version (Default View) */}
      <div id="reading-version" className="mx-auto max-w-[1600px]">
        {/* Page 1 (Front) - Reading Order: Columns 1, 2, 3 */}
        {currentPage === 1 && (
          <section
            id="page-1"
            className="min-h-screen p-4 md:p-8 animate-in fade-in duration-300 pt-20 pb-20 md:pt-8 md:pb-8"
          >
            {/* Removed page header for cleaner look */}

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
              {/* Column 1 (Right on printed version) */}
              <div className="relative rounded-lg bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 shadow-2xl overflow-hidden">
                {/* Decorative Grid Background */}
                <div
                  className="absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage:
                      'linear-gradient(#4D6F91 1px, transparent 1px), linear-gradient(90deg, #4D6F91 1px, transparent 1px)',
                    backgroundSize: '30px 30px',
                  }}
                ></div>

                {/* Decorative Corner Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#4D6F91]/10 to-transparent rounded-bl-full"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#4D6F91]/10 to-transparent rounded-tr-full"></div>

                <div className="relative z-10">
                  {/* Logo with Light Background */}
                  <div className="mb-8 flex justify-center">
                    <div className="text-center bg-white/95 backdrop-blur-sm px-4 py-3 rounded-lg shadow-lg">
                      <div className="mb-2 relative h-14 w-44">
                        <Image
                          src="/images/logo.png"
                          alt="Glory Wellness & Regenerative Centre"
                          fill
                          className="object-contain"
                          priority
                        />
                      </div>
                      <p className="text-[10px] font-bold text-gray-700 tracking-wide">
                        GLORY WELLNESS
                        <br />& REGENERATIVE CENTRE
                      </p>
                    </div>
                  </div>

                  {/* Main Headline with Modern Design */}
                  <div className="mb-8 rounded-xl bg-gradient-to-br from-[#4D6F91] via-blue-400 to-blue-500 p-8 text-white shadow-2xl relative overflow-hidden">
                    {/* Decorative circles */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
                    <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full -ml-8 -mb-8"></div>

                    <div className="relative">
                      {/* Icon */}
                      <div className="mb-4 flex items-center justify-center gap-3">
                        <div className="h-1 w-12 bg-white/30 rounded-full"></div>
                        <svg
                          className="w-10 h-10 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                          />
                        </svg>
                        <div className="h-1 w-12 bg-white/30 rounded-full"></div>
                      </div>

                      <h1 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-center">
                        PLATELET RICH PLASMA
                        <br />
                        <span className="text-white/90">&</span>
                        <br />
                        ADULT STEM CELL THERAPY
                      </h1>

                      <div className="h-px bg-white/40 my-4"></div>

                      <div className="flex items-center justify-center gap-3">
                        <svg
                          className="w-6 h-6 text-white flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <p className="text-lg font-medium leading-relaxed text-center">
                          Advanced solutions for healing, recovery & anti-aging.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Team Photo with Modern Frame */}
                  <div className="mb-8 rounded-xl overflow-hidden shadow-2xl border-4 border-[#4D6F91]/50 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#4D6F91]/10 to-transparent z-10 pointer-events-none"></div>
                    <div className="relative aspect-[4/3]">
                      <Image
                        src="/images/team-photo.jpg"
                        alt="Glory Wellness Team"
                        fill
                        className="object-cover"
                      />
                    </div>
                    {/* Badge overlay */}
                    <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg z-20">
                      <p className="text-xs font-bold text-gray-800 flex items-center gap-2">
                        <svg
                          className="w-4 h-4 text-[#4D6F91]"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                        </svg>
                        Expert Team
                      </p>
                    </div>
                  </div>

                  {/* Call to Action with Icon Grid */}
                  <div className="rounded-xl bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 p-6 text-center shadow-2xl relative overflow-hidden mb-6">
                    {/* Decorative pattern */}
                    <div
                      className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage:
                          'radial-gradient(circle, white 1px, transparent 1px)',
                        backgroundSize: '20px 20px',
                      }}
                    ></div>

                    <div className="relative">
                      {/* Icon indicators */}
                      <div className="flex justify-center gap-2 mb-4">
                        <div className="w-2 h-2 rounded-full bg-[#4D6F91]"></div>
                        <div className="w-2 h-2 rounded-full bg-[#4D6F91]/70"></div>
                        <div className="w-2 h-2 rounded-full bg-[#4D6F91]/40"></div>
                      </div>

                      <p className="text-sm font-bold leading-relaxed text-white mb-4">
                        Don&apos;t let Diabetes, COPD, Heart Failure, Pain,
                        Kidney Disease, Stroke, Multiple Sclerosis, or Aging
                        hold you back.
                      </p>

                      <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                        <svg
                          className="w-5 h-5 text-[#4D6F91]"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <p className="text-xl font-extrabold text-white tracking-wide">
                          Live Life Rejuvenated
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Contact Info with Icons */}
                  <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <svg
                        className="w-5 h-5 text-[#4D6F91]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <p className="text-lg font-bold text-white">
                        www.glorywellnessng.com
                      </p>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-[#4D6F91]">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <p className="text-sm font-bold">Lagos • Abuja</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Column 2 (Left on printed version - "OUR OTHER SERVICES") */}
              <div className="relative rounded-lg bg-gradient-to-br from-gray-50 to-white p-6 shadow-xl">
                {/* Column Number Badge */}
                <div className="absolute top-4 right-4 z-20 flex items-center justify-center w-8 h-8 rounded-full bg-[#4D6F91]/10 backdrop-blur-sm border border-[#4D6F91]/30">
                  <span className="text-xs font-bold text-[#4D6F91]">2</span>
                </div>

                <h2 className="mb-6 text-2xl font-bold text-gray-900">
                  OUR OTHER SERVICES
                </h2>

                <div className="space-y-4">
                  {/* Weight Loss */}
                  <div className="rounded-lg bg-white p-4 shadow-sm border border-gray-200">
                    <h3 className="mb-2 text-lg font-bold text-[#4D6F91]">
                      Weight Loss (Physician-Supervised)
                    </h3>
                    <p className="text-sm text-gray-800 leading-relaxed">
                      Medically guided programmes that help you lose weight
                      safely and sustainably.
                    </p>
                  </div>

                  {/* Shockwave Therapy */}
                  <div className="rounded-lg bg-white p-4 shadow-sm border border-gray-200">
                    <h3 className="mb-2 text-lg font-bold text-[#4D6F91]">
                      Shockwave Therapy
                    </h3>
                    <p className="text-sm text-gray-800 leading-relaxed">
                      Non-invasive treatment that stimulates healing and
                      relieves chronic pain.
                    </p>
                  </div>

                  {/* IV Nutrition Therapy */}
                  <div className="rounded-lg bg-white p-4 shadow-sm border border-gray-200">
                    <h3 className="mb-2 text-lg font-bold text-[#4D6F91]">
                      IV Nutrition Therapy
                    </h3>
                    <p className="text-sm text-gray-800 leading-relaxed">
                      Direct infusion of vitamins and nutrients for rapid
                      restoration and energy.
                    </p>
                  </div>

                  {/* Ozone Therapy */}
                  <div className="rounded-lg bg-white p-4 shadow-sm border border-gray-200">
                    <h3 className="mb-2 text-lg font-bold text-[#4D6F91]">
                      Ozone Therapy
                    </h3>
                    <p className="text-sm text-gray-800 leading-relaxed">
                      Oxygen-based treatment that enhances circulation,
                      immunity, and detoxification.
                    </p>
                  </div>

                  {/* Regenerative Therapy */}
                  <div className="rounded-lg bg-white p-4 shadow-sm border border-gray-200">
                    <h3 className="mb-2 text-lg font-bold text-[#4D6F91]">
                      Regenerative Therapy for Non-Healing Wounds
                    </h3>
                    <p className="text-sm text-gray-800 leading-relaxed">
                      Advanced cell-based therapy that accelerates tissue repair
                      and wound closure.
                    </p>
                  </div>

                  {/* Photobiomodulation */}
                  <div className="rounded-lg bg-white p-4 shadow-sm border border-gray-200">
                    <h3 className="mb-2 text-lg font-bold text-[#4D6F91]">
                      Photobiomodulation / Polychromatic (6-Light) Therapy
                    </h3>
                    <p className="text-sm text-gray-800 leading-relaxed">
                      Light-based therapy that reduces inflammation, boosts
                      recovery, and relieves pain.
                    </p>
                  </div>

                  {/* Sexual Function */}
                  <div className="rounded-lg bg-white p-4 shadow-sm border border-gray-200">
                    <h3 className="mb-2 text-xl font-bold text-gray-900">
                      SEXUAL FUNCTION IMPROVEMENT
                    </h3>

                    <div className="mt-3 space-y-2">
                      <div className="bg-green-600 rounded p-3 shadow-sm">
                        <h4 className="font-bold text-white mb-1">
                          The P-Shot For Men
                        </h4>
                        <ul className="text-sm text-white space-y-1">
                          <li>• Increases stamina</li>
                          <li>• Improves erection</li>
                          <li>• Permanent result</li>
                          <li>• Increases girth</li>
                        </ul>
                      </div>

                      <div className="bg-green-600 rounded p-3 shadow-sm">
                        <h4 className="font-bold text-white mb-1">
                          The O-Shot for Women
                        </h4>
                        <ul className="text-sm text-white space-y-1">
                          <li>• Reduces pain during intercourse</li>
                          <li>• Reduces discomfort at vaginal opening</li>
                          <li>• Enhances arousal, lubrication & orgasm</li>
                          <li>• Treats urinary stress incontinence</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Column 3 (Middle on printed version - "ABOUT US") */}
              <div className="relative rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 p-6 shadow-xl">
                {/* Column Number Badge */}
                <div className="absolute top-4 right-4 z-20 flex items-center justify-center w-8 h-8 rounded-full bg-[#4D6F91]/20 backdrop-blur-sm border border-[#4D6F91]/30">
                  <span className="text-xs font-bold text-[#4D6F91]">3</span>
                </div>

                <h2 className="mb-6 text-2xl font-bold text-white">ABOUT US</h2>

                <div className="space-y-4">
                  <p className="text-sm leading-relaxed text-gray-200">
                    At Glory Wellness & Regenerative Centre, we bring
                    world-class regenerative medicine to Nigeria, giving our
                    patients access to the most advanced treatment options
                    available—without the need to travel abroad. Our technology
                    goes beyond counting stem cells, to ensuring the treatment
                    delivers live, viable stem cells capable of making a real
                    difference.
                  </p>

                  <p className="text-sm leading-relaxed text-gray-200">
                    Global research and clinical case studies consistently show
                    that therapies using a patient&apos;s own platelets and
                    adult stem cells are both safe and effective. These
                    treatments repair damaged tissues, accelerate the
                    body&apos;s natural healing process, and help prevent
                    further degeneration in both medical and aesthetic
                    conditions.
                  </p>

                  {/* Building Photo */}
                  <div className="my-4 rounded-lg overflow-hidden shadow-lg">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src="/images/building-exterior.jpg"
                        alt="Glory Wellness & Regenerative Centre Building"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div className="rounded-lg bg-gradient-to-br from-blue-900 to-blue-800 p-5 text-white shadow-lg">
                    <h3 className="font-bold text-lg mb-4 text-blue-100 text-center">
                      Glory Wellness & Regenerative Centre
                    </h3>

                    {/* Addresses with Icons */}
                    <div className="space-y-3 mb-4">
                      {/* Abuja Address */}
                      <div className="flex items-start gap-2">
                        <svg
                          className="w-5 h-5 text-blue-300 flex-shrink-0 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <div className="text-sm leading-relaxed">
                          <p>
                            7, Mammam Kontagora Crescent, Katampe Extension,
                            Abuja.
                          </p>
                          <p className="flex items-center gap-1 mt-1">
                            <svg
                              className="w-4 h-4 text-blue-300"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                            0909 000 4532
                          </p>
                        </div>
                      </div>

                      {/* Lagos Address */}
                      <div className="flex items-start gap-2">
                        <svg
                          className="w-5 h-5 text-blue-300 flex-shrink-0 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <div className="text-sm leading-relaxed">
                          <p>
                            Block 14B, Dan Ogbeide Close, Lekki Phase 1, Lagos.
                          </p>
                          <p className="flex items-center gap-1 mt-1">
                            <svg
                              className="w-4 h-4 text-blue-300"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                            0909 000 4531
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Website with Icon */}
                    <div className="flex items-center justify-center gap-2 mt-4 pt-3 border-t border-blue-700/50">
                      <svg
                        className="w-5 h-5 text-blue-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <p className="text-lg font-bold">
                        www.glorywellnessng.com
                      </p>
                    </div>

                    <p className="text-sm font-semibold text-center mt-2 text-blue-200">
                      Lagos • Abuja
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Page 2 (Back) - Reading Order: Columns 4, 5, 6 */}
        {currentPage === 2 && (
          <section
            id="page-2"
            className="min-h-screen p-4 md:p-8 animate-in fade-in duration-300 pt-20 pb-20 md:pt-8 md:pb-8"
          >
            {/* Removed page header for cleaner look */}

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
              {/* Column 4 (Left on printed version) */}
              <div className="relative rounded-lg bg-gradient-to-br from-gray-50 to-white p-6 shadow-xl">
                {/* Column Number Badge */}
                <div className="absolute top-4 right-4 z-20 flex items-center justify-center w-8 h-8 rounded-full bg-[#4D6F91]/10 backdrop-blur-sm border border-[#4D6F91]/30">
                  <span className="text-xs font-bold text-[#4D6F91]">4</span>
                </div>

                <h2 className="mb-6 text-2xl font-bold text-gray-900">
                  WHAT ARE
                  <br />
                  PRP & ADULT STEM CELLS?
                </h2>

                {/* PRP Section */}
                <div className="mb-6 rounded-lg bg-white p-4 shadow-sm border border-gray-200">
                  <h3 className="mb-3 text-xl font-bold text-[#4D6F91]">
                    Platelet-Rich Plasma (PRP)
                  </h3>

                  {/* PRP Tubes Image */}
                  <div className="mb-3 rounded overflow-hidden">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src="/images/prp-tubes.jpg"
                        alt="PRP Tubes with Platelet-Rich Plasma"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed text-gray-800">
                    PRP is a component of your own blood that contains a high
                    concentration of platelets, growth factors, and proteins.
                    These natural substances stimulate stem cells, accelerate
                    tissue repair, and support healing.
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-gray-800">
                    In PRP therapy, a small sample of your blood is collected,
                    processed, and re-injected on the same day—greatly reducing
                    the risk of infection or side effects.
                  </p>
                </div>

                {/* Adult Stem Cells Section */}
                <div className="rounded-lg bg-white p-4 shadow-sm border border-gray-200">
                  <h3 className="mb-3 text-xl font-bold text-[#4D6F91]">
                    Adult Stem Cells
                  </h3>

                  {/* Lab Image */}
                  <div className="mb-3 rounded overflow-hidden">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src="/images/scientist-lab.jpg"
                        alt="Scientist working with stem cell samples"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed text-gray-800">
                    Adult stem cells are powerful, undifferentiated cells found
                    in bone marrow, fat, and umbilical cord tissue. They can
                    renew and transform into specialised cells that replace
                    damaged or lost tissue.
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-gray-800">
                    Thanks to advances in regenerative medicine, doctors can now
                    use these stem cells safely to treat injuries, restore
                    function, and promote long-term healing.
                  </p>
                </div>
              </div>

              {/* Column 5 (Middle on printed version) */}
              <div className="relative rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 p-6 shadow-xl">
                {/* Column Number Badge */}
                <div className="absolute top-4 right-4 z-20 flex items-center justify-center w-8 h-8 rounded-full bg-[#4D6F91]/20 backdrop-blur-sm border border-[#4D6F91]/30">
                  <span className="text-xs font-bold text-[#4D6F91]">5</span>
                </div>

                <h2 className="mb-6 text-2xl font-bold text-white">
                  CONDITIONS TREATABLE USING
                  <br />
                  PRP & ADULT STEM CELLS?
                </h2>

                <div className="space-y-4">
                  {/* Joints & Musculoskeletal */}
                  <div className="rounded-lg bg-gradient-to-br from-blue-900 to-blue-800 p-4 text-white shadow-lg">
                    <h3 className="mb-2 font-bold text-lg">
                      Joints & Musculoskeletal
                    </h3>
                    <ul className="text-sm space-y-1">
                      <li>• Osteoarthritis</li>
                      <li>• Tendon & ligament injuries</li>
                    </ul>
                  </div>

                  {/* Cosmetic & Aesthetic */}
                  <div className="rounded-lg bg-gray-700/80 p-4 backdrop-blur-sm">
                    <h3 className="mb-2 font-bold text-lg text-white">
                      Cosmetic & Aesthetic
                    </h3>

                    {/* Woman Excited Image */}
                    <div className="mb-3 rounded overflow-hidden">
                      <div className="relative aspect-video">
                        <Image
                          src="/images/woman-excited.jpg"
                          alt="Woman excited about cosmetic results"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>

                    <ul className="text-sm text-gray-200 space-y-1">
                      <li>• Vampire Facelift (youthful appearance)</li>
                      <li>• Vampire Facial (lines, wrinkles, acne scars)</li>
                      <li>• Eyebrow Hair Restoration</li>
                      <li>• Lip Border Enhancement</li>
                      <li>• Botox, Brotox</li>
                      <li>• Juvederm</li>
                    </ul>
                  </div>

                  {/* Medical Conditions */}
                  <div className="rounded-lg bg-gradient-to-br from-blue-900 to-blue-800 p-4 text-white shadow-lg">
                    <h3 className="mb-2 font-bold text-lg">
                      Medical Conditions
                    </h3>
                    <ul className="text-sm space-y-1">
                      <li>• Stroke (CVA), Female Urinary Incontinence</li>
                      <li>
                        • COPD / Lung Disease, Autoimmune diseases e.g. Multiple
                        Sclerosis, etc.
                      </li>
                      <li>
                        • Diabetes, Hypertension, Infertility, Alzheimer&apos;s
                      </li>
                      <li>• Autism, Cerebral Palsy, Developmental Delay</li>
                      <li>
                        • Crohn&apos;s Disease, Congestive Heart Failure, Kidney
                        Disease
                      </li>
                      <li>
                        • Fibromyalgia, Parkinson&apos;s Disease, Hair Loss
                      </li>
                    </ul>
                  </div>

                  {/* Sexual Wellness */}
                  <div className="rounded-lg bg-gray-700/80 p-4 backdrop-blur-sm">
                    <h3 className="mb-2 font-bold text-lg text-white">
                      Sexual Wellness
                    </h3>
                    <ul className="text-sm text-gray-200 space-y-1">
                      <li>
                        • O-Shot® (female rejuvenation & enhanced desire)
                      </li>
                      <li>• P-Shot® (male erection function & sensitivity)</li>
                      <li>• Peyronie&apos;s disease (men)</li>
                      <li>• Lichen Sclerosis (women)</li>
                    </ul>
                  </div>

                  {/* Neck & Back */}
                  <div className="rounded-lg bg-gradient-to-br from-blue-900 to-blue-800 p-4 text-white shadow-lg">
                    <h3 className="mb-2 font-bold text-lg">Neck & Back</h3>
                    <ul className="text-sm space-y-1">
                      <li>• Spinal Cord Injury</li>
                      <li>• Degenerative Disc Disease</li>
                      <li>• Muscle Spasms, Strains, or Sprains</li>
                      <li>• Facet Joint Arthropathy</li>
                      <li>• Disc Displacement (bulge, protrusion, etc.)</li>
                    </ul>
                  </div>

                  {/* Anti-Aging */}
                  <div className="rounded-lg bg-gray-700/80 p-4 backdrop-blur-sm">
                    <h3 className="mb-2 font-bold text-lg text-white">
                      Anti-Aging
                    </h3>
                    <p className="text-sm text-gray-200">
                      IV Stem Cell Therapy for Whole-Body Rejuvenation
                    </p>
                  </div>
                </div>
              </div>

              {/* Column 6 (Right on printed version) */}
              <div className="relative rounded-lg bg-gradient-to-br from-gray-50 to-white p-6 shadow-xl">
                {/* Column Number Badge */}
                <div className="absolute top-4 right-4 z-20 flex items-center justify-center w-8 h-8 rounded-full bg-[#4D6F91]/10 backdrop-blur-sm border border-[#4D6F91]/30">
                  <span className="text-xs font-bold text-[#4D6F91]">6</span>
                </div>

                <h2 className="mb-6 text-2xl font-bold text-gray-900">
                  SUCCESS STORIES
                </h2>

                {/* Before/After Image */}
                <div className="mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 p-4 shadow-lg">
                  <h3 className="text-center font-bold text-blue-300 mb-3">
                    Right Hip Arthritis
                  </h3>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="text-center">
                      <div className="relative aspect-square rounded overflow-hidden mb-1">
                        <Image
                          src="/images/hip-xray-before.jpg"
                          alt="Hip X-ray before treatment"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <p className="text-blue-300 font-bold text-sm">Before</p>
                    </div>
                    <div className="text-center">
                      <div className="relative aspect-square rounded overflow-hidden mb-1">
                        <Image
                          src="/images/hip-xray-after.jpg"
                          alt="Hip X-ray after treatment"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <p className="text-blue-300 font-bold text-sm">After</p>
                    </div>
                  </div>
                </div>

                {/* More Results Section */}
                <div className="rounded-lg bg-white p-4 text-center shadow-sm border border-gray-200">
                  <h3 className="mb-3 font-bold text-lg text-gray-900">
                    More Before & After Results
                  </h3>
                  <p className="mb-3 text-sm text-gray-800">Scan the QR code</p>

                  {/* QR Code */}
                  <div className="mx-auto mb-3 relative w-48 h-48">
                    <Image
                      src="/images/qr-code.png"
                      alt="QR Code for more results"
                      fill
                      className="object-contain"
                    />
                  </div>

                  <p className="text-xs text-gray-600 italic">
                    <strong>NB:</strong> Some people may find some images
                    graphic
                  </p>
                </div>

                {/* Website Info */}
                <div className="mt-6 rounded-lg bg-gradient-to-r from-green-600 to-green-700 p-4 shadow-lg">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-xl font-bold text-white">
                      www.glorywellnessng.com
                    </p>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <svg
                      className="w-4 h-4 text-green-100"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-sm font-semibold text-green-100">
                      Lagos • Abuja
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
