import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import { useColorMode } from '@docusaurus/theme-common';
import { useWindowSize } from '@docusaurus/theme-common';
import CodeBlock from '@theme/CodeBlock';

export function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const { colorMode } = useColorMode();
  const windowSize = useWindowSize();
  const isDarkMode = colorMode === 'dark';

  return (
    <header className={clsx('hero min-h-[70vh]', styles.heroBanner)}>
      <div className="container">

        <img src={isDarkMode ? '/img/quickstack-icon-light.svg' : '/img/quickstack-icon-dark.svg'} alt="QuickStack Logo" className="w-32" />

        <Heading as="h1" className="hero__title text-4xl leading-tight md:leading-snug md:text-5xl lg:text-6xl">
          The <span style={{
            color: '#25c2a0'
          }}>quick</span> way to <br />deploy your applications
        </Heading>
        <p className="hero__subtitle text-xl md:text-2xl md:py-2 lg:py-6">
          Build, run and monitor your apps on any server from a single, easy-to-use UI.
        </p>

        {windowSize !== 'mobile' ? <div className="flex items-center justify-center pb-3">
          <div className='w-fit'>
            <CodeBlock language="bash">curl -sfL https://get.quickstack.dev/setup.sh | sh -</CodeBlock>
            <div className='-mt-3 pb-4 text-xs lg:text-sm text-slate-400'>Paste this into the terminal on a fresh server. <br /><span className='text-xs'>Min: 2 CPU, 4 GB RAM, 40 GB disk.</span></div>
          </div>
        </div> : <></>}

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