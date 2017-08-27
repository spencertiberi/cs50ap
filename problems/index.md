---
title: "Problems"
layout: descript
description: Problems to be conquered
---

<ul class="displayer">
    {% assign problems = site.posts | where: 'categories', 'problems' %}
    {% for post in problems %}
        {% assign pic_root = "/assets/images/" | relative_url %}
        <li>
            <div class="showcase-list">
                <img src="{{ pic_root | append: post.image }}" onerror="this.style.display='none'">
                <a href="..{{ post.url }}">{{ post.title }}</a>
                <br>
                <div class="date"> Due: {{post.due | date: "%A, %B %d, %Y %T" }}</div>
            </div>
        </li>
    {% endfor %}
</ul>
