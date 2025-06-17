import React from 'react';
import { useLocation } from '@docusaurus/router';
import { useBaseUrlUtils } from '@docusaurus/useBaseUrl';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

/**
 * Component to add JSON-LD schema to document pages
 * Extended to accept custom schema attributes for use directly in MDX files
 */
export default function SchemaOrg(props: {
    title?: string;
    description?: string;
    keywords?: string[] | string;
    type?: 'TechArticle' | 'HowTo' | 'WebPage';
    datePublished?: string;
    dateModified?: string;
    // Additional attributes for TechArticle
    articleSection?: string;
    educationalUse?: string;
    inLanguage?: string;
    operatingSystem?: string;
    dependencies?: string;
    proficiencyLevel?: string;
    requirements?: string;
    // Additional attributes for HowTo
    supply?: string[];
    tool?: string[];
    step?: any[];
    // Allow any custom attributes
    [key: string]: any;
}): React.ReactElement {
    const { pathname } = useLocation();
    const { withBaseUrl } = useBaseUrlUtils();
    const { siteConfig } = useDocusaurusContext();
    const pageUrl = withBaseUrl(pathname);
    const siteUrl = siteConfig.url as string;
    const fullUrl = `${siteUrl}${pageUrl}`;

    // Use props or defaults
    const title = props.title || siteConfig.title as string;
    const description = props.description || (siteConfig.tagline as string);
    const type = props.type || 'WebPage';
    const datePublished = props.datePublished || new Date().toISOString();
    const dateModified = props.dateModified || new Date().toISOString();
    const keywords = typeof props.keywords === 'string'
        ? props.keywords
        : (props.keywords?.join(', ') || 'QuickStack, documentation');

    // Default site-wide organization schema
    const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'QuickStack',
        url: siteUrl,
        applicationCategory: "DeveloperApplication",
        logo: `${siteUrl}/img/quick-stack-logo-light.png`,
        license: "https://github.com/biersoeckli/quickstack/blob/main/LICENSE",
        description: 'QuickStack is a simple Web UI to manage your Linux server and deploy your applications.',
        screenshot: `${siteUrl}/img/app-screenshots/1.png`,
    };

    // Get standard attributes that shouldn't be directly passed to schema
    const excludedProps = ['type', 'children'];

    // Extract custom props by removing standard ones
    const extractCustomProps = () => {
        const customProps = { ...props };
        excludedProps.forEach(prop => delete customProps[prop]);

        // Remove standard props based on type
        ['title', 'description', 'keywords', 'datePublished', 'dateModified'].forEach(
            prop => delete customProps[prop]
        );

        return customProps;
    };

    // Format and create schema based on page type and content
    const formatSchema = () => {
        const customProps = extractCustomProps();

        // Create schema based on page type
        if (type === 'TechArticle') {
            return {
                '@context': 'https://schema.org',
                '@type': 'TechArticle',
                headline: title,
                description: description,
                author: {
                    "@type": "Person",
                    "name": "biersoeckli",
                    "sameAs": "https://github.com/biersoeckli"
                },
                publisher: {
                    '@type': 'Organization',
                    name: 'QuickStack',
                    url: siteUrl,
                    logo: {
                        '@type': 'ImageObject',
                        url: `${siteUrl}/img/quick-stack-logo-light.png`
                    }
                },
                url: fullUrl,
                mainEntityOfPage: {
                    '@type': 'WebPage',
                    '@id': fullUrl
                },
                datePublished: datePublished,
                dateModified: dateModified,
                inLanguage: props.inLanguage || 'en',
                keywords: keywords,
                // Add all custom properties
                ...customProps
            };
        }

        // For "how-to" pages (installation, setup guides, etc.)
        if (type === 'HowTo') {
            return {
                '@context': 'https://schema.org',
                '@type': 'HowTo',
                name: title,
                description: description,
                author: {
                    "@type": "Person",
                    "name": "biersoeckli",
                    "sameAs": "https://github.com/biersoeckli"
                },
                publisher: {
                    '@type': 'Organization',
                    name: 'QuickStack',
                    url: siteUrl,
                    logo: {
                        '@type': 'ImageObject',
                        url: `${siteUrl}/img/quick-stack-logo-light.png`
                    }
                },
                url: fullUrl,
                datePublished: datePublished,
                dateModified: dateModified,
                inLanguage: props.inLanguage || 'en',
                // Additional howto-specific properties
                supply: props.supply || [],
                tool: props.tool || [],
                step: props.step || [],
                // Add remaining custom properties
                ...customProps
            };
        }

        // Default to WebPage schema
        return {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: title,
            description: description,
            url: fullUrl,
            author: {
                "@type": "Person",
                "name": "biersoeckli",
                "sameAs": "https://github.com/biersoeckli"
            },
            publisher: {
                '@type': 'Organization',
                name: 'QuickStack',
                url: siteUrl,
                logo: {
                    '@type': 'ImageObject',
                    url: `${siteUrl}/img/quick-stack-logo-light.png`
                }
            },
            datePublished: datePublished,
            dateModified: dateModified,
            inLanguage: props.inLanguage || 'en',
            keywords: keywords,
            // Add all custom properties
            ...customProps
        };
    };

    const schema = formatSchema();

    return (
        <Head>
            <script type="application/ld+json">
                {JSON.stringify(schema)}
            </script>
            <script type="application/ld+json">
                {JSON.stringify(organizationSchema)}
            </script>
        </Head>
    );
}
