---
layout: home
title: CS50 AP
---

### Upcoming Due Dates

<ul style="list-style: none">
    {% assign problems = site.posts | where: 'categories', 'problems' | sort:"due"%}

    {% for post in problems %}
        {% if post.due > site.time %}
            <li>
                {% if post.subcategories contains 'cs50' %}
                    <a href="{{ post.outurl }}" target="_blank">
                {% else %}
                    <a href="..{{ post.url }}">
                {% endif %}
                    <h3>
                        {{ post.title }}
                    </h3>
                    <div class="date">
                        Due: {{post.due | date: "%A, %B %d, %Y at %r" }}
                    </div>
                </a>
            </li>
        {% endif %}
    {% endfor %}
</ul>

![Las Vegas](assets/images/lvpaint.jpg)
