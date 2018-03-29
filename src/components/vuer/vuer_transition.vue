<template lang="pug">
	.vuer-transition
</template>

<script>
import {mapMutations, mapState} from 'vuex'

export default {
	name: 'vuer_transition',
	data () {
		return {
			vuerFader: null,
			vuer: null
		}
	},
	mounted(){
		console.log('vuer_transition');

	},
	computed: {
		...mapMutations(['toggleIsTransitioning']),
		...mapState(['fromEl', 'toEl'])
	},
	watch: {
		fromEl(newEl, oldEl){
			if(newEl == null) return;

			console.log('toEl: ', this.toEl);

			this.$store.commit('toggleIsTransitioning');//true
			let rect = newEl.getBoundingClientRect();
			
			if(this.vuerFader)
				this.$el.removeChild(this.vuerFader);

			this.$el.appendChild(newEl.cloneNode(true));
			this.$el.style.display = "block";
			this.$el.style.position = "fixed";
			this.$el.style.top = (rect.top ) + "px";
			this.$el.style.left = rect.left + "px";
			this.$el.classList.add('move-up');
			//this.$el.style.height = this.exampleEl.getBoundingClientRect().height + "px";


			this.vuerFader = this.$el.querySelectorAll(".vuer__fader")[0];
			this.vuerFader.addEventListener("animationend", this.transitionEl);
			this.vuerFader.classList.add('fade-out');
		}
	},
	methods: {
		cleanUp(){
			
		},
		transitionEl(e){
			let fromHeight = this.vuerFader.getBoundingClientRect().height + "px";
			let toHeight = this.toEl.getBoundingClientRect().height + "px";

			console.log('fromEl height', fromHeight);
			console.log('toEl height:', toHeight);

			this.vuerFader.removeEventListener("animationend", this.transitionEl);
			this.vuerFader.classList.remove('fade-out');

			this.vuer = this.$el.querySelectorAll(".vuer")[0];
			this.vuer.addEventListener("animationend", this.endEl);

			var idx = document.styleSheets[0].cssRules.length;
			document.styleSheets[0].insertRule(`@keyframes grow {0%{height:${fromHeight};}100%{height:${toHeight};}}`,idx);
			this.vuer.classList.add('growIt');

			//this.vuer.removeEventListener("animationend",this.hide);
			//this.$store.commit('toggleIsTransitioning');//false
		},
		endEl(e){
			console.log('endEl', e);
			// this.$el.style.display = "none";
			// this.$el.classList.remove('move-up');
			// this.$el.classList.remove('fade-out');
			// this.vuer.classList.remove('grow');

			//this.vuer.removeEventListener("animationend", this.endEl);


			//this.$store.commit('toggleIsTransitioning');//false
		}
	}
}
</script>

<style lang="scss">

.growIt{
	animation: grow 1s ease-in-out forwards;
}
.move-up{
	animation: moveUp 1s ease-in-out forwards;
}
// .fade-out div[class^='vuer__']{
// 	animation: fadeOut 1s ease-in-out forwards;
// }
.vuer__fader.fade-out{
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
