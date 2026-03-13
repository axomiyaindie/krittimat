import { useState, useMemo } from 'react'
import { Search, Filter, X, SlidersHorizontal } from 'lucide-react'
import SEOHead from '../components/SEOHead'
import ToolCard from '../components/ToolCard'
import { useLang } from '../utils/lang.jsx'
import tools from '../data/tools.json'
import categories from '../data/categories.json'
import { useSearchParams } from 'react-router-dom'
import Fuse from 'fuse.js'

const allCategories = [...new Set(tools.map(t => t.category))]
const fuse = new Fuse(tools, { keys: ['name', 'description', 'tags', 'category', 'company'], threshold: 0.3 })

export default function Tools() {
  const [searchParams] = useSearchParams()
  const [query, setQuery] = useState(searchParams.get('q') || '')
  const [activeCategory, setActiveCategory] = useState(searchParams.get('category') || 'all')
  const [pricingFilter, setPricingFilter] = useState('all')
  const [showFilters, setShowFilters] = useState(false)
  const { t } = useLang()

  const filtered = useMemo(() => {
    let result = query ? fuse.search(query).map(r => r.item) : tools
    if (activeCategory !== 'all') {
      result = result.filter(tool =>
        tool.category.toLowerCase().replace(/ /g, '-') === activeCategory ||
        tool.category === activeCategory
      )
    }
    if (pricingFilter === 'free') result = result.filter(t => t.pricing.toLowerCase().includes('free'))
    if (pricingFilter === 'paid') result = result.filter(t => !t.pricing.toLowerCase().startsWith('free'))
    return result
  }, [query, activeCategory, pricingFilter])

  return (
    <>
      <SEOHead
        title="AI Tools Directory — 100+ Best AI Tools"
        description="Browse the most comprehensive AI tools directory. Find the best AI tools for chat, coding, image generation, video, audio, and more."
        url="https://krittimat.netlify.app/ai-tools"
      />

      {/* Page header */}
      <div className="bg-white border-b border-gray-100 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-2 flex items-center gap-2">
            <span className="tag">Directory</span>
            <span className="text-xs text-text-soft">{tools.length} tools</span>
          </div>
          <h1 className="text-3xl font-bold font-heading text-text-main mb-3">AI Tools Directory</h1>
          <p className="text-text-soft max-w-xl">The most comprehensive collection of AI tools. Find the perfect AI tool for any task.</p>

          {/* Search bar */}
          <div className="flex items-center gap-3 mt-6 max-w-xl border-2 border-gray-200 focus-within:border-primary rounded-xl px-4 py-3 bg-white transition-colors">
            <Search size={18} className="text-gray-400 shrink-0" />
            <input
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search tools..."
              className="flex-1 outline-none text-sm font-body text-text-main placeholder:text-gray-400"
            />
            {query && <button onClick={() => setQuery('')}><X size={14} className="text-gray-400" /></button>}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Filters row */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          {/* Category pills - scrollable */}
          <div className="flex gap-2 overflow-x-auto pb-1 flex-1">
            <button
              onClick={() => setActiveCategory('all')}
              className={`shrink-0 px-4 py-2 rounded-full text-xs font-medium font-heading transition-colors ${activeCategory === 'all' ? 'bg-primary text-white' : 'bg-gray-100 text-text-soft hover:bg-gray-200'}`}
            >
              All
            </button>
            {allCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 px-4 py-2 rounded-full text-xs font-medium font-heading transition-colors ${activeCategory === cat ? 'bg-primary text-white' : 'bg-gray-100 text-text-soft hover:bg-gray-200'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Pricing filter */}
          <div className="flex gap-2 shrink-0">
            {['all', 'free', 'paid'].map(p => (
              <button
                key={p}
                onClick={() => setPricingFilter(p)}
                className={`px-3 py-2 rounded-lg text-xs font-medium font-heading transition-colors capitalize ${pricingFilter === p ? 'bg-primary/10 text-primary border border-primary/20' : 'border border-gray-200 text-text-soft hover:border-gray-300'}`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <p className="text-sm text-text-soft mb-6">
          Showing <span className="font-semibold text-text-main">{filtered.length}</span> tools
          {query && <> for "<span className="text-primary">{query}</span>"</>}
        </p>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map(tool => <ToolCard key={tool.id} tool={tool} />)}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="font-heading font-semibold text-lg text-text-main mb-2">No tools found</h3>
            <p className="text-text-soft text-sm">Try a different search term or category</p>
            <button onClick={() => { setQuery(''); setActiveCategory('all') }} className="btn-primary mt-4">
              Clear filters
            </button>
          </div>
        )}
      </div>
    </>
  )
}
