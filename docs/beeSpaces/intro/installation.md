---
layout: docs
navigation: beespaces
title: Installationshinweise
---

Alle zum Betrieb von *beeSpaces* notwendigen Komponenten werden von bee365 über einen proprietären Bereitstellungsmechanismus initial bereitgestellt. Alle Artefakte werden im SharePoint Online-Tenant des Kunden hinterlegt.


## benötigte Service-Accounts und Zugänge
bee365 benötigt zur initialen Bereitstellung und den anschliessenden Betrieb folgende Zugänge:
* Zugriff auf Azure-Tenant, M365-Admin Center und *SharePoint Online*-Admin Center des Kunden
* Administrator-Account: `Globaler Administrator` (ggf. unter Aufsicht des Kunden); nach Installation ist Downgrade auf `SharePoint Administrator` und `Teams Administrator` möglich
* dauerhaften Administrator-Account (ohne bestimmte Vorgaben für Naming Convention): `SharePoint Administrator`, `Teams Administrator`
* dauerhaften Service-Account: `SharePoint Administrator`, `Teams Administrator`
* MFA und Conditional Access sind für Admin-Account und Service-Account deaktiviert
* Zugang zum *Tenant App Catalog* (SharePoint Online) des Kunden existiert, Zugang durch Admin-Account (SPO Admin) gewährleistet


## SharePoint Framework packages
Sämtliche von *beeSpaces* verwendeten Custom Webparts sind auf der Basis des *SharePoint Framework (SPFx)* und diversen damit in Verbindung stehenden Code-Bibliotheken und -Paketen aufgebaut. Im Bereitstellungsprozess werden diese pakettiert im *Tenant App Catalog* der SharePoint Online-Umgebung des Kunden verteilt.