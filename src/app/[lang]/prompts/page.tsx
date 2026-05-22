// src/app/[lang]/prompts/page.tsx
import prompts from '@/data/prompts.json';
import type { Prompt } from '@/types';
import { PromptsView } from '@/features/directory/components';

const ALLOWED_LOCALES = ['en', 'as'];
const promptItems = prompts as Prompt[];

interface PromptsPageProps {
  params: Promise<{ lang: string }>;
}

// 1. Pre-render language directories statically at build time
export function generateStaticParams() {
  return ALLOWED_LOCALES.map((lang) => ({ lang }));
}

// 2. Server-Side SEO Extraction
export async function generateMetadata({ params }: PromptsPageProps) {
  const { lang = 'en' } = await params;
  
  const title = lang === 'as' ? 'এআই প্ৰম্পট সংগ্ৰহ' : 'AI Prompt Library';
  const desc = lang === 'as'
    ? 'ChatGPT, Claude, Gemini বা যিকোনো এআই চ্যাটবটৰ বাবে সাজু থকা প্ৰম্পটসমূহ।'
    : 'Copy-ready AI prompts for ChatGPT, Claude, Gemini and any AI chatbot.';

  return {
    title: `${title} | Krittimat`,
    description: desc,
    openGraph: {
      title,
      description: desc,
    },
  };
}

// 3. Router Entry Forwarder
export default async function PromptsPage({ params }: PromptsPageProps) {
  const { lang = 'en' } = await params;

  return (
    <PromptsView 
      promptItems={promptItems} 
      lang={lang} 
    />
  );
}