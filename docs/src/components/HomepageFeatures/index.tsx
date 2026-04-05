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
    title: 'Schnell ins erste Modell',
    description: (
      <>
        Lege ein neues `.ili`-Modell an, speichere es früh und nutze die wichtigsten Hilfen
        direkt aus der Command Palette und aus dem Editor heraus.
      </>
    ),
    cta: {
      label: 'Erstes Modell',
      to: '/docs/getting-started/first-model',
    },
  },
  {
    title: 'Bearbeiten und prüfen',
    description: (
      <>
        Nutze Problems-Ansicht, Vervollständigung, Outline, Navigation und Rename für einen
        flüssigen Modellierungsalltag in VS Code.
      </>
    ),
    cta: {
      label: 'Editorfunktionen',
      to: '/docs/editing/completion-and-snippets',
    },
  },
  {
    title: 'Diagramme und Ausgabe',
    description: (
      <>
        Erzeuge Diagramme, HTML-Vorschauen und DOCX-Ausgaben direkt aus dem Modell und
        verwende sie für Reviews und Weitergabe.
      </>
    ),
    cta: {
      label: 'Zu Diagrammen',
      to: '/docs/diagrams/diagram-editor',
    },
  },
];

function Feature({title, description, cta}: FeatureItem) {
  return (
    <div className={clsx('col col--4', styles.feature)}>
      <div className={styles.featureCard}>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        <Link className="button button--m button--primary" to={cta.to}>
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
