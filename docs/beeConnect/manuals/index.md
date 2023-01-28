---
layout: docs
navigation: beeconnect
title: Bedienung
hideToc: true
---

<div class="list-group list-group-flush">
    {%- for p in site.pages -%}
    {%- if p.type == 'manual' and p.navigation == 'beeconnect' -%}
    <a class="list-group-item list-group-item-action"
       href="{{p.url | prepend: site.baseurl}}" >
        {{ p.title }}
    </a>
    {%- endif -%}
    {%- endfor %}
</div>