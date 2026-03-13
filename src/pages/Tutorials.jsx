import { Link, useParams } from 'react-router-dom'
import { Clock, ArrowLeft, ArrowRight } from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { TutorialCard } from '../components/Cards'
import tutorials from '../data/tutorials.json'
import { useLang } from '../utils/lang.jsx'

const tutorialContent = {
  'build-website-ai': {
    steps: [
      { n: 1, title: 'Choose your AI website builder', content: 'Pick from v0.dev (best for React), Bolt.new (fullstack), or Framer AI (visual). Each has strengths.' },
      { n: 2, title: 'Describe your website clearly', content: 'Write a clear prompt: "Build a landing page for a coffee shop with hero, features, pricing, and contact sections. Use warm brown colors."' },
      { n: 3, title: 'Review and iterate', content: 'Check the generated output. Ask for specific changes: "Make the hero section bigger" or "Add a testimonials section."' },
      { n: 4, title: 'Customize the design', content: 'Change colors, fonts, and images. Most AI builders let you edit visually after generation.' },
      { n: 5, title: 'Add your content', content: 'Replace placeholder text with your actual content. Use ChatGPT to write compelling copy for each section.' },
      { n: 6, title: 'Test on mobile', content: 'Check how your site looks on phone screens. AI builders usually generate responsive layouts automatically.' },
      { n: 7, title: 'Connect a domain', content: 'Deploy to Netlify or Vercel for free. Connect a custom domain for a professional look.' },
      { n: 8, title: 'Add analytics', content: 'Install Google Analytics or Plausible to track visitors. Most AI builders have one-click integrations.' },
    ]
  }
}

export default function Tutorials() {
  const { id } = useParams()
  const { t } = useLang()

  if (id) {
    const tutorial = tutorials.find(t => t.id === id)
    if (!tutorial) return <div className="text-center py-20"><p>Tutorial not found.</p><Link to="/tutorials" className="btn-primary mt-4">Back to Tutorials</Link></div>
    const content = tutorialContent[id]
    const levelColor = { Beginner: 'text-green-600 bg-green-50', Intermediate: 'text-amber-600 bg-amber-50' }

    return (
      <>
        <SEOHead title={tutorial.title} description={tutorial.description} url={`https://krittimat.netlify.app/tutorials/${id}`} />
        <div className="max-w-3xl mx-auto px-4 py-10">
          <Link to="/tutorials" className="inline-flex items-center gap-2 text-sm text-text-soft hover:text-primary mb-8"><ArrowLeft size={14} /> All Tutorials</Link>

          <div className="mb-8">
            <div className="text-5xl mb-4">{tutorial.thumbnail}</div>
            <div className="flex items-center gap-3 mb-3">
              <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${levelColor[tutorial.level]}`}>{tutorial.level}</span>
              <span className="text-xs text-text-soft flex items-center gap-1"><Clock size={12} />{tutorial.duration}</span>
              <span className="text-xs text-text-soft">{tutorial.steps} steps</span>
            </div>
            <h1 className="text-3xl font-bold font-heading text-text-main mb-3">{tutorial.title}</h1>
            <p className="text-text-soft leading-relaxed">{tutorial.description}</p>

            <div className="flex flex-wrap gap-2 mt-4">
              {tutorial.tools.map(tool => <span key={tool} className="tag text-xs">{tool}</span>)}
            </div>
          </div>

          {content ? (
            <div className="space-y-4">
              <h2 className="text-xl font-bold font-heading text-text-main mb-6">Step-by-Step Guide</h2>
              {content.steps.map(step => (
                <div key={step.n} className="flex gap-4 p-5 bg-white rounded-xl border border-gray-100 shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold font-heading shrink-0">{step.n}</div>
                  <div>
                    <h3 className="font-heading font-semibold text-sm text-text-main mb-1.5">{step.title}</h3>
                    <p className="text-sm text-text-soft leading-relaxed">{step.content}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-primary/5 rounded-2xl p-8 text-center border border-primary/15">
              <div className="text-4xl mb-3">🚧</div>
              <h3 className="font-heading font-semibold text-text-main mb-2">Full tutorial coming soon!</h3>
              <p className="text-sm text-text-soft">Subscribe to our newsletter to get notified when it's ready.</p>
            </div>
          )}
        </div>
      </>
    )
  }

  return (
    <>
      <SEOHead title="AI Tutorials — Step-by-Step Guides for Beginners" description="Free AI tutorials for beginners. Learn to build websites, generate images, create videos, and automate tasks using AI tools." url="https://krittimat.netlify.app/tutorials" />

      <div className="bg-white border-b border-gray-100 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <span className="tag mb-3 inline-block">Tutorials</span>
          <h1 className="text-3xl font-bold font-heading text-text-main mb-3">AI Tutorials</h1>
          <p className="text-text-soft max-w-xl">Step-by-step guides to master AI tools. From beginner to advanced, in English and Assamese.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tutorials.map(tut => <TutorialCard key={tut.id} tutorial={tut} />)}
        </div>
      </div>
    </>
  )
}
