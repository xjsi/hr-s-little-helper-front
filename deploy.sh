#!/bin/bash
set -x -e
./node_modules/bower/bin/bower install
./node_modules/gulp/bin/gulp.js build sass
echo 'hr.oyanglul.us' > CNAME
git checkout -b gh-pages
git status
git rm -r . --cache
rm .gitignore
git config --global user.email "oyanglulu@gmail.com"
git config --global user.name $CIRCLE_PROJECT_USERNAME
git add javascripts stylesheets index.html login CNAME
git commit -m "publi:ship: $CIRCLE_BUILD_NUM"
git push origin gh-pages -f
