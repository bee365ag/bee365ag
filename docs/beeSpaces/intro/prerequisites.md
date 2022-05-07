---
layout: docs
navigation: beespaces
title: Anforderungen
---

## Microsoft 365
### Sicherheit
#### Multi Factor Authentication und Conditional Access
**MFA** und **Conditional Access** müssen zwingend deaktiviert sein. Dies gilt grundsätzlich für den verwendeten Service-Benutzer, die App-Registrierung (Azure AD) «PnP Management Shell» sowie die App Registrierung (Azure AD) «beeSpaces» (siehe {% include i18n/link path='beeSpaces/product/architecture.md' %}).

{% capture content %}
Nicht deaktiviertes MFA und CA-Policies behindern die korrekt Funktionsweise von beeSpaces im Zusammenspiel zwischen kundenseitigem Setup und zentraler Bereitstellung der Services bei bee365.
Das Troubleshooting ist äusserst zeitaufwändig und nicht in der Grundinstallation vorhanden.
{% endcapture %}
{% include alert.html type='info' caption='Hinweis' content=content %}


### Lizenzierung
#### Standard / Provisioning
{% capture content %}
Der Service Automation Benutzer (bzw. der ausführende Service Benutzer) benötigt ein Postfach (Exchange Online) und eine Lizenz zur Benützung von Microsoft Teams. Eine Microsoft 365 Business Basic-Lizenz genügt dazu grundsätzlich, optimalerweise wird dem Service Automation Benutzer allerdings eine Office 365 E3 Lizenz zugewiesen.
{% endcapture %}
{% include alert.html type='warning' caption='Empfehlung' content=content %}

#### Request Processing: Genehmigungen oder andere vorgeschaltene Workflows zur Überprüfung 
Falls Genehmigungen oder Prüfmechanismen notwendig sind, so muss dies eigenständig in einer Workflow Engine realisiert werden (bspw. mittels *Power Automate*, *Azure Logic Apps* oder einer beliebigen Dritthersteller-Applikation zu diesem Zwecke). Dafür notwendige Lizenzen sowie deren Beschaffung liegen ausserhalb des Zuständigkeitsbereichs von bee365. 


## beeSpaces
### Provisioning Service bei bee365 sowie Komponenten und Addons
#### Lizenzierung
Standardmässig werden die Bereitstellungs-Services über den Cloud-Service von bee365 bezogen. Diese Benutzung wird mit einer jährlich anfallenden Benutzungsgebühr abgegolten. Dazu kommen zusätzliche Lizenzgebühren für den Order Form Wizard sowie weitere beeSpaces Addons.

### Spezialfall: Self-hosted Provisioning Service (Azure) beim Kunden
{% capture content %}
Dieses Szenario wird nicht (mehr) angeboten. Falls eine on-premises oder Self Hosted-Version gewünscht wird, muss dies mit einem bee365 Consultant besprochen werden.
{% endcapture %}
{% include alert.html type='danger' caption='Ausserhalb der Dienstleistungen von bee365' content=content %}


Bei Ausnahmen (falls dies der Kunde explizit wünscht), wird die Provisionierungs-Setup auf dem Azure Tenant des Kunden realisiert. In diesem Fall ist ein Azure Automation Konto notwendig. Die Bestellung eines Azure Automation Konto erfolgt via Lizenzpartner des Kunden. Anfallende Kosten für Betrieb und Unterhalt sowie grundsätzliche Basis-Lizenzierungen liegen nicht im Verantwortungsbereich von bee365.