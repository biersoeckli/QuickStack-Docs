import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import tailwindPlugin from "./plugins/tailwind-config.cjs"; // add this

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'QuickStack',
  tagline: 'Self hosting your apps was never easier',
  favicon: 'img/quickstack-icon-dark.png',

  // Set the production url of your site here
  url: 'https://quickstack.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'facebook', // Usually your GitHub org/user name.
  // projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    tailwindPlugin,
  ],

  presets: [
    [
      'classic',
      {
        gtag: {
          trackingID: 'G-EGDCMV3PQS',
          anonymizeIP: true,
        },
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        /*blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },*/
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**', '/archive/**', '/404/**'],
          filename: 'sitemap.xml',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/quickstack-social-card.png',
    metadata: [
      { name: 'keywords', content: 'QuickStack, self-hosting, deployment, server, monitoring, debugging, git, database, backups, containerized applications, PaaS, personal cloud platform' },
      { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
      { name: 'description', content: 'QuickStack - Your personal cloud platform. Self-host applications with ease. Complete documentation for deployment, management, and monitoring.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'QuickStack - Self-Hosting Made Easy' },
      { property: 'og:description', content: 'QuickStack is a simple Web UI to manage your Linux server and deploy your containerized applications. Your personal cloud platform built to run on your own servers.' },
      { property: 'og:image', content: 'https://quickstack.dev/img/quickstack-social-card.png' },
      { property: 'og:url', content: 'https://quickstack.dev' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:title', content: 'QuickStack - Self-Hosting Made Easy' },
      { property: 'twitter:description', content: 'Deploy and manage containerized applications on your own servers. Simple, powerful, open-source.' },
      { property: 'twitter:image', content: 'https://quickstack.dev/img/quickstack-social-card.png' },
      { name: 'theme-color', content: '#1f2937' },
    ],
    headTags: [
      {
        tagName: 'link',
        attributes: {
          rel: 'canonical',
          href: 'https://quickstack.dev',
        },
      },
      {
        tagName: 'meta',
        attributes: {
          httpEquiv: 'x-ua-compatible',
          content: 'ie=edge',
        },
      },
      {
        tagName: 'script',
        attributes: {
          type: 'application/ld+json',
        },
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'QuickStack',
          url: 'https://quickstack.dev',
          logo: 'https://quickstack.dev/img/quick-stack-logo-light.png',
          description: 'QuickStack is a simple Web UI to manage your Linux server and deploy your applications.',
          applicationCategory: 'DeveloperApplication',
          operatingSystem: 'Linux',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
          },
          sameAs: [
            'https://github.com/biersoeckli/QuickStack',
            'https://x.com/quickstack_dev',
          ],
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'Customer Service',
            url: 'https://github.com/biersoeckli/QuickStack/issues',
          },
        }),
      },
      {
        tagName: 'script',
        attributes: {
          type: 'application/ld+json',
        },
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          url: 'https://quickstack.dev',
          name: 'QuickStack Documentation',
          description: 'QuickStack - Your personal cloud platform. Self-host applications with ease.',
          publisher: {
            '@type': 'Organization',
            name: 'QuickStack',
            logo: {
              '@type': 'ImageObject',
              url: 'https://quickstack.dev/img/quick-stack-logo-light.png',
            },
          },
        }),
      },
    ],
    navbar: {
      title: 'QuickStack',
      logo: {
        alt: 'QuickStack Logo',
        src: 'img/quickstack-icon-dark.png',
        srcDark: "img/quickstack-icon-light.png",
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        //{ to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://x.com/quickstack_dev',
          label: 'X',
          position: 'right',
        },
        {
          href: 'https://github.com/biersoeckli/QuickStack',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Docs',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/biersoeckli/QuickStack',
            },
            {
              label: 'X',
              href: 'https://x.com/quickstack_dev',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} QuickStack`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
