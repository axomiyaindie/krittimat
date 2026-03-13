import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SEOHead from '../components/SEOHead'

const posts = [
  { id: 'best-ai-tools-2025', title: 'Best AI Tools of 2025 — The Ultimate List', emoji: '🏆', date: 'Jan 2025', readTime: '12 min', category: 'Lists', desc: 'We tested 100+ AI tools and picked the very best for every use case.' },
  { id: 'chatgpt-vs-claude', title: 'ChatGPT vs Claude — Which is Better in 2025?', emoji: '⚔️', date: 'Jan 2025', readTime: '8 min', category: 'Comparison', desc: 'A detailed side-by-side comparison of the two best AI chatbots.' },
  { id: 'ai-for-students-guide', title: 'The Complete AI Guide for Students', emoji: '📚', date: 'Dec 2024', readTime: '15 min', category: 'Guide', desc: 'Everything a student needs to know about using AI for studies, essays, and research.' },
  { id: 'prompt-engineering-tips', title: '25 Prompt Engineering Tips That Actually Work', emoji: '✨', date: 'Dec 2024', readTime: '10 min', category: 'Tips', desc: 'Proven prompt patterns to 10x your AI outputs starting today.' },
  { id: 'ai-image-generators', title: 'Best AI Image Generators: Midjourney vs DALL-E vs Flux', emoji: '🎨', date: 'Nov 2024', readTime: '9 min', category: 'Comparison', desc: 'Which AI image generator should you use in 2025? We compared them all.' },
  { id: 'free-ai-tools', title: '20 Completely Free AI Tools You Should Start Using', emoji: '🆓', date: 'Nov 2024', readTime: '7 min', category: 'Lists', desc: 'The best AI tools that are 100% free with no credit card required.' },
]

export function Blog() {
  return (
    <>
      <SEOHead title="AI Blog — News, Guides & Comparisons" description="AI tool reviews, comparisons, guides, and tips. Stay updated on the latest AI tools and learn how to use them effectively." url="https://krittimat.netlify.app/blog" />

      <div className="bg-white border-b border-gray-100 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <span className="tag mb-3 inline-block">Blog</span>
          <h1 className="text-3xl font-bold font-heading text-text-main mb-3">AI Blog</h1>
          <p className="text-text-soft max-w-xl">Guides, comparisons, and news about AI tools. Updated regularly.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map(post => (
            <Link key={post.id} to={`/blog/${post.id}`} className="card p-6 flex flex-col gap-3 hover:scale-[1.01] transition-transform group">
              <div className="text-4xl">{post.emoji}</div>
              <div className="flex items-center gap-2">
                <span className="tag text-xs">{post.category}</span>
                <span className="text-xs text-text-soft">{post.date} · {post.readTime}</span>
              </div>
              <h2 className="font-heading font-bold text-text-main group-hover:text-primary transition-colors leading-snug">{post.title}</h2>
              <p className="text-sm text-text-soft line-clamp-2 leading-relaxed">{post.desc}</p>
              <span className="mt-auto flex items-center gap-1 text-sm text-primary font-medium">
                Read article <ArrowRight size={13} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
