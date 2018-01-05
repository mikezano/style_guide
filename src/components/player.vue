<template lang="pug">
	.player
		button.player__backward(@click="goBack()")
			icon(name="step-backward")
		button.player__toggle-play(@click="togglePlayer()")
			icon(name="play", scale="2" v-if="!isPlaying")
			icon(name="pause", scale="2" v-else)
		button.player__forward(@click="goForward()")
			icon(name="step-forward")
</template>

<script>
import {mapGetters, mapMutations, mapActions} from 'vuex'
import {EventBus} from '../event_bus'

export default {

	data(){
		return {

		}
	},
	props: ['isPlaying'],
	methods:{
		togglePlayer(){
			this.$emit('togglePlayer');
		},
		goBack(){
			this.$emit('goBack');
		},
		goForward(){
			this.$emit('goForward');
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
