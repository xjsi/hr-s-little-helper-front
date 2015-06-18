./node_modules/gulp/bin/gulp.js build sass
git checkout -b gh-pages
git status
git rm -r . --cache
git add javascripts stylesheets index.html login
git commit -m "publi:ship: $CIRCLE_BUILD_NUM"
git push origin gh-pages -f
