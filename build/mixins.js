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
// require('require-context/register')
// function importAll (r) {
//     r.keys().forEach(r);
//   }
   
// importAll(require.context('../../src/', true, /\.js$/));
const path = './src/components/style_guide/';
const fs = require('fs');
const mixin_regex = new RegExp("@mixin[\\s\\S]*end");

// fs.readdir(path, (err, files) => {
//   files.forEach(file => {

//   //   fs.readFile('./src/App.vue', 'utf8', function(err, contents) {
//   //     console.log(contents);
//   // });

//    // console.log(file);
//   });
// })

var walkSync = function(dir, filelist) {
  var fs = fs || require('fs'),
      files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(function(file) {
    if (fs.statSync(dir + file).isDirectory()) {
      filelist = walkSync(dir + file + '/', filelist);
    }
    else {
      filelist.push({file: file, path: dir + file});
    }
  });
  return filelist;
};

let mixins_result = "";
let files = walkSync(path);
files.forEach(function(file){
  console.log(file);
  // fs.readFile(file.path, 'utf8', function(err, contents) {
  //   console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
  //   //console.log(contents);
  //   let result = contents.match(mixin_regex);
  //   mixins_result += result;
  //   console.log(mixins_result);
  // });
  var contents = fs.readFileSync(file.path, 'utf8');
  let result = contents.match(mixin_regex);
  mixins_result += result;
});
//console.log("mixins:");
console.log(mixins_result);


fs.writeFile("./src/package/test.scss", mixins_result, function(err) {
  if(err) {
      return console.log(err);
  }

  console.log("The file was saved!");
}); 
