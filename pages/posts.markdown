---
layout: default
title:  "Posts"
permalink: posts
---

<ul class="downloads">
    {% for post in site.posts %}
    <li>
      <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
      {{ post.excerpt }}
    </li>
    {% endfor %}
  </ul>


