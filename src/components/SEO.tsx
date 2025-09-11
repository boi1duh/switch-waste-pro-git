import React, { memo, ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';
import type { OrganizationSchema } from '../types';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  structuredData?: OrganizationSchema;
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords, canonical, ogImage, structuredData }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        {keywords && <meta name="keywords" content={keywords} />}
        {canonical && <link rel="canonical" href={canonical} />}
        {ogImage && (
          <>
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:type" content="website" />
          </>
        )}
        {structuredData && <script type="application/ld+json">{JSON.stringify(structuredData)}</script>}
      </Helmet>
    </>
  );
};

SEO.displayName = 'SEO';

export default memo(SEO);