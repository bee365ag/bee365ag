---
layout: docs
navigation: beespaces
title: Formatters
---

# Formatters erklärt

Formatters sind eine nützliche Funktion in den Engine-Einstellungen, mit denen du das Aussehen bestimmter Eingabefelder im Bestellprozess anpassen kannst. 

## Wie funktionieren Formatters?

Formatters sind wie kosmetische Verbesserungen für die Felder, die du im Bestellprozess verwendest. Mit ihnen kannst du das visuelle Erscheinungsbild der Felder anpassen, um den eigenen Bedürfnissen besser gerecht zu werden. 

## Was kannst du mit Formatters machen?

Du kannst Formatters verwenden, um das Aussehen der Felder anzupassen. Beispielsweise kannst du einen Prefix zu einem Feld hinzufügen oder eine Notiz unter einem Feld anzeigen, um dem Benutzer zusätzliche Informationen zu geben.

## Wie viele Formatters kannst du verwenden?

Du kannst mehrere Formatters verwenden, aber jeder Formatter muss einem anderen Feld zugewiesen werden. Es ist wichtig, sicherzustellen, dass jedes Feld nur einen Formatter zugewiesen hat, um Konflikte oder Verwirrungen zu vermeiden.

## Beispiel

Hier ist ein Beispiel für die Verwendung von Formatters:

~~~
"formatters": [
{
"fieldRef": "Title",
"format": {
"prefix": "PRJ-"
},
"notes": "Der Workspace wird so heissen:'PRJ': {{computed.teamTitle}}"
}
]
~~~

## Ergebnis
{% include figure.html alt='Formatter im Bestellprozess' src='/assets/images/beeSpaces/formatter-im-ofw.png' %}

## Wichtig zu beachten

Es ist wichtig zu beachten, dass die Formatters nur für das visuelle Erscheinungsbild der Felder verwendet werden und keine Steuerungsfunktion im UX-Flow haben. Ihr Zweck besteht darin, die visuelle Darstellung zu verbessern und das Benutzererlebnis insgesamt zu verbessern.
