---
layout: docs
navigation: beeconnect
title: Installationshinweise
---

Alle zum Betrieb von *beeConnect* notwendigen Komponenten werden von bee365 oder dessen Servicepartner über einen proprietären Bereitstellungsmechanismus initial bereitgestellt. Alle Artefakte werden im SharePoint Online-Tenant des Kunden hinterlegt.

## benötigte Service-Accounts und Zugänge
bee365 benötigt zur initialen Bereitstellung folgende Zugänge:
* Zugriff auf Azure-Tenant und *SharePoint Online*-Admin Center des Kunden
* Administrator-Account: `Globaler Administrator` (ggf. unter Aufsicht des Kunden); nach Installation ist Downgrade auf `SharePoint Administrator` und `Teams Administrator` möglich
* dauerhaften Administrator-Account (ohne bestimmte Vorgaben für Naming Convention): `SharePoint Administrator`, `Teams Administrator`
* Zugang zum *Tenant App Catalog* (SharePoint Online) des Kunden existiert, Zugang durch Admin-Account (SPO Admin) gewährleistet

{% include alert.html type='warning' caption='Wichtig' content='MFA und Conditional Access müssen für Admin-Account deaktiviert sein' %}


## SharePoint Framework packages
Die von *beeConnect* verwendeten Custom Extensions und Custom Webparts sind auf der Basis des *SharePoint Framework (SPFx)* und diversen damit in Verbindung stehenden Code-Bibliotheken und -Paketen aufgebaut. Im Bereitstellungsprozess werden diese pakettiert im *Tenant App Catalog* der SharePoint Online-Umgebung des Kunden verteilt. 

Einmal verteilt stehen die SPFx-Pakete bzw. die daraus resultierenden Webparts und Extensions auf allen Sites in der gesamten SharePoint Online-Umgebung zur Verfügung und erweitern damit dessen Standard-Funktionaltitäten.


## Bereitstellung durch Servicepartner
Die Bereitstellung ausserhalb der Dienstleistungen von bee365 ist nur für Servicepartner nach definierter Absprache und Vorgehensweise gestattet. Dabei gelten obige Erklärungen uneingeschränkt.