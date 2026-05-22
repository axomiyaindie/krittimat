// src/features/directory/components/PromptDetailsView.tsx
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Copy, Check } from 'lucide-react';
import type { Prompt } from '@/types';

// Safely extend the global type locally without making required fields optional
interface ExtendedPrompt extends Prompt {
  text?: string;
  text_as?: string;
  prompt_as?: string;
  description_as?: string;
  title_as?: string;
}

interface PromptDetailsViewProps {
  prompt: ExtendedPrompt;
  recommendations: ExtendedPrompt[];
  lang: string;
}

export default function PromptDetailsView({ prompt, recommendations, lang }: PromptDetailsViewProps) {
  const [copied, setCopied] = useState(false);

  // Since 'prompt' is required and guaranteed to exist, we use it as the primary fallback
  const finalPromptText = lang === 'as' 
    ? prompt.prompt_as || prompt.text_as || prompt.prompt 
    : prompt.text || prompt.prompt;

  const handleCopy = () => {
    navigator.clipboard.writeText(finalPromptText || '');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 min-h-screen text-text-main">
      
      {/* Back Link Row */}
      <div className="mb-8">
        <Link 
          href={`/${lang}/prompts`} 
          className="inline-flex items-center gap-1.5 text-sm text-text-soft hover:text-primary transition-colors group font-medium"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
          {lang === 'as' ? 'প্ৰম্পট লাইব্ৰেৰীলে ঘূৰি যাওক' : 'Back to Prompt Library'}
        </Link>
      </div>

      {/* Main Container */}
      <div className="card p-6 sm:p-8 bg-white border border-gray-100 rounded-2xl shadow-sm space-y-6">
        <div>
          <span className="bg-primary/10 text-primary text-xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">
            {prompt.category?.replace('-', ' ')}
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold font-heading text-text-main leading-tight">
            {prompt.title || (lang === 'as' ? 'অপ্টিমাইজড প্ৰম্পট' : 'Optimized Prompt Blueprint')}
          </h1>
        </div>

        {/* Description Segment */}
        <div className="py-2 border-t border-gray-50 pt-4">
          <h3 className="text-xs font-bold text-text-soft uppercase tracking-wider mb-2">
            {lang === 'as' ? 'বিৱৰণ' : 'Description'}
          </h3>
          <p className="text-base text-text-soft leading-relaxed">
            {lang === 'as' ? prompt.description_as || prompt.description : prompt.description}
          </p>
        </div>

        {/* Action Copy Interactive Block */}
        <div className="p-5 bg-gray-50 border border-gray-100 rounded-xl relative group transition-all">
          <div className="flex justify-between items-center mb-3">
            <span className="text-[10px] font-bold text-text-soft uppercase tracking-widest font-mono">
              🚀 {lang === 'as' ? ' সাজু থকা প্ৰম্পট' : 'READY TO COPY'}
            </span>
            <button
              onClick={handleCopy}
              className={`text-xs font-bold flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-all ${
                copied 
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-200' 
                  : 'bg-white text-primary border-gray-200 hover:border-primary/30 shadow-sm active:scale-[0.98]'
              }`}
            >
              {copied ? <Check size={13} /> : <Copy size={13} />}
              <span>{copied ? (lang === 'as' ? 'কপি হ’ল!' : 'Copied!') : (lang === 'as' ? 'কপি কৰক' : 'Copy prompt')}</span>
            </button>
          </div>
          <p className="text-sm font-medium font-mono text-text-main leading-relaxed select-all whitespace-pre-wrap break-words pt-1">
            {finalPromptText}
          </p>
        </div>
      </div>

      {/* Alternatives List */}
      {recommendations.length > 0 && (
        <div className="mt-16 border-t border-gray-100 pt-12">
          <h2 className="text-xl font-bold font-heading text-text-main mb-6">
            {lang === 'as' ? 'প্ৰম্পট পৰামৰ্শিত অন্যান্য প্ৰম্পটসমূহ' : 'Similar Prompts You Might Need'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {recommendations.map((rec) => (
              <Link 
                href={`/${lang}/prompts/${rec.id}`} 
                key={rec.id} 
                className="group block p-5 border border-gray-100 rounded-xl hover:border-primary/40 bg-white shadow-sm transition-all hover:-translate-y-0.5"
              >
                <h3 className="font-bold text-sm text-text-main group-hover:text-primary transition-colors truncate mb-1">
                  {rec.title || `Prompt #${rec.id}`}
                </h3>
                <p className="text-xs text-text-soft line-clamp-2 leading-relaxed">
                  {lang === 'as' ? rec.description_as || rec.description : rec.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}