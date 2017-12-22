<template lang="pug">
	.container
		h1 Looking for interesting components to use in your app?
		rotate_down_btn(@click="collectMixins()")
		transition( name="move_left_right" mode="out-in" )
			vuer(:name="file" v-if="file" :key="file")

		button.player(@click="togglePlay()") 
			icon(name="play", scale="2" v-if="isPaused")
			icon(name="pause", scale="2" v-else)
</template>

<script>
import vuer from '@/components/vuer/vuer'
import rotate_down_btn from '@/components/rotate_down_btn'
import {mapGetters} from 'vuex'

export default {
	name: 'style_guide_index_home',
	data(){
		return {
			mixinRE: new RegExp("@mixin.*?end", "s"),
			allMixins: "",
			files: [],
			file: null,
			words: "Play",
			intervalPlayer: null,
			isPaused: false
		}
	},
	mounted(){
		let style_guide_files = this.getFiles();
		for(var folder in style_guide_files){
			style_guide_files[folder].forEach(file=>{
				this.files.push(file);
			});
		}

		this.file = this.files[Math.floor(Math.random()*this.files.length)];
		this.intervalPlayer = setInterval(this.changeComponent, 5000);
	},
	methods: {
		changeComponent(){
			this.file = this.files[Math.floor(Math.random()*this.files.length)];
			console.log(this.file);
		},
		togglePlay(){
			
			this.isPaused = !this.isPaused;
			if(this.isPaused){
				clearInterval(this.intervalPlayer);
				this.intervalPlayer = null;
			}
			else{
				this.changeComponent();
				this.intervalPlayer = setInterval(this.changeComponent, 5000);
			}
		},
		collectMixins(){
			this.allMixins = "";
			this.files.forEach(file=>{
				let component = this.getComponent(file);
				let source = component.source.replace(/\t/g,'  ');
				let result = source.match(this.mixinRE);
				this.allMixins += result!= null ? result + "\n\r" : "";
			});
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
		vuer,
		rotate_down_btn
	}	
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	@import '../../sass/move_left_right';
	@import '../../sass/colors';
	.container{width:600px;}
	.player{
		border:4px solid darken($vue_green, 10%);
		background-color: $vue_green;
		color:white;
		padding:10px 20px;
	}
</style>
