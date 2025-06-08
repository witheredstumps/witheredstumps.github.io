// Inject minimal CSS for upward dropdown
(function() {
  const style = document.createElement('style');
  style.innerHTML = `
    .autocomplete-results {
      position: absolute;
      left: 0;
      bottom: 100%;
      background: #fff;
      border: 1px solid #ccc;
      z-index: 1001;
      width: 100%;
      max-height: 200px;
      overflow-y: auto;
      margin-bottom: 2px;
      display: none;
      box-sizing: border-box;
      border-radius: 4px 4px 0 0;
      box-shadow: 0 -2px 8px rgba(0,0,0,0.07);
    }
    .autocomplete-results ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    .autocomplete-results li {
      padding: 6px 12px;
      cursor: pointer;
    }
    .autocomplete-results li a {
      text-decoration: none;
      color: #333;
      display: block;
    }
    .autocomplete-results li:hover {
      background: #eee;
    }
    .sidebar-search-form {
      position: relative;
    }
  `;
  document.head.appendChild(style);
})();

// Lunr.js Autocomplete logic (dropdown opens upward)
let lunrIdx = null;
let searchDocs = [];

// Position the autocomplete-results div above the input field
function positionResultsDropdown(input, resultsDiv) {
  // Ensure parent is relative
  const form = input.closest('.sidebar-search-form');
  form.style.position = 'relative';

  // Align the results div width to input width
  resultsDiv.style.width = input.offsetWidth + "px";
  // Place absolutely, bottom: 100% (handled by CSS)
  // Adjust right/left if needed (usually left: 0 is fine)
}

function renderAutocompleteResults(results) {
  const resultsDiv = document.getElementById('autocomplete-results');
  if (!results.length) {
    resultsDiv.innerHTML = '';
    resultsDiv.style.display = 'none';
    return;
  }
  let html = '<ul>';
  results.slice(0, 5).forEach(result => {
    const doc = searchDocs.find(d => d.url === result.ref);
    html += `<li><a href="${doc.url}">${doc.title}</a></li>`;
  });
  html += '</ul>';
  resultsDiv.innerHTML = html;
  resultsDiv.style.display = 'block';

  // Reposition dropdown upwards
  const searchInput = document.querySelector('.sidebar-search-input');
  positionResultsDropdown(searchInput, resultsDiv);
}

function doAutocompleteSearch(query) {
  if (!lunrIdx || !query) {
    renderAutocompleteResults([]);
    return;
  }
  const results = lunrIdx.search(query);
  renderAutocompleteResults(results);
}

fetch('/search.json')
  .then(res => res.json())
  .then(docs => {
    searchDocs = docs;
    lunrIdx = lunr(function () {
      this.ref('url');
      this.field('title');
      this.field('content');
      this.field('categories');
      this.field('tags');
      docs.forEach(doc => this.add(doc));
    });
  });

document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.querySelector('.sidebar-search-input');
  const resultsDiv = document.getElementById('autocomplete-results');
  if (searchInput) {
    searchInput.addEventListener('input', function(e) {
      const query = e.target.value.trim();
      doAutocompleteSearch(query);
    });
    // Hide results when clicking outside
    document.addEventListener('click', function(e) {
      if (!resultsDiv.contains(e.target) && e.target !== searchInput) {
        resultsDiv.style.display = 'none';
      }
    });
    // Recompute dropdown position on window resize
    window.addEventListener('resize', function() {
      if (resultsDiv.style.display === 'block') {
        positionResultsDropdown(searchInput, resultsDiv);
      }
    });
    // Also reposition on focus
    searchInput.addEventListener('focus', function() {
      if (resultsDiv.innerHTML && resultsDiv.innerHTML.trim() !== '') {
        positionResultsDropdown(searchInput, resultsDiv);
      }
    });
  }
});