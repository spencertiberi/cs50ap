---
title: "Weeks"
layout: descript
description: Overview of weekly class activities
---
<ul class="displayer">
    {% assign weeks = site.posts | where: 'categories', 'weeks' %}
    {% for post in weeks %}
        {% assign pic_root = "/assets/images/" | relative_url %}
        <li>
            <div class="showcase-list">
                <a href="..{{ post.url }}">
                    <img src="{{ pic_root | append: post.image }}" onerror="this.style.display='none'">
                    <div class="floater">
                        {{ post.title }}
                        <br>
                        <div class="date"> Week of {{post.weekof | date: "%A, %B %d, %Y" }} </div>
                    </div>
                </a>
            </div>
        </li>
    {% endfor %}
</ul>
