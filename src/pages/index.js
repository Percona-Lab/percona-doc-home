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
        A fully supported, open source, community backup tool for performing consistent hot backups in MongoDB.
      </>
    ),
  },
  {
    title: 'Another Percona Product',
    linkUrl: 'https://percona-backup-mongodb.netlify.app/',
    imageUrl: 'https://www.percona.com/sites/default/files/backup-mongo.jpg',
    description: (
      <>
        Description.
      </>
    ),
  }
];

function Product({linkUrl, imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
      <div className={classnames('card', styles.product)}>
      {imgUrl && (<img className={classnames('card-img-top', styles.productImage)} src={imgUrl} alt={title} />)}
        <div class="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={linkUrl} class="btn btn-primary">Select</a>
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
              <div class="d-flex flex-wrap">
                {products.map((props, idx) => ( <Product key={idx} {...props} /> ))}
                 </div>
          )}
    </Layout>
  );
}
