import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Welcome to Dasha's IMBA Notes
        </Heading>
        <p className="hero__subtitle">
          Comprehensive study materials and insights from International MBA program
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Explore Notes 📚
          </Link>
        </div>
      </div>
    </header>
  );
}

function SimpleFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <div className="text--center padding-horiz--md">
              <h2>Study Smart, Not Hard</h2>
              <p>
                Organized notes, visual diagrams, and interactive practice tools 
                to help you excel in your MBA journey. From cross-cultural negotiations 
                to strategic management - everything you need in one place.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Dasha's IMBA Notes"
      description="Comprehensive study materials and insights from International MBA program">
      <HomepageHeader />
      <main>
        <SimpleFeatures />
      </main>
    </Layout>
  );
}
