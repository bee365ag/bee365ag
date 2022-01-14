---
layout: docs
navigation: beespaces_api
title: Basic Usage
---

The usage of the *beeSpaces-API* is pretty straightforward, it's a single `HTTP-POST`. The data that needs to
be included in this request however is heavily dependent on the actual setup and the requirements of the target
environment. Therefore, it's not a bad idea to have a rough overview of the
{% include i18n/link path='beeSpaces/api/architecture.md' %} in mind, to
gather the required information fast and to understand certain constraints.


## Placing an Order

As already mentioned above, a order can be placed with a simple ``HTTP-POST``.
The requests are protected by an API key sent with the HTTP header.

{% include alert.html type='info' caption='Note' content='Please contact your *beeSpaces* supplier for getting the connection and authentication information.' %}
    
```shell
curl -L -X POST 'https://beeprovisioning.azurewebsites.net/api/v2.0/contoso/provision' \
    -H 'apikey: c0n70s0' \
    -H 'Content-Type: application/json' \
    --data-raw '{...}'
```

The ``data-raw`` parameter contains a JSON-Object with the detailed order information and certain settings.

```typescript
interface OrderData {
  // environment specific order data
  [property: string]: string | boolean | User | User[];

  // name of the beeSpaces template
  template: string;

  // computed properties based on the order data
  computed?: {[property: string]: string};

  // additional provisioning settings
  settings?: {
    // for spaces including sharepoint, a reference to the PnP-Provisioning-Template
    template?: PnPTemplateReference;

    // for pre- and postprovisioning please see the advanced usage page
    preprovisioning?: PostPreProvisioningOptions;
    postprovisioning?: PostPreProvisioningOptions;
  }
}

interface User {
  UserPrincipalName: string;
}

interface PnPTemplateReference {
  site: string;
  path: string;
  name: string;
}
```

As stated in the {% include i18n/link path='beeSpaces/api/architecture.md' %} section, *beeSpaces* uses SharePoint 
lists to manage orders. Therefore, the order data must be aligned with the SharePoint-ContentTypes used in the lists. 
As a small example the `Projekt (Team Workspace)` content type from the basic setup has the following "columns":

| Display Name  | Field         | Type              | Status   |
|:--------------|:--------------|:------------------|:---------|
| WorkspaceType | WorkspaceType | Choice            | Hidden   |
| Projektnummer | Projektnummer | Text, Single Line | Required |
| Kurzbeschrieb | Kurzbeschrieb | Text, Multiline   | Required |
| Owner         | Owner         | User              | Required |
| Member        | Member        | User              | Optional |
| Titel         | Title         | Text, Single Line | Required |
{: class="table table-striped"}

The ``POST`` body could look like the following:

```json
{
  "Title": "Dragonfly",
  "Projektnummer": "FY2019-551815",
  "Kurzbeschrieb": "Studium von Saturns Eismond Titan und fortführende Forschung zu den Bausteinen des Lebens im Universum.",
  "Owner": { "UserPrincipalName": "PattiF@contoso.onmicrosoft.com" },
  "Member": [
    { "UserPrincipalName": "DiegoS@contoso.onmicrosoft.com" },
    { "UserPrincipalName": "NestorW@contoso.onmicrosoft.com" }
  ],

  "template": "Projekt",

  "computed": {
    "teamTitle": "PRJ Dragonfly",
    "teamAlias": "PRJ-FY2019-551815"
  },

  "settings": {
    "template": {
      "site": "https://constoso.sharepoint.com/sites/beeSpaces",
      "path": "WorkspaceResources/Workspace-Projekt.xml",
      "name": "Projekt"
    }
  }
}
```


{% capture content %}
To avoid naming issues, the API uses the ``Field``-Name of the columns.
The two values look pretty similar but there's a difference if using special
chars or multiple languages. Further, the display name can be changed later,
whereas the field name is fixed once created.
<br><br>
As an example, a new column called ``'Start Year'`` has the
``Field``-Name ``'Start_x0020_Year'``. If renamed later
to ``'Start Fiscal Year'`` the field stays ``'Start_x0020_Year'``.
{% endcapture %}
{% include alert.html type='warning' caption='Warning' content=content %}

The ``computed`` section in the above example includes the values
``teamTitle`` and ``teamAlias``. These values are usually
"computed" based on the user inputs and some configurations by the *SharePoint-UI*.

The ``computed`` values are only required if the *PnP-Provisioning-Template* references
these fields (as the template from the basic installation does).

```xml
<!-- ... -->
<pnp:Parameters>
  <pnp:Parameter Key="TeamTitle">{computed.teamTitle}</pnp:Parameter>
  <pnp:Parameter Key="TeamAlias">{computed.teamAlias}</pnp:Parameter>
  <pnp:Parameter Key="Description">{computed.teamTitle}</pnp:Parameter>
</pnp:Parameters>
<!-- ... -->
```

## Tracking the Provisioning

The above ``POST`` request can lead to usual errors like ``400 Bad Request``, ``403 Forbidden`` or ``500 Internal Server Error``
if something went wrong with placing the order. The provisioning itself is executed asynchronously as it could take
several minutes until completion. Therefore, a ``202 Accepted`` is returned if the order was successfully placed at
the API.

{% capture content %}
The ``200 Accepted`` doesn't mean that the provisioning is completed nor successful. There are a lot of interactions between multiple systems that could lead to errors.
{% endcapture %}
{% include alert.html type='warning' caption='Warning' content=content %}

The ``202 Accepted`` response includes a tracking id and a polling URL to track the provisioning progress:

```json
{
    "id": "005777a277d04f56992801b52cd49411",
    "statusQueryGetUri": "https://beeprovisioning.azurewebsites.net/api/v1.0/contoso/status/005777a277d04f56992801b52cd49411"
}
```

With the URL value ``statusQueryGetUri`` the actual progress of the provisioning can be polled:

```shell
curl -L -X GET 'https://beeprovisioning.azurewebsites.net/api/v1.0/contoso/status/005777a277d04f56992801b52cd49411' \
    -H 'apikey: c0n70s0'
```

{% include alert.html type='success' caption='Hint' content="Don't forget to put the API-Key in the request header" %}

The response of the above ``GET`` could look like this:

```json
{
  "instanceId": "005777a277d04f56992801b52cd49411",
  "runtimeStatus": "Running",
  "customStatus": {
    "step": "Provisioning"
  },
  "output": null,
  "createdTime": "2021-10-20T06:22:10Z",
  "lastUpdatedTime": "2021-10-20T06:24:38Z"
}
```

``instanceId``
: is the actual job identifier or, if you wish, the tracking token

``runtimeStatus``
: is the actual status of the provisioning. Possible states are:
    * **Pending:** The job has been scheduled but has not yet started running.
    * **Running:** The job has started running and is actually executed.
    * **Completed:** The job has completed normally.
    * **Failed:** The job failed with an error.
    * **Terminated:** The job was stopped abruptly.

``customStatus.step``
: represents the actual provisioning step or phase. Possible values are:
    * **Initialization:** The job has just started and is initializing required resources
    * **Order Registration:** The job is placing the order to the order list (SharePoint)
    * **Pre-Provisioning:** A Pre-Provisioning job is currently executed
    * **Provisioning:** The main provisioning phase is executed
    * **Post-Provisioning:** A Post-Provisioning job is currently executed
    * **Termination:** The provisioning is completed and the job is cleaning up temporary resources
    * **Completed:** The job has completed

{% capture content %}
If the job fails (``runtimeStatus == 'Failed'``) the step keeps its old value and doesn't change to ``Termination`` or ``Completed``. This helps to track down the failed step quickly.
{% endcapture %}

{% include alert.html type='info' caption='Note' content=content %}

``output``
: once completed (``runtimeStatus = 'Completed' || runtimeStatus =='Failed'``), contains the results of the provisioning steps respectively an error message.
