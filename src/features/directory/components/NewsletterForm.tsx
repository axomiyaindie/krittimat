// src/features/directory/components/NewsletterForm.tsx
import React from 'react';

interface NewsletterFormProps {
  dict: any;
  lang: string;
}

export default function NewsletterForm({ dict, lang }: NewsletterFormProps) {
  const TELEGRAM_URL = "https://t.me/kriitimat";

  return (
    <div className="bg-gradient-to-br from-blue-600 via-primary to-slate-900 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl border border-white/10 text-center max-w-4xl mx-auto group">
      
      {/* Tech Grid & Ambient Glow Accents */}
      <div className="absolute inset-0 opacity-10 pointer-events-none select-none mix-blend-overlay bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-400 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-indigo-500 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none" />

      {/* Content Stack */}
      <div className="relative z-10 flex flex-col items-center">
        
        {/* Localized Assamese Rhino Community Badge Icon */}
        <div className="w-16 h-16 bg-white/10 border border-white/20 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-inner backdrop-blur-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 select-none">
          🦏
        </div>

        {/* Clean Single-Language Copy Stack */}
        <div className="space-y-3 max-w-2xl mb-8">
          <h2 className="text-2xl sm:text-3xl font-black font-heading tracking-tight leading-tight">
            {lang === 'as' ? 'আমাৰ টেলিগ্ৰাম চেনেলত যোগ দিয়ক' : 'Join Our Telegram Channel'}
          </h2>
          <div className="w-12 h-0.5 bg-white/30 rounded-full mx-auto my-2" />
          <p className="text-blue-100/90 text-sm sm:text-base leading-relaxed font-medium">
            {lang === 'as' 
              ? 'নতুন এআই সঁজুলি আৰু প্ৰম্পট ইঞ্জিনিয়াৰিং সম্পৰ্কীয় খবৰসমূহ অসমীয়া ভাষাত লগে লগে লাভ কৰক।' 
              : 'Get real-time updates on powerful new AI tools, premium prompt blueprints, and tech insights instantly.'}
          </p>
        </div>

        {/* Isolated Action Button */}
        <a 
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-slate-900 font-heading font-extrabold px-10 py-4 rounded-2xl hover:bg-blue-50 hover:scale-[1.02] active:scale-[0.98] transition-all text-sm tracking-wide shadow-lg inline-flex items-center justify-center gap-2 group/btn min-w-[220px]"
        >
          {lang === 'as' ? (
            <span>চেনেলত যোগ দিয়ক →</span>
          ) : (
            <span>Join Channel →</span>
          )}
        </a>

      </div>
    </div>
  );
}