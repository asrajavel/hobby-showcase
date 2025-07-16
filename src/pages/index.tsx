import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Explore My Hobbies 🎨
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="A personal showcase of hobbies, passions, and creative pursuits. Explore photography, cooking, coding, and more.">
      <HomepageHeader />
      <main>
        <div className="container" style={{padding: '4rem 0', textAlign: 'center'}}>
          <Heading as="h2" style={{marginBottom: '2rem'}}>
            My Hobbies
          </Heading>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '2rem'}}>
            <Link to="/docs/hobbies/photography" className="card" style={{padding: '1.5rem', textAlign: 'center', textDecoration: 'none'}}>
              <Heading as="h3">📸 Photography</Heading>
              <p>Capturing life's beautiful moments through the lens</p>
            </Link>
            <Link to="/docs/hobbies/cooking" className="card" style={{padding: '1.5rem', textAlign: 'center', textDecoration: 'none'}}>
              <Heading as="h3">👨‍🍳 Cooking</Heading>
              <p>Exploring flavors from around the world</p>
            </Link>
            <Link to="/docs/hobbies/coding" className="card" style={{padding: '1.5rem', textAlign: 'center', textDecoration: 'none'}}>
              <Heading as="h3">💻 Coding</Heading>
              <p>Building things that make a difference</p>
            </Link>
            <Link to="/docs/hobbies/gardening" className="card" style={{padding: '1.5rem', textAlign: 'center', textDecoration: 'none'}}>
              <Heading as="h3">🌱 Gardening</Heading>
              <p>Growing plants and connecting with nature</p>
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}
