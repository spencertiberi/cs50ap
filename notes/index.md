---
title: "Notes"
layout: descript
description: Presentation materials used in class
---

<ul class="displayer">
    {% assign notes = site.posts | where: 'categories', 'notes' %}
    {% for post in notes %}
        {% assign pic_root = "/assets/images/" | relative_url %}
        <li>
            <div class="showcase-list">
                <img src="{{ pic_root | append: post.image }}" onerror="this.style.display='none'">
                <a href="..{{ post.url }}">{{ post.title }}</a>
                <br>
                <div class="date">{{post.date | date: "%A, %B %d, %Y" }}</div>
            </div>
        </li>
    {% endfor %}
</ul>
