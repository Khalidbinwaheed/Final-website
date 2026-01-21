import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  ogImage?: string;
  url?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "Code Craft It Solution ",
  description = "Code Craft It Solution delivers world-class software solutions. Web development, mobile apps, and digital transformation.",
  keywords = "software development, web development, mobile apps, digital agency, Code Craft It Solution, Pakistan",
  author = "Code Craft It Solution",
  ogImage = "/og-image.png", // Ensure this image exists in your public folder
  url = "https://codecraftpk.com"
}) => {
  const siteTitle = title === "Code Craft It Solution " ? title : `${title} | Code Craft It Solution`;

  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      
      {/* Canonical URL (Optional but good for SEO) */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
