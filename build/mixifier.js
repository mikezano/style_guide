const style_guide_path = './src/components/style_guide/';
const fs = require('fs');
const mkdirp = require('mkdirp');
const sass = require('node-sass');
const pug = require('pug');
var getDirName = require('path').dirname;
const mixin_regex = new RegExp("@mixin[\\s\\S]*end");
const sass_regex = new RegExp("<style lang=\"scss\" scoped>([\\s\\S]*)<\/style>");
const pug_regex = new RegExp("<template lang=\"pug\">([\\s\\S]*)<\/template>");
const vue_regex = new RegExp("<template lang=\"pug\">[\\s\\S]*<\/template>");

var walkSync = function(dir, filelist) {
	var fs = fs || require('fs'), files = fs.readdirSync(dir);
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

var compile_sass = function(contents){
	let sass_code = contents.match(sass_regex);
	return sass.renderSync({
		data: sass_code[1],
		importer: function(url, prev, done){
			console.log(url);
			var contents = fs.readFileSync(`./src/${url.replace("../../../","")}.scss`, 'utf8');
			return({contents: contents});
		}
	});
}

function compile_pug(contents){
	let pug_markup = contents.match(pug_regex);
	let html_markup = pug.render(pug_markup[1], {pretty:true});
	return html_markup;
}

function write_single_file(css, html, path){
	let data = `<style type="text/css">\n${css}\n</style>\n\n${html}`;
	fs.writeFileSync(`${path}.html`,data);
}

function createMarkupFile(path, markup){
	fs.writeFile(path, markup, function(err) {
		if(err) {
				return console.log(err);
		}
		console.log(`${path} saved!`);
	});
}

let mixins_result = "";
let files = walkSync(style_guide_path);
files.forEach(function(file){
	var contents = fs.readFileSync(file.path, 'utf8');
	let result = contents.match(mixin_regex);
	let package_path = `./mixifier/${file.path.replace(style_guide_path,'').replace('.vue','')}`;
	console.log(package_path);

	console.log('css_markup');
	let css_markup = compile_sass(contents);
	console.log('html_markup');
	let html_markup = compile_pug(contents);
	console.log('pug_markup');
	let pug_markup = contents.match(pug_regex);
	let vue_markup = contents.match(vue_regex);

	write_single_file(css_markup.css.toString(), html_markup, package_path);
	console.log('done writing');
	//Aggregate all mixins to later save in one file
	mixins_result += result!= null ? result + "\n\r" : "";

	console.log(file.path.replace(style_guide_path,'').replace('.vue',''));


	//package_path = package_path.replace('.vue', '.pug');
	mkdirp(getDirName(package_path), function (err) {
		if (err) return err;
	
		createMarkupFile(`${package_path}.pug`, pug_markup[1]);
		createMarkupFile(`${package_path}.vue`, vue_markup);
	});
});

fs.writeFile("./mixifier/ads_mixer.scss", mixins_result, function(err) {
	if(err) {
			return console.log(err);
	}
	console.log("The file was saved!");
}); 


