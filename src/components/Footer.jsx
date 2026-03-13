import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-text-main text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <img src="https://i.postimg.cc/bvWCrjyQ/Krittimat.jpg" alt="Krittimat" className="h-9 w-9 rounded-lg object-cover" />
              <span className="font-heading font-bold text-xl">Krittimat</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Your AI learning hub — discover tools, master prompts, and learn AI in English & Assamese.
            </p>
            <p className="text-xs text-gray-500 mt-3 font-assamese">
              অসমীয়া ভাষাত AI শিকক
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm mb-4">AI Tools</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {['Chat AI','Coding AI','Image AI','Video AI','Audio AI'].map(c => (
                <li key={c}><Link to={`/ai-tools?category=${c.toLowerCase().replace(' ','-')}`} className="hover:text-white transition-colors">{c}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm mb-4">Learn</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {[
                ['What is AI?', '/learn-ai/what-is-ai'],
                ['What is an LLM?', '/learn-ai/what-is-llm'],
                ['Prompt Engineering', '/learn-ai/prompt-engineering'],
                ['AI for Students', '/learn-ai/ai-for-students'],
                ['Tutorials', '/tutorials'],
              ].map(([label, href]) => (
                <li key={href}><Link to={href} className="hover:text-white transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm mb-4">Prompts</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {[
                ['ChatGPT Prompts', '/prompts/chatgpt-prompts'],
                ['Coding Prompts', '/prompts/coding-prompts'],
                ['Student Prompts', '/prompts/student-prompts'],
                ['Business Prompts', '/prompts/business-prompts'],
              ].map(([label, href]) => (
                <li key={href}><Link to={href} className="hover:text-white transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© {year} Krittimat. Built with ❤️ in Assam, India.</p>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-gray-300 transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-gray-300 transition-colors">Terms</Link>
            <a href="https://krittimat.netlify.app" className="hover:text-gray-300 transition-colors">krittimat.netlify.app</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
