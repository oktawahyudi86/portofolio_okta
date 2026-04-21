import React from 'react';
import { contactDetails } from '../../data/site-content';
import { sitelinkPages } from '../../data/site-pages';
import type { SitePageMeta } from '../../types/site';

const siteUrl = (import.meta.env.VITE_SITE_URL || 'https://oktawahyu.web.id').replace(/\/$/, '');
const ogImageUrl = `${siteUrl}/aset/og-preview.webp?v=20260330-1`;
const previewContactSuffix = ` WhatsApp: ${contactDetails.phoneNumber} untuk diskusi project, kolaborasi, dan peluang kerja.`;
const withPreviewContact = (description: string) => `${description}${previewContactSuffix}`;

const upsertMeta = (attribute: 'name' | 'property', key: string, content: string) => {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`) as HTMLMetaElement | null;

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
};

const upsertLink = (rel: string, href: string) => {
  let element = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }

  element.setAttribute('href', href);
};

export const SeoMetadata = ({ page }: { page: SitePageMeta }) => {
  React.useEffect(() => {
    const pageUrl = page.path === '/' ? `${siteUrl}/` : `${siteUrl}${page.path}`;
    const previewDescription = withPreviewContact(page.description);

    document.title = page.title;
    upsertMeta('name', 'description', previewDescription);
    upsertMeta('property', 'og:title', page.title);
    upsertMeta('property', 'og:description', previewDescription);
    upsertMeta('property', 'og:url', pageUrl);
    upsertMeta('property', 'og:image', ogImageUrl);
    upsertMeta('property', 'og:image:url', ogImageUrl);
    upsertMeta('property', 'og:image:secure_url', ogImageUrl);
    upsertMeta('name', 'twitter:title', page.title);
    upsertMeta('name', 'twitter:description', previewDescription);
    upsertMeta('name', 'twitter:image', ogImageUrl);
    upsertLink('canonical', pageUrl);

    const pageSchema = {
      '@context': 'https://schema.org',
      '@type': page.schemaType,
      '@id': `${pageUrl}#page`,
      name: page.navLabel,
      headline: page.heroTitle,
      description: page.description,
      url: pageUrl,
      isPartOf: {
        '@id': `${siteUrl}/#website`,
      },
      about: {
        '@id': `${siteUrl}/#person`,
      },
    };

    const breadcrumbSchema =
      page.path === '/'
        ? null
        : {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: `${siteUrl}/`,
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: page.navLabel,
                item: pageUrl,
              },
            ],
          };

    const sitelinkSchema = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Primary Site Pages',
      itemListElement: sitelinkPages.map((item, index) => ({
        '@type': 'SiteNavigationElement',
        position: index + 1,
        name: item.navLabel,
        description: item.shortDescription,
        url: item.path === '/' ? `${siteUrl}/` : `${siteUrl}${item.path}`,
      })),
    };

    const schemaScriptId = 'page-jsonld';
    const existingScript = document.getElementById(schemaScriptId);

    if (existingScript) {
      existingScript.remove();
    }

    const schemaScript = document.createElement('script');
    schemaScript.id = schemaScriptId;
    schemaScript.type = 'application/ld+json';
    schemaScript.textContent = JSON.stringify([pageSchema, breadcrumbSchema, sitelinkSchema].filter(Boolean));
    document.head.appendChild(schemaScript);

    return () => {
      const script = document.getElementById(schemaScriptId);
      script?.remove();
    };
  }, [page]);

  return null;
};
