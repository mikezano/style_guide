<template lang="pug">
	div
		component_carousel
		player( :isPlaying="isPlaying")
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
		}
	},
	components:{
		player,
		component_carousel
	}
}
</script>