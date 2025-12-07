import React from 'react';
import { useLocation } from '@docusaurus/router';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

/**
 * Component to add BreadcrumbList JSON-LD schema to pages
 * Automatically generates breadcrumbs from the URL path
 */
export default function BreadcrumbSchema(props?: {
  breadcrumbs?: Array<{ name: string; url: string }>;
}): React.ReactElement {
  const { pathname } = useLocation();
  const { siteConfig } = useDocusaurusContext();
  const siteUrl = siteConfig.url as string;

  // Generate breadcrumbs from pathname
  const generateBreadcrumbs = () => {
    if (props?.breadcrumbs) {
      return props.breadcrumbs;
    }

    const parts = pathname.split('/').filter(p => p && p !== 'docs');
    const breadcrumbs = [
      { name: 'Home', url: '/' }
    ];

    let currentPath = '';
    parts.forEach((part, index) => {
      currentPath += '/' + part;
      const displayName = part
        .replace(/^\d+-/, '') // Remove leading numbers
        .replace(/-/g, ' ') // Replace hyphens with spaces
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      breadcrumbs.push({
        name: displayName,
        url: currentPath
      });
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: `${siteUrl}${crumb.url}`
    }))
  };

  return (
    <Head>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </Head>
  );
}
