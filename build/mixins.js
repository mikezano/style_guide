//var requireContext = require('require-context')
//console.log(webpack)
//const ctx = require.context('../../src/', true, /.*.vue$/);
// const ctxraw = require.context('!!raw-loader!../../src/', true, /.*.vue$/);
////console.log(ctx);
// const components = ctx.keys().map(ctx);
// const components_source = ctxraw.keys().map(ctxraw);
// //console.log(components_source)
// const files = require.context(`../components/style_guide/`, true, /\.vue$/);
// console.log(files);
require('require-context/register')
function importAll (r) {
    r.keys().forEach(r);
  }
   
importAll(require.context('../../src/', true, /\.js$/));