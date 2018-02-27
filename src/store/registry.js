const ctx = require.context('../../src/', true, /.*.vue$/)
const ctx_html = require.context('../../mixifier/', true, /.*.html$/)

const ctxraw = require.context('!!raw-loader!../../src/', true, /.*.vue$/)
const ctxraw_html = require.context('!!raw-loader!../../mixifier/', true, /.*.html$/)

const components = ctx.keys().map(ctx)
const components_source = ctxraw.keys().map(ctxraw)

const files = require.context(`../components/style_guide/`, true, /\.vue$/);
const htmlFiles = require.context(`../../mixifier/`, true, /\.html$/);


export default {
	components,
	get,
	buildRegistry,
	collectMixins,
	buildHtmlSingleFiles
}

for(var i = 0; i < components.length; i++){
	components[i].source = components_source[i];
}

function get(name){
	for(var c of components){
		if(c.name == name){
			return c;
		}
	}
}

function buildHtmlSingleFiles(){
	let hash = [];
	//Loading file names from a folder
	htmlFiles.keys().forEach((key) => {
		let path = (key.replace(/(\.\/|\.html)/g, ''));
		let folder = path.substr(0, path.indexOf('/'));
		let file = path.substr(path.indexOf('/')+1, path.length);

		if(!hash[folder])
			hash[folder] = [];
		hash[folder].push(file);
	});
	console.log(hash);
	return hash;
}

function buildRegistry(){
	let hash = [];
	//Loading file names from a folder
	files.keys().forEach((key) => {
		let path = (key.replace(/(\.\/|\.vue)/g, ''));
		let folder = path.substr(0, path.indexOf('/'));
		let file = path.substr(path.indexOf('/')+1, path.length);

		if(!hash[folder])
			hash[folder] = [];
		hash[folder].push(file);
	});

	return hash;
}

function collectMixins(){

	this.allMixins = "";
	let files = buildRegistry();
	files.forEach(file=>{
		let component = get(file);
		let source = component.source.replace(/\t/g,'  ');
		let result = source.match(this.mixinRE);
		this.allMixins += result!= null ? result + "\n\r" : "";
	});
	console.log(this.allMixins);
}