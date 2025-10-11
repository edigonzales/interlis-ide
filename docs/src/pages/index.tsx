import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroCopy}>
            <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
            <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
            <div className={styles.heroActions}>
              <Link className="button button--secondary button--lg" to="/docs/getting-started/installation">
                Download
              </Link>
              <Link className="button button--outline button--lg" to="/docs/language-server/overview">
                Start modeling
              </Link>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <img src="/img/interlis-ide-hero.svg" alt="INTERLIS IDE abstract editor illustration" />
          </div>
        </div>
      </div>
    </header>
  );
}

function InformationStripes(): ReactNode {
  return (
    <section className={styles.infoStripes}>
      <div className="container">
        <div className={styles.infoGrid}>
          <div>
            <h2>Purpose-built for the INTERLIS geolanguage</h2>
            <p>
              INTERLIS IDE streamlines schema modeling, validation, and documentation tasks across desktop platforms. The
              Java-based language server powers smart authoring tools while the IDE keeps teams productive with familiar editor
              ergonomics.
            </p>
          </div>
          <div>
            <h2>Documentation map</h2>
            <ul className={styles.infoList}>
              <li>
                <Link to="/docs/getting-started/installation">Install the IDE and docs toolchain</Link>
              </li>
              <li>
                <Link to="/docs/guides/editor-experience">Master the editor experience</Link>
              </li>
              <li>
                <Link to="/docs/language-server/capabilities">Review language server capabilities</Link>
              </li>
              <li>
                <Link to="/docs/reference/configuration">Configure and automate deployments</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description="Documentation hub for the INTERLIS IDE and language tooling.">
      <HomepageHeader />
      <main>
        <InformationStripes />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
