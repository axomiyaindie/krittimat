import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { LangProvider } from './utils/lang.jsx'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Tools from './pages/Tools'
import ToolPage from './pages/ToolPage'
import Prompts from './pages/Prompts'
import Tutorials from './pages/Tutorials'
import LearnAI from './pages/LearnAI'
import { Blog } from './pages/Blog'

function NotFound() {
  return (
    <div className="max-w-lg mx-auto px-4 py-32 text-center">
      <div className="text-7xl mb-6">🤖</div>
      <h1 className="text-3xl font-bold font-heading text-text-main mb-3">404 — Page Not Found</h1>
      <p className="text-text-soft mb-8">The page you're looking for doesn't exist yet. Maybe AI hasn't built it yet!</p>
      <a href="/" className="btn-primary">Go Home</a>
    </div>
  )
}

export default function App() {
  return (
    <HelmetProvider>
      <LangProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/ai-tools" element={<Tools />} />
              <Route path="/ai-tools/:id" element={<ToolPage />} />
              <Route path="/prompts" element={<Prompts />} />
              <Route path="/prompts/:category" element={<Prompts />} />
              <Route path="/tutorials" element={<Tutorials />} />
              <Route path="/tutorials/:id" element={<Tutorials />} />
              <Route path="/learn-ai" element={<LearnAI />} />
              <Route path="/learn-ai/:topic" element={<LearnAI />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<Blog />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </LangProvider>
    </HelmetProvider>
  )
}
