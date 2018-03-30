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

			if(this.vuer != null){
				this.$el.removeChild(this.vuer);
			}

			this.vuer = newEl; //vuer is the fromEl
			
			this.$el.appendChild(this.vuer.cloneNode(true));
			this.$el.style.display = "block";
			this.$el.style.position = "fixed";

			let rect = this.vuer.getBoundingClientRect();
			this.$el.style.top = rect.top + "px";
			this.$el.style.left = rect.left + "px";

			this.vuerFader = this.$el.querySelectorAll(".vuer__fader")[0];
			this.vuerFader.addEventListener("animationend", this.endTransitionFromEl);

			//start animations by adding classes
			this.$el.classList.add('move-up');
			this.vuerFader.classList.add('fade-out');

			this.$store.commit('toggleIsTransitioning');//true
		}
	},
	methods: {
		cleanUp(){
			
		},
		endTransitionFromEl(e){
			console.log('endTransitionFromEl');
			let elHeight = this.$el.getBoundingClientRect().height + "px";
			let fromHeight = this.vuerFader.getBoundingClientRect().height + "px";
			let toHeight = this.toEl.getBoundingClientRect().height + "px";

			console.log('el height', elHeight);
			console.log('fromEl height', fromHeight);
			console.log('toEl height:', toHeight);

			this.vuer = this.$el.querySelectorAll(".vuer")[0];
			this.vuerFader.removeEventListener("animationend", this.endTransitionFromEl);
			this.vuer.addEventListener("animationend", this.endTransitionToEl);

			var idx = document.styleSheets[0].cssRules.length;
			document.styleSheets[0].insertRule(`@keyframes grow {0%{height:${elHeight};}100%{height:${toHeight};}}`,idx);
			this.vuer.classList.add('growIt');

			//this.$store.commit('toggleIsTransitioning');//false
		},
		endTransitionToEl(e){
			console.log('endTransitionToEl');
			if(e.target != this.vuer) return;
			console.log('endEl', e);
			 this.$el.style.display = "none";
			 this.$el.classList.remove('move-up');
			 this.$el.classList.remove('fade-out');
			 this.vuer.classList.remove('grow');

			//this.vuer.removeEventListener("animationend", this.endEl);


			this.$store.commit('toggleIsTransitioning');//false
		}
	}
}
</script>

<style lang="scss">

.growIt{
	animation: grow .5s ease-in-out forwards;
}
.move-up{
	animation: moveUp .5s cubic-bezier(.32,1,.48,.98) forwards;
}
// .fade-out div[class^='vuer__']{
// 	animation: fadeOut 1s ease-in-out forwards;
// }
.vuer__fader.fade-out{
	animation: fadeOut .5s cubic-bezier(.32,1,.48,.98) forwards;
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
