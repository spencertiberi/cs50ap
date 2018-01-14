---
layout: home
title: CS50 AP
---
<div class="recent"> Upcoming Due Dates </div>
<ul class="displayer" style="list-style: none">
    {% assign problems = site.posts | where: 'categories', 'problems' | sort:"due"%}
    {% for post in problems %}
        {% if post.due > site.time %}
            <li class="showcase">
                {% if post.subcategories contains 'cs50' %}
                    <a href="{{ post.outurl }}" target="_blank">
                {% else %}
                    <a href="..{{ post.url }}">
                {% endif %}
                    <h3>
                        {{ post.title }}
                    </h3>
                    <h5>
                        Due: {{post.due | date: "%A, %B %d, %Y at %r" }}
                    </h5>
                </a>
            </li>
        {% endif %}
    {% endfor %}
</ul>

<img src="/assets/images/pupper.gif" alt="pupper" class="half-filler">
