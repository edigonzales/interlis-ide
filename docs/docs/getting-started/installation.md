---
title: Install INTERLIS IDE
description: Download the ready-to-use desktop application for working with INTERLIS projects.
---

## Download INTERLIS IDE

The INTERLIS IDE is distributed as prebuilt desktop packages on the [GitHub releases page](https://github.com/edigonzales/theia-ide/releases). Each release provides archives for the major operating systems:

- **Linux** – x86_64 and arm64 builds.
- **macOS** – Intel (x86_64) and Apple Silicon (arm64) builds.
- **Windows** – x86_64 build.

1. Download the archive for your platform from the latest release.
2. Extract the downloaded archive into a folder of your choice.
3. Launch the IDE using the platform-specific launcher contained in the extracted folder.

:::tip macOS Gatekeeper
After unzipping `InterlisIDE.app`, remove the quarantine attribute so that macOS can open it:

```bash
xattr -dr com.apple.quarantine InterlisIDE.app
```
:::

## What's included

- The desktop application is based on the open-source [Theia IDE](https://github.com/eclipse-theia/theia-ide) and has been rebranded for INTERLIS workflows.
- The official INTERLIS editor experience comes from the bundled [Visual Studio Code extension](https://marketplace.visualstudio.com/items?itemName=edigonzales.interlis-editor).
- A compatible Java runtime required by the extension is already packaged with the application—no separate JRE installation is needed.
