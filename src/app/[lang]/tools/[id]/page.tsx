// src/app/[lang]/tools/[id]/page.tsx
import React from 'react';
import { notFound } from 'next/navigation';
import tools from '@/data/tools.json';
import type { Tool } from '@/types';
import { ToolDetailsView } from '@/features/directory/components';

const ALLOWED_LOCALES = ['en', 'as'];
const toolItems = tools as Tool[];

interface ToolDetailsPageProps {
  params: Promise<{ lang: string; id: string }>;
}

// Generate static HTML configurations at build time
export function generateStaticParams() {
  return ALLOWED_LOCALES.flatMap((lang) =>
    toolItems.map((tool) => ({
      lang,
      id: tool.id.toString(),
    }))
  );
}

// Enterprise Server-Side SEO Generation
export async function generateMetadata({ params }: ToolDetailsPageProps) {
  const { lang, id } = await params;
  if (!ALLOWED_LOCALES.includes(lang)) return {};

  const tool = toolItems.find((t) => t.id.toString() === id);
  if (!tool) return {};

  const title = lang === 'as' ? `${tool.name} - এআই সঁজুলিৰ সম্পূৰ্ণ বিৱৰণ` : `${tool.name} - AI Tool Details`;
  const baseDesc = lang === 'as' ? tool.description_as || tool.description : tool.description;
  const desc = baseDesc.length > 160 ? `${baseDesc.slice(0, 157)}...` : baseDesc;

  return {
    title: `${title} | Krittimat`,
    description: desc,
    openGraph: {
      title,
      description: desc,
      images: ['/assets/og-image.png'],
    },
  };
}

export default async function ToolDetailsPage({ params }: ToolDetailsPageProps) {
  const { lang, id } = await params;

  if (!ALLOWED_LOCALES.includes(lang)) {
    notFound();
  }

  const tool = toolItems.find((t) => t.id.toString() === id);
  
  // 💡 FIX: Keep the guard clause first to assert that 'tool' is not undefined
  if (!tool) {
    notFound();
  }

  // Automated Smart Recommendation Engine (Safely executed because 'tool' is verified)
  const recommendations = toolItems
    .filter((t) => t.category === tool.category && t.id.toString() !== tool.id.toString())
    .slice(0, 3);

  return (
    <ToolDetailsView 
      tool={tool} 
      recommendations={recommendations} 
      lang={lang} 
    />
  );
}