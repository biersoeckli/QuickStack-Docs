import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import { JSX } from 'react';
import KeyFeature from '../components/key-feature';
import SectionWrapper from '../components/sections-wrapper';
import TechnologyHighlight from '../components/technologies';
import Testimonials from '../components/testimonilals';
import { HomepageHeader } from '../components/homepage-headers';



export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="QuickStack is a container management system for your own servers.">
      <HomepageHeader />
      <main>
        <SectionWrapper>
          <KeyFeature />
        </SectionWrapper>

        <SectionWrapper className="pb-20">
          <TechnologyHighlight />
        </SectionWrapper>
      </main>
    </Layout>
  );
}
