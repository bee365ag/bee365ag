---
layout: docs
navigation: beeconnect
title: "beeEssentials: Graph Data Provider"
---

Microsoft Graph ist das Tor zu Daten und Intelligenz in Microsoft 365. Es bietet ein einheitliches Programmierbarkeitsmodell, mit dem Sie auf die enormen Datenmengen in Microsoft 365, Windows und Enterprise Mobility + Security zugreifen können. Mit beeEssentials: Graph Data Provider kann man auf diese Datenmengen der Microsoft Graph API zugreifen, um sie danach mit einem anderen Webpart schön darzustellen. Dies kann beispielsweise mit dem Adaptive Card Webpart oder dem HTML Renderer Webpart umgesetzt werden.

Diese Webparts zur Darstellung von Daten haben ein grosses Potential, sind aber ohne die Daten nichts wert. Die Daten werden in Echtzeit (live) abgerufen und erfordern entsprechende Berechtigungen:

{% include alert.html type='warning' caption='Wichtig' content='Je nachdem welche Informationen geladen werden, müssen die entsprechenden Rechte der SharePoint Online Client Extensibility Web Application Principal Applikationsregistrierung hinterlegt werden. Dazu bitte die API-Beschreibung konsultieren.' %}

Die Microsoft Graph API ist sehr umfangreich und vielseitig – entsprechende Konfiguration der gewünschten Requests entlang der jeweiligen Dokumentation ist vorausgesetzt.

Der GraphDataProvider selbst stellt keine Daten dar, sondern bezieht diese ausschliesslich über die API. Im nachfolgenden Beispiel werden mir zugewiesenen Teams (/me/joinedTeams) abgefragt:

{% include figure.html alt='Benutzer-Flow (Standard)' src='/assets/images/beeConnect/beeEssentials-graph-data-provider.png' %}

{% capture content %}
Der GraphDataProvider ist nur im Editiermodus ersichtlich. 
{% endcapture %}
{% include alert.html type='info' caption='Hinweis' content=content %}


{% include alert.html type='warning' caption='Wichtig' content='Der GraphDataProvider muss, auch wenn er selbst keine Daten darstellt, an einem Ort platziert werden, welcher von SharePoint Online auch geladen wird. Ein zuklappbares Panel wird bspw. nicht funktionieren.' %}

## Einstellungen

<table class="table table-striped table-responsive">
<thead>
    <tr>
        <th>Gruppe</th>
        <th>Einstellung</th>
        <th>Beschreibung</th>
        <th>Beispiel</th>
        </tr>
</thead>
<tbody>
    <tr>
        <td>Uplink</td>
        <td>Uplink</td>
        <td>Der Uplink ermöglicht es die ausgeführten Abfragen zu parametrisieren. Als Uplink können andere DataProvider (auch eine anderer GraphDataProvider) angegeben werden. Die “injizierten” Daten können für den Pfad sowie den Filter genutzt werden. 
        {% include alert.html type='warning' caption='Wichtig' content='Die Eingabedaten werden mit handlebars verarbeitet und müssen diesem Syntax ensprechen.' %}</td>
        <td >
        
        

   

-> Pfad:/groups/{{queryParameters.teamid}}        /users/{{queryParameters.userprincipalname}}

-> Filter: starswith(displayName, '{{queryParameters.projectType}}')```
</td>
        </tr>
    <tr>
        <td>Provider</td>
        <td>Identifier</td>
        <td>Dies ist die ID des jeweiligen Providers, sie muss zwar nicht vergeben und auch nicht eindeutig sein, hilft es aber den überblick bei mehreren Datenprovidern zu halten.</td>
        <td></td>
        </tr>
    <tr>
        <td>Graph</td>
        <td>API (path)</td>
        <td>Addressiert die eigentliche API bzw. Ressource welche von der API geladen werden soll.</td>
        <td>
        /me/joinedTeams</td>
        </tr>
    <tr>
        <td></td>
        <td>Version</td>
        <td>Selektiert die API-Version.
          {% include alert.html type='warning' caption='Wichtig' content='Die beta API gilt nicht als stabil und sollte nicht in produktiven Umgebungen verwendet werden.' %}</td>
        <td></td>
        </tr>
    <tr>
        <td></td>
        <td>Selection</td>
        <td>	
Ermöglicht es das Resultat zu verkleinern und so weniger/keine unnötigen Daten zu laden.</td>
        <td>id,displayName</td>
        </tr>
    <tr>
        <td></td>
        <td>Expansion</td>
        <td>	
Gewisse Resourcen sind mit anderen verknüpft und können mithilfe der Expansion in einem Aufruf geladen werden.</td>
        <td>members($select=displayName)</td>
        </tr>
    <tr>
        <td></td>
        <td>Filter</td>
        <td>	
	
Insbesondere Listen können auf die notwendigen Einträge gefiltert werden.</td>
        <td>startswith(displayName, 'prj')</td>
        </tr>
    <tr>
        <td></td>
        <td>Count</td>
        <td>	
	
Count liefert ein zusätzliches Attribut, welche die total Anzahl an Elementen beinhaltet.</td>
        </tr>
    <tr>
        <td></td>
        <td>Ordering</td>
        <td>	
	
Sortiert Listen nach ihren Eigenschaften.</td>
    <td>        displayName,createdDateTime

</td>
        </tr>
    <tr>
        <td></td>
        <td>Limitation</td>
        <td>	
	
Limitiert die zurückgelieferten anzahl der Elemente.</td>
    <td>5</td>
    </tr>
         <tr>
        <td></td>
        <td>Skip</td>
        <td>	
	
Überspringt die ersten n Elemente des Resultats.
{% capture content %}
Erzeugt man mehrere GraphDataProvider und kombiniert Limitation und Skip geschickt, so können Elemente bspw. auf mehrere Spalten aufgeteilt werden:

-> * ```/me/joinedTeams → limit=5, skip=0```

-> * ```/me/joinedTeams → limit=5, skip=5```

-> * ```/me/joinedTeams → limit=5, skip=10```
{% endcapture %}
{% include alert.html type='info' caption='Hinweis' content=content %}</td>
    <td>5</td>
        </tr>
</tbody>
</table>





