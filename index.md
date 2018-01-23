---
layout: home
title: CS50 AP
---

<div class="recent"> Upcoming Due Dates </div>
<ul class="displayer" style="list-style: none">
    {% assign problems = site.posts | where: 'categories', 'problems' | sort:"due"%}
    {% for post in problems %}
        {% if post.due > site.time %}
            <li>
                {% if post.subcategories contains 'cs50' %}
                    <a href="{{ post.outurl }}" target="_blank">
                {% else %}
                    <a href="..{{ post.url }}">
                {% endif %}
                        <div class="showcase">
                            <h3>
                                {{ post.title }}
                            </h3>
                            <h5>
                                <a href="https://www.addevent.com/create/?service=google&dtime=Americas%2FNew_york&dstart={{post.due | date: "%m"}}%2F{{post.due | date: "%d"}}%2F{{post.due | date: "%Y"}}&dallday=true&dsum={{ post.title }}%20due%20at%20{{post.due | date: "%H" }}%3A{{post.due | date: "%M" }}%3A{{post.due | date: "%S" }}%20PM&reference=http://cs50ap.com" target="_blank"> Due: {{post.due | date: "%A, %b %d, %Y at %r" }}</a>
                            </h5>
                        </div>
                    </a>
            </li>
        {% endif %}

    {% endfor %}
</ul>
