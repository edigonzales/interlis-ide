---
title: Validation pipelines
description: Combine IDE checks with external validators to ensure consistent INTERLIS datasets.
---

## Incremental validation in the IDE

Use the built-in `INTERLIS: Validate current project` command for fast feedback while editing models. The IDE stores validation
artifacts per workspace so you can quickly re-run checks after small edits.

## Batch validation

For production builds, run the language server headless by invoking the `interlis.compile.run` command via the VS Code CLI or by
issuing the JSON-RPC request directly. Capture the returned compiler log and archive it as part of your QA process.

## Integrating ili2c

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet volutpat enim, ac pulvinar odio. Mauris at nunc
sed eros sollicitudin mattis vitae ac lectus.

## Data delivery gates

- Fail pull requests when the browser smoke tests detect missing diagnostics.
- Combine the IDE validation output with schema diff tooling to validate migrations.
- Export DOCX or HTML documentation using the [custom requests](../language-server/commands.md) to share with stakeholders.
