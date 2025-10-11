---
title: Project setup walkthrough
description: Import INTERLIS models, configure the workspace, and activate language features.
---

## Create a workspace

1. Launch INTERLIS IDE or VS Code with the INTERLIS extension installed.
2. Create a folder for your project and add an `.ili` model file.
3. Add the folder to your workspace. The IDE automatically detects INTERLIS files and prompts you to enable the language server.

## Configure the language server

```json title=".interlisrc"
{
  "languageServer": {
    "javaHome": "/usr/lib/jvm/java-21-openjdk",
    "diagnostics": {
      "enableValidation": true,
      "maxProblems": 100
    }
  }
}
```

- `javaHome` points to the runtime used to launch the LSP process.
- `diagnostics.enableValidation` toggles semantic validation.
- `diagnostics.maxProblems` limits the number of diagnostics per file to keep the UI responsive.

## Index your models

Once the configuration file is saved the IDE:

1. Spawns the Java LSP using [LSP4J](https://projects.eclipse.org/projects/technology.lsp4j).
2. Sends a `workspace/didChangeConfiguration` notification.
3. Indexes your INTERLIS models to provide definitions, references, and completions.

You can inspect indexing progress in the **INTERLIS Language Server** output channel.

## Run validation

Trigger a validation run with the command palette:

```
INTERLIS: Validate current project
```

Validation results appear inline and in the **Problems** panel. Open a diagnostic to navigate directly to the invalid element.

## Next steps

- Learn how the diagnostics, outline, and hover providers work in the
  [Editor experience guide](../guides/editor-experience.md).
- Explore batch validation workflows in [Validation pipelines](../guides/validation-workflows.md).
