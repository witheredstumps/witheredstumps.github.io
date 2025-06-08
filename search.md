---
layout: default
title: Search
permalink: /search/
---

<h2>Search Results</h2>
<div id="search-results"></div>
<script src="https://cdn.jsdelivr.net/npm/lunr/lunr.min.js"></script>
<script>
let idx = null;
let posts = [];

function displayResults(results) {
  const resultsContainer = document.getElementById('search-results');
  if (!results.length) {
    resultsContainer.innerHTML = "<p>No results found.</p>";
    return;
  }
  let html = '<ul>';
  results.forEach(result => {
    const post = posts.find(p => p.url === result.ref);
    html += `<li><a href="${post.url}">${post.title}</a><br><small>${post.date}</small></li>`;
  });
  html += '</ul>';
  resultsContainer.innerHTML = html;
}

function doSearch(query) {
  if (!idx) return;
  const results = idx.search(query);
  displayResults(results);
}

// Parse query from URL (?q=...)
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param) || "";
}

fetch('{{ "/search.json" | relative_url }}')
  .then(response => response.json())
  .then(data => {
    posts = data;
    idx = lunr(function () {
      this.ref('url');
      this.field('title');
      this.field('content');
      this.field('categories');
      this.field('tags');
      posts.forEach(post => this.add(post));
    });

    const q = getQueryParam('q');
    if (q) {
      document.querySelector('.sidebar-search-input').value = q;
      doSearch(q);
    }
  });

// Optional: listen for searches from the sidebar form
document.addEventListener('DOMContentLoaded', function() {
  const searchForm = document.querySelector('.sidebar-search-form');
  const searchInput = document.querySelector('.sidebar-search-input');
  if (searchForm) {
    searchForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const query = searchInput.value;
      window.location.href = '/search/?q=' + encodeURIComponent(query);
    });
  }
});
</script>