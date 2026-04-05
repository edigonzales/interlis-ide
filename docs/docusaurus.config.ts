import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'INTERLIS IDE',
  tagline: 'Arbeitsumgebung für INTERLIS-Modelle mit Prüfung, Navigation und Diagrammen.',
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
          label: 'Dokumentation',
        },
        {
          href: 'https://www.ech.ch/de/ech/ech-0031/2.1.0',
          label: 'INTERLIS-Spezifikation',
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
          title: 'Einstieg',
          items: [
            {
              label: 'Installation',
              to: '/docs/getting-started/installation',
            },
            {
              label: 'Erstes Modell',
              to: '/docs/getting-started/first-model',
            },
          ],
        },
        {
          title: 'Funktionen',
          items: [
            {
              label: 'Modellieren in VS Code',
              to: '/docs/editing/completion-and-snippets',
            },
            {
              label: 'Diagramme und Dokumentation',
              to: '/docs/diagrams/diagram-editor',
            },
          ],
        },
        {
          title: 'Ökosystem',
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
          title: 'Mitwirken',
          items: [
            {
              label: 'Issue melden',
              href: 'https://github.com/edigonzales/interlis-ide/issues',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Mitwirkende an INTERLIS IDE. Erstellt mit Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
