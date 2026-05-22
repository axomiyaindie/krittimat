// src/app/[lang]/learnai/[slug]/page.tsx
import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Clock, BookOpen, Sparkles } from 'lucide-react'
import tutorialsData from '@/data/tutorials.json'
import { getLearnTopicBySlug, learnTopics } from '@/data/learnTopics'
import type { Tutorial } from '@/types'

// Explicitly define the internal Topic structure matching your data footprint
interface TopicItem {
  slug: string;
  title: string;
  title_as: string;
  description: string;
  description_as: string;
  emoji: string;
  readingTime: string;
  body: string[];
  body_as: string[];
}

interface LearnAiDetailPageProps {
  params: Promise<{ lang: string; slug: string }>;
}

const tutorialItems = tutorialsData as Tutorial[];

// 1. Tell Next.js to compile BOTH topic slugs and tutorial IDs for all locales at build time
export async function generateStaticParams() {
  const paths: { lang: string; slug: string }[] = [];
  const locales = ['en', 'as'];

  // Safely extract types up front to eliminate automatic semicolon parsing bugs
  const typedTopics = learnTopics as TopicItem[];
  const typedTutorials = tutorialItems;

  // Compile all Guide Topics paths
  typedTopics.forEach((topic) => {
    locales.forEach((locale) => {
      paths.push({ lang: locale, slug: topic.slug });
    });
  });

  // Compile all JSON Tutorial paths
  typedTutorials.forEach((tutorial) => {
    locales.forEach((locale) => {
      paths.push({ lang: locale, slug: String(tutorial.id) });
    });
  });

  return paths;
}

export default async function LearnAiDetailPage({ params }: LearnAiDetailPageProps) {
  const { lang, slug } = await params;
  const currentLang = lang === 'as' ? 'as' : 'en';

  const topic = getLearnTopicBySlug(slug) as TopicItem | undefined;
  const tutorial = tutorialItems.find((item) => String(item.id) === slug);

  if (!topic && !tutorial) {
    notFound();
  }

  // ── RENDER CONDITION A: CONTENT IS A STATIC GUIDE TOPIC ──
  if (topic) {
    const title = currentLang === 'as' ? topic.title_as || topic.title : topic.title;
    const description = currentLang === 'as' ? topic.description_as || topic.description : topic.description;
    const body = currentLang === 'as' ? topic.body_as || topic.body : topic.body;

    return (
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 min-h-screen">
        <Link href={`/${currentLang}/learnai`} className="inline-flex items-center gap-2 text-sm text-text-soft hover:text-primary transition-colors">
          <ArrowLeft size={16} />
          {currentLang === 'as' ? 'শিকনীলৈ ঘূৰি যাওক' : 'Back to Learn AI'}
        </Link>

        <article className="mt-8 rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
          <div className="flex items-center gap-3 text-primary">
            <span className="text-4xl select-none">{topic.emoji}</span>
            <span className="inline-flex items-center gap-1 rounded-full bg-primary/5 px-3 py-1 text-xs font-semibold">
              <BookOpen size={13} />
              {currentLang === 'as' ? 'শিকনী' : 'Guide'}
            </span>
          </div>

          <h1 className="mt-5 text-3xl font-extrabold font-heading text-text-main sm:text-4xl">{title}</h1>
          <p className="mt-3 text-base leading-relaxed text-text-soft">{description}</p>

          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-gray-50 px-3 py-1 text-xs font-medium text-text-soft">
            <Clock size={13} />
            {topic.readingTime}
          </div>

          <div className="mt-8 space-y-4 text-sm leading-7 text-text-main">
            {body.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </article>
      </div>
    )
  }

  // ── RENDER CONDITION B: CONTENT IS A DYNAMIC TUTORIAL ITEM ──
  const title = currentLang === 'as' ? tutorial?.title_as || tutorial?.title : tutorial?.title;
  const description = currentLang === 'as' ? tutorial?.description_as || tutorial?.description : tutorial?.description;

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 min-h-screen">
      <Link href={`/${currentLang}/learnai`} className="inline-flex items-center gap-2 text-sm text-text-soft hover:text-primary transition-colors">
        <ArrowLeft size={16} />
        {currentLang === 'as' ? 'শিকনীলৈ ঘূৰি যাওক' : 'Back to Learn AI'}
      </Link>

      <article className="mt-8 rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-4xl select-none">{tutorial?.thumbnail || '🎬'}</span>
          <span className="inline-flex items-center gap-1 rounded-full bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
            <Sparkles size={13} />
            {tutorial?.level}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-gray-50 px-3 py-1 text-xs font-medium text-text-soft">
            <Clock size={13} />
            {tutorial?.duration}
          </span>
        </div>

        <h1 className="mt-5 text-3xl font-extrabold font-heading text-text-main sm:text-4xl">{title}</h1>
        <p className="mt-3 text-base leading-relaxed text-text-soft">{description}</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5">
            <h2 className="text-sm font-bold font-heading text-text-main">
              {currentLang === 'as' ? 'ব্যৱহৃত সঁজুলি' : 'Tools Used'}
            </h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {tutorial?.tools.map((tool) => (
                <span key={tool} className="rounded-full bg-white px-3 py-1 text-xs font-medium text-text-soft border border-gray-100">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5">
            <h2 className="text-sm font-bold font-heading text-text-main">
              {currentLang === 'as' ? 'শিকনী কাঠামো' : 'Tutorial Structure'}
            </h2>
            <p className="mt-3 text-sm leading-6 text-text-soft">
              {currentLang === 'as'
                ? `এই টিউটোৰিয়েলটো ${tutorial?.steps}টা ধাপত গঠিত আৰু ${tutorial?.level} স্তৰৰ শিক্ষাৰ্থীৰ বাবে উপযোগী।`
                : `This tutorial is structured into ${tutorial?.steps} steps and is suitable for ${tutorial?.level?.toLowerCase()} learners.`}
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-dashed border-primary/20 bg-primary/5 p-5">
          <h2 className="text-sm font-bold font-heading text-text-main">
            {currentLang === 'as' ? 'কি আশা কৰিব পাৰি' : 'What to Expect'}
          </h2>
          <p className="mt-3 text-sm leading-6 text-text-soft">
            {currentLang === 'as'
              ? 'এই পৃষ্ঠাই টিউটোৰিয়েলটোৰ সংক্ষিপ্ত ধাৰণা দেখুৱায়। পৰৱৰ্তী পৰ্যায়ত ইয়াক পূৰ্ণ ধাপ-ধাপে পাঠ, উদাহৰণ আৰু দৃশ্যমান ব্যাখ্যাৰে বিস্তৃত কৰিব পাৰি।'
              : 'This page provides the tutorial overview. It can be expanded later into a full step-by-step lesson with worked examples, visuals, and deeper walkthroughs.'}
          </p>
        </div>
      </article>
    </div>
  )
}