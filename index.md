---
layout: default
title: VikyTech
menu:
  enable: true
  local: [null]
published: true
---

# Recent Posts
{% for post in site.posts limit:3 %}
- ### [{{ post.title }}]({{ post.url }})
{% endfor %}

A blog with markdown support


```Java
public static void main(String[] args) {
    VikyTech.start("Coming soon....")
}
```

# Upcoming Features:
- Live Editor Template
- CMS