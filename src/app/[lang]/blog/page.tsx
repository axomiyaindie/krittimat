// src/app/[lang]/blog/page.tsx
import React from 'react'
import Link from 'next/link'
import { ArrowRight, Calendar, Clock } from 'lucide-react'

// ── BILINGUAL LOCALIZATION DICTIONARIES ──
import en from '@/locales/en.json'
import as from '@/locales/as.json'

const dictionaries: Record<string, any> = { en, as };

// Strict interface definition for post data structure
interface BlogPost {
  id: string;
  title: string;
  title_as: string;
  emoji: string;
  date: string;
  readTime: string;
  readTime_as: string;
  category: string;
  category_as: string;
  desc: string;
  desc_as: string;
}

// Your complete updated posts array with full bilingual metadata routing configurations
const posts: BlogPost[] = [
  { 
    id: 'best-ai-tools-2025', 
    title: 'Best AI Tools of 2025 — The Ultimate List', 
    title_as: '২০২৫ চনৰ সৰ্বশ্ৰেষ্ঠ এআই সঁজুলি — সম্পূৰ্ণ তালিকা',
    emoji: '🏆', 
    date: 'Jan 2025', 
    readTime: '12 min', 
    readTime_as: '১২ মিনিট',
    category: 'Lists', 
    category_as: 'তালিকা',
    desc: 'We tested 100+ AI tools and picked the very best for every use case.',
    desc_as: 'আমি ১০০ টাতকৈও অধিক এআই সঁজুলি পৰীক্ষা কৰি প্ৰতিটো ব্যৱহাৰৰ বাবে শ্ৰেষ্ঠসমূহ বাছনি কৰিছোঁ।'
  },
  { 
    id: 'chatgpt-vs-claude', 
    title: 'ChatGPT vs Claude — Which is Better in 2025?', 
    title_as: 'ChatGPT বনাম Claude — ২০২৫ চনত কোনটো বেছি ভাল?',
    emoji: '⚔️', 
    date: 'Jan 2025', 
    readTime: '8 min', 
    readTime_as: '৮ মিনিট',
    category: 'Comparison', 
    category_as: 'তুলনা',
    desc: 'A detailed side-by-side comparison of the two best AI chatbots.',
    desc_as: 'বৰ্তমানৰ দুটা জনপ্ৰিয় এআই চ্যাটবটৰ এক বিতং আৰু পাৰস্পৰিক তুলনা।'
  },
  { 
    id: 'ai-for-students-guide', 
    title: 'The Complete AI Guide for Students', 
    title_as: 'ছাত্ৰ-ছাত্ৰীৰ বাবে সম্পূৰ্ণ এআই গাইড',
    emoji: '📚', 
    date: 'Dec 2024', 
    readTime: '15 min', 
    readTime_as: '১৫ মিনিট',
    category: 'Guide', 
    category_as: 'গাইড',
    desc: 'Everything a student needs to know about using AI for studies, essays, and research.',
    desc_as: 'পঢ়া-শুনা, ৰচনা আৰু গৱেষণাৰ কামত এআই ব্যৱহাৰ কৰিবলেই ছাত্ৰ-ছাত্ৰীসকলক প্ৰয়োজন হোৱা সকলো তথ্য।'
  },
  { 
    id: 'prompt-engineering-tips', 
    title: '25 Prompt Engineering Tips That Actually Work', 
    title_as: '২৫ টা কাৰ্যকৰী প্ৰম্পট ইঞ্জিনিয়াৰিং টিপছ',
    emoji: '✨', 
    date: 'Dec 2024', 
    readTime: '10 min', 
    readTime_as: '১০ মিনিট',
    category: 'Tips', 
    category_as: 'টিপছ',
    desc: 'Proven prompt patterns to 10x your AI outputs starting today.',
    desc_as: 'আপোনাৰ এআই আউটপুট ১০ গুণ বৃদ্ধি কৰিবলৈ ব্যৱহাৰ কৰক এই প্ৰমাণিত প্ৰম্পট আৰ্হিসমূহ।'
  },
  { 
    id: 'ai-image-generators', 
    title: 'Best AI Image Generators: Midjourney vs DALL-E vs Flux', 
    title_as: 'শ্ৰেষ্ঠ এআই ইমেজ জেনেৰেটৰ: Midjourney বনাম DALL-E বনাম Flux',
    emoji: '🎨', 
    date: 'Nov 2024', 
    readTime: '9 min', 
    readTime_as: '৯ মিনিট',
    category: 'Comparison', 
    category_as: 'তুলনা',
    desc: 'Which AI image generator should you use in 2025? We compared them all.',
    desc_as: '২০২৫ চনত আপুনি কোনটো এআই ইমেজ জেনেৰেটৰ ব্যৱহাৰ কৰা উচিত? আমি সকলোৰে তুলনা কৰিলোঁ।'
  },
  { 
    id: 'free-ai-tools', 
    title: '20 Completely Free AI Tools You Should Start Using', 
    title_as: '২০ টা সম্পূৰ্ণ বিনামূলীয়া এআই সঁজুলি',
    emoji: '🆓', 
    date: 'Nov 2024', 
    readTime: '7 min', 
    readTime_as: '৭ মিনিট',
    category: 'Lists', 
    category_as: 'তালিকা',
    desc: 'The best AI tools that are 100% free with no credit card required.',
    desc_as: 'কোনো ক্ৰেডিট কাৰ্ড অবিহনে ব্যৱহাৰ কৰিব পৰা ১০০% বিনামূলীয়া সৰ্বশ্ৰেষ্ঠ এআই সঁজুলিসমূহ।'
  }
];

interface BlogPageProps {
  params: Promise<{ lang: string }>;
}

// 1. Static parameter generator for routing pre-renders
export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'as' }];
}

export default async function Blog({ params }: BlogPageProps) {
  // Unpack async route parameters safely matching structural conventions
  const { lang } = await params;
  const currentLang = lang === 'as' ? 'as' : 'en';

  return (
    <>
      {/* Blog Intro Header Matrix Section */}
      <div className="bg-white border-b border-gray-100 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <span className="tag mb-3 inline-block bg-primary/10 text-primary font-semibold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
            {currentLang === 'as' ? 'ব্লগ' : 'Blog'}
          </span>
          <h1 className="text-3xl font-extrabold font-heading text-text-main mb-3 tracking-tight">
            {currentLang === 'as' ? 'আমাৰ ব্লগ' : 'AI Blog Insights'}
          </h1>
          <p className="text-text-soft max-w-xl text-sm leading-relaxed">
            {currentLang === 'as' 
              ? 'এআই সঁজুলি সম্পৰ্কীয় নিৰ্দেশনা, তুলনা আৰু নিয়মীয়া খবৰ।' 
              : 'Guides, side-by-side technical comparisons, and workflow news about the AI tool ecosystem.'}
          </p>
        </div>
      </div>

      {/* Main Responsive Grid Container */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link 
              key={post.id} 
              href={`/${currentLang}/blog/${post.id}`}
              className="card p-6 flex flex-col gap-3 hover:scale-[1.01] hover:border-primary/20 hover:shadow-md transition-all group bg-white border border-gray-100 rounded-2xl"
            >
              <div className="text-4xl select-none mb-2">{post.emoji}</div>
              
              <div className="flex items-center gap-2 text-xs text-text-soft font-medium flex-wrap">
                <span className="tag text-[10px] px-2 py-0.5 rounded font-bold bg-gray-50 text-text-soft border border-gray-100 uppercase tracking-wider">
                  {currentLang === 'as' ? post.category_as : post.category}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Calendar size={12} /> {post.date}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock size={12} /> {currentLang === 'as' ? post.readTime_as : post.readTime}
                </span>
              </div>

              <h2 className="font-heading font-bold text-lg text-text-main group-hover:text-primary transition-colors leading-snug pt-1">
                {currentLang === 'as' ? post.title_as : post.title}
              </h2>
              
              <p className="text-xs text-text-soft line-clamp-2 leading-relaxed">
                {currentLang === 'as' ? post.desc_as : post.desc}
              </p>
              
              <span className="mt-auto pt-4 inline-flex items-center gap-1 text-xs text-primary font-bold group-hover:underline">
                {currentLang === 'as' ? 'নিবন্ধটো পঢ়ক' : 'Read article'}{' '}
                <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform duration-200" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}