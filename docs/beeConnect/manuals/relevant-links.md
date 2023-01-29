---
layout: docs
type: manual
navigation: beeconnect_manuals
title: "Relevant Links (Webpart)"
---

Ein modernes Intranet erlaubt maximale Anpassungsmöglichkeiten der Hauptseite, damit die Mitarbeiter mit einem Mausklick die nötigen Dokumente in den Verzeichnissen finden können. Mit dem Webpart *Relevant Links* können die wichtigsten 5 Ablagen bzw. Links dazu in eine übersichtliche Darstellung verpackt und nach Bentzergruppen gesondert präsentiert werden (sog. Audience Targeting).

## Aufbau und Funktionsweise
Die Linkgruppen werden dazu zu sogenannten *Link Collection Definitions* («Linkdefinitions-Blöcke») zusammengefasst und dadurch passgenau den gewünschten AAD-Gruppen bereitgestellt. Damit lässt sich mit ein und demselben Webpart beispielsweise ein Linkportal für verschiedene Business Units eines Unternehmens einrichten. 

Jede **Linkgruppe** besteht aus zwei Teilen:
1. **Primärer Link** (sogenannter «Main-Link»); wird als grosses Fenster dargestellt
2. **Sekundäre Links** (sogenannte «Links»); werden (je nach Anzahl; max. 4) in Kacheln rechts des Primären Links dargestellt

Beispiel (1 Main-Link und 4 Sekundäre Links):
{% include figure.html alt='Beispielkonfiguration mit 1 Main-Link und 4 Sekundären Links (Standard)' src='/assets/images/beeConnect/beeEssentials-relevant-links-example.png' %}

zugehörige Beispielkonfiguration:
```json
[
  {
    "description": "Default",
    "aadGroupname": "Default",
    "mainLink": {
      "name": "Learning Center",
      "linkRefUrl": "https://bee365dev.sharepoint.com/sites/M365LP/SitePages/de/Home.aspx",
      "pictureRefUrl": "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1644&q=80",
      "callToAction": "Mehr erfahren ❯",
      "description": "Visionäres Denken, Kreativität und ein Flair für guten Softwarecode – so geht's bei uns weiter..."
    },
    "links": [
      {
        "name": "CEO Blog",
        "linkRefUrl": "https://bee365dev.sharepoint.com/sites/beeConnect/SitePages/R%C3%BCckblick-auf-ein-Pandemiejahr.aspx",
        "pictureRefUrl": "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        "iconName": "EditCreate"
      },
      {
        "name": "Portfolio",
        "linkRefUrl": "https://www.bee365.ch/portfolio/",
        "pictureRefUrl": "https://www.bee365.ch/_bee365/uploads/headerbild/bee365-portfolio.jpg",
        "iconName": "Album",
        "-callToAction": "Mehr erfahren ❯",
        "description": "Visionäres Denken, Kreativität und ein Flair für guten Softwarecode treffen auf eine breit gefächerte Erfahrung in der Zusammenführung von passenden und leistungsstarken Tools und Services aus der Microsoft Cloud zu kundenspezifischen Implementierungen."
      },
      {
        "name": "Produkte",
        "linkRefUrl": "https://www.bee365.ch/produkte/",
        "pictureRefUrl": "https://www.bee365.ch/_bee365/uploads/headerbild/Technologie/technologien_1274x560.jpg",
        "iconName": "ProductVariant"
      },
      {
        "name": "HR / Personal / Onboarding",
        "linkRefUrl": "https://bee365dev.sharepoint.com/sites/NewEmployeeOnboarding",
        "pictureRefUrl": "https://images.unsplash.com/photo-1557425493-6f90ae4659fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        "iconName": "Telemarketer"
      }
    ]
  }
]
```
## Darstellungsoptionen (ohne Header-Navigation)
In Bezug auf die Darstellung sind zwei Optionen wählbar:
1. Kacheldarstellung (Standard)
2. Bannerdarstellung

### Kacheldarstellung (Standard)
In der sogenannten **Kacheldarstellung** (Standard) wird die linke Seite 1️⃣ wie im folgenden Beispiel immer für den primären Link genutzt, die rechte Seite 2️⃣ für die sekundären Links:

{% include figure.html alt='Kacheldarstellung (Standard)' src='/assets/images/beeConnect/beeEssentials-relevant-links.png' %}

Es können **bis zu vier sekundäre Links** hinterlegt werden, wobei sich die Darstellung – je nach Anzahl der sekundären Links – dynamisch anpasst:

<div class="table-responsive" markdown="1">
{: .table .table-striped }
| #Links | Anordnung der Kacheln (Layout)                                                                                                   |
| :----: | :------------------------------------------------------------------------------------------------------------------------------- |
|   4    | gleich grosse Kacheln entlang deren Konfiguration (Reihenfolge: oben links – oben rechts – unten links – unten rechts)           |
|   3    | zwei kleinere und eine grössere Kacheln entlang deren Konfiguration (Reihenfolge: oben links – oben rechts – unten volle Breite) |
|   2    | zwei gleich grosse Kacheln entlang deren Konfiguration (Reihenfolge: oben volle Breite – unten volle Breite)                     |
|   1    | eine Kachel (volle Breite)                                                                                                       |
</div>

{% include figure.html alt='Dynamische Darstellung in Abhängigkeit der Anzahl sekundärer Links' src='/assets/images/beeConnect/beeEssentials-relevant-links-dynamic.png' %}
### Bannerdarstellung 
Die Darstellungsform als Banner eignet sich zur Aufhängung der relevanten Links in einem Präsentationsszenario, welches den Main Link ins Zentrum stellen und die sekundären Links als Buttons darstellen soll:

{% include figure.html alt='Bannerdarstellung' src='/assets/images/beeConnect/beeEssentials-relevant-links-banner.png' %}

Das zum Link bzw. Button gehörende Icon lässt sich in der Linkdeklaration über das Property `iconName` definieren (siehe [Details zur Linkdeklaration im Abschnitt unten](#audience-targeting-und-aufbau-von-linkgruppen-linkdeklaration)).


## Darstellungsoptionen (mit Header-Navigation)
Die oben beschreibenen Darstellungsoptionen lassen sich wahlweise noch um einen Navigationsbereich, die sogenannte «Header Navigation» erweitern:

{% include figure.html alt='Relevant Links mit Header-Navigation' src='/assets/images/beeConnect/beeEssentials-relevant-links-header.png' %}

Die Header-Navigation ist eine einfache Möglichkeit, das Webpart innerhalb eines Intranet Hubs oder einer Landingpage als grafisches Element einzusetzen und mittels Header-Navigation gleichzeitig **globale Navigationselemente** (optionales Logo, diverse Link, optionaler CTA-Button) zur Verfügung zu stellen.

{% include alert.html type='info' caption='Hinweis' content='Die Links innerhalb der Header-Navigation gelten global – d.h. für alle Mitarbeitenden – und lassen sich NICHT nach spezifischen Benutzergruppen einschränken (Audience Targeting).' %}


## Konfiguration und Einstellungen
Das wichtigste Konfigurationselement ist die *Linkdeklaration*, welche die Eigenschaften der Linkfelder sowie das sogenannte *Audience Targeting* (siehe nächster Abschnitt) definiert. Danbeben lassen sich auch *Anzeigestil* und die Höhe des Webparts (dynamisch) festgelegen, sowie die Parameter für die *Header-Navigation* deklarieren.

**Für die Anpassung braucht es:**

* Links für die wichtigsten Seiten abgestuft auf 1-5
* Bilder für die entsprechenden Links
* Die Rechtegruppe für die entsprechende Linkdeklaration

Diese Angaben könnnen unter "Deklaration des Links" angepasst werden.

{% include figure.html alt='Webpart-Settings (Standard)' src='/assets/images/beeConnect/beeEssentials-relevant-links-settings.png' %}

### Audience Targeting und Aufbau von Linkgruppen (Linkdeklaration)
Zur Illustration wird folgendes Szenario verwendet:
{% include figure.html alt='Kacheldarstellung (Standard)' src='/assets/images/beeConnect/beeEssentials-relevant-links.png' %}


Jede Linkgruppe ist gleich aufgebaut und wird über die Webpart-Konfiguration durch einen Administrator nach folgendem Schema definiert:

```json
[
  // 👇 Linkgruppe (pro Linkgruppe wiederholt sich dieser Inhalt)
  {
    // 👇 Beschreibung und Audience Targeting
    "description": "Default", // 👈 eine 'human readable' Beschreibung dieser Linkgruppe
    "aadGroupname": "Default", // 👈 Namen der Security Group (AAD), für welche diese Links sichtbar sein sollen
    
    // 👇 Deklaration des primären Links 1️⃣
    "mainLink": {
      // ...
    },
    "links": [
      // 👇 Deklaration aller sekundären Links 2️⃣
      {
        // ... wiederholt sich pro sekundärer Link
      }
    ]
  }
]
```

Für das **Audience Targeting** – die passgenaue Steuerung der Darstellung für eine bestimmte Benutzergruppe – sind innerhalb der Deklaration der Linkgruppe die folgenden zwei Attribute wichtig:

```json
[
  {
    "description": "Default", // 👈 eine 'human readable' Beschreibung dieser Linkgruppe
    "aadGroupname": "Default", // 👈 Namen der Security Group (AAD), für welche diese Links sichtbar sein sollen (Default: für alle sichtbar)
    
    // weitere Inhalte absichtlich weggelassen 
  }
]
```
Die **Linkgruppen** werden immer über zwei Attribute – `mainLink` und die Collection `links` definiert (siehe Beispielkonfiguration oben). Der Aufbau einer **spezifischen Linkdeklaration**, die in `mainLink` und `links` vorkommen, ist wie folgt:

```json
// 👇 spezifische Linkdeklaration
{
  "name": "Learning Center", // 👈 Angezeigter Titel 3️⃣
  "linkRefUrl": "https://bee365dev.sharepoint.com/sites/M365LP/SitePages/de/Home.aspx", // 👈 gewünschte Ziel-URL (Link)
  "pictureRefUrl": "https://images.unsplash.com/...", // 👈 URL des Bilds (Achtung: genauer Bildlink ist wichtig)
  "callToAction": "Mehr erfahren ❯", // 👈 Anzeige des CTA-Buttons (WICHTIG: wird nur im primären Link angezeigt) 5️⃣
  "iconName": "EditCreate", // 👈 mit dem Link angezeigtes Icon (nur in der Bannerdarstellung sichtbar)
  "description": "Visionäres Denken, Kreativität und ein Flair für guten Softwarecode – so geht's bei uns weiter...", // 👈 angezeigter Text 4️⃣
}
```