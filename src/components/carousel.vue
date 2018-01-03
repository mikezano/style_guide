<template lang="pug">
	div
		component_carousel
		player(goBack="testGoBack()")
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