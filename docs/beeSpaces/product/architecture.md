---
layout: docs
navigation: beespaces_product
title: Architektur
---

## Komponentenübersicht
*beeSpaces* benötigt einen Dienst bei Microsoft Azure für die Verarbeitung von Provisionierungs-Aufträgen (Bereitstellung, Inhaltserstellung, Benachrichtigungen, usw.). Die folgende Verteilübersicht ist entscheidend:

{% include figure.html alt='beeSpaces components' src='/assets/images/beeSpaces/components.png' %}


## Azure AD App-Registrierung & Enterprise Apps
Der Zugriff auf die Kundenumgebung erfolgt über zwei *Enterprise Apps*: über die **dedizierte App-Registrierung beeSpaces (bzw. *beeProvisioning*) sowie mit Hilfe der *PnP Management Shell***. Die beeSpaces App-Registrierung orchestriert die *Provisionierungs-Engines* anhand von Konfigurationen, Eingabeparametern und Informationen über die Kundenumgebung. Benötigte Informationen der Kundenumgebung werden über die *Microsoft Graph API* ausgelesen. Entsprechende Berechtigungen müssen somit dieser App-Registrierung zugewiesen werden.

Die Orchestrierung beinhaltet auch (falls im Anwendungsfalle des Kunden notwendig) die Ausführung von *Pre- und Post Provisioning Engines* innerhalb der Kundenumgebung. Dazu wird keine zusätzliche App-Registrierung benötigt, jedoch sind entsprechende Ausführungsrechte (IAM) auf die Skripte erforderlich.

Die *Provisionierungs-Engines* sowie grosse Teile der Installationsroutinen nutzen das PowerShell-Module *PnP.Powershell* und somit die *PnP Management Shell* Unternehmensapplikation. **Zugriffe auf die Kundenumgebung erfolgen ausschliesslich mit delegierten Rechten, folglich benötigt es einen Dienstbenutzer mit entsprechenden Rechten und Rollen.**

### Multi Factor Authentication & Conditional Access
{% capture content %}
Es dürfen KEINE Policies aktiv sein, welche MFA oder Conditional Access (inkl. ADFS) für die Azure AD-App ``beeProvisioning`` (bzw. ``beeSpaces``) implementieren (Azure AD, M365 Defender, Intune, …).
{% endcapture %}
{% include alert.html type='warning' caption='Hinweis' content=content %}

{% capture content %}
Allfälliges Troubleshooting für MFA und Conditional Access ist extrem zeitintensiv (nicht in der Bereitstellungspauschale enthalten) und wird durch bee365 dem Kunden bzw. dessen IT-Provider separat in Rechnung gestellt.
{% endcapture %}
{% include alert.html type='info' content=content %}

MFA und Conditional Access sind nicht erlaubt. Dies gilt für folgende App-Registrierungen:

* *beeProvisioning* (bzw. *beeSpaces*): deaktiviert
* *PnP Management Shell*: deaktiviert

### Zugriffsbeschränkung für bestimmte Benutzer
{% capture content %}
Es dürfen KEINE Policies aktiv sein, welche MFA oder Conditional Access (inkl. ADFS) für die Service-Benutzer implementieren (Azure AD, M365 Defender, Intune, …).
{% endcapture %}
{% include alert.html type='warning' caption='Hinweis' content=content %}

Optional und aus Überlegungen im Zusammenhang mit erhöhter Sicherheit beim Zugriff auf die jeweilige Enterprise App (gilt für beeSpaces und PnP Management Shell) kann die Zugriffsbeschränkung für Benutzer in den App-Einstellungen der Azure AD aktiviert werden. Dies schränkt den Zugriff durch Benutzer mit delegierten Ausführungsrechten auf einen festgelegten bzw. klar definierten Benutzerkreis ein. Der für die Provisionierungs-Dienste notwendige Service-Benutzer (siehe Kapitel «Benutzer und Security») muss in diesem Falle entsprechend berechtigt werden. 

### Azure AD-Berechtigungen, die für beeSpaces erforderlich sind
{% capture content %}
Es dürfen KEINE Policies aktiv sein, welche MFA oder Conditional Access (inkl. ADFS) für die Azure AD-App ``beeProvisioning`` (bzw. ``beeSpaces``) implementieren (Azure AD, M365 Defender, Intune, …).
{% endcapture %}
{% include alert.html type='warning' caption='Hinweis' content=content %}

#### beeSpaces API
Bei der Registrierung der *beeProvisioning* App-Registrierung in der Microsoft Azure-Umgebung des Kunden werden folgende Berechtigungen benötigt:

<table class="table table-striped table-responsive">
<thead>
    <tr>
        <th>Ressource</th>
        <th>Berechtigung</th>
        <th>Beschreibung</th>
        <th>Typ</th>
        <th>Begründung</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>Microsoft Graph</td>
        <td markdown="span">`Sites.ReadWrite.All`</td>
        <td>Read and write items in all site collections</td>
        <td markdown="span">`Application`</td>
        <td><ul>
            <li> REQUIRED ermöglicht die Provisionierung von Spaces via API (v2)</li>
            <li> REQUIRED ermöglicht das Abhandeln von Notifikationen und Verlängerungen der Spaces mit beeSpaces Lifecycle (add-on)</li>
            <li> REQUIRED ermöglicht das Deprovisionieren via API (v2)</li>
        </ul></td>
    </tr>
    <tr>
        <td>Microsoft Graph</td>
        <td markdown="span">`Sites.Read.All`</td>
        <td>Read items in all site collections</td>
        <td markdown="span">`Application`</td>
        <td><ul>
            <li> REQUIRED stellt die Überwachtung der Lebenszyklen mit <i>beeSpaces Lifecycle (add-on)</i> sicher</li>
        </ul></td>   
    </tr>
</tbody>
</table>

{% capture content %}
Die oben genannten Berechtigungen sind für das empfohlene Standardsetup zwingend notwendig. Werden Funktionen wie das Lifecycle selbst, Verlängerung von Spaces oder die API weggelassen, so können bei den Berechtigungen weitere Einschränkungen gemacht werden.

Je nach Erweiterung werden ggf. auch zusätzliche Berechtigungen benötigt (bspw. für beeSpaces Insights). Diese sind den Dokumentationen der jeweiligen Erweiterung zu entnehmen.
{% endcapture %}
{% include alert.html type='info' content=content %}

#### Provisioning Setup
Die Bereitstellung der Provisionierungsumgebung im Kundenmandant erfolgt immer über einen separaten Administrationszugang. Dabei handelt es sich nicht um einen Dienstbenutzer, sondern einen Benutzerzugang mit Administrationsrechten in *SharePoint Online*.

<div class="table-responsive" markdown="1">
| Ressource | Berechtigung                      | Beschreibung                                        | Typ         |
| :-------- | :-------------------------------- | :-------------------------------------------------- | :---------- |
| Azure AD  | Rolle: `Standard Benutzer`        | Erstellen von App-Registrierungen *                 | `Delegated` |
| Azure AD  | Rolle: `Abonnement-Besitzer`      | Anfordern und Bewilligen von Rechten                | `Delegated` |
| Azure AD  | Rolle: `SharePoint Administrator` | Erstellen der Bestellumgebung auf SharePoint Online | `Delegated` |
{: .table .table-striped }
</div>
* = Diese Funktion kann für Standardbenutzer deaktiviert werden. In diesem Falle würde auch hierfür die Rolle `Abonnement-Besitzer` nötig

#### Lifecycle Setup (add-on)
Die Bereitstellung der Provisionierungsumgebung im Kundenmandant erfolgt immer über einen separaten Administrationszugang. Dabei handelt es sich nicht um einen Dienstbenutzer, sondern einen Benutzerzugang mit Administrationsrechten in *SharePoint Online*.

<div class="table-responsive" markdown="1">
| Ressource | Berechtigung                      | Beschreibung                              | Typ         |
| :-------- | :-------------------------------- | :---------------------------------------- | :---------- |
| Azure AD  | Rolle: `SharePoint Administrator` | Installieren der benötigten Erweiterungen | `Delegated` |
{: .table .table-striped }
</div>

#### beeSpaces for Education Setup (add-on)
Die Bereitstellung der Provisionierungsumgebung im Kundenmandant erfolgt über einen separaten Administrationszugang via dedizierten Benutzerzugang mit Administrationsrechten in *SharePoint Online*.

<div class="table-responsive" markdown="1">
| Ressource       | Berechtigung                      | Beschreibung                                 | Typ           |
| :-------------- | :-------------------------------- | :------------------------------------------- | :------------ |
| Azure AD        | Rolle: `SharePoint Administrator` | Installieren der benötigten Erweiterungen    | `Delegated`   |
| Microsoft Graph | `Sites.ReadWrite.All`             | Read and write items in all site collections | `Application` |
{: .table .table-striped }
</div>

Zudem sind im Zusammenhang mit den Education Szenarien – welche über Microsoft Graph umsetzbar sind – folgende Berechtigungen via Dienstbenutzer nötig:

<table class="table table-striped table-responsive">
<thead>
    <tr>
        <th>Ressource</th>
        <th>Berechtigung</th>
        <th>Beschreibung</th>
        <th>Typ</th>
        <th>Begründung</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>Microsoft Graph</td>
        <td markdown="span">`EduRoster.Read.All`</td>
        <td>Read the organization's roster</td>
        <td markdown="span">`Application`</td>
        <td><ul>
            <li> REQUIRED ermöglicht die Erstellung und Aktualisierung von Klassen-Teams</li>
        </ul></td>
    </tr>
    <tr>
        <td>Microsoft Graph</td>
        <td markdown="span">`EduRoster.ReadWrite.All`</td>
        <td>Read and write the organization's roster</td>
        <td markdown="span">`Application`</td>
        <td><ul>
            <li> REQUIRED ermöglicht die Erstellung und Aktualisierung von Klassen-Teams</li>
        </ul></td>   
    </tr>
</tbody>
</table>


### Azure AD-Berechtigungen, die für die «PnP Management Shell» erforderlich sind
Zur Bereitstellung bzw. Provisionierung verwendet beeSpaces das PnP Provisioning Framework zur codezentrischen und vorlagenbasierten Bereitstellung von SharePoint-, Teams- und weiteren M365-Ressourcen. Die Verbindungen zwischen den Provisionierungs-Engines von bee365 und der Kundenumgebung erfolgt über eine dedizierte Azure AD-Applikation («PnP Management Shell») mit den jeweiligen Anwendungs- und Benutzerberechtigungen für die Microsoft Graph API. 

{% capture content %}
Die effektiv benötigten Berechtigungen sind abhängig von den Provisioning-Templates, welche beim Kunden zum Einsatz kommen.
{% endcapture %}
{% include alert.html type='info' content=content %}

Damit werden folgende Berechtigungen im Kontext von beeSpaces nötig. Dieses Setup, das in den nächsten beiden Abschnitten beschrieben wird, ist essentiell.

{% capture content %}
Es dürfen KEINE Policies aktiv sein, welche MFA oder Conditional Access für die Azure AD-App `PnP Management Shell` implementieren.
{% endcapture %}
{% include alert.html type='warning' caption='Hinweis' content=content %}

#### Provisioning Engines
Die *Provisionierungs-Engines* erfordern delegierte Zugriffsrechte für den dedizierten Dienstbenutzer (siehe Kapitel «beeSpaces Benutzer und Security»):

<div class="table-responsive" markdown="1">
| Ressource       | Berechtigung                                                 | Beschreibung                                      | Typ           |
| :-------------- | :----------------------------------------------------------- | :------------------------------------------------ | :------------ |
| Azure AD        | Rollen: `SharePoint Administrator` und `Teams Administrator` | Zugriff zur *SharePoint Online* Adminstrationsseite | `Delegated`   |
| Azure AD        | Rollen: `SharePoint Administrator` | Erstellen von *Team Sites* in SharePoint Online (Workspace-Typen: `Team Site`, `Communication Site`, `Group Workspace`) | `Delegated` |
| Azure AD        | Rollen: `SharePoint Administrator` | Festlegen der Besitzer von *Team Sites* in SharePoint Online: `Team Site`, `Communication Site`, `Group Workspace`) | `Delegated` |
| Azure AD        | Rollen: `SharePoint Administrator` | Erstellen von Teams (*Microsoft Teams*) und *Teams Sites* in *SharePoint Online* (Workspace-Typen: `Team Workspace`, `Classroom` [nur EDU]) | `Delegated` |
{: .table .table-striped }
</div>

