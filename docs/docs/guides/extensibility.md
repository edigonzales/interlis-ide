---
title: Extensibility and integrations
description: Connect INTERLIS IDE with additional data management workflows.
---

## Scriptable automation

The LSP commands are regular VS Code commands, which means you can invoke them from tasks, keybindings, and even Git hooks. Pair
them with CLI scripts or browser automation to enforce modeling rules before deployment.

## Custom renderers

Expose your own HTML renderers by listening for the `interlis/html.show` payload and combining it with custom webviews. Many teams
extend the preview to embed organization-specific templates or documentation portals.

## External validators

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer viverra lectus ac nisl placerat faucibus.

## Telemetry and monitoring

Forward logs emitted by the language server to your observability stack. The extension already surfaces `interlis/log`
notifications—subscribe to them to monitor compiler behavior in real time.
