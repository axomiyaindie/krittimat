// src/app/[lang]/blog/[id]/page.tsx
import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';

// Explicit layout validation structures
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
  // Multi-line content arrays for clean structural rendering
  content: string[];
  content_as: string[];
}

// ── COMPLETE BILINGUAL POSTS DATABASE ──
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
    desc_as: 'আমি ১০০ টাতকৈও অধিক এআই সঁজুলি পৰীক্ষা কৰি প্ৰতিটো ব্যৱহাৰৰ বাবে শ্ৰেষ্ঠসমূহ বাছনি কৰিছোঁ।' ,
    content: [
      "Artificial Intelligence has completely evolved, and 2025 brings a suite of tools that are highly optimized for productivity, writing, and automation.",
      "Our testing process evaluated speed, pricing tiers, and context accuracy across multiple benchmark test-suites.",
      "The top performers include advanced next-gen reasoning models that shift away from standard prompt processing into autonomous agent workflows."
    ],
    content_as: [
      "কৃত্ৰিম বুদ্ধিমত্তা এতিয়া সম্পূৰ্ণৰূপে সলনি হৈ পৰিছে, আৰু ২০২৫ চনে উৎপাদনশীলতা, লিখন কাৰ্য আৰু স্বয়ংক্ৰিয়কৰণৰ বাবে উচ্চ স্তৰত অপ্টিমাইজ কৰা কেতবোৰ সঁজুলি লৈ আনিছে।",
      "আমাৰ পৰীক্ষণ প্ৰক্ৰিয়াত কেইবাটাও মাপকাঠিৰ ভিত্তিত গতি, মূল্য আৰু সঠিকতা মূল্যায়ন কৰা হৈছিল।",
      "শীৰ্ষ প্ৰদৰ্শনকাৰীসকলৰ ভিতৰত আছে উন্নত পৰৱৰ্তী প্ৰজন্মৰ মডেলসমূহ, যিয়ে সাধাৰণ প্ৰম্পট প্ৰক্ৰিয়াকৰণৰ পৰা স্বয়ংক্ৰিয় কামলৈ গতি কৰিছে।"
    ]
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
    desc_as: 'বৰ্তমানৰ দুটা জনপ্ৰিয় এআই চ্যাটবটৰ এক বিতং আৰু পাৰস্পৰিক তুলনা।' ,
    content: [
      "The battle between OpenAI and Anthropic heats up in 2025. Both companies have released models featuring incredible deeper-reasoning capabilities.",
      "While ChatGPT excels at coding, complex tools integrations, and speed pipelines, Claude holds an edge in writing nuances and coding logic.",
      "Choose your primary model based on whether your daily routine demands structural math data operations or highly detailed creative execution profiles."
    ],
    content_as: [
      "OpenAI আৰু Anthropic-ৰ মাজৰ প্ৰতিযোগিতা ২০২৫ চনত অধিক তীব্ৰতৰ হৈ পৰিছে। দুয়োটা কোম্পানিয়ে গভীৰ চিন্তা-ভাৱনা কৰিব পৰা সামৰ্থ্য থকা নতুন মডেল মুকলি কৰিছে।",
      "য’ত ChatGPT ক’ডিং, জটিল সঁজুলি একত্ৰীকৰণ আৰু দ্ৰুত কামৰ বাবে ব্যতিক্ৰমী, তাৰ বিপৰীতে ক্লাউড (Claude) লিখন শৈলী আৰু যৌক্তিক বিশ্লেষণত আগবঢ়া।",
      "আপোনাৰ দৈনিক কামৰ বাবে গাণিতিক বিশ্লেষণ বা অতি বিতং সৃজনশীল কাৰ্যৰ প্ৰয়োজন হয়নে নহয় তাৰ ওপৰত ভিত্তি কৰি সঠিক মডেলটো বাছনি কৰক।"
    ]
  }
  // 💡 Add your remaining posts here following the exact same structure!
];

interface BlogPostPageProps {
  params: Promise<{ lang: string; id: string }>;
}

// 1. Tell Next.js to pre-render ALL matching combinations of languages and IDs at build time
export async function generateStaticParams() {
  const paths: { lang: string; id: string }[] = [];
  const locales = ['en', 'as'];
  
  posts.forEach((post) => {
    locales.forEach((locale) => {
      paths.push({ lang: locale, id: post.id });
    });
  });

  return paths;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { lang, id } = await params;
  const currentLang = lang === 'as' ? 'as' : 'en';

  // Find the requested post
  const post = posts.find((p) => p.id === id);

  // Fallback to 404 page if post doesn't exist
  if (!post) {
    notFound();
  }

  // Choose content based on language
  const title = currentLang === 'as' ? post.title_as : post.title;
  const category = currentLang === 'as' ? post.category_as : post.category;
  const readTime = currentLang === 'as' ? post.readTime_as : post.readTime;
  const paragraphContent = currentLang === 'as' ? post.content_as : post.content;

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8 min-h-screen text-text-main">
      
      {/* Dynamic Back to Blog Archive Navigation Row */}
      <div className="mb-8">
        <Link 
          href={`/${currentLang}/blog`} 
          className="inline-flex items-center gap-1.5 text-sm text-text-soft hover:text-primary transition-colors group font-medium"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
          {currentLang === 'as' ? 'ব্লগলৈ ঘূৰি যাওক' : 'Back to AI Blog'}
        </Link>
      </div>

      {/* Article Header Metadata Deck */}
      <div className="space-y-4 mb-8 pb-6 border-b border-gray-100">
        <div className="flex items-center gap-2 text-xs text-text-soft font-semibold flex-wrap">
          <span className="bg-primary/10 text-primary px-2.5 py-1 rounded-full uppercase tracking-wider text-[10px]">
            {category}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
          <span>•</span>
          <span className="flex items-center gap-1"><Clock size={12} /> {readTime}</span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold font-heading text-text-main leading-tight tracking-tight">
          {title}
        </h1>
      </div>

      {/* Article Render Body Block */}
      <div className="space-y-6 text-base sm:text-lg text-text-main/90 leading-relaxed font-normal">
        {paragraphContent.map((paragraph, index) => (
          <p key={index} className="first-letter:text-xl first-letter:font-bold">
            {paragraph}
          </p>
        ))}
      </div>

    </article>
  );
}