---
title: "Materials"
layout: descript
description: Materials to read or view
---

## Videos

<ul class="displayer">
    {% assign problems = site.posts | where: 'subcategories', 'videos' %}
    {% for post in problems %}
        {% assign pic_root = "/assets/images/" | relative_url %}
        <li>
            <div class="showcase-list">
                <a href="..{{ post.url }}">
                    <img src="{{ pic_root | append: post.image }}" onerror="this.style.display='none'">
                    <div class="floater">
                        {{ post.title }}
                    </div>
                </a>
            </div>
        </li>
    {% endfor %}
</ul>

## Reference Sheets

<ul class="displayer">
    {% assign problems = site.posts | where: 'subcategories', 'refsheet' %}
    {% for post in problems %}
        {% assign pic_root = "/assets/images/" | relative_url %}
        <li>
            <div class="showcase-list">
                <a href="{{ post.outurl }}" target="_blank">
                    <img src="{{ pic_root | append: post.image }}" onerror="this.style.display='none'">
                    <div class="floater">
                        {{post.title}}
                    </div>
                </a>
            </div>
        </li>
    {% endfor %}
</ul>
