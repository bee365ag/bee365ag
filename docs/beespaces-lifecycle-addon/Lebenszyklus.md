---
layout: manual
title: Lebenszyklus
---
# Lebenszyklus
Der Lebenszyklus eines Projekts durchläuft in beeSpaces mit dem Lifecycle Add-On folgenden Stationen

![Lebenszyklus](/docs/assets/images/beeSpaces/Lebenszyklus.png)

## Definition
Die genauen Zeiträume, wann diese Status angewendet werden können in der Liste `Lifecycles (Regelwerk)` definiert werden. Die Regelwerke werden unter dem Abschnitt Regelwerke erklärt. Sind diese erstellt, kann man in den vorgegebenen Feldern definieren, wie lange die `Lebensdauer in Tagen` ist und ob der Administrator die `Verlängerung erlauben` möchte. In einer weiteren Spalte kann man die Anzahl Tage für den `Warnungsvorlauf` bestimmen. 

![Felder-Definition-Lebenszyklus](/docs\assets\images\beeSpaces\Felder-Definition-Lebenszyklus.png)

Die API läuft einmal pro Tag durch und kontrolliert das Datum. Dann wird der Besitzer am Stichtag per E-Mail darüber informiert, dass der Workspace demnächst archiviert wird.

![Infomail Lifecycle](/docs/assets/images/beeSpaces/Infomail-Lifecycle.png)