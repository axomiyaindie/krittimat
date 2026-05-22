"use client"; 

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation'; // 🔄 Standard Next.js navigation hooks
import { Menu, X, Globe } from 'lucide-react';
import SearchBar from '@/features/directory/components/SearchBar';

interface HeaderProps {
  lang: string
}

export default function Header({ lang }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Navigation translations fallback cleanly using standard parameters
  const navLinks = {
    en: [
      { name: 'AI Tools', href: '/tools' },       // 💡 Fixed matching directory folder names
      { name: 'Prompts', href: '/prompts' },
      { name: 'Learn AI', href: '/learnai' },     // 💡 Fixed matching directory folder names
      { name: 'Blog', href: '/blog' },
    ],
    as: [
      { name: 'এআই সঁজুলি', href: '/tools' },
      { name: 'প্ৰম্পটসমূহ', href: '/prompts' },
      { name: 'AI শিকক', href: '/learnai' },
      { name: 'ব্লগ', href: '/blog' },
    ]
  };

  const activeLinks = navLinks[lang as keyof typeof navLinks] || navLinks.en;

  // 🔄 Professional i18n URL Language Switcher
  const handleLanguageToggle = () => {
    const nextLocale = lang === 'en' ? 'as' : 'en';
    
    // Replaces the active locale segment in your actual route path seamlessly
    // Example: /en/tools becomes /as/tools
    const newPathname = (pathname || `/${lang}`).replace(`/${lang}`, `/${nextLocale}`);
    
    router.push(newPathname);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl h-16 items-center justify-between px-4 sm:px-6">
        
      {/* Brand Logo */}
<Link href={`/${lang}`} className="flex items-center gap-2 hover:opacity-90 transition-opacity">
  {/* 💡 Upgraded from emoji to your public custom vector asset brand logo */}
  <img 
    src="/assets/logo.svg" 
    alt="Krittimat Logo" 
    className="h-8 w-auto object-contain" 
  />
</Link>

        {/* Global Search Bar Integration */}
        <div className="hidden md:block w-full max-w-md mx-4">
          <SearchBar />
        </div>

        {/* Desktop Route Connections & Localization Toggles */}
        <div className="hidden lg:flex items-center gap-6">
          <nav className="flex items-center gap-6">
            {activeLinks.map((link) => (
              <Link 
                key={link.name} 
                href={`/${lang}${link.href}`} // 💡 Prepends language structure dynamically
                className="text-sm font-medium font-heading text-text-soft hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="h-4 w-[1px] bg-gray-200" />

          {/* Language Switcher Action Button */}
          <button 
            onClick={handleLanguageToggle}
            className="flex items-center gap-1.5 rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-semibold font-heading hover:bg-gray-50 transition-colors text-text-main"
          >
            <Globe size={14} className="text-primary" />
            <span>{lang === 'en' ? 'অসমীয়া' : 'English'}</span>
          </button>
        </div>

        {/* Mobile View Navigation Menu Trigger button */}
        <button 
          onClick={() => setMobileOpen(!mobileOpen)} 
          className="rounded-lg p-1.5 text-text-soft hover:bg-gray-50 hover:text-text-main lg:hidden"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Expanded Mobile Navigation Tray */}
      {mobileOpen && (
        <div className="border-b border-gray-100 bg-white px-4 py-4 lg:hidden flex flex-col gap-4 shadow-inner">
          <div className="w-full">
            <SearchBar onClose={() => setMobileOpen(false)} />
          </div>
          <nav className="flex flex-col gap-2.5">
            {activeLinks.map((link) => (
              <Link
                key={link.name}
                href={`/${lang}${link.href}`} // 💡 Prepends language structure dynamically
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg px-3 py-2 text-sm font-medium font-heading text-text-soft hover:bg-gray-50 hover:text-primary transition-all"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="h-[1px] w-full bg-gray-100" />
          <button 
            onClick={() => { handleLanguageToggle(); setMobileOpen(false); }}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary/5 px-4 py-3 text-sm font-semibold text-primary hover:bg-primary/10 transition-colors"
          >
            <Globe size={16} />
            <span>Switch Language to {lang === 'en' ? 'অসমীয়া' : 'English'}</span>
          </button>
        </div>
      )}
    </header>
  );
}
