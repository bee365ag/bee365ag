---
layout: docs
navigation: beespaces_api
title: Advanced Usage
---

## Pre-/Postprovisioning

*beeSpaces* allows to execute routines before and after the main provisioning steps. These routines
are executed within the target environment and individual to every environment or even template.

Preprovisioning routines are typically not necessary if *beeSpaces* is integrated into a process automation
system, as this system can already execute certain stuff upfront.

Postprovisioning routines however, can be interesting as these are called if the resources are provisioned
properly. In this step one could, for example, send some notifications or write back certain identifiers.

.. note::
Currently only Azure Runbooks are supported, please contact your *beeSpaces* supplier for detailed
setup instructions.

If such a routine is available it needs to be included in the main requests body withing the settings section:

```json
{
    "settings": {
        "preprovisioning": {
            "type": "runbook",
            "runbook": "preprovisioning",
            "subscriptionId": "6d8b6078-047d-4806-89a3-ee40ed8fd997",
            "resourceGroup": "beeSpaces",
            "automationAccount": "beeSpaces"
        },
        "postprovisioning": {
            "type": "runbook",
            "runbook": "postprovisioning",
            "subscriptionId": "6d8b6078-047d-4806-89a3-ee40ed8fd997",
            "resourceGroup": "beeSpaces",
            "automationAccount": "beeSpaces"
        }
    }
}
```

{% include alert.html type='warning' caption='Warning' content='The above example omits all standard elements.' %}

The pre-provisioning routine receives the input data, it's output is caught and forwarded
to the main provisioning step, which output is also caught and forwarded to the post-provisioning routine. Let's
assume the template includes only a ``Title`` and no other fields, then data similar to the following examples are
forwarded.

```jsonc
// API call body
{
  "Title": "Dragonfly",
  "settings": "..."
}
```

```typescript
// Preprovisoning data
correlationId = '9f5f1553-e2aa-4e48-884a-1cfbb77dd4fb'
data = {
    Title: 'Dragonfly'
    // ... plus settings
}
```

```typescript
// Provisoning data
correlationId = '9f5f1553-e2aa-4e48-884a-1cfbb77dd4fb'
data = {
    Title: 'Dragonfly',
    results: {
        preprovisioning: {
            referenceNumber: 'PRJ-551818'
        }
    }
    // ...
}
```

```typescript
// Postprovisioning data
correlationId = '9f5f1553-e2aa-4e48-884a-1cfbb77dd4fb'
data = {
    Title: 'Dragonfly',
    results: {
        preprovisioning: {
            referenceNumber: 'PRJ-551818'
        },
        provisoning: {
            Title: 'Dragonfly',
            Url:  'https://contoso.sharepoint.com/sites/PRJ-551818'
        }
    }
    // ...
}
```

{% include alert.html type='info' caption='Info' content="
The exact data that is passed is dependent on the individual output of the runbook or results.
*beeSpaces* tries to convert the output into a JSON, if it's not possible the output will be attached as
plaintext." %}