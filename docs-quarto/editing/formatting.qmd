---
title: Formatierung
description: Ganze Dokumente sauber formatieren und wiederkehrende Blockstrukturen schneller anlegen.
---

## Wofür ist diese Funktion gut?

Saubere Formatierung macht Modelle besser lesbar und reduziert unnötige Unterschiede in Reviews. Gleichzeitig hilft dir der Editor dabei, typische Blockstrukturen schneller korrekt zu schliessen.

## So benutzt du sie

Für die Formatierung des gesamten Dokuments verwendest du den normalen VS-Code-Befehl `Format Document`. Damit wird die aktuelle `.ili`-Datei in eine einheitliche, gut lesbare Form gebracht.

Zusätzlich reagiert der Editor in typischen Schreibsituationen direkt im Text. Wenn du nach bestimmten Kopfzeilen ein `=` eingibst, kann die IDE das passende Blockgerüst einfügen, zum Beispiel für:

- `CLASS`
- `STRUCTURE`
- `TOPIC`
- `VIEW TOPIC`

Damit sparst du dir wiederkehrende `END`-Zeilen und bleibst schneller in einer korrekten Struktur.

> Screenshot-Empfehlung: Vorher-Nachher-Beispiel einer Formatierung.
>
> Screenshot-Empfehlung: Eingabe von `=` nach einer Kopfzeile mit automatisch eingefügtem Blockende.

## Darauf solltest du achten

Wenn eine Formatierung nicht wie erwartet greift, speichere die Datei zuerst und probiere es erneut. Die automatische Einfügung per `=` ist als Schreibhilfe für typische Blöcke gedacht, nicht als universeller Generator für jeden Modellteil. Für einen neuen Modellkopf ist meist ein Snippet oder `INTERLIS: New from Template` der bessere Einstieg.
