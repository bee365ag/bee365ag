---
layout: page
title: Architecture
---

It's not required to have a deep understanding of the *beeSpaces* architecture to use the API, but it may helps
to understand which system contains which information and what can be customized respectively controlled by
the API consumer.

{% capture content %}
This page doesn't include a detailed product architecture. For the sake of complexity, it's reduced to the parts that are relevant for using the API.
{% endcapture %}
{% include alert.html type='info' caption='Note' content=content %}

![beeSpaces setup]({{site.baseurl}}/assets/images/architecture.png)

The above pictures roughly illustrates a *beeSpaces* setup. The default usage (without API) is controlled
by the *Wizard* installed on the target environment. The *Wizard* processes the `Workspace Templates`
list and asks a user for additional arguments to a selected template. Once all information is available, the wizard
does some checks and computations (according to its individual configuration), stores the order in the
`Workspaces` list (aka. order list) and triggers the provisioning on the *bee365 ag* service environment.

The provisioning itself can consist of multiple phases (pre-, post- and mainprovisioning) where the
pre- and postprovisioning phases are executed in the target environment. Please take a look to the 
{% include i18n/link path='beeSpaces/api/advanced-usage.md' %} page for more information about this topic.

The main provisioning step is executed by an engine that is specialized for certain environment types and setups.
Some of these engines, mainly such that setup a SharePoint environment, do required additional resources stored
on the target environment's `Workspace Resources` document library. Such an additional resource
could be a *PnP-Provisioning-Template*.

When the *beeSpaces* setup needs to be further integrated into existing platforms or automation routines, it's
possible to control this interaction without the *Wizard*. In such a case, the "Automation Platform" must
take responsibility of gathering the correct "order data" and submitting this information to a simplified (in terms
of submitted data) version of the API.

The enrichment of the "order data" with template information and the maintenance of the *Workspaces* list is
done by the ``provisioning runtime``.
