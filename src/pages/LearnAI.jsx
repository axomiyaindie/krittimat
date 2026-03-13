import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import SEOHead from '../components/SEOHead'

const guides = [
  {
    id: 'what-is-ai',
    title: 'What is AI?',
    title_as: 'AI কি?',
    emoji: '🤖',
    desc: 'A beginner-friendly introduction to artificial intelligence',
    readTime: '5 min',
    content: [
      { h: 'What is Artificial Intelligence?', p: 'Artificial Intelligence (AI) is the ability of computers to perform tasks that normally require human intelligence — like understanding language, recognizing images, making decisions, and solving problems. Think of AI as a very smart assistant that learns from data.' },
      { h: 'How does AI work?', p: 'Modern AI works by learning from massive amounts of data. For example, to teach AI to recognize cats, you show it millions of cat photos. The AI learns to detect patterns (pointy ears, whiskers, fur) and can then identify cats in new photos it\'s never seen before.' },
      { h: 'Types of AI', p: 'There are different types of AI:\n\n• Narrow AI: AI that does one thing very well (like chess, image recognition, or language translation). This is all the AI we have today.\n• General AI: Hypothetical AI that could do any intellectual task a human can. This doesn\'t exist yet.\n• Chatbots & LLMs: AI trained on text that can understand and generate human language (like ChatGPT, Claude).' },
      { h: 'AI in everyday life', p: 'You already use AI every day:\n• Google Search — AI ranks results for you\n• Netflix/YouTube — AI recommends what to watch\n• Spotify — AI recommends songs\n• Gmail — AI filters spam and suggests replies\n• Face ID on iPhone — AI recognizes your face\n• Google Translate — AI translates languages instantly' },
      { h: 'Why AI matters now', p: 'We\'re living through the most significant technological shift since the internet. AI tools like ChatGPT, Claude, and Midjourney have become incredibly capable. They can write, code, draw, compose music, and reason through complex problems — and they\'re getting better rapidly.' },
    ]
  },
  {
    id: 'what-is-llm',
    title: 'What is an LLM?',
    title_as: 'LLM কি?',
    emoji: '🧠',
    desc: 'Large Language Models explained in simple terms',
    readTime: '7 min',
    content: [
      { h: 'What is a Large Language Model?', p: 'A Large Language Model (LLM) is an AI system trained on enormous amounts of text from the internet, books, and other sources. It learns the patterns of human language and can generate, translate, summarize, and discuss text on almost any topic.' },
      { h: 'How LLMs are trained', p: 'Training an LLM involves reading billions of web pages, books, and articles. The model learns to predict what word comes next in a sentence. After billions of these predictions and corrections, the model develops a deep "understanding" of language, facts, and reasoning.' },
      { h: 'Famous LLMs you should know', p: '• GPT-4 (OpenAI) — Powers ChatGPT\n• Claude 3.5 (Anthropic) — Powers Claude.ai\n• Gemini (Google) — Powers Google\'s AI\n• Llama (Meta) — Open-source, free to use\n• Mistral — European open-source LLM' },
      { h: 'What can LLMs do?', p: 'Modern LLMs can: write essays, stories, and emails; explain complex topics; debug code; translate languages; answer questions; summarize long documents; generate creative content; and even reason through math problems.' },
      { h: 'Limitations of LLMs', p: 'LLMs can hallucinate — confidently state incorrect information. They have a training cutoff date and don\'t know recent events. They can be biased based on their training data. Always verify important facts from LLM outputs.' },
    ]
  },
  {
    id: 'prompt-engineering',
    title: 'Prompt Engineering',
    title_as: 'প্ৰম্পট ইঞ্জিনিয়াৰিং',
    emoji: '✨',
    desc: 'Master the art of writing perfect AI prompts',
    readTime: '10 min',
    content: [
      { h: 'What is Prompt Engineering?', p: 'Prompt engineering is the skill of writing clear, specific instructions to get the best results from AI models. A well-crafted prompt can be the difference between a mediocre and an extraordinary AI output.' },
      { h: 'The 4 elements of a great prompt', p: '1. Role: Tell the AI who to be ("Act as an expert Python developer")\n2. Context: Provide background information\n3. Task: State exactly what you want\n4. Format: Specify how you want the output (list, table, essay, code)' },
      { h: 'Prompt patterns that always work', p: '• "Explain [X] as if I\'m a 10-year-old"\n• "Give me 10 ideas for [X], then rate each 1-10"\n• "Review my [X] and suggest 5 improvements"\n• "Rewrite this in a [formal/casual/professional] tone"\n• "Act as [expert] and give me advice on [topic]"' },
      { h: 'Chain-of-Thought prompting', p: 'For complex tasks, ask AI to "think step by step". This dramatically improves accuracy for math, logic, and reasoning tasks. Example: "Solve this problem step by step and show your work."' },
      { h: 'Common mistakes to avoid', p: '• Too vague: "Write something about AI" → Bad\n• Too specific: Listing every tiny requirement → Bad\n• No context: Assuming AI knows your situation\n• No format: Letting AI decide how to structure output\n• Accepting first result: Always iterate and refine' },
    ]
  },
  {
    id: 'ai-for-students',
    title: 'AI for Students',
    title_as: 'ছাত্ৰৰ বাবে AI',
    emoji: '📚',
    desc: 'How students can use AI ethically and effectively',
    readTime: '8 min',
    content: [
      { h: 'AI as your study companion', p: 'AI tools like ChatGPT and Claude can be powerful study companions. They can explain difficult concepts, create practice questions, summarize textbooks, and help you understand topics from multiple angles — at any time of day.' },
      { h: 'Best AI tools for students', p: '• ChatGPT — General questions, essays, explanations\n• Perplexity — Research with citations\n• NotebookLM — Upload your notes and study from them\n• QuillBot — Paraphrasing and grammar\n• Grammarly AI — Writing improvement\n• Wolfram Alpha — Math and science' },
      { h: 'How to use AI for essays', p: 'Use AI ethically: brainstorm ideas, outline structure, get feedback on drafts, and improve your writing — but write the actual content yourself. This develops your skills while using AI as a coach.' },
      { h: 'Create a personalized study plan', p: 'Prompt: "I need to study [SUBJECT] for [EXAM] in [X] days. I have [Y] hours per day. Create a detailed daily study schedule with topics, resources, and practice tests."' },
      { h: 'AI for learning new languages', p: 'AI is a breakthrough tool for language learning. Use ChatGPT to practice conversations, get grammar explanations, translate with context, and even roleplay scenarios in the target language.' },
    ]
  },
]

export default function LearnAI() {
  const { topic } = useParams()
  const guide = guides.find(g => g.id === topic)

  if (topic && guide) {
    return (
      <>
        <SEOHead title={guide.title} description={guide.desc} url={`https://krittimat.netlify.app/learn-ai/${guide.id}`} />
        <div className="max-w-3xl mx-auto px-4 py-10">
          <Link to="/learn-ai" className="inline-flex items-center gap-2 text-sm text-text-soft hover:text-primary mb-8"><ArrowLeft size={14} /> All Guides</Link>
          <div className="text-5xl mb-4">{guide.emoji}</div>
          <div className="flex items-center gap-3 mb-3">
            <span className="tag">Beginner Guide</span>
            <span className="text-xs text-text-soft">📖 {guide.readTime} read</span>
          </div>
          <h1 className="text-3xl font-bold font-heading text-text-main mb-3">{guide.title}</h1>
          <p className="text-text-soft text-lg leading-relaxed mb-10">{guide.desc}</p>

          <div className="space-y-8">
            {guide.content.map((section, i) => (
              <div key={i} className="prose-like">
                <h2 className="text-xl font-bold font-heading text-text-main mb-3">{section.h}</h2>
                <p className="text-text-soft leading-relaxed whitespace-pre-line text-[15px]">{section.p}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/15">
            <h3 className="font-heading font-bold text-text-main mb-2">Next Steps</h3>
            <p className="text-sm text-text-soft mb-4">Now that you understand the basics, explore AI tools and try them yourself.</p>
            <div className="flex flex-wrap gap-3">
              <Link to="/ai-tools" className="btn-primary text-sm">Explore AI Tools</Link>
              <Link to="/prompts" className="btn-outline text-sm">Try AI Prompts</Link>
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <SEOHead title="Learn AI — Free AI Guides for Beginners" description="Free AI learning guides in English and Assamese. Understand AI, LLMs, prompt engineering, and how to use AI tools." url="https://krittimat.netlify.app/learn-ai" />

      <div className="bg-white border-b border-gray-100 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <span className="tag mb-3 inline-block">Learn AI</span>
          <h1 className="text-3xl font-bold font-heading text-text-main mb-3">Learn AI — Free Guides</h1>
          <p className="text-text-soft max-w-xl">Clear, beginner-friendly AI guides in English and Assamese. Start from zero and build real understanding.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {guides.map(guide => (
            <Link key={guide.id} to={`/learn-ai/${guide.id}`} className="card p-6 flex gap-5 hover:scale-[1.01] transition-transform group">
              <div className="text-5xl shrink-0">{guide.emoji}</div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="tag text-xs">Beginner</span>
                  <span className="text-xs text-text-soft">📖 {guide.readTime}</span>
                </div>
                <h2 className="font-heading font-bold text-text-main group-hover:text-primary transition-colors mb-1">{guide.title}</h2>
                <p className="text-sm text-text-soft">{guide.desc}</p>
                <span className="mt-3 flex items-center gap-1 text-sm text-primary font-medium">
                  Read guide <ArrowRight size={13} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
