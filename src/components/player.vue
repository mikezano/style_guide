<template lang="pug">
	.player
		span {{isPlaying}}
		button.player__backward
			icon(name="step-backward")
		button.player__toggle-play(@click="toggleIsPlaying()")
			icon(name="play", scale="2" v-if="!isPlaying")
			icon(name="pause", scale="2" v-else)
		button.player__forward
			icon(name="step-forward")
</template>

<script>
import {mapGetters, mapMutations, mapActions} from 'vuex'

export default {

	data(){
		return {

		}
	},
	computed: {
		...mapGetters({isPlaying: 'getPlayingState'}),
		//...mapMutations({toggleIsPlaying: 'toggleIsPlaying'}),
	},
	methods:{
		...mapActions({toggleIsPlaying: 'toggleIsPlaying'}),
		goBack(){
			this.$emit('goBack');
		},
		goForward(){
			this.$emit('goForward');
		},
		test(){
			alert('hello world');
		}
	}
}
</script>


<style lang="scss" scoped>

@import '../sass/colors';

.player{

	&__toggle-play, &__backward, &__forward{
		border:2px solid darken($vue_green, 10%);
		background-color: $vue_green;
		color:white;
		margin:2px;
	}

	&__toggle-play{
		padding:10px 20px;
	}
	&__backward, &__forward{
		padding:5px 10px;
	}
}
</style>
