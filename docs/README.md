# INTERLIS IDE documentation

This directory hosts the Docusaurus site for the INTERLIS IDE. It mirrors the structure of the IDE documentation with custom
branding and navigation tuned for INTERLIS workflows.

## Requirements

- **Node.js 20+** – the site uses modern ESM dependencies that require the latest LTS release.
- **npm** (bundled with Node) – used to install dependencies and run scripts.
- **Git** – clone this repository and manage documentation changes.
- **Optional: Java 17+** – needed only when you also want to run the INTERLIS language server locally while testing workflows.

Install dependencies once per clone:

```bash
cd docs
npm install
```

The command pulls Docusaurus and supporting packages defined in `package.json`.

## Local development

```bash
npm run start
```

This launches Docusaurus in development mode at `http://localhost:3000`. The server rebuilds pages on save.

## Build the static site

```bash
npm run build
```

The generated site lives in the `build/` directory. Serve it locally with `npm run serve` or any static web host.

## Testing and quality gates

Run the shared TypeScript typecheck for the custom React pages and configuration files:

```bash
npm run test
```

## Updating Docusaurus

To scaffold additional pages or upgrade dependencies, use the official CLI:

```bash
npx docusaurus generate docs <template-name>
```

Refer to [docusaurus.io/docs](https://docusaurus.io/docs) for configuration options and theme customization guides.
