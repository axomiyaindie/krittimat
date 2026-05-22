// src/features/directory/components/ToolDetailsView.tsx
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, TrendingUp, Check, Copy, Play } from 'lucide-react';
import ToolCard from '@/features/directory/components/ToolCard';
import type { Tool } from '@/types';

interface ToolDetailsViewProps {
  tool: Tool;
  recommendations: Tool[];
  lang: string;
}

export default function ToolDetailsView({ tool, recommendations, lang }: ToolDetailsViewProps) {
  // Track independent copy success feedback state indices
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const domain = tool.website ? tool.website.replace('https://', '').replace('www.', '').split('/')[0] : '';
  const fallbackLetter = tool.name ? tool.name.charAt(0).toUpperCase() : '🛠️';

  // Dynamic system prompt text template streams customized to the active page
  const promptTemplates = [
    `Act as an expert ${tool.name} engineer and optimize this functional query workflow.`,
    `Explain how to construct high-fidelity prompts inside ${tool.name} for beginners with 3 real-world examples.`,
    `Write a comprehensive production script utilizing ${tool.name} automation in a professional tone.`
  ];

  const handleCopyText = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 min-h-screen text-text-main">
      
      {/* Back Anchor Header Navigation Row */}
      <div className="mb-8">
        <Link 
          href={`/${lang}/tools`} 
          className="inline-flex items-center gap-1.5 text-sm text-text-soft hover:text-primary transition-colors group font-medium"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
          {lang === 'as' ? 'এআই সঁজুলিলৈ ঘূৰি যাওক' : 'Back to AI Tools'}
        </Link>
      </div>

      {/* Main Layout Profile Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        {/* LEFT COLUMN TRACK: Interactive Content Core Elements */}
        <div className="lg:col-span-2 space-y-6">
          <div className="card p-6 sm:p-8 bg-white border border-gray-100 rounded-2xl shadow-sm relative overflow-hidden">
            
            {/* Status Indicator Badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              {tool.trending && (
                <span className="inline-flex items-center gap-1 text-[10px] bg-amber-50 text-amber-700 font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border border-amber-200">
                  <TrendingUp size={10} /> 🔥 Trending
                </span>
              )}
              {tool.featured && (
                <span className="inline-flex items-center gap-1 text-[10px] bg-primary/5 text-primary font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border border-primary/10">
                  ★ Featured
                </span>
              )}
            </div>

            {/* Profile Identity Row Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center overflow-hidden shadow-inner shrink-0 select-none">
                  {domain ? (
                    <img 
                      src={`https://icons.duckduckgo.com/ip3/${domain}.ico`} 
                      alt="" 
                      className="w-8 h-8 object-contain"
                      onError={(e) => { e.currentTarget.style.display = 'none' }}
                    />
                  ) : (
                    <div className="text-xl font-bold text-primary font-heading">{fallbackLetter}</div>
                  )}
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold font-heading text-text-main leading-tight">
                    {tool.name}
                  </h1>
                  <p className="text-xs text-text-soft font-medium mt-0.5">
                    {tool.company} · <span className="text-primary font-semibold">{tool.category}</span>
                  </p>
                </div>
              </div>

              {/* Primary Call To Action Button Redirect Link */}
              {tool.website && (
                <a 
                  href={tool.website} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold shadow-sm hover:opacity-95 transition-all text-sm w-full sm:w-auto shrink-0"
                >
                  <span>{lang === 'as' ? 'ৱেবছাইট ভিজিট কৰক' : `Visit ${tool.name}`}</span>
                  <ExternalLink size={16} />
                </a>
              )}
            </div>

            {/* Summary Information Block Panel */}
            <div className="py-6">
              <h3 className="text-xs font-bold text-text-soft uppercase tracking-wider mb-2">
                {lang === 'as' ? 'সঁজুলিৰ বিৱৰণ' : 'Overview'}
              </h3>
              <p className="text-base leading-relaxed text-text-soft">
                {lang === 'as' ? tool.description_as || tool.description : tool.description}
              </p>
            </div>

            {/* Key Features Checkbox Lists Grid */}
            <div className="border-t border-gray-100 pt-6">
              <h3 className="text-xs font-bold text-text-soft uppercase tracking-wider mb-3">
                {lang === 'as' ? 'মূল বৈশিষ্ট্যসমূহ' : 'Key Features'}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                {['Advanced Deep Model Architectures', 'Real-Time Edge Content Synchronization', 'Optimized Regional Context Execution Layer', 'Automated External API Integrations'].map((feat) => (
                  <div key={feat} className="flex items-center gap-2 text-text-soft">
                    <span className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <Check size={12} />
                    </span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pros & Cons Balancing Matrix Layout */}
            <div className="border-t border-gray-100 pt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-3">
                  {lang === 'as' ? 'সুবিধাসমূহ' : 'Pros'}
                </h4>
                <ul className="space-y-2 text-sm text-text-soft">
                  <li className="flex items-start gap-2">✔ Best performance directory ecosystem</li>
                  <li className="flex items-start gap-2">✔ High-fidelity localized content generation</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-bold text-rose-700 uppercase tracking-wider mb-3">
                  {lang === 'as' ? 'অসুবিধাসমূহ' : 'Cons'}
                </h4>
                <ul className="space-y-2 text-sm text-text-soft">
                  <li className="flex items-start gap-2">✗ Premium enterprise configurations apply</li>
                  <li className="flex items-start gap-2">✗ Local rate limits apply under massive traffic spikes</li>
                </ul>
              </div>
            </div>

            {/* Tags Chip Footer Tray List Component */}
            <div className="flex flex-wrap gap-1.5 border-t border-gray-100 mt-6 pt-6">
              {tool.tags?.map(tag => (
                <span key={tag} className="text-[11px] px-3 py-1 bg-gray-50 text-text-soft border border-gray-100 rounded-md font-medium">
                  #{tag}
                </span>
              ))}
            </div>

          </div>

          {/* ── COPPIABLE PROMPTS BLUEPRINT DISPLAY GRID ── */}
          <div className="card p-6 bg-white border border-gray-100 rounded-2xl shadow-sm space-y-4">
            <h3 className="text-xs font-bold text-text-soft tracking-wider uppercase">
              📝 {lang === 'as' ? 'প্ৰম্পট উদাহৰণসমূহ' : 'Prompt Examples'}
            </h3>
            <div className="space-y-3">
              {promptTemplates.map((promptText, idx) => {
                const isCopied = copiedIndex === idx;
                return (
                  <div key={idx} className="p-4 bg-gray-50 rounded-xl text-xs sm:text-sm flex items-center justify-between gap-4 border border-gray-100 group">
                    <span className="text-text-soft font-medium font-mono truncate">{promptText}</span>
                    <button 
                      onClick={() => handleCopyText(promptText, idx)}
                      className={`font-bold text-xs flex items-center gap-1 shrink-0 transition-colors ${
                        isCopied ? 'text-emerald-600' : 'text-primary hover:underline'
                      }`}
                    >
                      {isCopied ? <Check size={13} /> : <Copy size={13} />}
                      <span>{isCopied ? (lang === 'as' ? 'কপি হ’ল!' : 'Copied!') : (lang === 'as' ? 'কপি কৰক' : 'Copy prompt')}</span>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Video Tutorial CTA Integration Block Panel */}
          <div className="card p-6 bg-white border border-gray-100 rounded-2xl shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <span className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                <Play size={18} fill="currentColor" />
              </span>
              <div>
                <h4 className="font-heading font-bold text-sm text-text-main">🎬 {lang === 'as' ? 'টিউটৰিয়েল নিৰ্দেশিকা' : 'Video Tutorial'}</h4>
                <p className="text-xs text-text-soft mt-0.5">Learn how to build optimal systems using {tool.name} tools.</p>
              </div>
            </div>
            <Link href={`/${lang}/learnai`} className="text-xs font-bold text-primary border border-primary/20 px-4 py-2 rounded-xl hover:bg-primary/5 transition-all whitespace-nowrap">
              {lang === 'as' ? 'আটাইবোৰ টিউটৰিয়েল' : 'View all tutorials'}
            </Link>
          </div>

        </div>

        {/* RIGHT COLUMN SIDEBAR PANEL: Financial Index */}
        <div className="space-y-6">
          
          {/* Pricing Box Layout Card (Cleaned up rating data elements) */}
          <div className="card p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
            <span className="text-xs text-text-soft uppercase font-bold tracking-wider">
              {lang === 'as' ? 'মূল্য আঁচনি' : 'Pricing Model'}
            </span>
            <div className="text-2xl font-black text-text-main mt-1 font-heading">
              {tool.pricing || 'Free Selection'}
            </div>
          </div>

          {/* Alternative Quick-Links Content Block Tray */}
          <div className="card p-6 bg-white border border-gray-100 rounded-2xl shadow-sm space-y-4">
            <h4 className="text-xs font-bold text-text-soft uppercase tracking-wider">
              {lang === 'as' ? 'বিকল্প সঁজুলিসমূহ' : 'Alternatives'}
            </h4>
            <div className="space-y-3">
              {recommendations.map((alt) => {
                const altDomain = alt.website ? alt.website.replace('https://', '').replace('www.', '').split('/')[0] : '';
                return (
                  <Link 
                    key={alt.id}
                    href={`/${lang}/tools/${alt.id}`}
                    className="flex items-center justify-between p-2 rounded-xl border border-gray-50 hover:border-primary/20 transition-all group"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center overflow-hidden shrink-0">
                        <img 
                          src={`https://icons.duckduckgo.com/ip3/${altDomain}.ico`} 
                          alt="" 
                          className="w-4 h-4 object-contain"
                          onError={(e) => { e.currentTarget.style.display = 'none' }}
                        />
                      </div>
                      <div className="truncate">
                        <div className="text-xs font-bold text-text-main group-hover:text-primary transition-colors truncate">{alt.name}</div>
                        <div className="text-[10px] text-text-soft font-medium truncate">{alt.pricing}</div>
                      </div>
                    </div>
                    <span className="text-[10px] text-primary font-bold opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-2">→</span>
                  </Link>
                );
              })}
            </div>
          </div>

        </div>

      </div>

      {/* BOTTOM AREA GRID: Similar Category Recommendation Track Component Loops */}
      <div className="mt-16 border-t border-gray-100 pt-12">
        <div className="mb-8 text-center sm:text-left">
          <h2 className="text-2xl font-bold font-heading text-text-main">
            {lang === 'as' ? 'একেধৰণৰ অন্যান্য সঁজুলি' : `More ${tool.category} Tools`}
          </h2>
          <p className="text-sm text-text-soft mt-1">
            {lang === 'as' 
              ? 'একে ধৰণৰ কৰ্মপ্ৰণালী সম্পন্ন অন্যান্য বিকল্প এআই সঁজুলিসমূহ।' 
              : `Handpicked alternative variations operating across identical ${tool.category} workflows.`}
          </p>
        </div>

        {recommendations.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendations.map((recTool) => (
              <ToolCard key={recTool.id} tool={recTool} lang={lang} />
            ))}
          </div>
        ) : (
          <div className="text-sm text-text-soft italic py-4 text-center sm:text-left">
            No alternative choices in this category yet.
          </div>
        )}
      </div>

    </div>
  );
}