// src/app/[lang]/privacy/page.jsx

// ── FIXED: No "use client" or old LanguageContext dependencies! ──
export default async function PrivacyPolicy({ params }) {
  // Extract the language code directly from the dynamic folder route parameter
  const { lang } = await params;

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 min-h-screen text-text-main">
      <div className="card p-8 sm:p-12 bg-white border border-gray-100 shadow-sm rounded-2xl">
        
        {/* Localized Title Banners */}
        <h1 className="text-3xl font-extrabold font-heading tracking-tight border-b border-gray-100 pb-6">
          {lang === 'as' ? 'গোপনীয়তা নীতি (Privacy Policy)' : 'Privacy Policy'}
        </h1>
        
        <p className="text-xs text-text-soft mt-3 italic">
          {lang === 'as' ? 'শেহতীয়া উন্নীতকৰণ: মে ২০২৬' : 'Last Updated: May 2026'}
        </p>

        {/* Localized Legal Content Matrix */}
        <div className="mt-8 space-y-8 text-sm leading-relaxed text-text-soft">
          {lang === 'as' ? (
            // ── ASSAMESE LEGAL RENDERING TRACK ──
            <>
              <section className="space-y-3">
                <h2 className="text-lg font-bold font-heading text-text-main">১/ তথ্য সংগ্ৰহ (Information Collection)</h2>
                <p>
                  কৃত্তিমত (Krittimat) ডাইৰেক্টৰী ব্যৱহাৰ কৰোঁতে আপোনাৰ কোনো ব্যক্তিগত গোপনীয় তথ্য বা ব্ৰাউজিং হিষ্ট্ৰী আমাৰ ছাৰ্ভাৰত সংগ্ৰহ কৰা নহয়। আমি ব্যৱহাৰকাৰীৰ গোপনীয়তাক সৰ্বোচ্চ প্ৰাধান্য দিওঁ।
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg font-bold font-heading text-text-main">২/ কুকিজৰ ব্যৱহাৰ (Cookies Usage)</h2>
                <p>
                  কেৱল আপোনাৰ অগ্ৰাধিকাৰ থকা ভাষাৰ ছেটিংছ (ইংৰাজী বা অসমীয়া) মনত ৰাখিবলৈ ব্ৰাউজাৰৰ স্থানীয় সংগ্ৰহাগাৰ (LocalStorage) ব্যৱহাৰ কৰা হ’ব পাৰে।
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg font-bold font-heading text-text-main">৩/ বহিৰাগত সংযোগ (External Links)</h2>
                <p>
                  আমাৰ ডাইৰেক্টৰীত থকা এআই সঁজুলিসমূহৰ লিংকবোৰে আপোনাক আন প্লেটফৰ্মলৈ লৈ যাব পাৰে। সেই থাৰ্ড-পাৰ্টী ৱেবছাইটসমূহৰ নিজস্ব নিয়ম আৰু গোপনীয়তা নীতি থাকে, যাৰ বাবে কৃত্তিমত কৰ্তৃপক্ষ দায়বদ্ধ নহয়।
                </p>
              </section>
            </>
          ) : (
            // ── ENGLISH LEGAL RENDERING TRACK ──
            <>
              <section className="space-y-3">
                <h2 className="text-lg font-bold font-heading text-text-main">1. Information Collection</h2>
                <p>
                  Krittimat operates as an open bilingual directory ecosystem. We do not gather, track, or harvest personally identifiable information (PII) or user search histories on our servers. Your data privacy is highly protected.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg font-bold font-heading text-text-main">2. Local Storage & Cookies</h2>
                <p>
                  We may utilize local browser caching or basic local parameters exclusively to remember your user interface language preference toggle selection (English or Assamese) across active browsing sessions.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg font-bold font-heading text-text-main">3. External Service Integrations</h2>
                <p>
                  Our system references third-party generative artificial intelligence products. Once you click an external link to access these tools, you are bound by their proprietary privacy terms. Krittimat holds no liability over third-party practices.
                </p>
              </section>
            </>
          )}
        </div>

      </div>
    </div>
  )
}