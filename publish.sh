#!/bin/sh

DIRECTORY="build/"
BRANCH="dist/frontend"
CURRENT_BRANCH=$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')

# Check if the environment is ready for publishing ===========================
if [ "$CURRENT_BRANCH" != "master" ]
then
    echo "⚠️  Please run this script from master branch"
    exit 1;
fi

if [[ $(git status -s) ]]
then
    echo "⚠️  The working directory is dirty. Please commit any pending changes."
    exit 1;
fi

if [ $2 ]
then
  npm whoami || { echo "⚠️  You must be logged in to NPM to push a new release" ; exit 1; }
fi

# jq --version || { echo "⚠️  You have jq installed on your machine (brew install jq)" ; exit 1; }

# Proceed =====================================================================
echo "update package.json version to $1"
npm version $1

# if [ $2 ]
# then
#   jq -e ".version = \"$1\"" package.json > package.json.tmp && cp package.json.tmp package.json && rm package.json.tmp
#   cp package.json $DIRECTORY/package.json
# fi

echo "backup content"
mkdir "$DIRECTORY-tmp"
cp -r $DIRECTORY/* "$DIRECTORY-tmp/"

echo "Deleting old buildation"
rm -rf $DIRECTORY
mkdir $DIRECTORY
git worktree prune
rm -rf .git/worktrees/$DIRECTORY/

echo "Checking out $BRANCH branch into build"
git worktree add -B $BRANCH $DIRECTORY

echo "Removing existing files"
rm -rf $DIRECTORY/*

echo "Generating site"
cp -r "$DIRECTORY-tmp"/* $DIRECTORY/
rm -rf "$DIRECTORY-tmp"

echo "Updating $BRANCH branch"
cd $DIRECTORY && git add --all && git commit -m "Publishing to $BRANCH (publish.sh)"
git push --force origin $BRANCH
