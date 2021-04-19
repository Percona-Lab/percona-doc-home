import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './styles.module.css';

const products = [

    {
        title: 'Percona Distribution for MySQL',
        linkUrl: 'https://pdmysql-docs.netlify.app/',
        imageUrl: '',
        imageClass: [''],
      description: (
        <>
          The most stable, scalable and secure open-source MySQL distribution, with two download options: one based on Percona Server for MySQL and one based on Percona XtraDB Cluster.
        </>
      ),
    },

    {
        title: 'Percona Server for MySQL',
        linkUrl: '',
        imageUrl: '',
        imageClass: [''],
      description: (
        <>
          A drop-in replacement for MySQL, with advanced features and functionality.
        </>
      ),
    },

    {
        title: 'Percona XtraDB Cluster',
        linkUrl: '',
        imageUrl: '',
        imageClass: [''],
      description: (
        <>
          A high-availability clustering solution based on Percona Server for MySQL.
        </>
      ),
    },

    {
        title: 'Percona XtraBackup',
        linkUrl: '',
        imageUrl: '',
        imageClass: [''],
      description: (
        <>
          A hot backup solution for MySQL.
        </>
      ),
    },

    {
        title: 'Percona Distribution for MongoDB',
        linkUrl: 'https://distmongo-docs.netlify.app/',
        imageUrl: '',
        imageClass: [''],
      description: (
        <>
          A single high-performance solution for enterprises looking to achieve optimum performance, without the expensive proprietary contract.
        </>
      ),
    },

    {
        title: 'Percona Server for MongoDB',
        linkUrl: 'https://psmdb-docs.netlify.app/',
        imageUrl: '',
        imageClass: [''],
      description: (
        <>
          A drop-in replacement for MongoDB with advanced features and functionality.
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
        title: 'Percona Distribution for PostgreSQL',
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
        title: 'Percona Kubernetes Operators',
        linkUrl: '',
        imageUrl: '',
        imageClass: [],
      description: (
        <>
          Coming soon.
        </>
      ),
    },


    {
        title: 'Percona Toolkit',
        linkUrl: '',
        imageUrl: '',
        imageClass: [],
      description: (
        <>
          Coming soon.
        </>
      ),
    },


    {
        title: 'Percona Monitoring Plugins',
        linkUrl: '',
        imageUrl: '',
        imageClass: [],
      description: (
        <>
          Coming soon.
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
                {linkUrl && (
                    <a href={linkUrl} class="btn btn-light btn-sm active" role="button" aria-pressed="true">Visit</a>
                )
                }
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
