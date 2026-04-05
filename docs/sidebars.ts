import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Start',
      collapsed: false,
      items: ['intro'],
    },
    {
      type: 'category',
      label: 'Erste Schritte',
      collapsed: false,
      items: [
        'getting-started/installation',
        'getting-started/first-model',
        'getting-started/quick-tour',
      ],
    },
    {
      type: 'category',
      label: 'Modellieren in VS Code',
      items: [
        'editing/validation-and-problems',
        'editing/completion-and-snippets',
        'editing/formatting',
        'editing/navigation-and-rename',
        'editing/imports-and-repositories',
      ],
    },
    {
      type: 'category',
      label: 'Diagramme und Dokumentation',
      items: [
        'diagrams/diagram-editor',
        'diagrams/uml-previews',
        'diagrams/documentation-output',
      ],
    },
    {
      type: 'category',
      label: 'Referenz',
      items: [
        'reference/commands',
        'reference/settings',
        'reference/limits-and-behavior',
        'reference/troubleshooting',
      ],
    },
  ],
};

export default sidebars;
