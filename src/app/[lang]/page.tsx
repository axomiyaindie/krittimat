// src/app/[lang]/page.jsx
import HomeView from '@/features/directory/components/HomeView'

// Fetch translation files cleanly on the server
import en from '@/locales/en.json'
import as from '@/locales/as.json'

const dictionaries = { en, as };

export default async function HomePage({ params }) {
  // Asynchronously resolve language properties safely
  const { lang } = await params;
  const dict = dictionaries[lang] || dictionaries.en;

  // The router's only job is to provide context data to the feature View
  return <HomeView lang={lang} dict={dict} />;
}
