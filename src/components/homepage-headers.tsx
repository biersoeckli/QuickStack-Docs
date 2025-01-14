import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import { JSX } from 'react';
import { MDXProvider } from '@mdx-js/react';
import MDXContent from '@theme/MDXContent';
import KeyFeature from '../components/key-feature';
import SectionWrapper from '../components/sections-wrapper';
import TechnologyHighlight from '../components/technologies';
import Testimonials from '../components/testimonilals';
import useThemeContext, { useThemeConfig } from '@docusaurus/theme-common';
import { useColorMode } from '@docusaurus/theme-common';


function CodeBlock({ language, children }: { language: string; children: string }) {
    return (
      <pre>
        <code className={`language-${language}`}>{children}</code>
      </pre>
    );
  }
  
  export function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    const { colorMode } = useColorMode();
    const isDarkMode = colorMode === 'dark';

    return (
      <header className={clsx('hero min-h-[70vh]', styles.heroBanner)}>
        <div className="container">
  
          <img src={isDarkMode ? '/img/quickstack-icon-light.svg' : '/img/quickstack-icon-dark.svg'} alt="QuickStack Logo" className="w-32" />
  
          <Heading as="h1" className="hero__title">
            The <span style={{
              color: '#25c2a0'
            }}>quick</span> way to <br />deploy your containers
          </Heading>
          <p className="hero__subtitle">Build, run and monitor your apps on any server from a single, easy-to-use UI.</p>
  
          <div className="flex items-center justify-center pb-3">
            <div className='w-fit'>
              <CodeBlock language="bash">curl -sfL https://get.quickstack.dev/setup.sh | sh -</CodeBlock>
            </div>
          </div>
  
          <div className={styles.buttons + ' gap-4'}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro">
              Docs
            </Link>
            <Link
              className="button button--primary button--lg"
              to="https://github.com/biersoeckli/QuickStack">
              GitHub
            </Link>
          </div>
        </div>
      </header>
    );
  }