#!/bin/bash
set -e

# bundle exec jekyll build

CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
TEMP_DIR=$(mktemp -d)
cp -a _site/. "$TEMP_DIR"

if git show-ref --quiet refs/heads/gh-pages; then
  git checkout gh-pages
else
  git checkout --orphan gh-pages
  git reset --hard
fi

find . -mindepth 1 -maxdepth 1 ! -name '.git' -exec rm -rf {} +
cp -a "$TEMP_DIR"/. .
rm -rf "$TEMP_DIR"

git add .
git commit -m "Deploy site to gh-pages branch" || echo "No changes to commit"
git push --force origin gh-pages

git checkout "$CURRENT_BRANCH"
echo "Deployed to gh-pages branch!"