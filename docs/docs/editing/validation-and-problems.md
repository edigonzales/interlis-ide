---
title: Validierung und Problems-Ansicht
description: Fehler, Warnungen und Compiler-Ausgaben im täglichen Arbeiten verstehen und einordnen.
---

## Wofür ist diese Funktion gut?

Die IDE zeigt dir früh, wo ein Modell syntaktisch oder fachlich problematisch ist. So kannst du Fehler dort korrigieren, wo sie entstehen, statt erst am Ende eines Modellierungsschritts.

## So benutzt du sie

Während des Tippens erscheinen bereits erste Hinweise direkt im Editor. Nach dem Speichern wird das Modell zusätzlich vollständig geprüft. Die wichtigsten Stellen für dieses Feedback sind:

- der Editor mit Markierungen direkt an der betroffenen Zeile
- die Problems-Ansicht für eine übersichtliche Liste aller Meldungen
- der Output-Kanal `INTERLIS LSP` für den Compiler- und Diagnoseverlauf

Wenn du gezielt neu prüfen willst, nutze in der Command Palette `INTERLIS: Compile current file`. Das ist besonders hilfreich, wenn du nach einer grösseren Änderung bewusst einen frischen Gesamtstand sehen willst.

Typische Situationen, in denen dir die Validierung hilft:

- ein Symbol wird verwendet, bevor es sinnvoll referenziert werden kann
- ein Name wurde doppelt vergeben
- eine Referenz zeigt auf ein nicht passendes Ziel
- ein Import oder Modellname ist nicht auflösbar

> Screenshot-Empfehlung: Fehler im Editor mit gleichzeitig geöffneter Problems-Ansicht.
>
> Screenshot-Empfehlung: Output-Kanal `INTERLIS LSP` nach einem manuellen Compile.

## Darauf solltest du achten

Nicht jedes Feedback entsteht auf dieselbe Weise: Während des Tippens zeigt der Editor schnelle Hinweise, beim Speichern wird das Modell zusätzlich vollständig geprüft. Wenn Meldungen unerwartet alt wirken oder Diagramme nicht zum letzten Stand passen, speichere die Datei und starte die Prüfung erneut.
