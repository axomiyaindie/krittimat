// src/features/directory/components/PromptsView.tsx
"use client"; // 💡 Required for active tab toggles and filtering states

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { PromptCard } from '@/features/directory/components/Cards'
import type { Prompt } from '@/types'

import en from '@/locales/en.json'
import as from '@/locales/as.json'

const dictionaries = { en, as };

const categories = [
  { id: 'chatgpt-prompts', label: 'ChatGPT Prompts', label_as: 'ChatGPT প্ৰম্পট', emoji: '💬', desc: 'Best prompts for ChatGPT and GPT-4', desc_as: 'ChatGPT আৰু GPT-4 ৰ বাবে সৰ্বশ্ৰেষ্ঠ প্ৰম্পটসমূহ।' },
  { id: 'coding-prompts', label: 'Coding Prompts', label_as: 'কোডিং প্ৰম্পট', emoji: '💻', desc: 'AI prompts for developers', desc_as: 'ডেভেলপাৰসকলৰ বাবে প্ৰয়োজনীয় এআই প্ৰম্পট।' },
  { id: 'student-prompts', label: 'Student Prompts', label_as: 'ছাত্ৰ প্ৰম্পট', emoji: '📚', desc: 'Study, essays, and exam prep', desc_as: 'পঢ়া-শুনা, ৰচনা আৰু পৰীক্ষাৰ প্ৰস্তুতিৰ বাবে প্ৰম্পট।' },
  { id: 'business-prompts', label: 'Business Prompts', label_as: 'ব্যৱসায়িক প্ৰম্পট', emoji: '💼', desc: 'Marketing, sales, and strategy', desc_as: 'মাৰ্কেটিং, বিক্ৰী আৰু ব্যৱসায়িক ৰণনীতিৰ প্ৰম্পট।' },
]

interface PromptsViewProps {
  promptItems: Prompt[];
  lang: string;
}

export default function PromptsView({ promptItems, lang }: PromptsViewProps) {
  const dict = dictionaries[lang as keyof typeof dictionaries] || dictionaries.en;

  // Active Category Interactive State
  const [active, setActive] = useState('all');

  // Filter optimization calculations handled fast
  const filteredPrompts = useMemo(() => {
    return active === 'all' ? promptItems : promptItems.filter(p => p.category === active);
  }, [active, promptItems]);

  const activeCat = categories.find(c => c.id === active);

  return (
    <>
      {/* Header Matrix */}
      <div className="bg-white border-b border-gray-100 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <span className="tag mb-3 inline-block">
            {lang === 'as' ? 'প্ৰম্পট লাইব্ৰেৰী' : 'Prompt Library'}
          </span>
          <h1 className="text-3xl font-bold font-heading text-text-main mb-3">
            {activeCat 
              ? `${activeCat.emoji} ${lang === 'as' ? activeCat.label_as : activeCat.label}` 
              : (lang === 'as' ? 'এআই প্ৰম্পট সংগ্ৰহ' : 'AI Prompt Library')}
          </h1>
          <p className="text-text-soft max-w-xl text-sm leading-relaxed">
            {activeCat 
              ? (lang === 'as' ? activeCat.desc_as : activeCat.desc)
              : (lang === 'as' 
                  ? 'ChatGPT, Claude, Gemini বা যিকোনো এআই চ্যাটবটৰ বাবে সাজু থকা প্ৰম্পটসমূহ।' 
                  : 'Copy-ready AI prompts for ChatGPT, Claude, Gemini and any AI chatbot.')}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        
        {/* Category Filter Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-8 scrollbar-none w-full">
          <button
            onClick={() => setActive('all')}
            className={`shrink-0 px-4 py-2.5 rounded-full text-xs font-semibold font-heading transition-all shadow-sm ${
              active === 'all' 
                ? 'bg-primary text-white' 
                : 'bg-white border border-gray-200 text-text-soft hover:bg-gray-50'
            }`}
          >
            {lang === 'as' ? 'আটাইবোৰ প্ৰম্পট' : 'All Prompts'}
          </button>
          
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`shrink-0 px-4 py-2.5 rounded-full text-xs font-semibold font-heading transition-all shadow-sm ${
                active === cat.id 
                  ? 'bg-primary text-white' 
                  : 'bg-white border border-gray-100 text-text-soft hover:bg-gray-50'
              }`}
            >
              {cat.emoji} {lang === 'as' ? cat.label_as : cat.label}
            </button>
          ))}
        </div>

        {/* Counter Parameter */}
        <p className="text-xs font-medium text-text-soft mb-6">
          <span className="font-bold text-text-main text-sm">{filteredPrompts.length}</span>{' '}
          {lang === 'as' ? 'টা প্ৰম্পট উপলব্ধ আছে' : 'prompts available'}
        </p>

        {/* Cards Render Pipeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPrompts.map(p => (
            <PromptCard 
              key={p.id} 
              prompt={p} 
              lang={lang} 
              dict={dict} 
            />
          ))}
        </div>

        {/* Call to Action Row */}
        <div className="mt-20 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 sm:p-12 text-center border border-primary/15 max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-text-main mb-2">
            {lang === 'as' ? 'প্ৰম্পট ইঞ্জিনিয়াৰিং শিকিব বিচাৰে?' : 'Want to Learn Prompt Engineering?'}
          </h2>
          <p className="text-text-soft text-sm mb-6 max-w-md mx-auto leading-relaxed">
            {lang === 'as' 
              ? 'আমাৰ সম্পূৰ্ণ বিনামূলীয়া নিৰ্দেশিকাৰ জৰিয়তে সঠিক এআই প্ৰম্পট লিখাৰ কলা আয়ত্ত কৰক।' 
              : 'Master the art of writing perfect AI prompts with our comprehensive free guide.'}
          </p>
          <Link href={`/${lang}/learnai`} className="btn-primary inline-flex">
            {lang === 'as' ? 'প্ৰম্পট ইঞ্জিনিয়াৰিং শিকক →' : 'Learn Prompt Engineering →'}
          </Link>
        </div>

      </div>
    </>
  )
}