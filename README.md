# vue_experiments

> Style guide full of SASS components build with for Vue.js

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# publishing to github pages
npm run publish
```

### Detailed explanation on Publishing to Github pages

``` bash
exec("npm run build");
exec("cp 404.html build")
exec("git checkout -B gh-pages");
exec("git add -f build");
exec("git commit -a  -m 'rebuild-website'");
exec("git filter-branch -f --prune-empty --subdirectory-filter build");
exec("git push -f origin gh-pages");
exec("git checkout -");
```

### Publishing npm package

``` bash
# This will build the files to be included in the package
npm run mixins

# Navigate to folder where all package contents are built
cd package

# Update the version
npm version <major.minor.version>

# Make it available to all
npm publish
```
Package can then be installed on other machines with:
``` bash
npm install ads_mixer
```

For detailed explanation on how things work with Vue.js, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).