---
title: Runtime delivery & packaging
description: Package the language server and ship the VS Code extension with embedded runtimes.
---

The extension bundles both the language server JAR and a trimmed JRE per platform so that teams can run the tooling without
installing Java. The expected folder layout inside the packaged extension is:

```text
client/
  server/
    interlis-lsp-<version>-all.jar
    jre/
      darwin-arm64/
      darwin-x64/
      linux-x64/
      linux-arm64/
      win32-x64/
        bin/java(.exe)
```

To refresh runtimes:

1. Produce a new fat JAR with `./gradlew shadowJar` (output lives in `build/libs/`).
2. Copy platform-specific JREs into `client/server/jre/<platform>/`.
3. Update `client/package.json` version if you plan to publish.
4. Package the extension via:
   ```bash
   cd client
   npm install
   npm run build
   npx vsce package
   ```

For CI packaging see the `build and publish` GitHub Actions workflow in the LSP repository, which automatically runs
`vsce publish` when the `VS_MARKETPLACE_TOKEN` secret is configured.
