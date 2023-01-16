---
layout: docs
navigation: beespaces
title: Installationshinweise
---

Alle zum Betrieb von *beeSpaces* notwendigen Komponenten werden von bee365 über einen proprietären Bereitstellungsmechanismus initial bereitgestellt. Die dafür benötigten Artefakte sind im SharePoint Online-Tenant des Kunden hinterlegt.


## Service-Accounts und Zugänge
### Bereitstellung und Betrieb
bee365 benötigt **zur initialen Bereitstellung** folgende Zugänge:
* Zugriff auf Azure-Tenant, M365-Admin Center und *SharePoint Online*-Admin Center des Kunden
* Administrator-Account: `Globaler Administrator` (ggf. unter Aufsicht des Kunden); nach Installation ist Downgrade auf `SharePoint Administrator` und `Teams Administrator` möglich
* Zugang zum *Tenant App Catalog* (SharePoint Online) des Kunden existiert, Zugang durch Admin-Account (SPO Admin) gewährleistet
* Zugang zur *Root Page* in SharePoint Online (Home Site) ist für den Service-Account gegeben (Site Administrator)

Für den anschliessenden **Betrieb** sind folgende Zugänge nötig:
* dauerhaften Service-Account: `SharePoint Administrator`, `Teams Administrator`, `Groups Administrator`
* Zugang zur *Root Page* in SharePoint Online (Home Site) ist für den Service-Account gegeben (Site Administrator)

{% include alert.html type='warning' caption='Wichtig' content='MFA und Conditional Access müssen für den Service-Account deaktiviert sein!' %}

### Support-Unterstützung
Im Falle von Support-Zugriffen und Produktunterstützung empfehlen wir bee365 folgende Zugänge zur Verfügung zu stellen:
* (dauerhaften) Administrator-Account (ohne bestimmte Vorgaben für Naming Convention): `SharePoint Administrator`, `Teams Administrator`


## SharePoint Framework packages
Sämtliche von *beeSpaces* verwendeten Custom Webparts sind auf der Basis des *SharePoint Framework (SPFx)* und diversen damit in Verbindung stehenden Code-Bibliotheken und -Paketen aufgebaut. Im Bereitstellungsprozess werden diese pakettiert im *Tenant App Catalog* der SharePoint Online-Umgebung des Kunden verteilt.