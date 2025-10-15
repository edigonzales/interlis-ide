import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <div className={styles.heroCopy}>
          <h1 className={styles.heroTitle}>
            INTERLIS <span className={styles.heroTitleAccent}>IDE</span>
          </h1>
          <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
          <div className={styles.heroActions}>
            <Link className="button button--primary button--lg" to="https://github.com/edigonzales/theia-ide/">
              Download
            </Link>
            <Link className="button button--outline button--lg" to="/docs/intro">
              Start modeling
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function PreviewShowcase(): ReactNode {
  return (
    <section className={styles.previewSection}>
      <div className="container">
        <img
          // className={styles.previewImage}
          src="/img/preview.gif"
          alt="Animated preview of the INTERLIS IDE documentation navigation"
        />
      </div>
    </section>
  );
}

function InformationStripes(): ReactNode {
  return (
    <section className={styles.languageSection}>
      <div className="container">
        <h2>Purpose-built for the INTERLIS data language</h2>
        <p>
          INTERLIS IDE streamlines schema modeling, validation, and documentation tasks across desktop platforms. The
          Java-based language server powers smart authoring tools while the IDE keeps teams productive with familiar editor
          ergonomics.
        </p>
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
        <PreviewShowcase />
        <InformationStripes />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
