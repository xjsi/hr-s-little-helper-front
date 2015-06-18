git fetch origin
git checkout -b gh-pages origin/gh-pages
git status
git add javascripts stylesheets index.html login
git commit -m "publi:ship: $CIRCLE_BUILD_NUM"
git push origin gh-pages
