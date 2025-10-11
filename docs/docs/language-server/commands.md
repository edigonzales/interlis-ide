---
title: Commands and custom requests
description: Automate validation, documentation exports, and diagram generation through LSP commands.
---

Workspace commands advertised during initialization:

| Command ID | VS Code command | Description |
| --- | --- | --- |
| `interlis.compile` | `interlis.compile.run` | Compile the current file, publish diagnostics, and return compiler logs. |
| `interlis.uml` | `interlis.uml.show` | Compile & render a Mermaid UML diagram as HTML. |
| `interlis.uml.plant` | `interlis.uml.plant.show` | Compile & render PlantUML as HTML. |

Custom JSON-RPC requests handled with `@JsonRequest` annotations:

| Request | VS Code caller | Description |
| --- | --- | --- |
| `interlis/exportDocx` | `interlis.docx.export` | Returns a Base64 DOCX payload derived from the compiled model. |
| `interlis/exportHtml` | `interlis.html.show` | Returns rendered HTML documentation for previews. |

Server-to-client notifications used by the extension:

| Notification | Payload | Purpose |
| --- | --- | --- |
| `interlis/clearLog` | none | Clear the shared output channel before new compiler runs. |
| `interlis/log` | `{ text: string }` | Stream ili2c logs into the IDE output view. |

When building custom clients, reuse the command IDs listed above so downstream tooling stays compatible with the official VS Code extension.
