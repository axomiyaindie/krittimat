// src/app/[lang]/prompts/[id]/page.tsx
import { notFound } from 'next/navigation';
import prompts from '@/data/prompts.json';
import type { Prompt } from '@/types';
import { PromptDetailsView } from '@/features/directory/components'; // Assuming you have a details view matching your tool style

const ALLOWED_LOCALES = ['en', 'as'];
const promptItems = prompts as Prompt[];

interface PromptDetailsPageProps {
  params: Promise<{ lang: string; id: string }>;
}

// 1. Generate static configurations for EVERY individual prompt entry at build time
export function generateStaticParams() {
  return ALLOWED_LOCALES.flatMap((lang) =>
    promptItems.map((prompt) => ({
      lang,
      id: prompt.id.toString(),
    }))
  );
}

// 2. Server-Side SEO Generation for Single Templates
export async function generateMetadata({ params }: PromptDetailsPageProps) {
  const { lang, id } = await params;
  if (!ALLOWED_LOCALES.includes(lang)) return {};

  const prompt = promptItems.find((p) => p.id.toString() === id);
  if (!prompt) return {};

  const title = lang === 'as' 
    ? `${prompt.title || 'প্ৰম্পট'} - এআই প্ৰম্পট সবিশেষ` 
    : `${prompt.title || 'Prompt'} - Highly Optimized AI Prompt`;
      
  const baseDesc = lang === 'as' ? prompt.description_as || prompt.description : prompt.description;
  const desc = baseDesc && baseDesc.length > 160 ? `${baseDesc.slice(0, 157)}...` : baseDesc || '';

  return {
    title: `${title} | Krittimat`,
    description: desc,
    openGraph: {
      title,
      description: desc,
    },
  };
}

// 3. Master Server Component Route Entry
export default async function PromptDetailsPage({ params }: PromptDetailsPageProps) {
  const { lang, id } = await params;

  if (!ALLOWED_LOCALES.includes(lang)) {
    notFound();
  }

  const prompt = promptItems.find((p) => p.id.toString() === id);
  if (!prompt) {
    notFound();
  }

  // Pre-calculate alternative prompts inside the same category
  const recommendations = promptItems
    .filter((p) => p.category === prompt.category && p.id.toString() !== prompt.id.toString())
    .slice(0, 3);

  return (
    <PromptDetailsView 
      prompt={prompt} 
      recommendations={recommendations} 
      lang={lang} 
    />
  );
}