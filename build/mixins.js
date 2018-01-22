const style_guide_path = './src/components/style_guide/';
const fs = require('fs');
const mkdirp = require('mkdirp');
var getDirName = require('path').dirname;
const mixin_regex = new RegExp("@mixin[\\s\\S]*end");
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

	//Aggregate all mixins to later save in one file
	mixins_result += result!= null ? result + "\n\r" : "";

	let pug_result = contents.match(pug_regex);
	let vue_result = contents.match(vue_regex);

	let package_path = `./package/${file.path.replace(style_guide_path,'').replace('.vue','')}`;
	console.log(file.path.replace(style_guide_path,'').replace('.vue',''));


	//package_path = package_path.replace('.vue', '.pug');
	mkdirp(getDirName(package_path), function (err) {
		if (err) return err;
	
		createMarkupFile(`${package_path}.pug`, pug_result[1]);
		createMarkupFile(`${package_path}.vue`, vue_result);
	});
});



fs.writeFile("./package/ads_mixer.scss", mixins_result, function(err) {
	if(err) {
			return console.log(err);
	}
	console.log("The file was saved!");
}); 
//<template lang="pug">[\\s\\S]*<\/template>

function createMarkupFile(path, markup){
	fs.writeFile(path, markup, function(err) {
		if(err) {
				return console.log(err);
		}
		console.log(`${path} saved!`);
	});
}