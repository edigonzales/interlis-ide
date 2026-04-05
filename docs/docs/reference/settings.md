---
title: Einstellungen
description: Benutzerrelevante INTERLIS-Einstellungen für Modellquellen, Diagramme und Exporte.
---

## Wofür ist diese Funktion gut?

Die Standardeinstellungen sind für viele Teams ausreichend. Über die Settings kannst du das Verhalten aber an gemeinsame Modellablagen, Diagrammgewohnheiten oder eine angepasste Laufzeit anpassen.

## So benutzt du sie

Öffne die Einstellungen der IDE und suche nach `INTERLIS LSP`. Für den Alltag sind vor allem diese Optionen relevant:

- `interlisLsp.modelRepositories`: zusätzliche Modellquellen für Importe, Typauflösung und Validierung
- `interlisLsp.template.url`: Vorlage für `INTERLIS: New from Template`
- `interlisLsp.autoShowOutputOnStart`: Output-Kanal beim Start automatisch anzeigen
- `interlisLsp.diagram.autoOpenBeside`: Diagrammeditor automatisch neben `.ili`-Dateien öffnen
- `interlisLsp.diagram.layout.edgeRouting`: Linienfuhrung im Diagramm steuern
- `interlisLsp.diagram.showCardinalities`: Kardinalitäten im Diagramm ein- oder ausblenden
- `interlisLsp.uml.attributeMode`: Detailgrad für UML-Ausgaben steuern
- `interlisLsp.uml.deemphasizeAbstractTypes`: abstrakte Typen in UML-Ausgaben optisch zurücknehmen

Fortgeschrittene oder installationsnahe Optionen:

- `interlisLsp.server.jarPath`: eigenes Server-JAR statt der mitgelieferten Version verwenden
- `interlisLsp.javaPath`: eigene Java-Laufzeit verwenden
- `interlisLsp.server.jvmArgs`: zusätzliche JVM-Argumente für Spezialfälle

Beispiel:

```json title="settings.json"
{
  "interlisLsp.modelRepositories": "%ILI_DIR;https://models.interlis.ch;%JAR_DIR",
  "interlisLsp.diagram.autoOpenBeside": true,
  "interlisLsp.diagram.showCardinalities": true,
  "interlisLsp.uml.attributeMode": "OWN"
}
```

> Screenshot-Empfehlung: Einstellungen mit gefilterter Suche nach `INTERLIS LSP`.

## Darauf solltest du achten

Für die meisten Anwender sind nur wenige Einstellungen wirklich notwendig. Beginne mit `modelRepositories`, wenn Importe aus externen Quellen fehlen, und mit den Diagramm- oder UML-Optionen, wenn du die Visualisierung anpassen willst. Die Laufzeit-Einstellungen für eigenes Java oder eigenes Server-JAR solltest du nur verändern, wenn du bewusst von der mitgelieferten Standardkonfiguration abweichst.
