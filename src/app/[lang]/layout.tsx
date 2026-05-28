// src/app/[lang]/layout.jsx
import { notFound } from 'next/navigation';
import { Header, Footer } from '@/components/layout';
import { generateMetadata } from './metadata';

// Prerenders both language paths at build time
export function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'as' }
  ];
}

// Export metadata from separate file
export { generateMetadata };

export default async function LocalizedLayout({ children, params }) {
  const { lang } = await params;
  
  // Guard clause to catch invalid paths
  if (lang !== 'en' && lang !== 'as') {
    notFound();
  }
  
  return (
    <>
      <Header lang={lang} />
      <main className="flex-grow">{children}</main>
      <Footer lang={lang} />
    </>
  );
}