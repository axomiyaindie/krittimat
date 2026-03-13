import { Link } from 'react-router-dom'
import { ExternalLink } from 'lucide-react'
const categoryColors = {
  'Chat AI': '#0078D4',
  'Coding AI': '#005A9E',
  'Image AI': '#8764B8',
  'Video AI': '#D83B01',
  'Audio AI': '#107C10',
  'Writing AI': '#C239B3',
  'Search AI': '#FFB900',
  'Design AI': '#E81123',
  'Productivity AI': '#00B4D8',
  'Research AI': '#2D7D9A',
  'Automation AI': '#7A7574',
  'Open Source AI': '#24292F',
  'No-Code AI': '#E65100',
  'API / Developer': '#1976D2',
  'Business AI': '#5C6BC0',
}

export default function ToolCard({ tool }) {
  const color = categoryColors[tool.category] || '#0078D4'
  return (
    <Link
      to={`/ai-tools/${tool.id}`}
      className="tool-card card p-5 flex flex-col gap-3 group cursor-pointer"
    >
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="font-heading font-semibold text-base text-text-main group-hover:text-primary transition-colors leading-tight">
            {tool.name}
          </h3>
          <p className="text-xs text-text-soft mt-0.5">{tool.company}</p>
        </div>
        <span
          className="shrink-0 text-xs font-medium px-2.5 py-1 rounded-full"
          style={{ background: color + '15', color }}
        >
          {tool.category}
        </span>
      </div>

      <p className="text-sm text-text-soft line-clamp-2 leading-relaxed">{tool.description}</p>

      <div className="flex items-center justify-between mt-auto pt-1 border-t border-gray-50">
        
        <span className="text-xs text-text-soft">{tool.pricing}</span>
      </div>

    </Link>
  )
}
