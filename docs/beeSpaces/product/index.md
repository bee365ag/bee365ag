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

Formatters sind eine nützliche Funktion in den Engine-Einstellungen, mit denen das Aussehen bestimmter Eingabefelder im Bestellprozess angepasst werden können. 

Formatters sind wie kosmetische Verbesserungen für die Felder, die während des Bestellprozesses verwendet werden. Mit ihnen wird das visuelle Erscheinungsbild der Felder erweitert, um den Bedürfnissen von zusätzlicher Information noch besser gerecht zu werden. 

Formatters werden verwendet, um das Aussehen der Felder im Bestellprozess anzupassen. Beispielsweise kann ein Prefix zu einem Feld hinzugefügt oder eine Notiz unter einem Feld angezeigt werden – oder dem Benutzer erhält allgemein zusätzliche Informationen.

Es lassen sich mehrere Formatters verwenden, aber jeder Formatter muss einem anderen Feld zugewiesen werden. Es ist wichtig, sicherzustellen, dass jedes Feld nur einen Formatter zugewiesen hat, um Konflikte oder Verwirrungen zu vermeiden.

#### Beispiel

Folgendes Beispiel veranschaulicht die Anwendung und das Ergebnis von Formatters:

~~~
"formatters": [{
    "fieldRef": "Title",
    "format": {
        "prefix": "PRJ-"
    },
    "notes": "Der Workspace wird so heissen:'PRJ': {{computed.teamTitle}}"
}]
~~~

{% include figure.html alt='Formatter im Bestellprozess' src='/assets/images/beeSpaces/formatter-im-ofw.png' %}

{% capture content %}
Es ist wichtig zu beachten, dass die Formatters nur für das visuelle Erscheinungsbild der Felder verwendet werden und keine Steuerungsfunktion im UX-Flow haben. Ihr Zweck besteht darin, die visuelle Darstellung zu verbessern und das Benutzererlebnis insgesamt zu verbessern.
{% endcapture %}
{% include alert.html type='info' caption='Hinweis' content=content %}



### Template-Disclaimer im Bestellprozess

Ein **Template-Disclaimer** ist ein wichtiger Bestandteil beim Bestellprozess von SharePoint- & Teams-Workspaces. Dabei handelt es sich um eine standardisierte rechtliche Erklärung, die zu Beginn des Bestellprozesses in einem Popup-Fenster eingeblendet wird. Der Benutzer bestätigt, die firmeninternen Weisungen und Richtlinien, die mit der Bestellung des Workspaces einhergehen, gelesen und verstanden zu haben:

{% include figure.html alt='Haftungsausschluss' src='/assets/images/beeSpaces/Hauftungsausschluss.png' %}

Der Zweck eines Template-Disclaimers enthält sinnvollerweise:
* Haftungsausschlüsse oder Datenschutzerklärungen
* Hinweise zu geistigen Eigentumsrechten
* weiterführende oder bebilderte Erklärungen zum Einsatzzweck oder -nutzen des Workspaces
* Regelungen / Datenhandling in Bezug auf die im Workspace enthaltenen Dateien (bspw. Teilen von Dateien mit internen / externen Personen)


#### Hinzufügen eines Listeneintrags mit einem Disclaimer-Link

Um einen Listeneintrag hinzuzufügen, der den Template-Disclaimer zu Beginn des Bestellprozesses eines bestimmten Workspaces anzeigt, führen Sie die folgenden Schritte durch:

1. Aktivieren Sie in den `Workspace Templates` über den Button `in Rasteransicht bearbeiten` die Spalte `Disclaimer`.
2. Erweitern Sie den Listeneintrag mit dem entsprechenden Template, das den Disclaimer benötigt, unter der Spalte `Disclaimer`:
    * Hinterlegen Sie *auf jeden Fall* im Feld `Link` den Link zur Ressource des Disclaimers (muss sich als Web-Content aufrufen lassen; kann bspw. eine SharePoint Page oder auch eine externe Webpage sein)
    * Legen Sie im Feld `Anzeigetext` fest, zu welchem Verhalten der Disclaimer den Benutzer führen soll:
        * `mandatory` oder `obligatorisch`: Disclaimer wird angezeigt mit zwei Bestätigungsoptionen; `Abbrechen` (Kreuz) führt im Bestellprozess zurück zur Templateauswahl, `Bestätigung` (Haken) führt im Bestellprozess zum nächsten Schritt
        * `<beliebiger Text>`: ein Disclaimer wird angzeigt, muss aber zwingend bestätigt werden (kann als «gelesen» oder «zur Kenntnis genommen» gedeutet werden)
3. Testen Sie den Disclaimer im Bestellprozess.

{% include figure.html alt='Disclaimer hinzufügen' src='/assets/images/beeSpaces/disclaimer-example.png' %}

{% capture content %}
Wenn kein Link im Listenfeld `Disclaimer` hinterlegt ist, so geht man im Wizard einen Schritt weiter. Der Disclaimer wird nicht angezeigt
{% endcapture %}
{% include alert.html type='info' caption='Hinweis' content=content %}



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
