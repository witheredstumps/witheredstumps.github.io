#!/bin/bash
# Simple script to deploy _site/ to the gh-pages branch

set -e

# Build your site first (uncomment if needed)
# bundle exec jekyll build

# Save current branch name
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)

# Switch to gh-pages branch (create if it doesn't exist)
if git show-ref --quiet refs/heads/gh-pages; then
  git checkout gh-pages
else
  git checkout --orphan gh-pages
  git reset --hard
fi

# Remove all files except .git
find . -maxdepth 1 ! -name '.' ! -name '.git' ! -name '..' -exec rm -rf {} +

# Copy contents of _site to root
cp -R _site/* .

# Add and commit
git add .
git commit -m "Deploy site to gh-pages branch" || echo "No changes to commit"

# Push to origin
git push origin gh-pages

# Switch back to original branch
git checkout "$CURRENT_BRANCH"

echo "Deployed to gh-pages branch!"