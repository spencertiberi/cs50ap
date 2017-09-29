---
layout: home
title: CS50 AP
---
# Welcome to CS50 AP!


Disclaimer: This is home of CS50 AP at Belmont Hill School. For the official Harvard CS50 AP website, please visit <a href="https://ap.cs50.net/">https://ap.cs50.net/</a>.

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
