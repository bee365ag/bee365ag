---
layout: release-notes
navigation: beeSpaces_releases
title: Release Notes
---

# beeProvisioning-webparts (1.4.0) – Release 03/23
## Neue Funktionen
* Order Form Wizard: erweitert die Webpart-Einstellungen um ein neues, moderneres und dem SharePoint Online-UI angelehnten Layout für die Auswahl der Workspace Templates
* Order Form Wizard: erweitert die Anzeige der Felder eines Workspace Templates um *Field Formatters*, welche in den *Engine Settings* des Order Form Wizards spezifisch zugewiesen werden können, wodurch bestimmte Darstellungsoptionen für den Benutzer im UI angezeigt werden
* Order Form Wizard: erweitert die Auswahl eines Workspace Templates um die Anzeige einer konfigurierbaren *Disclaimer*-Seite, die automatisch angezeigt wird bei der Auswahl des Templates und dessen Kenntnisnahme vom Benutzer bestätigt werden muss
* Order Form Wizard: implementiert eine zusätzliche Option auf Ebene der Workspace Templates-Definitionen (Liste) zur Deaktivierung des Workspace Templates. Wird der `Status` eines Workspace Template auf `inaktiv` gesetzt, so blendet der Order Form Wizard dieses Template im ersten Auswahlschritt aus. Enthält die Liste keinen `Status`, so hat dies keinen Einfluss auf die Funktionsweise des Order Form Wizards.


# beeProvisioning-webparts (1.3.0) – Release 01/23
## Neue Funktionen
* Order Form Wizard: erweitert die Übersetzungen (i18n) um zusätzliche 🇨🇭 Landessprachen (it / fr)

## Änderungen
* Order Form Wizard: behebt diverse Sprachkorrekturen im deutschen und englischen Template


# beeProvisioning-webparts (1.2.3) – Release 08/22
## Änderungen
* Order Form Wizard: behebt einen undokumentierten Fehler in allen SPO-Tenants im Zusammenhang mit einem "neuen" Feld `ParentUniqueIdId`


# beeprovisioning-webparts (1.2.2) – Release 04/22
## Änderungen
* Order Form Wizard: behebt diverse Rechtschreibfehler
* Order Form Wizard: behebt einen Fehler beim Speichern des Lifecycle-Enddatums


# beeprovisioning-webparts (1.2.1) – Release 03/22
## Änderungen	
* Order Form Wizard: behebt Fehler bei unbekannten Lifecycle-Policies
* Order Form Wizard: behebt Fehler bei Checkboxen beim letzten Schritt im Bestellprozess (Überprüfung)