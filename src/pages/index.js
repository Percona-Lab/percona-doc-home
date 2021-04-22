import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Product from '../components/Product';
import styles from './styles.module.css';

/*
 * linkUrl is the subdir as listed in one of the [[redirects]] entries in netlify.toml
 */
const products = [
    {
        title: 'Percona Distribution for MySQL',
        linkUrl: [
            {
                url: '/percona-distribution-for-mysql',
                label: "Learn more",
            },
        ],
        logo: styles.logoServer,
        description: (
            <>
                The most stable, scalable and secure open-source MySQL distribution, with two download options: one based on Percona Server for MySQL and one based on Percona XtraDB Cluster.
            </>
        ),
    },
    {
        title: 'Percona Server for MySQL',
        linkUrl: [
            {
                url: '',
                label: 'Coming soon',
            },
        ],
        logo: styles.logoServer,
        description: (
            <>
                A drop-in replacement for MySQL, with advanced features and functionality.
            </>
        ),
    },
    {
        title: 'Percona XtraDB Cluster',
        linkUrl: [
            {
                url: '',
                label: 'Coming soon',
            },
        ],
        logo: styles.logoXtraDB,
        description: (
            <>
                A high-availability clustering solution based on Percona Server for MySQL.
            </>
        ),
    },
    {
        title: 'Percona XtraBackup',
        linkUrl: [
            {
                url: '',
                label: 'Coming soon',
            }
        ],
        logo: styles.logoXtraBackup,
        description: (
            <>
                A hot backup solution for MySQL.
            </>
        ),
    },
    {
        title: 'Percona Distribution for MongoDB',
        linkUrl: [
            {
                url: '/percona-distribution-for-mongodb',
                label: 'Learn more',
            },
        ],
        logo: styles.logoTokuDB,
        description: (
            <>
                A single high-performance solution for enterprises looking to achieve optimum performance, without the expensive proprietary contract.
            </>
        ),
    },
    {
        title: 'Percona Server for MongoDB',
        linkUrl: [
            {
                url: '/percona-server-for-mongodb-3-6',
                label: 'v3.6',
            },
            {
                url: '/percona-server-for-mongodb-4-0',
                label: 'v4.0',
            },
            {
                url: '/percona-server-for-mongodb-4-2',
                label: 'v4.2',
            },
            {
                url: '/percona-server-for-mongodb-4-4',
                label: 'v4.4',
            }
        ],
        logo: styles.logoTokuDB,
        description: (
            <>
                A drop-in replacement for MongoDB with advanced features and functionality.
            </>
        ),
    },
    {
        title: 'Percona Backup for MongoDB',
        linkUrl: [
            {
                url: '/percona-backup-for-mongodb',
                label: 'Learn more',
            },
        ],
        imageUrl: 'https://www.percona.com/sites/default/files/backup-mongo.jpg',
        description: (
            <>
                A fully supported, open source, community backup tool for performing consistent hot backups in MongoDB.
            </>
        ),
    },
    {
        title: 'Percona Distribution for PostgreSQL',
        linkUrl: [
            {
                url: '/percona-distribution-for-postgresql',
                label: 'Learn more',
            },
        ],
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
        linkUrl: [
            {
                url: '/percona-monitoring-and-management',
                label: 'Learn more'
            },
        ],
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
        linkUrl: [
            {
                url: '',
                label: 'Coming soon',
            },
        ],
        imageUrl: 'https://www.percona.com/sites/default/files/kubernetes-operators.png',
        imageWidth: '260px',
        description: (
            <>
            </>
        ),
    },
    {
        title: 'Percona Toolkit',
        linkUrl: [
            {
                url: '',
                label: 'Coming soon',
            },
        ],
        logo: styles.logoToolkit,
        description: (
            <>
            </>
        ),
    },
    {
        title: 'Percona Monitoring Plugins',
        linkUrl: [
            {
                url: '',
                label: 'Coming soon',
            },
        ],
        imageUrl: 'https://www.percona.com/sites/default/files/pmm-iso-red.png',
        imageWidth: '150px',
        description: (
            <>
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
                {products.map((props, idx) => (<Product key={idx} {...props} />))}
            </div>
        </Layout>
    );
};

export default Home;
