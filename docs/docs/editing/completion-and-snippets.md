---
title: Vervollständigung und Snippets
description: Kontextsensitive Vorschläge für Modellköpfe, Typen, Importe und typische INTERLIS-Konstrukte nutzen.
---

## Wofür ist diese Funktion gut?

Die Vorschläge sind nicht nur Stichwortlisten. Der Editor versucht, an einer Stelle nur das anzubieten, was dort fachlich und syntaktisch sinnvoll ist. Das beschleunigt das Schreiben und reduziert Folgefehler.

## So benutzt du sie

Rufe Vorschläge mit `Ctrl+Space` auf oder nutze sie direkt beim Tippen. Besonders hilfreich sind sie in diesen Situationen:

- beim Start eines neuen Modells mit einem MODEL-Snippet oder einer Vorlage
- in Kopfzeilen von `MODEL`, `TOPIC`, `CLASS`, `STRUCTURE`, `DOMAIN` oder `UNIT`
- in `IMPORTS`-Zeilen für bekannte Modelle
- bei Typdefinitionen und Referenzen
- bei `REFERENCE TO`
- bei `LIST OF` oder `BAG OF`
- bei Meta-Attributen und typischen Dokumentationsfeldern

Das MODEL-Snippet hilft beim Einstieg, weil es ein konsistentes Grundgerüst liefert. In bestehenden Modellen sind vor allem die Folgevorschläge wichtig: Nach einem Symbolnamen, nach `EXTENDS` oder in Typdefinitionen zeigt die IDE die jeweils passenden nächsten Schritte.

Beispiele für nützliche Vorschläge im Alltag:

- Klassen, Strukturen und Domains als Typen
- sinnvolle Ziele für Referenzen
- Modelle aus dem Workspace oder aus konfigurierten Repositories
- Meta-Attribute für Titel, Kurzbeschreibung, Tags oder Kontaktangaben

Wenn du einen Snippet-Vorschlag übernimmst, kannst du Platzhalter wie üblich mit `Tab` oder `Enter` durchgehen.

> Screenshot-Empfehlung: Completion-Liste bei `MODEL`.
>
> Screenshot-Empfehlung: Vorschläge in einer Attributdefinition.
>
> Screenshot-Empfehlung: Vorschläge für Meta-Attribute sowie für `DOMAIN`- oder `UNIT`-Folgeschritte.

## Darauf solltest du achten

Die Vorschläge werden deutlich besser, wenn das Modell bereits einen brauchbaren Grundzustand hat. Speichere neue Dateien früh und halte Importe aktuell. Wenn Import- oder Typvorschläge fehlen, liegt die Ursache oft nicht an der Vervollständigung selbst, sondern an einem noch nicht auflösbaren Modell oder an fehlenden Repository-Einstellungen.
