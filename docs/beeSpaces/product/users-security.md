---
layout: docs
navigation: beespaces
title: Benutzer und Security
---

## Service Benutzer
beeSpaces benötigt im Kundenmandant einen dedizierten Dienstbenutzer (Service Account). Über dessen Zugriffsinformationen (Benutzername & Passwort) werden mittels entsprechender Dienstanfragen (sog. «Service Requests»; siehe {% include i18n/link path='beeSpaces/product/architecture.md' %}) gewisse Provisionierungsschritte aus dem Bereitstellungsdienst («Provisioning Service») von bee365 abgesetzt.

{% capture content %}
Empfehlung zur Namensgebung des Dienstbenutzers: `Service Provisioning <service.provisioning@...>`
{% endcapture %}
{% include alert.html type='info' caption='Hinweis' content=content %}

### Multi Factor Authentication & Conditional Access
Für den Service-Benutzer muss MFA zwingend deaktiviert sein. Regeln, welche Conditional Access-Einstellungen beinhalten, sind ebenfalls zu deaktivieren.

### zugewiesene Benutzerrollen
Für die Provisionierung von Workspaces (für Teams oder Sites in SharePoint Online) müssen folgende Rollen dem Service-Benutzer zugewiesen werden:

<table class="table table-striped table-responsive">
<thead>
    <tr>
        <th></th>
        <th>Zweck</th>
        <th>Benötigt für folgende Aktion(en)</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td markdown="span">**User Admin**</td>
        <td markdown="span">Gäste-Einstellungen pro Team bzw. pro M365-Gruppe zu hinterlegen; dadurch lässt sich auch der Gast-Zugriff für Teams festlegen (bspw. `allowtoaddguests=false`)</td>
        <td><ul>
            <li> Verwaltung der M356 Groups (Enable / Disable Guest Access)</li>
        </ul></td>
    </tr>
    <tr>
        <td markdown="span">**SharePoint Administrator**</td>
        <td markdown="span">Erstellen von Sites in SharePoint Online, Festlegen von Site-Einstellungen, Benutzermanagement</td>
        <td><ul>
            <li> Erstellung neuer Site Collections (Workspace Types: `Team Site`, `Communication Site`, `Team Workspace`, `Group Workspace`, `Classroom` [nur EDU])</li>
            <li>Applizieren eines PnP Provisioning Templates</li>
        </ul></td>
    </tr>
    <tr>
        <td markdown="span">**Teams Administrator**</td>
        <td markdown="span">Erstellen und Modifizieren von Teams in *Microsoft Teams*</td>
        <td><ul>
            <li>Erstellung neuer Teams (Workspace Types: `Team Workspace`, `Group Workspace`, `Classroom` [nur EDU])</li>
            <li>Festlegen der Benutzer-Mitgliedschaften (Team Owners, Team Members)</li>
            <li>Festlegen diverser Standard-Einstellungen im Team</li>
        </ul></td>
    </tr>
</tbody>
</table>

{% capture content %}
Für die intiale Bereitstellung braucht der Service-Benutzer zusätzlich Global Admin-Rechte (App-Registrierungen in der Azure AD), welche nach Abschluss der Bereitstellung für den produktiven Betrieb dem Benutzer wieder entzogen werden können.
{% endcapture %}
{% include alert.html type='warning' caption='Wichtig' content=content %}


## Allgemeine Benutzerrollen in *beeSpaces*
Im bereitgestellten Grund-Setup *beeSpaces* (in SharePoint Online) sind folgende Benutzer-Rollen vorgesehen:

<table class="table table-striped table-responsive">
<thead>
    <tr>
        <th>Rolle</th>
        <th>Bezeichnung</th>
        <th>Beschreibung</th>
        <th>Rechte</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>Administratoren</td>
        <td markdown="span">`Provisioning Administrators`</td>
        <td>Administratoren im Umfeld von <i>beeSpaces</i> haben Vollzugriff auf alle Elemente (Listen, Pages, …).
        {% include alert.html type='info' caption='Hinweis' content='Diese Rolle sollte nur internen IT Administratoren zugewiesen werden.' %}
        </td>
        <td markdown="span">`Vollzugriff (Full Control)`</td>
    </tr>
    <tr>
        <td>Superusers</td>
        <td markdown="span">`Provisioning Superusers`</td>
        <td>Provisioning Superusers sind Mitarbeitende aus dem Business, welche inhaltliche Änderungen an den Elementen am Provisioning-Setup vornehmen dürfen (Templates erstellen und löschen, zusätzliche Ressourcen definieren, …). Änderungen an Berechtigungen sowie dem bereitgestellten Grund-Setup sind nicht möglich.
        {% include alert.html type='info' caption='Hinweis' content='Diese Rolle ist bestimmt für sogenannte «Super User».' %}
        </td>
        <td markdown="span">`Mitwirken (Contribute)`</td>
    </tr>
    <tr>
        <td>Benutzer</td>
        <td markdown="span">`Provisioning Creators`</td>
        <td>Diese Benutzergruppe umfasst alle Benutzer:innen (vorzugweise gesammelt in einer AAD Security Group und hier referenziert), welche grundsätzlich Arbeitsbereiche bestellen dürfen / sollen.</td>
        <td markdown="span">`Bestellen [Workspace bestellen, ohne Editieren]`</td>
    </tr>
</tbody>
</table>

Wir empfehlen, dieses Grund-Setup nicht zu verändern. Ferner sei die Erstellung entsprechend **gleich lautender Security Groups** (in der Azure AD bzw. über das M365-Admin Center) sowie deren Mapping zu obigen Benutzerrollen in SharePoint umzusetzen.