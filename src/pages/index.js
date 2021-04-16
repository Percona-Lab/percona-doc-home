import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './styles.module.css';

const products = [
    {
      title: 'Percona Monitoring and Management',
      linkUrl: 'https://pmm-doc.netlify.app/',
      imageUrl: 'https://www.percona.com/sites/default/files/pmm-iso-red.png',
      imageClass: [''],
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
        imageClass: [''],
        description: (
            <>
      A fully supported, open source, community backup tool for performing consistent hot backups in MongoDB.
      </>
      ),
    },
    {
        title: 'Percona Distribution for PostgreSQL 11',
        linkUrl: 'https://postgresql-docs.netlify.app/',
        imageUrl: '',
        imageClass: [''],
      description: (
        <>
          The best and most critical enterprise-level components from the open-source community, designed and tested to work together in one single source.
        </>
      ),
    },
    {
        title: 'Another Percona Product',
        linkUrl: '',
        imageUrl: '',
        imageClass: [''],
      description: (
        <>
          Description.
        </>
      ),
    },
    {
        title: 'Another Percona Product',
        linkUrl: '',
        imageUrl: '',
        imageClass: [''],
      description: (
        <>
          Description.
        </>
      ),
    },
    {
        title: 'Another Percona Product',
        linkUrl: '',
        imageUrl: '',
        imageClass: ['logo-item-downloads-software', 'logo-server-home'],
      description: (
        <>
          Description.
        </>
      ),
    },
  ];


function Product({linkUrl, imageUrl, imageClass, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('card', 'sm', 'm-2')}>
        <div class="col-md">
            <div class="card-body">
                <h5 className={classnames('card-title')}>{title}</h5>
                <p className={classnames('card-text')}>{description}</p>
                <a href={linkUrl} class="btn btn-light btn-sm active" role="button" aria-pressed="true">Visit</a>
            </div>
        </div>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Percona products technical documentation"
      >
          {products && products.length > 0 && (
        <div class='container'>
            <div class="row no-gutters">
                {products.map((props, idx) => ( <Product key={idx} {...props} /> ))}
                </div>
            </div>
          )}
    </Layout>
  );
}
