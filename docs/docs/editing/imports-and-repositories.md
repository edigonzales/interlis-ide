---
title: Importe und Modell-Repositories
description: Modellimporte auflösen und externe Modellquellen für Vorschläge und Validierung einbinden.
---

## Wofür ist diese Funktion gut?

Viele Modelle stehen nicht allein, sondern bauen auf anderen Modellen auf. Die IDE kann solche Abhängigkeiten beim Schreiben und Prüfen berücksichtigen, wenn Workspace und Modell-Repositories sinnvoll eingerichtet sind.

## So benutzt du sie

Beim Schreiben einer `IMPORTS`-Zeile bietet dir der Editor bekannte Modelle an. Diese Vorschläge können aus dem aktuellen Workspace oder aus zusätzlich konfigurierten Modell-Repositories stammen.

Wenn dein Team gemeinsame Modellablagen verwendet, trage diese in den Einstellungen unter `interlisLsp.modelRepositories` ein. Sinnvoll sind zum Beispiel:

- ein gemeinsamer lokaler Modellordner
- ein interner HTTP-Endpunkt mit Modellablagen
- ein externer Modellserver

Sobald die Quellen erreichbar und korrekt eingetragen sind, profitierst du an mehreren Stellen:

- bessere Vorschläge in `IMPORTS`
- stabilere Auflösung von Typen und Referenzen
- vollständigere Validierung bei abhängigen Modellen

> Screenshot-Empfehlung: `IMPORTS`-Vorschlag im Editor.
>
> Screenshot-Empfehlung: Einstellungen mit `interlisLsp.modelRepositories`.

## Darauf solltest du achten

Wenn Vorschläge für Importe fehlen, liegt das oft an einer der drei Ursachen: Das Modell ist noch nicht gespeichert, die Repository-Einstellung ist unvollständig oder die externe Quelle ist nicht erreichbar. Prüfe in solchen Fällen zuerst die Einstellungen und danach den Output-Kanal.
