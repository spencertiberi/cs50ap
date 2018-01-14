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
            <a href="..{{ post.url }}">
                <div class="showcase-list">
                    <!--<img src="{{ pic_root | append: post.image }}" onerror="this.style.display='none'">-->
                    <div class="floater">
                        {{ post.title }}
                        <br>
                        <div class="date"> Week of {{post.weekof | date: "%A, %B %d, %Y" }} </div>
                    </div>
                </div>
            </a>
        </li>
    {% endfor %}
</ul>
