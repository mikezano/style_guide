<template lang="pug">
	.container
		h1 Looking for interesting components to use in your app?
		a( @click="collectMixins()") Download style_guide.scss
		vuer(name="circle")
</template>

<script>
import vuer from '@/components/vuer/vuer'
import {mapGetters} from 'vuex'

export default {
	name: 'style_guide_index_home',
	data(){
		return {
			names: ['circle', 'spin'],
			mixinRE: new RegExp("@mixin.*?end", "s"),
			allMixins: ""
		}
	},
	methods: {
		collectMixins(){
			this.allMixins = "";
			let style_guide_files = this.getFiles();

			for(var folder in style_guide_files){
				style_guide_files[folder].forEach(file=>{
					let component = this.getComponent(file);
					let source = component.source.replace(/\t/g,'  ');
					let result = source.match(this.mixinRE);
					this.allMixins += result!= null ? result + "\n\r" : "";
				});
			}
			this.download();
		},
		download(){
			var element = document.createElement('a');
			element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(this.allMixins));
			element.setAttribute('download', 'mixins.scss');

			element.style.display = 'none';
			document.body.appendChild(element);

			element.click();

			document.body.removeChild(element);
		},
		test(){
			return "data:text/plain;charset=utf-8,"+ encodeURIComponent(this.allMixins);
		}
	},
	computed: {
		...mapGetters(['getComponent', 'getFiles'])
	},
	components: {
		vuer
	}	
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	.container{width:600px;}
</style>
