"use client";

import * as Icons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { categories } from '@/data';
import type { Category } from '@/types';

interface CategoryNavProps {
  lang?: string
  activeCategory?: string
  onSelectCategory?: (categoryId: string) => void
}

export default function CategoryNav({ lang: propLang, activeCategory, onSelectCategory }: CategoryNavProps) {
  const router = useRouter();
  const pathname = usePathname();
  
  // Use prop lang or extract from URL as fallback
  const lang = propLang || (pathname?.split('/')[1] === 'as' ? 'as' : 'en');

  const handleCategorySelect = (categoryId: string) => {
    if (onSelectCategory) {
      onSelectCategory(categoryId);
    } else {
      // If no onSelectCategory provided, navigate directly
      const params = new URLSearchParams();
      if (categoryId !== 'all') {
        params.set('category', categoryId);
      }
      router.push(`/${lang}/tools${params.toString() ? `?${params.toString()}` : ''}`);
    }
  };

  return (
    <div className="w-full py-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-heading font-bold text-lg text-text-main">
          {lang === 'as' ? 'শ্ৰেণীসমূহ অন্বেষণ কৰক' : 'Browse by Category'}
        </h2>
        <span className="text-xs text-text-soft bg-gray-100 px-2.5 py-1 rounded-full font-medium">
          {categories.length} {lang === 'as' ? 'শ্ৰেণী' : 'Categories'}
        </span>
      </div>

      {/* Responsive Horizontal Scroll Box for Mobile View, Clean Flex/Grid Wrap for Desktop screens */}
      <div className="flex gap-3 overflow-x-auto pb-3 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
        
        {/* 'All Categories' Default Master Switch Button */}
        <button
          onClick={() => handleCategorySelect('all')}
          className={`flex items-center gap-2 shrink-0 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 border ${
            activeCategory === 'all'
              ? 'bg-primary text-white border-primary shadow-sm shadow-primary/20'
              : 'bg-white text-text-soft border-gray-100 hover:border-gray-200 hover:text-text-main'
          }`}
        >
          <Icons.Grid size={16} />
          <span>{lang === 'as' ? 'সকলো সঁজুলি' : 'All Tools'}</span>
        </button>

        {/* Dynamic Data-Driven Category Mapping Engine */}
        {(categories as Category[]).map((cat) => {
          // 💡 AUTOMATION: Matches raw string lookup tokens ("Code2") to its actual functional Lucide visual object component
          const IconComponent = (Icons[cat.icon as keyof typeof Icons] || Icons.HelpCircle) as LucideIcon;
          const isActive = activeCategory === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => handleCategorySelect(cat.id)}
              className={`flex items-center gap-2 shrink-0 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 border ${
                isActive
                  ? 'bg-white text-text-main font-semibold shadow-sm'
                  : 'bg-white text-text-soft border-gray-100 hover:border-gray-200 hover:text-text-main'
              }`}
              style={isActive ? { borderLeft: `4px solid ${cat.color}`, paddingLeft: '12px' } : {}}
            >
              {/* Dynamic Icon Rendering with Custom Data-driven hex branding accents */}
              <IconComponent 
                size={16} 
                style={{ color: isActive ? cat.color : '#9CA3AF' }} 
              />
              <span>
                {lang === 'as' ? cat.name_as : cat.name}
              </span>
              <span className={`text-xs ml-1 px-1.5 py-0.5 rounded-md ${isActive ? 'bg-gray-100 text-text-soft' : 'bg-gray-50 text-gray-400'}`}>
                {cat.count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
