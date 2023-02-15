---
layout: docs
navigation: beespaces
title: Installationshinweise
---

Alle zum Betrieb von *beeSpaces* notwendigen Komponenten werden von bee365 über einen proprietären Bereitstellungsmechanismus initial bereitgestellt. Die dafür benötigten Artefakte sind im SharePoint Online-Tenant des Kunden hinterlegt.

## Registrierung der *beeSpaces*-Applikations in Ihrer Azure AD
Zur Bereitstellung von *beeSpaces* muss die *beeSpaces*-Appplikation in ihrer Azure AD (AAD) entlang der folgenden Schritten registriert werden:

1. Melden sie sich mit einem Benutzer, dem die Rolle  `Globaler Administrator` zugewiesen wurde, in ihrer Azure AD an.
2. Rufen Sie innerhalb der Browser-Session den [Link zur Registrierung der *beeSpaces*-Applikation](https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=d3b952e6-6026-4cec-bcc2-ea95c47d1473&response_type=code&scope=https://graph.microsoft.com/.default){:target="_blank"} auf.
3. Bestätigen Sie im nachfolgenden Fenster mittels Klick auf die Schaltfläche **Accept** die Registrierung der Applikation: 
  {% include figure.html alt='beeSpaces Permission Request' src='/assets/images/beeSpaces/app-permission-request.png' %}
  
  Damit werden auch die für die Provisionierung notwendigen Berechtigungen innerhalb der App registriert.

{% capture content %}
Nach erfolgreicher Registrierung werden Sie automatisch auf eine Bestätitungsseite geleietet und erhalten weitere Informationen.
{% endcapture %}
{% include alert.html type='info' caption='Registrierung abschliessen' content=content %}


## Service-Accounts und Zugänge
### Bereitstellung und Betrieb
bee365 benötigt **zur initialen Bereitstellung** folgende Zugänge:
* Zugriff auf Azure-Tenant, M365-Admin Center und *SharePoint Online*-Admin Center des Kunden
* Administrator-Account: `SharePoint Administrator` und `Teams Administrator`
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