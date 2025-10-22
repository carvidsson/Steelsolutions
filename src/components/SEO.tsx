import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface SEOProps {
  titleKey: string;
  descriptionKey: string;
  keywordsKey?: string;
  path: string;
}

const SEO = ({ titleKey, descriptionKey, keywordsKey, path }: SEOProps) => {
  const { language } = useLanguage();

  useEffect(() => {
    // Import translations dynamically
    import('@/translations/translations').then(({ getTranslation }) => {
      const title = getTranslation(language, titleKey);
      const description = getTranslation(language, descriptionKey);
      const keywords = keywordsKey ? getTranslation(language, keywordsKey) : '';
      const url = `https://absteelsolutions.se${path}`;

      // Update title
      document.title = title;

      // Update or create meta tags
      updateMetaTag('name', 'description', description);
      if (keywords) {
        updateMetaTag('name', 'keywords', keywords);
      }

      // Update Open Graph tags
      updateMetaTag('property', 'og:title', title);
      updateMetaTag('property', 'og:description', description);
      updateMetaTag('property', 'og:url', url);

      // Update Twitter tags
      updateMetaTag('name', 'twitter:title', title);
      updateMetaTag('name', 'twitter:description', description);
      updateMetaTag('name', 'twitter:url', url);

      // Update canonical link
      updateCanonicalLink(url);

      // Update html lang attribute
      document.documentElement.lang = language;
    });
  }, [language, titleKey, descriptionKey, keywordsKey, path]);

  return null;
};

// Helper function to update or create meta tags
const updateMetaTag = (attr: string, attrValue: string, content: string) => {
  let element = document.querySelector(`meta[${attr}="${attrValue}"]`);
  
  if (element) {
    element.setAttribute('content', content);
  } else {
    element = document.createElement('meta');
    element.setAttribute(attr, attrValue);
    element.setAttribute('content', content);
    document.head.appendChild(element);
  }
};

// Helper function to update canonical link
const updateCanonicalLink = (url: string) => {
  let link = document.querySelector('link[rel="canonical"]');
  
  if (link) {
    link.setAttribute('href', url);
  } else {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', url);
    document.head.appendChild(link);
  }
};

export default SEO;
