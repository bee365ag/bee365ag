---
layout: manual
title: Regelwerke (LifecyclePolicy)
---
# Regelwerke
Regelwerke sind spezifische Einstellungen von Regelwerktypen. Diese Regelwerke bestimmen bspw. wie lange vor (und ob) Ende der Lebensspanne eine Information versendet werden soll, oder ob eine Verlängerung der Lebensspanne möglich ist.

Die erwähnten Regelwerktypen definieren die Art und Weise wie die Lebensspanne definiert wird und sind von bee365 ag wie folgt definiert: 

### Lifecycle Deadline 
Archiviert einen Space nach abgelaufener Lebensspanne. Das Enddatum wird beim Bestellprozess vor der Provisionierung als Metadatum vom Benutzer abgefragt.

### Lifecycle Lifetime 
Berechnet das Enddatum der Lebensspanne gemäss den Einstellungen des Regelwerkes (Enddatum nach n definierbaren Tagen). Damit kommt das Enddatum einer Deadline gleich, welche allerdings im Vergleich zum `Lifecycle Deadline` während des Bestellprozesses nicht frei bestimmt werden kann.

### Lifecycle Activity 
`BACKLOG`
 entfernt einen Space falls dieser keine Aktivität mehr aufweist.

>Beispiel: Ein Regelwerk wird einem oder mehreren Workspace Template zugeordnet. Somit besitzt bspw. jeder Projekt-Space das Regelwerk “Archivierung am Stichtag ohne Warnung” vom Regelwerktyp Lifecycle Deadline.