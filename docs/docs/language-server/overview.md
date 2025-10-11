---
title: Architecture overview
description: Understand how the INTERLIS LSP and VS Code extension collaborate inside INTERLIS IDE.
---

The INTERLIS language tooling is delivered as a monorepo containing the Java Language Server Protocol implementation and the
VS Code client extension. Its layout looks like this:

```text
repo/
├── build.gradle            # Gradle build orchestrating the Java server & tests
├── src/main/java           # LSP implementation (lsp4j based)
├── src/test/java           # Unit & integration tests
├── client/                 # VS Code extension (TypeScript + esbuild)
└── build/                  # Gradle output (fat jar, test reports, etc.)
```

- The Java LSP is packaged as a fat JAR via the `shadowJar` Gradle task.
- The VS Code extension embeds the server JAR and platform-specific JREs so that teams can distribute a single `.vsix` with no
  external dependencies.
- The extension and server communicate over stdio using `vscode-languageclient`.

When the IDE activates the extension it starts the bundled JRE, launches the server process, and establishes the LSP connection
for the current workspace. Diagnostics, completions, and code actions are streamed back to the client over this channel.

## How Theia integrates the LSP

INTERLIS IDE is built on Theia, which shares the same LSP primitives as VS Code. The VS Code extension is therefore a great
reference implementation for other clients:

1. The extension wires up commands, status bar items, and settings schemas.
2. It spawns the server JAR with the right Java binary depending on the current platform.
3. Telemetry and logs are forwarded to the IDE output channel so that operators can monitor compiler behavior.

For deeper debugging instructions see the [developer workflow documentation in the LSP repository](https://github.com/edigonzales/interlis-lsp).
