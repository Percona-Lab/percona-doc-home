import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './styles.module.css';

const features = [
  {
    title: 'Percona Monitoring and Management',
    linkUrl: 'https://pmm-doc.netlify.app/',
    imageUrl: 'https://www.percona.com/sites/default/files/pmm-iso-red.png',
    description: (
      <>
        Platform for monitoring and managing MySQL and MongoDB performance.
      </>
    ),
  },
  {
    title: 'Percona Backup for MongoDB',
    linkUrl: 'https://percona-backup-mongodb.netlify.app/',
    imageUrl: 'https://www.percona.com/sites/default/files/backup-mongo.jpg',
    description: (
      <>
        A fully supported, open source, community backup tool for performing consistent hot backups in MongoDB..
      </>
    ),
  }
];

function Feature({linkUrl, imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
      <div className={classnames('col col--4', styles.feature)}>
        <a href={linkUrl}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
    </a>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <div className={styles.hero}>
{/*         <header>
          <h1>{siteConfig.title}</h1>
          <p>{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link to={useBaseUrl('docs/')}>Get Started</Link>
          </div>
        </header>
*/}
        <main>
          {features && features.length > 0 && (
            <section className={styles.section}>
              <div className={styles.features}>
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </section>
          )}
        </main>
      </div>
    </Layout>
  );
}
