---
title: Navigation, Outline und Rename
description: Definitionen finden, Verwendungen verfolgen und Modellsymbole sicher umbenennen.
---

## Wofür ist diese Funktion gut?

Sobald ein Modell etwas grösser wird, brauchst du schnelle Wege durch den Code. Die IDE hilft dir dabei, Definitionen und Verwendungen zu finden und konsistente Umbenennungen ohne manuelle Suchaktionen durchzuführen.

## So benutzt du sie

Für die Navigation stehen dir die gewohnten VS-Code-Werkzeuge zur Verfügung:

- `F12` oder `Ctrl+Klick` springt zur Definition
- `Shift+F12` zeigt Verwendungen
- die Outline gibt dir eine Übersicht über Modelle, Topics, Klassen, Strukturen, Domains und Attribute
- `F2` startet Rename für das Symbol unter dem Cursor

Rename ist besonders hilfreich, wenn du einen Modellnamen, ein Topic, eine Klasse, eine Struktur oder ein Attribut sauber umbenennen willst. Dabei werden nicht nur die Deklaration, sondern auch passende Verwendungen aktualisiert. In lokalen Projektdateien können auch zusammenhängende Stellen über mehrere Dateien hinweg erfasst werden.

> Screenshot-Empfehlung: Sprung zu einer Definition über `Ctrl+Klick`.
>
> Screenshot-Empfehlung: Rename-Vorschau mit mehreren Treffern.
>
> Screenshot-Empfehlung: Outline-Ansicht für ein geöffnetes Modell.

## Darauf solltest du achten

Rename ist für Symbole gedacht, nicht für freie Textsuche. Wenn an einer Stelle kein Rename angeboten wird, befindet sich der Cursor oft nicht auf einem definierbaren Modellsymbol. Für die besten Ergebnisse sollte das Modell in einem möglichst konsistenten Zustand sein.
