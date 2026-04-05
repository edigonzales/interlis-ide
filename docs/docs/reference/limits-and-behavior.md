---
title: Grenzen und Verhalten
description: Was die IDE bewusst unterstützt, was sie nicht tut und wie sich typische Funktionen verhalten.
---

## Wofür ist diese Funktion gut?

Diese Seite schafft realistische Erwartungen. Sie hilft dir zu verstehen, welche Funktionen für den Alltag gedacht sind und wo du bewusst mit bestimmten Grenzen rechnen solltest.

## So benutzt du sie

Nutze diese Hinweise immer dann, wenn eine Funktion anders wirkt als erwartet oder wenn du für die Teamdokumentation klar beschreiben willst, was der Editor leistet.

Wichtige Punkte:

- Der Diagrammeditor ist ein Visualisierungswerkzeug und keine grafische Modellierungsoberfläche.
- Rename arbeitet auf Symbolen, nicht als freie Textsuche.
- Manche Funktionen werden erst nach dem Speichern oder nach einem erneuten Compile voll aussagekräftig.
- Import- und Typvorschläge hängen davon ab, ob Modelle im Workspace oder in konfigurierten Repositories auflösbar sind.
- Statische UML-Ausgaben und Dokumentationsexporte spiegeln den aktuellen Modellstand wider und sollten bei grösseren Änderungen bewusst neu erzeugt werden.

Nicht im Vordergrund des Editors stehen dagegen Funktionen wie eine grafische Bearbeitung im Diagramm oder eine vollständige Freitext-Refaktorierung beliebiger Kommentare und Textfragmente.

## Darauf solltest du achten

Wenn du die IDE dokumentierst oder im Team einführen willst, beschreibe Funktionen am besten entlang der tatsächlichen Arbeitsabläufe: schreiben, prüfen, navigieren, visualisieren und exportieren. Das verhindert Missverständnisse über Dinge, die absichtlich ausserhalb des Fokus liegen.
