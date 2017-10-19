---
title: "Practice"
layout: descript
description: Practice problems for extra... well... practice. 😅
---

<ul class="displayer">
    {% assign notes = site.posts | where: 'categories', 'practice' %}
    {% for post in notes %}
        {% assign pic_root = "/assets/images/" | relative_url %}
        <li>
            <div class="showcase-list">
                <a href="..{{ post.url }}">
                    <img src="{{ pic_root | append: post.image }}" onerror="this.style.display='none'">
                    <div class="floater">
                        {{ post.title }}
                        <br>
                        <div class="date">{{post.date | date: "%A, %B %d, %Y" }}</div>
                    </div>
                </a>
            </div>
        </li>
    {% endfor %}
</ul>
