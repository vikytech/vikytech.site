---
layout: default
title:  "Welcome to Jekyll!"
date:   2021-06-20 07:50:20 +0530
categories: jekyll update
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


