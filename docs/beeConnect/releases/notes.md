---
layout: release-notes
navigation: beeconnect_releases
title: Release Notes
---

# smartintranet-webparts (1.1.3) – Release 03/23
## Änderungen
* Webpart «myTodos»: behebt einen weiteren Fehler in der chronologisch korrekten Darstellung mehrerer Tasks aus Microsoft Todo, bei welchem gewisse Tasks aufgrund eines Abfragefehlers auf der Microsoft Graph API nicht geladen wurden
* Webpart «myTodos»: korrigiert die Darstellung der Datumsanzeige, wobei UTC-Zeitangaben nun korrekt in die lokale Zeitzone des angemeldeten Benutzers konvertiert werden


# smartintranet-webparts (1.1.0)
## Änderungen
* Webpart «myTodos»: behebt den Fehler in der chronologischen Darstellung der Tasks aus *Microsoft ToDo*, wobei gewisse Tasks unvorhersehbar gar nicht oder «falsch» dargestellt wurden (häufig aufgetreten aufgrund Anfragen-Drosselung – sog. Throttling – der *Microsoft Graph API* im Falle der Verwendung mehrerer Tasklisten des Benutzers)


# beeEssentials (1.6.2) – Release 02/23
## Neue Funktionen
* Webpart «Relevant News»: Darstellung der Standard-Newsübersicht aus der jeweiligen Newsquelle (Site) in SharePoint: statt eines blossen Links auf die Homepage der Newsquelle (Site) wird die standardisierte Newsdarstellung von SharePoint Online gesetzt: <br/>`{Site der Newsquelle}/_layouts/15/news.aspx`
* Webpart «Relevant News»: Anzeige des Veröffentlichungsdatums eines News-Posts in relativer Form (bspw. vor zwei Tagen, vor 10 Wochen, ...), welche wahlweise per Konfiguration unterdrückt werden kann

## Änderungen
* Webpart «Relevant News»: verbesserte Information (EN) bei Newsgruppen ohne Inhalt


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