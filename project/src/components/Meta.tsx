import { Helmet } from 'react-helmet-async';

interface MetaProps {
  title: string;
  description: string;
  image?: string;
  type?: string;
  url?: string;
}

export default function Meta({
  title,
  description,
  image = '/Shababuna-Logo-1.1.svg.svg',
  type = 'website',
  url = typeof window !== 'undefined' ? window.location.href : '',
}: MetaProps) {
  const siteName = 'Global Youth Organization';
  const fullTitle = `${title} | ${siteName}`;
  const canonicalUrl = url.split('?')[0].split('#')[0];

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="theme-color" content="#005A9C" />
    </Helmet>
  );
}