const path = './src/components/style_guide/';
const fs = require('fs');
const mkdirp = require('mkdirp');
var getDirName = require('path').dirname;
const mixin_regex = new RegExp("@mixin[\\s\\S]*end");
const pug_regex = new RegExp("<template lang=\"pug\">([\\s\\S]*)<\/template>");

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
	var contents = fs.readFileSync(file.path, 'utf8');
	let result = contents.match(mixin_regex);
	mixins_result += result!= null ? result + "\n\r" : "";
	let pug_result = contents.match(pug_regex);
	console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
	console.log(pug_result[1]);
	let final_path = `./package/${file.path.replace(path,'')}`;
	final_path = final_path.replace('.vue', '.pug');
	mkdirp(getDirName(final_path), function (err) {
		if (err) return err;
	
		fs.writeFile(final_path, pug_result[1], function(err) {
			if(err) {
					return console.log(err);
			}
			console.log(`${file.path.replace(path,'')} saved!`);
		});
	  });	

});



fs.writeFile("./package/ads_mixer.scss", mixins_result, function(err) {
	if(err) {
			return console.log(err);
	}
	console.log("The file was saved!");
}); 
//<template lang="pug">[\\s\\S]*<\/template>