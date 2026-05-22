import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { CategoryCard } from '../components/Cards'
import type { Category } from '@/types'

interface CategoriesSectionProps {
  lang: string
  dict: any
  categories: Category[]
}

export default function CategoriesSection({ lang, dict, categories }: CategoriesSectionProps) {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h2 className="section-title">{dict.home?.categories || "Categories"}</h2>
        <Link href={`/${lang}/tools`} className="text-sm text-primary font-medium font-heading hover:underline flex items-center gap-1">
          {dict.home?.viewAll || "View All"} <ArrowRight size={14} />
        </Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {categories.map((cat) => (
          <CategoryCard key={cat.id} cat={cat} lang={lang} />
        ))}
        <Link href={`/${lang}/tools`} className="card p-5 flex flex-col items-center justify-center gap-2 text-center hover:scale-[1.02] transition-transform border-dashed">
          <div className="w-11 h-11 rounded-xl bg-gray-50 flex items-center justify-center text-xl">+</div>
          <span className="text-xs font-medium text-text-soft">All Categories</span>
        </Link>
      </div>
    </section>
  )
}
