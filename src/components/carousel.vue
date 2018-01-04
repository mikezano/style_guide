<template lang="pug">
	div
		component_carousel(
			:isPlaying="isPlaying"
			v-on:carouselStop="carouselStop()"
			ref="cc")
		player( 
			:isPlaying="isPlaying"
			v-on:togglePlayer="togglePlayer()"
			v-on:goBack="goBack()"
			v-on:goForward="goForward()")
</template>

<script>
//https://forum.vuejs.org/t/best-way-to-send-event-to-child-component/7707/2
import player from '@/components/player'
import component_carousel from '@/components/component_carousel'

export default {

	data(){
		return {
			isPlaying: true,
			cc: null
		}
	},
	methods:{
		carouselStop(){
			alert('stop');
		},
		goBack(){
			this.$refs.cc.goBack();
		},
		goForward(){

		},
		togglePlayer(){
			debugger;
			console.log(this.cc);
			this.isPlaying = !this.isPlaying;
		}
	},
	components:{
		player,
		component_carousel
	}
}
</script>