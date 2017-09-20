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
                <a href="..{{ post.url }}">
                    <img src="{{ pic_root | append: post.image }}" onerror="this.style.display='none'">
                    <div class="floater">
                        {{ post.title }}
                        <br>
                        <div class="date"> Due: {{post.due | date: "%A, %B %d, %Y %T" }}</div>
                    </div>
                </a>
            </div>
        </li>
    {% endfor %}
</ul>
