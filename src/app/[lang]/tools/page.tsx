// src/app/[lang]/tools/page.tsx
import React from 'react'
import { Sparkles } from 'lucide-react'
import ToolCard from '@/features/directory/components/ToolCard'
import CategoryNav from '@/features/directory/components/CategoryNav'

// ── DATA UTILITY BLUEPRINT IMPORTS ──
import toolsData from '@/data/tools.json'
import type { Tool } from '@/types'

// Strict prop typing for the Next.js async page boundary
interface ToolsDirectoryPageProps {
  params: Promise<{ lang: string }>;
  searchParams: Promise<{ category?: string }>;
}

const tools = toolsData as Tool[];

export default async function ToolsDirectoryPage({ params, searchParams }: ToolsDirectoryPageProps) {
  // Explicitly await parameters before parsing values to satisfy Next.js standard execution layers
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  
  const lang = resolvedParams?.lang === 'as' ? 'as' : 'en';
  
  // Extract active query string value parameters safely
  const activeCategory = resolvedSearchParams?.category || 'all';

  // 🔄 Robust normalization filtering engine matching your tools.json structures
  const filteredTools = activeCategory === 'all' 
    ? tools 
    : tools.filter(t => {
        if (!t.category) return false;
        // Normalizes both sides safely (e.g., "Chat AI" -> "chat-ai" === "chat-ai")
        const toolCategorySlug = t.category.toLowerCase().trim().replace(/\s+/g, '-');
        const targetCategorySlug = activeCategory.toLowerCase().trim();
        return toolCategorySlug === targetCategorySlug;
      });

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 min-h-screen">
      
      {/* Title Header Section Banner Area */}
      <div className="mb-10 text-center md:text-left">
        <h1 className="text-3xl font-extrabold font-heading text-text-main tracking-tight sm:text-4xl flex items-center justify-center md:justify-start gap-2">
          <span>{lang === 'as' ? 'এআই সঁজুলি ডাইৰেক্টৰী' : 'AI Tools Directory'}</span>
          <Sparkles size={24} className="text-primary shrink-0" />
        </h1>
        <p className="mt-3 text-base text-text-soft max-w-xl leading-relaxed">
          {lang === 'as' 
            ? 'আপোনাৰ কৰ্মদক্ষতা ১০ গুণ বৃদ্ধি কৰিবলৈ তালিকাভুক্ত কৰা শ্ৰেষ্ঠ এআই সঁজুলিসমূহ ইয়াতে অন্বেষণ কৰক।' 
            : 'Explore the worlds finest generative artificial intelligence tools curated to scale your professional workflows.'}
        </p>
      </div>

      {/* Category Navigation Component */}
      <CategoryNav 
        lang={lang}
        activeCategory={activeCategory}
      />

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-sm text-text-soft">
          {filteredTools.length} {lang === 'as' ? 'টা সঁজুলি পোৱা গল' : 'tools found'}
        </p>
      </div>

      {/* Grid Execution Render Target Pipeline Layout */}
      {filteredTools.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((individualTool) => (
            <ToolCard 
              key={individualTool.id} 
              tool={individualTool} 
              lang={lang} 
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 border border-dashed border-gray-200 rounded-2xl bg-gray-50/50 max-w-md mx-auto">
          <span className="text-3xl select-none">🔍</span>
          <h3 className="mt-4 font-heading font-bold text-sm text-text-main">
            {lang === 'as' ? 'কোনো সঁজুলি পোৱা নগ’ল' : 'No Tools Found'}
          </h3>
          <p className="text-xs text-text-soft mt-1.5 leading-relaxed">
            {lang === 'as' 
              ? 'এই শ্ৰেণীত বৰ্তমান কোনো সঁজুলি যোগ কৰা হোৱা নাই।' 
              : 'We are expanding this collection daily. Check back shortly!'}
          </p>
        </div>
      )}

    </div>
  );
}