---
title: Install INTERLIS IDE
description: Prepare your environment, install the IDE, and get the documentation site running locally.
---

## System requirements

- **Node.js 20 or newer** – required for building the documentation site and running automation scripts.
- **Java 17 or newer** – the INTERLIS language server is written with [LSP4J](https://projects.eclipse.org/projects/technology.lsp4j) and
  relies on a modern JDK runtime.
- **Git** – clone the repositories and manage workspace updates.
- **An INTERLIS-aware editor** – the official INTERLIS IDE or VS Code with the INTERLIS extension.

:::tip
When working inside a container or CI runner, ensure the Java runtime is on the `PATH` before starting the language server. The
VS Code extension launches the Java process automatically, but the binaries must be available.
:::

## Install the IDE tooling

1. Clone the IDE repository:
   ```bash
   git clone https://github.com/eclipse-theia/theia-ide.git
   cd theia-ide
   ```
2. Retrieve the INTERLIS LSP packages and VS Code extension from the
   [interlis-lsp monorepo](https://github.com/edigonzales/interlis-lsp).
3. Install dependencies with Yarn or npm depending on your workflow. For a quick prototype you can run:
   ```bash
   yarn
   yarn start
   ```
   This launches a Theia workspace with the INTERLIS extensions loaded.

## Install the documentation site

The documentation lives in the `/docs` directory of this repository. To install it locally:

```bash
cd docs
npm install
```

You can now run the site in watch mode using `npm run start` or generate production assets using `npm run build`.

## Next steps

- Follow the [project setup walkthrough](project-setup.md) to create or import an INTERLIS project.
- Read the [language server overview](../language-server/overview.md) to understand the architecture that powers code intelligence.
