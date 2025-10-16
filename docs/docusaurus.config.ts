import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'INTERLIS IDE',
  tagline: 'A dedicated workspace for modeling data with INTERLIS.',
  favicon: 'img/ililogo1024.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://edigonzales.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/interlis-ide',
  //baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'interlis', // Usually your GitHub org/user name.
  projectName: 'interlis-ide', // Usually your repo name.

  onBrokenLinks: 'throw',
  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/edigonzales/interlis-ide/tree/master/docs/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/interlis-ide-hero.svg',
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'INTERLIS IDE',
      logo: {
        alt: 'INTERLIS IDE logo',
        src: 'img/ililogo1024.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://www.ech.ch/de/ech/ech-0031/2.1.0',
          label: 'INTERLIS Specification',
          position: 'right',
        },
        {
          href: 'https://interlis.ch',
          label: 'interlis.ch',
          position: 'right',
        },
        {
          href: 'https://github.com/edigonzales/interlis-ide',
          'aria-label': 'GitHub',
          className: 'navbar__icon navbar__github',
          position: 'right',
          html: '<i class="fa fa-github"></i>',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learn',
          items: [
            {
              label: 'Installation',
              to: '/docs/getting-started/installation',
            },
            {
              label: 'Editor',
              to: '/docs/guides/editor-experience',
            },
          ],
        },
        {
          title: 'Ecosystem',
          items: [
            {
              label: 'INTERLIS IDE',
              href: 'https://github.com/edigonzales/interlis-ide',
            },            
            {
              label: 'INTERLIS Language Server',
              href: 'https://github.com/edigonzales/interlis-lsp',
            },
            {
              label: 'VS Code Extension',
              href: 'https://marketplace.visualstudio.com/items?itemName=edigonzales.interlis',
            },            
            {
              label: 'INTERLIS MCP',
              href: 'https://github.com/edigonzales/interlis-mcp',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Report an issue',
              href: 'https://github.com/edigonzales/interlis-ide/issues',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} INTERLIS IDE contributors. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
