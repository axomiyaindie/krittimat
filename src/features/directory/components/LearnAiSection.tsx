import Link from 'next/link'
import { ArrowRight, BookOpen } from 'lucide-react'
import { learnTopics } from '@/data/learnTopics'

export default function LearnAiSection({ lang, dict }) {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <BookOpen size={18} className="text-primary" />
              <h2 className="section-title">{dict.home?.learnAI || "Learn AI"}</h2>
            </div>
            <p className="text-sm text-text-soft">Free AI guides for beginners, in simple language</p>
          </div>
          <Link href={`/${lang}/learnai`} className="text-sm text-primary font-medium font-heading hover:underline flex items-center gap-1">
            {dict.home?.viewAll || "View All"} <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {learnTopics.map(topic => (
            <Link key={topic.slug} href={`/${lang}/learnai/${topic.slug}`} className="card p-6 flex flex-col gap-3 hover:scale-[1.02] transition-transform group">
              <div className="text-4xl">{topic.emoji}</div>
              <div>
                <h3 className="font-heading font-semibold text-sm text-text-main group-hover:text-primary transition-colors">
                  {lang === 'as' ? topic.title_as : topic.title}
                </h3>
                <p className="text-xs text-text-soft mt-1">{lang === 'as' ? topic.description_as || topic.description : topic.description}</p>
              </div>
              <span className="text-xs text-primary font-medium flex items-center gap-1 mt-auto">
                {dict.home?.readMore || "Read More"} <ArrowRight size={12} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
