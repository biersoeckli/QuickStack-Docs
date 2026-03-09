import type { MetadataRoute } from 'next';
import { source } from '@/lib/source';

export const revalidate = false;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://quickstack.dev';
  
  // Get all documentation pages
  const pages = source.getPages();
  
  const docEntries: MetadataRoute.Sitemap = pages.map((page) => {
    const url = `${baseUrl}${page.url}`;
    
    // Determine priority based on page type and depth
    let priority = 0.6;
    const path = page.url.toLowerCase();
    
    // Homepage/index of docs
    if (path === '/docs' || path === '/docs/') {
      priority = 0.9;
    }
    // Tutorial pages (high priority for new users)
    else if (path.includes('/tutorials/')) {
      priority = 0.8;
    }
    // Installation page (very important)
    else if (path.includes('/installation')) {
      priority = 0.9;
    }
    // How-to guides (practical, frequently accessed)
    else if (path.includes('/how-to/')) {
      priority = 0.7;
    }
    // Reference documentation (lower priority, less frequently updated)
    else if (path.includes('/reference/')) {
      priority = 0.5;
    }
    // Category index pages
    else if (page.slugs.length === 1) {
      priority = 0.7;
    }
    
    return {
      url,
      lastModified: new Date(),
      changeFrequency: path.includes('/reference/') ? 'monthly' : 'weekly',
      priority,
    };
  });
  
  // Add static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ];
  
  return [...staticPages, ...docEntries];
}
