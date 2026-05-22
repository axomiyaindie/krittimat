"use client"; // Required for clipboard actions and state adjustments inside PromptCard

import { useState } from 'react'
import Link from 'next/link'
import { Check, Copy, Clock } from 'lucide-react'
import type { Category, Prompt, Tutorial } from '@/types'

interface CategoryCardProps {
  cat: Category
  lang: string
}

interface PromptCardProps {
  prompt: Prompt
  lang: string
  dict: any
}

interface TutorialCardProps {
  tutorial: Tutorial
  lang: string
}

// ── CATEGORY CARD COMPONENT ──
export function CategoryCard({ cat, lang }: CategoryCardProps) {
  return (
    <Link
      href={`/${lang}/tools?category=${cat.id}`} // Dynamically localized route
      className="card p-5 flex flex-col gap-3 hover:scale-[1.02] transition-transform duration-200 group"
    >
      <div className="w-11 h-11 rounded-xl flex items-center justify-center text-2xl"
        style={{ background: cat.color + '18' }}>
        <span style={{ color: cat.color }}>
          {getCategoryEmoji(cat.id)}
        </span>
      </div>
      <div>
        <h3 className="font-heading font-semibold text-sm text-text-main group-hover:text-primary transition-colors">
          {lang === 'as' ? cat.name_as || cat.name : cat.name}
        </h3>
        <p className="text-xs text-text-soft mt-1 line-clamp-2">
          {lang === 'as' ? cat.description_as || cat.description : cat.description}
        </p>
      </div>
      <span className="text-xs font-medium" style={{ color: cat.color }}>{cat.count}+ tools</span>
    </Link>
  )
}

function getCategoryEmoji(id: string) {
  const map = {
    'chat-ai': '💬', 'coding-ai': '💻', 'image-ai': '🎨', 'video-ai': '🎬',
    'audio-ai': '🎵', 'writing-ai': '✍️', 'search-ai': '🔍', 'design-ai': '🎯',
    'productivity-ai': '⚡', 'research-ai': '📚', 'automation-ai': '🤖',
    'open-source': '🔓',
  }
  return map[id] || '🛠️'
}

// ── PROMPT CARD COMPONENT ──
export function PromptCard({ prompt, lang, dict }: PromptCardProps) {
  const [copied, setCopied] = useState(false)

  function copy() {
    navigator.clipboard.writeText(prompt.prompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="card p-5 flex flex-col gap-3">
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-heading font-semibold text-sm text-text-main leading-snug">
          {lang === 'as' ? prompt.title_as || prompt.title : prompt.title}
        </h3>
        <span className="shrink-0 tag text-xs">{prompt.use_case}</span>
      </div>
      <pre className="text-xs text-text-soft bg-gray-50 rounded-lg p-3 whitespace-pre-wrap font-mono leading-relaxed line-clamp-4 border border-gray-100">
        {prompt.prompt}
      </pre>
      <div className="flex items-center justify-between">
        <div className="flex gap-1">
          {prompt.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="text-xs text-text-soft bg-gray-100 px-2 py-0.5 rounded-full">#{tag}</span>
          ))}
        </div>
        <button
          onClick={copy}
          className="flex items-center gap-1.5 text-xs font-medium text-primary hover:text-primary-dark transition-colors"
        >
          {copied ? <Check size={13} /> : <Copy size={13} />}
          {copied ? (dict?.home?.copied || "Copied") : (dict?.home?.copy || "Copy")}
        </button>
      </div>
    </div>
  )
}

// ── TUTORIAL CARD COMPONENT ──
export function TutorialCard({ tutorial, lang }: TutorialCardProps) {
  const levelColor = { Beginner: 'text-green-600 bg-green-50', Intermediate: 'text-amber-600 bg-amber-50', Advanced: 'text-red-600 bg-red-50' }

  return (
    <Link 
      href={`/${lang}/learnai/${tutorial.id}`} 
      className="card p-5 flex flex-col gap-3 group"
    >
      <div className="text-4xl">{tutorial.thumbnail}</div>
      <div className="flex items-center gap-2">
        <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${levelColor[tutorial.level]}`}>
          {tutorial.level}
        </span>
        <span className="flex items-center gap-1 text-xs text-text-soft">
          <Clock size={12} />{tutorial.duration}
        </span>
      </div>
      <h3 className="font-heading font-semibold text-sm text-text-main group-hover:text-primary transition-colors leading-snug">
        {lang === 'as' ? tutorial.title_as || tutorial.title : tutorial.title}
      </h3>
      <p className="text-xs text-text-soft line-clamp-2 leading-relaxed">
        {lang === 'as' ? tutorial.description_as || tutorial.description : tutorial.description}
      </p>
      <div className="flex flex-wrap gap-1 mt-auto">
        {tutorial.tools.slice(0, 3).map((tool) => (
          <span key={tool} className="text-xs bg-primary/8 text-primary px-2 py-0.5 rounded-full">{tool}</span>
        ))}
      </div>
    </Link>
  )
}
