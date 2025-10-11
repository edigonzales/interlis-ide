---
title: Editor experience
description: Leverage completions, diagnostics, and navigation tailored for INTERLIS modeling.
---

## Completions

The completion provider triggers on `.` and `:` to suggest domains, classes, and attributes based on the compiled model. Items show
rich metadata such as documentation comments and originating model files.

- Start typing a topic alias followed by `.` to scope suggestions to that namespace.
- Use `Ctrl+Space` to re-trigger completions when editing existing declarations.

## Diagnostics

Whenever you save or open a file, the LSP compiles the model with ili2c and reports structural errors, naming conflicts, and
validation issues. Diagnostics stream into the **Problems** panel and appear inline.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt turpis a nibh pellentesque, ut dignissim est ultrices.

## Navigation

- **Go to definition** resolves across referenced models and opens the correct file even when it lives in the workspace cache.
- **Find references** aggregates usages across topics so you can assess impact before refactoring.
- **Document symbols** populate the outline view, grouping entities by topic.

## Formatting

Use `Shift+Alt+F` (or your editor shortcut) to run the ili2c pretty-printer. On-type formatting inserts alignment whitespace after `=`
and keeps enumerations tidy.

## Refactoring

Rename declarations with `F2` to update references across all dependent models. The rename provider validates your input against
INTERLIS naming rules before applying the edit.
