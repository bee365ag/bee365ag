---
layout: docs
type: manual
navigation: beeconnect
title: "HTML Renderer (Webpart)"
---

Mit dem beeEssentials HTML Renderer kann man Daten von Data Provider Webparts anzeigen lassen oder HTML Code in Sharepoint schreiben.

Dieses Webpart stellt ein HTML-Template dar, welcher in den Eigenschaften des Webparts hinterlegt werden kann. Das hinterlegte Template kann vor der Darstellung noch mittels Handlebars mit statischen oder dynamischen Daten aus anderen Webparts angereichert werden.

{% capture content %}
Enthalten die statischen oder dynamischen Daten HTML-kodierte Elemente, so kann unter Zuhilfenahme von *Handlebars* mit drei Klammern (anstelle von wie üblich zwei) gearbeitet und die HTML-Elemente entsprechend dargestellt werden.
{% endcapture %}
{% include alert.html type='info' caption='Hinweis' content=content %}

## Iterieren über Daten

Die Daten können aus einem Webpart, welches als Data Provider funktioniert, übernommen und in eine beliebige Darstellungsform gebracht werden. Im Falle von Collections als Eingabewerte muss die Variable, welche die Collection enthält, mittels Handlebars `{{#each <collection variable>}}` deklariert werden.

## Quelltypen
Es werden zwei grundlegende Datenquellen unterstützt. Es sind diese:

* statische Daten, bei denen ein in JavaScript-Object-Notation (JSON) formatiertes Objekt hinterlegen werden kann
* dynamische Daten, welche ein Objekt aus dem Seitenkontext oder anderen Webparts beziehen kann. 

Somit ist es also möglich ein «verstecktes» Webpart hinzuzufügen, welche die Schnittstelle des Kunden integriert, sich selbst aber nicht um die Darstellung kümmert und diese dem HTML Renderer überlässt.
