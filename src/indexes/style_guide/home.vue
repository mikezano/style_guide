<template lang="pug">
	.container
		.title_logos
			img(src="./../../assets/css3.svg" width=50 height=50)
			icon(name="plus", scale="1")
			img(src="./../../assets/sass.svg" width=50 height=50)
		.title_of_site
			//span.dot .
			//span.ads AD&S
			span.left_brace {
			span.style STYLE
			span.colon :
			span.g G
			span.ui UI
			span.de DE
			//span.semi-colon ;
			span.right_brace }
		h1 
			span Looking for creative components to add into your 
			span.ui UI
			span.question_mark ?
		div(@click="collectMixins()")
			rotate_down_btn

		//component_carousel
		//player
		carousel

		//- button
		//- 	icon(name="step-backward")
		//- button.player(@click="togglePlay()")
		//- 	icon(name="play", scale="2" v-if="isPaused")
		//- 	icon(name="pause", scale="2" v-else)
		//- button
		//- 	icon(name="step-forward")
</template>

<script>
import {mapGetters} from 'vuex'
import rotate_down_btn from '@/components/rotate_down_btn'
import player from '@/components/player'
import component_carousel from '@/components/component_carousel'
import carousel from '@/components/carousel'

export default {
	name: 'style_guide_index_home',
	data(){
		return {
			files: [],
			mixinRE: new RegExp("@mixin.*?end", "s"),
			allMixins: "",
			words: "Play",
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
	},
	methods: {
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
			element.setAttribute('download', 'style_guide.scss');

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
		rotate_down_btn,
		player,
		component_carousel,
		carousel
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	@import '../../sass/colors';
	.container{width:600px;}
	// .player{
	// 	border:4px solid darken($vue_green, 10%);
	// 	background-color: $vue_green;
	// 	color:white;
	// 	padding:10px 20px;
	// }
	.ui{color:$vue_green;}

	.title_of_site{
		font-size:60px;
		font-weight:bold;
		color:$vue_green_dark;
		.dot, .left_brace, .right_brace,
		.colon, .semi-colon{
			color:#aaa;
		}
		.ui{
			color:$vue_green;
			font-size:70px;	
		}
		.style{color:$vue_green_dark;}
		
	}

	.title_logos{
		display: flex;
		align-items: center;
		justify-content: center;
		.fa-icon{
			padding:0 10px;
		}
	}
</style>
