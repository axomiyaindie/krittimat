import Link from 'next/link'
import { Search, ArrowLeft } from 'lucide-react'
import { searchAll } from '@/lib/search'
import en from '@/locales/en.json'
import as from '@/locales/as.json'

const dictionaries = { en, as }

const typeLabels = {
  tool: { en: 'Tool', as: 'সঁজুলি' },
  prompt: { en: 'Prompt', as: 'প্ৰম্পট' },
  tutorial: { en: 'Tutorial', as: 'টিউটোৰিয়েল' },
  guide: { en: 'Guide', as: 'শিকনী' }
}

export default async function SearchPage({ params, searchParams }) {
  const { lang } = await params
  const resolvedSearchParams = await searchParams
  const dict = dictionaries[lang] || dictionaries.en
  const query = resolvedSearchParams?.q?.trim() || ''
  const results = searchAll(query, lang)

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 min-h-screen">
      <Link href={`/${lang}`} className="inline-flex items-center gap-2 text-sm text-text-soft hover:text-primary transition-colors">
        <ArrowLeft size={16} />
        {lang === 'as' ? 'মুখ্য পৃষ্ঠালৈ ঘূৰি যাওক' : 'Back to Home'}
      </Link>

      <div className="mt-8 rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
        <div className="flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/5 text-primary">
            <Search size={22} />
          </span>
          <div>
            <h1 className="text-3xl font-extrabold font-heading text-text-main">
              {lang === 'as' ? 'সন্ধান ফলাফল' : 'Search Results'}
            </h1>
            <p className="mt-1 text-sm text-text-soft">
              {query
                ? `${results.length} ${lang === 'as' ? 'টা ফলাফল' : 'results'} for "${query}"`
                : (lang === 'as' ? 'কিছুমান সন্ধান কৰক।' : 'Enter a search query to explore tools, prompts, and guides.')}
            </p>
          </div>
        </div>

        {query && results.length > 0 ? (
          <div className="mt-8 space-y-3">
            {results.map((result) => (
              <Link
                key={`${result.type}-${result.id || result.slug}`}
                href={result.href}
                className="block rounded-2xl border border-gray-100 bg-gray-50 p-5 transition-colors hover:border-primary/20 hover:bg-white"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h2 className="text-base font-bold font-heading text-text-main">
                      {lang === 'as'
                        ? result.title_as || result.name_as || result.name || result.title
                        : result.name || result.title}
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-text-soft">
                      {lang === 'as'
                        ? result.description_as || result.description || result.use_case || result.category
                        : result.description || result.use_case || result.category}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
                    {typeLabels[result.type]?.[lang] || result.type}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        ) : query ? (
          <div className="mt-8 rounded-2xl border border-dashed border-gray-200 bg-gray-50 p-8 text-center text-sm text-text-soft">
            {lang === 'as' ? 'কোনো মিল পোৱা নগ’ল। অন্য শব্দে চেষ্টা কৰক।' : 'No matching results found. Try a different search term.'}
          </div>
        ) : (
          <div className="mt-8 rounded-2xl border border-dashed border-gray-200 bg-gray-50 p-8 text-center text-sm text-text-soft">
            {dict.home?.searchPlaceholder || 'Search AI tools, prompts, tutorials...'}
          </div>
        )}
      </div>
    </div>
  )
}
