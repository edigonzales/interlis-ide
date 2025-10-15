---
title: Configuration reference
description: Adjust language server behavior and IDE integration details.
---

## Workspace settings

```json title="settings.json"
{
  "interlisLsp.server.jarPath": "${workspaceFolder}/server/interlis-lsp-all.jar",
  "interlisLsp.server.javaHome": "/usr/lib/jvm/java-21-openjdk",
  "interlisLsp.diagnostics.maxProblems": 200,
  "interlisLsp.trace.server": "verbose"
}
```

- `interlisLsp.server.jarPath` overrides the server location when developing locally.
- `interlisLsp.server.javaHome` forces a specific runtime (useful on systems with multiple JDKs).
- `interlisLsp.diagnostics.maxProblems` mirrors the `.interlisrc` option showcased in the [project setup walkthrough](../getting-started/project-setup.md).
- `interlisLsp.trace.server` is handy when debugging handshake issues with the Java process.

## Environment variables

| Variable | Purpose |
| --- | --- |
| `INTERLIS_LSP_OPTS` | Extra JVM flags passed to the server process.
| `INTERLIS_IDE_DISABLE_DIAGRAMS` | Skip UML/PlantUML generation when running in headless environments.

## CLI helpers

Use the VS Code command line interface to automate validations:

```bash
code --command interlis.compile.run --file ./models/LandUse.ili
```

The command returns JSON output that you can pipe to linting scripts or CI dashboards.
