---
layout: manual
title: Zustände
---
# Zustände
Die Standardinstallation von beeSpaces kennt “nur” den Zustand aktiv.
Mit der Erweiterung beeSpaces Lifecycle (add-on) kommen, wie nachfolgend illustriert, noch zusätzliche Zustände hinzu:
- wird bearbeitet
- unabhängig
- ablaufend
- abgelaufen

## Überwachte Zustände
`aktiv` bedeutet, dass dieser Space genutzt wird. Mit beeSpaces Lifecycle (add-on) wird dieser Zustand zusätzlich überwacht und gemäss den Regelwerken automatisch in einen anderen Zustand überführt.

Im Zustand `wird bearbeitet` sind Spaces welche einen Handlungsbedarf haben. Dies kann bspw. eine Verlängerung der Lebensdauer sein.

Bei ablaufenden (`ablaufend`) Spaces “schlägt die letzte Stunde”. Solche Umgebungen werden nach Ablauf der Fristen aus dem Regelwerk in den finalen Zustand überführt.

`abgelaufen` bedeutet nun, dass der Space abgeräumt wurde. Wobei dies eine Löschung, Archivierung oder einfach nur ein “Loslösen” von Umsystemen bedeuten kann.

> Grundsätzlich verfolgt bee365 bei der Abräumung des Workspaces lediglich dessen Archivierung. Standardmässig werden nie Workspaces gelöscht.

## nicht überwachter Zustand
Im speziellen Zustand `unabhängig` befinden sich Spaces welche unabhängig von einem Lebenszyklus sind. Solche Umgebungen werden weder überwacht noch automatisch in einen anderen Zustand überführt.