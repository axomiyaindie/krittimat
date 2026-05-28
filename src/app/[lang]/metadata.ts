// src/app/[lang]/metadata.ts
import { Metadata } from 'next';

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ lang: string }> 
}): Promise<Metadata> {
  
  const { lang } = await params;

  if (lang !== 'en' && lang !== 'as') {
    return {};
  }

  const isAssamese = lang === 'as';

  // ==================== URL DETECTION ====================
  const siteUrl = getSiteUrl();
  // ====================================================

  return {
    title: isAssamese 
      ? 'কৃত্তিমত - এআই সঁজুলি ডাইৰেক্টৰী' 
      : 'Krittimat - AI Tools Directory',
    
    description: isAssamese 
      ? 'শ্ৰেষ্ঠ এআই সঁজুলি আৰু কৰ্মপ্ৰণালীসমূহ আৱিষ্কাৰ কৰক।' 
      : 'Discover the best AI tools and workflows.',

    metadataBase: new URL(siteUrl),

    icons: {
      icon: '/assets/icon.svg',
    },

    alternates: {
      canonical: `/${lang}`,
      languages: {
        en: '/en',
        as: '/as',
      },
    },

    openGraph: {
      title: isAssamese ? 'কৃত্তিমত' : 'Krittimat',
      description: isAssamese 
        ? 'শ্ৰেষ্ঠ এআই সঁজুলি ডাইৰেক্টৰী' 
        : 'The Best AI Tools Directory',
      images: [
        {
          url: '/assets/og-image.png',
          width: 1200,
          height: 630,
          alt: isAssamese ? 'কৃত্তিমত আৱৰণ ছবি' : 'Krittimat Cover Image',
        }
      ],
    },
  };
}

/**
 * Smart Site URL Detection
 * Automatically detects the correct URL for localhost, Vercel, or Netlify
 */
function getSiteUrl(): string {
  // Priority 1: Explicitly set by user (Recommended for production)
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }

  // Priority 2: Vercel (Production & Preview deployments)
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  // Priority 3: Netlify
  if (process.env.NETLIFY_URL || process.env.NEXT_PUBLIC_NETLIFY_URL) {
    return `https://${process.env.NETLIFY_URL || process.env.NEXT_PUBLIC_NETLIFY_URL}`;
  }

  // Priority 4: Vercel custom env
  if (process.env.NEXT_PUBLIC_VERCEL_URL) {
    return process.env.NEXT_PUBLIC_VERCEL_URL;
  }

  // Fallback: Local development
  return 'http://localhost:3000';
}