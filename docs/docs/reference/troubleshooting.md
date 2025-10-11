---
title: Troubleshooting guide
description: Resolve common issues when running the INTERLIS IDE stack.
---

## Language server does not start

- Verify that `java --version` prints a Java 17+ runtime.
- Check the output channel for `interlis/log` notifications—missing models are often reported there.
- Enable verbose tracing by setting `"interlisLsp.trace.server": "verbose"` in your workspace settings.

## Validation results look stale

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam molestie lacinia justo sed viverra. Integer at risus vitae augue
malesuada tincidunt.

## Diagram generation fails

- Ensure PlantUML or Mermaid support is available in your deployment environment.
- Confirm the workspace has write access to the temporary directory used to render diagrams.
- Retry after clearing caches via the command palette: `INTERLIS: Reset language server`.

## Need more help?

Open an issue on the [INTERLIS IDE GitHub tracker](https://github.com/eclipse-theia/theia-ide/issues) or join the community spaces
linked in the footer of this site.
