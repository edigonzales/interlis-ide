---
title: Probleme beheben
description: Häufige Probleme beim Arbeiten mit INTERLIS IDE schnell eingrenzen und lösen.
---

## Wofür ist diese Funktion gut?

Diese Seite hilft dir bei typischen Alltagsproblemen: kein Output, fehlende Vorschläge, kein Diagramm oder Probleme beim Start der Anwendung.

## So benutzt du sie

### Ich sehe keine Compile-Ausgabe

Öffne `View -> Output` und wähle im Dropdown `INTERLIS LSP`. Wenn der Output leer bleibt, speichere die Datei erneut oder führe `INTERLIS: Compile current file` aus.

### Ich bekomme keine sinnvollen Vorschläge

Prüfe diese Punkte in dieser Reihenfolge:

- Die Datei hat die Endung `.ili`.
- Der Sprachmodus ist `INTERLIS`.
- Die Datei wurde mindestens einmal gespeichert.
- Das Modell ist im aktuellen Zustand nicht vollständig durch frühe Grundfehler blockiert.
- Externe Modellquellen sind unter `interlisLsp.modelRepositories` korrekt eingetragen.

### Das Diagramm fehlt oder ist veraltet

Speichere die Datei und öffne dann `INTERLIS: Open diagram editor`. Wenn das Diagramm bereits offen ist, nutze `INTERLIS: Force refresh active diagram`. Für ein saubereres Bild hilft oft zusätzlich `INTERLIS: Auto-layout active diagram`.

### Rename oder Navigation liefern nichts

Setze den Cursor direkt auf ein Modellsymbol, nicht auf freien Text oder nur auf ein Kommentarfragment. Wenn das Modell stark inkonsistent ist, behebe zuerst die gravierendsten Fehler und probiere es danach erneut.

### Die Anwendung lässt sich unter macOS nicht öffnen

Bei unsignierten Downloads kann macOS die App blockieren. In vielen Fällen hilft:

```bash
xattr -dr com.apple.quarantine InterlisIDE.app
```

## Darauf solltest du achten

Viele Probleme haben dieselbe erste Lösung: Datei speichern, Problems-Ansicht prüfen, den Output-Kanal öffnen und den betroffenen Befehl gezielt erneut ausführen. Wenn das nicht reicht, melde ein Issue unter [github.com/edigonzales/interlis-ide/issues](https://github.com/edigonzales/interlis-ide/issues).
