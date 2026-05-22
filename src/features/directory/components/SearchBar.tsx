"use client"; // 💡 Kept at line 1 so Next.js handles browser state safely

import { useState, useEffect, useRef } from 'react'
import { Search, Wrench, BookOpen, FileText, ArrowRight } from 'lucide-react'
import Link from 'next/link' // 🔄 Native Next.js Link component
import { usePathname } from 'next/navigation'
import { searchAll } from '@/lib/search' // 🔄 Direct global path alias
import type { SearchItem } from '@/types'

const typeIcons = { tool: Wrench, tutorial: BookOpen, guide: BookOpen, prompt: FileText }
const typeColors = { tool: 'text-primary', tutorial: 'text-green-600', guide: 'text-green-600', prompt: 'text-purple-600' }

interface SearchBarProps {
  onClose?: () => void
  large?: boolean
}

export default function SearchBar({ onClose, large = false }: SearchBarProps) {
  const [q, setQ] = useState('')
  const [results, setResults] = useState<SearchItem[]>([])
  const ref = useRef<HTMLDivElement | null>(null)
  const pathname = usePathname()
  const lang = pathname?.split('/')[1] === 'as' ? 'as' : 'en'

  useEffect(() => {
    setResults(searchAll(q, lang))
  }, [q, lang])

  return (
    <div className="relative w-full max-w-2xl mx-auto" ref={ref}>
      <div className={`flex items-center gap-3 border-2 rounded-xl bg-white transition-colors ${
        q ? 'border-primary' : 'border-gray-200 focus-within:border-primary'
      } ${large ? 'px-5 py-4' : 'px-4 py-2.5'}`}>
        <Search size={large ? 22 : 18} className="text-gray-400 shrink-0" />
        <input
          autoFocus={large}
          value={q}
          onChange={e => setQ(e.target.value)}
          placeholder="Search AI tools, prompts, tutorials..."
          className={`flex-1 outline-none bg-transparent font-body text-text-main placeholder:text-gray-400 ${
            large ? 'text-lg' : 'text-sm'
          }`}
        />
        {q && (
          <button onClick={() => setQ('')} className="text-gray-400 hover:text-gray-600 text-xs">✕</button>
        )}
      </div>

      {results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl border border-gray-100 shadow-xl z-50 overflow-hidden">
          {results.map((r) => {
            const Icon = typeIcons[r.type] || Search
            return (
              <Link
                key={`${r.type}-${r.id}`}
                href={r.href} // 🔄 Fixed: Changed 'to' attribute to Next.js 'href'
                onClick={() => { setQ(''); onClose?.() }}
                className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors group"
              >
                <Icon size={16} className={typeColors[r.type]} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium font-heading text-text-main truncate">
                    {r.name || r.title}
                  </p>
                  <p className="text-xs text-text-soft truncate">{r.description}</p>
                </div>
                <span className="text-xs text-gray-400 capitalize bg-gray-100 px-2 py-0.5 rounded-full">{r.type}</span>
                <ArrowRight size={14} className="text-gray-400 group-hover:text-primary transition-colors" />
              </Link>
            )
          })}
          <Link
            href={`/${lang}/search?q=${encodeURIComponent(q)}`}
            onClick={() => { onClose?.() }}
            className="flex items-center justify-center gap-2 px-4 py-3 bg-primary/5 text-primary text-sm font-medium hover:bg-primary/10 transition-colors"
          >
            See all results for "{q}" <ArrowRight size={14} />
          </Link>
        </div>
      )}
    </div>
  )
}
