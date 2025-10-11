import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Welcome',
      collapsed: false,
      items: ['intro'],
    },
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/installation',
        'getting-started/project-setup',
        'getting-started/quick-tour',
      ],
    },
    {
      type: 'category',
      label: 'Language Server',
      items: [
        'language-server/overview',
        'language-server/capabilities',
        'language-server/commands',
        'language-server/runtime-delivery',
      ],
    },
    {
      type: 'category',
      label: 'IDE Guides',
      items: [
        'guides/editor-experience',
        'guides/validation-workflows',
        'guides/extensibility',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        'reference/configuration',
        'reference/troubleshooting',
      ],
    },
    {
      type: 'category',
      label: 'Community',
      items: ['community/roadmap'],
    },
  ],
};

export default sidebars;
