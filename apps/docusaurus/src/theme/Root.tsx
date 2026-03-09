import React, { useEffect, useState, ReactNode } from 'react';
import { useLocation } from '@docusaurus/router';

interface RootProps {
  children: ReactNode;
}

/**
 * Custom Root component to inject SchemaOrg component with appropriate schema for each page
 */
export default function Root({ children }: RootProps) {
  const location = useLocation();
  const [pageData, setPageData] = useState({
    title: '',
    description: '',
    keywords: [],
    type: 'WebPage' as 'WebPage' | 'HowTo' | 'TechArticle',
    datePublished: new Date().toISOString(),
    dateModified: new Date().toISOString(),
  });

  useEffect(() => {
    // This function will run when the component mounts or when location changes
    const determinePageType = () => {
      const path = location.pathname;
      
      // Default values
      let title = 'QuickStack';
      let description = 'QuickStack is a simple Web UI to manage your Linux server and deploy your applications.';
      let keywords = ['QuickStack', 'documentation'];
      
      // Extract document metadata from the DOM
      const titleElement = document.querySelector('title');
      const descElement = document.querySelector('meta[name="description"]');
      const keywordElement = document.querySelector('meta[name="keywords"]');
      
      if (titleElement) {
        title = titleElement.textContent || title;
      }
      
      if (descElement) {
        description = descElement.getAttribute('content') || description;
      }
      
      if (keywordElement) {
        const keywordContent = keywordElement.getAttribute('content');
        if (keywordContent) {
          keywords = keywordContent.split(',').map(k => k.trim());
        }
      }
      
      // Determine type based on path
      let schemaType: 'WebPage' | 'HowTo' | 'TechArticle' = 'WebPage';
      if (path.includes('/getting-started/') || path.includes('/managing-apps/')) {
        schemaType = 'HowTo';
      } else if (path.includes('/docs/')) {
        schemaType = 'TechArticle';
      }
      
      setPageData({
        title,
        description,
        keywords,
        type: schemaType,
        datePublished: new Date().toISOString(),
        dateModified: new Date().toISOString(),
      });
    };
    
    // We need to run this after the DOM is fully loaded
    if (document.readyState === 'complete') {
      determinePageType();
    } else {
      window.addEventListener('load', determinePageType);
      return () => window.removeEventListener('load', determinePageType);
    }
    
  }, [location]);

  return (
    <>
      {children}
    </>
  );
}
