import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, Menu, X, Globe } from 'lucide-react'
import { useLang } from '../utils/lang.jsx'
import SearchBar from './SearchBar'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const { lang, setLang, t } = useLang()
  const loc = useLocation()

  const nav = [
    { label: t.home, href: '/' },
    { label: t.tools, href: '/ai-tools' },
    { label: t.learn, href: '/learn-ai' },
    { label: t.prompts, href: '/prompts' },
    { label: t.tutorials, href: '/tutorials' },
    { label: t.blog, href: '/blog' },
  ]

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <img
              src="https://i.postimg.cc/bvWCrjyQ/Krittimat.jpg"
              alt="Krittimat"
              className="h-8 w-8 rounded-lg object-cover"
            />
            <span className="font-heading font-bold text-xl text-text-main hidden block">Krittimat</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {nav.map(n => (
              <Link
                key={n.href}
                to={n.href}
                className={`px-3 py-2 rounded-md text-sm font-medium font-heading transition-colors ${
                  loc.pathname === n.href
                    ? 'text-primary bg-primary/8'
                    : 'text-text-soft hover:text-primary hover:bg-gray-50'
                }`}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSearchOpen(v => !v)}
              className="p-2 rounded-lg hover:bg-gray-100 text-text-soft hover:text-primary transition-colors"
              aria-label="Search"
            >
              <Search size={18} />
            </button>

            {/* Language Toggle */}
            <button
              onClick={() => setLang(lang === 'en' ? 'as' : 'en')}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 text-xs font-medium font-heading text-text-soft hover:border-primary hover:text-primary transition-colors"
            >
              <Globe size={14} />
              {lang === 'en' ? 'অসমীয়া' : 'English'}
            </button>

            <Link to="/ai-tools" className="hidden sm:inline-flex btn-primary text-xs py-2 px-4">
              Explore AI
            </Link>

            {/* Mobile menu */}
            <button
              onClick={() => setMobileOpen(v => !v)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 text-text-soft"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Search Dropdown */}
        {searchOpen && (
          <div className="border-t border-gray-100 bg-white px-4 py-3">
            <SearchBar onClose={() => setSearchOpen(false)} />
          </div>
        )}

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white">
            <nav className="px-4 py-3 flex flex-col gap-1">
              {nav.map(n => (
                <Link
                  key={n.href}
                  to={n.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2.5 rounded-md text-sm font-medium font-heading text-text-soft hover:text-primary hover:bg-gray-50"
                >
                  {n.label}
                </Link>
              ))}
              <button
                onClick={() => setLang(lang === 'en' ? 'as' : 'en')}
                className="mt-2 flex items-center gap-2 px-3 py-2 text-sm font-medium font-heading text-text-soft"
              >
                <Globe size={16} />
                {lang === 'en' ? 'অসমীয়াত চাওক' : 'View in English'}
              </button>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}
