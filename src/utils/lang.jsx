import { createContext, useContext, useState } from 'react'

const LangContext = createContext()

export const translations = {
  en: {
    home: 'Home', tools: 'AI Tools', learn: 'Learn AI', prompts: 'Prompts',
    tutorials: 'Tutorials', blog: 'Blog',
    heroTitle: 'Your AI Learning Hub',
    heroSub: 'Discover 100+ AI tools, master prompts, and learn AI — in English & Assamese',
    searchPlaceholder: 'Search AI tools, prompts, tutorials...',
    exploreTools: 'Explore AI Tools',
    learnFree: 'Learn for Free',
    trendingTools: 'Trending AI Tools',
    popularTools: 'Popular AI Tools',
    categories: 'Browse by Category',
    learnAI: 'Learn AI',
    promptLibrary: 'Prompt Library',
    latestTutorials: 'Latest Tutorials',
    newsletter: 'Stay Updated on AI',
    newsletterSub: 'Get weekly AI tool discoveries, tutorials, and prompts — in English & Assamese',
    subscribe: 'Subscribe',
    emailPlaceholder: 'Enter your email',
    free: 'Free',
    viewAll: 'View All',
    copy: 'Copy Prompt',
    copied: 'Copied!',
    readMore: 'Read More',
    startTutorial: 'Start Tutorial',
    beginner: 'Beginner',
    intermediate: 'Intermediate',
    advanced: 'Advanced',
  },
  as: {
    home: 'মূল পৃষ্ঠা', tools: 'AI সঁজুলি', learn: 'AI শিকক', prompts: 'প্ৰম্পট',
    tutorials: 'টিউটৰিয়েল', blog: 'ব্লগ',
    heroTitle: 'আপোনাৰ AI শিক্ষা কেন্দ্ৰ',
    heroSub: '১০০+ AI সঁজুলি আৱিষ্কাৰ কৰক, প্ৰম্পট আয়ত্ত কৰক, আৰু AI শিকক — ইংৰাজী আৰু অসমীয়াত',
    searchPlaceholder: 'AI সঁজুলি, প্ৰম্পট, টিউটৰিয়েল সন্ধান কৰক...',
    exploreTools: 'AI সঁজুলি অন্বেষণ কৰক',
    learnFree: 'বিনামূলীয়াকৈ শিকক',
    trendingTools: 'ট্ৰেণ্ডিং AI সঁজুলি',
    popularTools: 'জনপ্ৰিয় AI সঁজুলি',
    categories: 'শ্ৰেণী অনুসৰি ব্ৰাউজ কৰক',
    learnAI: 'AI শিকক',
    promptLibrary: 'প্ৰম্পট লাইব্ৰেৰী',
    latestTutorials: 'শেহতীয়া টিউটৰিয়েল',
    newsletter: 'AI ৰ বিষয়ে আপডেট থাকক',
    newsletterSub: 'সাপ্তাহিক AI সঁজুলি আৱিষ্কাৰ, টিউটৰিয়েল, আৰু প্ৰম্পট পাওক — ইংৰাজী আৰু অসমীয়াত',
    subscribe: 'চাবস্ক্ৰাইব কৰক',
    emailPlaceholder: 'আপোনাৰ ইমেইল দিয়ক',
    free: 'বিনামূলীয়া',
    viewAll: 'সকলো চাওক',
    copy: 'প্ৰম্পট কপি কৰক',
    copied: 'কপি হৈছে!',
    readMore: 'অধিক পঢ়ক',
    startTutorial: 'টিউটৰিয়েল আৰম্ভ কৰক',
    beginner: 'নবীন',
    intermediate: 'মধ্যবৰ্তী',
    advanced: 'উন্নত',
  }
}

export function LangProvider({ children }) {
  const [lang, setLang] = useState('en')
  const t = translations[lang]
  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}
