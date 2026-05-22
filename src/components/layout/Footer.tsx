// src/components/layout/Footer.jsx
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function Footer({ lang }) {
  const currentYear = new Date().getFullYear();
  const safeLang = lang || 'en';

  // Bilingual Content
  const t = {
    en: {
      bio: "The premier open directory bridging the digital divide to make generative AI accessible for everyone — a free and open platform where creators, innovators, and curious minds from all walks of life can discover, explore, and harness the power of AI.",
      
      exploreTools: "Explore Tools",
      allAITools: "All AI Tools",
      chatSystems: "Chat Systems",
      codingAssistants: "Coding Assistants",
      imageGeneration: "Image Generation",

      resources: "Resources",
      promptRepositories: "Prompt Repositories",
      chatgptTemplates: "ChatGPT Templates",
      developerPrompts: "Developer Prompts",
      tutorialHub: "Tutorial Hub",

      platform: "Platform",
      aboutUs: "About Us",
      learnAIHub: "Learn AI Hub",
      articlesNews: "Articles & News",
      githubCore: "GitHub Core",

      copyright: `© ${currentYear} Krittimat. Designed for the regional AI ecosystem.`,
      about: "About",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      sitemap: "Sitemap"
    },
    as: {
      bio: "সকলোৰে বাবে জেনাৰেটিভ এআই সুলভ কৰি তুলিবলৈ ডিজিটেল বিভাজন দূৰ কৰা প্ৰিমিয়াৰ মুক্ত ডাইৰেক্টৰী — এটা বিনামূলীয়া আৰু মুক্ত প্লেটফৰ্ম য’ত সৃজনশীল, উদ্ভাৱক আৰু বিভিন্ন পটভূমিৰ কৌতূহলী মনৰ মানুহে এআইৰ শক্তি আৱিষ্কাৰ কৰিব পাৰে, অন্বেষণ কৰিব পাৰে আৰু ব্যৱহাৰ কৰিব পাৰে।",

      exploreTools: "সঁজুলিসমূহ",
      allAITools: "সকলো এআই টুল",
      chatSystems: "চেট চিষ্টেম",
      codingAssistants: "ক'ডিং সহায়ক",
      imageGeneration: "ছবি সৃষ্টি",

      resources: "সম্পদসমূহ",
      promptRepositories: "প্ৰম্পট ৰেপ'জিটৰী",
      chatgptTemplates: "ChatGPT টেমপ্লেট",
      developerPrompts: "ডেভেলপাৰ প্ৰম্পট",
      tutorialHub: "টিউটোৰিয়েল হাব",

      platform: "প্লেটফৰ্ম",
      aboutUs: "আমাৰ বিষয়ে",
      learnAIHub: "এআই শিক্ষা হাব",
      articlesNews: "প্ৰবন্ধ আৰু বাতৰি",
      githubCore: "গিটহাব ক'ৰ",

      copyright: `© ${currentYear} Krittimat. ই অঞ্চলীয় এআই ইক'চিষ্টেমৰ বাবে ডিজাইন কৰা হৈছে।`,
      about: "আমাৰ বিষয়ে",
      privacy: "গোপনীয়তা নীতি",
      terms: "সেৱাৰ চৰ্তাৱলী",
      sitemap: "চাইটমেপ"
    }
  };

  return (
    <footer className="w-full border-t border-gray-100 bg-gray-50/70 text-text-soft">
      {/* ── Main Directory Matrix ── */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 grid grid-cols-2 md:grid-cols-5 gap-8">
        
        {/* Brand Column */}
        <div className="col-span-2 flex flex-col gap-4">
          <Link href={`/${safeLang}`} className="flex items-center gap-2 hover:opacity-90 transition-opacity">
            <img 
              src="/assets/logo.svg" 
              alt="Krittimat Logo" 
              className="h-7 w-auto object-contain" 
            />
          </Link>
          <p className="text-sm leading-relaxed max-w-sm text-text-soft">
            {t[safeLang].bio}
          </p>
        </div>

        {/* Column 1: Explore Tools */}
        <div className="flex flex-col gap-3">
          <h4 className="font-heading text-xs font-semibold text-text-main tracking-wider uppercase">
            {t[safeLang].exploreTools}
          </h4>
          <nav className="flex flex-col gap-2 text-sm">
            <Link href={`/${safeLang}/tools`} className="hover:text-primary transition-colors">
              {t[safeLang].allAITools}
            </Link>
            <Link href={`/${safeLang}/tools?category=chat-ai`} className="hover:text-primary transition-colors">
              {t[safeLang].chatSystems}
            </Link>
            <Link href={`/${safeLang}/tools?category=coding-ai`} className="hover:text-primary transition-colors">
              {t[safeLang].codingAssistants}
            </Link>
            <Link href={`/${safeLang}/tools?category=image-ai`} className="hover:text-primary transition-colors">
              {t[safeLang].imageGeneration}
            </Link>
          </nav>
        </div>

        {/* Column 2: Resources */}
        <div className="flex flex-col gap-3">
          <h4 className="font-heading text-xs font-semibold text-text-main tracking-wider uppercase">
            {t[safeLang].resources}
          </h4>
          <nav className="flex flex-col gap-2 text-sm">
            <Link href={`/${safeLang}/prompts`} className="hover:text-primary transition-colors">
              {t[safeLang].promptRepositories}
            </Link>
            <Link href={`/${safeLang}/prompts?category=chatgpt-prompts`} className="hover:text-primary transition-colors">
              {t[safeLang].chatgptTemplates}
            </Link>
            <Link href={`/${safeLang}/prompts?category=coding-prompts`} className="hover:text-primary transition-colors">
              {t[safeLang].developerPrompts}
            </Link>
            <Link href={`/${safeLang}/learnai`} className="hover:text-primary transition-colors">
              {t[safeLang].tutorialHub}
            </Link>
          </nav>
        </div>

        {/* Column 3: Platform */}
        <div className="flex flex-col gap-3">
          <h4 className="font-heading text-xs font-semibold text-text-main tracking-wider uppercase">
            {t[safeLang].platform}
          </h4>
          <nav className="flex flex-col gap-2 text-sm">
            <Link href={`/${safeLang}/about`} className="hover:text-primary transition-colors font-medium text-text-main">
              {t[safeLang].aboutUs}
            </Link>
            <Link href={`/${safeLang}/learnai`} className="hover:text-primary transition-colors">
              {t[safeLang].learnAIHub}
            </Link>
            <Link href={`/${safeLang}/blog`} className="hover:text-primary transition-colors">
              {t[safeLang].articlesNews}
            </Link>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-primary transition-colors flex items-center gap-1"
            >
              {t[safeLang].githubCore} <ArrowUpRight size={13} className="text-gray-400" />
            </a>
          </nav>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-gray-200/60 bg-gray-50/90">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="text-gray-400">
            {t[safeLang].copyright}
          </div>
          
          <div className="flex items-center gap-6 text-text-soft">
            <Link href={`/${safeLang}/about`} className="hover:text-primary transition-colors">
              {t[safeLang].about}
            </Link>
            <Link href={`/${safeLang}/privacy`} className="hover:text-primary transition-colors">
              {t[safeLang].privacy}
            </Link>
            <Link href={`/${safeLang}/terms`} className="hover:text-primary transition-colors">
              {t[safeLang].terms}
            </Link>
            <a href="/sitemap.xml" className="hover:text-primary transition-colors">
              {t[safeLang].sitemap}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
