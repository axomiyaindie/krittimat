import Link from 'next/link'
import { ArrowRight, Sparkles, BookOpen } from 'lucide-react'
import SVGHeading from '../components/SVGHeading'
import SearchBar from '../components/SearchBar'

export default function HeroSection({ lang, dict }) {
  return (
    <section className="hero-mesh pt-16 pb-20 px-4 text-center overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-medium font-heading px-4 py-2 rounded-full mb-6 border border-primary/20">
          <Sparkles size={13} />
          Now in English & অসমীয়াত উপলব্ধ
        </div>

        <div className="flex justify-center mb-4">
          <SVGHeading text="Krittimat" size={72} />
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-text-main leading-tight mb-5">
          {dict.home?.title || "Discover the Best AI Tools"}
        </h1>
        <p className="text-lg text-text-soft max-w-2xl mx-auto mb-8 leading-relaxed">
          {dict.home?.description || "Navigate through our bilingual AI directory in English and Assamese seamlessly."}
        </p>

        <div className="max-w-2xl mx-auto mb-10">
          <SearchBar large />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
          <Link href={`/${lang}/tools`} className="btn-primary">
            {dict.home?.exploreTools || "Explore Tools"} <ArrowRight size={16} />
          </Link>
          <Link href={`/${lang}/learnai`} className="btn-outline">
            <BookOpen size={16} /> {dict.home?.learnFree || "Learn Free"}
          </Link>
        </div>
      </div>
    </section>
  )
}
