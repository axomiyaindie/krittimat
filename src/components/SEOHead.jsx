import { Helmet } from 'react-helmet-async'

export default function SEOHead({
  title = 'Krittimat – AI Learning Hub',
  description = 'Discover 100+ AI tools, master prompts, and learn AI in English & Assamese.',
  url = 'https://krittimat.netlify.app',
  image = 'https://i.postimg.cc/bvWCrjyQ/Krittimat.jpg',
  schema = null,
}) {
  const fullTitle = title.includes('Krittimat') ? title : `${title} | Krittimat`
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {/* OG */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Krittimat" />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {/* Schema */}
      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </Helmet>
  )
}
