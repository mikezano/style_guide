<template lang="pug">
	transition( name="move_left_right" mode="out-in" )
		vuer(:name="file" v-if="file" :key="file")
</template>

<script>
import vuer from '@/components/vuer/vuer'
import {mapGetters} from 'vuex'

export default {
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
	created(){
		this.$on('toggleplay', torf =>{
			alert('from callback');
		});
	},
	mounted(){
		let style_guide_files = this.getFiles();
		for(var folder in style_guide_files){
			style_guide_files[folder].forEach(file=>{
				this.files.push(file);
			});
		}
		console.log('yes')


		this.file = this.files[Math.floor(Math.random()*this.files.length)];
		this.intervalPlayer = setInterval(this.changeComponent, 5000);
	},
	methods:{
		changeComponent(){
			this.file = this.files[Math.floor(Math.random()*this.files.length)];
			console.log(this.file);
		},
		toggle(){
			if(this.isPaused){
				clearInterval(this.intervalPlayer);
				this.intervalPlayer = null;
			}
			else{
				this.changeComponent();
				this.intervalPlayer = setInterval(this.changeComponent, 5000);
			}
		}
	},
	computed: {
		...mapGetters(['getComponent', 'getFiles'])
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
