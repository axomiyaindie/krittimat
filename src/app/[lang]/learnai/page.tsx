// src/app/[lang]/learnai/page.tsx
import React from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Clock, GraduationCap, BookOpen, Brain, Sparkles } from 'lucide-react'

// ── NEW PRODUCTION DICTIONARY WRAPPERS ──
import en from '@/locales/en.json'
import as from '@/locales/as.json'

// ── SHARED UTILS LOOKUP ──
import tutorials from '@/data/tutorials.json'
import { learnTopics } from '@/data/learnTopics'
import type { Tutorial } from '@/types'

const dictionaries: Record<string, any> = { en, as };
const tutorialItems = tutorials as Tutorial[];

// Explicitly typing the Lucide icon map component matrix
const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  '🤖': Brain,
  '🧠': Sparkles,
  '✨': GraduationCap,
  '📚': BookOpen
};

interface LearnAiPageProps {
  params: Promise<{ lang: string }>;
}

interface TopicItem {
  slug: string;
  title: string;
  title_as: string;
  description: string;
  description_as: string;
  emoji: string;
}

// 1. Pre-render static pages for all route localization keys
export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'as' }];
}

export default async function LearnAiPage({ params }: LearnAiPageProps) {
  // Await params safely inside Next.js Server Components
  const { lang } = await params;
  const currentLang = lang === 'as' ? 'as' : 'en';
  const dict = dictionaries[currentLang] || dictionaries.en;

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 min-h-screen">
      
      {/* Back to Hub Nav Anchor */}
      <div className="mb-6">
        <Link 
          href={`/${currentLang}`} 
          className="inline-flex items-center gap-1.5 text-sm text-text-soft hover:text-primary transition-colors group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
          {currentLang === 'as' ? 'মুখ্য পৃষ্ঠালৈ ঘূৰি যাওক' : 'Back to Home'}
        </Link>
      </div>

      {/* Header Matrix */}
      <div className="mb-12 max-w-3xl">
        <h1 className="text-3xl font-extrabold font-heading text-text-main tracking-tight sm:text-4xl">
          {dict.home?.learnAI || "Learn AI"} Hub
        </h1>
        <p className="mt-3 text-base text-text-soft leading-relaxed">
          {currentLang === 'as'
            ? 'সৰল ভাষাত নতুন কথা শিকিবলৈ আমাৰ বিনামূলীয়া এআই গাইড আৰু টিউটরিয়েলসমূহ অন্বেষণ কৰক।'
            : 'Master artificial intelligence foundations, workflows, and prompt engineering through simple, jargon-free guides.'}
        </p>
      </div>

      {/* Grid Track Modules */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {(learnTopics as TopicItem[]).map((topic) => {
          const IconComponent = iconMap[topic.emoji] || BookOpen;
          return (
            <div 
              key={topic.slug} 
              className="card p-6 flex flex-col sm:flex-row items-start gap-4 hover:border-primary/20 transition-all group relative bg-white border border-gray-100 rounded-2xl shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary shrink-0">
                <IconComponent size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-heading font-bold text-lg text-text-main group-hover:text-primary transition-colors">
                  {currentLang === 'as' ? topic.title_as : topic.title}
                </h3>
                <p className="text-sm text-text-soft mt-1 leading-relaxed">
                  {currentLang === 'as' ? topic.description_as || topic.description : topic.description}
                </p>
                <Link 
                  href={`/${currentLang}/learnai/${topic.slug}`} 
                  className="inline-flex items-center gap-1 text-xs font-semibold text-primary mt-4 hover:underline"
                >
                  {currentLang === 'as' ? 'গাইড পঢ়ক' : (dict.home?.readMore || "Read Guide")} <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          )
        })}
      </div>

      {/* Secondary Row: Step-By-Step Tutorials Section */}
      <div className="border-t border-gray-100 pt-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold font-heading text-text-main">
            {dict.home?.latestTutorials || "Step-by-Step Tutorials"}
          </h2>
          <p className="text-sm text-text-soft mt-1">
            {currentLang === 'as' ? 'চিত্ৰ আৰু খোজ অনুসৰি কাম কৰাৰ গভীৰ নিৰ্দেশনা' : 'Deep dives into matching workflows with visual steps'}
          </p>
        </div>

        {tutorialItems && tutorialItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tutorialItems.map((tut) => (
              <div key={tut.id} className="card overflow-hidden bg-white flex flex-col group border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all">
                <div className="aspect-video bg-gray-50 flex items-center justify-center text-4xl select-none relative border-b border-gray-50">
                  {tut.thumbnail || '🎬'}
                  <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/70 text-[10px] text-white font-medium flex items-center gap-1">
                    <Clock size={10} /> {tut.duration}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-1 gap-2">
                  <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-primary/5 border border-primary/10 text-primary w-fit font-semibold uppercase tracking-wider">
                    {tut.level || 'Beginner'}
                  </span>
                  <h4 className="font-heading font-bold text-base text-text-main group-hover:text-primary transition-colors leading-snug">
                    {currentLang === 'as' ? tut.title_as || tut.title : tut.title}
                  </h4>
                  <p className="text-xs text-text-soft line-clamp-2 leading-relaxed">
                    {currentLang === 'as' ? tut.description_as || tut.description : tut.description}
                  </p>
                  <Link 
                    href={`/${currentLang}/learnai/${tut.id}`} 
                    className="text-xs font-semibold text-primary mt-4 hover:underline flex items-center gap-1"
                  >
                    {currentLang === 'as' ? 'টিউটোৰিয়েল আৰম্ভ কৰক' : 'Start Tutorial'} <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-text-soft text-sm">
            No step tutorials uploaded yet. Check back soon!
          </div>
        )}
      </div>
    </div>
  )
}