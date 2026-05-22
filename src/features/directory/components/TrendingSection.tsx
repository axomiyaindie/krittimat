import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import ToolCard from '../components/ToolCard'
import type { Tool } from '@/types'

interface TrendingSectionProps {
  lang: string
  dict: any
  tools: Tool[]
}

export default function TrendingSection({ lang, dict, tools }: TrendingSectionProps) {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-lg">🔥</span>
              <h2 className="section-title">{dict.home?.trendingTools || "Trending Tools"}</h2>
            </div>
            <p className="text-sm text-text-soft">What's hot right now in the AI world</p>
          </div>
          <Link href={`/${lang}/tools`} className="text-sm text-primary font-medium font-heading hover:underline flex items-center gap-1">
            {dict.home?.viewAll || "View All"} <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tools.map(tool => <ToolCard key={tool.id} tool={tool} lang={lang} />)}
        </div>
      </div>
    </section>
  )
}
