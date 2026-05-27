// src/app/sitemap.ts
import { MetadataRoute } from 'next'
import tools from '@/data/tools.json'
import prompts from '@/data/prompts.json'
import tutorials from '@/data/tutorials.json'
import { learnTopics } from '@/data/learnTopics'
import { getBaseUrl } from '@/lib/constants'  // 👈 Import from constants

// Define explicit localized item structures for type safety
interface BaseItem {
  id: string | number;
}

interface TopicItem {
  slug: string;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = getBaseUrl();  // 👈 Use imported function
  const locales = ['en', 'as'];
  const today = new Date().toISOString().split('T')[0];

  // Cast JSON data datasets into typed arrays up front to avoid syntax collisions
  const typedTools = tools as BaseItem[];
  const typedPrompts = prompts as BaseItem[];
  const typedTutorials = tutorials as BaseItem[];
  const typedTopics = learnTopics as TopicItem[];

  // 1. Corrected Static Folders (Matching your exact app directory structure)
  const staticPaths = ['', '/about', '/blog', '/learnai', '/privacy', '/prompts', '/terms', '/tools'];
  
  const staticRoutes: MetadataRoute.Sitemap = [];
  staticPaths.forEach((path) => {
    locales.forEach((locale) => {
      staticRoutes.push({
        url: `${baseUrl}/${locale}${path}`,
        lastModified: today,
        changeFrequency: path === '' || path === '/tools' ? 'daily' : 'weekly',
        priority: path === '' ? 1.0 : path === '/tools' ? 0.9 : 0.7,
        alternates: {
          languages: {
            en: `${baseUrl}/en${path}`,
            as: `${baseUrl}/as${path}`,
          },
        },
      });
    });
  });

  // 2. Localized Dynamic AI Tool Routes
  const toolRoutes: MetadataRoute.Sitemap = [];
  typedTools.forEach((tool) => {
    locales.forEach((locale) => {
      toolRoutes.push({
        url: `${baseUrl}/${locale}/tools/${tool.id}`,
        lastModified: today,
        changeFrequency: 'weekly',
        priority: 0.6,
        alternates: {
          languages: {
            en: `${baseUrl}/en/tools/${tool.id}`,
            as: `${baseUrl}/as/tools/${tool.id}`,
          },
        },
      });
    });
  });

  // 3. Localized Dynamic Prompt Routes
  const promptRoutes: MetadataRoute.Sitemap = [];
  typedPrompts.forEach((prompt) => {
    locales.forEach((locale) => {
      promptRoutes.push({
        url: `${baseUrl}/${locale}/prompts/${prompt.id}`,
        lastModified: today,
        changeFrequency: 'weekly',
        priority: 0.5,
        alternates: {
          languages: {
            en: `${baseUrl}/en/prompts/${prompt.id}`,
            as: `${baseUrl}/as/prompts/${prompt.id}`,
          },
        },
      });
    });
  });

  // 4. Localized Dynamic Learn AI Tutorial Routes
  const tutorialRoutes: MetadataRoute.Sitemap = [];
  typedTutorials.forEach((tutorial) => {
    locales.forEach((locale) => {
      tutorialRoutes.push({
        url: `${baseUrl}/${locale}/learnai/${tutorial.id}`,
        lastModified: today,
        changeFrequency: 'weekly',
        priority: 0.6,
        alternates: {
          languages: {
            en: `${baseUrl}/en/learnai/${tutorial.id}`,
            as: `${baseUrl}/as/learnai/${tutorial.id}`,
          },
        },
      });
    });
  });

  // 5. Localized Dynamic Guide Topic Routes
  const guideRoutes: MetadataRoute.Sitemap = [];
  typedTopics.forEach((topic) => {
    locales.forEach((locale) => {
      guideRoutes.push({
        url: `${baseUrl}/${locale}/learnai/${topic.slug}`,
        lastModified: today,
        changeFrequency: 'weekly',
        priority: 0.6,
        alternates: {
          languages: {
            en: `${baseUrl}/en/learnai/${topic.slug}`,
            as: `${baseUrl}/as/learnai/${topic.slug}`,
          },
        },
      });
    });
  });

  // Assemble and return the complete map seamlessly
  return [...staticRoutes, ...toolRoutes, ...promptRoutes, ...tutorialRoutes, ...guideRoutes];
}