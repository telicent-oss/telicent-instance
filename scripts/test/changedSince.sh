#!/bin/sh
set -e

# Get the current branch name
current_branch=$(git rev-parse --abbrev-ref HEAD)

# Get the commit hash of the current branch
current_commit=$(git rev-parse HEAD)

# Get the commit hash of the head of the main branch
main_commit=$(git rev-parse origin/main)

# Check if the current commit is the same as the main branch head
if [ "$current_commit" != "$main_commit" ]; then
  echo "Current branch ($current_branch) is not at the head of main. Running tests..."
  yarn run vitest --coverage=false --watch=false --changed main --bail 0
else
  echo "Current branch is at the head of main. Skipping tests."
fi