---
layout: release-notes
navigation: beeconnect_releases
title: Release Notes
---

# beeEssentials (1.6.1) – Release 01/23
## Änderungen
* Webpart «Relevant News»: verbessert die Darstellung von News auf mobilen Devices
* Webpart «Form Buttons»: verbessert die Darstellung der Buttons auf mobilen Devices


# beeEssentials (1.6.0) – Release 12/22
## Neue Funktionen
* Webpart «Relevant News»: Newsquelle aus News Post direkt öffnen
* Webpart «Relevant News»: Möglichkeit zur Anzeige einer spezifischen Navigation im Header
* Webpart «Relevant Links»: Möglichkeit zur Anzeige einer spezifischen Navigation im Header

## Änderungen
* Webpart «Relevant News»: eliminiert Darstellungsfehler, falls keine Secondary News vorhanden
* Webpart «Relevant News»: zeigt eine Mitteilung als Titel an, sofern in einem Tile keine Newsbeiträge gefunden wurden
* Webpart «Adaptive Card»: ermöglicht die Darstellung / Einbettung in eine Section mit voller Breite
* Webpart «HTML Renderer»: ermöglicht die Darstellung / Einbettung in eine Section mit voller Breite
* implementiert ein lokales Caching für die UserGroupControl in den Webparts «Relevant News» und «Relevant Links»


# beeEssentials (1.5.0) – Release 07/22
## Neue Funktionen
* Webpart «Form Buttons»: implementiert den neuen Webpart «Form Button» zur Darstellung von Formularen über einen klickbaren Button in der Page
* Webpart «Relevant News»: implementiert den neuen Webpart «Relevant News», welcher Unternehmensnews (d.h. Newsposts) aus SharePoint Online in der Hero-Darstellung zentral aggregiert und in sogenannten «Newsgruppen» präsentiert

## Änderungen
* Webpart «HTML Renderer»: ändert den Namen des Webparts von «DWTFYW» zu «HTML Renderer»
* Webpart «Adaptive Card»: passt die Deklaration der Version (1.4 statt 1.3) von [Adaptive Cards](http://www.adaptivecards.io){:target="_blank"} im initial ausgerollten Template an


# beeEssentials (1.4.0) – Release 05/22
## Neue Funktionen
* Webpart «DWTFYW»: implementiert das neue, voll geile Webpart zum Rendern von HTML-Elementen innerhalb von SharePoint Pages 😀

## Änderungen
* Webpart «Adaptive Card»: korrigiert Fehler bei der Darstellung von `Input.ChoiceSets`
* Webpart «Graph Data Provider»: korrigiert falsches Encoding bei Filter-Klauseln von Graph-Abfragen