// src/features/directory/views/HomeView.tsx
import React from 'react'
import HeroSection from './HeroSection'
import CategoriesSection from './CategoriesSection'
import TrendingSection from './TrendingSection'
import LearnAiSection from './LearnAiSection'
import UserTypesSection from './UserTypesSection'
import NewsletterForm from '../components/NewsletterForm'

// Data Lookups
import { tools, categories } from '@/data'

// Explicitly type check incoming layout properties
interface HomeViewProps {
  lang: string;
  dict: any;
}

export default function HomeView({ lang, dict }: HomeViewProps) {
  // 1. Data filtering operations executed fast on server-side compilation
  const trendingTools = tools.filter(t => t.trending).slice(0, 6)
  const topCategories = categories.slice(0, 8)

  return (
    <>
      {/* Hero Interactivity Block */}
      <HeroSection lang={lang} dict={dict} />
      
      {/* Top Categories Grid Layout Display */}
      <CategoriesSection lang={lang} dict={dict} categories={topCategories} />
      
      {/* Real-time Trending Tool Card Arrays */}
      <TrendingSection lang={lang} dict={dict} tools={trendingTools} />
      
      {/* Localized Beginner Learning Module Tracks */}
      <LearnAiSection lang={lang} dict={dict} />
      
      {/* Demographic Segment Target Breakdowns */}
      <UserTypesSection lang={lang} dict={dict} />
      
      {/* Newsletter block lives here with correct property token passing */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <NewsletterForm dict={dict} lang={lang} />
        </div>
      </section>
    </>
  )
}