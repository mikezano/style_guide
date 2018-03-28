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
			//this.$el.style.height = this.exampleEl.getBoundingClientRect().height + "px";


			this.vuer = this.$el.querySelectorAll(".vuer")[0];
			this.vuer.className += " fade-out";
			console.log("how many times???");
			this.vuer.addEventListener("animationend", this.hideEl);
		}
	},
	methods: {
		cleanUp(){
			
		},
		hideEl(){
			console.log(this.exampleEl.getBoundingClientRect().height + "px");
			let height = this.exampleEl.getBoundingClientRect().height + "px";
			//this.vuer.style.height = height;
			console.log('height: ', this.vuer.style.height);
			//this.$el.style.display = "none";
			//this.$el.classList.remove('move-up');
			//this.vuer.classList.remove('fade-out');
			var idx = document.styleSheets[0].cssRules.length;
			document.styleSheets[0].insertRule(`@keyframes grow {100%{height:${height};}}`,idx);
			debugger;
			this.vuer.classList.add('grow');
			//this.vuer.removeEventListener("animationend",this.hide);
			this.$store.commit('toggleIsTransitioning');//false
		}
	}
}
</script>

<style lang="scss">

.grow{
	animation: grow 10.5s ease-in-out forwards;
}
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
