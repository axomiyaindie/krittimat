// src/lib/constants.ts
export const getBaseUrl = (): string => {
  return process.env.NEXT_PUBLIC_SITE_URL || 
         process.env.NEXT_PUBLIC_NETLIFY_URL ||
         process.env.NEXT_PUBLIC_VERCEL_URL ||
         'https://krittimat.netlify.app'; // fallback
};