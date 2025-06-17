import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import { JSX } from 'react';
import KeyFeature from '../components/key-feature';
import SectionWrapper from '../components/sections-wrapper';
import TechnologyHighlight from '../components/technologies';
import Testimonials from '../components/testimonilals';
import { HomepageHeader } from '../components/homepage-headers';
import { AppScreenshots } from '../components/app-screenshots';
import SetupVideo from '../components/setup-video';
import Head from '@docusaurus/Head';
import SchemaOrg from '../components/SEO/SchemaOrg';



export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (<>
    <SchemaOrg
      type="WebPage"
      title="QuickStack - Deploy Apps on Any Server"
      description="QuickStack is a container management system for your own servers. Install QuickStack with a single command and deploy your apps in seconds."
      keywords="QuickStack, self-hosting, deployment, container management, Docker, Kubernetes, k3s, open source, server management"
      datePublished="2025-06-17"
      dateModified="2025-06-17"
      about={{
        "@type": "SoftwareApplication",
        "name": "QuickStack",
        "applicationCategory": "DeveloperApplication",
        "operatingSystem": "Linux",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "creator": {
          "@type": "Person",
          "name": "biersoeckli",
          "sameAs": "https://github.com/biersoeckli"
        }
      }}
      mainEntityOfPage={{
        "@type": "WebPage",
        "@id": "https://quickstack.dev"
      }}
      potentialAction={[
        {
          "@type": "ReadAction",
          "target": [
            "https://quickstack.dev/docs/intro",
            "https://quickstack.dev/docs/getting-started/installation",
            "https://quickstack.dev/docs/getting-started/cluster-setup",
            "https://quickstack.dev/docs/getting-started/password-reset",
            "https://quickstack.dev/docs/managing-apps/01-from-git-source",
            "https://quickstack.dev/docs/managing-apps/02-from-container-registry",
            "https://quickstack.dev/docs/managing-apps/03-domains",
            "https://quickstack.dev/docs/managing-apps/04-storage",
            "https://quickstack.dev/docs/managing-apps/05-webhooks",
            "https://quickstack.dev/docs/backups"
          ]
        }
      ]}
      hasPart={[
        {
          "@type": "WebPage",
          "name": "Introduction to QuickStack",
          "description": "An overview of QuickStack and its features",
          "url": "https://quickstack.dev/docs/intro"
        },
        {
          "@type": "WebPage",
          "name": "Installation Guide",
          "description": "Step-by-step guide for installing QuickStack on your server",
          "url": "https://quickstack.dev/docs/getting-started/installation"
        },
        {
          "@type": "WebPage",
          "name": "Setting up a Cluster",
          "description": "Learn how to set up a QuickStack cluster across multiple servers",
          "url": "https://quickstack.dev/docs/getting-started/cluster-setup"
        },
        {
          "@type": "WebPage",
          "name": "Deploying from Git Source",
          "description": "Guide for deploying applications from Git repositories",
          "url": "https://quickstack.dev/docs/managing-apps/01-from-git-source"
        },
        {
          "@type": "WebPage",
          "name": "Deploying from Container Registry",
          "description": "Guide for deploying Docker images from container registries",
          "url": "https://quickstack.dev/docs/managing-apps/02-from-container-registry"
        },
        {
          "@type": "WebPage",
          "name": "Managing Domains",
          "description": "Configure domains and SSL for your applications",
          "url": "https://quickstack.dev/docs/managing-apps/03-domains"
        }
      ]}
    />
    <Layout
      title={`Deploy Apps on any Server`}
      description="QuickStack is a container management system for your own servers. Install QuickStack with a single command and deploy your apps in seconds.">
      <HomepageHeader />
      <main className='space-y-16'>
        <SectionWrapper>
          <KeyFeature />
        </SectionWrapper>

        <SectionWrapper>
          <SetupVideo />
        </SectionWrapper>

        <SectionWrapper>
          <AppScreenshots />
        </SectionWrapper>

        <SectionWrapper className="pb-20">
          <TechnologyHighlight />
        </SectionWrapper>
      </main>
    </Layout>
  </>);
}
