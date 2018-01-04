<template lang="pug">
	transition( name="move_left_right" mode="out-in" )
		vuer(:name="file" v-if="file" :key="file")
</template>

<script>
import vuer from '@/components/vuer/vuer'
import {EventBus} from '../event_bus'
import {mapGetters} from 'vuex'

export default {
	name: 'component_carousel',
	data(){
		return {
			files: [],
			file: null,
			intervalPlayer: null,
			file_carousel_list: [],
			file_carousel_index: 0
		}
	},
	props: ['isPlaying'],
	events:{
		toggleplay(val){
			alert('from carousel');
		}
	},
	created(){
		EventBus.$on('bam', ()=>{
			debugger;
		});
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
		goBack(){
			debugger;
			this.toggle(false);
			this.file_carousel_index = this.file_carousel_index == 0 ? 0 : this.file_carousel_index--;
			let file = this.file_carousel_list[this.file_carousel_index];
			this.updateList(file);
		},
		selectRandomComponent(){
			return this.files[Math.floor(Math.random()*this.files.length)];
		},
		changeComponent(){
			let file = this.selectRandomComponent();
			this.updateList(file);
		},
		updateList(file){
			if(this.file_carousel_list.length > 5){
				this.file_carousel_list = this.file_carousel_list.splice(0,1);
			}
			debugger;
			this.file_carousel_list.push(file);
			this.file_carousel_index = this.file_carousel_list.length - 1;

			this.file = file;
		},
		toggle(state){
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
		...mapGetters({getFiles: 'getFiles'})
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
