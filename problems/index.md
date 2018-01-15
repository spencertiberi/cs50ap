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
              {% if post.subcategories contains 'cs50' %}
                  <a href="{{ post.outurl }}" target="_blank" >
              {% else %}
                  <a href="..{{ post.url }}">
              {% endif %}
                      <div class="showcase-list">
                          <div class="floater">
                              {{ post.title }}
                              <br>
                              <div class="date"> Due: {{post.due | date: "%A, %B %d, %Y %T" }}</div>
                          </div>
                      </div>
                  </a>
        </li>
    {% endfor %}
</ul>
