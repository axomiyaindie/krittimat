import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, BookOpen, Zap, Users, GraduationCap, Briefcase, Code, Palette } from 'lucide-react'
import SEOHead from '../components/SEOHead'
import SVGHeading from '../components/SVGHeading'
import SearchBar from '../components/SearchBar'
import ToolCard from '../components/ToolCard'
import { CategoryCard, PromptCard, TutorialCard } from '../components/Cards'
import { useLang } from '../utils/lang.jsx'
import tools from '../data/tools.json'
import categories from '../data/categories.json'
import prompts from '../data/prompts.json'
import tutorials from '../data/tutorials.json'
import { useState } from 'react'

const stats = [
  { label: 'AI Tools', value: '100+' },
  { label: 'Prompts', value: '50+' },
  { label: 'Tutorials', value: '20+' },
  { label: 'Languages', value: '2' },
]

const userTypes = [
  { icon: GraduationCap, label: 'Students', label_as: 'ছাত্ৰ-ছাত্ৰী', color: '#0078D4', desc: 'AI tools for studying, essays, research', href: '/learn-ai/ai-for-students' },
  { icon: Code, label: 'Developers', label_as: 'ডেভেলপাৰ', color: '#005A9E', desc: 'Coding assistants and dev tools', href: '/ai-tools?category=coding-ai' },
  { icon: Palette, label: 'Creators', label_as: 'সৃষ্টিশীল', color: '#8764B8', desc: 'Image, video, music AI tools', href: '/ai-tools?category=image-ai' },
  { icon: Briefcase, label: 'Business', label_as: 'ব্যৱসায়', color: '#D83B01', desc: 'Productivity and automation AI', href: '/ai-tools?category=productivity-ai' },
]

const learnTopics = [
  { title: 'What is AI?', title_as: 'AI কি?', href: '/learn-ai/what-is-ai', emoji: '🤖', desc: 'Understand artificial intelligence basics' },
  { title: 'What is an LLM?', title_as: 'LLM কি?', href: '/learn-ai/what-is-llm', emoji: '🧠', desc: 'Large language models explained simply' },
  { title: 'Prompt Engineering', title_as: 'প্ৰম্পট ইঞ্জিনিয়াৰিং', href: '/learn-ai/prompt-engineering', emoji: '✨', desc: 'Master the art of writing AI prompts' },
  { title: 'AI for Students', title_as: 'ছাত্ৰৰ বাবে AI', href: '/learn-ai/ai-for-students', emoji: '📚', desc: 'How students can use AI effectively' },
]

export default function Home() {
  const { t, lang } = useLang()
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const trendingTools = tools.filter(t => t.trending).slice(0, 6)
  const featuredTools = tools.filter(t => t.featured).slice(0, 8)
  const topCategories = categories.slice(0, 8)
  const featuredPrompts = prompts.slice(0, 4)
  const topTutorials = tutorials.slice(0, 3)

  return (
    <>
      <SEOHead
        title="Krittimat – AI Learning Hub | Discover AI Tools & Tutorials"
        description="Krittimat is your premier AI learning hub. Discover 100+ AI tools, master prompts, and learn AI concepts in English & Assamese."
        schema={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Krittimat',
          url: 'https://krittimat.netlify.app',
          description: 'AI Learning Hub for English and Assamese speakers',
          potentialAction: { '@type': 'SearchAction', target: 'https://krittimat.netlify.app/ai-tools?q={search_term_string}', 'query-input': 'required name=search_term_string' }
        }}
      />

      {/* ── HERO ── */}
      <section className="hero-mesh pt-16 pb-20 px-4 text-center overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-medium font-heading px-4 py-2 rounded-full mb-6 border border-primary/20">
            <Sparkles size={13} />
            Now in English & Assamese • অসমীয়াত উপলব্ধ
          </div>

          <div className="flex justify-center mb-4">
            <SVGHeading text="Krittimat" size={72} />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-text-main leading-tight mb-5">
            {t.heroTitle}
          </h1>
          <p className="text-lg text-text-soft max-w-2xl mx-auto mb-8 leading-relaxed">
            {t.heroSub}
          </p>

          {/* Search */}
          <div className="max-w-2xl mx-auto mb-10">
            <SearchBar large />
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
            <Link to="/ai-tools" className="btn-primary">
              {t.exploreTools} <ArrowRight size={16} />
            </Link>
            <Link to="/learn-ai" className="btn-outline">
              <BookOpen size={16} /> {t.learnFree}
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {stats.map(s => (
              <div key={s.label} className="bg-white/80 backdrop-blur border border-gray-100 rounded-xl p-4 text-center shadow-sm">
                <div className="text-2xl font-bold font-heading gradient-text">{s.value}</div>
                <div className="text-xs text-text-soft mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATEGORIES ── */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="section-title">{t.categories}</h2>
          <Link to="/ai-tools" className="text-sm text-primary font-medium font-heading hover:underline flex items-center gap-1">
            {t.viewAll} <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {topCategories.map(cat => (
            <CategoryCard key={cat.id} cat={cat} />
          ))}
          <Link to="/ai-tools" className="card p-5 flex flex-col items-center justify-center gap-2 text-center hover:scale-[1.02] transition-transform border-dashed">
            <div className="w-11 h-11 rounded-xl bg-gray-50 flex items-center justify-center text-xl">+</div>
            <span className="text-xs font-medium text-text-soft">All Categories</span>
          </Link>
        </div>
      </section>

      {/* ── TRENDING ── */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg">🔥</span>
                <h2 className="section-title">{t.trendingTools}</h2>
              </div>
              <p className="text-sm text-text-soft">What's hot right now in the AI world</p>
            </div>
            <Link to="/ai-tools" className="text-sm text-primary font-medium font-heading hover:underline flex items-center gap-1">
              {t.viewAll} <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {trendingTools.map(tool => <ToolCard key={tool.id} tool={tool} />)}
          </div>
        </div>
      </section>

      {/* ── FEATURED TOOLS ── */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Sparkles size={18} className="text-primary" />
              <h2 className="section-title">{t.popularTools}</h2>
            </div>
            <p className="text-sm text-text-soft">Editor's picks — the best AI tools you need to know</p>
          </div>
          <Link to="/ai-tools" className="text-sm text-primary font-medium font-heading hover:underline flex items-center gap-1">
            {t.viewAll} <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredTools.map(tool => <ToolCard key={tool.id} tool={tool} />)}
        </div>
      </section>

      {/* ── LEARN AI ── */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <BookOpen size={18} className="text-primary" />
                <h2 className="section-title">{t.learnAI}</h2>
              </div>
              <p className="text-sm text-text-soft">Free AI guides for beginners, in simple language</p>
            </div>
            <Link to="/learn-ai" className="text-sm text-primary font-medium font-heading hover:underline flex items-center gap-1">
              {t.viewAll} <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {learnTopics.map(topic => (
              <Link key={topic.href} to={topic.href} className="card p-6 flex flex-col gap-3 hover:scale-[1.02] transition-transform group">
                <div className="text-4xl">{topic.emoji}</div>
                <div>
                  <h3 className="font-heading font-semibold text-sm text-text-main group-hover:text-primary transition-colors">
                    {lang === 'as' ? topic.title_as : topic.title}
                  </h3>
                  <p className="text-xs text-text-soft mt-1">{topic.desc}</p>
                </div>
                <span className="text-xs text-primary font-medium flex items-center gap-1 mt-auto">
                  {t.readMore} <ArrowRight size={12} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROMPTS ── */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Zap size={18} className="text-primary" />
              <h2 className="section-title">{t.promptLibrary}</h2>
            </div>
            <p className="text-sm text-text-soft">Copy-ready prompts for ChatGPT, Claude & more</p>
          </div>
          <Link to="/prompts" className="text-sm text-primary font-medium font-heading hover:underline flex items-center gap-1">
            {t.viewAll} <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredPrompts.map(p => <PromptCard key={p.id} prompt={p} />)}
        </div>

        {/* Prompt categories */}
        <div className="flex flex-wrap gap-3 mt-6">
          {[
            ['ChatGPT Prompts', '/prompts/chatgpt-prompts'],
            ['Coding Prompts', '/prompts/coding-prompts'],
            ['Student Prompts', '/prompts/student-prompts'],
            ['Business Prompts', '/prompts/business-prompts'],
          ].map(([label, href]) => (
            <Link key={href} to={href} className="btn-outline text-xs py-2">
              {label} <ArrowRight size={12} />
            </Link>
          ))}
        </div>
      </section>

      {/* ── TUTORIALS ── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xl">🎬</span>
                <h2 className="section-title">{t.latestTutorials}</h2>
              </div>
              <p className="text-sm text-text-soft">Step-by-step guides to master AI tools</p>
            </div>
            <Link to="/tutorials" className="text-sm text-primary font-medium font-heading hover:underline flex items-center gap-1">
              {t.viewAll} <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {topTutorials.map(tut => <TutorialCard key={tut.id} tutorial={tut} />)}
          </div>
        </div>
      </section>

      {/* ── AI FOR DIFFERENT USERS ── */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Users size={18} className="text-primary" />
            <h2 className="section-title">AI for Everyone</h2>
          </div>
          <p className="text-sm text-text-soft">Find the best AI tools for your needs</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {userTypes.map(u => (
            <Link key={u.label} to={u.href} className="card p-6 flex flex-col items-center gap-3 text-center hover:scale-[1.02] transition-transform group">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: u.color + '15' }}>
                <u.icon size={28} style={{ color: u.color }} />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-sm text-text-main group-hover:text-primary transition-colors">
                  {lang === 'as' ? u.label_as : u.label}
                </h3>
                <p className="text-xs text-text-soft mt-1">{u.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-10 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 right-4 w-40 h-40 rounded-full border-4 border-white" />
              <div className="absolute -bottom-8 -left-8 w-56 h-56 rounded-full border-4 border-white" />
            </div>
            <div className="relative z-10">
              <div className="text-4xl mb-4">📬</div>
              <h2 className="text-2xl font-bold font-heading mb-3">{t.newsletter}</h2>
              <p className="text-blue-100 text-sm mb-6 leading-relaxed">{t.newsletterSub}</p>
              {subscribed ? (
                <div className="bg-white/20 rounded-xl px-6 py-4 font-medium">
                  🎉 You're subscribed! Welcome to the Krittimat community.
                </div>
              ) : (
                <form onSubmit={e => { e.preventDefault(); setSubscribed(true) }} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder={t.emailPlaceholder}
                    required
                    className="flex-1 px-4 py-3 rounded-xl text-text-main text-sm outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <button type="submit" className="bg-white text-primary font-heading font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors text-sm whitespace-nowrap">
                    {t.subscribe}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
