export default {
  "title": "Percona Product Documentation",
  "tagline": "",
  "url": "https://docs.percona.com",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/percona-favicon.ico",
  "organizationName": "percona",
  "projectName": "percona",
  "themeConfig": {
    "navbar": {
      "title": "Percona Product Documentation",
      "logo": {
        "alt": "Percona Logo",
        "src": "https://learn.percona.com/hs-fs/hubfs/Images/Logos/P%20-%20Percona.png"
      },
      "items": [
        {
          "href": "https://github.com/percona",
          "label": "GitHub",
          "position": "right"
        }
      ]
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Community",
          "items": [
            {
              "label": "Twitter",
              "href": "https://twitter.com/percona"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "Blog",
              "to": "https://www.percona.com/blog/"
            },
            {
              "label": "Forum",
              "href": "https://forums.percona.com/"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2021 Percona LLC."
    }
  },
  "presets": [
    [
      "@docusaurus/preset-bootstrap",
      {
        "docs": {
          "sidebarPath": "/Users/paul.jacobs/GitHub/percona-doc-home/sidebars.js",
          "editUrl": "https://github.com/facebook/docusaurus/edit/master/website/"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/facebook/docusaurus/edit/master/website/blog/"
        }
      }
    ]
  ],
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};