import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <p className={clsx('hero__logo', styles.heroLogo)}>
          <img src={siteConfig.themeConfig.navbar.logo.src} />
        </p>
        <h1 className={clsx('hero__title', styles.heroTitle)}>
          {siteConfig.title}
        </h1>
        <p className={clsx('hero__subtitle', styles.heroSubTitle)}>
          {siteConfig.tagline}
        </p>
        <div className={styles.buttons}>
          <Link
            className={clsx(
              'button button--outline button--secondary button--lg',
              styles.getStarted
            )}
            to="https://studio.crazydan.org/docs/pangu-os/"
          >
            查看文档
          </Link>
        </div>
      </div>
    </header>
  );
}
