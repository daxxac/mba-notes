import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "IMBA Notes | MBA Study Materials & Business Education",
  tagline: 'Comprehensive MBA study materials: Finance, Management, Marketing, Operations & more. Free business education resources.',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://mba.daxxac.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'daxxac', // Usually your GitHub org/user name.
  projectName: 'mba-notes', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // SEO and metadata configuration
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'description',
        content: 'Comprehensive MBA study materials covering Finance, Management, Marketing, Operations, and more. Free business education resources from International MBA program.',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'keywords',
        content: 'MBA, business education, finance, management, marketing, operations, study materials, business school, MBA notes, corporate finance, game theory, negotiations',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'author',
        content: 'Daria Baklanova (daxxac)',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'robots',
        content: 'index, follow',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:type',
        content: 'website',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:site_name',
        content: "IMBA Notes",
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:locale',
        content: 'en_US',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'twitter:creator',
        content: '@daxxac',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'canonical',
        href: 'https://mba.daxxac.dev',
      },
    },
  ],

  // Structured data will be added via custom components or plugins

  markdown: {
    mermaid: true,
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/daxxac/mba-notes/tree/main/',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        // Blog removed for minimalistic approach
        theme: {
          customCss: './src/css/custom.css',
        },
        // SEO plugins
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      } satisfies Preset.Options,
    ],
  ],

  // Sitemap plugin is already included in the classic preset

  themes: [
    [
      require.resolve('@docusaurus/theme-mermaid'),
      {
        mermaidOptions: {
          theme: 'neutral',
          startOnLoad: true,
          securityLevel: 'loose',
          flowchart: {
            useMaxWidth: true,
            htmlLabels: true,
          },
        },
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    metadata: [
      {
        name: 'google-site-verification',
        content: 'your-google-verification-code', // Add your Google Search Console verification code
      },
      {
        name: 'msvalidate.01',
        content: 'your-bing-verification-code', // Add your Bing Webmaster Tools verification code
      },
    ],
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    // Enhanced SEO configuration
    // algolia: {
    //   If you want to add Algolia search later, uncomment and configure:
    //   appId: 'your-app-id',
    //   apiKey: 'your-search-only-api-key',
    //   indexName: 'your-index-name',
    // },
    // Social sharing optimization
    announcementBar: {
      id: 'support_us',
      content:
        '⭐️ If you like these MBA study materials, please consider sharing them with fellow students!',
      backgroundColor: '#2E8555',
      textColor: '#ffffff',
      isCloseable: true,
    },
    navbar: {
      title: "IMBA Notes",
      logo: {
        alt: "IMBA Notes Logo",
        src: 'img/dark.webp',
        srcDark: 'img/light.webp',
        style: {
          maxHeight: '24px',
          verticalAlign: 'middle',
        },
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Notes',
        },
        {
          href: 'https://github.com/daxxac/mba-notes',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Study Materials',
          items: [
            {
              label: 'Notes',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Connect',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/daxxac/mba-notes',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} by <a href="https://daxxac.dev" target="_blank" rel="noopener noreferrer">daxxac</a> | Daria Baklanova. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
