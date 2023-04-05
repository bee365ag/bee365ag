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
    * Falls der Lebenszyklus `lifecycle lifetime` im Template hinterlegt ist, so wird nur das Berechnet Datum angezeigt. Dies kann vom Enduser nicht bearbeitet werden. 
4. `Zugriffskontrolle`: Workspace Owner muss hinterlegt werden und falls gewünscht Mitglieder
5. `Überprüfung`: Kontrolle aller hinterlegter Informationen


{% include figure.html alt='Benutzer-Flow (Standard)' src='/assets/images/beeSpaces/provisioning-ofw-chooseTemplate.png' %}

### Formatters

Formatters sind eine nützliche Funktion in den Engine-Einstellungen, mit denen du das Aussehen bestimmter Eingabefelder im Bestellprozess anpassen kannst. 

#### Wie funktionieren Formatters?

Formatters sind wie kosmetische Verbesserungen für die Felder, die du im Bestellprozess verwendest. Mit ihnen kannst du das visuelle Erscheinungsbild der Felder anpassen, um den eigenen Bedürfnissen besser gerecht zu werden. 

#### Was kannst du mit Formatters machen?

Du kannst Formatters verwenden, um das Aussehen der Felder anzupassen. Beispielsweise kannst du einen Prefix zu einem Feld hinzufügen oder eine Notiz unter einem Feld anzeigen, um dem Benutzer zusätzliche Informationen zu geben.

#### Wie viele Formatters kannst du verwenden?

Du kannst mehrere Formatters verwenden, aber jeder Formatter muss einem anderen Feld zugewiesen werden. Es ist wichtig, sicherzustellen, dass jedes Feld nur einen Formatter zugewiesen hat, um Konflikte oder Verwirrungen zu vermeiden.

#### Beispiel

Hier ist ein Beispiel für die Verwendung von Formatters:

~~~
"formatters": [
{
"fieldRef": "Title",
"format": {
"prefix": "PRJ-"
},
"notes": "Der Workspace wird so heissen:'PRJ': {{computed.teamTitle}}"
}
]
~~~

#### Ergebnis
{% include figure.html alt='Formatter im Bestellprozess' src='/assets/images/beeSpaces/formatter-im-ofw.png' %}

#### Wichtig zu beachten

Es ist wichtig zu beachten, dass die Formatters nur für das visuelle Erscheinungsbild der Felder verwendet werden und keine Steuerungsfunktion im UX-Flow haben. Ihr Zweck besteht darin, die visuelle Darstellung zu verbessern und das Benutzererlebnis insgesamt zu verbessern.

### Template-Disclaimer bei der Provisionierung

Ein **Template-Disclaimer** ist ein wichtiger Bestandteil beim Bestellprozess von SharePoint & Teams-Räumen. Es handelt sich um eine standardisierte rechtliche Erklärung, die in der Regel am Ende des Prozesses in einem Popup Fenster eingeblendet wird. Dort muss man bestätigen, die Firmeninternen Weisungen und Richtlinien zu Sharepoint oder Teams Räumen gelesen und verstanden zu haben.

{% include figure.html alt='Haftungsausschluss' src='/assets/images/beeSpaces/Hauftungsausschluss.png' %}

Der Zweck eines Template-Disclaimers besteht darin, die Verantwortung des SharePoint-Betreibers zu begrenzen und rechtliche Risiken zu minimieren. Er kann beispielsweise Haftungsausschlüsse, Datenschutzerklärungen oder geistige Eigentumsrechte enthalten. Auch ist meistens darin geregelt, dass keine Daten aus den Sharepoint Räumen unbeaufsichtigt mit externen Personen geteilt werden, die keine Projektmitarbeiter sind, um Datenabfluss zu vermeiden und das Firmengeheimnis zu schützen.

Durch die Verwendung von Template-Disclaimers können Unternehmen sicherstellen, dass ihre SharePoint-Räume den geltenden Gesetzen und Vorschriften entsprechen und dass die Benutzer über ihre Rechte und Pflichten informiert sind. Dies kann dazu beitragen, potenzielle Risiken und rechtliche Streitigkeiten zu vermeiden und das Vertrauen der Benutzer in das Unternehmen und die SharePoint Umgebung zu stärken.

#### Hinzufügen eines Listeneintrags mit einem Disclaimer-Link

Um einen Listeneintrag hinzuzufügen, der den Template-Disclaimer auf SharePoint aktiviert und die Webseite mit dem Disclaimer-Text hinterlegt, führen Sie die folgenden Schritte durch:

1. Erstellen Sie einen Listeneintrag in der Template-Liste unter der Spalte Disclaimer.
2. Hinterlegen Sie den Link zur erstellten Webseite mit dem gewünschten Disclaimer-Text.
3. Testen Sie den Disclaimer im Bestellprozess.

Dies stellt sicher, dass der Benutzer den Disclaimer akzeptiert hat und informiert ist über die geltenden Regeln und Vorschriften in Bezug auf die Nutzung des SharePoint-Raums.


### Genehmigungen (nicht im Standard von beeSpaces enthalten)
Mithilfe von Genehmigungen (sog. «Approvals») kann die Erstellung von Workspaces zusätzlich kontrolliert werden. Je nach *Workspace Template* kann ein Approval Prozess hinterlegt werden, bei welchem zuerst eine oder mehrere definierte Approver-Groups die Bestellung genehmigen müssen. Anschliessend wird der Standard-Provisioning Prozess gestartet.

Genehmigungsprozesse werden bspw. mithilfe von *Power Automate*, *Azure Logic Apps* oder einer beliebigen Workflow-Engine eines Drittherstellers (Cloud-Produkt) realisiert und setzen eine entsprechende Lizenzierung voraus.

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

Der Post Provisioning-Prozess wird von der Provisioning API gestartet und überprüft. Dabei können dem eigentlichen Provisionierungsprozess nachgelagerte Aktionen ausgeführt werden (bspw. Informationen zum erstellten Workspace in ein [Cloud-basiertes] Drittsystem zurück spielen).
