---
layout: docs
navigation: beeconnect
title: Benutzer und Rollen
---

### Benutzerrollen
Im bereitgestellten *beeConnect Intranet Hub* (in SharePoint Online) sind folgende Benutzer-Rollen vorgesehen:

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
        <td>Administrator</td>
        <td markdown="span">`SmartIntranet Admins`</td>
        <td>Administratoren im Umfeld von <i>beeConnect</i> haben Vollzugriff auf alle Elemente im Intranet Hub (Listen, Pages, …).
        {% include alert.html type='info' caption='Hinweis' content='Diese Rolle sollte nur internen IT Administratoren zugewiesen werden.' %}
        </td>
        <td markdown="span">`Vollzugriff (Full Control)`</td>
    </tr>
    <tr>
        <td>Content Administratoren</td>
        <td markdown="span">`SmartIntranet ContentAdmins`</td>
        <td>Content Admins sind redaktionelle Autoren aus dem Business, welche inhaltliche Änderungen an den Elementen im Intranet Hub ergänzen können (Dokumente erstellen und löschen, zusätzliche Pages erstellen und löschen, News posten, …). Änderungen an Berechtigungen sowie der Grundstruktur sind nicht möglich.
        {% include alert.html type='info' caption='Hinweis' content='Diese Rolle ist bestimmt für Redaktoren oder «Super User».' %}
        </td>
        <td markdown="span">`Mitwirken (Contribute)`</td>
    </tr>
    <tr>
        <td>Benutzer</td>
        <td markdown="span">`SmartIntranet Users`</td>
        <td>Diese Benutzergruppe umfasst alle Benutzer:innen (vorzugweise gesammelt in einer AAD Security Group und hier referenziert), welche Lesezugriff auf das Konstrukt haben sollen.</td>
        <td markdown="span">`Lesen (Read)`</td>
    </tr>
</tbody>
</table>

Wir empfehlen daher die Erstellung entsprechend **gleich lautender Security Groups** (in der Azure AD bzw. über das M365-Admin Center) sowie deren Mapping zu obigen Benutzerrollen in SharePoint.