---
title: Installation
description: INTERLIS IDE herunterladen, starten und ohne Zusatzinstallation für die ersten Modelle nutzen.
---

## Wofür ist diese Funktion gut?

Die Desktop-Anwendung bringt die INTERLIS-Unterstützung bereits mit. Für die meisten Anwender bedeutet das: herunterladen, entpacken, starten und direkt mit `.ili`-Dateien arbeiten.

## So benutzt du sie

1. Lade die passende Version von der [GitHub-Releases-Seite](https://github.com/edigonzales/theia-ide/releases) herunter.
2. Entpacke das Archiv in einen Ordner deiner Wahl.
3. Starte die Anwendung mit dem für dein Betriebssystem mitgelieferten Launcher.
4. Öffne anschliessend einen Projektordner oder erstelle eine neue `.ili`-Datei.

Die Pakete stehen für die grossen Plattformen bereit:

- Linux für `x86_64` und `arm64`
- macOS für Intel und Apple Silicon
- Windows für `x86_64`

> Screenshot-Empfehlung: Download- oder Marketplace-Ansicht mit markierter Anwendung.

## Darauf solltest du achten

Eine separate Java-Installation ist im Normalfall nicht notwendig, weil eine passende Laufzeit bereits mitgeliefert wird. Nur wenn du bewusst eine eigene Java-Version oder ein eigenes Server-JAR verwenden willst, brauchst du später die entsprechenden Einstellungen aus der Referenz.

Unter macOS kann Gatekeeper nach dem Entpacken eingreifen. Falls sich die App nicht öffnen lässt, hilft in vielen Fällen:

```bash
xattr -dr com.apple.quarantine InterlisIDE.app
```
