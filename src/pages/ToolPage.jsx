import { useParams, Link } from 'react-router-dom'
import { ExternalLink, Star, ArrowLeft, Copy, Check, Zap } from 'lucide-react'
import { useState } from 'react'
import SEOHead from '../components/SEOHead'
import ToolCard from '../components/ToolCard'
import tools from '../data/tools.json'

const toolExtras = {
  chatgpt: {
    features: ['GPT-4o multimodal AI', 'Web browsing & search', 'Image generation (DALL-E)', 'Code interpreter', 'Custom GPTs', 'Plugins ecosystem'],
    prompts: [
      'Act as an expert [ROLE] and help me with [TASK]',
      'Explain [CONCEPT] in simple terms with 3 real-world examples',
      'Write a [FORMAT] about [TOPIC] in [TONE] tone',
    ],
    alternatives: ['claude', 'gemini', 'perplexity'],
    tutorial: 'How to use ChatGPT effectively for students and professionals',
    pros: ['Best ecosystem', 'Most plugins', 'Multimodal'],
    cons: ['Expensive Plus plan', 'Rate limits on free tier'],
  },
  claude: {
    features: ['200K token context window', 'Superior reasoning & analysis', 'Code generation & review', 'Document summarization', 'Nuanced writing', 'Safety-focused design'],
    prompts: [
      'Analyze this document and identify the 5 key insights: [TEXT]',
      'Review my code for bugs, security issues, and improvements: [CODE]',
      'Write a comprehensive report on [TOPIC] with citations',
    ],
    alternatives: ['chatgpt', 'gemini', 'perplexity'],
    tutorial: 'How to use Claude for research and document analysis',
    pros: ['Longest context', 'Best for long docs', 'Very accurate'],
    cons: ['No image generation', 'Limited plugins'],
  },
}

const defaultExtras = {
  features: ['AI-powered capabilities', 'Easy to use interface', 'Regular updates', 'Cross-platform support'],
  prompts: ['Use this tool to help with [YOUR TASK]', 'Ask it to explain [CONCEPT] in detail'],
  alternatives: [],
  pros: ['Powerful AI', 'Easy to use'],
  cons: ['May have usage limits'],
}

export default function ToolPage() {
  const { id } = useParams()
  const tool = tools.find(t => t.id === id)
  const [copied, setCopied] = useState(null)

  if (!tool) return (
    <div className="max-w-2xl mx-auto px-4 py-24 text-center">
      <div className="text-6xl mb-6">🔍</div>
      <h1 className="text-2xl font-bold font-heading text-text-main mb-3">Tool not found</h1>
      <p className="text-text-soft mb-6">The AI tool you're looking for doesn't exist yet.</p>
      <Link to="/ai-tools" className="btn-primary">Browse All Tools</Link>
    </div>
  )

  const extras = toolExtras[id] || defaultExtras
  const altTools = tools.filter(t => extras.alternatives.includes(t.id))
  const relatedTools = tools.filter(t => t.category === tool.category && t.id !== id).slice(0, 4)

  function copyPrompt(p, i) {
    navigator.clipboard.writeText(p)
    setCopied(i)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <>
      <SEOHead
        title={`${tool.name} — AI Tool Review, Features & Prompts`}
        description={`${tool.description} Learn how to use ${tool.name} with tips, prompts, and tutorials on Krittimat.`}
        url={`https://krittimat.netlify.app/ai-tools/${tool.id}`}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: tool.name,
          description: tool.description,
          applicationCategory: 'AIApplication',
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        }}
      />

      <div className="max-w-5xl mx-auto px-4 py-10">
        {/* Back */}
        <Link to="/ai-tools" className="inline-flex items-center gap-2 text-sm text-text-soft hover:text-primary transition-colors mb-8">
          <ArrowLeft size={16} /> Back to AI Tools
        </Link>

        {/* Hero card */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-start gap-6">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-4xl font-bold font-heading text-primary shrink-0 border border-primary/10">
              {tool.name[0]}
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h1 className="text-2xl font-bold font-heading text-text-main">{tool.name}</h1>
                {tool.trending && <span className="text-xs bg-orange-50 text-orange-600 px-2.5 py-1 rounded-full font-medium">🔥 Trending</span>}
                {tool.featured && <span className="text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-full font-medium">★ Featured</span>}
              </div>
              <p className="text-text-soft text-sm mb-4">{tool.company} · {tool.category}</p>
              <p className="text-text-main leading-relaxed mb-6">{tool.description}</p>

              <div className="flex flex-wrap items-center gap-4">
                <a href={tool.url} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Visit {tool.name} <ExternalLink size={14} />
                </a>
                <div className="flex items-center gap-2">
                  <Star size={16} className="text-yellow-400 fill-yellow-400" />
                  <span className="font-semibold text-text-main">{tool.rating}</span>
                  <span className="text-text-soft text-sm">/5.0</span>
                </div>
                <span className="text-sm text-text-soft border border-gray-200 rounded-lg px-3 py-1.5">{tool.pricing}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Features */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h2 className="font-heading font-bold text-lg text-text-main mb-4 flex items-center gap-2">
                <Zap size={18} className="text-primary" /> Key Features
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {extras.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs shrink-0 mt-0.5">✓</span>
                    <span className="text-sm text-text-soft leading-snug">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Prompts */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h2 className="font-heading font-bold text-lg text-text-main mb-4">
                📝 Prompt Examples
              </h2>
              <div className="space-y-3">
                {extras.prompts.map((p, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                    <p className="text-sm font-mono text-text-soft leading-relaxed">{p}</p>
                    <button
                      onClick={() => copyPrompt(p, i)}
                      className="mt-2 flex items-center gap-1.5 text-xs text-primary hover:text-primary-dark font-medium transition-colors"
                    >
                      {copied === i ? <><Check size={12} /> Copied!</> : <><Copy size={12} /> Copy prompt</>}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Tutorial */}
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl border border-primary/15 p-6">
              <h2 className="font-heading font-bold text-lg text-text-main mb-2">🎬 Tutorial</h2>
              <p className="text-sm text-text-soft mb-4">{extras.tutorial || `How to get started with ${tool.name}`}</p>
              <Link to="/tutorials" className="btn-primary text-sm">
                View all tutorials <ExternalLink size={13} />
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            {/* Pros/Cons */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-heading font-semibold text-sm text-text-main mb-4">Pros & Cons</h3>
              <div className="space-y-2 mb-4">
                {extras.pros.map((p, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-green-700">
                    <span className="text-green-500 shrink-0 mt-0.5">✓</span> {p}
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                {extras.cons.map((c, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-red-600">
                    <span className="shrink-0 mt-0.5">✗</span> {c}
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-heading font-semibold text-sm text-text-main mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {tool.tags.map(tag => (
                  <span key={tag} className="tag text-xs">#{tag}</span>
                ))}
              </div>
            </div>

            {/* Alternatives */}
            {altTools.length > 0 && (
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                <h3 className="font-heading font-semibold text-sm text-text-main mb-3">Alternatives</h3>
                <div className="space-y-2">
                  {altTools.map(alt => (
                    <Link key={alt.id} to={`/ai-tools/${alt.id}`} className="flex items-center gap-2.5 p-2.5 rounded-lg hover:bg-gray-50 transition-colors group">
                      <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">{alt.name[0]}</div>
                      <div>
                        <p className="text-xs font-medium font-heading text-text-main group-hover:text-primary transition-colors">{alt.name}</p>
                        <p className="text-xs text-text-soft">{alt.pricing}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related tools */}
        {relatedTools.length > 0 && (
          <div className="mt-10">
            <h2 className="section-title mb-6">More {tool.category} Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedTools.map(t => <ToolCard key={t.id} tool={t} />)}
            </div>
          </div>
        )}
      </div>
    </>
  )
}
