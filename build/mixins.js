const path = './src/components/style_guide/';
const fs = require('fs');
const mixin_regex = new RegExp("@mixin[\\s\\S]*end");

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
});
console.log(mixins_result);


fs.writeFile("./package/ads_mixer.scss", mixins_result, function(err) {
	if(err) {
			return console.log(err);
	}
	console.log("The file was saved!");
}); 
