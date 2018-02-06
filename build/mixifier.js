const style_guide_path = './src/components/style_guide/';
const fs = require('fs');
const mkdirp = require('mkdirp');
const sass = require('node-sass');
var getDirName = require('path').dirname;
const mixin_regex = new RegExp("@mixin[\\s\\S]*end");
const sass_regex = new RegExp("<style lang=\"scss\" scoped>([\\s\\S]*)<\/style>");
const pug_regex = new RegExp("<template lang=\"pug\">([\\s\\S]*)<\/template>");
const vue_regex = new RegExp("<template lang=\"pug\">[\\s\\S]*<\/template>");

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
let files = walkSync(style_guide_path);
files.forEach(function(file){
	var contents = fs.readFileSync(file.path, 'utf8');
	let result = contents.match(mixin_regex);

	
	//capture single instance
	let sass_code = contents.match(sass_regex)[1];

	fs.writeFileSync(`./mixifier/${file.path.replace(style_guide_path,'')}.scss`,sass_code);

	sass.render({
		file: `./mixifier/${file.path.replace(style_guide_path,'')}.scss`
	}, function(err, result){
		console.log(result);
		fs.writeFileSync(`./mixifier/${file.path.replace(style_guide_path,'')}.css`,result.css.toString());
	});

	//Aggregate all mixins to later save in one file
	mixins_result += result!= null ? result + "\n\r" : "";

	let pug_markup = contents.match(pug_regex);
	let vue_markup = contents.match(vue_regex);

	let package_path = `./mixifier/${file.path.replace(style_guide_path,'').replace('.vue','')}`;
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


function createMarkupFile(path, markup){
	fs.writeFile(path, markup, function(err) {
		if(err) {
				return console.log(err);
		}
		console.log(`${path} saved!`);
	});
}