// src/app/[lang]/terms/page.jsx

// ── FIXED: Dropped "use client" and legacy context dependencies ──
export default async function TermsOfService({ params }) {
  // Extract the language code directly from the dynamic folder route parameter asynchronously
  const { lang } = await params;

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 min-h-screen text-text-main">
      <div className="card p-8 sm:p-12 bg-white border border-gray-100 shadow-sm rounded-2xl">
        
        {/* Localized Page Heading */}
        <h1 className="text-3xl font-extrabold font-heading tracking-tight border-b border-gray-100 pb-6">
          {lang === 'as' ? 'সেৱাৰ চৰ্তাৱলী (Terms of Service)' : 'Terms of Service'}
        </h1>
        
        <p className="text-xs text-text-soft mt-3 italic">
          {lang === 'as' ? 'শেহতীয়া উন্নীতকৰণ: মে ২০২৬' : 'Last Updated: May 2026'}
        </p>

        {/* Localized Content Streams */}
        <div className="mt-8 space-y-8 text-sm leading-relaxed text-text-soft">
          {lang === 'as' ? (
            // ── ASSAMESE TERMS RENDERING TRACK ──
            <>
              <section className="space-y-3">
                <h2 className="text-lg font-bold font-heading text-text-main">১/ নিয়মাৱলী গ্ৰহণ (Acceptance of Terms)</h2>
                <p>
                  কৃত্তিমত (Krittimat) প্লেটফৰ্ম ব্যৱহাৰ কৰি আপুনি এই সেৱাৰ চৰ্তসমূহ মানি লৈছে। এই ডাইৰেক্টৰী কেৱল তথ্য আৰু শৈক্ষিক উদ্দেশ্যে যোগান ধৰা হৈছে।
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg font-bold font-heading text-text-main">২/ উপযুক্ত ব্যৱহাৰ (Acceptable Use)</h2>
                <p>
                  ব্যৱহাৰকাৰীসকলে আমাৰ ডাইৰেক্টৰী ব্যৱস্থাপনা কোনো ধৰণৰ স্বয়ংক্ৰিয় স্ক্ৰেপিং (Scraping) বা ছাৰ্ভাৰ ডাউন কৰা কাৰ্য্যত ব্যৱহাৰ নকৰিবলৈ সন্মত হৈছে।
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg font-bold font-heading text-text-main">৩/ দায়বদ্ধতাৰ সীমাবদ্ধতা (Limitation of Liability)</h2>
                <p>
                  আমাৰ ডাইৰেক্টৰীত তালিকাভুক্ত কৰা এআই সঁজুলিসমূহৰ কাৰ্যক্ষমতা বা তাৰ ব্যৱহাৰৰ ফলত হ’ব পৰা কোনো লোকচানৰ বাবে কৃত্তিমত কৰ্তৃপক্ষ কোনো কাৰণতে দায়বদ্ধ নহ’ব।
                </p>
              </section>
            </>
          ) : (
            // ── ENGLISH TERMS RENDERING TRACK ──
            <>
              <section className="space-y-3">
                <h2 className="text-lg font-bold font-heading text-text-main">1. Acceptance of Terms</h2>
                <p>
                  By accessing and navigating the Krittimat open bilingual directory, you acknowledge and agree to comply with these proprietary Terms of Service. This portal is maintained strictly for informational and educational use cases.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg font-bold font-heading text-text-main">2. Permitted Platform Use</h2>
                <p>
                  Users agree to interact with our listings manually. Automated data crawling, content harvesting, scraping mechanisms, or any activities designed to strain or destabilize our hosting architectures are explicitly prohibited.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg font-bold font-heading text-text-main">3. Limitation of Liability</h2>
                <p>
                  Krittimat curates descriptions of third-party generative artificial intelligence products. We provide no direct or implicit guarantees regarding their application stability, continuous operation, or outputs. Krittimat holds no liability for any professional or personal losses resulting from third-party tooling usage.
                </p>
              </section>
            </>
          )}
        </div>

      </div>
    </div>
  )
}