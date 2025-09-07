import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData,
  noindex = false,
  language = 'en-ZA'
}) => {
  const siteName = 'Switch Waste Management Solutions';
  const siteUrl = 'https://www.switchwaste.co.za';
  const defaultImage = '/assets/logo/switch_Pro_logo.png';
  const defaultDescription = 'Professional waste management services for healthcare and general waste in Johannesburg. SANS compliant, environmentally responsible waste disposal solutions.';

  // Memoize expensive operations
  const seoData = useMemo(() => {
    const fullTitle = title ? `${title} | ${siteName}` : siteName;
    const metaDescription = description || defaultDescription;
    const metaKeywords = keywords || 'waste management, healthcare waste, medical waste disposal, Johannesburg, Gauteng, pharmaceutical waste, environmental services';

    // Ensure canonical starts with /
    const canonicalPath = canonical?.startsWith('/') ? canonical : `/${canonical || ''}`;
    const canonicalUrl = `${siteUrl}${canonicalPath}`;

    // Ensure ogImage starts with /
    const ogImagePath = ogImage?.startsWith('/') ? ogImage : `/${ogImage || 'assets/logo/switch_Pro_logo.png'}`;
    const ogImageUrl = `${siteUrl}${ogImagePath}`;

    return {
      fullTitle,
      metaDescription,
      metaKeywords,
      canonicalUrl,
      ogImageUrl
    };
  }, [title, description, keywords, canonical, ogImage]);

  // Validate structured data
  const validatedStructuredData = useMemo(() => {
    if (!structuredData) return null;

    try {
      // Ensure it's a valid object
      if (typeof structuredData !== 'object' || structuredData === null) {
        console.warn('SEO: structuredData must be a valid object');
        return null;
      }

      // Ensure it has @context
      if (!structuredData['@context']) {
        structuredData['@context'] = 'https://schema.org';
      }

      return structuredData;
    } catch (error) {
      console.error('SEO: Error validating structured data:', error);
      return null;
    }
  }, [structuredData]);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{seoData.fullTitle}</title>
      <meta name="description" content={seoData.metaDescription} />
      <meta name="keywords" content={seoData.metaKeywords} />
      <link rel="canonical" href={seoData.canonicalUrl} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={seoData.fullTitle} />
      <meta property="og:description" content={seoData.metaDescription} />
      <meta property="og:image" content={seoData.ogImageUrl} />
      <meta property="og:url" content={seoData.canonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={language} />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={seoData.fullTitle} />
      <meta name="twitter:description" content={seoData.metaDescription} />
      <meta name="twitter:image" content={seoData.ogImageUrl} />
      <meta name="twitter:site" content="@switchwaste" />

      {/* Additional SEO Meta Tags */}
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"} />
      <meta name="author" content="Switch Waste Management Solutions" />
      <meta name="publisher" content="Switch Waste Management Solutions" />
      <meta name="language" content={language} />
      <meta httpEquiv="Content-Language" content={language} />
      <meta name="geo.region" content="ZA-GP" />
      <meta name="geo.placename" content="Johannesburg" />
      <meta name="geo.position" content="-26.2041;28.0473" />
      <meta name="ICBM" content="-26.2041, 28.0473" />

      {/* Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#2c5530" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Switch Waste" />

      {/* Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />

      {/* Performance Hints */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />

      {/* Structured Data */}
      {validatedStructuredData && (
        <script type="application/ld+json">
          {JSON.stringify(validatedStructuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;