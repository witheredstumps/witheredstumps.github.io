---
layout: default
title: Home
pagination:
  enabled: true
---

<div id="posts-list">
  {% if paginator.posts %}
    {% for post in paginator.posts %}
      <div class="post-content post-item">
        <h2 style="font-style: italic;">
          <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        </h2>
        <div class="meta">
          <span>{{ post.date | date: "%B %d, %Y" }}</span>
        </div>
        <hr>
        {{ post.content }}
      </div>
    {% endfor %}
  {% else %}
    <p>No posts found.</p>
  {% endif %}
</div>

<div class="pagination" style="text-align:center;">
  {% if paginator.previous_page %}
    <a href="{{ paginator.previous_page_path | relative_url }}"></a>
  {% endif %}
<!-- <span class="page-number">Page {{ paginator.page }} of {{ paginator.total_pages }}</span> -->
  {% if paginator.next_page %}
    <a href="{{ paginator.next_page_path | relative_url }}"></a>
  {% endif %}
</div>

<!-- Fixed-position buttons -->
<div class="bottom-btns-vertical" id="bottomNavBtns">
  {% if paginator.previous_page %}
    <a class="fixed-bottom-btn" 
       href="{% if paginator.previous_page == 1 %}{{ '/' | relative_url }}{% else %}{{ paginator.previous_page_path | relative_url }}{% endif %}">
      &#171; Prev
    </a>
  {% endif %}
  {% if paginator.next_page %}
    <a class="fixed-bottom-btn" href="{{ paginator.next_page_path | relative_url }}">
      Next &#187;
    </a>
  {% endif %}
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  var navBtns = document.getElementById('bottomNavBtns');
  function checkScroll() {
    // Show when 90% scrolled or closer to bottom
    if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 300)) {
      navBtns.classList.add('visible');
    } else {
      navBtns.classList.remove('visible');
    }
  }
  window.addEventListener('scroll', checkScroll);
  // In case the page is already at the bottom on load
  checkScroll();
});
</script>
