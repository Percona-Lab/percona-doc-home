/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Percona Product Documentation',
  tagline: '',
  url: 'https://docs.percona.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/percona-favicon.ico',
  organizationName: 'percona', // Usually your GitHub org/user name.
  projectName: 'percona', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Percona Product Documentation',
      logo: {
        alt: 'Percona Logo',
        src: 'https://learn.percona.com/hs-fs/hubfs/Images/Logos/P%20-%20Percona.png'
      },
      items: [
 //       {
 //         to: 'docs/',
 //         activeBasePath: 'docs',
 //         label: 'Docs',
 //         position: 'left',
 //       },
        {
          href: 'https://github.com/percona',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/percona',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'https://www.percona.com/blog/',
            },
            {
              label: 'Forum',
              href: 'https://forums.percona.com/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Percona LLC.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-bootstrap',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
      },
    ],
  ],
};
