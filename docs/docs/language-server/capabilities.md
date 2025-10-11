---
title: Language server capabilities
description: Discover the features advertised to LSP clients and how they map to INTERLIS workflows.
---

`InterlisLanguageServer#initialize` wires up the capabilities exposed to clients. The resulting payload looks like:

```json
{
  "capabilities": {
    "positionEncoding": "utf-16",
    "textDocumentSync": {
      "openClose": true,
      "change": 2,
      "save": {
        "includeText": false
      }
    },
    "completionProvider": {
      "triggerCharacters": [".", ":"],
      "resolveProvider": false
    },
    "documentFormattingProvider": true,
    "documentOnTypeFormattingProvider": {
      "firstTriggerCharacter": "="
    },
    "definitionProvider": true,
    "renameProvider": true,
    "documentSymbolProvider": true,
    "executeCommandProvider": {
      "commands": [
        "interlis.compile",
        "interlis.uml",
        "interlis.uml.plant"
      ]
    }
  }
}
```

Key listeners and providers derived from these capabilities:

| Event / Provider | Implementation | Notes |
| --- | --- | --- |
| `textDocument/didOpen` | `InterlisTextDocumentService#didOpen` | Compiles freshly opened files and streams diagnostics. |
| `textDocument/didChange` | `InterlisTextDocumentService#didChange` | Updates the in-memory document tracker & invalidates caches. |
| `textDocument/didSave` | `InterlisTextDocumentService#didSave` | Performs authoritative compilation using on-disk content. |
| `textDocument/didClose` | `InterlisTextDocumentService#didClose` | Clears diagnostics and releases document state. |
| `textDocument/completion` | `InterlisTextDocumentService#completion` | Provides context-aware completions (triggered by `.` or `:`). |
| `textDocument/formatting` | `InterlisTextDocumentService#formatting` | Runs ili2c pretty printer for whole-document formatting. |
| `textDocument/onTypeFormatting` | `InterlisTextDocumentService#onTypeFormatting` | Auto-inserts INTERLIS templates after typing `=`. |
| `textDocument/definition` | `InterlisTextDocumentService#definition` | Resolves definitions across workspace & referenced models. |
| `textDocument/rename` | `InterlisTextDocumentService#rename` + `InterlisRenameProvider` | Applies validated renames across declarations and references. |
| `textDocument/documentSymbol` | `InterlisTextDocumentService#documentSymbol` | Builds outline nodes from the compiled AST. |
| `workspace/didChangeConfiguration` | `InterlisWorkspaceService#didChangeConfiguration` | Refreshes server-side model repository settings. |

The VS Code extension maps these hooks to familiar IDE features such as the outline tree, problems panel, and rename refactorings.
