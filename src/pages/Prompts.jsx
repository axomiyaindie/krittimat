import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'
import { PromptCard } from '../components/Cards'
import { useLang } from '../utils/lang.jsx'
import prompts from '../data/prompts.json'

const categories = [
  { id: 'chatgpt-prompts', label: 'ChatGPT Prompts', emoji: '💬', desc: 'Best prompts for ChatGPT and GPT-4' },
  { id: 'coding-prompts', label: 'Coding Prompts', emoji: '💻', desc: 'AI prompts for developers' },
  { id: 'student-prompts', label: 'Student Prompts', emoji: '📚', desc: 'Study, essays, and exam prep' },
  { id: 'business-prompts', label: 'Business Prompts', emoji: '💼', desc: 'Marketing, sales, and strategy' },
]

export default function Prompts() {
  const { category } = useParams()
  const [active, setActive] = useState(category || 'all')
  const { t, lang } = useLang()

  const filtered = active === 'all' ? prompts : prompts.filter(p => p.category === active)
  const activeCat = categories.find(c => c.id === active)

  return (
    <>
      <SEOHead
        title="AI Prompt Library — Copy-Ready Prompts for ChatGPT, Claude & More"
        description="Free AI prompt library with 50+ copy-ready prompts for ChatGPT, coding, students, and business. Works with any AI chatbot."
        url={`https://krittimat.netlify.app/prompts${category ? '/' + category : ''}`}
      />

      <div className="bg-white border-b border-gray-100 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <span className="tag mb-3 inline-block">Prompt Library</span>
          <h1 className="text-3xl font-bold font-heading text-text-main mb-3">
            {activeCat ? `${activeCat.emoji} ${activeCat.label}` : 'AI Prompt Library'}
          </h1>
          <p className="text-text-soft max-w-xl">
            {activeCat ? activeCat.desc : 'Copy-ready AI prompts for ChatGPT, Claude, Gemini and any AI chatbot.'}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Category tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-8">
          <button
            onClick={() => setActive('all')}
            className={`shrink-0 px-4 py-2.5 rounded-full text-sm font-medium font-heading transition-colors ${active === 'all' ? 'bg-primary text-white' : 'bg-gray-100 text-text-soft hover:bg-gray-200'}`}
          >
            All Prompts
          </button>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`shrink-0 px-4 py-2.5 rounded-full text-sm font-medium font-heading transition-colors ${active === cat.id ? 'bg-primary text-white' : 'bg-gray-100 text-text-soft hover:bg-gray-200'}`}
            >
              {cat.emoji} {cat.label}
            </button>
          ))}
        </div>

        <p className="text-sm text-text-soft mb-6">
          <span className="font-semibold text-text-main">{filtered.length}</span> prompts available
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map(p => <PromptCard key={p.id} prompt={p} />)}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 text-center border border-primary/15">
          <h2 className="text-xl font-bold font-heading text-text-main mb-2">Want to Learn Prompt Engineering?</h2>
          <p className="text-text-soft text-sm mb-5">Master the art of writing perfect AI prompts with our free guide.</p>
          <Link to="/learn-ai/prompt-engineering" className="btn-primary">
            Learn Prompt Engineering →
          </Link>
        </div>
      </div>
    </>
  )
}
