<template lang="pug">
	.vuer-transition
</template>

<script>
import {mapMutations, mapState} from 'vuex'

export default {
	name: 'vuer_transition',
	data () {
		return {
			vuer: null,
		}
	},
	mounted(){
		console.log('vuer_transition');

	},
	computed: {
		...mapMutations(['toggleIsTransitioning']),
		...mapState(['el', 'exampleEl'])
	},
	watch: {
		el(newEl, oldEl){

			if(newEl == null) return;

			console.log('Example El: ', this.exampleEl);

			this.$store.commit('toggleIsTransitioning');//true
			let rect = newEl.getBoundingClientRect();
			
			if(this.vuer)
				this.$el.removeChild(this.vuer);

			this.$el.appendChild(newEl.cloneNode(true));

			this.$el.style.display = "block";
			this.$el.style.position = "fixed";
			this.$el.style.top = (rect.top ) + "px";
			this.$el.style.left = rect.left + "px";
			this.$el.classList.add('move-up');

			this.vuer = this.$el.querySelectorAll(".vuer")[0];
			this.vuer.className += " fade-out";			
			this.vuer.addEventListener("animationend", this.hideEl);
		}
	},
	methods: {
		cleanUp(){
			
		},
		hideEl(){
			this.$el.style.display = "none";
			this.$el.classList.remove('move-up');
			this.vuer.classList.remove('fade-out');
			//this.vuer.removeEventListener("animationend",this.hide);
			this.$store.commit('toggleIsTransitioning');//false
		}
	}
}
</script>

<style lang="scss">

.move-up{
	animation: moveUp .5s ease-in-out forwards;
}
.fade-out div[class^='vuer__']{
	animation: fadeOut 1s ease-in-out forwards;
}

@keyframes fadeOut {
	100%{
		opacity:0;
	}
}

@keyframes moveUp {
	100%{
		top:76px;
	}
}
</style>

<style lang="scss" scoped>


</style>
