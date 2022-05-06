---
layout: docs
navigation: beespaces
title: Produktinfo
---

Die Provisionierung von Arbeitsräumen – oder eben sogenannten *Workspaces* – erfolgt immer entweder Benutzer-gesteuert oder über die *beeProvisioning API*.
Folgendes Szenario stellt den Standard-Fluss aus Benutzersicht dar:

{% include figure.html alt='Benutzer-Flow (Standard)' src='/assets/images/beeSpaces/provisioning-userflow-standard.png' %}

{% capture content %}
bee365 ag implementiert KEINE Approval-Flows im Basis-Setup von *beeSpaces*. Dessen Implementierung (und die damit verbundene Business-Logik) ist Sache des Kunden.
{% endcapture %}
{% include alert.html type='info' caption='Hinweis' content=content %}

## Komponenten
### Order Form Wizard

Der Order Form Wizard führt den Endbenutzer durch den gesamten Bestellprozess. Je nach ausgewählten Vorlagen muss dieser unterschiedliche Informationen zum gewünschten Workspace mitgeben. 

Der Bestellprozess ist in 4 (respektive 5, sofern **Lebenszyklus** aktiv ist) Phasen aufgeteilt:
1. `Template`: User wählt das entsprechende Workspace Template aus.
2. `Details`: Workspace spezifische Details können  / müssen hinterlegt werden. 
3. `Lebenszyklus`: falls ein Template mit dem Lebenszyklus `lifecycle deadline` ausgewählt wurde, muss diese Deadline in dieser Phase hinterlegt werden. 
    * Falls der Lebenszyklus `lifecylce lifetime` im Template hinterlegt ist, so wird nur das Berechnet Datum angezeigt. Dies kann vom Enduser nicht bearbeitet werden. 
4. `Zugriffskontrolle`: Workspace Owner muss hinterlegt werden und falls gewünscht Mitglieder
5. `Überprüfung`: Kontrolle aller hinterlegter Informationen


{% include figure.html alt='Benutzer-Flow (Standard)' src='/assets/images/beeSpaces/provisioning-ofw-chooseTemplate.png' %}


### Approvals (nicht im Standard von beeSpaces enthalten)
Mithilfe von Approvals kann die Erstellung von Workspaces zusätzlich Kontrolliert werden. Je nach Workspace Template kann ein Approval Prozess hinterlegt werden, bei welchem zuerst die definierte Approver-Group den Workspace genehmigen muss. Anschliessend wir der Stand Provisioning Prozess gestartet.

Diese Prozess wird bspw. mithilfe von Power Automate, Logic Apps oder einer beliebigen Workflow-Engine eines Drittherstellers (Cloud-Produkt) realisiert und setzt eine entsprechende Lizenzierung voraus.

{% capture content %}
bee365 ag implementiert KEINE Approval-Flows im Basis-Setup von *beeSpaces*. Dessen Implementierung (und die damit verbundene Business-Logik) ist Sache des Kunden.
{% endcapture %}
{% include alert.html type='info' caption='Hinweis' content=content %}


### Provisioning API
Die Provisioning API orchestriert den gesamten Provisioning Prozess für den Workspace. Dieser wird entweder direkt vom OFW, dem Approval Prozess oder von einem Drittsytem des Kunden getriggert. 
Die API “überwacht” jeden Schritt der Provisioning, schreibt Logs (Azure Cosmos DB und SPO Bestellliste) und gegebenenfalls Fehlermeldung an SPO oder via E-Mail. 

Der Provisioning Prozess selbst, lädt die Templates, welche sich im beeSpaces Portal des Kunden befinden und appliziert diese auf den gewünschten Workspace. 

### Pre Provisioning
{% include alert.html type='info' caption='Hinweis' content='Die Pre Provisioning-Lösung wird immer im Azure-Tenant des Kunden realisiert.' %}
 
Der Pre Provisioning-Prozess wird von der Provisioning API gestartet und überprüft. Dabei können dem eigentlichen Provisionierungsprozess vorgelagerte Aktionen (d.h. Aktionen, die vor der eigentlichen Erstellung eines Workspace benötigt werden) ausgeführt werden (bspw. Abrufen von Kunden-Informationen aus einem [Cloud-basierten] CRM, etc). Diese Daten müssen in der entsprechenden Code-Implementierung anschliessend der Provisioning API übermittelt werden, damit diese im eigentlichen Provisioningsprozess zur Verfügung stehen.

### Post Provisioning
{% include alert.html type='info' caption='Hinweis' content='Die Post Provisioning-Lösung wird immer im Azure-Tenant des Kunden realisiert.' %}

Der Pre Provisioning-Prozess wird von der Provisioning API gestartet und überprüft. Dabei können dem eigentlichen Provisionierungsprozess nachgelagerte Aktionen ausgeführt werden (bspw. Informationen zum erstellten Workspace in ein [Cloud-basiertes] Drittsystem zurück spielen).