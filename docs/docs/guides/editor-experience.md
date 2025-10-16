---
title: Editor experience
description: Explore diagnostics, completions, navigation, formatting, and export capabilities for INTERLIS modeling.
---

## Validation with diagnostics
The server compiles INTERLIS models on open and save, converts ili2c messages to LSP diagnostics, and streams the compiler log to the client output channel for quick feedback.

## Smart completions
Context-aware proposals for IMPORTS, dotted type references, and model names are built from the live compilation result and discovered repositories.

## Go to definition
Jump to definitions inside the current workspace or linked model files based on the compiled transfer description.

## Symbol rename
Rename models, topics, classes, structures, and associations while updating matching references across files.

## Document symbols
Browse topics, classes, associations, domains, and attributes via the VS Code outline populated from the INTERLIS AST.

## Formatting & pretty print
Format whole documents with ili2c’s pretty printer and on-type helpers.

## On-type templates
Typing `=` after model, topic, class, or structure headers injects boilerplate blocks, meta-attributes, and matching `END` statements while restoring the caret.

## Cached compilation
Results are cached between document events for responsive completions and navigation.

## Diagram generation
Generate Mermaid or PlantUML class diagrams from the compiled model and display them in the editor.

## HTML & DOCX exports
Render human-readable documentation (including custom titles) as HTML or export styled Word documents.

## VS Code client experience

### Activation on INTERLIS files
The extension activates for `.ili` files and contributes a TextMate grammar and language configuration for syntax highlighting and editor defaults.

### Bundled runtime
Ships with a self-contained fat JAR and optional platform-specific JRE; paths can be overridden via settings.

### Commands palette
Run "Compile current file", "Show UML class diagram", "Show PlantUML class diagram", "Show documentation as HTML", and "Export documentation as DOCX" directly from VS Code.

### Integrated output channel
Compiler logs land in a dedicated "INTERLIS LSP" output channel that can clear itself when new runs start.

### Configurable repositories
Choose preferred model repositories via settings passed to the server at initialization.

### Caret-aware templates
Caret tracking middleware makes sure auto-inserted templates leave the cursor at the expected position after edits are applied.

### Webview downloads
UML previews support saving generated SVG diagrams next to the source model.
