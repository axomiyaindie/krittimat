// src/app/[lang]/layout.jsx
import { notFound } from 'next/navigation';
import { Header, Footer } from '@/components/layout';

// Prerenders both language paths at build time
export function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'as' }
  ];
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  
  // Guard clause for metadata generation
  if (lang !== 'en' && lang !== 'as') return {};

  return {
    title: lang === 'as' ? 'কৃত্তিমত - এআই সঁজুলি ডাইৰেক্টৰী' : 'Krittimat - AI Tools Directory',
    description: lang === 'as' ? 'শ্ৰেষ্ঠ এআই সঁজুলি আৰু কৰ্মপ্ৰণালীসমূহ আৱিষ্কাৰ কৰক।' : 'Discover the best AI tools and workflows.',
    metadataBase: new URL('https://krittimat.netlify.app'),
    alternates: {
      canonical: `/${lang}`, // metadataBase prefixes this automatically
      languages: {
        en: '/en',
        as: '/as',
      },
    },
    openGraph: {
      title: lang === 'as' ? 'কৃত্তিমত' : 'Krittimat',
      description: lang === 'as' ? 'শ্ৰেষ্ঠ এআই সঁজুলি ডাইৰেক্টৰী' : 'The Best AI Tools Directory',
      images: [
        {
          url: '/assets/og-image.png',
          width: 1200,
          height: 630,
          alt: lang === 'as' ? 'কৃত্তিমত আৱৰণ ছবি' : 'Krittimat Cover Image',
        }
      ],
    },
  };
}

export default async function LocalizedLayout({ children, params }) {
  const { lang } = await params;
  
  // Guard clause to catch invalid paths before rendering components
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