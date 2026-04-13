---
title: Erstes Modell
description: Eine erste INTERLIS-Datei anlegen, speichern und die wichtigsten Hilfen sofort nutzen.
---

## Wofür ist diese Funktion gut?

Diese Seite führt dich ohne Umwege durch den ersten sinnvollen Arbeitsablauf: Datei anlegen, Modellgerüst einfügen, speichern, Feedback lesen und die ersten Editorhilfen ausprobieren.

## So benutzt du sie

1. Öffne einen Projektordner in der IDE.
2. Lege eine neue Datei mit der Endung `.ili` an oder rufe in der Command Palette `INTERLIS: New from Template` auf.
3. Speichere die Datei früh, damit Validierung, Navigation und Diagramme auf einem stabilen Stand arbeiten können.
4. Nutze bei Bedarf `Ctrl+Space`, um Vorschläge einzublenden.
5. Beobachte die Problems-Ansicht und den Output-Kanal, sobald du das Modell veränderst oder speicherst.

Ein guter Einstieg ist ein kleines Modell mit einem Topic und einer Klasse. Schon bei den ersten Zeilen hilft dir der Editor mit kontextsensitiven Vorschlägen, einer Outline und direkten Fehlermeldungen.

```ili
MODEL Beispiel (de)
  AT "https://example.ch"
  VERSION "2026-04-05"
  =

  TOPIC Fachthema =
    CLASS Objekt =
      Name : TEXT*80;
    END Objekt;
  END Fachthema;

END Beispiel.
```

> Screenshot-Empfehlung: Command Palette mit `INTERLIS: New from Template`.
>
> Screenshot-Empfehlung: Modell direkt nach dem Einfügen des Grundgerüsts mit sichtbarer Outline.

## Darauf solltest du achten

Wenn du ganz am Anfang nur wenig Vorschläge siehst, ist das oft normal: Viele Hilfen werden besser, sobald der Modellkopf vorhanden ist und die Datei einmal gespeichert wurde. Achte ausserdem darauf, dass die Datei wirklich im Sprachmodus `INTERLIS` geöffnet ist und die Endung `.ili` trägt.
