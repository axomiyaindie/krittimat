// src/features/directory/components/ToolCard.jsx
"use client"; 

import { useState } from 'react'
import { useRouter } from 'next/navigation' // 🔄 Upgraded to useRouter for clean event tracking
import { ExternalLink } from 'lucide-react'
import type { Tool } from '@/types'

interface ToolCardProps {
  tool: Tool
  lang?: string
}

export default function ToolCard({ tool, lang = 'en' }: ToolCardProps) {
  const router = useRouter();
  const [imgError, setImgError] = useState(false);
  
  const domain = extractDomain(tool.website);
  const fallbackLetter = tool.name ? tool.name.charAt(0).toUpperCase() : '🛠️';

  // ⚡ Handles clicking the card body to transition smoothly to the details subpage
  const handleCardClick = () => {
    router.push(`/${lang}/tools/${tool.id}`);
  };

  return (
    <div 
      onClick={handleCardClick}
      className="card p-5 flex flex-col gap-4 hover:border-primary/30 hover:shadow-md transition-all group bg-white shadow-sm rounded-xl border border-gray-100 text-left cursor-pointer select-none"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex gap-3 items-center">
          
          {/* ── AUTOMATED LOGO ENGINE BLOCK ── */}
          <div className="w-12 h-12 rounded-xl border border-gray-100 bg-gray-50 flex items-center justify-center overflow-hidden shrink-0 shadow-inner relative">
            {!imgError && domain ? (
              <img 
                src={`https://icons.duckduckgo.com/ip3/${domain}.ico`}
                alt="" 
                className="w-6 h-6 object-contain tracking-normal"
                onError={() => setImgError(true)} 
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-primary/5 text-primary text-base font-bold font-heading tracking-wide">
                {fallbackLetter}
              </div>
            )}
          </div>

          <div>
            <h3 className="font-heading font-bold text-sm text-text-main group-hover:text-primary transition-colors">
              {tool.name}
            </h3>
            <span className="text-[10px] text-text-soft font-medium uppercase tracking-wider">{tool.pricing || 'Free'}</span>
          </div>
        </div>
        
        {/* Top Right Direct Website Action Trigger */}
        <a 
          href={tool.website} 
          target="_blank" 
          rel="noopener noreferrer" 
          // 🛑 CRITICAL: stopPropagation blocks the click event from bubbling up to handleCardClick!
          onClick={(e) => e.stopPropagation()}
          className="p-1.5 text-text-soft hover:text-primary rounded-lg hover:bg-gray-50 transition-colors shrink-0 z-20 relative"
        >
          <ExternalLink size={16} />
        </a>
      </div>

      {/* Localized Bilingual Summary Text Description Area */}
      <p className="text-xs text-text-soft line-clamp-2 leading-relaxed">
        {lang === 'as' ? tool.description_as || tool.description : tool.description}
      </p>

      {/* Meta Filter Badge Chips Footer Tray Row */}
      <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
        {tool.tags?.slice(0, 3).map((tag) => (
          <span key={tag} className="text-[10px] px-2 py-0.5 bg-gray-50 text-text-soft border border-gray-100 rounded-md font-medium">
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

// Helper utility to safely clean up and extract domains cleanly from URLs
function extractDomain(url: string | undefined) {
  if (!url) return '';
  try {
    const parsed = new URL(url);
    return parsed.hostname.replace('www.', '');
  } catch (e) {
    return '';
  }
}
