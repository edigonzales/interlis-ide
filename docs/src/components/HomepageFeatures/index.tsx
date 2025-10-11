import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';

import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
  cta: {label: string; to: string};
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Model-centric workflows',
    description: (
      <>
        Bring your INTERLIS models, reference datasets, and validation rules into a single workspace. Launch compile and export
        commands from the command palette or reuse them in CI pipelines.
      </>
    ),
    cta: {
      label: 'Start modeling',
      to: '/docs/getting-started/project-setup',
    },
  },
  {
    title: 'Language intelligence',
    description: (
      <>
        The Java LSP delivers completions, navigation, and formatting powered by ili2c. Tailor diagnostics and rename workflows
        to your organization&apos;s conventions.
      </>
    ),
    cta: {
      label: 'Review capabilities',
      to: '/docs/language-server/capabilities',
    },
  },
  {
    title: 'Open ecosystem',
    description: (
      <>
        Extend the IDE with validation automations, export pipelines, or custom HTML renderers. Collaborate through GitHub and
        share improvements with the community.
      </>
    ),
    cta: {
      label: 'Contribute ideas',
      to: '/docs/community/roadmap',
    },
  },
];

function Feature({title, description, cta}: FeatureItem) {
  return (
    <div className={clsx('col col--4', styles.feature)}>
      <div className={styles.featureCard}>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        <Link className="button button--sm button--primary" to={cta.to}>
          {cta.label}
        </Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((feature, idx) => (
            <Feature key={idx} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
