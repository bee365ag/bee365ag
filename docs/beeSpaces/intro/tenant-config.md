---
layout: docs
navigation: beespaces
title: Tenant-Konfiguration
---

Durch den Einsatz von *beeSpaces* wird das Erstellen von Ressourcen automatisiert und ein Bestellprozess für sämtliche Benutzer des Unternehmens standardisiert. Dies gilt für die Bereitstellung von Teams, Microsoft 365-Gruppen und SharePoint Site Collections sowie weitere frei definierbare Ressourcen.

## Erstellung von Microsoft 365-Gruppen
Innerhalb eines M365-Tenants gilt die Standard-Richtline, dass sämtliche Benutzer grundsätzlich Microsoft 365-Gruppen erstellen dürfen. Diese Option ist komplett zu deaktivieren bzw. auf eine privilegierte Gruppe von Benutzern (Azure AD Security Group) zu beschränken.

{% capture content %}
Obschon diese Beschränkung für die korrekte Funktionalität von *beeSpaces* keine Voraussetzung darstellt, wird sie dringend empfohlen.
{% endcapture %}
{% include alert.html type='warning' caption='Empfehlung' content=content %}

Die Anpassung erfolgt wahlweise über das Azure Portal oder mittels [Power Shell-Skripts](https://learn.microsoft.com/en-us/microsoft-365/solutions/manage-creation-of-groups?view=o365-worldwide){:target="_blank"}.


## Erstellung von Sites in SharePoint Online
Innerhalb eines M365-Tenants lässt sich die Erstellung von Sites in SharePoint Online auf eine spezifische Admin-Rolle beschränken. Standardmässig gilt die Berechtigung, dass sämtliche Benutzer solche Sites erstellen dürfen. Diese Option ist zu deaktivieren.

{% capture content %}
Obschon diese Beschränkung für die korrekte Funktionalität von *beeSpaces* keine Voraussetzung darstellt, wird sie dringend empfohlen.
{% endcapture %}
{% include alert.html type='warning' caption='Empfehlung' content=content %}

Details zur Vorgehensweise sind in der [Microsoft-Dokumentation](https://learn.microsoft.com/en-us/sharepoint/manage-site-creation){:target="_blank"} beschrieben.


## *beeSpaces* im App Launcher
Aus Sicht einer angenehmen *User Experience* wird die Erstellung einer dedizierten App im App Launcher des Tenants empfohlen. Die entsprechende Policy lässt über die [Dokumentation](https://learn.microsoft.com/de-DE/microsoft-365/admin/manage/customize-the-app-launcher?WT.mc_id=365AdminCSH_inproduct&view=o365-worldwide){:targe="_blank"} umsetzen.