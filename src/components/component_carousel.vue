<template lang="pug">
	transition( name="move_left_right" mode="out-in" )
		vuer(:name="file" v-if="file" :key="file")
</template>

<script>
import vuer from '@/components/vuer/vuer'
import {mapGetters} from 'vuex'

export default {
	name: 'component_carousel',
	data(){
		return {
			files: [],
			file: null,
			intervalPlayer: null
		}
	},
	events:{
		toggleplay(val){
			alert('from carousel');
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
	methods:{
		changeComponent(){
			this.file = this.files[Math.floor(Math.random()*this.files.length)];
			console.log(this.file);
		},
		toggle(state){
			console.log('here:' + state);
			if(!state){
				clearInterval(this.intervalPlayer);
				this.intervalPlayer = null;
			}
			else{
				this.changeComponent();
				this.intervalPlayer = setInterval(this.changeComponent, 5000);
			}
		}
	},
	watch:{
		isPlaying: function(state){
			this.toggle(state);
		}
	},
	computed: {
		...mapGetters({isPlaying: 'getPlayingState', getFiles: 'getFiles'})
	},
	components:{
		vuer
	}
}
</script>


<style lang="scss" scoped>

@import '../sass/colors';
@import '../sass/move_left_right';
</style>
