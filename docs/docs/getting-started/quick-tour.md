---
title: Quick tour of the IDE
description: Discover the standout capabilities that make authoring INTERLIS models productive.
---

## Highlights at a glance
- **Immediate validation feedback** – every `.ili` file is compiled with ili2c on open and save, surfacing diagnostics directly in the editor while streaming the compiler log into a dedicated output channel.
- **Rich navigation and refactoring** – jump to definitions across the workspace, browse document symbols, and rename models, topics, classes, structures, or associations with references updating automatically.
- **Context-aware authoring assistance** – enjoy completions for imports, qualified references, and model names that draw from cached compilation results, alongside on-type templates, pretty printing, and caret-aware edits.
- **Diagram and documentation generation** – produce Mermaid or PlantUML class diagrams, render HTML manuals, and export DOCX documentation without leaving the IDE.
- **Integrated toolchain** – the environment ships with a bundled language runtime and commands for compiling, diagramming, and exporting, keeping teams aligned on a consistent INTERLIS setup.

## Editing boost in action
Typing `=` right after a `MODEL`, `CLASS`, `STRUCTURE`, or `TOPIC` header expands a full skeleton, complete with documentation banners, meta-attributes, and matching `END` statements while positioning the cursor at the next line you need to edit:

```ili
/** !!------------------------------------------------------------------------------
 * !! Version    | wer | Änderung
 * !!------------------------------------------------------------------------------
 * !! 2024-12-09 | abr  | Initalversion
 * !!==============================================================================
 */
!!@ technicalContact=mailto:acme@example.com
!!@ furtherInformation=https://example.com/path/to/information
!!@ title="a title"
!!@ shortDescription="a short description"
!!@ tags="foo,bar,fubar"
MODEL MyNewModel (de)
  AT "https://example.com"
  VERSION "2024-12-09"
  =
  -- cursor moves here
END MyNewModel.
```

## Visual exploration workflow
1. Compile the active INTERLIS model to validate structure and dependencies.
2. Launch the UML or PlantUML class diagram views to inspect schema relationships visually or download generated SVG assets.
3. Create human-readable documentation as HTML or export a styled DOCX to share the model narrative with stakeholders.

## Why INTERLIS authors love this IDE
- Cached compilations keep completions, navigation, and diagnostics responsive even on large schema sets.
- Diagram previews and documentation exports turn technical models into shareable visuals and reports in seconds.
- Output management, template insertion, and bundled tooling let teams focus on modeling instead of setup and maintenance.
