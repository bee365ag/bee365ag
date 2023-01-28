---
layout: docs
type: manual
navigation: beeconnect
title: "Relevant News (Webpart)"
---

Ein modernes Intranet erlaubt maximale Anpassungsmöglichkeiten der Newsseite, damit die Mitarbeiter mit einem Mausklick die nötigen Neuigkeiten lesen können. Mit beeEssentials: Relevant News können die wichtigsten 5 Ankündigungen in eine übersichtliche Darstellung verpackt werden. Die dargestellten können zu sogenannten Newsgruppen (NewsCollections) aggregiert werden, wobei für jede Newsgruppe ein spezifisches News-Query (KQL) sowie gewisse Darstellungsparameter unabhängig eingestellt werden können. Das News-Query erlaubt das Suchen nach Newsposts im gesamten SharePoint-Kontext des Benutzers. Es können jedoch keine externen Newsquellen angesteuert werden.

Die Newsgruppen können – wie auch die Linkgruppen in beeEssentials: Relevant Links (Webpart) – zu sogenannten NewsCollectionDefinitions («Newsdefinitions-Blöcke») zusammengefasst und dadurch passgenau den gewünschten AAD-Gruppen bereitgestellt werden. Damit lässt sich mit ein und demselben Webpart beispielsweise ein Newsportal für verschiedene Business Units eines Unternehmens einrichten. 

## Standarddarstellung

{% include figure.html alt='Benutzer-Flow (Standard)' src='/assets/images/beeConnect/beeEssentials-relevant-news.png' %}

Die linke Seite 1  wird für die primäre Newsgruppe – die sogenannten Primary News – genutzt, die rechte Seite 2  für die weiteren (sekundären) Posts als sogenannte sekundäre Newsgruppe (Secondary News Group). In der sekundären Newsgruppe können maximal 4 Newsdefinitionen (in obigem Beispiel drei dargestellt) hinterlegt werden, wobei sich die Darstellung entsprechend der Anzahl Newsgruppen anpasst.

## Darstellung mit Header-Navigation

{% include figure.html alt='Benutzer-Flow (Standard)' src='/assets/images/beeConnect/beeEssentials-relevant-news-header.png' %}

## Darstellungen

Die Darstellung der primären und der sekundären Newsgruppe(n) sind ähnlich aufgebaut, unterscheiden sich aber gemäss Tabelle in einem kleinen Detail:

<table class="table table-striped table-responsive">
<thead>
    <tr>
        <th></th>
        <th>Darstellungs- / Inhaltselement</th>
        <th>primäre Newsgruppe</th>
        <th>sekundäre Newsgruppe</th>
        </tr>
</thead>
<tbody>
    <tr>
        <td>3</td>
        <td>Miniatur-Bild aus dem `Banner Image` des Newsposts</td>
        <td>ok</td>
        <td >ok</td>
        </tr>
    <tr>
        <td>4</td>
        <td>Titel des Newsposts</td>
        <td>ok</td>
        <td>ok</td>
        </tr>
    <tr>
        <td>5</td>
        <td>Quelle des Newsposts (Name der SPO Site, in welcher der Post abgesetzt wurde)</td>
        <td>ok</td>
        <td>ok</td>
        </tr>
    <tr>
        <td>6</td>
        <td>Zusammenfassung / Schlagzeile des Newsposts (automatisch generierte bzw. editierbare Zusammenfassung des Artikels)</td>
        <td>ok</td>
        <td></td>
        </tr>
    <tr>
        <td>7</td>
        <td>Anzahl der in der Newsgruppe dargestellte Newsposts («Indikatoren»)</td>
        <td>ok</td>
        <td>ok</td>
        </tr>
</tbody>
</table>

## Konfiguration und Einstellungen
Die Höhe des Webparts kann dynamisch festgelegt werden. Das wichtigste Konfigurationselement ist jedoch die Deklaration der Newssuche, welche festlegt welcher Benutzergruppe welche Newsposts gezeigt werden.

**Für die Anpassung braucht es:**

* Links abgestuft auf 1-5
* Bis zu 5 Sharepoint Newssseiten mit Banner Image (Titelbild)
* Die Rechtegruppe, für die entsprechende Newsdeklaration

Diese Angaben könnnen unter "Deklaration des Newssuche" angepasst werden.

{% include figure.html alt='Benutzer-Flow (Standard)' src='/assets/images/beeConnect/beeEssentials-relevant-news-settings.png' %}
