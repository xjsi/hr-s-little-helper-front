#!/bin/bash set -x -e
export NODE_ENV=production
export HRLH_SERVICE='https://hrs-little-helper.herokuapp.com'
./node_modules/gulp/bin/gulp.js build sass
echo 'hr.oyanglul.us' > CNAME
git checkout -b gh-pages
git status
git rm -r . --cache
git add javascripts stylesheets index.html login CNAME
git commit -m "publi:ship: $CIRCLE_BUILD_NUM"
git push origin gh-pages -f
