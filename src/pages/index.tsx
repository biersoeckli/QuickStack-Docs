import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import { JSX } from 'react';
import KeyFeature from '../components/key-feature';
import SectionWrapper from '../components/sections-wrapper';
import TechnologyHighlight from '../components/technologies';
import Testimonials from '../components/testimonilals';
import { HomepageHeader } from '../components/homepage-headers';
import { AppScreenshots } from '../components/app-screenshots';



export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Deploy Apps on any Server`}
      description="QuickStack is a container management system for your own servers. Install QuickStack with a single command and deploy your apps in seconds.">
      <HomepageHeader />
      <main className='space-y-16'>
        <SectionWrapper>
          <KeyFeature />
        </SectionWrapper>

        <SectionWrapper>
          <AppScreenshots />
        </SectionWrapper>

        <SectionWrapper className="pb-20">
          <TechnologyHighlight />
        </SectionWrapper>
      </main>
    </Layout>
  );
}
