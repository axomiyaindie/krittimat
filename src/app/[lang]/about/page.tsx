// src/app/[lang]/about/page.jsx

export default async function About({ params }) {
  const { lang } = await params;
  const currentYear = new Date().getFullYear();

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 min-h-screen text-text-main">
      <div className="card p-8 sm:p-12 bg-white border border-gray-100 shadow-sm rounded-2xl">
        
        {/* Localized Page Heading */}
        <h1 className="text-3xl font-extrabold font-heading tracking-tight border-b border-gray-100 pb-6">
          {lang === 'as' ? 'আমাৰ বিষয়ে (About Krittimat)' : 'About Krittimat'}
        </h1>
        
        <p className="text-xs text-text-soft mt-3 italic">
          {lang === 'as' ? `শেহতীয়া উন্নীতকৰণ: মে ${currentYear}` : `Last Updated: May ${currentYear}`}
        </p>

        {/* Localized Content Streams */}
        <div className="mt-8 space-y-8 text-sm leading-relaxed text-text-soft">
          {lang === 'as' ? (
            // ── ASSAMESE ABOUT RENDERING TRACK ──
            <>
              <section className="space-y-3">
                <h2 className="text-lg font-bold font-heading text-text-main">আমি কোন (Who We Are)</h2>
                <p>
                  কৃত্তিমত (Krittimat) — এখন দুভাষিক (অসমীয়া + ইংৰাজী) ওপেন ডাইৰেক্টৰী। আমাৰ লক্ষ্য হৈছে পৃথিৱীৰ শ্ৰেষ্ঠ এআই সঁজুলি, প্ৰম্পট, আৰু শিক্ষণ সংস্থানবোৰ এঠাইত সংগঠিত কৰি সৰ্বসাধাৰণলৈ সহজলভ্য কৰি তোলা।
                </p>
                <p className="mt-2">
                  "কৃত্তিমত" শব্দটো অসমীয়া "কৃত্ৰিম বুদ্ধিমত্তা" (Artificial Intelligence)ৰ পৰা আহিছে। আমি বিশ্বাস কৰো যে ভাষাৰ বাধা যিয়েই নহওক কিয়, প্ৰত্যেক ব্যক্তিৰে উন্নত এআই লাভ কৰাৰ অধিকাৰ আছে।
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg font-bold font-heading text-text-main">আমি কিয় সৃষ্টি কৰিলো (Our Mission)</h2>
                <p>
                  ৰাইজৰ মাজত এআই সম্পৰ্কে সজাগতা বৃদ্ধি কৰা আৰু ব্যৱহাৰিক জ্ঞান প্ৰদান কৰাই আমাৰ মূল উদ্দেশ্য। আমি এইখিনিত সংগ্ৰহ কৰো:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>সৰ্বশ্ৰেষ্ঠ ৬৯+ টা এআই টুলৰ বিশদ তথ্য</li>
                  <li>অসমীয়া আৰু ইংৰাজী ভাষাত প্ৰম্পট লাইব্ৰেৰী</li>
                  <li>শিকাৰুৰ বাবে ক্ৰমবিকাশশীল টিউটোৰিয়েল (বহুদিনৰ ভিতৰত)</li>
                  <li>সাপ্তাহিক ব্লগ আপডেট আৰু এআই সম্বাদ</li>
                </ul>
              </section>

              {/* Creator & Work Section - Assamese */}
              <section className="space-y-4 rounded-xl bg-gradient-to-r from-primary/5 to-transparent p-5 border-l-4 border-primary">
                <h2 className="text-lg font-bold font-heading text-text-main">
                  সৃষ্টিকৰ্তা আৰু পেছাদাৰী কাম
                </h2>
                <p className="font-medium text-text-main">
                  কৃত্তিমত মোৰ এক ব্যক্তিগত চখৰ প্ৰকল্প (Hobby Project)। ইয়াৰ লগতে, আমি এজন স্বাধীন ডেভেলপাৰ হিচাপে কাম কৰো।
                </p>
                <div className="mt-3 space-y-2">
                  <p className="font-semibold text-text-main">নতুন প্ৰকল্পৰ বাবে উপলব্ধ (Available for New Projects):</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">Web & Mobile Apps</span>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">Modern Websites</span>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">AI Workflows</span>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">Automation & Bots</span>
                  </div>
                </div>
                <p className="text-sm mt-3">
                  যদি আপুনি পৰিষ্কাৰ, পেছাদাৰী ৱেব/মোবাইল এপ্লিকেচন, আধুনিক ৱেবছাইট, শক্তিশালী এআই সংযোগ, বা স্বয়ংক্ৰিয় বট সৃষ্টি কৰিব বিচাৰে — তেন্তে মোৰ সৈতে যোগাযোগ কৰক।
                </p>
                {/* Telegram Contact Button */}
                <div className="mt-4 pt-2">
                  <a 
                    href="https://t.me/rakibulia" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg hover:bg-primary/90 transition-all text-sm font-medium shadow-sm"
                  >
                    Contact on Telegram
                  </a>
                  <p className="text-xs text-text-soft mt-2">
                    @rakibulia — প্ৰশ্ন, পৰামৰ্শ, বা সহযোগিতাৰ বাবে সন্দেহ নকৰিব।
                  </p>
                </div>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg font-bold font-heading text-text-main">কিয় আমাক বাছি ল’ব (Why Choose Us)</h2>
                <p>
                  ইংৰাজী ভাষাত অপটু ব্যক্তিসকলৰ বাবে এআই জগতখন বহু সময়ত দুৰ্ভেদ্য যেন লাগে। কৃত্তিমত সেই ব্যৱধান পূৰ কৰিবলৈ চেষ্টা কৰে। আমাৰ প্লেটফৰ্ম সম্পূৰ্ণৰূপে মুক্ত, বিজ্ঞাপনমুক্ত, আৰু লোকসকলৰ বাবে অতিৰিক্ত মূল্য সৃষ্টি কৰাটোৱে আমাৰ মূলমন্ত্ৰ।
                </p>
              </section>
            </>
          ) : (
            // ── ENGLISH ABOUT RENDERING TRACK ──
            <>
              <section className="space-y-3">
                <h2 className="text-lg font-bold font-heading text-text-main">Who We Are</h2>
                <p>
                  Krittimat is an open bilingual directory (Assamese + English) dedicated to organizing the world's best AI tools, prompts, and learning resources in one accessible place.
                </p>
                <p className="mt-2">
                  The name "Krittimat" is derived from the Assamese word for "Artificial Intelligence" — <span className="italic">Kritrim Bôddhimôtta</span> (কৃত্ৰিম বুদ্ধিমত্তা). We believe that language should never be a barrier to accessing cutting-edge AI technology.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg font-bold font-heading text-text-main">Our Mission</h2>
                <p>
                  We aim to democratize AI literacy across linguistic and geographical boundaries. Our platform currently offers:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Detailed listings of 69+ curated AI tools across 9+ categories</li>
                  <li>A bilingual prompt library (Assamese + English)</li>
                  <li>Progressive tutorials for beginners (coming soon)</li>
                  <li>Weekly blog updates and AI news</li>
                </ul>
              </section>

              {/* Creator & Work Section - English */}
              <section className="space-y-4 rounded-xl bg-gradient-to-r from-primary/5 to-transparent p-5 border-l-4 border-primary">
                <h2 className="text-lg font-bold font-heading text-text-main">
                  Creator & Professional Work
                </h2>
                <p className="font-medium text-text-main">
                  Krittimat is my personal hobby project. Alongside this, I work as an independent developer.
                </p>
                <div className="mt-3 space-y-2">
                  <p className="font-semibold text-text-main">Available for New Projects:</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">Web & Mobile Apps</span>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">Modern Websites</span>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">AI Workflows</span>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">Automation & Bots</span>
                  </div>
                </div>
                <p className="text-sm mt-3">
                  If you need clean, professional web/mobile application development, high-performance modern websites, 
                  seamless AI integrations, or custom automation bots — let's build it together.
                </p>
                {/* Telegram Contact Button */}
                <div className="mt-4 pt-2">
                  <a 
                    href="https://t.me/rakibulia" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg hover:bg-primary/90 transition-all text-sm font-medium shadow-sm"
                  >
                    Contact on Telegram
                  </a>
                  <p className="text-xs text-text-soft mt-2">
                    @rakibulia — Feel free to reach out for questions, suggestions, or collaboration.
                  </p>
                </div>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg font-bold font-heading text-text-main">Why Choose Us</h2>
                <p>
                  While most AI directories operate exclusively in English, Krittimat bridges the gap for Assamese speakers and other Indic language users. We prioritize:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li><span className="font-medium">Clarity:</span> Human-written, not AI-generated, descriptions</li>
                  <li><span className="font-medium">Neutrality:</span> No paid placements or affiliate bias</li>
                  <li><span className="font-medium">Accessibility:</span> 100% free, no ads, no paywalls</li>
                  <li><span className="font-medium">Curated Quality:</span> Each tool is manually reviewed</li>
                </ul>
              </section>
            </>
          )}
        </div>

        {/* Footer Section with Dynamic Year */}
        <div className="mt-12 pt-6 border-t border-gray-100 text-center">
          <p className="text-xs text-text-soft">
            {lang === 'as' 
              ? `© ${currentYear} কৃত্তিমত — মুক্ত দুভাষিক এআই ডাইৰেক্টৰী` 
              : `© ${currentYear} Krittimat — Open Bilingual AI Directory`}
          </p>
        </div>

      </div>
    </div>
  )
}