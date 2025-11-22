---
layout: default
title: Home
---

<div class="content" style="max-width:720px; margin:auto;">
  <h2><em>Archive</em></h2>
  <hr>
  <div class="archive-list">
    {% assign sorted_posts = site.posts | sort: 'date' | reverse %}
    {% for post in sorted_posts %}
      <div class="archive-entry" style="margin-bottom: 0.2em;">
        <a href="{{ post.url | relative_url }}"><em>{{ post.title }}</em></a>
        <span>({{ post.date | date: "%B %-d, %Y" }})</span>
      </div>
    {% endfor %}
  </div>
</div>