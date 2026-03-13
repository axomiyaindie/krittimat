import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Check, Copy, Clock, ChevronRight } from 'lucide-react'
import { useLang } from '../utils/lang.jsx'

export function CategoryCard({ cat }) {
  return (
    <Link
      to={`/ai-tools?category=${cat.id}`}
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
          {cat.name}
        </h3>
        <p className="text-xs text-text-soft mt-1 line-clamp-2">{cat.description}</p>
      </div>
      <span className="text-xs font-medium" style={{ color: cat.color }}>{cat.count}+ tools</span>
    </Link>
  )
}

function getCategoryEmoji(id) {
  const map = {
    'chat-ai': '💬', 'coding-ai': '💻', 'image-ai': '🎨', 'video-ai': '🎬',
    'audio-ai': '🎵', 'writing-ai': '✍️', 'search-ai': '🔍', 'design-ai': '🎯',
    'productivity-ai': '⚡', 'research-ai': '📚', 'automation-ai': '🤖',
    'open-source': '🔓',
  }
  return map[id] || '🛠️'
}

export function PromptCard({ prompt }) {
  const [copied, setCopied] = useState(false)
  const { t } = useLang()

  function copy() {
    navigator.clipboard.writeText(prompt.prompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="card p-5 flex flex-col gap-3">
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-heading font-semibold text-sm text-text-main leading-snug">{prompt.title}</h3>
        <span className="shrink-0 tag text-xs">{prompt.use_case}</span>
      </div>
      <pre className="text-xs text-text-soft bg-gray-50 rounded-lg p-3 whitespace-pre-wrap font-mono leading-relaxed line-clamp-4 border border-gray-100">
        {prompt.prompt}
      </pre>
      <div className="flex items-center justify-between">
        <div className="flex gap-1">
          {prompt.tags.slice(0, 2).map(tag => (
            <span key={tag} className="text-xs text-text-soft bg-gray-100 px-2 py-0.5 rounded-full">#{tag}</span>
          ))}
        </div>
        <button
          onClick={copy}
          className="flex items-center gap-1.5 text-xs font-medium text-primary hover:text-primary-dark transition-colors"
        >
          {copied ? <Check size={13} /> : <Copy size={13} />}
          {copied ? t.copied : t.copy}
        </button>
      </div>
    </div>
  )
}

export function TutorialCard({ tutorial }) {
  const { t } = useLang()
  const levelColor = { Beginner: 'text-green-600 bg-green-50', Intermediate: 'text-amber-600 bg-amber-50', Advanced: 'text-red-600 bg-red-50' }

  return (
    <Link to={`/tutorials/${tutorial.id}`} className="card p-5 flex flex-col gap-3 group">
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
        {tutorial.title}
      </h3>
      <p className="text-xs text-text-soft line-clamp-2 leading-relaxed">{tutorial.description}</p>
      <div className="flex flex-wrap gap-1 mt-auto">
        {tutorial.tools.slice(0, 3).map(tool => (
          <span key={tool} className="text-xs bg-primary/8 text-primary px-2 py-0.5 rounded-full">{tool}</span>
        ))}
      </div>
    </Link>
  )
}
