---
title: Configuration reference
description: Adjust language server behavior and IDE integration details.
---

## Workspace settings

```json title="settings.json"
{
  "interlisLsp.server.jarPath": "${workspaceFolder}/server/interlis-lsp-all.jar",
  "interlisLsp.javaPath": "/usr/lib/jvm/java-21-openjdk/bin/java",
  "interlisLsp.modelRepositories": "https://models.local,https://models.remote",
  "interlisLsp.autoShowOutputOnStart": true
}
```

- `interlisLsp.server.jarPath` overrides the bundled language server JAR.
- `interlisLsp.javaPath` points to a custom Java runtime if the bundled runtime is missing.
- `interlisLsp.modelRepositories` defines comma-separated repositories resolved by the model discovery service and completion engine.
- `interlisLsp.autoShowOutputOnStart` shows the INTERLIS output channel when the extension activates.

## CLI helpers

Use the VS Code command line interface to automate validations:

```bash
code --command interlis.compile.run --file ./models/LandUse.ili
```

The command returns JSON output that you can pipe to linting scripts or CI dashboards.
