import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Product from '../components/Product';
import styles from './styles.module.css';

const products = [
  {
    title: 'Percona Distribution for MySQL',
    linkUrl: 'https://pdmysql-docs.netlify.app/',
    logo: styles.logoServer,
    description: (
      <>
        The most stable, scalable and secure open-source MySQL distribution, with two download options: one based on Percona Server for MySQL and one based on Percona XtraDB Cluster.
      </>
    ),
  },
  {
    title: 'Percona Server for MySQL',
    linkUrl: '',
    logo: styles.logoServer,
    description: (
      <>
        A drop-in replacement for MySQL, with advanced features and functionality.
      </>
    ),
  },
  {
    title: 'Percona XtraDB Cluster',
    linkUrl: '',
    logo: styles.logoXtraDB,
    description: (
      <>
        A high-availability clustering solution based on Percona Server for MySQL.
      </>
    ),
  },
  {
    title: 'Percona XtraBackup',
    linkUrl: '',
    logo: styles.logoXtraBackup,
    description: (
      <>
        A hot backup solution for MySQL.
      </>
    ),
  },
  {
    title: 'Percona Distribution for MongoDB',
    linkUrl: 'https://distmongo-docs.netlify.app/',
    logo: styles.logoTokuDB,
    description: (
      <>
        A single high-performance solution for enterprises looking to achieve optimum performance, without the expensive proprietary contract.
      </>
    ),
  },
  {
    title: 'Percona Server for MongoDB',
    linkUrl: 'https://psmdb-docs.netlify.app/',
    logo: styles.logoTokuDB,
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
    description: (
      <>
        A fully supported, open source, community backup tool for performing consistent hot backups in MongoDB.
      </>
    ),
  },
  {
    title: 'Percona Distribution for PostgreSQL',
    linkUrl: 'https://postgresql-docs.netlify.app/',
    imageUrl: 'https://www.percona.com/sites/default/files/postgre-logo.jpg',
    imageWidth: '210px',
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
    imageWidth: '150px',
    description: (
        <>
    Platform for monitoring and managing MySQL and MongoDB performance.
    </>
    ),
  },
  {
    title: 'Percona Kubernetes Operators',
    linkUrl: '',
    imageUrl: 'https://www.percona.com/sites/default/files/kubernetes-operators.png',
    imageWidth: '260px',
    description: (
      <>
        Coming soon.
      </>
    ),
  },
  {
    title: 'Percona Toolkit',
    linkUrl: '',
    logo: styles.logoToolkit,
    description: (
      <>
        Coming soon.
      </>
    ),
  },
  {
    title: 'Percona Monitoring Plugins',
    linkUrl: '',
    imageUrl: 'https://www.percona.com/sites/default/files/pmm-iso-red.png',
    imageWidth: '150px',
    description: (
      <>
        Coming soon.
      </>
    ),
  },
];

const Home = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Percona products technical documentation"
    >
      <div className={styles.container}>
        {products.map((props, idx) => ( <Product key={idx} {...props} /> ))}
      </div>
    </Layout>
  );
};

export default Home;
