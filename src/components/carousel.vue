<template lang="pug">
	div
		component_carousel
		player( :isPlaying="isPlaying" togglePlayer="togglePlayer()")
</template>

<script>
import player from '@/components/player'
import component_carousel from '@/components/component_carousel'

export default {

	data(){
		return {
			isPlaying: true
		}
	},
	methods:{
		testGoBack(){
			alert('went back');
		},
		togglePlayer(){
			alert('h');
		}
	},
	components:{
		player,
		component_carousel
	}
}
</script>