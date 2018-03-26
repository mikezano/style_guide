<template lang="pug">
	.vuer-transition
</template>

<script>
import {mapState} from 'vuex'

export default {
	name: 'vuer_transition',
	watch:{
		localEl: function(newVal, oldVal){
			console.log('change in item!');
		}
	},
	data () {
		return {
			scss: null,
			localEl: ""
		}
	},
	mounted(){
		console.log('vuer_transition');
	},
	computed: {
		...mapState(['el'])
	},
	watch: {
		el(newEl, oldEl){
			console.log('detected change', newEl, oldEl);
			let rect = newEl.getBoundingClientRect();
			//console.log(newEl.scrollTop);
			this.$el.style.position = "absolute";
			this.$el.style.top = (rect.top  + document.documentElement.scrollTop ) + "px";
			this.$el.style.left = rect.left + "px";
			this.$el.style.width =  rect.width + "px";
			this.$el.style.height = rect.height + "px";
			this.$el.style.backgroundColor = "hsla(0, 0%, 87%, .5)";
			this.$el.className.replace(" animated", "");
			this.$el.className += " animated";
			this.$el.addEventListener("animationend", this.hideEl);
		}
	},
	methods: {
		hideEl(){
			console.log("hide");
			this.$el.style.display = "none";
			this.$el.className.replace(" animated", "");
		}
	}
}
</script>

<style lang="scss" scoped>

.vuer-transition.animated{
	animation: grow .5s ease-in-out forwards;
}

@keyframes grow {
	100%{
		transform:scale(4.0);
	}
}
</style>
